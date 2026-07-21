/**
 * TECHNOPEDIA ARABIA - Premium Interaction System (Production Ready v3.0 - Ultimate Polish)
 * Vanilla JS | High Performance | GPU Optimized | 60+ FPS Locked | Centralized Resize Manager
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     0. CENTRALIZED RESIZE & DIMENSIONS CACHE MANAGER
     ========================================================================== */
  const resizeCallbacks = [];
  let resizeTimeout;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCallbacks.forEach(callback => callback());
    }, 150); // Debounced resize handler for optimal performance
  }, { passive: true });


  /* ==========================================================================
     1. THEME TOGGLE & INITIALIZATION
     ========================================================================== */
  const themeToggle = document.querySelector('.theme-toggle');
  
  try {
    const savedTheme = localStorage.getItem('ta_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  } catch (e) {
    console.warn('LocalStorage unavailable');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      
      try {
        localStorage.setItem('ta_theme', newTheme);
      } catch (e) {}
    });
  }

  /* ==========================================================================
     2. MOBILE DRAWER & NAV TOGGLE (WITH ACCESSIBILITY)
     ========================================================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer a');

  if (navToggle && mobileDrawer) {
    const toggleMenu = (forceClose = false) => {
      const isOpen = forceClose ? false : !mobileDrawer.classList.contains('open');
      mobileDrawer.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => toggleMenu());

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(true));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        toggleMenu(true);
      }
    });

    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && 
          !mobileDrawer.contains(e.target) && 
          !navToggle.contains(e.target)) {
        toggleMenu(true);
      }
    });
  }

  /* ==========================================================================
     3. UNIFIED SCROLL LOOP (Progress Bar & Header Hide/Show)
     ========================================================================== */
  const progressBar = document.querySelector('.reading-progress');
  const header = document.querySelector('.site-header');
  
  let lastScrollY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const currentScrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // 1. Reading Progress
    if (progressBar && docHeight > 0) {
      const scrollLen = (currentScrollY / docHeight) * 100;
      progressBar.style.width = scrollLen + '%';
    }

    // 2. Header Hide / Show
    if (header) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('nav-hidden');
      } else {
        header.classList.remove('nav-hidden');
      }
    }
    lastScrollY = currentScrollY;

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ==========================================================================
     4. SCROLL SPY VIA INTERSECTION OBSERVER (Optimized for Scale)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .nav-links a[href^="index.html#"]');

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

  /* ==========================================================================
     5. REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     6. MAGNETIC BUTTONS (Centralized Resize & Cached Dimensions)
     ========================================================================== */
  if (window.matchMedia("(pointer: fine)").matches) {
    const magneticElements = document.querySelectorAll('.btn, .header-social a, .footer-social-icons a');

    magneticElements.forEach(elem => {
      let reqId = null;
      let rect = null;
      let centerX = 0;
      let centerY = 0;

      const updateCache = () => {
        rect = elem.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      };

      elem.addEventListener('mouseenter', updateCache, { once: true });
      resizeCallbacks.push(updateCache); // Register to central resize manager

      elem.addEventListener('mousemove', (e) => {
        if (!rect) updateCache();
        if (reqId) cancelAnimationFrame(reqId);

        reqId = requestAnimationFrame(() => {
          const pullX = (e.clientX - centerX) * 0.2;
          const pullY = (e.clientY - centerY) * 0.2;
          elem.style.transform = `translate(${pullX}px, ${pullY}px)`;
        });
      });

      elem.addEventListener('mouseleave', () => {
        if (reqId) cancelAnimationFrame(reqId);
        elem.style.transform = `translate(0px, 0px)`;
      });
    });
  }

  /* ==========================================================================
     7. 3D CARD TILT (Centralized Resize & Cached Dimensions)
     ========================================================================== */
  if (window.matchMedia("(pointer: fine)").matches) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      let tiltReq = null;
      let rect = null;

      const updateCardCache = () => {
        rect = card.getBoundingClientRect();
      };

      card.addEventListener('mouseenter', updateCardCache, { once: true });
      resizeCallbacks.push(updateCardCache); // Register to central resize manager

      card.addEventListener('mousemove', (e) => {
        if (!rect) updateCardCache();
        if (tiltReq) cancelAnimationFrame(tiltReq);

        tiltReq = requestAnimationFrame(() => {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          card.style.setProperty('--rotate-x', `${rotateX}deg`);
          card.style.setProperty('--rotate-y', `${rotateY}deg`);
          card.classList.add('is-tilted');
        });
      });

      card.addEventListener('mouseleave', () => {
        if (tiltReq) cancelAnimationFrame(tiltReq);
        card.style.setProperty('--rotate-x', `0deg`);
        card.style.setProperty('--rotate-y', `0deg`);
        card.classList.remove('is-tilted');
      });
    });
  }

  /* ==========================================================================
     8. DYNAMIC COUNTERS WITH SMOOTH EASING
     ========================================================================== */
  const counterElements = document.querySelectorAll('[data-counter]');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const target = +counter.getAttribute('data-counter');
      const duration = 2000;
      let startTime = null;

      const easeOutQuad = t => t * (2 - t);

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(easeOutQuad(progress) * target);
        
        counter.innerText = current;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.innerText = target;
        }
      };

      requestAnimationFrame(step);
    });
  };

  const statsRow = document.querySelector('.stats-row');
  if (statsRow) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersAnimated) {
        animateCounters();
        countersAnimated = true;
      }
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsRow);
  }

});