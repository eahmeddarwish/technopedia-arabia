/* ==========================================================================
   TECHNOPEDIA ARABIA — Individual project detail page renderer
   يقرأ ?id=<slug> ويعرض مقالاً كاملاً (مع دعم SEO) لو المشروع فيه حقل article.
   ========================================================================== */

function getProjectIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}
function esc(x) { return String(x == null ? "" : x); }

/* سهمٌ على شكل سنّ القلم (شعار الموقع): برتقالي + سنّ داكن، يتقلب حسب اللغة */
function penArrow(lang) {
  var flip = lang === "en" ? "" : ' style="transform:scaleX(-1)"';
  return '<span class="pd-flow-arrow"' + flip + '>' +
    '<svg viewBox="0 0 30 16" fill="none" aria-hidden="true">' +
      '<polygon points="1,4 20,8 1,12" fill="var(--neon)"/>' +
      '<polygon points="19,5.6 29,8 19,10.4" fill="var(--text)"/>' +
    '</svg></span>';
}

function renderArticle(a, lang) {
  var d = a[lang]; if (!d) return "";
  var html = "";
  if (d.lead) html += '<p class="pd-lead">' + esc(d.lead) + "</p>";
  (d.sections || []).forEach(function (sec) {
    html += '<section class="pd-section">';
    if (sec.h) html += "<h2>" + esc(sec.h) + "</h2>";
    if (sec.p) html += "<p>" + esc(sec.p) + "</p>";
    if (sec.flow) {
      html += '<div class="pd-flow">' + sec.flow.map(function (step, i) {
        return '<span class="pd-flow-step">' + esc(step) + "</span>" +
          (i < sec.flow.length - 1 ? penArrow(lang) : "");
      }).join("") + "</div>";
    }
    if (sec.list) html += '<ul class="pd-list">' + sec.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    if (sec.steps) html += '<div class="pd-steps">' + sec.steps.map(function (st) {
      return '<div class="pd-step"><h3>' + esc(st.t) + "</h3><p>" + esc(st.d) + "</p></div>";
    }).join("") + "</div>";
    html += "</section>";
  });
  if (d.results && d.results.length) {
    html += '<section class="pd-section"><h2>' + (lang === "en" ? "Results" : "النتائج") + "</h2>";
    html += '<div class="pd-results">' + d.results.map(function (r) {
      return '<div class="pd-result"><b>' + esc(r.v) + "</b><span>" + esc(r.k) + "</span></div>";
    }).join("") + "</div></section>";
  }
  if (d.note) html += '<p class="pd-note">' + esc(d.note) + "</p>";
  return html;
}

function injectSchema(project, lang) {
  var old = document.getElementById("project-schema"); if (old) old.remove();
  var s = document.createElement("script");
  s.type = "application/ld+json"; s.id = "project-schema";
  s.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "TechArticle",
    "headline": project.title[lang],
    "description": (project.desc && project.desc[lang]) || "",
    "image": "https://engdarwish.com/" + project.image,
    "author": { "@type": "Person", "name": "Ahmed Darwish", "url": "https://engdarwish.com" },
    "inLanguage": lang, "keywords": (project.tags || []).join(", "),
    "url": "https://engdarwish.com/project.html?id=" + project.id
  });
  document.head.appendChild(s);
}

function renderProjectDetail() {
  var root = document.getElementById("project-detail-root");
  var titleEl = document.getElementById("project-title");
  var titleTag = document.getElementById("project-title-tag");
  if (!root || !window.projectsData) return;
  var lang = typeof getStoredLang === "function" ? getStoredLang() : "ar";
  var id = getProjectIdFromUrl();
  var project = window.projectsData.find(function (p) { return p.id === id; });
  if (!project) {
    if (titleEl) titleEl.textContent = t("projects.notFound", lang);
    root.innerHTML = '<p style="text-align:center;">' + t("projects.notFound", lang) + "</p>";
    return;
  }
  if (titleEl) titleEl.textContent = project.title[lang];
  if (titleTag) titleTag.textContent = project.title[lang] + " — Technopedia Arabia";
  var md = document.querySelector('meta[name="description"]');
  if (md && project.desc && project.desc[lang]) md.setAttribute("content", project.desc[lang]);
  injectSchema(project, lang);

  var tagsHtml = project.tags.map(function (tg) { return '<span class="tag tag-cyan">' + tg + "</span>"; }).join("");
  var svgPlay = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3l14 9-14 9V3z"/></svg>';
  var svgCode = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6L2 12l6 6M16 6l6 6-6 6"/></svg>';
  var links = [];
  if (project.demoUrl) links.push('<a class="btn btn-primary" href="' + project.demoUrl + '" target="_blank" rel="noopener">' + svgPlay + '<span>' + t("projects.viewDemo", lang) + '</span></a>');
  if (project.codeUrl) links.push('<a class="btn btn-outline" href="' + project.codeUrl + '" target="_blank" rel="noopener">' + svgCode + '<span>' + t("projects.viewCode", lang) + '</span></a>');

  var body = project.article ? renderArticle(project.article, lang)
    : '<p style="font-size:16px; line-height:1.8;">' + project.details[lang] + "</p>";

  root.innerHTML =
    '<article class="pd-article reveal">' +
      '<div class="pd-hero glass">' +
        '<div class="card-media" style="aspect-ratio:16/9;"><img src="' + project.image + '" alt="' + project.title[lang] + '"></div>' +
        '<div style="padding:24px 30px;">' +
          '<div class="card-tags">' + tagsHtml + "</div>" +
          (links.length ? '<div class="pd-actions">' + links.join("") + "</div>" : "") +
        "</div>" +
      "</div>" +
      '<div class="pd-body">' + body + "</div>" +
    "</article>";
  if (typeof window.refreshScrollReveal === "function") window.refreshScrollReveal();
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
document.addEventListener("ta:langchange", renderProjectDetail);
