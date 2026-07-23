/* ==========================================================================
   TECHNOPEDIA ARABIA — shell.js
   المصدر الوحيد للهيدر + الدرج + الشريط السفلي + الفوتر في كل الصفحات الفرعية.
   عايز تعدّل رابط في القائمة؟ عدّله هنا مرة واحدة وهيتغيّر في كل الصفحات.
   يتحمّل قبل i18n.js و main.js عشان يلاقوا العناصر جاهزة.
   ========================================================================== */
(function () {
  var HEADER = `<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="brand" aria-label="Technopedia Arabia">
      <img src="assets/images/logo.png" alt="شعار Technopedia Arabia" width="44" height="44">
      <span class="brand-name"><span class="bn-line">Technopedia <span class="neon">Arabia</span></span>
        <small data-i18n="brand.tag">مهندس أنظمة مدمجة & AI</small></span>
    </a>

    <nav class="nav-links" aria-label="التنقل الرئيسي">
      <a href="index.html" data-i18n="nav.home">الرئيسية</a>
      <a href="index.html#about" data-i18n="nav.about">عني</a>
      <a href="projects.html" data-i18n="nav.projects">المشاريع</a>
      <a href="articles.html" data-i18n="nav.articles">الشروحات</a>
      <a href="index.html#contact" data-i18n="nav.contact">تواصل</a>
      <a href="videos.html" data-i18n="nav.videos">الفيديوهات</a>
      <a href="cv.html" data-i18n="nav.cv">السيرة الذاتية</a>
    </nav>

    <div class="header-actions">
      <a href="support.html" class="support-cta" aria-label="ادعمني" title="ادعمني">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <span class="sc-lbl" data-i18n="nav.support">ادعمني</span>
      </a>
      <div class="hdr-social">
        <a href="https://github.com/eahmeddarwish" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.1 2.8 5 3.1 5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.6 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21"/></svg></a>
        <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4"/></svg></a>
        <a href="https://wa.me/96541005052" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-1L3 20l1.2-5.4A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 20 11.5z"/></svg></a>
        <a href="mailto:e_ahmeddarwish@hotmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg></a>
      </div>
      <button type="button" class="icon-btn theme-toggle" aria-label="تبديل الوضع الليلي" title="تبديل الوضع">
        <svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button type="button" class="lang-btn" id="lang-btn" aria-label="Switch language"><span id="lang-lbl">EN</span></button>
      <button type="button" class="nav-toggle" id="nav-toggle" aria-label="القائمة" aria-expanded="false" aria-controls="nav-drawer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
</header>`;
  var DRAWER = `<div class="nav-drawer" id="nav-drawer">
  <div class="container">
    <a href="index.html" class="dl" data-i18n="nav.home">الرئيسية</a>
    <a href="index.html#about" class="dl" data-i18n="nav.about">عني</a>
    <a href="projects.html" class="dl" data-i18n="nav.projects">المشاريع</a>
    <a href="articles.html" class="dl" data-i18n="nav.articles">الشروحات</a>
    <a href="index.html#contact" class="dl" data-i18n="nav.contact">تواصل</a>
    <a href="videos.html" class="dl" data-i18n="nav.videos">الفيديوهات</a>
    <a href="cv.html" class="dl" data-i18n="nav.cv">السيرة الذاتية</a>
    <a href="support.html" class="dl" data-i18n="nav.support">ادعمني</a>
    <div class="dr-social">
      <a href="https://github.com/eahmeddarwish" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.1 2.8 5 3.1 5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.6 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21"/></svg></a>
      <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4"/></svg></a>
      <a href="https://wa.me/96541005052" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-1L3 20l1.2-5.4A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 20 11.5z"/></svg></a>
      <a href="mailto:e_ahmeddarwish@hotmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg></a>
    </div>
  </div>
</div>`;
  var APPBAR = `<nav class="app-bar" aria-label="تنقل الموبايل">
  <div class="container app-bar-inner">
    <a href="index.html" class="active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg><span data-i18n="nav.home">الرئيسية</span></a>
    <a href="projects.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg><span data-i18n="nav.projects">المشاريع</span></a>
    <a href="support.html" class="ab-support"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg><span data-i18n="nav.support">ادعمني</span></a>
    <a href="index.html#contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg><span data-i18n="nav.contact">تواصل</span></a>
  </div>
</nav>`;
  var FOOTER = `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="f-brand">
        <a href="index.html" class="f-brand-head">
          <img src="assets/images/logo.png" alt="شعار Technopedia Arabia" width="64" height="64" loading="lazy">
          <span class="f-brand-name-stack"><span>Technopedia</span><span class="neon">Arabia</span></span>
        </a>
        <p data-i18n="footer.tagline">أبني تقنية تستحق المشاركة، وأحوّل الأفكار المعقدة إلى واقع ذكي.</p>
      </div>
      <div class="f-col">
        <h4 data-i18n="footer.follow">تابعني</h4>
        <div class="f-social-list">
          <a class="f-social-row" href="https://github.com/eahmeddarwish" target="_blank" rel="noopener"><span class="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12.2C22 6.6 17.5 2 12 2z"/></svg></span><span>GitHub</span></a>
          <a class="f-social-row" href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noopener"><span class="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.5 3 5.5 7V24h-5v-6.3c0-1.5 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.3V24h-5z"/></svg></span><span>LinkedIn</span></a>
          <a class="f-social-row" href="https://wa.me/96541005052" target="_blank" rel="noopener"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-1L3 20l1.2-5.4A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 20 11.5z"/></svg></span><span>WhatsApp</span></a>
          <a class="f-social-row" href="mailto:e_ahmeddarwish@hotmail.com"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg></span><span>Email</span></a>
        </div>
      </div>
      <div class="f-col">
        <h4 data-i18n="footer.links">روابط سريعة</h4>
        <ul>
          <li><a href="index.html" data-i18n="nav.home">الرئيسية</a></li>
          <li><a href="projects.html" data-i18n="nav.projects">المشاريع</a></li>
          <li><a href="articles.html" data-i18n="nav.articles">الشروحات</a></li>
          <li><a href="videos.html" data-i18n="nav.videos">الفيديوهات</a></li>
          <li><a href="cv.html" data-i18n="nav.cv">السيرة الذاتية</a></li>
          <li><a href="support.html" data-i18n="nav.support">ادعمني</a></li>
        </ul>
      </div>
      <div class="f-col">
        <h4 data-i18n="footer.contact">تواصل مباشر</h4>
        <div class="f-contact-list">
          <div class="f-contact-row"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span data-i18n="footer.location">الكويت</span></div>
          <div class="f-contact-row"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg></span><a href="mailto:e_ahmeddarwish@hotmail.com" class="ltr">e_ahmeddarwish@hotmail.com</a></div>
          <div class="f-contact-row"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg></span><a href="tel:+96551105252" class="ltr">+965 5110 5252</a></div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">© <span id="year"></span> Technopedia Arabia — <span data-i18n="footer.rights">جميع الحقوق محفوظة</span></div>
  </div>
</footer>`;

  var body = document.body;
  if (!body || body.dataset.shellDone) return;
  body.dataset.shellDone = "1";

  /* على الصفحة الرئيسية الروابط بتبقى مراسي داخلية، وخارجها بتبقى index.html#... */
  var PAGE = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var HOME = (PAGE === "" || PAGE === "index.html");
  function localize(h) {
    if (!HOME) return h;
    return h
      .replace(/href="index\.html#/g, 'href="#')
      .replace(/href="index\.html"/g, 'href="#home"')
      .replace(/href="projects\.html"( class="dl")? data-i18n="nav\.projects"/g,
               'href="#projects"$1 data-i18n="nav.projects"')
      /* الرئيسية مالهاش لازمة وانت واقف عليها */
      .replace(/\s*<a href="#home"[^>]*data-i18n="nav\.home">[^<]*<\/a>/g, "");
  }

  /* --- شيل أي هيدر/درج/فوتر قديم قبل ما نحقن الجديد --- */
  ["header.site-header", ".mobile-drawer", ".nav-drawer", ".app-bar",
   "footer.site-footer", ".grain-overlay"].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { el.remove(); });
  });

  /* --- احقن --- */
  var anchor = document.getElementById("bg-canvas");
  body.insertAdjacentHTML("afterbegin", localize(HEADER) + localize(DRAWER));
  if (anchor) body.insertBefore(anchor, body.firstChild);
  var prog = document.querySelector(".reading-progress");
  if (!prog) body.insertAdjacentHTML("afterbegin", '<div class="reading-progress" aria-hidden="true"></div>');
  function mountFooter() {
    if (document.querySelector("footer.site-footer")) return;
    body.insertAdjacentHTML("beforeend", localize(FOOTER) + localize(APPBAR));
    wireShell();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFooter);
  } else {
    mountFooter();
  }


  (function () {
    if (window.TAModal) return;
    var ov = document.createElement("div");
    ov.className = "ta-modal-overlay";
    ov.innerHTML = '<div class="ta-modal"><button class="ta-modal-close" aria-label="إغلاق">&times;</button><div class="ta-modal-media"></div><div class="ta-modal-content"></div></div>';
    function close(){ ov.classList.remove("open"); ov.querySelector(".ta-modal-media").innerHTML=""; document.body.style.overflow=""; }
    function open(o){ ov.querySelector(".ta-modal-media").innerHTML=o.mediaHtml||""; ov.querySelector(".ta-modal-content").innerHTML=o.contentHtml||""; ov.classList.add("open"); document.body.style.overflow="hidden"; }
    ov.addEventListener("click", function(e){ if(e.target===ov) close(); });
    ov.querySelector(".ta-modal-close").addEventListener("click", close);
    document.addEventListener("keydown", function(e){ if(e.key==="Escape") close(); });
    function mount(){ if(!ov.parentNode) document.body.appendChild(ov); }
    if(document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
    window.TAModal = { open: open, close: close };
  })();

  var wired = false;
  function wireShell() {
    if (wired) return;      /* تتنده مرة واحدة بس مهما اتنادت */
    wired = true;
  /* --- القوائم ماتتطبعش (مهم لصفحة السيرة الذاتية) --- */
  ["header.site-header",".nav-drawer",".app-bar","footer.site-footer",".reading-progress"]
    .forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) el.classList.add("no-print");
    });

  /* --- الرابط النشط حسب الصفحة الحالية --- */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a, .app-bar a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").split("#")[0].toLowerCase();
    if (href && href === page) a.classList.add("active");
  });

  /* --- الدرج --- */
  var toggle = document.getElementById("nav-toggle");
  var drawer = document.getElementById("nav-drawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = drawer.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    function closeDrawer() {
      drawer.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });
    document.addEventListener("click", function (e) {
      if (drawer.classList.contains("open") &&
          !drawer.contains(e.target) && !toggle.contains(e.target)) closeDrawer();
    });
  }

  /* --- الشريط السفلي: يختفي مع النزول ويرجع مع الطلوع --- */
  var bar = document.querySelector(".app-bar");
  if (bar) {
    var last = window.pageYOffset, ticking = false;
    function upd() {
      var y = window.pageYOffset, dy = y - last;
      if (Math.abs(dy) > 6) {
        if (dy > 0 && y > 140) bar.classList.add("ab-hidden");
        else bar.classList.remove("ab-hidden");
        last = y;
      }
      ticking = false;
    }
    addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(upd); }
    }, { passive: true });
  }

  /* --- زرار اللغة (i18n.js هو اللي بيترجم فعلياً) --- */
  var langBtn = document.getElementById("lang-btn");
  function syncLangLabel() {
    var lbl = document.getElementById("lang-lbl");
    if (lbl) lbl.textContent = document.documentElement.getAttribute("lang") === "en" ? "ع" : "EN";
  }
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("lang") === "en" ? "ar" : "en";
      if (typeof setLang === "function") setLang(next);
      else {
        try { localStorage.setItem("ta_lang", next); } catch (e) {}
        location.reload();
      }
      setTimeout(syncLangLabel, 0);
    });
  }
  addEventListener("DOMContentLoaded", syncLangLabel);
  syncLangLabel();

  /* --- الكروت اللي بترسم بالـ JS بعد ما main.js شغّل مراقب الظهور --- */
  /* من غير ده بتفضل opacity:0 للأبد ومحدش بيشوفها */
  (function () {
    var io = ("IntersectionObserver" in window)
      ? new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
          });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.02 })
      : null;

    function claim(root) {
      (root.querySelectorAll ? root.querySelectorAll(".reveal:not(.in)") : []).forEach(function (el) {
        if (io) io.observe(el); else el.classList.add("in");
      });
      if (root.classList && root.classList.contains("reveal") && !root.classList.contains("in")) {
        if (io) io.observe(root); else root.classList.add("in");
      }
    }

    claim(document);
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (n) { if (n.nodeType === 1) claim(n); });
      });
    }).observe(document.body, { childList: true, subtree: true });

    /* شبكة أمان: أي عنصر فضل مخفي بعد ثانيتين يتعرض على طول */
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
        if (el.getBoundingClientRect().top < innerHeight * 1.5) el.classList.add("in");
      });
    }, 2000);
  })();

  /* --- السنة --- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  }

})();
