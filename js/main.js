/* ==========================================================================
     3. UNIFIED SCROLL LOOP (Progress Bar & Crafted Header State)
     ========================================================================== */
  const progressBar = document.querySelector('.reading-progress');
  const header = document.getElementById('site-header');
  
  let ticking = false;

  const onScroll = () => {
    const currentScrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // 1. Reading Progress
    if (progressBar && docHeight > 0) {
      const scrollLen = (currentScrollY / docHeight) * 100;
      progressBar.style.width = scrollLen + '%';
    }

    // 2. Crafted Sticky Header State (Activates after 40px scroll)
    if (header) {
      if (currentScrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ==========================================================================
     4. SCROLL SPY VIA INTERSECTION OBSERVER
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .nav-links a[href^="index.html#"], .mobile-nav a[href^="#"], .mobile-nav a[href^="index.html#"]');

  const spyOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === `#${id}` || href === `index.html#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, spyOptions);

  sections.forEach(section => spyObserver.observe(section));