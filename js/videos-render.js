/* ==========================================================================
   TECHNOPEDIA ARABIA — Videos rendering (homepage featured + full page)
   No YouTube API key needed: thumbnails + iframe embeds work with just the
   video ID (img.youtube.com for thumbnail, youtube-nocookie.com for embed).
   ========================================================================== */

function videoThumb(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function videoCardHtml(v, lang, i) {
  return `
    <article class="card glass tilt reveal reveal-delay-${(i % 5) + 1} video-card" data-video-id="${v.id}">
      <div class="card-media">
        <img src="${videoThumb(v.youtubeId)}" alt="${v.title[lang]}" loading="lazy">
        <div class="play-btn"><span class="circle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 7.5c0-1 1.1-1.6 2-1.1l7 4.5c.8.5.8 1.7 0 2.2l-7 4.5c-.9.5-2-.1-2-1.1V7.5z"/></svg></span></div>
      </div>
      <div class="card-body">
        <h3>${v.title[lang]}</h3>
        <p>${v.desc[lang]}</p>
      </div>
    </article>`;
}

function openVideoModal(v) {
  window.TAModal.open({
    mediaHtml: `<iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0" title="${v.title[getStoredLang()]}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    contentHtml: `<h3>${v.title[getStoredLang()]}</h3><p>${v.desc[getStoredLang()]}</p>`,
  });
}

function renderFeaturedVideos(limit = 3) {
  const grid = document.getElementById("featured-videos-grid");
  if (!grid) return;
  const lang = getStoredLang();
  const list = videosData.slice(0, limit);
  grid.innerHTML = list.map((v, i) => videoCardHtml(v, lang, i)).join("");
  attachVideoCardEvents(grid);
  if (window.refreshScrollReveal) window.refreshScrollReveal();
}

function renderVideosPage() {
  const grid = document.getElementById("videos-grid");
  if (!grid) return;
  const lang = getStoredLang();
  grid.innerHTML = videosData.map((v, i) => videoCardHtml(v, lang, i)).join("");
  attachVideoCardEvents(grid);
  if (window.refreshScrollReveal) window.refreshScrollReveal();
}

function attachVideoCardEvents(grid) {
  grid.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-video-id");
      const video = videosData.find((v) => v.id === id);
      if (video) openVideoModal(video);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedVideos();
  renderVideosPage();
});
document.addEventListener("ta:langchange", () => {
  renderFeaturedVideos();
  renderVideosPage();
});
