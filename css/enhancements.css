/* ==========================================================================
   TECHNOPEDIA ARABIA — ENHANCEMENTS (v2.0)
   ملف JS إضافي منفصل — مبيلمسش main.js / i18n.js / particles.js /
   projects-render.js / projects-data.js خالص.

   v2.0 — بعد تقارير المراجعة المعمارية:
   • Event Delegation بدل ربط حدث لكل عنصر
   • requestAnimationFrame + تخزين الأبعاد (منع Layout Thrashing)
   • Debounce للبحث + حالة "لا توجد نتائج"
   • نبض GitHub الحي
   • تحميل كسول للمعمل الحي (مفيش تكلفة قبل ما المستخدم يطلبه)
   ========================================================================== */

(function () {
  'use strict';

  const onReady = (fn) =>
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn)
      : fn();

  /* أداة تأخير عامة */
  const debounce = (fn, wait = 300) => {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  };

  onReady(() => {

    /* ======================================================================
       1. MOUSE GLOW — Event Delegation + rAF + أبعاد مخزّنة
          (الأبعاد بتتقاس مرة واحدة عند دخول الماوس، مش مع كل حركة)
       ====================================================================== */
    if (window.matchMedia('(pointer: fine)').matches) {
      let activeCard = null;
      let cachedRect = null;
      let queuedX = 0;
      let queuedY = 0;
      let framePending = false;

      const paintGlow = () => {
        framePending = false;
        if (!activeCard || !cachedRect) return;
        activeCard.style.setProperty('--mouse-x', (queuedX - cachedRect.left) + 'px');
        activeCard.style.setProperty('--mouse-y', (queuedY - cachedRect.top) + 'px');
      };

      document.addEventListener('pointerover', (e) => {
        const card = e.target.closest('.card.tilt');
        if (!card || card === activeCard) return;
        activeCard = card;
        cachedRect = card.getBoundingClientRect(); // قياس واحد فقط
      }, { passive: true });

      document.addEventListener('pointerout', (e) => {
        if (activeCard && !activeCard.contains(e.relatedTarget)) {
          activeCard = null;
          cachedRect = null;
        }
      }, { passive: true });

      document.addEventListener('pointermove', (e) => {
        if (!activeCard) return;
        queuedX = e.clientX;
        queuedY = e.clientY;
        if (!framePending) {
          framePending = true;
          requestAnimationFrame(paintGlow);
        }
      }, { passive: true });

      // إبطال الأبعاد المخزّنة لما التخطيط يتغيّر
      const invalidate = debounce(() => { cachedRect = null; activeCard = null; }, 150);
      window.addEventListener('resize', invalidate, { passive: true });
      window.addEventListener('scroll', invalidate, { passive: true });
    }

    /* ======================================================================
       2. المعمل الحي — تحميل كسول للـ iframe (مفيش تكلفة قبل الطلب)
       ====================================================================== */
    const labLaunch = document.getElementById('lab-launch');
    const labStage = document.getElementById('lab-stage');

    if (labLaunch && labStage) {
      labLaunch.addEventListener('click', () => {
        const src = labLaunch.getAttribute('data-src');
        if (!src || labStage.querySelector('iframe')) return;

        labStage.innerHTML =
          '<div class="lab-stage-loading">جارٍ تحميل النموذج داخل متصفحك…</div>';

        const frame = document.createElement('iframe');
        frame.src = src;
        frame.title = 'Visual Trigger Studio — نموذج CLIP يعمل داخل المتصفح';
        frame.setAttribute('allow', 'camera; microphone; fullscreen');
        frame.setAttribute('loading', 'lazy');
        frame.addEventListener('load', () => {
          const loader = labStage.querySelector('.lab-stage-loading');
          if (loader) loader.remove();
        });
        labStage.appendChild(frame);

        labLaunch.disabled = true;
        labLaunch.textContent = 'شغّال دلوقتي ↓';
      });
    }

    /* ======================================================================
       3. نبض GitHub الحي — أرقام حقيقية قابلة للتحقق بدل أرقام ثابتة
       ====================================================================== */
    const ghBox = document.getElementById('gh-pulse');

    if (ghBox) {
      const fmtSince = (iso) => {
        const diffH = (Date.now() - new Date(iso).getTime()) / 36e5;
        if (diffH < 1)  return 'من أقل من ساعة';
        if (diffH < 24) return 'من ' + Math.round(diffH) + ' ساعة';
        const d = Math.round(diffH / 24);
        if (d < 30)  return 'من ' + d + ' يوم';
        return 'من ' + Math.round(d / 30) + ' شهر';
      };

      const setText = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      fetch('https://api.github.com/users/eahmeddarwish/repos?per_page=100&sort=pushed')
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error('github ' + r.status))))
        .then((repos) => {
          if (!Array.isArray(repos) || !repos.length) return;

          const publicRepos = repos.filter((r) => !r.fork);
          const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
          const latest = repos
            .map((r) => r.pushed_at)
            .filter(Boolean)
            .sort()
            .pop();

          setText('gh-repos', publicRepos.length);
          setText('gh-stars', stars);
          if (latest) setText('gh-last', fmtSince(latest));
          ghBox.hidden = false;
        })
        .catch(() => {
          /* لو GitHub مردّش أو حصل rate limit — الصندوق يفضل مخفي بدل ما يبان فاضي */
        });
    }

    /* ======================================================================
       4. البحث والفلترة — Debounce + Event Delegation + حالة لا نتائج
       ====================================================================== */
    const searchInput = document.getElementById('knowledge-search-input');
    const tagsWrap = document.querySelector('.quick-tags-scroller');
    const resultsWrap = document.querySelector('.bento-media-grid');

    if (searchInput || tagsWrap) {
      const cards = () => document.querySelectorAll('.searchable-item');

      const emptyMsg = (() => {
        if (!resultsWrap) return null;
        const el = document.createElement('p');
        el.className = 'no-results-state';
        el.hidden = true;
        el.textContent = 'مفيش نتائج مطابقة — جرّب كلمة تانية.';
        resultsWrap.appendChild(el);
        return el;
      })();

      const applyFilter = () => {
        const q = (searchInput ? searchInput.value : '').toLowerCase().trim();
        const activeBtn = document.querySelector('.q-tag.active');
        const tag = activeBtn ? activeBtn.getAttribute('data-tag') : 'all';
        let visible = 0;

        cards().forEach((card) => {
          const cardTags = card.getAttribute('data-tags') || '';
          const text = card.textContent.toLowerCase();
          const okSearch = q === '' || text.includes(q) || cardTags.includes(q);
          const okTag = tag === 'all' || cardTags.includes(tag);
          const show = okSearch && okTag;
          card.classList.toggle('is-hidden', !show);
          if (show) visible++;
        });

        if (emptyMsg) emptyMsg.hidden = visible !== 0;
      };

      if (searchInput) {
        searchInput.addEventListener('input', debounce(applyFilter, 300));
      }

      if (tagsWrap) {
        // ربط واحد على العنصر الأب بدل ربط لكل زرار
        tagsWrap.addEventListener('click', (e) => {
          const btn = e.target.closest('.q-tag');
          if (!btn || !tagsWrap.contains(btn)) return;
          tagsWrap.querySelectorAll('.q-tag').forEach((b) => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
          applyFilter();
        });
      }
    }

    /* ======================================================================
       5. اختيار نوع المحادثة في فورم التواصل — Event Delegation
       ====================================================================== */
    const pathsWrap = document.querySelector('.conversation-paths-grid');
    const selectedPathInput = document.getElementById('selected-path-input');
    const userMessage = document.getElementById('user-message');

    if (pathsWrap && selectedPathInput) {
      pathsWrap.addEventListener('click', (e) => {
        const card = e.target.closest('.path-card');
        if (!card || !pathsWrap.contains(card)) return;

        pathsWrap.querySelectorAll('.path-card').forEach((c) => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('active');
        card.setAttribute('aria-pressed', 'true');

        selectedPathInput.value = card.getAttribute('data-path') || '';
        const ph = card.getAttribute('data-placeholder');
        if (ph && userMessage) userMessage.setAttribute('placeholder', ph);
      });
    }

    /* ======================================================================
       6. إغلاق المودالات — استهداف مباشر بدل المرور على الكل
       ====================================================================== */
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const openModal = document.querySelector('.knowledge-video-modal.active');
      if (!openModal) return;
      openModal.classList.remove('active');
      document.body.style.overflow = '';
      const iframe = openModal.querySelector('iframe');
      if (iframe) iframe.setAttribute('src', '');
    });

  });
})();
