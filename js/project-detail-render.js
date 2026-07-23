/* ==========================================================================
   TECHNOPEDIA ARABIA — Individual project detail page renderer
   Reads ?id=<slug> from the URL and renders a full project article.
   لو المشروع فيه حقل article → يعرض مقالاً كاملاً بأقسام (SEO).
   لو مفيهوش → يرجع للشرح المختصر details زي الأول.
   ========================================================================== */

function getProjectIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

function esc(x) { return String(x == null ? "" : x); }

function renderArticle(a, lang) {
  const d = a[lang];
  if (!d) return "";
  var html = "";
  if (d.lead) html += '<p class="pd-lead">' + esc(d.lead) + "</p>";

  (d.sections || []).forEach(function (sec) {
    html += '<section class="pd-section">';
    if (sec.h) html += "<h2>" + esc(sec.h) + "</h2>";
    if (sec.p) html += "<p>" + esc(sec.p) + "</p>";

    if (sec.flow) {
      html += '<div class="pd-flow">' + sec.flow.map(function (step, i) {
        return '<span class="pd-flow-step">' + esc(step) + "</span>" +
          (i < sec.flow.length - 1 ? '<span class="pd-flow-arrow">→</span>' : "");
      }).join("") + "</div>";
    }
    if (sec.list) {
      html += '<ul class="pd-list">' + sec.list.map(function (x) {
        return "<li>" + esc(x) + "</li>";
      }).join("") + "</ul>";
    }
    if (sec.steps) {
      html += '<div class="pd-steps">' + sec.steps.map(function (st) {
        return '<div class="pd-step"><h3>' + esc(st.t) + "</h3><p>" + esc(st.d) + "</p></div>";
      }).join("") + "</div>";
    }
    html += "</section>";
  });

  if (d.results && d.results.length) {
    html += '<section class="pd-section"><h2>' +
      (lang === "en" ? "Results" : "النتائج") + "</h2>";
    html += '<div class="pd-results">' + d.results.map(function (r) {
      return '<div class="pd-result"><b>' + esc(r.v) + "</b><span>" + esc(r.k) + "</span></div>";
    }).join("") + "</div>";
    html += "</section>";
  }
  if (d.note) html += '<p class="pd-note">' + esc(d.note) + "</p>";
  return html;
}

function injectSchema(project, lang) {
  var old = document.getElementById("project-schema");
  if (old) old.remove();
  var s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "project-schema";
  s.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": project.title[lang],
    "description": (project.desc && project.desc[lang]) || "",
    "image": "https://engdarwish.com/" + project.image,
    "author": { "@type": "Person", "name": "Ahmed Darwish", "url": "https://engdarwish.com" },
    "publisher": { "@type": "Person", "name": "Technopedia Arabia" },
    "inLanguage": lang,
    "keywords": (project.tags || []).join(", "),
    "url": "https://engdarwish.com/project.html?id=" + project.id
  });
  document.head.appendChild(s);
}

function renderProjectDetail() {
  const root = document.getElementById("project-detail-root");
  const titleEl = document.getElementById("project-title");
  const titleTag = document.getElementById("project-title-tag");
  if (!root || !window.projectsData) return;

  const lang = typeof getStoredLang === "function" ? getStoredLang() : "ar";
  const id = getProjectIdFromUrl();
  const project = window.projectsData.find(function (p) { return p.id === id; });

  if (!project) {
    if (titleEl) titleEl.textContent = t("projects.notFound", lang);
    root.innerHTML = '<p style="text-align:center;">' + t("projects.notFound", lang) + "</p>";
    return;
  }

  if (titleEl) titleEl.textContent = project.title[lang];
  if (titleTag) titleTag.textContent = project.title[lang] + " — Technopedia Arabia";
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && project.desc && project.desc[lang]) metaDesc.setAttribute("content", project.desc[lang]);
  injectSchema(project, lang);

  const tagsHtml = project.tags.map(function (tg) {
    return '<span class="tag tag-cyan">' + tg + "</span>";
  }).join("");
  const linksHtml = [];
  if (project.demoUrl) linksHtml.push('<a class="btn btn-primary" href="' + project.demoUrl + '" target="_blank" rel="noopener">' + t("projects.viewDemo", lang) + "</a>");
  if (project.codeUrl) linksHtml.push('<a class="btn btn-ghost" href="' + project.codeUrl + '" target="_blank" rel="noopener">' + t("projects.viewCode", lang) + "</a>");

  const body = project.article
    ? renderArticle(project.article, lang)
    : '<p style="font-size:16px; line-height:1.8;">' + project.details[lang] + "</p>";

  root.innerHTML =
    '<article class="pd-article reveal">' +
      '<div class="pd-hero glass">' +
        '<div class="card-media" style="aspect-ratio:16/9;"><img src="' + project.image + '" alt="' + project.title[lang] + '"></div>' +
        '<div style="padding:26px 30px;">' +
          '<div class="card-tags">' + tagsHtml + "</div>" +
          (linksHtml.length ? '<div class="modal-links" style="margin-top:18px;">' + linksHtml.join("") + "</div>" : "") +
        "</div>" +
      "</div>" +
      '<div class="pd-body">' + body + "</div>" +
    "</article>";

  if (typeof window.refreshScrollReveal === "function") window.refreshScrollReveal();
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
document.addEventListener("ta:langchange", renderProjectDetail);
