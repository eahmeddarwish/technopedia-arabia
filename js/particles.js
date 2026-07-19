/* ==========================================================================
   TECHNOPEDIA ARABIA — lightweight particle network background
   Pure canvas, no external libs. Mouse-reactive. Respects prefers-reduced-motion.
   ========================================================================== */

(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || !canvas.getContext) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height, dpr;
  let mouse = { x: null, y: null, active: false };
  const isTouch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const COUNT_DIVISOR = isTouch ? 24000 : 15000;
  const LINK_DIST = 130;
  const MOUSE_RADIUS = 150;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = window.innerWidth * dpr;
    height = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / COUNT_DIVISOR));
    particles = Array.from({ length: count }, createParticle);
  }

  const PALETTE = [
    { r: 249, g: 115, b: 22 },  // orange (accent)
    { r: 37, g: 99, b: 235 },   // blue (accent-2)
  ];

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35 * dpr,
      vy: (Math.random() - 0.5) * 0.35 * dpr,
      r: (Math.random() * 1.4 + 0.6) * dpr,
      c: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    };
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // gentle mouse interaction — nearby particles drift away from the cursor
      if (mouse.active && !isTouch) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = MOUSE_RADIUS * dpr;
        if (dist < radius && dist > 0.01) {
          const force = (1 - dist / radius) * 0.55;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c.r}, ${p.c.g}, ${p.c.b}, 0.65)`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = LINK_DIST * dpr;
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.32;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(${a.c.r}, ${a.c.g}, ${a.c.b}, ${alpha})`);
          grad.addColorStop(1, `rgba(${b.c.r}, ${b.c.g}, ${b.c.b}, ${alpha})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // draw a soft glow at the cursor position for extra liveliness
    if (mouse.active && !isTouch) {
      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS * dpr);
      glow.addColorStop(0, "rgba(249,115,22,0.08)");
      glow.addColorStop(1, "rgba(249,115,22,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!reduceMotion) requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener(
    "mousemove",
    (e) => {
      mouse.x = e.clientX * dpr;
      mouse.y = e.clientY * dpr;
      mouse.active = true;
    },
    { passive: true }
  );
  window.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  resize();

  if (!reduceMotion) {
    requestAnimationFrame(step);
  } else {
    step(); // draw a single static frame
  }
})();
