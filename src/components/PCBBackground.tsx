import { useEffect, useRef } from "react";

/**
 * Hero background: particle network + abstract line-art shapes.
 * Reads accent color from CSS var --neon-rgb so it adapts to light/dark theme.
 */
export function PCBBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getRGB = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--neon-rgb")
        .trim();
      return v || "255, 122, 26";
    };
    let rgb = getRGB();
    const themeObserver = new MutationObserver(() => {
      rgb = getRGB();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });


    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number };
    type Shape = {
      pts: Node[];
      progress: number;
      speed: number;
      kind: "arduino" | "rpi" | "wifi" | "robot";
    };
    type Particle = { x: number; y: number; vx: number; vy: number };

    let shapes: Shape[] = [];
    let pads: Node[] = [];
    let particles: Particle[] = [];
    let linkDist = 120;

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    // ---------- Abstract shapes ----------
    function arduinoShape(): Shape {
      const w = rand(180, 260);
      const h = w * 0.55;
      const cx = rand(w, Math.max(w + 1, width - w));
      const cy = rand(h, Math.max(h + 1, height - h));
      const l = cx - w / 2, r = cx + w / 2, t = cy - h / 2, b = cy + h / 2;
      const pts: Node[] = [
        { x: l, y: t }, { x: r, y: t }, { x: r, y: b }, { x: l, y: b }, { x: l, y: t },
        { x: l, y: t + 12 }, { x: l - 10, y: t + 12 },
        { x: l - 10, y: t + 28 }, { x: l, y: t + 28 },
        { x: l, y: t + 44 }, { x: l - 10, y: t + 44 },
      ];
      pads.push({ x: r, y: t }, { x: l, y: b });
      return { pts, progress: 0, speed: rand(0.004, 0.007), kind: "arduino" };
    }

    function rpiShape(): Shape {
      const w = rand(180, 240);
      const h = w * 0.65;
      const cx = rand(w, Math.max(w + 1, width - w));
      const cy = rand(h, Math.max(h + 1, height - h));
      const l = cx - w / 2, r = cx + w / 2, t = cy - h / 2, b = cy + h / 2;
      const pts: Node[] = [
        { x: l, y: t }, { x: r, y: t }, { x: r, y: b }, { x: l, y: b }, { x: l, y: t },
      ];
      for (let i = 0; i < 10; i++) pads.push({ x: l + 14 + i * 14, y: t + 10 });
      return { pts, progress: 0, speed: rand(0.004, 0.007), kind: "rpi" };
    }

    // WiFi: three arcs + a base dot, approximated as polyline arcs
    function wifiShape(): Shape {
      const cx = rand(80, Math.max(81, width - 80));
      const cy = rand(80, Math.max(81, height - 80));
      const pts: Node[] = [];
      // three arcs of increasing radius, sampled left-to-right along top
      const radii = [22, 44, 66];
      for (const r of radii) {
        const steps = 14;
        for (let i = 0; i <= steps; i++) {
          const a = Math.PI + (Math.PI * i) / steps; // top half (π..2π)
          pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
        }
        // jump back to center via pad (rendered as pad only)
        pads.push({ x: cx - r, y: cy });
      }
      pads.push({ x: cx, y: cy + 6 });
      return { pts, progress: 0, speed: rand(0.005, 0.009), kind: "wifi" };
    }

    // Simple robot: square head, two eye pads, antenna dot
    function robotShape(): Shape {
      const s = rand(60, 90);
      const cx = rand(s * 2, Math.max(s * 2 + 1, width - s * 2));
      const cy = rand(s * 2, Math.max(s * 2 + 1, height - s * 2));
      const l = cx - s, r = cx + s, t = cy - s, b = cy + s;
      const pts: Node[] = [
        // antenna
        { x: cx, y: t - 22 }, { x: cx, y: t },
        // head
        { x: l, y: t }, { x: r, y: t }, { x: r, y: b }, { x: l, y: b }, { x: l, y: t },
        // mouth line
        { x: cx - s * 0.5, y: b - s * 0.35 }, { x: cx + s * 0.5, y: b - s * 0.35 },
      ];
      // eyes + antenna tip
      pads.push(
        { x: cx - s * 0.45, y: cy - s * 0.15 },
        { x: cx + s * 0.45, y: cy - s * 0.15 },
        { x: cx, y: t - 24 }
      );
      return { pts, progress: 0, speed: rand(0.004, 0.008), kind: "robot" };
    }

    function buildOne(): Shape {
      const r = Math.random();
      if (r < 0.28) return arduinoShape();
      if (r < 0.55) return rpiShape();
      if (r < 0.8) return wifiShape();
      return robotShape();
    }

    // ---------- Particles ----------
    function seedParticles() {
      const small = width < 640;
      const density = small ? 15000 : 11000;
      const count = Math.max(14, Math.min(54, Math.floor((width * height) / density)));
      linkDist = small ? 90 : 130;
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.18, 0.18),
        vy: rand(-0.18, 0.18),
      }));
    }

    function stepParticles(dt: number) {
      const k = dt / 16.67;
      for (const p of particles) {
        p.x += p.vx * k;
        p.y += p.vy * k;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        else if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        else if (p.y > height) { p.y = height; p.vy *= -1; }
      }
    }

    function drawParticles() {
      // dots
      ctx!.fillStyle = `rgba(${rgb},0.55)`;
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }
      // links
      const max = linkDist;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < max * max) {
            const alpha = (1 - Math.sqrt(d2) / max) * 0.35;
            ctx!.strokeStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
    }

    // ---------- Shape draw ----------
    function drawShape(t: Shape) {
      const totalLen = t.pts.reduce((acc, p, i) => {
        if (i === 0) return 0;
        const prev = t.pts[i - 1];
        return acc + Math.hypot(p.x - prev.x, p.y - prev.y);
      }, 0);
      const shown = totalLen * t.progress;
      let remaining = shown;

      ctx!.beginPath();
      ctx!.moveTo(t.pts[0].x, t.pts[0].y);
      for (let i = 1; i < t.pts.length; i++) {
        const p = t.pts[i];
        const prev = t.pts[i - 1];
        const segLen = Math.hypot(p.x - prev.x, p.y - prev.y);
        if (remaining >= segLen) {
          ctx!.lineTo(p.x, p.y);
          remaining -= segLen;
        } else {
          const ratio = remaining / segLen;
          ctx!.lineTo(prev.x + (p.x - prev.x) * ratio, prev.y + (p.y - prev.y) * ratio);
          break;
        }
      }
      ctx!.strokeStyle = `rgba(${rgb},0.42)`;
      ctx!.lineWidth = 1.4;
      ctx!.shadowColor = `rgba(${rgb},0.5)`;
      ctx!.shadowBlur = 6;
      ctx!.stroke();
      ctx!.shadowBlur = 0;
    }

    function drawPads() {
      for (const p of pads) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${rgb},0.6)`;
        ctx!.fill();
      }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = width < 640;
      const target = small ? 2 : Math.min(4, Math.max(2, Math.floor((width * height) / 240000)));
      shapes = [];
      pads = [];
      for (let i = 0; i < target; i++) shapes.push(buildOne());
      seedParticles();
    }

    let last = performance.now();
    function loop(now: number) {
      const dt = Math.min(50, now - last);
      last = now;
      ctx!.clearRect(0, 0, width, height);

      stepParticles(dt);
      drawParticles();

      drawPads();
      for (const t of shapes) {
        t.progress += t.speed * (dt / 16.67);
        if (t.progress >= 1) {
          if (Math.random() < 0.015) {
            const idx = shapes.indexOf(t);
            shapes[idx] = buildOne();
          } else {
            t.progress = 1;
          }
        }
        drawShape(t);
      }
      raf = requestAnimationFrame(loop);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    if (!reduce) raf = requestAnimationFrame(loop);
    else {
      shapes.forEach((t) => (t.progress = 1));
      ctx.clearRect(0, 0, width, height);
      drawParticles();
      drawPads();
      shapes.forEach(drawShape);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
    };

  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
    />
  );
}
