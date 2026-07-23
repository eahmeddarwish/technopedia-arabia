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
  var svgPlay = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C7.7 2 4.2 5.5 4.2 9.8c0 1.1.2 2.1.6 3-.5.2-.9.7-.9 1.4 0 .5.3 1 .7 1.3-.1.2-.1.5-.1.7 0 .8.6 1.4 1.4 1.5.3 1 1.2 1.7 2.3 1.7.4 0 .8-.1 1.1-.3.8.5 1.7.8 2.7.8s1.9-.3 2.7-.8c.3.2.7.3 1.1.3 1.1 0 2-.7 2.3-1.7.8-.1 1.4-.7 1.4-1.5 0-.2 0-.5-.1-.7.4-.3.7-.8.7-1.3 0-.7-.4-1.2-.9-1.4.4-.9.6-1.9.6-3C19.8 5.5 16.3 2 12 2zm-3 8.2c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm6 0c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm-6.2 4.3c.1-.1.3-.1.4 0 .5.4 1.1.6 1.8.6s1.3-.2 1.8-.6c.1-.1.3-.1.4 0 .1.1.1.3 0 .4-.6.5-1.4.8-2.2.8s-1.6-.3-2.2-.8c-.1-.1-.1-.3 0-.4z"/></svg>';
  var svgCode = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.19-3.37-1.19-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>';
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
