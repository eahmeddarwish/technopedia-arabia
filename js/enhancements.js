/* ==========================================================================
   TECHNOPEDIA ARABIA — ENHANCEMENTS (v1.0)
   ملف JS إضافي منفصل — مبيلمسش main.js / i18n.js / particles.js /
   projects-render.js / projects-data.js خالص. بيضيف بس سلوك الأقسام الجديدة.

   إزاي تحطه: انسخ الملف ده جوه مجلد js/ في الريبو (js/enhancements.js)
   وضيف سطر واحد آخر <script> قبل </body> بعد main.js:
   <script src="js/enhancements.js" defer></script>
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MOUSE GLOW على كروت المشاريع (بيشتغل مع main.js من غير تعارض،
        main.js بيتحكم في الـ tilt وده بيتحكم بس في مكان الإضاءة)
     ========================================================================== */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.card.tilt').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });
  }

  /* ==========================================================================
     2. KNOWLEDGE HUB — بحث + فلترة بس على المحتوى الموجود فعليًا في HTML
        (زي ما هو الحال في باقي الموقع — المحتوى في HTML، مش JS)
     ========================================================================== */
  const searchInput = document.getElementById('knowledge-search-input');
  const quickTags = document.querySelectorAll('.q-tag');
  const searchableCards = document.querySelectorAll('.searchable-item');

  const filterKnowledge = (query, tagFilter) => {
    const q = (query || '').toLowerCase().trim();
    searchableCards.forEach((card) => {
      const cardTags = card.getAttribute('data-tags') || '';
      const cardText = card.textContent.toLowerCase();
      const matchesSearch = q === '' || cardText.includes(q) || cardTags.includes(q);
      const matchesTag = tagFilter === 'all' || cardTags.includes(tagFilter);
      card.classList.toggle('is-hidden', !(matchesSearch && matchesTag));
    });
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeTagBtn = document.querySelector('.q-tag.active');
      filterKnowledge(e.target.value, activeTagBtn ? activeTagBtn.getAttribute('data-tag') : 'all');
    });
  }

  quickTags.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      quickTags.forEach((b) => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      filterKnowledge(searchInput ? searchInput.value : '', target.getAttribute('data-tag'));
    });
  });

  /* ==========================================================================
     3. VIDEO MODAL FACTORY (مشترك بين Knowledge Hub والشهادات)
     ========================================================================== */
  const setupVideoModal = (triggerEl, modalEl, backdropEl, closeBtnEl, iframeEl) => {
    if (!triggerEl || !modalEl) return;

    const openModal = () => {
      const videoUrl = triggerEl.getAttribute('data-video-url') || '';
      if (!videoUrl) return; // متفتحش المودال لو لسه مفيش رابط فيديو حقيقي متحط
      modalEl.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (iframeEl) iframeEl.setAttribute('src', videoUrl);
    };

    const closeModal = () => {
      modalEl.classList.remove('active');
      document.body.style.overflow = '';
      if (iframeEl) iframeEl.setAttribute('src', '');
    };

    triggerEl.addEventListener('click', openModal);
    triggerEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });

    if (backdropEl) backdropEl.addEventListener('click', closeModal);
    if (closeBtnEl) closeBtnEl.addEventListener('click', closeModal);
  };

  setupVideoModal(
    document.getElementById('open-video-modal'),
    document.getElementById('video-modal'),
    document.getElementById('modal-backdrop'),
    document.getElementById('modal-close'),
    document.getElementById('youtube-iframe')
  );

  setupVideoModal(
    document.getElementById('open-testimonial-video'),
    document.getElementById('testimonial-video-modal'),
    document.getElementById('t-modal-backdrop'),
    document.getElementById('t-modal-close'),
    document.getElementById('t-youtube-iframe')
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.knowledge-video-modal.active').forEach((modal) => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const iframe = modal.querySelector('iframe');
        if (iframe) iframe.setAttribute('src', '');
      });
    }
  });

  /* ==========================================================================
     4. CONTACT — PATH SELECTOR (اختيار نوع المحادثة)
     ========================================================================== */
  const pathCards = document.querySelectorAll('.path-card');
  const selectedPathInput = document.getElementById('selected-path-input');
  const userMessageTextarea = document.getElementById('user-message');

  if (pathCards.length && selectedPathInput && userMessageTextarea) {
    const activatePath = (card) => {
      pathCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      selectedPathInput.value = card.getAttribute('data-path') || '';
      const placeholder = card.getAttribute('data-placeholder');
      if (placeholder) userMessageTextarea.setAttribute('placeholder', placeholder);
    };

    pathCards.forEach((card) => {
      card.addEventListener('click', (e) => activatePath(e.currentTarget));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activatePath(e.currentTarget);
        }
      });
    });
  }

});
