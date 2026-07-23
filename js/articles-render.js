/* ==========================================================================
   TECHNOPEDIA ARABIA — Articles (tutorials) list rendering (الشروحات)
   Mirrors projects-render.js. Homepage featured strip (#featured-articles-grid)
   + full articles.html page (#articles-filter-bar / #articles-grid).
   ========================================================================== */

const ARTICLE_CATEGORY_LIST = ["arduino", "raspberrypi", "python-ai", "digital", "electronics"];
let activeArticleFilter = "all";

function articleCardHtml(a, lang, i) {
  const tagsHtml = a.tags.map((tg) => `<span class="tag tag-cyan">${tg}</span>`).join("");
  return `
    <article class="card glass tilt reveal reveal-delay-${(i % 5) + 1}" data-article-id="${a.id}" data-categories="${a.categories.join(" ")}">
      <div class="card-media">
        <img src="${a.image}" alt="${a.title[lang]}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${a.title[lang]}</h3>
        <p>${a.desc[lang]}</p>
        <div class="card-tags">${tagsHtml}</div>
        <div class="card-links">
          <span class="art-read">${a.read[lang]}</span>
          <a href="article.html?id=${encodeURIComponent(a.id)}">${t("articles.readMore", lang)} →</a>
        </div>
      </div>
    </article>`;
}

function goToArticleDetail(id) {
  window.location.href = "article.html?id=" + encodeURIComponent(id);
}

function renderFeaturedArticles() {
  const grid = document.getElementById("featured-articles-grid");
  if (!grid || !window.articlesData) return;
  const lang = getStoredLang();
  const featured = window.articlesData.filter((a) => a.featured);
  grid.innerHTML = featured.map((a, i) => articleCardHtml(a, lang, i)).join("");
  attachArticleCardEvents(grid);
  if (window.refreshScrollReveal) window.refreshScrollReveal();
}

function renderArticlesPage() {
  const grid = document.getElementById("articles-grid");
  const filterBar = document.getElementById("articles-filter-bar");
  if (!grid || !window.articlesData) return;
  const lang = getStoredLang();

  if (filterBar && !filterBar.dataset.built) {
    const allBtn = `<button class="filter-btn active" data-filter="all">${t("projects.filterAll", lang)}</button>`;
    const catBtns = ARTICLE_CATEGORY_LIST.map(
      (c) => `<button class="filter-btn" data-filter="${c}">${t("artfilter." + c, lang)}</button>`
    ).join("");
    filterBar.innerHTML = allBtn + catBtns;
    filterBar.dataset.built = "1";
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeArticleFilter = btn.getAttribute("data-filter");
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      paintArticlesGrid(grid, lang);
    });
  } else if (filterBar) {
    filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
      const f = btn.getAttribute("data-filter");
      btn.textContent = f === "all" ? t("projects.filterAll", lang) : t("artfilter." + f, lang);
    });
  }

  paintArticlesGrid(grid, lang);
}

function paintArticlesGrid(grid, lang) {
  const list =
    activeArticleFilter === "all"
      ? window.articlesData
      : window.articlesData.filter((a) => a.categories.includes(activeArticleFilter));
  grid.innerHTML = list.length
    ? list.map((a, i) => articleCardHtml(a, lang, i)).join("")
    : `<p style="grid-column:1/-1;text-align:center;">${t("articles.empty", lang)}</p>`;
  attachArticleCardEvents(grid);
  if (window.refreshScrollReveal) window.refreshScrollReveal();
}

function attachArticleCardEvents(grid) {
  grid.querySelectorAll(".card").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      const id = card.getAttribute("data-article-id");
      if (id) goToArticleDetail(id);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedArticles();
  renderArticlesPage();
});
document.addEventListener("ta:langchange", () => {
  renderFeaturedArticles();
  renderArticlesPage();
});
