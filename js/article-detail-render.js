/* ==========================================================================
   TECHNOPEDIA ARABIA — Article (tutorial) detail page renderer
   Reads ?id=<slug>, renders the full bilingual article, injects TechArticle
   JSON-LD for SEO. Mirrors project-detail-render.js conventions.
   ========================================================================== */

function getArticleIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderArticleSection(sec) {
  let html = "";
  if (sec.h) html += `<h2 class="article-h">${sec.h}</h2>`;
  if (sec.p) {
    const paras = Array.isArray(sec.p) ? sec.p : [sec.p];
    html += paras.map((p) => `<p class="article-p">${p}</p>`).join("");
  }
  if (sec.list) {
    html += `<ul class="article-list">${sec.list.map((li) => `<li>${li}</li>`).join("")}</ul>`;
  }
  if (sec.steps) {
    html += `<ol class="article-steps">${sec.steps
      .map((s) => `<li><strong>${s.t}</strong><span>${s.d}</span></li>`)
      .join("")}</ol>`;
  }
  if (sec.code) {
    html += `<pre class="ta-code"><code>${escapeHtml(sec.code)}</code></pre>`;
  }
  return html;
}

function injectArticleSchema(a, lang) {
  const old = document.getElementById("article-jsonld");
  if (old) old.remove();
  const data = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: a.title[lang],
    description: a.excerpt[lang],
    inLanguage: lang,
    author: { "@type": "Person", name: "Ahmed Darwish" },
    publisher: { "@type": "Person", name: "Ahmed Darwish" },
    keywords: a.tags.join(", "),
  };
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "article-jsonld";
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
}

function renderArticleDetail() {
  const root = document.getElementById("article-detail-root");
  const titleEl = document.getElementById("article-title");
  const titleTag = document.getElementById("article-title-tag");
  if (!root || !window.articlesData) return;

  const lang = typeof getStoredLang === "function" ? getStoredLang() : "ar";
  const id = getArticleIdFromUrl();
  const a = window.articlesData.find((x) => x.id === id);

  if (!a) {
    if (titleEl) titleEl.textContent = t("articles.notFound", lang);
    root.innerHTML = `<p style="text-align:center;">${t("articles.notFound", lang)}</p>`;
    return;
  }

  const body = a.body[lang];
  if (titleEl) titleEl.textContent = a.title[lang];
  if (titleTag) titleTag.textContent = `${a.title[lang]} — Technopedia Arabia`;

  const tagsHtml = a.tags.map((tg) => `<span class="tag tag-cyan">${tg}</span>`).join("");
  const sectionsHtml = body.sections.map(renderArticleSection).join("");
  const takeawaysHtml = body.takeaways
    ? `<div class="article-takeaways">
         <h2 class="article-h">${t("articles.takeaways", lang)}</h2>
         <ul class="article-list">${body.takeaways.map((k) => `<li>${k}</li>`).join("")}</ul>
       </div>`
    : "";
  const noteHtml = body.note ? `<div class="article-note">${body.note}</div>` : "";

  root.innerHTML = `
    <article class="glass reveal article-wrap">
      <div class="card-media" style="aspect-ratio:16/9;">
        <img src="${a.cover}" alt="${a.title[lang]}">
      </div>
      <div class="article-body">
        <div class="card-tags">${tagsHtml}</div>
        <div class="article-meta"><span class="article-read">${a.read[lang]}</span></div>
        <p class="article-lead">${body.lead}</p>
        ${sectionsHtml}
        ${takeawaysHtml}
        ${noteHtml}
      </div>
    </article>
  `;

  injectArticleSchema(a, lang);
  if (typeof window.refreshScrollReveal === "function") window.refreshScrollReveal();
}

document.addEventListener("DOMContentLoaded", renderArticleDetail);
document.addEventListener("ta:langchange", renderArticleDetail);
