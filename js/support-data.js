/* ==========================================================================
   TECHNOPEDIA ARABIA — Support / Donation bank details
   This renders in the "Support My Work" section on the homepage with
   one-click copy buttons. Only the fields needed to RECEIVE an
   international wire transfer are published here (account holder name,
   bank name, IBAN, SWIFT/BIC). The raw account number and branch address
   are intentionally omitted — the IBAN already encodes the account number,
   and a SWIFT+IBAN pair is all any sending bank needs.
   Never put your CVV, card number, or online banking password here.
   ========================================================================== */

const supportData = {
  bankName: { ar: "البنك الوطني الكويتي (NBK)", en: "National Bank of Kuwait (NBK)" },
  accountName: "AHMED MOHAMED MOHAMED DARWISH",
  iban: "KW06 NBOK 0000 0000 0000 2022 6953 69",
  swift: "NBOKKWKWXXX",
  currency: "KWD",
};

if (typeof window !== "undefined") window.supportData = supportData;
