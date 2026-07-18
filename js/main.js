/* ==========================================================================
   TECHNOPEDIA ARABIA — core interactions
   Mobile nav, scroll reveal, card tilt, counters, copy-to-clipboard, modal.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveNav();
  initScrollReveal();
  initTilt();
  initCounters();
  initCopyButtons();
  initFooterYear();
  initReadingProgress();
  initSmartNavbar();
});

/* ---------------- Mobile nav drawer ---------------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  if (!toggle || !drawer) return;
  toggle.addEventListener("click", () => {
    drawer.classList.toggle("open");
    toggle.setAttribute("aria-expanded", drawer.classList.contains("open"));
  });
  drawer.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => drawer.classList.remove("open"))
  );
}

/* ---------------- Active nav link ---------------- */
function initActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-drawer a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

/* ---------------- Scroll reveal ---------------- */
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* Call again after dynamic content (projects/videos) is injected */
function refreshScrollReveal() {
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add("in-view");
  });
  initScrollReveal();
}
window.refreshScrollReveal = refreshScrollReveal;

/* ---------------- 3D tilt on cards ---------------- */
function initTilt() {
  const isTouch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if (isTouch) return;
  document.body.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".tilt");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  document.body.addEventListener(
    "mouseleave",
    (e) => {
      const card = e.target.closest && e.target.closest(".tilt");
      if (card) card.style.transform = "";
    },
    true
  );
  document.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".tilt");
    if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
  });
}

/* ---------------- Animated counters ---------------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.getAttribute("data-counter"));
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => io.observe(el));
}

/* ---------------- Copy to clipboard (bank details) ---------------- */
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetSel = btn.getAttribute("data-copy-target");
      const targetEl = targetSel ? document.querySelector(targetSel) : null;
      const text = targetEl ? targetEl.textContent.trim() : "";
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 1600);
    });
  });
}

/* ---------------- Reading progress bar ---------------- */
function initReadingProgress() {
  const bar = document.querySelector(".reading-progress");
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    bar.style.width = pct + "%";
    ticking = false;
  };
  update();
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );
  window.addEventListener("resize", update);
}

/* ---------------- Smart sticky navbar (hide on scroll down, show on scroll up) ---------------- */
function initSmartNavbar() {
  const header = document.querySelector(".site-header");
  const drawer = document.querySelector(".mobile-drawer");
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const HIDE_DELTA = 10;
  const REVEAL_ZONE = 90;

  const update = () => {
    const currentY = window.scrollY;
    const diff = currentY - lastY;
    const drawerOpen = drawer && drawer.classList.contains("open");

    if (!drawerOpen) {
      if (currentY <= REVEAL_ZONE) {
        header.classList.remove("nav-hidden");
      } else if (diff > HIDE_DELTA) {
        header.classList.add("nav-hidden");
      } else if (diff < -HIDE_DELTA) {
        header.classList.remove("nav-hidden");
      }
    }
    lastY = currentY;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );
}

/* ---------------- Footer year ---------------- */
function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------------- Generic Modal helper (used by projects/videos render) ---------------- */
window.TAModal = {
  overlay: null,
  ensure() {
    if (this.overlay) return this.overlay;
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-box glass" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        <div class="modal-media" hidden></div>
        <div class="modal-content"></div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) this.close();
    });
    overlay.querySelector(".modal-close").addEventListener("click", () => this.close());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
    this.overlay = overlay;
    return overlay;
  },
  open({ mediaHtml, contentHtml }) {
    const overlay = this.ensure();
    const media = overlay.querySelector(".modal-media");
    const content = overlay.querySelector(".modal-content");
    if (mediaHtml) {
      media.innerHTML = mediaHtml;
      media.hidden = false;
    } else {
      media.innerHTML = "";
      media.hidden = true;
    }
    content.innerHTML = contentHtml || "";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  },
  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => {
      const media = this.overlay.querySelector(".modal-media");
      if (media) media.innerHTML = ""; // stop video playback
    }, 300);
  },
};
