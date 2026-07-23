/* ==========================================================================
   TECHNOPEDIA ARABIA — Article (tutorial) detail renderer (الشروحات)
   Mirrors project-detail-render.js: same pd-* markup + penArrow + JSON-LD.
   Adds code-block support (pd-code) and a takeaways section.
   Reads ?id=<slug> from window.articlesData.
   ========================================================================== */

function getArticleIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}
function aesc(x) { return String(x == null ? "" : x); }
function acodeEsc(x) {
  return String(x == null ? "" : x)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* سهمُ سنِّ القلم — نفس شعار الموقع، يتقلب حسب اللغة (منسوخ من صفحة المشروع) */
function artPenArrow(lang) {
  var flip = lang === "en" ? "" : ' style="transform:scaleX(-1)"';
  return '<span class="pd-flow-arrow"' + flip + '>' +
    '<svg viewBox="0 0 30 16" fill="none" aria-hidden="true">' +
      '<polygon points="1,4 20,8 1,12" fill="var(--neon)"/>' +
      '<polygon points="19,5.6 29,8 19,10.4" fill="var(--text)"/>' +
    '</svg></span>';
}

function renderArticleBody(a, lang) {
  var d = a.article[lang]; if (!d) return "";
  var html = "";
  if (d.lead) html += '<p class="pd-lead">' + aesc(d.lead) + "</p>";
  (d.sections || []).forEach(function (sec) {
    html += '<section class="pd-section">';
    if (sec.h) html += "<h2>" + aesc(sec.h) + "</h2>";
    if (sec.p) html += "<p>" + aesc(sec.p) + "</p>";
    if (sec.flow) {
      html += '<div class="pd-flow">' + sec.flow.map(function (step, i) {
        return '<span class="pd-flow-step">' + aesc(step) + "</span>" +
          (i < sec.flow.length - 1 ? artPenArrow(lang) : "");
      }).join("") + "</div>";
    }
    if (sec.list) html += '<ul class="pd-list">' + sec.list.map(function (x) { return "<li>" + aesc(x) + "</li>"; }).join("") + "</ul>";
    if (sec.steps) html += '<div class="pd-steps">' + sec.steps.map(function (st) {
      return '<div class="pd-step"><h3>' + aesc(st.t) + "</h3><p>" + aesc(st.d) + "</p></div>";
    }).join("") + "</div>";
    if (sec.code) html += '<pre class="pd-code"><code>' + acodeEsc(sec.code) + "</code></pre>";
    html += "</section>";
  });
  if (d.takeaways && d.takeaways.length) {
    html += '<section class="pd-section"><h2>' + (lang === "en" ? "Key takeaways" : "خلاصة سريعة") + "</h2>";
    html += '<ul class="pd-list">' + d.takeaways.map(function (x) { return "<li>" + aesc(x) + "</li>"; }).join("") + "</ul></section>";
  }
  if (d.note) html += '<p class="pd-note">' + aesc(d.note) + "</p>";
  return html;
}

function injectArticleSchema(a, lang) {
  var old = document.getElementById("article-schema"); if (old) old.remove();
  var s = document.createElement("script");
  s.type = "application/ld+json"; s.id = "article-schema";
  s.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "TechArticle",
    "headline": a.title[lang],
    "description": (a.desc && a.desc[lang]) || "",
    "image": "https://engdarwish.com/" + a.image,
    "author": { "@type": "Person", "name": "Ahmed Darwish", "url": "https://engdarwish.com" },
    "inLanguage": lang, "keywords": (a.tags || []).join(", "),
    "url": "https://engdarwish.com/article.html?id=" + a.id
  });
  document.head.appendChild(s);
}

function renderArticleDetail() {
  var root = document.getElementById("article-detail-root");
  var titleEl = document.getElementById("article-title");
  var titleTag = document.getElementById("article-title-tag");
  if (!root || !window.articlesData) return;
  var lang = typeof getStoredLang === "function" ? getStoredLang() : "ar";
  var id = getArticleIdFromUrl();
  var a = window.articlesData.find(function (x) { return x.id === id; });
  if (!a) {
    if (titleEl) titleEl.textContent = t("articles.notFound", lang);
    root.innerHTML = '<p style="text-align:center;">' + t("articles.notFound", lang) + "</p>";
    return;
  }
  if (titleEl) titleEl.textContent = a.title[lang];
  if (titleTag) titleTag.textContent = a.title[lang] + " — Technopedia Arabia";
  var md = document.querySelector('meta[name="description"]');
  if (md && a.desc && a.desc[lang]) md.setAttribute("content", a.desc[lang]);
  injectArticleSchema(a, lang);

  var tagsHtml = a.tags.map(function (tg) { return '<span class="tag tag-cyan">' + tg + "</span>"; }).join("");

  root.innerHTML =
    '<article class="pd-article reveal">' +
      '<div class="pd-hero glass">' +
        '<div class="card-media" style="aspect-ratio:16/9;"><img src="' + a.image + '" alt="' + a.title[lang] + '"></div>' +
        '<div style="padding:24px 30px;">' +
          '<div class="card-tags">' + tagsHtml + "</div>" +
          '<div class="pd-actions"><span class="art-read">' + a.read[lang] + "</span></div>" +
        "</div>" +
      "</div>" +
      '<div class="pd-body">' + renderArticleBody(a, lang) + "</div>" +
    "</article>";
  if (typeof window.refreshScrollReveal === "function") window.refreshScrollReveal();
}

document.addEventListener("DOMContentLoaded", renderArticleDetail);
document.addEventListener("ta:langchange", renderArticleDetail);
