/* ==========================================================================
   NEW PROJECTS — paste each object into projectsData in the recommended order.
   Recommended positions (existing ranking preserved, 4 new ones inserted):

     ... 12. air-quality-monitor
         13. fire-gas-detection          ← NEW
         14. voice-chess-pro
     ... 16. esp32-thermal-camera
         17. vein-detection              ← NEW
         18. pendulum-gravity-lab
         19. telescope-optical-designer
         20. puck-robot
         21. educational-ai-assistant    ← NEW
         22. smart-spelling-tutor        ← NEW

   All four are featured:false (they stay out of the homepage flagship
   rotation). Flip fire-gas-detection to featured:true if you want it to
   appear on the homepage. Image files expected in assets/images/.
   ========================================================================== */

/* ---- 13) FIRE & GAS DETECTION ------------------------------------------ */
{
    id: "fire-gas-detection",
    categories: ["raspberrypi", "python-ai", "iot"],
    featured: false,
    image: "assets/images/fire-gas-detection.png",
    demoUrl: "",
    codeUrl: "https://github.com/eahmeddarwish/fire-gas-detection",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Sensor Fusion", "GPIO"],
    title: {
        ar: "كشف الحريق والغاز متعدد الحسّاسات",
        en: "Fire & Gas Detection",
    },
    desc: {
        ar: "عقدة إنذارٍ مبكّر على Raspberry Pi تدمج ثلاث إشارات مستقلة — كاميرا (OpenCV)، حسّاس لهب IR، وحسّاس غاز MQ-2 — مع صفّارة وإشعار للهاتف، وتعمل على أي حاسوب في وضع محاكاة بلا عتاد.",
        en: "A Raspberry Pi early-warning node that fuses three independent signals — a camera (OpenCV), an IR flame sensor, and an MQ-2 gas sensor — with a buzzer and a phone notification, and runs on any PC in a hardware-free simulation mode.",
    },
    details: {
        ar: "إعادة بناءٍ كاملة لنموذجٍ سابق. النسخة الأصلية كان فيها مفتاح تنبيهات حقيقي مكتوب صريح في الكود، ودالتان متطابقتان تقريبًا لإرسال الرسائل، ولا تعمل إلا على Raspberry Pi. أُعيدت هيكلتها إلى وحدةٍ واحدةٍ نظيفة: الأسرار تُقرأ من متغيّرات البيئة (لا شيء مكتوبٌ في الكود)، ومنطق التنبيه موحَّدٌ خلف مدير واحد مع فترة تهدئة آمنة للخيوط (thread-safe)، وطبقة تجريدٍ لـ GPIO تُحاكيه تلقائيًا عند غياب الـ Pi — فيعمل نفس الكود على اللابتوب للتطوير وعلى الـ Pi للإنتاج.",
        en: "A full rebuild of an earlier prototype. The original had a real alert token hard-coded in the source, two near-identical message-sending functions, and only ran on a Raspberry Pi. It was restructured into one clean module: secrets are read from environment variables (nothing hard-coded), the alert logic is unified behind a single manager with a thread-safe cooldown, and a GPIO abstraction auto-mocks the hardware when no Pi is present — so the same code runs on a laptop for development and on the Pi in production.",
    },
    article: {
      ar: {
        lead: "عقدة إنذارٍ مبكّر تدمج ثلاث إشارات مستقلة حتى لا تُطلق قراءةٌ خاطئةٌ واحدة إنذارًا كاذبًا، ولا تمرّ قراءةٌ فائتةٌ بصمت — وتعمل بلا عتاد في وضع محاكاة.",
        sections: [
          {
            h: "الفكرة",
            p: "الاعتماد على مصدر إشارةٍ واحد للكشف عن الحريق هشّ: الكاميرا وحدها تنخدع بالألوان، وحسّاس اللهب لا يرى الدخان، وحسّاس الغاز لا يرى النار المكشوفة. المشروع يدمج الثلاثة معًا في حكمٍ واحد، مع صفّارةٍ محلية وإشعارٍ للهاتف عند أي حدثٍ مؤكَّد."
          },
          {
            h: "المعمارية",
            flow: [
              "كاميرا (تجزئة HSV بـ OpenCV)",
              "حسّاس لهب IR (مقاطعة GPIO)",
              "حسّاس غاز MQ-2 (خرج رقمي)",
              "مدير تنبيه + فترة تهدئة",
              "صفّارة + إشعار Pushover"
            ]
          },
          {
            h: "القرارات التقنية",
            steps: [
              {
                t: "دمج ثلاث حسّاسات لا حسّاسٍ واحد",
                d: "الكاميرا واللهب والغاز يغطّون النقاط العمياء لبعضهم: الإيجابيات الكاذبة اللونية مقابل اللهب الحقيقي مقابل الدخان غير المرئي. القرار النهائي يأتي من دمجهم، لا من أيٍّ منهم منفردًا."
              },
              {
                t: "طبقة تجريدٍ لـ GPIO مع محاكاةٍ تلقائية",
                d: "عند غياب مكتبة RPi.GPIO يُحقَن بديلٌ صوري (mock)، فيعمل نفس الكود بالضبط على اللابتوب للتطوير وعلى الـ Pi للإنتاج — ويصبح ممكنًا تجربة مسار الكاميرا كاملًا بلا أي عتاد."
              },
              {
                t: "أسرارٌ من البيئة + تهدئةٌ آمنة للخيوط",
                d: "توكنات الإشعار تُقرأ من متغيّرات البيئة؛ وإن لم تُضبط يتنازل النظام بلطفٍ إلى الطباعة على الطرفية بدل أن ينهار. وحالة التنبيه محميّةٌ بقفلٍ (lock) فلا تُطلق أحداث الكاميرا واللهب والغاز المتزامنة إنذارًا مزدوجًا."
              }
            ]
          },
          {
            h: "حدودٌ صادقة",
            p: "الرؤية اللونية ساذجة: الشمس أو الملابس الحمراء قد تخدع قناع HSV، والعتبة نقطة بداية لا مُصنِّفًا مضبوطًا. والحسّاسات تُقرأ رقميًا (تشغيل/إيقاف) لا بقيمة ppm تماثلية، لأن الـ Pi بلا ADC. هذا مشروعٌ تعليمي/نموذج أوّلي، لا بديلٌ عن إنذار حريقٍ معتمَد."
          }
        ],
        results: [
          { k: "إشارات مدموجة", v: "3" },
          { k: "قنوات التنبيه", v: "صفّارة + إشعار" },
          { k: "وضع المحاكاة", v: "بلا عتاد" }
        ],
        note: "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية، وليس جهاز سلامةٍ معتمدًا. أي توكن أو سرٍّ يُقرأ من متغيّرات البيئة فقط."
      },
      en: {
        lead: "An early-warning node that fuses three independent signals so a single false reading can't raise a false alarm, and a single missed reading can't stay silent — and it runs hardware-free in simulation mode.",
        sections: [
          {
            h: "The idea",
            p: "Relying on one signal source for fire detection is fragile: a camera alone is fooled by colour, a flame sensor can't see smoke, and a gas sensor can't see open flame. The project fuses all three into one judgment, with a local buzzer and a phone notification on any confirmed event."
          },
          {
            h: "Architecture",
            flow: [
              "Camera (OpenCV HSV segmentation)",
              "IR flame sensor (GPIO interrupt)",
              "MQ-2 gas sensor (digital output)",
              "Alert manager + cooldown",
              "Buzzer + Pushover notification"
            ]
          },
          {
            h: "Technical decisions",
            steps: [
              {
                t: "Three-sensor fusion, not a single detector",
                d: "Camera, flame, and gas cover each other's blind spots: colour false-positives vs. true flame vs. invisible smoke. The final decision comes from fusing them, not from any one alone."
              },
              {
                t: "A GPIO abstraction that auto-mocks",
                d: "When RPi.GPIO is unavailable a mock is injected, so the exact same code runs on a laptop for development and on the Pi in production — and the whole camera pipeline can be demoed with no hardware at all."
              },
              {
                t: "Env-var secrets + thread-safe cooldown",
                d: "Notification tokens are read from environment variables; if none are set, the system degrades gracefully to console logging instead of crashing. Alert state is guarded by a lock, so concurrent camera/flame/gas events can't double-fire."
              }
            ]
          },
          {
            h: "Honest limitations",
            p: "The colour vision is naive: sunlight or red clothing can trip the HSV mask, and the threshold is a starting point, not a tuned classifier. The sensors are read digitally (on/off), not as analog ppm, because the Pi has no ADC. This is an educational prototype, not a replacement for a rated fire alarm."
          }
        ],
        results: [
          { k: "Signals fused", v: "3" },
          { k: "Alert channels", v: "Buzzer + push" },
          { k: "Simulation mode", v: "No hardware" }
        ],
        note: "An open-source educational project, not a certified safety device. Any token or secret is read from environment variables only."
      }
    }
},

/* ---- 17) VEIN ENHANCEMENT (NEAR-INFRARED) ------------------------------ */
{
    id: "vein-detection",
    categories: ["python-ai", "raspberrypi"],
    featured: false,
    image: "assets/images/vein-detection.png",
    demoUrl: "",
    codeUrl: "https://github.com/eahmeddarwish/vein-detection",
    tags: ["Python", "OpenCV", "CLAHE", "Image Processing", "Synthetic Data"],
    title: {
        ar: "إبراز الأوردة تحت الأشعة تحت الحمراء القريبة",
        en: "Vein Enhancement (Near-Infrared)",
    },
    desc: {
        ar: "المبدأ وراء أجهزة 'كاشف الأوردة': تحت الضوء تحت الأحمر القريب يمتصّ الدم أكثر من الأنسجة فتظهر الأوردة كمنحنياتٍ أغمق. أداةٌ تُبرز هذه المنحنيات بمسار CLAHE + تسطيح خلفية، وتأتي بمولّد صورٍ اصطناعي — الديمو كله بلا أي صورة يدٍ حقيقية.",
        en: "The idea behind hardware 'vein finders': under near-infrared light, blood absorbs more than tissue, so veins appear as darker curves. A tool that enhances those curves with a CLAHE + background-flattening pipeline, shipping a synthetic image generator — the entire demo uses no real hand photos.",
    },
    details: {
        ar: "إعادة بناءٍ لمسارٍ سابق كان يعتمد على تباينٍ عامٍّ بسيط بمكتبة PIL ومساراتٍ ثابتة على جهازٍ معيّن. المسار الجديد بـ OpenCV يستخدم CLAHE (معادلة مدرّج تكراري متكيّفة محدودة التباين) — وهي التقنية الفعلية في أجهزة كشف الأوردة — يليها تسطيحٌ للخلفية (طرح نسخةٍ مموّهةٍ بشدة) لإزالة تدرّج الإضاءة، ثم تراكبٌ ملوّن. ولحفظ الخصوصية، يأتي المشروع بمولّد NIR اصطناعي حتمي (بذرة عشوائية ثابتة) فيعمل الديمو كله على صورٍ مُولّدةٍ رياضيًا — بلا أي صورة يدٍ أو جسمٍ حقيقي في المستودع.",
        en: "A rebuild of an earlier pipeline that used a simple global-contrast stretch in PIL with hardcoded paths on a specific device. The new OpenCV pipeline uses CLAHE (contrast-limited adaptive histogram equalization) — the actual technique in vein-finder hardware — followed by background flattening (subtracting a heavily blurred copy) to remove the lighting gradient, then a colour overlay. To respect privacy, the project ships a deterministic synthetic NIR generator (fixed seed), so the whole demo runs on mathematically generated images — with no real hand or body imagery anywhere in the repo.",
    },
    article: {
      ar: {
        lead: "أداةٌ تُبرز الأوردة من صورةٍ تحت-حمراء بمسارٍ صغيرٍ وصادق — وتعمل بالكامل على صورٍ اصطناعيةٍ مُولّدةٍ رياضيًا، بلا أي صورة يدٍ حقيقية.",
        sections: [
          {
            h: "الفكرة",
            p: "تحت الأشعة تحت الحمراء القريبة يمتصّ الدم ضوءًا أكثر من الأنسجة المحيطة، فتظهر الأوردة أغمق. الأداة تأخذ صورةً رماديةً وتُبرز هذه المنحنيات بثلاث خطوات نظيفة، مع الحفاظ على القابلية للتكرار عبر بذرةٍ عشوائيةٍ ثابتة."
          },
          {
            h: "كيف يعمل",
            flow: [
              "صورة NIR رمادية (أو مُولّدة اصطناعيًا)",
              "CLAHE — تباينٌ محلّي متكيّف",
              "تسطيح خلفية (طرح نسخةٍ مموّهة)",
              "CLAHE ثانية لتحديد خريطة الأوردة",
              "تراكبٌ أخضر على الصورة الأصلية"
            ]
          },
          {
            h: "القرارات التقنية",
            steps: [
              {
                t: "CLAHE بدل التباين العام",
                d: "النسخة الأصلية مدّت التباين مدًّا عامًا واحدًا يفقد التفاصيل الدقيقة؛ المعادلة المتكيّفة تستعيد تفاصيل أوردةٍ أكثر بكثيرٍ دون إحراق المناطق الساطعة."
              },
              {
                t: "تسطيح الخلفية",
                d: "لصور NIR تدرّج إضاءةٍ قوي؛ طرح نسخةٍ مموّهةٍ بشدة يعزل البُنى الرفيعة (الأوردة) عن هذا التدرّج قبل التحديد."
              },
              {
                t: "اصطناعيٌّ أولًا، خصوصيةٌ أولًا",
                d: "مولّدٌ حتميٌّ ببذرةٍ ثابتة يعني أن أي شخصٍ يعيد إنتاج نفس الديمو بالضبط بصفر صورٍ واقعية — ولا تُستخدَم أي صورة يدٍ أو جسمٍ في المشروع إطلاقًا."
              }
            ]
          },
          {
            h: "حدودٌ صادقة",
            p: "ليس جهازًا طبيًّا — عرضٌ لمعالجة الصور لا أداة تشخيص. رؤيةٌ كلاسيكية بلا تعلّمٍ آلي (لا مرشّح Frangi بعد)، وعتبة التراكب تلتقط بعض ضوضاء الحسّاس. النتائج الحقيقية تحتاج مصدر ضوءٍ تحت أحمر وكاميرا NoIR؛ إطار كاميرا الويب العادية سيبدو ضعيفًا. والصور الاصطناعية توضيحية لا دقيقةٌ تشريحيًا."
          }
        ],
        results: [
          { k: "صور حقيقية مستخدمة", v: "0 (اصطناعي)" },
          { k: "مراحل المسار", v: "4" },
          { k: "قابلية التكرار", v: "ببذرةٍ ثابتة" }
        ],
        note: "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية وبحثية، ليس جهازًا طبيًّا — لا يُستخدَم لأي قرارٍ طبي. لا صور يدٍ أو جسمٍ حقيقيةٍ في المستودع."
      },
      en: {
        lead: "A tool that lifts veins out of a near-infrared image with a small, honest pipeline — running entirely on mathematically generated synthetic images, with no real hand photos.",
        sections: [
          {
            h: "The idea",
            p: "Under near-infrared light, blood absorbs more than surrounding tissue, so veins look darker. The tool takes a grayscale image and enhances those curves in three clean steps, staying reproducible via a fixed random seed."
          },
          {
            h: "How it works",
            flow: [
              "Grayscale NIR image (or synthetic)",
              "CLAHE — adaptive local contrast",
              "Background flattening (subtract blur)",
              "Second CLAHE to sharpen the vein map",
              "Green overlay on the original"
            ]
          },
          {
            h: "Technical decisions",
            steps: [
              {
                t: "CLAHE over global contrast",
                d: "The original did one global contrast stretch that loses fine detail; adaptive histogram equalization recovers far more vein detail without blowing out bright regions."
              },
              {
                t: "Background flattening",
                d: "NIR images have a strong illumination gradient; subtracting a heavily blurred copy isolates the thin vein structures from that gradient before extraction."
              },
              {
                t: "Synthetic-first, privacy-first",
                d: "A deterministic generator with a fixed seed means anyone reproduces the exact demo with zero real-world imagery — and no hand or body photos are used in the project at all."
              }
            ]
          },
          {
            h: "Honest limitations",
            p: "Not a medical device — an image-processing demonstration, not a diagnostic tool. Classical CV with no machine learning (no Frangi filter yet), and the overlay threshold picks up some sensor speckle. Real results need an IR light source and a NoIR camera; an ordinary webcam frame looks poor. Synthetic images are illustrative, not anatomically accurate."
          }
        ],
        results: [
          { k: "Real photos used", v: "0 (synthetic)" },
          { k: "Pipeline stages", v: "4" },
          { k: "Reproducibility", v: "Fixed seed" }
        ],
        note: "An open-source educational/research project, not a medical device — must not be used for any medical decision. No real hand or body imagery in the repository."
      }
    }
},

/* ---- 21) EDUCATIONAL AI ASSISTANT -------------------------------------- */
{
    id: "educational-ai-assistant",
    categories: ["python-ai"],
    featured: false,
    image: "assets/images/educational-ai-assistant.png",
    demoUrl: "",
    codeUrl: "https://github.com/eahmeddarwish/educational-ai-assistant",
    tags: ["Python", "Tkinter", "OpenAI API", "NLP", "Threading"],
    title: {
        ar: "المساعد التعليمي الذكي",
        en: "Educational AI Assistant",
    },
    desc: {
        ar: "مساعدٌ مكتبيٌّ ثنائي اللغة (عربي/إنجليزي) يقدّم للطالب دعمًا بطريقتين: سؤالٌ نصيٌّ يُجاب عبر OpenAI، أو ملف PDF يُلخَّص تلقائيًا — بواجهة Tkinter ومفتاحٍ يُقرأ من متغيّر البيئة لا من الكود.",
        en: "A bilingual (Arabic/English) desktop assistant that helps students two ways: a free-text question answered via OpenAI, or a PDF summarized automatically — with a Tkinter UI and an API key read from an environment variable, not the source.",
    },
    details: {
        ar: "إعادة هيكلةٍ كاملة لنسخةٍ سابقة كان فيها مفتاح OpenAI مكتوبًا صريحًا في الكود، ومساراتٌ شخصيةٌ ثابتة، ودالةٌ مكرّرةٌ مكسورة. النسخة الجديدة تقرأ المفتاح من متغيّر البيئة OPENAI_API_KEY، وتضيف اختيار لغةٍ فعليًّا بين العربية والإنجليزية، وتشغّل نداء الواجهة البرمجية على خيطٍ خلفي حتى لا تتجمّد النافذة أثناء تفكير النموذج، وتحفظ الملخّص عبر نافذة حفظٍ بدل مسارٍ ثابت — مع تنازلٍ لطيفٍ إن غاب المفتاح أو الشعار.",
        en: "A full restructure of an earlier version that had the OpenAI key hard-coded in the source, personal hardcoded paths, and a broken duplicate function. The new version reads the key from the OPENAI_API_KEY environment variable, adds a real Arabic/English language toggle, runs the API call on a background thread so the window never freezes while the model thinks, and saves the summary via a save dialog instead of a fixed path — degrading gracefully if the key or logo is missing.",
    },
    article: {
      ar: {
        lead: "مساعدٌ تعليميٌّ ثنائي اللغة يجيب الأسئلة ويلخّص ملفات PDF، أُعيدت هيكلته من ملفٍ واحدٍ فيه مفتاحٌ متسرّبٌ إلى نسخةٍ نظيفةٍ آمنة.",
        sections: [
          {
            h: "الفكرة",
            p: "دعمٌ دراسيٌّ على مدار الساعة بطريقتين: اسأل سؤالًا نصيًا فتحصل على إجابةٍ شاملة من OpenAI، أو اختر ملف PDF فتحصل على ملخّصٍ مختصر — والواجهة كلها تتبدّل بين العربية والإنجليزية بنقرة."
          },
          {
            h: "المعمارية",
            flow: [
              "واجهة Tkinter (اختيار لغة → سؤال / تلخيص)",
              "نداء OpenAI على خيطٍ خلفي",
              "استخراج نص PDF + تلخيص LSA",
              "حفظ الملخّص عبر نافذة حفظ"
            ]
          },
          {
            h: "القرارات التقنية",
            steps: [
              {
                t: "مفتاحٌ من البيئة لا من الكود",
                d: "النسخة الأصلية كتبت المفتاح صراحةً في الملف. الآن يُقرأ من OPENAI_API_KEY، ويعرض البرنامج رسالةً واضحةً بدل أن ينهار إن كان غائبًا."
              },
              {
                t: "نداءٌ على خيطٍ خلفي",
                d: "Tkinter أحادي الخيط، فطلب الشبكة يُنفَّذ على خيطٍ منفصل وتُعاد النتيجة للواجهة بأمان — فتبقى النافذة مستجيبةً أثناء تفكير النموذج بدل أن تتجمّد."
              },
              {
                t: "تنازلٌ لطيفٌ عند نقص أي جزء",
                d: "الشعار والصور اختيارية؛ غيابها لا يكسر التشغيل. والتلخيص يُحفَظ عبر نافذة حفظٍ يختارها المستخدم بدل مسارٍ ثابتٍ على جهازٍ معيّن."
              }
            ]
          },
          {
            h: "حدودٌ صادقة",
            p: "استخراج نصٍّ فقط من الـ PDF (لا OCR للملفات الممسوحة كصور)، والمُلخِّص يُقطّع الجُمل بالإنجليزية فتكون ملخّصات العربية أخشن. ويتطلّب وضع الأسئلة حساب OpenAI واتصالًا بالإنترنت (الاستخدام محاسَبٌ من OpenAI). سطح المكتب فقط."
          }
        ],
        results: [
          { k: "الأوضاع", v: "سؤال + تلخيص PDF" },
          { k: "اللغات", v: "عربي / إنجليزي" },
          { k: "معالجة المفتاح", v: "متغيّر بيئة" }
        ],
        note: "مشروعٌ شخصيٌّ مفتوح المصدر لأغراضٍ تعليمية. لا يُكتب أي مفتاحٍ حقيقيٍّ في الكود — يُقرأ من البيئة فقط."
      },
      en: {
        lead: "A bilingual educational assistant that answers questions and summarizes PDFs, restructured from a single file with a leaked key into a clean, safe version.",
        sections: [
          {
            h: "The idea",
            p: "Round-the-clock study support two ways: ask a free-text question and get a comprehensive OpenAI answer, or pick a PDF and get a concise summary — with the whole UI switching between Arabic and English at a click."
          },
          {
            h: "Architecture",
            flow: [
              "Tkinter UI (language pick → Q&A / summary)",
              "OpenAI call on a background thread",
              "PDF text extraction + LSA summary",
              "Save the summary via a save dialog"
            ]
          },
          {
            h: "Technical decisions",
            steps: [
              {
                t: "Key from the environment, not the source",
                d: "The original wrote the key directly into the file. It now reads from OPENAI_API_KEY, and the app shows a clear message instead of crashing when it's missing."
              },
              {
                t: "Call on a background thread",
                d: "Tkinter is single-threaded, so the network request runs on a separate thread and the result is marshalled back safely — the window stays responsive while the model thinks instead of freezing."
              },
              {
                t: "Graceful fallback for missing pieces",
                d: "The logo and images are optional; their absence never breaks a run. The summary is saved through a user-chosen save dialog instead of a path hardcoded to one machine."
              }
            ]
          },
          {
            h: "Honest limitations",
            p: "PDF text extraction only (no OCR for scanned image PDFs), and the summarizer tokenizes as English, so Arabic summaries are rougher. The Q&A mode requires an OpenAI account and internet (usage is billed by OpenAI). Desktop only."
          }
        ],
        results: [
          { k: "Modes", v: "Q&A + PDF summary" },
          { k: "Languages", v: "Arabic / English" },
          { k: "Secret handling", v: "Env variable" }
        ],
        note: "A personal open-source project for educational purposes. No real key is ever written in the source — it is read from the environment only."
      }
    }
},

/* ---- 22) SMART SPELLING TUTOR ------------------------------------------ */
{
    id: "smart-spelling-tutor",
    categories: ["python-ai"],
    featured: false,
    image: "assets/images/Smart-Spelling-Tutor.png",
    demoUrl: "",
    codeUrl: "https://github.com/eahmeddarwish/smart-spelling-tutor",
    tags: ["Python", "Tkinter", "pyttsx3", "Text-to-Speech", "Education"],
    title: {
        ar: "مدرّب الإملاء الذكي",
        en: "Smart Spelling Tutor",
    },
    desc: {
        ar: "مدرّبٌ مكتبيٌّ يبني مهارة الإملاء بالاستماع: يقرأ كل كلمةٍ بصوتٍ عالٍ (تحويل نصٍّ إلى كلامٍ دون إنترنت)، والطالب يكتب ما سمعه، ثم يُصحّح كل إجابة ويعرض الدرجة — بثلاثة مستويات صعوبة من بنك كلماتٍ في Excel.",
        en: "A desktop trainer that builds spelling through listening: it reads each word aloud (offline text-to-speech), the student types what they heard, then it grades every answer and shows a score — with three difficulty levels from an Excel word bank.",
    },
    details: {
        ar: "تنظيفٌ كاملٌ لنسخةٍ سابقة كان فيها اسمٌ لشخصٍ حقيقي، ومساراتٌ ثابتةٌ على محرّك D لملفات الصور وبنك الكلمات، واستدعاءٌ لإنهاء البرنامج بلا استيراد المكتبة اللازمة (خطأ)، ودوالٌّ ميتةٌ مكرّرة. النسخة الجديدة تستخدم مساراتٍ نسبيةً فقط، وبنك كلمات words.xlsx جاهزٌ يعمل فورًا، وتتنازل بلطفٍ إن غابت المكتبات أو محرّك النطق (قائمة كلماتٍ مدمجة + وضعٌ صامت) فتعمل دائمًا. النطق على خيطٍ خلفي حتى تبقى الواجهة مستجيبة.",
        en: "A full cleanup of an earlier version that contained a real person's name, hardcoded D-drive paths for the image and word-bank files, a call to quit the program without importing the required library (a bug), and duplicate dead functions. The new version uses relative paths only, ships a ready words.xlsx word bank that works out of the box, and degrades gracefully if the libraries or TTS engine are missing (built-in word list + silent mode) so it always runs. Speech runs on a background thread so the UI stays responsive.",
    },
    article: {
      ar: {
        lead: "مدرّبُ إملاءٍ لطيفٌ يقرأ الكلمة بصوتٍ عالٍ فيكتبها الطالب ويُصحَّح فورًا — نُظِّف بالكامل من اسم شخصٍ حقيقيٍّ ومساراتٍ ثابتةٍ وخطأٍ في الكود.",
        sections: [
          {
            h: "الفكرة",
            p: "يبني مهارة الإملاء عبر الاستماع: في كل جولةٍ يسحب كلماتٍ عشوائيةً من بنكٍ في Excel، يقرأ كلًّا منها بصوتٍ عالٍ، ويطلب من الطالب كتابتها، ثم يعرض النتيجة صحيحة/خاطئة مع درجةٍ نهائية. الصعوبة شريطٌ منزلق بثلاثة مستويات."
          },
          {
            h: "كيف يعمل",
            flow: [
              "اختيار مستوى الصعوبة (١–٣)",
              "سحب كلماتٍ من words.xlsx",
              "قراءة كل كلمةٍ بصوتٍ (pyttsx3)",
              "كتابة الطالب + تصحيح + درجة"
            ]
          },
          {
            h: "القرارات التقنية",
            steps: [
              {
                t: "مساراتٌ نسبيةٌ فقط",
                d: "بنك الكلمات والشعار يُحمّلان من داخل مجلد المشروع، فالبرنامج محمولٌ بين الأجهزة بدل الاعتماد على مسارٍ ثابتٍ على جهازٍ معيّن."
              },
              {
                t: "كل شيءٍ يتنازل بلطف",
                d: "غياب pandas أو ملف words.xlsx يُفعِّل قائمة كلماتٍ مدمجة؛ وغياب محرّك النطق يُفعِّل وضعًا صامتًا. لا ينهار البرنامج على نقص جزءٍ اختياري."
              },
              {
                t: "نطقٌ على خيطٍ خلفي",
                d: "تحويل النص إلى كلامٍ يُشغَّل على خيطٍ داعمٍ (daemon) فتبقى الواجهة مستجيبةً أثناء القراءة."
              }
            ]
          },
          {
            h: "حدودٌ صادقة",
            p: "جودة الصوت تعتمد على أصوات نظام التشغيل المثبّتة، فتختلف من جهازٍ لآخر. والتصحيح بالمطابقة التامة (دون حساسيةٍ لحالة الأحرف) بلا درجاتٍ جزئيةٍ بعد. حجم الجولة ثابتٌ بثلاث كلمات. سطح المكتب فقط."
          }
        ],
        results: [
          { k: "مستويات الصعوبة", v: "3" },
          { k: "كلمات لكل جولة", v: "3" },
          { k: "النطق دون إنترنت", v: "نعم" }
        ],
        note: "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. لا يحتوي على أي اسمٍ لشخصٍ حقيقيٍّ أو مسارٍ ثابتٍ على جهازٍ معيّن."
      },
      en: {
        lead: "A friendly spelling trainer that reads a word aloud, has the student type it, and grades instantly — fully cleaned of a real person's name, hardcoded paths, and a code bug.",
        sections: [
          {
            h: "The idea",
            p: "It builds spelling through listening: each round it draws random words from an Excel bank, reads each one aloud, asks the student to type it, then shows Correct/Incorrect with a final score. Difficulty is a three-level slider."
          },
          {
            h: "How it works",
            flow: [
              "Pick difficulty (1–3)",
              "Draw words from words.xlsx",
              "Read each word aloud (pyttsx3)",
              "Student types + grade + score"
            ]
          },
          {
            h: "Technical decisions",
            steps: [
              {
                t: "Relative paths only",
                d: "The word bank and logo load from inside the project folder, so the app is portable across machines instead of depending on a path fixed to one device."
              },
              {
                t: "Everything degrades gracefully",
                d: "No pandas or no words.xlsx falls back to a built-in word list; no TTS engine falls back to silent mode. The app never crashes on a missing optional piece."
              },
              {
                t: "Speech on a background thread",
                d: "Text-to-speech runs on a daemon thread, so the UI stays responsive while a word is being read."
              }
            ]
          },
          {
            h: "Honest limitations",
            p: "Voice quality depends on the OS voices installed, so it varies by machine. Grading is exact-match (case-insensitive) with no partial credit yet. Round size is fixed at three words. Desktop only."
          }
        ],
        results: [
          { k: "Difficulty levels", v: "3" },
          { k: "Words per round", v: "3" },
          { k: "Offline speech", v: "Yes" }
        ],
        note: "An open-source project for educational purposes. It contains no real person's name and no path hardcoded to a specific machine."
      }
    }
},
