/* ==========================================================================
   TECHNOPEDIA ARABIA — lightweight particle network background
   Pure canvas, no external libs. Respects prefers-reduced-motion.
   ========================================================================== */

(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || !canvas.getContext) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height, dpr;
  let mouse = { x: null, y: null };
  const isTouch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const COUNT_DIVISOR = isTouch ? 24000 : 15000;
  const LINK_DIST = 130;

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
    { r: 249, g: 115, b: 22 },  // orange
    { r: 22, g: 163, b: 74 },   // green
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

    if (!reduceMotion) requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();

  if (!reduceMotion) {
    requestAnimationFrame(step);
  } else {
    step(); // draw a single static frame
  }
})();
