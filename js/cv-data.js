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


  /* --- الإحصائيات اللي بتظهر تحت الصورة --- */
  stats: [
    { value: "16+", label: { ar: "سنة خبرة", en: "Years" } },
    { value: "150+", label: { ar: "مشروع", en: "Projects" } },
    { value: "250+", label: { ar: "مهندس وطالب", en: "Mentored" } },
  ],

  /* --- الخبرات العملية ---------------------------------------------------
     دي أهم فقرة في أي سيرة ذاتية. املا الجاي ده بخبراتك الحقيقية:
       { role:{ar:"المسمى الوظيفي",en:"Job title"},
         org:{ar:"جهة العمل",en:"Company"},
         period:"2019 — الآن",
         desc:{ar:"إنجازين أو تلاتة بالأرقام",en:"Two or three achievements"} }
     سيبها فاضية [] والقسم هيختفي لوحده من الصفحة.
  ------------------------------------------------------------------------ */
  experience: [
    {
        "role": {
            "ar": "مهندس أنظمة مدمجة ومصمم دوائر — عمل حر",
            "en": "Embedded Systems Engineer & Circuit Designer — Freelance"
        },
        "org": {
            "ar": "ممارسة هندسية مستقلة — الكويت والمنطقة",
            "en": "Independent engineering practice — Kuwait & the region"
        },
        "period": "2010 — الآن",
        "desc": {
            "ar": "سلّمت أكتر من 100 مشروع Arduino و Raspberry Pi لعملاء في الكويت والمنطقة، بنسبة تكرار تعامل زادت 40%. برمجت حلول أتمتة وإنترنت أشياء وأنظمة ذكية بـ Python و C++ قلّلت التدخل اليدوي حوالي 35%. خدمة كاملة من تحليل المتطلبات وتصميم الدوائر والـ PCB للنمذجة والاختبار والتسليم، بنسبة رضا عملاء 95%.",
            "en": "Delivered 100+ custom Arduino and Raspberry Pi projects for clients across Kuwait and the region, driving a 40% increase in repeat business. Programmed automation, IoT and smart-system solutions in Python and C++, cutting manual intervention by ~35%. End-to-end delivery — requirements, circuit/PCB design, prototyping, testing and handover — with a 95% client satisfaction rate."
        }
    },
    {
        "role": {
            "ar": "محاضر ومصمم مناهج — هندسة كهربائية وإلكترونيات",
            "en": "Lecturer & Curriculum Designer — Electrical Engineering"
        },
        "org": {
            "ar": "قطاع التعليم الحكومي — الكويت",
            "en": "Government education sector — Kuwait"
        },
        "period": "2009 — الآن",
        "desc": {
            "ar": "تصميم وتقديم مناهج الهندسة الكهربائية والإلكترونيات، مع رفع تفاعل الطلاب حوالي 30% ودرجات الامتحانات العملية 25%. ورش عملية تدمج تصميم الدوائر بالأنظمة المدمجة، وإدخال أدوات رقمية في أكتر من 15 فصل. توجيه طلاب في مشاريع Arduino و Raspberry Pi وأنظمة الأتمتة بالحساسات، وإشراف على مشاريع التخرج من المقترح للمناقشة.",
            "en": "Designed and delivered Electrical Engineering and Electronics curricula, increasing student engagement by ~30% and practical exam scores by ~25%. Ran hands-on labs integrating circuit design with embedded systems, and introduced digital tools across 15+ classrooms. Mentored students on Arduino, Raspberry Pi and sensor-based automation projects, and supervised graduation projects from proposal to final defense."
        }
    },
    {
        "role": {
            "ar": "مهندس مبيعات تنفيذي",
            "en": "Executive Sales Engineer"
        },
        "org": {
            "ar": "المهندسون العرب للتجارة — السعودية",
            "en": "Arab Engineers for Trading Co. — Saudi Arabia"
        },
        "period": "2005 — 2008",
        "desc": {
            "ar": "إدارة المبيعات الفنية والعطاءات وعروض الأسعار والتدريب الفني وخدمات ما بعد البيع لمعدات هندسية تعليمية، لمؤسسات تعليمية في الخبر والظهران والجبيل تشمل KFUPM و JIC و JTI. استشارات فنية قبل البيع وإعداد مقترحات هندسية مخصّصة.",
            "en": "Managed technical sales, bids, quotations, technical training and after-sales services for educational engineering equipment across Khobar, Dhahran and Jubail — serving institutions including KFUPM, JIC and JTI. Delivered pre-sales technical consultation and tailored engineering proposals."
        }
    }
],

  /* --- المؤهلات الدراسية — نفس الفكرة --- */
  education: [
    {
        "role": {
            "ar": "بكالوريوس هندسة إلكترونيات واتصالات كهربائية",
            "en": "B.Sc. Electronics & Electrical Communication Engineering"
        },
        "org": {
            "ar": "جامعة القاهرة — مصر",
            "en": "Cairo University — Egypt"
        },
        "period": "2004",
        "desc": null
    },
    {
        "role": {
            "ar": "أساسيات ومسح شبكات GSM",
            "en": "GSM Fundamentals & Survey"
        },
        "org": {
            "ar": "HTC — جامعة القاهرة، مصر",
            "en": "HTC — Cairo University, Egypt"
        },
        "period": "2005",
        "desc": null
    },
    {
        "role": {
            "ar": "مبيعات المعدات التعليمية المتخصصة",
            "en": "Sales of Specialized Educational Equipment"
        },
        "org": {
            "ar": "PHYWE SYSTEME GmbH — ألمانيا",
            "en": "PHYWE SYSTEME GmbH — Germany"
        },
        "period": "2006",
        "desc": null
    }
],

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
