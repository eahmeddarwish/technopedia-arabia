/* ==========================================================================
   TECHNOPEDIA ARABIA — Support / Donation section rendering
   ========================================================================== */

function renderSupportSection() {
  const el = document.getElementById("support-bank-details");
  if (!el || !window.supportData) return;
  const lang = getStoredLang();
  const d = window.supportData;

  el.innerHTML = `
    <div class="bank-row">
      <div><span class="label">${t("support.bankName", lang)}</span><span class="value" id="bank-field-name">${d.bankName[lang]}</span></div>
      <button class="copy-btn" data-copy-target="#bank-field-name" title="${t("support.copy", lang)}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
      </button>
    </div>
    <div class="bank-row">
      <div><span class="label">${t("support.accountName", lang)}</span><span class="value" id="bank-field-account">${d.accountName}</span></div>
      <button class="copy-btn" data-copy-target="#bank-field-account" title="${t("support.copy", lang)}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
      </button>
    </div>
    <div class="bank-row">
      <div><span class="label">${t("support.iban", lang)}</span><span class="value" id="bank-field-iban">${d.iban}</span></div>
      <button class="copy-btn" data-copy-target="#bank-field-iban" title="${t("support.copy", lang)}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
      </button>
    </div>
    <div class="bank-row">
      <div><span class="label">${t("support.swift", lang)}</span><span class="value" id="bank-field-swift">${d.swift}</span></div>
      <button class="copy-btn" data-copy-target="#bank-field-swift" title="${t("support.copy", lang)}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
      </button>
    </div>
    <div class="bank-row">
      <div><span class="label">${t("support.currency", lang)}</span><span class="value" id="bank-field-currency">${d.currency}</span></div>
      <button class="copy-btn" data-copy-target="#bank-field-currency" title="${t("support.copy", lang)}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
      </button>
    </div>
  `;
  if (window.initCopyButtonsFor) window.initCopyButtonsFor(el);
  else attachCopyHandlers(el);
}

/* Local copy-button binder (in case main.js already ran before this injected the DOM) */
function attachCopyHandlers(scope) {
  scope.querySelectorAll(".copy-btn").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", async () => {
      const targetSel = btn.getAttribute("data-copy-target");
      const targetEl = targetSel ? document.querySelector(targetSel) : null;
      const text = targetEl ? targetEl.textContent.trim() : "";
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 1600);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderSupportSection);
document.addEventListener("ta:langchange", renderSupportSection);
