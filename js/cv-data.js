/* ==========================================================================
   TECHNOPEDIA ARABIA — CV data
   Sourced directly from Ahmed Darwish's real CV (Eng. Ahmed Darwish - C.V.pdf)
   and cover letter. Edit freely as your career progresses.
   ========================================================================== */

const cvData = {
  photo: "assets/images/avatar.jpg",
  name: { ar: "أحمد درويش", en: "Ahmed Darwish" },
  role: {
    ar: "مهندس كهرباء | محاضر تعليمي | متخصص أنظمة مدمجة",
    en: "Electrical Engineer | Educator | Embedded Systems Specialist",
  },
  email: "e_ahmeddarwish@hotmail.com",
  phone: "+965 5110 5252",
  github: "https://github.com/eahmeddarwish",
  linkedin: "https://www.linkedin.com/in/engahmeddarwish",
  pdfPath: "assets/cv/Ahmed_Darwish_CV.pdf",

  summary: {
    ar: "مهندس كهرباء ومحاضر تعليمي بخبرة تتجاوز 20 عاماً تجمع بين هندسة الأنظمة المدمجة والتعليم التقني. متخصص في Arduino و Raspberry Pi والتصميم القائم على المتحكمات الدقيقة، بمهارات برمجة قوية في Python و C++ لأنظمة إنترنت الأشياء والأتمتة. نفذت أكثر من 100 مشروع فريلانس، ولدي أكثر من 16 عاماً في تصميم المناهج وتوجيه الطلاب على المستويين المتوسط والجامعي.",
    en: "A results-driven Electrical Engineer and Educator with 20+ years of combined experience in embedded systems engineering and technical education. Specialist in Arduino, Raspberry Pi, and microcontroller-based design, with strong programming skills in Python and C++ for IoT and automation. Proven track record of 100+ delivered freelance projects and 16+ years of curriculum design and student mentoring at middle and undergraduate levels.",
  },

  skills: [
    { name: "Arduino / Raspberry Pi", level: 95 },
    { name: "Python", level: 88 },
    { name: "C++", level: 85 },
    { name: "Circuit & PCB Design", level: 90 },
    { name: "Proteus / PSpice / Multisim", level: 85 },
    { name: "MATLAB / AutoCAD Electrical", level: 78 },
    { name: "Curriculum Design & Teaching", level: 92 },
    { name: "Public Speaking & Mentoring", level: 88 },
  ],

  certifications: [
    { ar: "أساسيات ومسح GSM - HTC، جامعة القاهرة (2005)", en: "GSM Fundamentals & Survey - HTC, Cairo University (2005)" },
    { ar: "مبيعات المعدات التعليمية المتخصصة - PHYWE SYSTEME، ألمانيا (2006)", en: "Sales of Specialized Educational Equipment - PHYWE SYSTEME GmbH, Germany (2006)" },
    { ar: "الذكاء الاصطناعي ولغات البرمجة الحديثة - ندوة تخصصية (2023)", en: "AI and Advanced Programming Languages - Specialized Seminar (2023)" },
    { ar: "MS PowerPoint - تدريب أكثر من 150 متدرباً (2022-2026)", en: "MS PowerPoint - Trained 150+ Participants (2022-2026)" },
  ],

  languages: [
    { name: { ar: "العربية", en: "Arabic" }, level: { ar: "اللغة الأم", en: "Native" } },
    { name: { ar: "الإنجليزية", en: "English" }, level: { ar: "جيد جداً", en: "Very Good" } },
  ],
};

if (typeof window !== "undefined") window.cvData = cvData;
