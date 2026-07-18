/* ==========================================================================
   TECHNOPEDIA ARABIA — Projects rendering (homepage featured + full page)
   ========================================================================== */

const CATEGORY_LIST = ["arduino", "raspberrypi", "python-ai", "robotics", "iot"];
let activeFilter = "all";

function projectCardHtml(p, lang, i) {
  const tagsHtml = p.tags.map((tg) => `<span class="tag tag-cyan">${tg}</span>`).join("");
  const links = [];
  if (p.demoUrl) links.push(`<a href="${p.demoUrl}" target="_blank" rel="noopener">${t("projects.viewDemo", lang)} →</a>`);
  if (p.codeUrl) links.push(`<a href="${p.codeUrl}" target="_blank" rel="noopener">${t("projects.viewCode", lang)} →</a>`);
  return `
    <article class="card glass tilt reveal reveal-delay-${(i % 5) + 1}" data-project-id="${p.id}" data-categories="${p.categories.join(" ")}">
      <div class="card-media">
        <img src="${p.image}" alt="${p.title[lang]}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-tags">${tagsHtml}</div>
        <h3>${p.title[lang]}</h3>
        <p>${p.desc[lang]}</p>
        ${links.length ? `<div class="card-links">${links.join("")}</div>` : ""}
      </div>
    </article>`;
}

function goToProjectDetail(id) {
  window.location.href = "project.html?id=" + encodeURIComponent(id);
}

function renderFeaturedProjects() {
  const grid = document.getElementById("featured-projects-grid");
  if (!grid) return;
  const lang = getStoredLang();
  const featured = projectsData.filter((p) => p.featured);
  grid.innerHTML = featured.map((p, i) => projectCardHtml(p, lang, i)).join("");
  attachProjectCardEvents(grid, lang);
  if (window.refreshScrollReveal) window.refreshScrollReveal();
}

function renderProjectsPage() {
  const grid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("projects-filter-bar");
  if (!grid) return;
  const lang = getStoredLang();

  if (filterBar && !filterBar.dataset.built) {
    const allBtn = `<button class="filter-btn active" data-filter="all">${t("projects.filterAll", lang)}</button>`;
    const catBtns = CATEGORY_LIST.map(
      (c) => `<button class="filter-btn" data-filter="${c}">${t("filter." + c, lang)}</button>`
    ).join("");
    filterBar.innerHTML = allBtn + catBtns;
    filterBar.dataset.built = "1";
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilter = btn.getAttribute("data-filter");
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      paintProjectsGrid(grid, lang);
    });
  } else if (filterBar) {
    // update filter button labels on language change, keep active state
    filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
      const f = btn.getAttribute("data-filter");
      btn.textContent = f === "all" ? t("projects.filterAll", lang) : t("filter." + f, lang);
    });
  }

  paintProjectsGrid(grid, lang);
}

function paintProjectsGrid(grid, lang) {
  const list =
    activeFilter === "all" ? projectsData : projectsData.filter((p) => p.categories.includes(activeFilter));
  grid.innerHTML = list.length
    ? list.map((p, i) => projectCardHtml(p, lang, i)).join("")
    : `<p style="grid-column:1/-1;text-align:center;">${t("projects.empty", lang)}</p>`;
  attachProjectCardEvents(grid, lang);
  if (window.refreshScrollReveal) window.refreshScrollReveal();
}

function attachProjectCardEvents(grid, lang) {
  grid.querySelectorAll(".card").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let demo/code links behave normally
      const id = card.getAttribute("data-project-id");
      if (id) goToProjectDetail(id);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProjects();
  renderProjectsPage();
});
document.addEventListener("ta:langchange", () => {
  renderFeaturedProjects();
  renderProjectsPage();
});
