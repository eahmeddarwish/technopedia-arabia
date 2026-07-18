/* ==========================================================================
   TECHNOPEDIA ARABIA — Videos data
   Add a new video by copying an object below.
   - youtubeId: the part after "watch?v=" in any YouTube URL
     e.g. https://www.youtube.com/watch?v=XXXXXXXXXXX  ->  youtubeId: "XXXXXXXXXXX"
   - All videos below use a placeholder ID ("jNQXAC9IVRw") — REPLACE with your
     real video IDs. Thumbnail is auto-generated from the YouTube ID, no need
     to upload separate thumbnail images.
   ========================================================================== */

const videosData = [
  {
    id: "how-to-arduino",
    youtubeId: "jNQXAC9IVRw", // TODO: replace with your real video ID
    title: {
      ar: "How To: Arduino — دليلك الشامل للبدء",
      en: "How To: Arduino — Your Complete Beginner's Guide",
    },
    desc: {
      ar: "شرح كامل لأساسيات أردوينو: الهاردوير، بيئة البرمجة، وأول مشروع عملي خطوة بخطوة.",
      en: "A full walkthrough of Arduino fundamentals: hardware, the IDE, and your first hands-on project step by step.",
    },
  },
  {
    id: "how-to-raspberry-pi",
    youtubeId: "jNQXAC9IVRw", // TODO: replace with your real video ID
    title: {
      ar: "How To: Raspberry Pi — من التجهيز للتشغيل",
      en: "How To: Raspberry Pi — From Setup to Running Projects",
    },
    desc: {
      ar: "تجهيز أول Raspberry Pi، تثبيت نظام التشغيل، والتحكم بمنافذ GPIO لأول مشروع.",
      en: "Setting up your first Raspberry Pi, installing the OS, and controlling GPIO pins for your first project.",
    },
  },
  {
    id: "how-to-python-windows",
    youtubeId: "jNQXAC9IVRw", // TODO: replace with your real video ID
    title: {
      ar: "How To: Python على Windows",
      en: "How To: Python on Windows",
    },
    desc: {
      ar: "تثبيت بايثون بشكل صحيح على ويندوز، إعداد بيئة العمل، وكتابة أول سكربت.",
      en: "Properly installing Python on Windows, setting up your environment, and writing your first script.",
    },
  },
  {
    id: "how-to-digital-circuits",
    youtubeId: "jNQXAC9IVRw", // TODO: replace with your real video ID
    title: {
      ar: "How To: الدوائر الرقمية (Digital Circuits)",
      en: "How To: Digital Circuits",
    },
    desc: {
      ar: "أساسيات البوابات المنطقية، جداول الحقيقة، وتبسيط الدوائر باستخدام خرائط كارنو.",
      en: "Fundamentals of logic gates, truth tables, and circuit simplification using Karnaugh maps.",
    },
  },
  {
    id: "how-to-electronics",
    youtubeId: "jNQXAC9IVRw", // TODO: replace with your real video ID
    title: {
      ar: "How To: الإلكترونيات (Electronics) للمبتدئين",
      en: "How To: Electronics for Beginners",
    },
    desc: {
      ar: "مقدمة عملية في الإلكترونيات: المقاومات، الدايود، الترانزستور، وقراءة الدوائر البسيطة.",
      en: "A hands-on intro to electronics: resistors, diodes, transistors, and reading simple circuits.",
    },
  },
  {
    id: "how-to-networking",
    youtubeId: "jNQXAC9IVRw", // TODO: replace with your real video ID
    title: {
      ar: "How To: أساسيات الشبكات (Networking)",
      en: "How To: Networking Fundamentals",
    },
    desc: {
      ar: "فهم مبسّط لكيفية عمل الشبكات: عناوين IP، البروتوكولات، والراوترات.",
      en: "A simplified breakdown of how networks work: IP addressing, protocols, and routers.",
    },
  },
];

if (typeof window !== "undefined") window.videosData = videosData;
