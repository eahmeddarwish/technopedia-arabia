import { useEffect, useRef } from "react";

/** Lightweight animated PCB traces + abstract tech shapes (Arduino / RPi / Python). */
export function PCBBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number };
    type Trace = { pts: Node[]; progress: number; speed: number; kind: "trace" | "arduino" | "rpi" | "python" };

    let traces: Trace[] = [];
    let pads: Node[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const snap = (v: number, grid = 24) => Math.round(v / grid) * grid;

    function randomTrace(): Trace {
      const startX = snap(rand(0, width));
      const startY = snap(rand(0, height));
      const pts: Node[] = [{ x: startX, y: startY }];
      const segs = 3 + Math.floor(Math.random() * 4);
      let x = startX;
      let y = startY;
      let horiz = Math.random() > 0.5;
      for (let i = 0; i < segs; i++) {
        const len = snap(rand(40, 160));
        if (horiz) x += Math.random() > 0.5 ? len : -len;
        else y += Math.random() > 0.5 ? len : -len;
        pts.push({ x, y });
        horiz = !horiz;
      }
      pads.push(pts[0], pts[pts.length - 1]);
      return { pts, progress: 0, speed: rand(0.003, 0.008), kind: "trace" };
    }

    // Abstract line-art shapes (not exact logos): rectangle outlines + accent pins
    function arduinoShape(): Trace {
      const w = rand(180, 260);
      const h = w * 0.55;
      const cx = rand(w, width - w);
      const cy = rand(h, height - h);
      const l = cx - w / 2, r = cx + w / 2, t = cy - h / 2, b = cy + h / 2;
      const pts: Node[] = [
        { x: l, y: t }, { x: r, y: t }, { x: r, y: b }, { x: l, y: b }, { x: l, y: t },
        // side pins (short zig)
        { x: l, y: t + 12 }, { x: l - 10, y: t + 12 },
        { x: l - 10, y: t + 28 }, { x: l, y: t + 28 },
        { x: l, y: t + 44 }, { x: l - 10, y: t + 44 },
      ];
      pads.push({ x: r, y: t }, { x: l, y: b });
      return { pts, progress: 0, speed: rand(0.004, 0.007), kind: "arduino" };
    }

    function rpiShape(): Trace {
      const w = rand(180, 240);
      const h = w * 0.65;
      const cx = rand(w, width - w);
      const cy = rand(h, height - h);
      const l = cx - w / 2, r = cx + w / 2, t = cy - h / 2, b = cy + h / 2;
      const pts: Node[] = [
        { x: l, y: t }, { x: r, y: t }, { x: r, y: b }, { x: l, y: b }, { x: l, y: t },
      ];
      // GPIO row as pads
      for (let i = 0; i < 10; i++) pads.push({ x: l + 14 + i * 14, y: t + 10 });
      return { pts, progress: 0, speed: rand(0.004, 0.007), kind: "rpi" };
    }

    function pythonShape(): Trace {
      // two interlocking rounded rectangles (approx with polyline)
      const s = rand(90, 140);
      const cx = rand(s * 2, width - s * 2);
      const cy = rand(s * 2, height - s * 2);
      const pts: Node[] = [
        // top blob
        { x: cx - s, y: cy - s }, { x: cx + s * 0.2, y: cy - s },
        { x: cx + s * 0.2, y: cy }, { x: cx + s, y: cy },
        { x: cx + s, y: cy + s * 0.6 }, { x: cx - s * 0.2, y: cy + s * 0.6 },
        { x: cx - s * 0.2, y: cy - s * 0.3 }, { x: cx - s, y: cy - s * 0.3 },
        { x: cx - s, y: cy - s },
      ];
      pads.push({ x: cx - s * 0.6, y: cy - s * 0.7 }, { x: cx + s * 0.6, y: cy + s * 0.3 });
      return { pts, progress: 0, speed: rand(0.003, 0.006), kind: "python" };
    }

    function buildOne(): Trace {
      const r = Math.random();
      if (r < 0.75) return randomTrace();
      if (r < 0.85) return arduinoShape();
      if (r < 0.93) return rpiShape();
      return pythonShape();
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(14, Math.max(6, Math.floor((width * height) / 60000)));
      traces = [];
      pads = [];
      for (let i = 0; i < target; i++) traces.push(buildOne());
    }

    function drawTrace(t: Trace) {
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
      const isShape = t.kind !== "trace";
      ctx!.strokeStyle = isShape ? "rgba(255,122,26,0.42)" : "rgba(255,122,26,0.32)";
      ctx!.lineWidth = isShape ? 1.4 : 1.1;
      ctx!.shadowColor = "rgba(255,122,26,0.5)";
      ctx!.shadowBlur = 6;
      ctx!.stroke();
      ctx!.shadowBlur = 0;
    }

    function drawPads() {
      for (const p of pads) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255,122,26,0.6)";
        ctx!.fill();
      }
    }

    let last = performance.now();
    function loop(now: number) {
      const dt = Math.min(50, now - last);
      last = now;
      ctx!.clearRect(0, 0, width, height);
      drawPads();
      for (const t of traces) {
        t.progress += t.speed * (dt / 16.67);
        if (t.progress >= 1) {
          if (Math.random() < 0.02) {
            const idx = traces.indexOf(t);
            traces[idx] = buildOne();
          } else {
            t.progress = 1;
          }
        }
        drawTrace(t);
      }
      raf = requestAnimationFrame(loop);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    if (!reduce) raf = requestAnimationFrame(loop);
    else {
      traces.forEach((t) => (t.progress = 1));
      ctx.clearRect(0, 0, width, height);
      drawPads();
      traces.forEach(drawTrace);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
