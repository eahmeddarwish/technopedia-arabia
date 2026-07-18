/* ==========================================================================
   TECHNOPEDIA ARABIA — Individual project detail page renderer
   Reads ?id=<slug> from the URL and renders full project details.
   ========================================================================== */

function getProjectIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProjectDetail() {
  const root = document.getElementById("project-detail-root");
  const titleEl = document.getElementById("project-title");
  const titleTag = document.getElementById("project-title-tag");
  if (!root || !window.projectsData) return;

  const lang = typeof getStoredLang === "function" ? getStoredLang() : "ar";
  const id = getProjectIdFromUrl();
  const project = window.projectsData.find((p) => p.id === id);

  if (!project) {
    if (titleEl) titleEl.textContent = t("projects.notFound", lang);
    root.innerHTML = `<p style="text-align:center;">${t("projects.notFound", lang)}</p>`;
    return;
  }

  if (titleEl) titleEl.textContent = project.title[lang];
  if (titleTag) titleTag.textContent = `${project.title[lang]} — Technopedia Arabia`;

  const tagsHtml = project.tags.map((tg) => `<span class="tag tag-cyan">${tg}</span>`).join("");
  const linksHtml = [];
  if (project.demoUrl) linksHtml.push(`<a class="btn btn-primary" href="${project.demoUrl}" target="_blank" rel="noopener">${t("projects.viewDemo", lang)}</a>`);
  if (project.codeUrl) linksHtml.push(`<a class="btn btn-ghost" href="${project.codeUrl}" target="_blank" rel="noopener">${t("projects.viewCode", lang)}</a>`);

  root.innerHTML = `
    <div class="glass reveal" style="overflow:hidden;">
      <div class="card-media" style="aspect-ratio:16/9;">
        <img src="${project.image}" alt="${project.title[lang]}">
      </div>
      <div class="card-body" style="padding:34px;">
        <div class="card-tags">${tagsHtml}</div>
        <h2 style="margin-top:14px;">${project.title[lang]}</h2>
        <p style="font-size:16px; line-height:1.8;">${project.details[lang]}</p>
        ${linksHtml.length ? `<div class="modal-links" style="margin-top:22px;">${linksHtml.join("")}</div>` : ""}
      </div>
    </div>
  `;

  if (typeof window.refreshScrollReveal === "function") window.refreshScrollReveal();
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
document.addEventListener("ta:langchange", renderProjectDetail);
