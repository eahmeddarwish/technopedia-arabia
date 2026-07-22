/* ==========================================================================
   TECHNOPEDIA ARABIA — CV page renderer
   Reads window.cvData + current language, injects HTML into cv.html
   and fills the "download PDF" links on any page that has them.
   ========================================================================== */

const svgIcons = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.19-3.37-1.19-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6L2 12l6 6M16 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M9 13.5L7 22l5-3 5 3-2-8.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/></svg>',
};

function getLang() {
  return (typeof getStoredLang === "function" ? getStoredLang() : "ar");
}

function renderTimeline(id, items, lang) {
  const wrap = document.getElementById(id);
  if (!wrap) return;
  const section = wrap.closest(".cv-section");
  if (!items || !items.length) { if (section) section.style.display = "none"; return; }
  if (section) section.style.display = "";
  wrap.innerHTML = items.map(it => `
    <div class="tl-item">
      <div class="tl-period">${it.period || ""}</div>
      <h4>${it.role ? it.role[lang] : ""}</h4>
      <p class="tl-org">${it.org ? it.org[lang] : ""}</p>
      ${(it.desc && it.desc[lang])
        ? `<ul class="tl-points">${it.desc[lang].split(/(?<=[.؟!])\s+(?=[A-Z\u0600-\u06FF])/)
             .filter(Boolean).map(x => `<li>${x.trim()}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
}

function renderCvSide(lang) {
  const side = document.getElementById("cv-side");
  if (!side || !window.cvData) return;
  const d = window.cvData;
  side.innerHTML = `
    <a href="index.html" class="cv-brand">
      <img src="${d.logo || 'assets/images/logo.png'}" alt="Technopedia Arabia" width="34" height="34">
      <span>Technopedia <b>Arabia</b></span>
    </a>
    <img src="${d.photo}" alt="${d.name[lang]}" class="cv-avatar">
    <h2>${d.name[lang]}</h2>
    <p class="cv-role">${d.role[lang]}</p>
    <ul class="cv-contact-list">
      ${d.location ? `<li>${svgIcons.pin}<span>${d.location[lang]}</span></li>` : ""}
      <li>${svgIcons.mail}<a href="mailto:${d.email}">${d.email}</a></li>
      <li>${svgIcons.phone}<a href="tel:${d.phone.replace(/\s+/g, "")}">${d.phone}</a></li>
      <li>${svgIcons.github}<a href="${d.github}" target="_blank" rel="noopener">GitHub</a></li>
      <li>${svgIcons.linkedin}<a href="${d.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
    </ul>
    ${(d.stats && d.stats.length) ? `<div class="cv-stats">${d.stats.map(s =>
        `<div class="cv-stat"><b>${s.value}</b><span>${s.label[lang]}</span></div>`).join("")}</div>` : ""}
    <div class="cv-actions">
      <a href="${d.pdfPath}" class="btn btn-primary" data-cv-download download>${t("cv.download", lang)}</a>
      <a href="${d.linkedin}" target="_blank" rel="noopener" class="btn btn-ghost">LinkedIn</a>
    </div>
  `;
}

function renderCvSummary(lang) {
  const el = document.getElementById("cv-summary-text");
  if (!el || !window.cvData) return;
  el.textContent = window.cvData.summary[lang];
}

function renderCvSkills(lang) {
  const el = document.getElementById("cv-skills-list");
  if (!el || !window.cvData) return;
  const sk = window.cvData.skills, n = sk.length;
  const cx = 190, cy = 178, R = 132;
  const pt = (i, r) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };
  const rings = [0.25, 0.5, 0.75, 1].map(f =>
    `<polygon points="${sk.map((_, i) => pt(i, R * f).map(v => v.toFixed(1)).join(",")).join(" ")}"
       fill="none" stroke="var(--border)" stroke-width="1"/>`).join("");
  const spokes = sk.map((_, i) =>
    `<line x1="${cx}" y1="${cy}" x2="${pt(i, R)[0].toFixed(1)}" y2="${pt(i, R)[1].toFixed(1)}"
       stroke="var(--border-soft)" stroke-width="1"/>`).join("");
  const shape = sk.map((s, i) => pt(i, R * (s.level / 100)).map(v => v.toFixed(1)).join(",")).join(" ");
  const dots = sk.map((s, i) => {
    const [x, y] = pt(i, R * (s.level / 100));
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="var(--neon)"/>`;
  }).join("");
  const labels = sk.map((s, i) => {
    const [x, y] = pt(i, R + 26);
    const anchor = x < cx - 12 ? "end" : x > cx + 12 ? "start" : "middle";
    return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}"
      font-size="11.5" font-weight="700" fill="var(--muted)"
      font-family="var(--mono)">${s.name}</text>
      <text x="${x.toFixed(1)}" y="${(y + 18).toFixed(1)}" text-anchor="${anchor}"
      font-size="10.5" font-weight="700" fill="var(--neon)"
      font-family="var(--mono)">${s.level}%</text>`;
  }).join("");
  el.innerHTML = `
    <div class="skill-radar">
      <svg viewBox="0 0 380 356" role="img" aria-label="${t("cv.sectionSkills", lang)}">
        ${rings}${spokes}
        <polygon points="${shape}" fill="rgba(var(--neon-rgb),.20)"
                 stroke="var(--neon)" stroke-width="2.5" stroke-linejoin="round"/>
        ${dots}${labels}
      </svg>
    </div>`;
}

function renderCvSoftware(lang) {
  const el = document.getElementById("cv-software-list");
  if (!el || !window.cvData || !window.cvData.software) return;
  el.innerHTML = window.cvData.software.map(g => `
    <div class="sw-group">
      <h4>${g.group[lang]}</h4>
      <div class="sw-tags">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
    </div>`).join("");
}

function renderCvHighlights(lang) {
  const el = document.getElementById("cv-highlights-list");
  if (!el || !window.cvData || !window.cvData.highlights) return;
  el.innerHTML = window.cvData.highlights.map(h => `
    <li><span class="hl-ic">${svgIcons.check}</span><span>${h[lang]}</span></li>`).join("");
}

function renderCvCerts(lang) {
  const el = document.getElementById("cv-certs-list");
  if (!el || !window.cvData) return;
  el.innerHTML = window.cvData.certifications
    .map(
      (c) => `<div class="cert-item reveal">${svgIcons.award}<span>${c[lang]}</span></div>`
    )
    .join("");
}

function renderCvLanguages(lang) {
  const el = document.getElementById("cv-languages-list");
  if (!el || !window.cvData) return;
  el.innerHTML = window.cvData.languages
    .map(
      (item) => `
      <div class="cert-item reveal">
        ${svgIcons.globe}
        <span>${item.name[lang]} — <strong>${item.level[lang]}</strong></span>
      </div>`
    )
    .join("");
}

function fillCvDownloadLinks() {
  if (!window.cvData) return;
  document.querySelectorAll("[data-cv-download]").forEach((a) => {
    a.setAttribute("href", window.cvData.pdfPath);
  });
}

function renderCvAll() {
  const lang = getLang();
  renderCvSide(lang);
  renderCvSummary(lang);
  renderTimeline("cv-experience-list", window.cvData && window.cvData.experience, lang);
  renderTimeline("cv-education-list", window.cvData && window.cvData.education, lang);
  renderCvSkills(lang);
  renderCvSoftware(lang);
  renderCvHighlights(lang);
  renderCvCerts(lang);
  renderCvLanguages(lang);
  fillCvDownloadLinks();
  if (typeof window.refreshScrollReveal === "function") window.refreshScrollReveal();
}

document.addEventListener("DOMContentLoaded", renderCvAll);
document.addEventListener("ta:langchange", renderCvAll);

if (typeof window !== "undefined") {
  window.renderCvAll = renderCvAll;
}
