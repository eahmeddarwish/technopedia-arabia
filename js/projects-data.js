/* ==========================================================================
   TECHNOPEDIA ARABIA — Projects data
   Edit / add projects here. Each project needs:
   - id: unique slug (no spaces)
   - categories: array from ["arduino","raspberrypi","python-ai","robotics","iot"]
   - featured: true = shows on the homepage
   - image: path to a thumbnail (replace project-placeholder.svg with your own)
   - demoUrl / codeUrl: leave "" to hide that link button
   - tags: short tech labels shown on the card
   - title / desc / details: each has {ar, en}

   Ordered best-to-least by real engineering depth, documentation quality,
   and global/professional polish. Thin placeholder entries (no code, no
   demo, generic textbook description, no documented technical decisions)
   were removed rather than kept as filler.
   ========================================================================== */

const projectsData = [
{
        id: "smart-stethoscope",
        categories: ["python-ai", "raspberrypi"],
        featured: true,
        image: "assets/images/smart-stethoscope.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/smart-stethoscope",
        tags: ["Python", "TensorFlow Lite", "Raspberry Pi", "PySide6", "Signal Processing"],
        title: {
            ar: "سماعة طبية ذكية بالذكاء الاصطناعي (Smart Stethoscope)",
            en: "AI Smart Stethoscope — Heart Sound Screening",
        },
        desc: {
            ar: "سماعةٌ طبيةٌ رقمية مبنيةٌ على Raspberry Pi، تستخدم شبكةً عصبيةً مضغوطة لفحص صوت القلب وتصنيفه فوريًّا (طبيعي / لغطٌ قلبي / صوتٌ إضافي / تشويش)، مع تقرير PDF بأسلوبٍ طبي.",
            en: "A Raspberry Pi-based digital stethoscope that uses an on-device CNN to screen heart sounds in real time (normal / murmur / extra sound / artifact), with a clinical-style PDF report.",
        },
        details: {
            ar: "مشروعٌ شخصيٌّ يجمع بين معالجة الإشارات الصوتية والذكاء الاصطناعي والعتاد المدمج. يُلتقط الصوت عبر ميكروفون BOYA BY-M1 Pro متصلٍ بسماعةٍ طبيةٍ تقليدية، ثم يمرّ بخط معالجةٍ كامل (تصفية Bandpass وNotch، بوابة ضوضاء، اختيار أفضل نافذةٍ زمنيةٍ مدتها 3 ثوانٍ)، ثم يتحوّل إلى طيف Mel Spectrogram يُغذَّى لشبكة CNN مضغوطة بصيغة TensorFlow Lite (INT8) تعمل بالكامل على الجهاز نفسه دون الحاجة إلى أي اتصالٍ بالإنترنت. تظهر النتيجة على شاشة لمسٍ مبنيةٍ بـ PySide6 مع شرحٍ سريريٍّ لسبب القرار، ثم تُصدَّر كتقرير PDF. المشروع مكتملٌ ويعمل فعليًّا من البداية إلى النهاية، ونُشر هنا كمرجعٍ مفتوح المصدر بعد إعادة هيكلة الكود بالكامل إلى مستوى احترافي (اختبارات، توثيقٌ تقني، إعداداتٌ قابلةٌ للتخصيص).",
            en: "A personal project combining audio signal processing, on-device AI, and embedded hardware. Audio is captured via a BOYA BY-M1 Pro microphone attached to a conventional stethoscope, run through a DSP pipeline (bandpass + notch filtering, noise gating, best 3-second window selection), converted to a Mel-spectrogram, and classified by a quantized TensorFlow Lite CNN running entirely on-device with no internet connection. The result is shown on a PySide6 touchscreen with a clinical explanation of the decision, and exported as a PDF report. The project is complete and working end to end, and is published here as an open-source reference after a full professional refactor (tests, documentation, configurable settings).",
        },
        article: {
          ar: {
            lead: "سماعةٌ رقميةٌ بذكاء اصطناعي تفحص صوت القلب على الجهاز نفسه — دون إنترنت — وتشرح سبب قرارها على الشاشة وفي تقرير PDF.",
            sections: [
              {
                h: "الفكرة",
                p: "الهدف أن يتمكّن أيّ شخصٍ — ممرضًا كان أم طبيبًا أم فردًا في منطقةٍ محدودة الموارد الطبية — من استخدام سماعةٍ رخيصةٍ نسبيًّا مبنيةٍ على Raspberry Pi لفحص صوت القلب، والحصول على تصنيفٍ أوليٍّ فوري: طبيعي، لغطٌ قلبي (Murmur)، صوتٌ قلبيٌّ إضافي (S3/S4)، أو تشويشٌ في التسجيل — قبل اتخاذ قرار تحويل الحالة إلى طبيب قلب."
              },
              {
                h: "خط معالجة الإشارة",
                flow: [
                  "تسجيل 8 ثوانٍ @ 44100 هرتز",
                  "تخفيض المعدل إلى 2000 هرتز",
                  "فلتر Bandpass + Notch 50هرتز",
                  "بوابة ضوضاء + اختيار أفضل 3 ثوانٍ",
                  "Mel Spectrogram (64 نطاق)",
                  "CNN مضغوط (INT8 TFLite)"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "قاعدة قرار \"اللغط أولًا\"",
                    d: "بدلًا من الاعتماد على الدالة argmax مباشرة، يتحقق النموذج أولًا من احتمالية اللغط (Murmur) مقارنةً بحدٍّ أدنى محافظ. وهو خيارٌ متعمَّدٌ بعد تجربة عدة قيمٍ للعتبة (Threshold)، أدّى إلى تحقيق نسبة اكتشافٍ بلغت 100% لجميع حالات اللغط الحقيقية (مقابل دقةٍ إجماليةٍ قدرها 75%) — لأن تفويت حالة لغطٍ حقيقية أخطر بكثيرٍ من إنذارٍ كاذب."
                  },
                  {
                    t: "ضغط النموذج بصيغة INT8",
                    d: "حُوِّل النموذج من TensorFlow العادي إلى صيغة TensorFlow Lite مع ضغط INT8، ليعمل بسرعةٍ كافيةٍ على معالج Raspberry Pi المحدود، بعد تجربة أكثر من 9 نسخٍ تدريبيةٍ مختلفة."
                  },
                  {
                    t: "إعادة هيكلة الكود بالكامل",
                    d: "كان الكود الأصلي ملف واجهةٍ رسوميةٍ واحدًا ضخمًا (أكثر من 1700 سطر) بمساراتٍ ثابتةٍ على جهاز Raspberry Pi معيّن. قُسِّم إلى حزمة بايثون منظمة (معالجة إشارة، استدلال، تسجيل صوت، تقرير PDF، واجهة) قابلةٍ للاختبار دون أي عتاد، مع إعداداتٍ عبر متغيرات البيئة بدلًا من المسارات الثابتة."
                  }
                ]
              },
              {
                h: "اكتشاف وتصحيح خطأ في الداتاسيت المستخدم للتدريب",
                p: "أثناء تجهيز المشروع للنشر، لوحظ أن ملفات التصنيفات المرفقة بداتاسيت PASCAL \"Heartbeat Sounds\" الشهير على Kaggle تحتوي على أخطاءٍ منهجيةٍ في مطابقة أسماء الملفات (بادئاتٌ وهمية وتضاربٌ في صياغة الأسماء)، ما يجعل جزءًا كبيرًا من الصفوف غير قابلٍ للربط الصحيح بالملف الصوتي الحقيقي. صُحِّح الخطأ بالكامل (176 من 176 في set_a، و656 من 656 في set_b) وتم التحقق برمجيًّا من دقة كل تصحيح، ونُشر جدول التصحيح فقط (أسماء الملفات والتصنيفات، دون أي صوت) في المستودع — دون إعادة نشر الداتاسيت نفسه المحمي بحقوق الملكية."
              }
            ],
            results: [
              { k: "نسبة اكتشاف اللغط", v: "100%" },
              { k: "الدقة الإجمالية", v: "75%" },
              { k: "عدد التصنيفات", v: "4" },
              { k: "نسخ تدريبٍ جُرِّبت", v: "9+" }
            ],
            note: "المشروع لأغراضٍ تعليميةٍ وبحثيةٍ فقط، وليس جهازًا طبيًّا معتمدًا — يجب تأكيد أي نتيجةٍ من قِبل طبيبٍ مختص. الكود منشورٌ بالكامل مفتوح المصدر، ومفتوحٌ للتحسين والتطوير."
          },
          en: {
            lead: "An AI-powered digital stethoscope that screens heart sounds entirely on-device — no internet required — and explains its reasoning on screen and in a PDF report.",
            sections: [
              {
                h: "The idea",
                p: "Let anyone — a nurse, a doctor, or someone in a resource-limited setting — use a relatively cheap Raspberry Pi-based stethoscope to get an immediate first-pass screening: normal, murmur, extra heart sound (S3/S4), or recording artifact, before deciding whether to refer to a cardiologist."
              },
              {
                h: "Signal pipeline",
                flow: [
                  "8s capture @ 44100 Hz",
                  "Downsample to 2000 Hz",
                  "Bandpass + 50Hz notch filter",
                  "Noise gate + best 3s window",
                  "Mel Spectrogram (64 bands)",
                  "Quantized CNN (INT8 TFLite)"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "\"Murmur-first\" decision rule",
                    d: "Instead of a plain argmax, the model first checks the murmur probability against a conservative threshold. A deliberate choice after a threshold sweep, reaching 100% recall on real murmur cases (versus 75% overall accuracy) — because missing a real murmur is far more dangerous than a false alarm."
                  },
                  {
                    t: "INT8 model quantization",
                    d: "The model was converted from full TensorFlow to TensorFlow Lite with INT8 quantization so it runs fast enough on the Raspberry Pi's limited processor, after 9+ different training iterations."
                  },
                  {
                    t: "Full codebase restructure",
                    d: "The original code was one 1700+ line GUI file hardcoded to a specific Raspberry Pi's file paths. It was split into an organized Python package (signal processing, inference, audio capture, PDF report, GUI) testable with no hardware attached, with environment-variable configuration replacing the hardcoded paths."
                  }
                ]
              },
              {
                h: "Finding and fixing a bug in the training dataset",
                p: "While preparing this project for release, we noticed the label files shipped with the popular PASCAL \"Heartbeat Sounds\" dataset on Kaggle contain a systematic filename-matching bug (phantom prefixes and inconsistent naming) that leaves a large fraction of rows unmatchable to the real audio file. We fully corrected it (176/176 and 656/656 rows) and verified every fix programmatically, publishing only the corrected mapping table (filenames + labels, no audio) in the repository — without redistributing the copyrighted dataset itself."
              }
            ],
            results: [
              { k: "Murmur recall", v: "100%" },
              { k: "Overall accuracy", v: "75%" },
              { k: "Classes", v: "4" },
              { k: "Training iterations", v: "9+" }
            ],
            note: "For educational and research purposes only — not a certified medical device. Any result must be confirmed by a qualified clinician. Fully open source and open to further improvement."
          }
        }
    },{
        id: "adsb-flight-tracker",
        categories: ["iot", "python-ai"],
        featured: true,
        image: "assets/images/adsb-radar-screenshot.png",
        demoUrl: "https://engdarwish-adsb-flight-tracker.static.hf.space",
        codeUrl: "https://github.com/eahmeddarwish/adsb-flight-tracker",
        tags: ["Python", "Flask", "RTL-SDR", "ADS-B", "Raspberry Pi"],
        title: {
            ar: "متتبع رحلات ADS-B",
            en: "ADS-B Flight Tracker"
        },
        desc: {
            ar: "رادار طيران حي بتصميم ATC كلاسيكي، يشتغل بأي دونجل RTL-SDR على أي لابتوب أو Raspberry Pi.",
            en: "A live ATC-style flight radar that runs with any RTL-SDR dongle on a laptop or Raspberry Pi."
        },
        details: {
            ar: "يستقبل إشارات ADS-B الحقيقية على 1090MHz عبر dump1090، ويعرضها على واجهة رادار حية ببصمة كلاسيكية. الديمو المباشر يعمل بمحاكاةٍ داخل المتصفح؛ النسخة الكاملة تدعم عتادًا حقيقيًا.",
            en: "Receives real ADS-B signals at 1090MHz via dump1090 and renders them on a live radar-style dashboard. The live demo runs a browser-side simulation; the full version supports real hardware."
        },
        article: {
          ar: {
            lead: "رادار طيرانٍ حيٌّ يفكّ تشفير إشارات الطائرات الحقيقية على تردد 1090 ميجاهرتز بدونجل RTL-SDR، ويعرضها على واجهةٍ بطابع أبراج المراقبة — على أي لابتوبٍ أو راسبيري باي.",
            sections: [
              {
                h: "الفكرة",
                p: "تلتقط إشارات ADS-B التي تبثّها الطائرات فعليًا، وتفكّها وتعرض كل طائرةٍ على خريطةٍ حيةٍ بأيقوناتٍ دقيقة الاتجاه ومساراتٍ خلفها. وإن لم يكن لديك عتاد؟ وضع محاكاةٍ جاهزٌ يشغّل نفس الواجهة ببياناتٍ تجريبية."
              },
              {
                h: "المعمارية",
                flow: [
                  "دونجل RTL-SDR (1090MHz)",
                  "dump1090 يفكّ الإشارة",
                  "خادم Flask (API + واجهة)",
                  "خريطة Leaflet في المتصفح"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "وضعان دائمان: محاكاةٌ وحقيقي",
                    d: "وضع المحاكاة يعمل في ثوانٍ بلا أي عتاد — هو ما يشتغل على النسخة الحية. والوضع الحقيقي يفكّ بثّ ADS-B فعليًا من الدونجل. الاثنان يتكلمان مع نفس الخادم ونفس الواجهة، فتبدّل بينهما بزرٍّ واحد."
                  },
                  {
                    t: "كودٌ عابرٌ للمنصّات",
                    d: "الخادم بايثون صافٍ بلا أي كودٍ خاصٍّ بالراسبيري باي — يعمل على ويندوز وماك ولينكس. الراسبيري باي مجرد خيارٍ مريحٍ للتشغيل الدائم 24 ساعة، لا شرط."
                  },
                  {
                    t: "إثراءٌ آمنٌ من جهة الخادم",
                    d: "بيانات الرحلات الإضافية تُجلَب عبر الخادم فقط — مفتاح الـAPI لا يصل للمتصفح إطلاقًا. خادمٌ واحدٌ على منفذٍ واحدٍ يخدم الواجهة والـAPI معًا."
                  }
                ]
              },
              {
                h: "جاهزٌ للتشغيل الدائم",
                p: "مع ملف systemd للتشغيل التلقائي عند الإقلاع، يتحوّل الراسبيري باي إلى كشك رادارٍ يعمل بلا توقّف. وكل الإعدادات عبر متغيّرات البيئة — لا شيء مثبّتٌ في الكود، فتغيّر المنطقة والمركز بسهولة."
              }
            ],
            results: [
              {
                k: "التردد",
                v: "1090 MHz"
              },
              {
                k: "المنصّات",
                v: "ويندوز/ماك/لينكس"
              },
              {
                k: "وضع المحاكاة",
                v: "بلا عتاد"
              },
              {
                k: "المنافذ",
                v: "واحد"
              }
            ],
            note: "مشروعٌ مفتوح المصدر بالكامل، مع نسخةٍ حيةٍ على Hugging Face تعمل بوضع المحاكاة مباشرةً."
          },
          en: {
            lead: "A live aircraft radar that decodes real ADS-B signals on 1090 MHz with an RTL-SDR dongle, rendering every plane on a retro ATC-style dashboard — on any laptop or Raspberry Pi.",
            sections: [
              {
                h: "The idea",
                p: "It picks up the ADS-B signals aircraft actually broadcast, decodes them, and shows each plane on a live map with heading-accurate icons and trails. No hardware? A built-in simulation runs the same UI with demo traffic."
              },
              {
                h: "Architecture",
                flow: [
                  "RTL-SDR dongle (1090MHz)",
                  "dump1090 decodes",
                  "Flask server (API + UI)",
                  "Leaflet map in browser"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Two first-class modes: sim and live",
                    d: "Simulation runs in seconds with no hardware — it powers the live demo. Live mode decodes real ADS-B from the dongle. Both talk to the same server and UI, so you switch with one button."
                  },
                  {
                    t: "Cross-platform code",
                    d: "The server is pure Python with no Pi-specific code — it runs on Windows, macOS and Linux. A Raspberry Pi is just a convenient always-on box, not a requirement."
                  },
                  {
                    t: "Safe server-side enrichment",
                    d: "Extra flight data is fetched through the server only — the API key never reaches the browser. One server on one port serves both the UI and the API."
                  }
                ]
              },
              {
                h: "Ready for permanent use",
                p: "With a systemd unit for boot-time auto-start, the Pi becomes a 24/7 radar kiosk. All configuration is via environment variables — nothing is hardcoded, so you change region and center easily."
              }
            ],
            results: [
              {
                k: "Frequency",
                v: "1090 MHz"
              },
              {
                k: "Platforms",
                v: "Win/Mac/Linux"
              },
              {
                k: "Sim mode",
                v: "No hardware"
              },
              {
                k: "Ports",
                v: "One"
              }
            ],
            note: "Fully open source, with a live Hugging Face demo running in simulation mode out of the box."
          }
        }
    },{
        id: "drone-detection-yolov5",
        categories: ["python-ai"], // عندك فئة مخصصة للروبوتكس/embedded ضيفها هنا كمان
        featured: true,
        image: "assets/images/drone-detection-yolov5.png",
        demoUrl: "https://huggingface.co/spaces/engdarwish/drone-detection-demo",
        codeUrl: "https://github.com/eahmeddarwish/drone-detection-yolov5",
        tags: ["Python", "YOLOv5", "Computer Vision", "Raspberry Pi", "ONNX", "PID Control"],
        title: {
            ar: "كشف وتتبّع الطائرات المسيّرة — YOLOv5",
            en: "Drone Detection & Tracking — YOLOv5",
        },
        desc: {
            ar: "نظام يكشف الطائرات المسيّرة لحظيًا ويتتبعها فعليًا بكاميرا على موتورات Pan/Tilt، شغال بالكامل على Raspberry Pi 4 بدون GPU.",
            en: "Real-time drone detection with a physical pan/tilt camera tracker, running fully on a GPU-less Raspberry Pi 4.",
        },
        details: {
            ar: "موديل YOLOv5s مُدرَّب على 40,000+ صورة (99% mAP@0.5)، مُصدَّر لـ ONNX للاستدلال على CPU. نظام التتبّع يدمج فلتر كالمان (للتنبؤ بموقع الطائرة بين الفريمات) مع وحدة تحكم PID لكل محور، تُحرّك موتوري سيرفو عبر PCA9685 لإبقاء الطائرة في منتصف الكاميرا. يعمل بمعدل 15-20 إطار/ثانية على Raspberry Pi 4 عادي.",
            en: "A YOLOv5s model trained on 40,000+ images (99% mAP@0.5), exported to ONNX for CPU inference. The tracking loop combines a Kalman filter (predicting the drone's position between frames) with a per-axis PID controller driving two pan/tilt servos via a PCA9685, keeping the drone centered in frame. Runs at 15–20 FPS on a stock Raspberry Pi 4.",
        },
        article: {
          ar: {
            lead: "نموذجٌ واحد مُدرَّب، يعمل لحظيًا على حاسوبٍ بـ 35 دولارًا، يُطارد الطائرات المسيّرة ويُبقيها في منتصف الكاميرا — بدون كرت شاشة، وبدون أي حلولٍ مختصرة.",
            sections: [
              {
                h: "المشكلة",
                p: "كشف الطائرات المسيّرة سهلٌ على خادمٍ بكرت شاشةٍ قوي. لكن أن يعمل النظام <strong>لحظيًا على Raspberry Pi 4 بلا GPU</strong>، ويتتبّع الطائرة فعليًا بموتوراتٍ تُحرّك الكاميرا خلفها — هذه هي المعادلة الصعبة. الهدف: نظامٌ كامل يكشف ويلاحق، على جهازٍ يتّسع لكفّ اليد."
              },
              {
                h: "خط العمل",
                p: "النظام سلسلةٌ مترابطة، كل حلقةٍ تُغذّي التي بعدها:",
                flow: [
                  "كاميرا USB",
                  "YOLOv5s على ONNX (معالج فقط)",
                  "فلتر كالمان",
                  "وحدة تحكم PID",
                  "PCA9685",
                  "موتورات Pan/Tilt"
                ]
              },
              {
                h: "القرارات الهندسية",
                steps: [
                  {
                    t: "لماذا ONNX بدل PyTorch؟",
                    d: "الـRaspberry Pi 4 بلا GPU ولا CUDA. تصدير النموذج لصيغة ONNX وتشغيله بـ ONNXRuntime يُلغي الاعتماد على PyTorch كليًا، ويمنح استدلالًا مُحسَّنًا على المعالج وحده — يكفي لـ 15-20 إطارًا/ثانية على الجهاز نفسه."
                  },
                  {
                    t: "لماذا فلتر كالمان فوق PID؟",
                    d: "الكشف لا يعمل على كل فريمٍ بالسرعة الكاملة، فتصل النتائج متأخرةً ومهتزّة. فلتر كالمان يتتبّع الموقع والسرعة ويتنبأ بمكان الطائرة <em>الآن</em> بين عمليات الكشف، فتستجيب وحدة PID لتقديرٍ سلس بدل قيمةٍ قديمة — وهذا ما يمنع الموتورات من الاهتزاز في كل فجوة."
                  },
                  {
                    t: "آلة حالاتٍ للسلوك",
                    d: "أربع حالاتٍ تُدير النظام: بحث ← تتبّع ← فقدان ← عودة. أثناء البحث تمسح الكاميرا بحركةٍ جيبيةٍ بطيئة بدل الثبات، حتى تلتقط الهدف من جديد."
                  }
                ]
              },
              {
                h: "القصة الحقيقية: ثغرةٌ كلّفتني إعادة التدريب",
                p: "أول نموذجٍ بدا رائعًا على الورق (95% mAP)، لكنه في الواقع كان <strong>يقفل على صينيةٍ خشبية، وكرسي، ولمبة</strong>. السبب؟ مجموعة التدريب فيها 5 صور خلفيةٍ فقط من أصل 503 — النموذج لم يرَ تقريبًا كيف يبدو العالم <em>بدون</em> طائرة. الحل: دمجتُ ثلاثًا من أكبر مجموعات الدرونز (أكثر من 40 ألف صورة)، وأضفتُ خلفياتٍ صعبةً من COCO. النتيجة: mAP قفزت إلى 99%، والإيجابيات الخاطئة انهارت من ~100% إلى ~1%."
              }
            ],
            results: [
              {
                k: "الدقة",
                v: "94.8%"
              },
              {
                k: "الاستدعاء",
                v: "96.2%"
              },
              {
                k: "mAP@0.5",
                v: "99.0%"
              },
              {
                k: "الأداء على Pi 4",
                v: "15–20 إطار/ث"
              },
              {
                k: "الإيجابيات الخاطئة",
                v: "~1%"
              },
              {
                k: "صور التدريب",
                v: "+40,000"
              }
            ],
            note: "المقاييس من مجموعة التحقق أثناء التدريب، لا من اختبارٍ ميداني مستقل. المشروع مفتوح المصدر بالكامل — كل الكود والأوزان متاحة للتجربة والتعديل."
          },
          en: {
            lead: "One trained model, running in real time on a $35 computer, chasing drones and keeping them centered — no GPU, no shortcuts.",
            sections: [
              {
                h: "The problem",
                p: "Detecting drones is easy on a beefy GPU server. Getting it to run <strong>in real time on a GPU-less Raspberry Pi 4</strong>, and physically track the drone with servos that steer the camera — that is the hard part. The goal: a complete detect-and-follow system on a computer that fits in your palm."
              },
              {
                h: "The pipeline",
                p: "The system is a chain where each link feeds the next:",
                flow: [
                  "USB camera",
                  "YOLOv5s on ONNX (CPU only)",
                  "Kalman filter",
                  "PID controller",
                  "PCA9685",
                  "Pan/Tilt servos"
                ]
              },
              {
                h: "Engineering decisions",
                steps: [
                  {
                    t: "Why ONNX over PyTorch?",
                    d: "The Pi 4 has no GPU and no CUDA. Exporting the model to ONNX and running it with ONNXRuntime removes the PyTorch dependency entirely and gives optimized CPU-only inference — enough for 15-20 FPS on-device."
                  },
                  {
                    t: "Why a Kalman filter on top of PID?",
                    d: "Inference doesn't run every frame at full speed, so detections arrive late and jittery. The Kalman filter tracks position and velocity and predicts where the drone <em>is now</em>, so the PID reacts to a smooth estimate instead of a stale one — this is what stops the servos jittering on every gap."
                  },
                  {
                    t: "A state machine for behavior",
                    d: "Four states run the system: searching → tracking → lost → returning. While searching, the camera does a slow sine-wave scan instead of standing still, to re-acquire the target."
                  }
                ]
              },
              {
                h: "The real story: a bug that cost a retrain",
                p: "The first model looked great on paper (95% mAP) but in reality <strong>locked onto a wooden tray, a chair, a lamp</strong>. Why? The training set had only 5 background images out of 503 — the model had barely seen what the world looks like <em>without</em> a drone. The fix: I merged three of the largest drone datasets (40,000+ images) and added hard COCO backgrounds. Result: mAP jumped to 99%, false positives collapsed from ~100% to ~1%."
              }
            ],
            results: [
              {
                k: "Precision",
                v: "94.8%"
              },
              {
                k: "Recall",
                v: "96.2%"
              },
              {
                k: "mAP@0.5",
                v: "99.0%"
              },
              {
                k: "On Pi 4",
                v: "15–20 FPS"
              },
              {
                k: "False positives",
                v: "~1%"
              },
              {
                k: "Training images",
                v: "40,000+"
              }
            ],
            note: "Metrics are from the training validation split, not an independent field test. Fully open source — all code and weights available to run and modify."
          }
        }
    },{
        id: "arabic-emotion-detector",
        categories: ["python-ai"],
        featured: true,
        image: "assets/images/arabic-emotion-detector.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/arabic-emotion-detector",
        tags: ["Python", "AraBERT", "Whisper", "DeepFace", "NLP"],
        title: {
            ar: "محلل المشاعر العربي متعدد الوسائط — نص وصوت ومرئي",
            en: "Arabic Multimodal Emotion Detector — Text, Voice & Visual",
        },
        desc: {
            ar: "خط أنابيب يأخذ فيديو بالعربية الفصحى أو العامية، يفرّغه صوتيًا بـ Whisper، يحلّل مشاعر كل مقطع نصي بنموذج AraBERT مُدرَّب خصيصًا، يدمج ذلك مع تحليل تعابير الوجه، ويرصد خطاب الكراهية — لينتج فيديو مُترجَمًا مع شارة مشاعر، وملف SRT، وتقرير Excel كامل.",
            en: "A pipeline that takes an Arabic (MSA or dialect) video, transcribes it with Whisper, classifies the emotion of each text segment with a purpose-fine-tuned AraBERT model, fuses that with facial-expression analysis, and flags hate speech — producing a subtitled video with an emotion badge, an SRT file, and a full Excel report.",
        },
        details: {
            ar: "مشروعٌ شخصيٌّ بدأ كسكربتات تجميع بيانات منفصلة لتوحيد توسيمات بشرية متعددة لمقاطع نصية (بما فيها حسم اختلاف المُقيِّمين وقياس موثوقية الاتفاق بينهم إحصائيًا)، ثم تطوّر إلى نظامٍ واحدٍ متكامل: تقطيع الصوت يراعي فواصل الصمت الطبيعية بدل التقطيع الثابت كي لا تُقصّ الجمل في منتصفها، ونموذج النص وموزون طبقيًا لمعالجة عدم توازن الفئات، ويُدمَج مع نموذج تحليل الوجه بوزنٍ محسوب. الكود بالكامل مفتوح المصدر مع دليل تدريب خطوة بخطوة لمن يريد إعادة التدريب على بياناته الخاصة، وكل الأرقام المذكورة في التوثيق هي نتائج فعلية غير مُلفَّقة — بما فيها نقاط الضعف.",
            en: "A personal project that started as separate data-aggregation scripts to reconcile multiple human labels per text segment (including resolving rater disagreement and statistically measuring inter-rater reliability), then grew into one integrated system: audio segmentation respects natural silence boundaries instead of fixed-length cuts so sentences aren't chopped mid-word, the text model is class-weighted to handle label imbalance, and it's fused with a facial-expression model using a computed weight. The full code is open-source with a step-by-step training guide for anyone who wants to retrain it on their own data, and every number in the documentation is a real, unfabricated result — including the weaknesses.",
        },
        article: {
          ar: {
            lead: "خط أنابيب مفتوح المصدر لتحليل المشاعر العربية من النص والصوت والوجه معًا، مع توثيق صادق لكل رقم — بما فيه الضعف في الفئات النادرة.",
            sections: [
              {
                h: "الفكرة",
                p: "تحليل المشاعر في المحتوى العربي المرئي يحتاج أكثر من مجرد نص: نبرة الصوت وتعبير الوجه يحملان إشارات لا يلتقطها النص وحده. المشروع يدمج ثلاثة مصادر إشارة (نص مُفرَّغ صوتيًا، تعبير وجه، وفلتر خطاب كراهية منفصل) في حكمٍ واحد لكل مقطع، مع الحفاظ على تتبّع مصدر كل توسيم تدريبي وموثوقيته."
              },
              {
                h: "تدفّق خط الأنابيب",
                flow: [
                  "تفريغ صوتي بـ Whisper",
                  "تقطيع يراعي فواصل الصمت الطبيعية",
                  "تصنيف النص (AraBERT) + تصنيف تعبير الوجه (DeepFace)",
                  "دمج موزون بين النتيجتين + فحص خطاب الكراهية",
                  "فيديو مترجم + ملف SRT + تقرير Excel"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "حسم التوسيم بتسلسل أولويات صريح بدل قاعدة واحدة جامدة",
                    d: "بيانات التوسيم البشري كانت غير متجانسة: بعض المقاطع وسمها مُقيِّمان مستقلان، بعضها مُقيِّم واحد فقط، وبعضها موسوم آليًا بلا مُقيِّم بشري إطلاقًا. بدل تجاهل الفروق، بُني تسلسل أولويات واضح (اتفاق المُقيِّمَين → حسم التحكيم → مُقيِّم واحد → توسيم مسبق → بديل آلي)، مع قياس Cohen's Kappa فعليًا (٠.٦٦٨، اتفاق «جيد») على كل الصفوف التي وسمها مُقيِّمان — تحقّق إحصائي حقيقي بدل افتراض أن التصنيف قابل للاستخدام."
                  },
                  {
                    t: "تقطيع صوتي يراعي حدود الصمت لا طولًا ثابتًا",
                    d: "التقطيع بطول ثابت يقطع الجمل في منتصفها أحيانًا، ما يشوّه سياق النموذج النصي. استُبدل بمنطق يكتشف فواصل الصمت الطبيعية بين الجمل ويقطع عندها، فتبقى كل وحدة تحليل جملة كاملة قدر الإمكان."
                  },
                  {
                    t: "تدريب موزون طبقيًا لعدم توازن الفئات",
                    d: "توزيع المشاعر في البيانات غير متساوٍ إطلاقًا (الحزن والفرح يمثلان نصف العينات تقريبًا، بينما الاشمئزاز والحياد أقل من ٤٪ لكل منهما). أُضيف مسار تدريب موزون (WeightedTrainer) يرفع وزن الفئات النادرة في دالة الخسارة، ونُشرت المقارنة الكاملة بين النسختين (عادية وموزونة) بدل اختيار الأفضل ظاهريًا وإخفاء الأخرى."
                  }
                ]
              },
              {
                h: "حدود صادقة، لا أرقام مجمّلة",
                p: "دقة الاختبار (٥٥–٥٧٪) ومتوسط F1 الكلي (٠.٣٣–٠.٤٣) متواضعان لأن حجم البيانات محدود (١٤٣٦ عينة) وبعض الفئات نادرة جدًا (الاشمئزاز ٤٥ عينة فقط) — وهذا مذكور صراحةً في التوثيق بدل إخفائه. الهدف مشروع تعليمي/شخصي قابل لإعادة الإنتاج والتطوير، لا منتج إشراف على المحتوى جاهز للإنتاج."
              }
            ],
            results: [
              { k: "عينات نصية موسومة", v: "1,436" },
              { k: "Cohen's Kappa (موثوقية الاتفاق)", v: "0.668" },
              { k: "أفضل Macro F1 (نموذج موزون)", v: "0.43" }
            ],
            note: "مشروعٌ شخصيٌّ مفتوح المصدر لأغراض تعليمية وportfolio، وليس منتج إشراف على المحتوى معتمَدًا — كل الأرقام أعلاه نتائج اختبار فعلية غير مُلفَّقة، بما فيها ضعف الأداء على الفئات النادرة، وموثّقة بالتفصيل في المستودع مع دليل تدريب كامل لإعادة الإنتاج."
          },
          en: {
            lead: "An open-source pipeline for Arabic emotion analysis from text, voice, and face together, with honest documentation of every number — including the weakness on rare classes.",
            sections: [
              {
                h: "The idea",
                p: "Emotion analysis in Arabic video content needs more than text alone: vocal tone and facial expression carry signals text misses. The project fuses three signal sources (transcribed text, facial expression, and a separate hate-speech filter) into one per-segment judgment, while keeping track of each training label's source and reliability."
              },
              {
                h: "Pipeline flow",
                flow: [
                  "Whisper audio transcription",
                  "Silence-boundary-aware segmentation",
                  "Text classification (AraBERT) + facial-expression classification (DeepFace)",
                  "Weighted fusion of both results + hate-speech check",
                  "Subtitled video + SRT file + Excel report"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Resolving labels with an explicit priority cascade instead of one rigid rule",
                    d: "The human-annotation data was inherently uneven: some segments had two independent raters, some only one, and some were machine-labeled with no human rater at all. Instead of ignoring these differences, an explicit priority cascade was built (both raters agree → arbitrator resolves → single rater → pre-labeled → machine fallback), with Cohen's Kappa actually measured (0.668, \"good\" agreement) across every row both raters labeled — a real statistical check rather than assuming the taxonomy is usable."
                  },
                  {
                    t: "Silence-boundary-aware segmentation instead of fixed-length cuts",
                    d: "Fixed-length segmentation sometimes cuts a sentence mid-word, distorting the text model's context. It was replaced with logic that detects natural silence gaps between sentences and cuts there instead, keeping each analysis unit as close to a full sentence as possible."
                  },
                  {
                    t: "Class-weighted training for label imbalance",
                    d: "The emotion distribution is far from even (sadness and joy alone are roughly half of all samples, while disgust and neutral are each under 4%). A weighted training path (WeightedTrainer) was added to up-weight rare classes in the loss function, and the full comparison between both variants (normal and weighted) is published rather than picking the better-looking one and hiding the other."
                  }
                ]
              },
              {
                h: "Honest limitations, not polished numbers",
                p: "Test accuracy (55–57%) and macro-F1 (0.33–0.43) are modest because the dataset is small (1,436 samples) and some classes are quite rare (disgust has only 45 samples) — and this is stated explicitly in the documentation rather than hidden. The goal is a reproducible educational/personal project, not a production-ready content-moderation product."
              }
            ],
            results: [
              { k: "Labeled text samples", v: "1,436" },
              { k: "Cohen's Kappa (inter-rater reliability)", v: "0.668" },
              { k: "Best macro F1 (weighted model)", v: "0.43" }
            ],
            note: "A personal, open-source project for educational and portfolio purposes, not a certified content-moderation product — every number above is a real, unfabricated test result, including the weaker performance on rare classes, and it's documented in full in the repository along with a complete training guide for reproducing it."
          }
        }
    },{
        id: "smart-medication-queue",
        categories: ["arduino"],
        featured: true,
        image: "assets/images/smart-medication-queue.jpg",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/smart-medication-queue",
        tags: ["Arduino", "C++", "Embedded", "State Machine", "Concurrency"],
        title: {
            ar: "طابور صرف الجرعات الدوائية الذكي (Smart Medication Queue)",
            en: "Smart Medication Queue",
        },
        desc: {
            ar: "نظام تذكير بجرعاتٍ دوائيةٍ لعدة مرضى في آنٍ واحد على Arduino Mega — أعيدت كتابته بالكامل ليصلح علّة تزامنٍ حقيقية كانت تُجمّد الأنظمة الأخرى كل مرة يتأخر فيها مريضٌ واحد عن تأكيد جرعته.",
            en: "A multi-patient medication reminder on an Arduino Mega — fully rewritten to fix a real concurrency bug that froze every other patient's timer whenever one patient was slow to acknowledge their dose.",
        },
        details: {
            ar: "إعادة بناءٍ كاملة لنموذجٍ مخبريٍّ سابق. النموذج الأصلي كان يستخدم استدعاء `while (digitalRead(...) == HIGH);` حاجزًا لانتظار ضغط الزر — ما كان يوقف الحلقة الرئيسية بأكملها، فيُجمِّد عدّادات كل المرضى الآخرين حتى يُؤكَّد ذلك الزر تحديدًا. أُعيدت كتابة النظام بالكامل باستخدام علمٍ (`alertActive`) لكل مريضٍ يُفحص مرة واحدة في كل دورة loop، وتوقيتٍ مبنيٍّ على millis() بدل delay()، بحيث تتقدّم عدّادات خمسة مرضى مستقلين بالتوازي فعليًا، ويمكن تأكيد أيّ جرعةٍ بأيّ ترتيب دون التأثير على الآخرين.",
            en: "A full rebuild of an earlier bench prototype. The original used a blocking `while (digitalRead(...) == HIGH);` call to wait for a button press — freezing the entire main loop, including every other patient's countdown, until that one button was pressed. The system was rewritten around a per-patient `alertActive` flag checked once per loop pass and millis()-based timing instead of delay(), so five independent patient timers genuinely progress in parallel and any dose can be acknowledged in any order without affecting the others.",
        },
        article: {
          ar: {
            lead: "نظامٌ صُمِّم ليتابع خمسة مرضى في آنٍ واحد، لكنه في الواقع كان يتسلسل لمريضٍ واحدٍ بسبب استدعاءٍ حاجزٍ واحد — وهذه قصة إصلاحه.",
            sections: [
              {
                h: "الفكرة",
                p: "نظام تذكيرٍ بمواعيد الجرعات لعدة مرضى في آنٍ واحد على Arduino Mega، بمؤشر LED وزر تأكيدٍ مستقلّين لكل مريض، وشاشة LCD مشتركة تعرض من يحتاج انتباهًا الآن."
              },
              {
                h: "خط العمل",
                flow: [
                  "إضافة مريض (Serial) + ضبط الفاصل الزمني",
                  "عدّادات millis() مستقلة لكل مريض",
                  "تنبيه LED+جرس عند استحقاق الجرعة",
                  "تأكيدٌ بأي ترتيب (alertActive flag)",
                  "إتمام الجرعات + مسح غير حاجز"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "علّة تزامنٍ حقيقية، اكتُشفت وأُصلحت",
                    d: "النسخة الأصلية استخدمت `while (digitalRead(buttonPins[patientIndex]) == HIGH);` — سطرٌ واحدٌ كان يُجمّد الحلقة الرئيسية بأكملها بما فيها عدّادات المرضى الآخرين، حتى يُضغط ذلك الزر تحديدًا. نظامٌ صُمم صراحةً ليتابع خمسة مرضى باستقلالية كان عمليًا يعمل لمريضٍ واحدٍ في كل مرة."
                  },
                  {
                    t: "الإصلاح: علمٌ لكل مريض بدل حلقة انتظارٍ حاجزة",
                    d: "استُبدل كل `while` حاجزٍ بعلَم `alertActive` يُفحص مرةً واحدة في كل دورة loop، وتلاشي (fade) LED الإتمام أصبح مبنيًا على millis() بدل delay() — فتستمر عدّادات كل المرضى الآخرين بالعمل بالضبط في موعدها بينما يُؤكَّد أي مريضٍ آخر جرعته."
                  },
                  {
                    t: "استثناءٌ متعمَّد وموثَّق",
                    d: "`flashMessage()` ما زالت تستخدم `delay()` حاجزًا قصيرًا، لكن فقط لرسائل تأكيدٍ لمرةٍ واحدة (مريضٌ أُضيف / اكتمل / لا مساحة) — أبدًا في مسار التنبيه أو الإتمام، حتى لا يتكرر نفس الخلل عن طريق الخطأ."
                  }
                ]
              },
              {
                h: "حدودٌ صادقة",
                p: "الفواصل الزمنية بالثواني (20–300 ثانية) لا بالساعات، لتتّسع لعرضٍ مخبري — موثّقٌ صراحةً في الكود. لا استمرارية بيانات (RAM فقط)، وجرسٌ واحدٌ مشتركٌ بين كل المرضى. هذا مشروعٌ تعليميٌّ لمفاهيم التزامن في الأنظمة المدمجة، وليس جهازًا طبيًّا معتمدًا."
              }
            ],
            results: [
              { k: "مرضى مستقلّون بالتوازي", v: "5" },
              { k: "استدعاءات while حاجزة أُزيلت", v: "2" },
              { k: "استمراريّة البيانات", v: "RAM فقط" }
            ],
            note: "مشروعٌ هوايةٍ تعليمي لمفاهيم التزامن غير الحاجز في الأنظمة المدمجة، وليس جهازًا طبيًّا معتمدًا — يتابع تذكيراتٍ فقط، لا هوية الدواء أو مقداره أو تفاعلاته. الكود مفتوحٌ بالكامل."
          },
          en: {
            lead: "A system designed to track five patients at once, but which actually serialized to one patient at a time because of a single blocking call — this is the fix.",
            sections: [
              {
                h: "The idea",
                p: "A multi-patient medication reminder on an Arduino Mega, with an independent LED and confirm button per patient, and a shared LCD showing whoever needs attention right now."
              },
              {
                h: "How it works",
                flow: [
                  "Add patient (Serial) + set interval",
                  "Independent millis() timers per patient",
                  "LED+buzzer alert when dose is due",
                  "Acknowledge in any order (alertActive flag)",
                  "Course completion + non-blocking clear"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "A real concurrency bug, found and fixed",
                    d: "The original used `while (digitalRead(buttonPins[patientIndex]) == HIGH);` — one line that froze the entire main loop, including every other patient's countdown, until that specific button was pressed. A system explicitly designed to track five patients independently was, in practice, serialized to one at a time."
                  },
                  {
                    t: "The fix: a per-patient flag instead of a blocking wait loop",
                    d: "Every blocking `while` was replaced with an `alertActive` flag checked once per loop pass, and the completion LED fade moved to millis()-based timing instead of delay() — so every other patient's timer keeps running exactly on schedule while any patient's dose is acknowledged."
                  },
                  {
                    t: "A deliberate, documented exception",
                    d: "`flashMessage()` still uses a short blocking `delay()`, but only for one-off confirmation messages (patient added / completed / queue full) — never on the due-alert or completion path, so the same bug can't quietly reappear."
                  }
                ]
              },
              {
                h: "Honest limitations",
                p: "Intervals are in seconds (20-300s), not hours, so the demo fits on a bench — documented directly in the code. No data persistence (RAM only), and one buzzer shared across all patients. This is an educational demonstration of embedded concurrency, not a certified medical device."
              }
            ],
            results: [
              { k: "Independent parallel patients", v: "5" },
              { k: "Blocking while-loops removed", v: "2" },
              { k: "Data persistence", v: "RAM only" }
            ],
            note: "A hobbyist/educational project about non-blocking concurrency in embedded systems, not a certified medical device — it tracks reminders only, not medication identity, dosage, or drug interactions. Fully open source."
          }
        }
    },{
        id: "age-gender-ai-detection",
        categories: ["python-ai", "raspberrypi"],
        featured: true,
        image: "assets/images/age-gender-detect.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/age-gender-ai-detection",
        tags: ["Python", "PyTorch", "Gradio", "Raspberry Pi"],
        title: {
            ar: "الكشف عن العمر والجنس بالذكاء الاصطناعي",
            en: "Age & Gender AI Detection",
        },
        desc: {
            ar: "شبكتان عصبونيتان تلافيفيتان مدرَّبتان من الصفر تتنبآن بالجنس الظاهري وفئة عمرية (5 سنوات) من صورة وجه واحدة، بتطبيق ويب تفاعلي ونسخة تعمل دون إنترنت على Raspberry Pi 4.",
            en: "Two CNNs trained from scratch predict apparent gender and a 5-year age range from a single face photo, shipped as an interactive web demo and an offline Raspberry Pi 4 deployment.",
        },
        details: {
            ar: "شبكتان CNN صغيرتان مدرَّبتان من الصفر (لا تعلّم منقول) على قاعدة بيانات UTKFace، بدقة 91.4% لتصنيف الجنس و78.6% للفئة العمرية بخطوة 5 سنوات (مقاسة على اختبار دفعي من 5000 صورة). يعمل النظام بطريقتين: تطبيق ويب تفاعلي عبر Gradio (رفع صورة أو كاميرا ويب)، ونسخة كاملة دون اتصال بالإنترنت على Raspberry Pi 4 بكاميرا حية وواجهة Tkinter. المشروع يوثّق قيوده الصادقة بدل إخفائها — بما فيها ضعف دقة العمر الدقيق (~29%) وحساسية الإضاءة.",
            en: "Two lightweight CNNs trained from scratch (no transfer learning) on the UTKFace dataset, reaching 91.4% gender-classification accuracy and 78.6% 5-year age-range accuracy (measured on a 5,000-image batch test). Ships two ways: an interactive Gradio web demo (photo upload or webcam) and a fully offline Raspberry Pi 4 deployment with a live camera and Tkinter GUI. The project documents its honest limitations rather than hiding them — including weak exact-age accuracy (~29%) and lighting sensitivity.",
        },
        article: {
          ar: {
            lead: "شبكتان عصبونيتان خفيفتان — مُدرَّبتان من الصفر لا بالتعلّم المنقول — تتنبآن بالجنس الظاهري وبمدىً عمريٍّ من صورة وجهٍ واحدة، وتعملان على المتصفح وعلى راسبيري باي دون إنترنت.",
            sections: [
              {
                h: "الفكرة",
                p: "من صورةٍ واحدة، يتنبأ النظام بالجنس الظاهري وبفئةٍ عمريةٍ بخطوة 5 سنوات. نفس النموذجين يعملان بطريقتين: تطبيق ويبٍ تفاعليٍّ عبر Gradio، ونسخةٌ تعمل بالكامل دون اتصالٍ بالإنترنت على راسبيري باي مع كاميرا حية."
              },
              {
                h: "النموذجان",
                flow: [
                  "صورة وجه (128×128)",
                  "طبقات تلافيفية",
                  "إخراج مزدوج",
                  "الجنس + فئة عمرية"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "لماذا شبكتان منفصلتان لا شبكةٌ متعددة المهام؟",
                    d: "دُرِّب الجنس والعمر وقُيِّما بشكلٍ مستقل، ما أبقى سطح الخلل بسيطًا — فلو أخطأ أحدهما، يكون واضحًا أيّهما، ويمكن إعادة تدريب أو استبدال أيٍّ منهما دون المساس بالآخر."
                  },
                  {
                    t: "لماذا مدىً عمريٌّ لا رقمٌ دقيق؟ (قرارٌ بررته البيانات)",
                    d: "دقة العمر الدقيق نحو <em>29%</em> فقط، بينما تصل الدقة عند التجميع بفئاتٍ من 5 سنوات إلى <strong>78.6%</strong>. فعرض مدىً عمريٍّ ليس خيارًا تجميليًا، بل ما يدعمه هامش الخطأ المقيس فعليًا."
                  },
                  {
                    t: "لماذا شبكةٌ خفيفةٌ لا MobileNet؟",
                    d: "استكشفت نسخةٌ سابقة التعلّم المنقول عبر MobileNet — دقةٌ أعلى لكن ثقلٌ يفوق ما يحتمله الراسبيري باي حيًّا. النماذج المشحونة صغيرةٌ ومدرّبةٌ من الصفر، تعمل بارتياحٍ على معالج الـPi بلا GPU — مقايضةٌ بين سقف الدقة والتشغيل الفعلي على العتاد."
                  }
                ]
              },
              {
                h: "الصدق في النتائج",
                p: "دقة تصنيف الجنس <strong>91.4%</strong>، والفئة العمرية <strong>78.6%</strong> — لكن قِيست على صورٍ مقصوصةٍ ومواجهةٍ مسبقًا. الوجه الصغير أو المائل في كاميرا حقيقية سيؤدي أضعف. المشروع يوثّق هذا صراحةً بدل إخفائه."
              }
            ],
            results: [
              {
                k: "دقة الجنس",
                v: "91.4%"
              },
              {
                k: "الفئة العمرية",
                v: "78.6%"
              },
              {
                k: "العمر الدقيق",
                v: "~29%"
              },
              {
                k: "زمن الاستدلال",
                v: "~0.28s"
              }
            ],
            note: "مشروعٌ تعريفيٌّ بحثي، لا نظام قياسٍ حيويٍّ أو طبيٍّ أو أمنيّ. الكود والنماذج مفتوحةٌ بالكامل."
          },
          en: {
            lead: "Two lightweight CNNs — trained from scratch, not transfer-learned — predict apparent gender and an age range from a single face photo, running in the browser and offline on a Raspberry Pi.",
            sections: [
              {
                h: "The idea",
                p: "From one photo, the system predicts apparent gender and a 5-year age range. The same two models ship two ways: an interactive Gradio web demo, and a fully offline Raspberry Pi build with a live camera."
              },
              {
                h: "The two models",
                flow: [
                  "Face photo (128×128)",
                  "Convolutional layers",
                  "Dual output",
                  "Gender + age range"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Why two separate nets, not one multi-task?",
                    d: "Gender and age were trained and evaluated independently, keeping the failure surface simple — if one misbehaves it's obvious which, and either can be retrained or swapped without touching the other."
                  },
                  {
                    t: "Why a range, not an exact number? (the data justified it)",
                    d: "Exact-age accuracy is about <em>29%</em>, while the same model bucketed into 5-year ranges reaches <strong>78.6%</strong>. Reporting a range isn't cosmetic; it's what the measured error actually supports."
                  },
                  {
                    t: "Why a lightweight net, not MobileNet?",
                    d: "An earlier version explored MobileNet transfer learning — higher accuracy but too heavy for the Pi in real time. The shipped models are small, from-scratch CNNs that run comfortably on the Pi's CPU with no GPU — trading ceiling accuracy for actually running on the target hardware."
                  }
                ]
              },
              {
                h: "Honesty in the results",
                p: "Gender accuracy <strong>91.4%</strong>, age range <strong>78.6%</strong> — but measured on pre-cropped, front-facing images. A small or off-center face in a real webcam will perform worse. The project documents this openly rather than hiding it."
              }
            ],
            results: [
              {
                k: "Gender accuracy",
                v: "91.4%"
              },
              {
                k: "Age range",
                v: "78.6%"
              },
              {
                k: "Exact age",
                v: "~29%"
              },
              {
                k: "Inference",
                v: "~0.28s"
              }
            ],
            note: "A portfolio/research project, not a biometric, medical or security-grade system. Code and models fully open source."
          }
        }
    },{
        id: "lifi-optical-link",
        categories: ["arduino", "iot"],
        featured: true,
        image: "assets/images/lifi-optical-link.jpg",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/lifi-optical-link",
        tags: ["Arduino", "Python", "Optical Communication", "UART", "Air-Gapped"],
        title: {
            ar: "رابط LiFi ضوئي لنقل بياناتٍ بلا اتصالٍ شبكي",
            en: "LiFi Optical Link — Air-Gapped Byte Transfer",
        },
        desc: {
            ar: "منفذٌ تسلسليٌّ برمجيٌّ يعمل عبر الضوء المرئي: يرسل ملفًّا أو رسالةً بايتًا بايتًا من Arduino إلى آخر عبر الغرفة، بإطارٍ يشبه UART وبتّ تعادلٍ لكشف الأخطاء — لا واي فاي، لا بلوتوث، ولا أي سلكٍ بين اللوحتين.",
            en: "A software UART running over visible light: sends a file or message byte-by-byte from one Arduino to another across the room, framed like a UART byte with a parity bit for error detection — no WiFi, Bluetooth, or wire between the boards.",
        },
        details: {
            ar: "إعادة بناءٍ كاملة لنموذجٍ أوّليٍّ كان يرسل رمزًا واحدًا فقط من لوحة مفاتيحٍ ثابتة (أحد 16 رمزًا) في كل مرة. هذه النسخة تعمم البروتوكول إلى بايتاتٍ كاملة من 8 بتات بإطار `[START] [8 بتات] [تعادل] [STOP]`، فيمكنها نقل أي نصٍّ ASCII. أداتا بايثون على طرفَي الرابط تتيحان إرسال ملفٍّ فعليٍّ من حاسوبٍ واستقباله على حاسوبٍ آخر عبر الضوء، مع تسجيل أخطاء التعادل بدل إسقاط البيانات المشكوك فيها صامتًا.",
            en: "A full rebuild of a prototype that could only send one fixed keypad symbol (one of 16) at a time. This version generalizes the protocol to full 8-bit bytes framed as `[START] [8 bits] [parity] [STOP]`, so it carries arbitrary ASCII text. Python tools on each end let you send a real file from one PC and receive it on another entirely via light, logging parity errors instead of silently dropping suspect data.",
        },
        article: {
          ar: {
            lead: "من إرسال رقمٍ واحدٍ من لوحة مفاتيح، إلى نقل ملفٍّ كاملٍ عبر الضوء فقط — بإطارٍ يشبه UART وبتّ تعادلٍ لا يُخفي الأخطاء.",
            sections: [
              {
                h: "الفكرة",
                p: "اكتب رسالةً أو أشِر إلى ملفٍّ نصيٍّ، فيرسلها Arduino كومضاتٍ ضوئية، يلتقطها Arduino ثانٍ بمقاومةٍ ضوئية ويعيد بناءها بايتًا بايتًا — رابطٌ بلا أي اتصالٍ شبكي، فقط خط رؤيةٍ ضوئي."
              },
              {
                h: "تدفّق البيانات",
                flow: [
                  "PC: send_message.py",
                  "Arduino TX → LED يومض",
                  "هواءٌ مفتوح (لا شبكة)",
                  "LDR → Arduino RX",
                  "PC: receive_message.py"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "إطارٌ يشبه UART بدل رمز لوحة مفاتيحٍ ثابت",
                    d: "البروتوكول الأصلي: 16 رمزًا فقط بنمط 5 بتاتٍ خام دون كشف أخطاء. هذه النسخة: بايتٌ كاملٌ من 8 بتات بإطار `[START=1] [8 بتات LSB أولًا] [تعادل] [STOP=0]`، فيعمل مع أي نصّ ASCII."
                  },
                  {
                    t: "بت تعادلٍ لا يُسقِط البايتات الفاسدة صامتًا",
                    d: "عند عدم تطابق التعادل، يُسلَّم البايت مع تعليق `[parity mismatch]` بدل إسقاطه — كي لا يُخفى نمط الفشل الحقيقي (ضوضاء الإضاءة، سوء المحاذاة)."
                  },
                  {
                    t: "توقيتٌ في أداة الإرسال يطابق سرعة الومض الفعلية",
                    d: "كل بايتٍ يستغرق ~150 مللي ثانية للومض. أداة `send_message.py` تُوقِّت كتاباتها لتطابق ذلك، وإلا تفيض ذاكرة استقبال Arduino الصغيرة لأي رسالةٍ أطول من بضع عشرات بايت."
                  }
                ]
              },
              {
                h: "حدودٌ صادقة",
                p: "المعدّل ~6-7 بايت/ثانية فقط — يوضّح مفهوم الرابط الضوئي، لا سرعة Li-Fi الحقيقية. لا استعادة ساعةٍ داخل البايت، والتعادل يكشف الأخطاء الفردية فقط دون تصحيحها، والرابط باتجاهٍ واحدٍ لكل زوج لوحات."
              }
            ],
            results: [
              { k: "بتات الإطار لكل بايت", v: "11" },
              { k: "معدّل النقل", v: "~6-7 بايت/ث" },
              { k: "كشف الأخطاء", v: "بت تعادل" }
            ],
            note: "عرضٌ تعليميٌّ لمفهوم النقل الضوئي بلا اتصالٍ شبكي، لا رابط اتصالاتٍ عالي السرعة معتمَد. الكود مفتوحٌ بالكامل."
          },
          en: {
            lead: "From sending one digit from a keypad, to transferring a whole file through light alone — framed like a UART byte, with a parity bit that doesn't hide errors.",
            sections: [
              {
                h: "The idea",
                p: "Type a message or point at a text file, and an Arduino sends it as light flashes; a second Arduino picks it up with a photoresistor and reconstructs it byte by byte — a link with no network connection at all, only an optical line of sight."
              },
              {
                h: "Data flow",
                flow: [
                  "PC: send_message.py",
                  "Arduino TX → LED flashing",
                  "Open air (no network)",
                  "LDR → Arduino RX",
                  "PC: receive_message.py"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "A UART-style frame instead of one fixed keypad code",
                    d: "The original protocol: 16 symbols only, a bare 5-bit pattern with no error checking. This version: a full 8-bit byte framed as `[START=1] [8 bits LSB-first] [parity] [STOP=0]`, so it carries any ASCII text."
                  },
                  {
                    t: "A parity bit that doesn't silently drop bad bytes",
                    d: "On a parity mismatch, the byte is still delivered, annotated `[parity mismatch]`, instead of discarded — so the real failure mode (ambient light noise, misalignment) isn't hidden."
                  },
                  {
                    t: "Sender pacing matched to the real flash rate",
                    d: "Each byte takes ~150ms to flash out. `send_message.py` paces its writes to match, otherwise Arduino's small receive buffer overflows on any message longer than a few dozen bytes."
                  }
                ]
              },
              {
                h: "Honest limitations",
                p: "Only ~6-7 bytes/sec — this demonstrates the optical-link concept, not real Li-Fi speeds. No clock recovery mid-byte, parity only detects odd-numbered errors without correcting them, and the link is one-directional per board pair."
              }
            ],
            results: [
              { k: "Frame bits per byte", v: "11" },
              { k: "Transfer rate", v: "~6-7 bytes/sec" },
              { k: "Error detection", v: "Parity bit" }
            ],
            note: "An educational demonstration of air-gapped optical data transfer, not a certified high-speed communication link. Fully open source."
          }
        }
    },{
        id: "nfc-attendance-system",
        categories: ["arduino", "iot"],
        featured: true,
        image: "assets/images/nfc-attendence-system.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/nfc-attendance-system",
        tags: ["ESP32", "C++", "NFC", "IoT", "Google Sheets"],
        title: {
            ar: "نظام حضور وتحكّم دخول بالـ NFC (NFC Attendance & Access Control)",
            en: "NFC Attendance & Access Control System",
        },
        desc: {
            ar: "نظام حضور على ESP32: لمسة كارت NFC تسجّل الحضور بوقتٍ حقيقي (NTP) في Google Sheet عبر الواي فاي، مع منع تكرار البصمة، ووضع تسجيل كروت بالكيباد، وسيرفو لفتح الباب للكروت المصرّح لها.",
            en: "An ESP32 attendance system: a tap of an NFC card logs attendance with a real NTP timestamp to a Google Sheet over Wi-Fi, with duplicate-scan protection, keypad-based card enrollment, and a servo that opens the gate for authorized cards.",
        },
        details: {
            ar: "إعادة بناءٍ كاملة لنموذجٍ مخبريٍّ سابق كان يعمل على Arduino Uno. النموذج الأصلي كان يعتمد على حلقات انتظارٍ حاجزة (‎while (true)‎) لقراءة الكيباد فتُجمّد القارئ، وكان يختم الحضور بساعةٍ برمجيةٍ بلا مرجعٍ زمنيٍّ حقيقي فتخرج تواريخ غير صحيحة. أُعيدت كتابة النظام بالكامل على ESP32 بآلة حالاتٍ غير حاجزة، ويجلب الوقت الصحيح من خادم NTP عبر الواي فاي، ويمنع تكرار تسجيل نفس الكارت خلال فترة تهدئةٍ قابلةٍ للضبط، ويرفع كل صفٍّ (تاريخ، وقت، رقم الكارت، الاسم) تلقائيًا إلى Google Sheet عبر باك-إند خفيف على Apps Script. حُفِظت مميزات النسخة الأصلية: قراءة/كتابة اسمٍ أو رقمٍ على الكارت بصيغة NDEF، ووضعا الحضور والتسجيل عبر الكيباد، وسيرفو للتحكم في الدخول للكروت المصرّح لها، مع ردٍّ فوريٍّ على شاشة LCD وLED وجرس. الأسرار (بيانات الواي فاي ورابط الخدمة) معزولةٌ في ملف إعداداتٍ منفصلٍ لا يُرفَع، وكل القيود موثّقةٌ بصراحة.",
            en: "A full rebuild of an earlier bench prototype that ran on an Arduino Uno. The original relied on blocking `while (true)` loops to read the keypad, freezing the reader, and stamped attendance with a software clock that had no real time reference, producing incorrect dates. The system was rewritten entirely on an ESP32 with a non-blocking state machine, pulls the correct time from an NTP server over Wi-Fi, ignores repeat scans of the same card within a configurable cooldown window, and automatically uploads each row (date, time, UID, name) to a Google Sheet through a lightweight Apps Script backend. The original features were preserved: reading/writing a name or ID onto the card as NDEF, keypad-driven attendance and enrollment modes, and a servo for access control on authorized cards, with instant feedback on an LCD, LEDs, and a buzzer. Secrets (Wi-Fi credentials and the service URL) are isolated in a separate config file that is never committed, and every limitation is documented honestly.",
        },
        article: {
          ar: {
            lead: "لمسةٌ واحدة تسجّل الحضور بوقتٍ حقيقيٍّ في السحابة وتفتح الباب — نظامٌ مدمجٌ على ESP32 أُعيد بناؤه من نموذجٍ مخبريٍّ كان يُجمِّد القارئ ويختم بوقتٍ غير صحيح.",
            sections: [
              {
                h: "الفكرة",
                p: "بدل تسجيل الحضور يدويًا، يقرأ ESP32 رقم الكارت عبر قارئ PN532، يختمه بوقتٍ دقيقٍ من خادم NTP، ويضيف صفًّا في Google Sheet مباشرةً. الكيباد يبدّل بين وضع الحضور ووضع تسجيل الكروت، والشاشة تعطي ردًّا فوريًا، والسيرفو يفتح الباب فقط للكروت المصرّح لها."
              },
              {
                h: "خط العمل",
                flow: [
                  "لمس كارت NFC (PN532)",
                  "قراءة الرقم + الاسم (NDEF)",
                  "ختم وقتٍ حقيقيٍّ من NTP",
                  "فحص تكرار البصمة (فترة تهدئة)",
                  "رفع الصف إلى Google Sheet",
                  "فتح الباب للكروت المصرّح لها"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "وقتٌ حقيقيٌّ من NTP بدل ساعةٍ برمجيةٍ وهمية",
                    d: "النسخة الأولى ختمت الصفوف بعدّادٍ حرٍّ بلا أي مرجعٍ زمنيٍّ حقيقي، فكانت التواريخ بلا معنى. الانتقال إلى ESP32 + NTP يعطي ختمَ وقتٍ صحيحًا فعليًا كلما توفّر الواي فاي — تحسينٌ جوهريٌّ لا مجرد تلميع."
                  },
                  {
                    t: "آلة حالاتٍ غير حاجزة بدل حلقات الانتظار",
                    d: "أُزيلت كل حلقات ‎while (true)‎ التي كانت تُجمّد الحلقة الرئيسية بانتظار ضغطة كيباد، واستُبدلت بقراءةٍ غير حاجزةٍ للمفاتيح وتوقيتٍ مبنيٍّ على millis()، فيبقى القارئ مستجيبًا طوال الوقت."
                  },
                  {
                    t: "منع تكرار البصمة بجدولٍ في الذاكرة",
                    d: "جدولٌ دائريٌّ صغيرٌ للأرقام المقروءة مؤخرًا يمنع تسجيل نفس الشخص مرتين خلال فترةٍ قابلةٍ للضبط — حلٌّ كافٍ بلا تعقيد قاعدة بيانات."
                  },
                  {
                    t: "Google Sheets كباك-إند بلا خادم",
                    d: "سكربت Apps Script يستقبل الحضور ويكتبه في جدولٍ مجاني يمكن الوصول إليه من أي مكان — لا خادمٌ يُصان، مناسبٌ لنظامٍ محمولٍ مكتفٍ بذاته."
                  }
                ]
              },
              {
                h: "حدودٌ صادقة",
                p: "بدون واي فاي يسجّل النظام محليًا فقط ويعلّم الوقت بأنه غير متوفّر، ولا يُخزِّن الصفوف مؤقتًا لرفعها لاحقًا (مُدرَجٌ في خارطة الطريق). ونداء HTTPS في العرض يستخدم setInsecure()‎ ويجب تثبيت الشهادة في التشغيل الفعلي. وكأي نظامٍ يعتمد على رقم الكارت فقط، الكروت العادية قابلةٌ للاستنساخ — للأمان الأعلى تُستخدم كروتٌ بمصادقةٍ متبادلة."
              }
            ],
            results: [
              { k: "مصدر الوقت", v: "NTP" },
              { k: "منع التكرار", v: "فترة قابلة للضبط" },
              { k: "التسجيل", v: "Google Sheet" },
              { k: "الأوضاع", v: "حضور + تسجيل" }
            ],
            note: "مشروعٌ شخصيٌّ مفتوح المصدر لأغراضٍ تعليميةٍ وportfolio. الأسرار placeholders في ملف الإعداد، والكود كامل مع دليل توصيلٍ وباك-إند جاهز."
          },
          en: {
            lead: "One tap logs attendance to the cloud with a real timestamp and opens the door — an embedded ESP32 system rebuilt from a bench prototype that used to freeze the reader and stamp the wrong time.",
            sections: [
              {
                h: "The idea",
                p: "Instead of taking attendance by hand, the ESP32 reads a card's UID over a PN532 reader, stamps it with an accurate NTP time, and appends a row to a Google Sheet directly. The keypad toggles attendance and enrollment modes, the LCD gives instant feedback, and the servo opens the door only for authorized cards."
              },
              {
                h: "How it works",
                flow: [
                  "Tap an NFC card (PN532)",
                  "Read UID + name (NDEF)",
                  "Stamp real time from NTP",
                  "Duplicate-scan check (cooldown)",
                  "Upload the row to a Google Sheet",
                  "Open the gate for authorized cards"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Real NTP time instead of a fake software clock",
                    d: "The first version stamped rows with a free-running counter that had no real time reference, so the dates were meaningless. Moving to ESP32 + NTP gives genuinely correct timestamps whenever Wi-Fi is available — a substantive improvement, not just polish."
                  },
                  {
                    t: "A non-blocking state machine instead of wait loops",
                    d: "Every `while (true)` that froze the main loop waiting for a keypress was removed and replaced with non-blocking key reads and millis()-based timing, so the reader stays responsive at all times."
                  },
                  {
                    t: "Duplicate-scan protection with an in-memory table",
                    d: "A small ring buffer of recently seen UIDs stops the same person being counted twice within a configurable window — enough without the complexity of a database."
                  },
                  {
                    t: "Google Sheets as a serverless backend",
                    d: "An Apps Script endpoint receives attendance and writes it to a free, universally accessible sheet — no server to maintain, ideal for a portable, self-contained system."
                  }
                ]
              },
              {
                h: "Honest limitations",
                p: "With no Wi-Fi the device logs locally only and marks the time as unavailable; rows are not queued for later upload (on the roadmap). The demo HTTPS call uses setInsecure() and should use certificate pinning in the field. And like any UID-only system, standard cards can be cloned — for higher security use cards with mutual authentication."
              }
            ],
            results: [
              { k: "Time source", v: "NTP" },
              { k: "Dedup", v: "Configurable window" },
              { k: "Logging", v: "Google Sheet" },
              { k: "Modes", v: "Attendance + Enroll" }
            ],
            note: "A personal, open-source project for educational and portfolio purposes. Secrets are placeholders in the config file, and the code ships complete with a wiring guide and a ready backend."
          }
        }
    },{
        id: "smart-door-guardian",
        categories: ["raspberrypi", "python-ai"],
        featured: true,
        image: "assets/images/smart-door-guardian.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/smart-door-guardian",
        tags: ["Python", "OpenCV", "Raspberry Pi", "Face Recognition", "IoT"],
        title: {
            ar: "Guardian Gate — نظام تحكّم ذكي بالدخول متعدد العوامل",
            en: "Guardian Gate — Multi-Factor Smart Door Access Control",
        },
        desc: {
            ar: "نظام تحكّم فعلي بالدخول لباب، مبني على Raspberry Pi، يجمع بين التعرّف على الوجه والبصمة وبطاقة RFID ورمز PIN كأربعة عوامل توثيق مستقلة، مع تسجيل كامل لكل محاولة دخول وإشعارات فورية اختيارية.",
            en: "A Raspberry Pi-based physical door access-control system combining face recognition, fingerprint, RFID card, and PIN as four independent authentication factors, with full access logging and optional real-time notifications.",
        },
        details: {
            ar: "مشروعٌ شخصيٌّ بدأ كمجموعة سكريبتات منفصلة لاختبار كل قطعة عتاد على حدة (لوحة مفاتيح، حساس فوق صوتي، شاشة OLED، قارئ RFID، كاميرا)، ثم أُعيد بناؤه بالكامل كنظامٍ واحدٍ متماسك: كل حساس وكل قناة إشعار خلف واجهة برمجية موحّدة، وكل الأسرار والقيم القابلة للتغيير انتقلت من الكود إلى ملفات إعداد، مع وضع محاكاة كامل عبر الطرفية (--simulate) يتيح تجربة منطق القرار بالكامل دون أي عتاد حقيقي. يرصد النظام اقتراب شخص بحساسٍ فوق صوتي، يحاول التعرّف على وجهه أولًا، وإن فشل يعرض بدائل: بصمة، أو بطاقة RFID، أو رمز PIN — ونجاح أيٍّ منها يفتح القفل الكهربائي عبر مُرحّل.",
            en: "A personal project that started as a set of individual hardware bring-up scripts (keypad, ultrasonic sensor, OLED, RFID reader, camera), then was fully rebuilt as one coherent system: every sensor and notification channel sits behind a unified interface, every secret and tunable value moved from source code into configuration files, and a full console simulation mode (--simulate) lets you exercise the entire decision logic with no real hardware attached. The system watches for someone approaching with an ultrasonic sensor, tries face recognition first, and if that fails offers fingerprint, RFID card, or PIN as fallbacks — any one of which unlocks an electric strike through a relay.",
        },
        article: {
          ar: {
            lead: "نظام تحكّم فعلي بدخول باب، بأربعة عوامل توثيق مستقلة (وجه، بصمة، بطاقة، رمز)، وسجل دخول واحد شفّاف لكل محاولة.",
            sections: [
              {
                h: "الفكرة",
                p: "الهدف تأمين باب منزل أو مكتب صغير بعدة طبقات توثيق مستقلة بدل الاعتماد على عاملٍ واحد: يُعطى الأولوية للتعرّف على الوجه بوصفه الأسرع، وفي حال فشله تتاح ثلاثة بدائل (بصمة، بطاقة RFID، رمز PIN) — أيٌّ منها كافٍ لفتح الباب، مع تسجيل كل محاولة وإشعارٍ فوري اختياري للهاتف."
              },
              {
                h: "تدفّق القرار",
                flow: [
                  "حساس فوق صوتي يرصد الاقتراب",
                  "محاولة التعرّف على الوجه",
                  "بديل: بصمة / بطاقة RFID / رمز PIN",
                  "فتح المُرحّل عند نجاح أي عامل",
                  "تسجيل + إشعار فوري اختياري"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "حسم تناقض قطبية المُرحّل (Relay) بالدليل العتادي",
                    d: "كانت نسخ الكود الأصلية تختلف فعليًا حول طريقة فتح القفل (إشارة HIGH على منفذٍ، أو LOW على منفذٍ آخر) — تناقضٌ حقيقي في سلوك العتاد لا مجرد اختلاف أسلوب. حُسم الخلاف بالرجوع إلى اختبار العتاد الفعلي، وأصبحت القطبية حقل إعدادٍ صريحًا، مع أداة ذاتية (relay_selftest.py) للتحقق قبل التوصيل بقفلٍ حقيقي."
                  },
                  {
                    t: "إصلاح خلل نطاق متغيّر (scoping) في جلسة الضيف",
                    d: "إسناد قيمة لعلَمٍ داخل دالة دون كلمة global جعل بايثون يُنشئ متغيّرًا محليًا جديدًا بصمتٍ بدل تحديث الحالة الفعلية — ما كان يمنع خيط المعاينة الحية من التوقف كما هو متوقع. أُصلح الخلل واستُبدل العلَم الضمني بحالةٍ صريحة تُمرَّر عبر الواجهة، بحيث يستحيل تكرار العطل بنيويًا."
                  },
                  {
                    t: "فصل العتاد عن منطق القرار بالكامل",
                    d: "كل استدعاء لمكتبات العتاد (lgpio، picamera2، spidev) صار خلف واجهة تجريدية، بحيث يعمل النظام بالكامل في وضع محاكاة عبر الطرفية دون أي راسبيري باي حقيقي — ما يسهّل الاختبار والتطوير خارج الجهاز الفعلي."
                  }
                ]
              },
              {
                h: "مفاضلة موثّقة صراحةً: \"أو\" لا \"و\"",
                p: "سياسة النظام قائمة على نجاح أيّ عاملٍ واحد (بصمة أو بطاقة أو رمز أو وجه)، لا اشتراط كل العوامل معًا. قرارٌ متعلقٌ بسهولة الاستخدام لا معيار أمانٍ أعلى، مذكورٌ صراحةً في التوثيق بدل ترك القارئ يكتشفه بنفسه."
              }
            ],
            results: [
              { k: "عوامل التوثيق", v: "4" },
              { k: "أخطاء عتاد حقيقية أُصلحت", v: "2" },
              { k: "وضع تشغيل بدون عتاد", v: "متاح" }
            ],
            note: "مشروع هواةٍ للأمان الفيزيائي المنزلي، وليس منتج تحكّم دخولٍ معتمَدًا — عوامل التوثيق هنا عوامل راحة لا حماية تشفيرية، وموثّقة صراحةً كذلك في المستودع."
          },
          en: {
            lead: "A physical door access-control system with four independent authentication factors (face, fingerprint, card, PIN) and one honest access log for every attempt.",
            sections: [
              {
                h: "The idea",
                p: "Secure a home or small-office door with several independent authentication layers instead of relying on one: face recognition is tried first as the fastest option, and if it fails three fallbacks are offered (fingerprint, RFID card, PIN) — any one of which is enough to unlock the door, with every attempt logged and an optional real-time phone notification."
              },
              {
                h: "Decision flow",
                flow: [
                  "Ultrasonic sensor detects approach",
                  "Face recognition attempt",
                  "Fallback: fingerprint / RFID card / PIN",
                  "Relay unlocks on any factor success",
                  "Logging + optional instant notification"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Resolving the relay polarity contradiction with hardware evidence",
                    d: "The original code drafts genuinely disagreed on how the lock opens (HIGH on one pin, or LOW on another) — a real hardware-behavior contradiction, not just a style difference. It was resolved by going back to the actual hardware test, polarity became an explicit config field, and a self-test tool (relay_selftest.py) verifies it before wiring to a real lock."
                  },
                  {
                    t: "Fixing a variable-scoping bug in the guest session",
                    d: "Assigning a flag inside a function without the global keyword made Python silently create a new local variable instead of updating the real state — which kept the live-preview thread from stopping as expected. The bug was fixed and the implicit global flag replaced with explicit state passed through the interface, making the failure mode structurally impossible to repeat."
                  },
                  {
                    t: "Fully decoupling hardware from decision logic",
                    d: "Every call to hardware libraries (lgpio, picamera2, spidev) now sits behind an abstract interface, so the entire system runs in a console simulation mode with no real Raspberry Pi — making testing and development off-device much easier."
                  }
                ]
              },
              {
                h: "An explicitly documented trade-off: \"OR\", not \"AND\"",
                p: "The system's policy succeeds when any single factor succeeds (fingerprint OR card OR PIN OR face), not when all factors succeed together. This is a usability decision, not a higher-security standard, and it's stated explicitly in the documentation rather than left for the reader to discover."
              }
            ],
            results: [
              { k: "Authentication factors", v: "4" },
              { k: "Real hardware bugs fixed", v: "2" },
              { k: "Hardware-free run mode", v: "Available" }
            ],
            note: "A hobbyist home physical-security project, not a certified access-control product — the authentication factors here are convenience factors, not cryptographic protection, and this is stated explicitly in the repository."
          }
        }
    },
    {
        id: "co2-scrubber-rig",
        categories: ["arduino", "iot"],
        featured: true,
        image: "assets/images/co2-scrubber-rig.jpg",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/co2-scrubber-rig",
        tags: ["Arduino", "Python", "CCS811", "Matplotlib", "Instrumentation"],
        title: {
            ar: "جهاز اختبار كفاءة فلترة ثاني أكسيد الكربون (CO2 Scrubber Rig)",
            en: "CO2 Scrubber / Filtration Test Rig",
        },
        desc: {
            ar: "جهازٌ فيزيائيٌّ من ثلاث حجرات يقيس ما إذا كانت مادة فلترةٍ تُزيل فعليًا ثاني أكسيد الكربون، عبر مستشعرَي CCS811 قبل الفلتر وبعده وأداة بايثون تحسب نسبة التخفيض الفعلية بدل افتراضها.",
            en: "A 3-chamber physical rig that measures whether a candidate filter medium actually removes CO2, using CCS811 sensors before and after the filter and a Python tool that computes the real reduction percentage instead of assuming one.",
        },
        details: {
            ar: "بدأ المشروع كعرضٍ توضيحيٍّ لحصة كيمياءٍ عن فلترة الغازات: صندوقٌ من ثلاث حجراتٍ يُولّد ثاني أكسيد الكربون كيميائيًا في الحجرة الأولى، تدفعه مروحةٌ عبر مادة فلترةٍ في الحجرة الوسطى، ليُجمع في الحجرة الأخيرة. مستشعرا CCS811 يستخدمان نفس عنوان I2C الافتراضي، فحُلّ التعارض ببين WAKE يُخفِّض كل مستشعرٍ بدوره بدل مشاركة الناقل في آنٍ واحد. أداة بايثون تُدمج سكربتَي رسمٍ بيانيٍّ أصليَّين (لا يحفظان أي بيانات) في أداةٍ واحدة تسجّل كل قراءةٍ بوقتها ونسبة تخفيضها.",
            en: "The project started as a demonstration for a chemistry class on gas filtration: a 3-chamber box chemically generates CO2 in the first chamber, a fan pushes it through a filter medium in the middle chamber, and it collects in the last. Both CCS811 sensors default to the same I2C address, so the conflict is resolved by toggling each sensor's WAKE pin in turn rather than sharing the bus simultaneously. A Python tool consolidates two original plotting scripts (neither of which saved any data) into one tool that timestamps every reading and its reduction percentage.",
        },
        article: {
          ar: {
            lead: "صندوقٌ من ثلاث حجرات يقيس أثر فلترٍ حقيقيٍّ على ثاني أكسيد الكربون — لا يفترض كفاءته، بل يقيسها بمستشعرَين قبل وبعد.",
            sections: [
              {
                h: "الفكرة",
                p: "الحجرة الأولى تُولّد ثاني أكسيد الكربون كيميائيًا، مروحةٌ تدفعه عبر مادة فلترةٍ قيد الاختبار في الحجرة الوسطى، والحجرة الأخيرة تجمع ما عبر الفلتر. مستشعرٌ في كل طرف يقيس التركيز قبل وبعد — والفرق بينهما هو الأثر الفعلي المقيس، لا افتراضًا نظريًا."
              },
              {
                h: "تدفّق النظام",
                flow: [
                  "الحجرة A: توليد CO2 كيميائيًا",
                  "مروحة PWM",
                  "الحجرة B: مادة الفلترة",
                  "الحجرة C: غاز مُفلتر",
                  "مستشعرا CCS811 (قبل/بعد) ← Arduino ← بايثون"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "تعدّد إرسالٍ عبر بين WAKE، بسبب تعارض عناوين I2C",
                    d: "كلا مستشعرَي CCS811 بنفس عنوان I2C الثابت (0x5A) دون وسيلة عتاديةٍ لتغييره على هذه اللوحة. أُخفِض بين WAKE لكل مستشعرٍ فقط أثناء قراءته، بينما يبقى الآخر نائمًا وصامتًا — حلٌّ متعمَّدٌ موثَّق، لا محدوديةً عرَضية."
                  },
                  {
                    t: "تحكّمٌ غير حاجزٍ بالمروحة مع قراءاتٍ موقّتة",
                    d: "سرعة المروحة تُحدَّث كل دورة loop لاستجابةٍ سلسة، بينما تحدث قراءات CCS811 على فاصل millis() مدته 3 ثوانٍ — وقت استقرار المستشعر نفسه — دون أي delay() يُجمّد استجابة المروحة."
                  },
                  {
                    t: "دمج سكربتَي رسمٍ لا يحفظان بيانات في أداةٍ واحدةٍ تُسجّل",
                    d: "السكربتان الأصليان يرسمان القراءات حيًّا فقط؛ إغلاق النافذة يفقد التجربة كاملة. الأداة الموحّدة تضيف علم `--log` يختم كل قراءةٍ بوقتها ويحسب نسبة تخفيض الفلترة لكل عينة، ووضع `--simulate` لتجربة الأداة دون الجهاز الفعلي."
                  }
                ]
              },
              {
                h: "لا رقم كفاءةٍ مُدَّعى",
                p: "جوهر الجهاز قياس أثر مادة فلترةٍ محددة، لا الادّعاء برقمٍ عام. النتيجة تعتمد كليًا على المادة والتفاعل الكيميائي المستخدَمين في كل تجربة، ولا يثبّت هذا المستودع أو يدّعي قيمةً لذلك."
              }
            ],
            results: [
              { k: "حجرات القياس", v: "3" },
              { k: "مستشعرا قبل/بعد", v: "2 (CCS811)" },
              { k: "سكربتاتٌ دُمجت", v: "2 → 1" }
            ],
            note: "أداةٌ تعليميةٌ لمقارنة موادّ الفلترة على منضدة عمل، لا جهاز سلامةٍ أو فلترةٍ صناعيةٍ معتمَد. الكود مفتوحٌ بالكامل."
          },
          en: {
            lead: "A 3-chamber box that measures the real effect of a filter on CO2 — not assuming its efficiency, but measuring it with sensors on both sides.",
            sections: [
              {
                h: "The idea",
                p: "The first chamber chemically generates CO2, a fan pushes it through a candidate filter medium in the middle chamber, and the last chamber collects whatever gets through. A sensor on each end measures concentration before and after — the difference is the real, measured effect, not a theoretical assumption."
              },
              {
                h: "System flow",
                flow: [
                  "Chamber A: CO2 generated chemically",
                  "PWM fan",
                  "Chamber B: filter medium",
                  "Chamber C: filtered gas",
                  "CCS811 sensors (before/after) → Arduino → Python"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "WAKE-pin multiplexing, forced by an I2C address collision",
                    d: "Both CCS811 sensors share the same fixed I2C address (0x5A) with no hardware way to change it on this board. Each sensor's WAKE pin is pulled low only while it's being read, while the other stays asleep and silent — a deliberate, documented workaround, not an accidental limitation."
                  },
                  {
                    t: "Non-blocking fan control alongside timed sensor reads",
                    d: "Fan speed updates every loop iteration for smooth response, while CCS811 reads happen on a 3-second millis()-based interval — the sensor's own settling time — with no delay() freezing fan responsiveness in between."
                  },
                  {
                    t: "Consolidating two non-logging plotters into one tool that records",
                    d: "The original scripts only plotted live; closing the window lost the whole run. The unified tool adds a `--log` flag that timestamps every reading and computes its filtration reduction percentage, plus a `--simulate` mode to try the tool with no physical rig."
                  }
                ]
              },
              {
                h: "No efficiency number claimed",
                p: "The point of the rig is to measure a specific filter medium's effect, not to assert a general number. The result depends entirely on the medium and chemical reaction used in a given run, and this repository does not fix or claim a value for it."
              }
            ],
            results: [
              { k: "Measurement chambers", v: "3" },
              { k: "Before/after sensors", v: "2 (CCS811)" },
              { k: "Scripts consolidated", v: "2 → 1" }
            ],
            note: "An educational instrument for comparing filter media on a bench, not a certified safety or industrial filtration product. Fully open source."
          }
        }
    },{
        id: "universal-market-predictor-deluxe",
        categories: ["python-ai"],
        featured: false,
        image: "assets/images/universal-market-predictor-deluxe.png",
        demoUrl: "https://huggingface.co/spaces/engdarwish/universal-market-predictor-deluxe",
        codeUrl: "https://github.com/eahmeddarwish/universal-market-predictor-deluxe",
        tags: ["Python", "TensorFlow", "LSTM", "Gradio"],
        title: {
            ar: "متنبئ الأسواق الشامل — إصدار Deluxe",
            en: "Universal Market Predictor — Deluxe Edition",
        },
        desc: {
            ar: "نموذج LSTM واحد مشترك يتنبأ بأي سهم أو عملة رقمية عالمياً على مدى 1/3/7 أيام، مع اختبار دلالة إحصائية يوضح هل فيه ميزة تنبؤية حقيقية أم مجرد ضوضاء.",
            en: "A single shared LSTM backbone forecasting any global stock or cryptocurrency over 1/3/7-day horizons, with a statistical significance test to show whether the predictive edge is real or just noise.",
        },
        details: {
            ar: "تطوير كامل لمشروع متنبئ الأسواق الأصلي: بدلًا من نموذجٍ منفصلٍ لكل سهم، نموذج LSTM واحد مشترك بـembeddings خاصةٍ بكل سهمٍ تُغطّي أمريكا والخليج والمملكة المتحدة وألمانيا واليابان وهونج كونج والهند والعملات الرقمية. الهدف هو النسبة المئوية للعائد بدل السعر المُقيّس، لتفادي مشاكل الاستقراء على الأسهم شديدة الاتجاه. كل تنبؤ يُقارن بخط أساس بسيط (naive persistence) مع اختبار ثنائي الحدين (binomial test) وفاصل ثقة Wilson 95% على دقة الاتجاه، بدل الاكتفاء بنسبة دقة مجردة قد تكون مجرد صدفة إحصائية. القيود موثّقة بصراحة في الـREADME، بما فيها الحالات التي لا يزال النموذج فيها عاجزًا عن التفوّق علىش رمي العملة.",
            en: "A full evolution of the original Universal Market Predictor: instead of a separate model per ticker, one shared LSTM backbone with per-ticker embeddings covers US, Gulf/MENA, UK, Germany, Japan, Hong Kong, India markets, and major cryptocurrencies. The prediction target is percentage return rather than a scaled price, avoiding extrapolation failures on strongly-trending stocks. Every forecast is benchmarked against a naive persistence baseline with a binomial significance test and a 95% Wilson confidence interval on directional accuracy — rather than trusting a raw accuracy percentage that could just be statistical noise. Limitations are documented honestly in the README, including where the model currently does not beat a coin flip.",
        },
        article: {
          ar: {
            lead: "نموذج LSTM موحّدٌ لكل الأسهم والعملات، بتقييمٍ صادق: كل رقمٍ يُعرض إلى جانب مقياسٍ مرجعيٍّ «لا يفعل شيئًا» — لأن نظام التنبؤ لا يفوق في مصداقيته المقياسَ الذي يُقارَن به.",
            sections: [
              {
                h: "المبدأ الأساسي",
                p: "سعر إغلاق الغد لسهمٍ كبيرٍ عادةً قريبٌ من سعر اليوم. فأي نموذجٍ — حتى العديم الفائدة — قد يُظهر دقةً برّاقةً لمجرّد اعتماده على هذه الحقيقة. الطريقة الوحيدة لمعرفة إن كان النموذج تعلّم شيئًا حقيقيًا: أن نضع خطأه ودقّته إلى جانب مقياسٍ ساذجٍ لا يستخدم أي تعلّمٍ آلي."
              },
              {
                h: "النموذج المشترك",
                flow: [
                  "تسلسل سعري (60 يوم × 12 ميزة)",
                  "LSTM ثلاثي الطبقات",
                  "+ تضمين لكل سهم",
                  "إخراج: 1/3/7 أيام دفعةً واحدة"
                ]
              },
              {
                h: "القرارات الهندسية",
                steps: [
                  {
                    t: "لماذا نموذجٌ مشتركٌ لا نموذجٌ لكل سهم؟",
                    d: "العمود الفقري يرى سلوك السوق عبر كل سهمٍ وبورصةٍ وعملة — الانهيارات والصعودات والتقلّبات — أكثر بكثيرٍ مما يعلّمه تاريخ سهمٍ واحد. والتضمين (embedding) يتيح التخصّص لكل أصلٍ دون شبكةٍ منفصلة."
                  },
                  {
                    t: "لماذا إخراجٌ متعددٌ لا تكراري؟",
                    d: "التنبؤ باليوم التالي ثم إعادة تغذيته للتنبؤ بما بعده يُراكم الخطأ بسرعة. تمريرةٌ واحدة تُخرج كل الآفاق دفعةً واحدة تتجنّب المشكلة كليًا."
                  },
                  {
                    t: "ثغرةٌ حقيقية: تنبؤٌ بالنسبة لا بالسعر",
                    d: "أول نسخةٍ تنبّأت بسعرٍ مُعايَرٍ مباشرةً، فخسرت أمام المقياس الساذج في الأسهم الصاعدة — لأن أسعار الاختبار خرجت عن النطاق الذي رآه النموذج. الحلّ: التنبؤ بنسبة عائدٍ مئوية، وكل الميزات صارت نِسَبًا محدودةً لا مستوياتِ سعرٍ خام."
                  }
                ]
              },
              {
                h: "هل الميزة حقيقيةٌ أم ضوضاء؟",
                p: "دقة اتجاهٍ في نطاق 52–58% قد تكون مجرّد صدفةٍ إحصائية. لذلك يُجري التقرير <strong>اختبار دلالةٍ إحصائية</strong> على كل صف: لا تُعامَل النتيجة كميزةٍ حقيقية إلا إذا استبعدت فترة الثقة خطّ الـ50% تمامًا. والنتيجة صادقة: ميزةٌ واضحةٌ في أسهمٍ أمريكيةٍ كبرى، وغائبةٌ في أسهم الخليج — والمشروع يوثّق هذا بدل إخفائه."
              }
            ],
            results: [
              {
                k: "آفاق التنبؤ",
                v: "1/3/7 أيام"
              },
              {
                k: "نموذج واحد",
                v: "كل الأسهم"
              },
              {
                k: "مقاييس مرجعية",
                v: "3"
              },
              {
                k: "اختبار الدلالة",
                v: "✓"
              }
            ],
            note: "مشروعٌ بحثيٌّ تعليمي — لا شيء فيه نصيحةٌ مالية. الأسواق تنطوي على مخاطرةٍ حقيقية. الكود مفتوحٌ بالكامل."
          },
          en: {
            lead: "One shared LSTM for every stock and coin, with honest evaluation: every number sits next to a 'does-nothing' baseline — because a prediction system is only as trustworthy as the baseline it's compared against.",
            sections: [
              {
                h: "The core principle",
                p: "Tomorrow's close for a large stock is usually near today's. So any model — even a useless one — can show a flattering accuracy just by leaning on that. The only way to know if the model learned something real: place its error and accuracy next to a naive baseline that uses no ML at all."
              },
              {
                h: "The shared model",
                flow: [
                  "Price sequence (60d × 12 features)",
                  "3-layer LSTM",
                  "+ per-ticker embedding",
                  "Output: 1/3/7-day at once"
                ]
              },
              {
                h: "Engineering decisions",
                steps: [
                  {
                    t: "Why shared, not one model per ticker?",
                    d: "The backbone sees market behavior across every stock, exchange and coin — crashes, rallies, volatility — far more than any single ticker's history teaches. The embedding lets it specialize per asset without a separate network."
                  },
                  {
                    t: "Why multi-output, not recursive?",
                    d: "Predicting day+1 then feeding it back to predict day+2 compounds error fast. A single pass emitting all horizons at once avoids it entirely."
                  },
                  {
                    t: "A real bug: predict % return, not price",
                    d: "The first version predicted a scaled price directly and lost to the naive baseline on trending stocks — test prices fell outside the range the model had seen. The fix: predict a percentage return, and express every feature as a bounded ratio, not a raw price level."
                  }
                ]
              },
              {
                h: "Real edge, or noise?",
                p: "Directional accuracy of 52–58% could just be luck. So the report runs a <strong>significance test</strong> on every row: a result counts only if the confidence interval excludes the 50% line entirely. And the finding is honest: a clear edge on large US names, absent on Gulf tickers — the project documents this rather than hiding it."
              }
            ],
            results: [
              {
                k: "Forecast horizons",
                v: "1/3/7 days"
              },
              {
                k: "One model",
                v: "All tickers"
              },
              {
                k: "Baselines",
                v: "3"
              },
              {
                k: "Significance test",
                v: "✓"
              }
            ],
            note: "An educational research project — none of it is financial advice. Markets carry real risk. Fully open source."
          }
        }
    },{
        id: "air-quality-monitor",
        categories: ["arduino", "iot"],
        featured: false,
        image: "assets/images/air-quality-monitor.jpg",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/air-quality-monitor",
        tags: ["Arduino", "Python", "Tkinter", "Blynk", "OpenAI API"],
        title: {
            ar: "مراقب الجو الذكي (Air Quality Monitor)",
            en: "Air Quality Monitor",
        },
        desc: {
            ar: "منصة مراقبةٍ بيئيةٍ بسبعة مستشعرات (حرارة، رطوبة، أشعة فوق بنفسجية، غبار، CO2، TVOC، H2S)، تُبَث من Arduino إلى لوحة تحكمٍ Python، مع رفعٍ سحابيٍّ وتحليلٍ ذكيٍّ اختياريَّين — أُعيد بناؤها بالكامل بعد اكتشاف مفاتيح API حقيقية كانت مثبَّتة في الكود.",
            en: "A 7-sensor environmental monitoring bench (temperature, humidity, UV, dust, CO2, TVOC, H2S) streamed from an Arduino to a Python dashboard, with optional cloud upload and AI analysis — fully rebuilt after discovering live API keys hardcoded in the original source.",
        },
        details: {
            ar: "النموذج الأصلي كان قد تضخّم إلى نحو 15 سكربتًا شبه مكرر، سكربتٌ لكل توليفة ميزات (DHT فقط، +Blynk، +UV، +ThingSpeak، +OpenAI)، وكان أحدها يحتوي على مفتاح OpenAI API ورمز مصادقة Blynk حقيقيَّين مكتوبَين مباشرةً في الكود. أُعيد بناء المشروع كسكربتٍ واحدٍ بميزاتٍ تُفعَّل عبر متغيرات البيئة، مع وضع `--simulate` يتيح تجربته دون أي عتادٍ فعلي، وتحديثٍ لاستدعاءات OpenAI إلى واجهة العميل الحالية بعد أن كان الكود الأصلي يستخدم واجهةً مُهمَلة.",
            en: "The original prototype had grown into roughly 15 near-duplicate scripts, one per feature combination (DHT-only, +Blynk, +UV, +ThingSpeak, +OpenAI), and one of them had a live OpenAI API key and a live Blynk auth token written directly into the source. The project was rebuilt as a single script with environment-variable feature flags, a `--simulate` mode for trying it with no hardware attached, and an update of the OpenAI calls to the current client interface after the original used a since-removed one.",
        },
        article: {
          ar: {
            lead: "سبعة مستشعرات، سكربتٌ واحد، وقصة إصلاحٍ أمنيٍّ حقيقية: مفتاح API ورمز مصادقةٍ حيّان كانا مكتوبَين مباشرةً في الكود، والآن كل بيانات الاعتماد تأتي من متغيرات البيئة فقط.",
            sections: [
              {
                h: "الفكرة",
                p: "منصة مراقبةٍ بيئيةٍ لمعمل أو غرفة: تقرأ سبعة مقاييس عبر خمسة مستشعرات، تعرضها حيًّا على لوحة Tkinter، وترفعها اختياريًا لسحابة Blynk، وتطلب اختياريًا ملخصًا بيئيًّا بلغةٍ طبيعيةٍ من نموذج ذكاءٍ اصطناعي كل بضع دقائق."
              },
              {
                h: "تدفّق البيانات",
                flow: [
                  "5 مستشعرات (DHT11, UV, H2S, Dust, CCS811)",
                  "عقدة Arduino",
                  "JSON عبر Serial (115200 baud)",
                  "لوحة Python/Tkinter",
                  "Blynk + تحليل OpenAI (اختياريّان)"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "أسرارٌ حقيقيةٌ وُجدت مثبَّتة، واختفت في هذه النسخة",
                    d: "احتوى أحد السكربتات الأصلية على مفتاح OpenAI API ورمز مصادقة Blynk حقيقيَّين مكتوبَين مباشرةً في الملف. أعادت هذه النسخة قراءة كل بيانات الاعتماد من متغيرات البيئة أو ملف `.env` مستثنًى من Git، وإن غاب أحد المفاتيح تُعطَّل ميزته تلقائيًا بدل التعطل أو استخدام قيمةٍ صامتة."
                  },
                  {
                    t: "سكربتٌ واحد بميزاتٍ قابلةٍ للتفعيل بدل خمسة عشر سكربتًا",
                    d: "تراكم الكود الأصلي إلى سكربتٍ منفصلٍ لكل توليفة ميزات. أصبحت كل واحدةٍ منها فحص شرطٍ وقت التشغيل (وجود التوكن أم لا) داخل لوحة تحكمٍ واحدة، فمنطق القراءة والعرض موجودٌ في مكانٍ واحدٍ فقط."
                  },
                  {
                    t: "الانتقال من واجهة OpenAI المُهمَلة، ووضعٌ للتجربة بلا عتاد",
                    d: "استُبدل الاستدعاء القديم `openai.ChatCompletion.create` بواجهة العميل الحالية. وأُضيف وضع `--simulate` يولّد قراءاتٍ عشوائيةً معقولة على نفس مسار الكود، فيمكن تجربة اللوحة والرفع السحابي والتحليل الذكي دون أي Arduino متصل."
                  }
                ]
              },
              {
                h: "حدودٌ صادقة",
                p: "معايرة H2S والأشعة فوق البنفسجية تحويلٌ خطيٌّ تقريبي لا منحنى مخبريٌّ دقيق، ولا يوجد تسجيلٌ محليٌّ للبيانات فيما وراء العرض الحي والرفع السحابي الاختياري. هذا مشروع مراقبةٍ بيئيةٍ للهواة، لا جهاز قياس هواءٍ معتمَد."
              }
            ],
            results: [
              { k: "مقاييسٌ بيئية", v: "7" },
              { k: "سكربتاتٌ دُمجت إلى واحد", v: "~15 → 1" },
              { k: "أسرارٌ مُزالة من الكود", v: "2 (OpenAI + Blynk)" }
            ],
            note: "مشروع هوايةٍ تعليمي لمراقبة الجو، وليس جهاز قياسٍ معتمَدًا. الكود مفتوحٌ بالكامل، وكل بيانات الاعتماد تُقرأ من متغيرات البيئة فقط."
          },
          en: {
            lead: "Seven environmental metrics, one script, and a real security fix: a live API key and auth token that were hardcoded in the source are now sourced entirely from environment variables.",
            sections: [
              {
                h: "The idea",
                p: "An environmental monitoring bench for a lab or room: reads seven metrics from five sensors, shows them live on a Tkinter dashboard, optionally uploads to Blynk, and optionally asks an LLM for a short plain-language summary every few minutes."
              },
              {
                h: "Data flow",
                flow: [
                  "5 sensors (DHT11, UV, H2S, Dust, CCS811)",
                  "Arduino sensor node",
                  "JSON over Serial (115200 baud)",
                  "Python/Tkinter dashboard",
                  "Blynk + OpenAI analysis (both optional)"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Real secrets were found hardcoded, and are gone from this version",
                    d: "One of the original scripts had a live OpenAI API key and a live Blynk auth token written directly into the file. This version reads every credential from environment variables or a git-ignored `.env` file, and if a key is missing, that feature simply turns itself off instead of crashing or silently using a placeholder."
                  },
                  {
                    t: "One script with feature flags, not fifteen scripts",
                    d: "The original code had accumulated a separate script per feature combination. Each one is now a runtime check (is the token present or not) inside a single dashboard, so the reading and display logic exists in exactly one place."
                  },
                  {
                    t: "Migrated off the deprecated OpenAI interface, plus a hardware-free mode",
                    d: "The old `openai.ChatCompletion.create` call was replaced with the current client interface. A `--simulate` mode was added that generates plausible random readings on the same code path, so the dashboard, cloud upload, and AI analysis can all be exercised with no Arduino attached."
                  }
                ]
              },
              {
                h: "Honest limitations",
                p: "H2S and UV calibration is an approximate linear mapping, not a lab-calibrated curve, and there's no local data logging beyond the live display and optional cloud upload. This is a hobbyist environmental-monitoring project, not a certified air-quality instrument."
              }
            ],
            results: [
              { k: "Environmental metrics", v: "7" },
              { k: "Scripts consolidated", v: "~15 → 1" },
              { k: "Hardcoded secrets removed", v: "2 (OpenAI + Blynk)" }
            ],
            note: "A hobbyist/educational environmental-monitoring project, not a certified measurement instrument. Fully open source, with every credential read from environment variables only."
          }
        }
    },{
        id: "voice-chess-pro",
        categories: ["python-ai"],
        featured: false,
        image: "assets/images/voice-chess-pro.png",
        demoUrl: "https://huggingface.co/spaces/engdarwish/voice-chess-pro",
        codeUrl: "https://github.com/eahmeddarwish/voice-chess-pro",
        tags: ["Python", "Gradio", "Stockfish"],
        title: {
            ar: "شطرنج تفاعلي احترافي (Voice Chess Pro)",
            en: "Voice Chess Pro — Interactive Web Chess",
        },
        desc: {
            ar: "لعبة شطرنج تفاعلية كاملة تعمل في المتصفح، بوضعين: التحدي ضد محرك Stockfish أو اللعب بين شخصين، مع تصدير النقلات بصيغة PGN.",
            en: "A full interactive browser-based chess game with two modes: challenge the Stockfish engine or play against another player, plus PGN move export.",
        },
        details: {
            ar: "بُني المشروع بلغة Python باستخدام Gradio لواجهة الويب، ومحرك Stockfish كخصم ذكاء اصطناعي بثلاث مستويات صعوبة (سهل، متوسط، صعب). يدعم وضعين للعب: لاعب ضد لاعب، أو لاعب ضد الحاسوب، مع تتبع كامل لسجل النقلات وإمكانية تصدير المباراة بصيغة PGN القياسية لتحليلها لاحقاً في أي برنامج شطرنج. تجربة تُظهر كيفية دمج محرك شطرنج احترافي (UCI) مع واجهة ويب تفاعلية بسيطة وسريعة النشر عبر Hugging Face Spaces.",
            en: "Built in Python with a Gradio web interface and the Stockfish engine as an AI opponent across three difficulty levels (Easy, Medium, Hard). Supports two modes, Player vs Player and Player vs Computer, with full move-history tracking and standard PGN export for later analysis in any chess program. A practical example of wiring a professional UCI chess engine into a lightweight, instantly deployable web UI on Hugging Face Spaces.",
        },
        article: {
          ar: {
            lead: "لعبة شطرنجٍ كاملة تعمل بالكامل داخل المتصفح — ضدّ محرك Stockfish بثلاث مستويات، أو ضدّ صديقٍ على نفس الجهاز، وكل جلسةٍ مستقلةٌ تمامًا عن غيرها.",
            sections: [
              {
                h: "الفكرة",
                p: "شطرنجٌ احترافي بلا تثبيتٍ ولا حساب: تفتح الرابط وتلعب فورًا. تختار مستوى الصعوبة (سهل / متوسط / صعب)، أو تتحدّى صديقًا وجهًا لوجهٍ على نفس الشاشة."
              },
              {
                h: "آلية العمل",
                flow: [
                  "إدخال الحركة",
                  "python-chess يتحقق من صحّتها",
                  "محرك Stockfish يردّ",
                  "تحديث الرقعة"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "محرك شطرنجٍ كامل بـ python-chess",
                    d: "كل حركةٍ تُفحَص للتأكد من قانونيّتها قبل تنفيذها — لا حركاتٍ غير شرعية، ولا حالاتٍ شاذّة. المكتبة تتكفّل بقواعد الشطرنج كاملةً بما فيها التبييت والترقية والكِش."
                  },
                  {
                    t: "خصمٌ ذكيٌّ بمحرك Stockfish",
                    d: "من أقوى محركات الشطرنج المفتوحة، بمستوى صعوبةٍ قابلٍ للضبط — من خصمٍ ودودٍ للمبتدئ إلى تحدٍّ حقيقيٍّ للاعب المتمرّس."
                  },
                  {
                    t: "حالة لعبٍ منفصلةٌ لكل جلسة",
                    d: "كل متصفحٍ يحتفظ بلعبته الخاصة، فيمكن لعشرات الأشخاص اللعب في الوقت نفسه دون أي تداخل — تصميمٌ آمنٌ للّعب المتزامن."
                  }
                ]
              },
              {
                h: "مدخلاتٌ مرنة",
                p: "تُدخِل الحركة بالصيغة القياسية (<em>e2e4</em>، <em>Nf3</em>) أو بلغةٍ طبيعية (<em>e2 to e4</em>). مع أزرارٍ للتراجع وإعادة الضبط وقلب الرقعة، وسجلٍّ للحركات وتصديرٍ بصيغة PGN."
              }
            ],
            results: [
              {
                k: "مستويات الصعوبة",
                v: "3"
              },
              {
                k: "المحرك",
                v: "Stockfish"
              },
              {
                k: "لاعبون متزامنون",
                v: "غير محدود"
              },
              {
                k: "التثبيت",
                v: "صفر"
              }
            ],
            note: "مشروعٌ مفتوح المصدر بالكامل، يعمل داخل المتصفح عبر Gradio — الكود متاحٌ للتجربة والتعديل."
          },
          en: {
            lead: "A full chess game running entirely in the browser — against Stockfish at three levels, or a friend on the same device, each session fully independent.",
            sections: [
              {
                h: "The idea",
                p: "Serious chess with no install and no account: open the link and play. Pick a difficulty (Easy / Medium / Hard), or challenge a friend face-to-face on the same screen."
              },
              {
                h: "How it works",
                flow: [
                  "Move input",
                  "python-chess validates it",
                  "Stockfish replies",
                  "Board updates"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "A full engine with python-chess",
                    d: "Every move is checked for legality before it's applied — no illegal moves, no edge cases. The library handles all of chess including castling, promotion and check."
                  },
                  {
                    t: "A smart opponent with Stockfish",
                    d: "One of the strongest open chess engines, with adjustable difficulty — from a gentle opponent for beginners to a real challenge for experienced players."
                  },
                  {
                    t: "Per-session game state",
                    d: "Each browser keeps its own game, so dozens can play at once with zero interference — designed to be safe for concurrent play."
                  }
                ]
              },
              {
                h: "Flexible input",
                p: "Enter moves in standard notation (<em>e2e4</em>, <em>Nf3</em>) or plain language (<em>e2 to e4</em>). With undo, reset and flip controls, move history and PGN export."
              }
            ],
            results: [
              {
                k: "Difficulty levels",
                v: "3"
              },
              {
                k: "Engine",
                v: "Stockfish"
              },
              {
                k: "Concurrent players",
                v: "Unlimited"
              },
              {
                k: "Install",
                v: "None"
              }
            ],
            note: "Fully open source, running in the browser via Gradio — the code is available to run and modify."
          }
        }
    },{
        id: "visual-trigger-studio",
        categories: ["python-ai"],
        featured: false,
        image: "assets/images/Visual-Trigger.png",
        demoUrl: "https://eahmeddarwish.github.io/visual-trigger-studio/",
        codeUrl: "https://github.com/eahmeddarwish/visual-trigger-studio",
        tags: ["JavaScript", "CLIP", "Computer Vision", "WebAssembly"],
        title: {
            ar: "استوديو المشغّلات البصرية (Visual Trigger Studio)",
            en: "Visual Trigger Studio",
        },
         desc: {
           ar: "ارفع صورة مرجعية لأي شيء، وحدّد ما الذي يحدث عندما تتعرّف الكاميرا عليه — عرض صورة، تشغيل فيديو، أو جلب بيانات حية من الإنترنت — كل ذلك داخل المتصفح دون أي خادم أو عتاد إضافي.",
           en: "Upload a reference photo of anything and decide what happens when the camera recognizes it — an image, a video, or live internet data — all inside the browser, no server or hardware required.",
         },
         details: {
           ar: "تطبيق ويب ثابت بالكامل (دون خادم أو أدوات بناء) يعتمد على نموذج CLIP يعمل مباشرة داخل المتصفح (عبر WebAssembly) لحساب بصمة رقمية لأي صورة ومقارنتها بالصور المرجعية التي يرفعها المستخدم. وعند حدوث تطابق، يُنفَّذ فعل مخصّص يختاره المستخدم مسبقًا: عرض صورة، تشغيل فيديو، أو جلب بيانات حية من الإنترنت (كدرجة الحرارة والرطوبة عبر خدمة Open-Meteo). لا يعتمد المشروع على أي عتاد قياس أو خادم مركزي؛ إذ تُحفظ جميع البيانات محليًا داخل متصفح المستخدم فقط، مع إمكانية تصدير الإعدادات واستيرادها كملف JSON.",
           en: "A fully static web app (no server, no build step) that runs a CLIP vision model directly in the browser via WebAssembly to fingerprint any photo and compare it against user-uploaded reference images. On a match, it runs a user-configured action: show an image, play a video, or fetch live internet data (like temperature and humidity via Open-Meteo). No measurement hardware or server required — everything is stored locally in the browser, with JSON export/import for backing up or sharing a trigger set.",
         },
        article: {
          ar: {
            lead: "شاهِد شيئًا ← نفّذ إجراءً. ارفع صورةً مرجعية، وحدّد ما يحدث عندما تراها الكاميرا من جديد — كل ذلك داخل متصفحك، بلا خادم، وبلا مفتاح، وبلا أن تغادر صورةٌ جهازك.",
            sections: [
              {
                h: "الفكرة",
                p: "ترفع صورةً لأي شيءٍ يهمّك، وتختار الإجراء: عرض صورة، تشغيل فيديو، جلب حالة الطقس، أو رسالةً نصية. وعندما تُشابه لقطةٌ جديدة صورتك المرجعية بدرجةٍ كافية — يُنفَّذ الإجراء تلقائيًا."
              },
              {
                h: "آلية العمل",
                flow: [
                  "صورة مرجعية",
                  "مُرمِّز CLIP في المتصفح",
                  "لقطة جديدة → CLIP",
                  "تشابه ≥ الحدّ؟",
                  "نفّذ الإجراء"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "لماذا CLIP بدل تدريب مصنِّفٍ لكل صورة؟",
                    d: "تدريب نموذجٍ مخصّص يحتاج أمثلةً كثيرة وإعادة تدريبٍ كلما أضفت شيئًا جديدًا. أما CLIP فيُنتج «بصمة» عامةً لأي صورة <strong>دون أي تدريب</strong> — ترفع الصورة فتصبح قابلةً للاستخدام فورًا. نفس مبدأ البحث بالصورة في الأدوات الحديثة."
                  },
                  {
                    t: "لماذا المتصفح لا خادم Python؟",
                    d: "تشغيل النموذج داخل المتصفح (عبر transformers.js و ONNX Runtime Web) يجعل المشروع كله موقعًا ثابتًا — استضافةٌ مجانيةٌ للأبد، بلا تكلفة خادم، وبلا أن تلمس صورةُ المستخدم أي سيرفر."
                  },
                  {
                    t: "حدٌّ متحفّظٌ مبنيٌّ على قياس",
                    d: "في الاختبار سجّل شكلان مختلفان تمامًا (دائرةٌ حمراء ومربعٌ أزرق) تشابهًا بلغ <em>0.86</em>، بينما سجّلت صورتان لنفس الدائرة <em>0.98</em>. لذلك ضُبط الحدّ الافتراضي عند <strong>0.82</strong> — لا أقل — لتقليل النتائج الإيجابية الزائفة."
                  }
                ]
              },
              {
                h: "الخصوصية أولًا",
                p: "كل شيء — بما فيه التعرّف — يعمل داخل تبويب المتصفح. المُحفِّزات تُخزَّن محليًا على جهازك فقط، مع أزرار تصديرٍ واستيرادٍ لأخذ نسخةٍ احتياطية. لا صورةَ تُرفَع تغادر جهازك إطلاقًا."
              }
            ],
            results: [
              {
                k: "التشغيل",
                v: "100% في المتصفح"
              },
              {
                k: "مفاتيح API",
                v: "صفر"
              },
              {
                k: "تكلفة الخادم",
                v: "صفر"
              },
              {
                k: "الحدّ الافتراضي",
                v: "0.82"
              }
            ],
            note: "موقعٌ ثابتٌ مفتوح المصدر — يعمل على أي متصفحٍ حديثٍ يدعم WebAssembly، على الحاسوب والهاتف."
          },
          en: {
            lead: "See something → do something. Upload a reference photo, decide what happens when the camera sees it again — all inside your browser, no server, no key, and no photo ever leaving your device.",
            sections: [
              {
                h: "The idea",
                p: "Upload a photo of anything you care about and pick the action: show an image, play a video, fetch the weather, or a text message. When a new frame looks similar enough to your reference — the action fires automatically."
              },
              {
                h: "How it works",
                flow: [
                  "Reference photo",
                  "CLIP encoder in-browser",
                  "New frame → CLIP",
                  "similarity ≥ threshold?",
                  "Run the action"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Why CLIP instead of training a classifier per photo?",
                    d: "A custom model needs many examples and a retrain every time you add something. CLIP produces a general-purpose fingerprint for any photo <strong>with zero training</strong> — upload it and it's usable immediately. The same idea behind modern reverse-image search."
                  },
                  {
                    t: "Why the browser, not a Python backend?",
                    d: "Running the model client-side (via transformers.js + ONNX Runtime Web) makes the whole project a static site — free to host forever, no server cost, and no user photo ever touching a server."
                  },
                  {
                    t: "A conservative, measured threshold",
                    d: "In testing, two completely different shapes (a red circle and a blue square) scored <em>0.86</em> similarity, while two photos of the same circle scored <em>0.98</em>. So the default is a conservative <strong>0.82</strong> — not lower — to cut false positives."
                  }
                ]
              },
              {
                h: "Privacy first",
                p: "Everything — recognition included — runs in the browser tab. Triggers are stored locally on your device only, with export/import to back them up. No uploaded photo ever leaves your device."
              }
            ],
            results: [
              {
                k: "Runs",
                v: "100% in-browser"
              },
              {
                k: "API keys",
                v: "None"
              },
              {
                k: "Server cost",
                v: "Zero"
              },
              {
                k: "Default threshold",
                v: "0.82"
              }
            ],
            note: "An open-source static site — works on any modern browser with WebAssembly, on desktop and mobile."
          }
        }
    },{
        id: "esp32-thermal-camera",
        categories: ["arduino"],
        featured: false,
        image: "assets/images/esp32-thermal-camera.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/esp32-thermal-camera",
        tags: ["ESP32", "Arduino", "AMG8833", "TFT_eSPI"],
        title: {
            ar: "كاميرا حرارية بـ ESP32 (ESP32 Thermal Camera Pro)",
            en: "ESP32 Thermal Camera Pro",
        },
        desc: {
            ar: "كاميرا حرارية مستقلة تعرض خريطة حرارية حيّة وسلسة على شاشة TFT، عبر استيفاء وتنعيم زمني لحساس AMG8833 منخفض الدقة.",
            en: "A standalone thermal camera that renders a smooth, live heatmap on a TFT screen by interpolating and temporally smoothing a low-resolution AMG8833 sensor.",
        },
        details: {
            ar: "يجمع المشروع بين ESP32 وحساس Panasonic AMG8833 (Grid-EYE) الذي يخرج شبكة خام بدقة 8×8 فقط. الإضافة الحقيقية هي خط معالجة كامل: استيفاء ثنائي الخطية لرفع الشبكة إلى 64×64، تنعيم زمني أُسّي لتقليل الضوضاء، تدرّج لوني ديناميكي يعاير نفسه تلقائيًا على أقل وأعلى حرارة في كل إطار، وإعادة رسم جزئية للشاشة عبر TFT_eSPI لتفادي الوميض وتحقيق ~14 إطارًا/ثانية بدون أي حجب (delay) في الحلقة الرئيسية. المستودع يوثّق أيضًا نسخة أولى أبسط (Thermalv1) كمرجع لتطور المشروع.",
            en: "Combines an ESP32 with a Panasonic AMG8833 (Grid-EYE) sensor that only outputs a raw 8x8 grid. The real work is the processing pipeline: bilinear interpolation up to a 64x64 grid, exponential temporal smoothing to cut sensor noise, a dynamic color gradient that auto-scales to each frame's min/max temperature, and partial-redraw rendering via TFT_eSPI for flicker-free ~14 FPS with no blocking delay in the main loop. The repo also documents an earlier, simpler prototype (Thermalv1) showing how the project evolved.",
        },
        article: {
          ar: {
            lead: "حساسٌ حراريٌّ 8×8 لا يُخرج سوى 64 قراءة — لكن بفضل الاستيفاء والتنعيم الزمني والتدرّج اللوني الديناميكي، يتحوّل إلى بثٍّ حراريٍّ متصلٍ وسلسٍ بمعدل ~14 إطارًا/ثانية.",
            sections: [
              {
                h: "الفكرة",
                p: "حساس AMG8833 مع لوحة ESP32 وشاشة TFT = كاميرا حراريةٌ صغيرةٌ مستقلة. الحساس نفسه يعطي شبكةً خشنة 8×8 فقط — والمشروع كله يدور حول ما يحدث <em>بعد</em> ذلك ليجعلها تبدو صورةً حقيقية."
              },
              {
                h: "خط المعالجة",
                flow: [
                  "AMG8833 (8×8 قراءة)",
                  "استيفاء ثنائي → 64×64",
                  "تنعيم زمني أُسّي",
                  "تدرّج لوني ديناميكي",
                  "شاشة TFT"
                ]
              },
              {
                h: "القرارات التقنية",
                steps: [
                  {
                    t: "استيفاءٌ وتنعيمٌ زمني",
                    d: "الاستيفاء ثنائي الخطية يحوّل الـ64 خلية إلى 4096 خلية، والتنعيم الأُسّي يكبح ضوضاء الحساس بين الإطارات — فتختفي الرجفة وتصبح الصورة سلسة."
                  },
                  {
                    t: "ثغرةٌ حقيقية: التدرّج اللوني الثابت",
                    d: "النسخة الأولى استخدمت عتباتٍ ثابتة (أزرق تحت 24°، أحمر فوق 34°) — تبدو صحيحةً في مدىً واحدٍ فقط. وجّه الحساس لشيءٍ أبرد أو أسخن فتنهار الصورة للونٍ واحد. الحلّ: تدرّجٌ يُعاد معايرته وفق أقل وأعلى حرارةٍ في <strong>هذا الإطار تحديدًا</strong>، فيبقى التباين ذا معنى في أي بيئة."
                  },
                  {
                    t: "إعادة رسمٍ جزئيةٌ وتوقيتٌ غير معيق",
                    d: "تُعاد رسم الخلايا التي تغيّرت قيمتها فقط، وبتوقيتٍ يعتمد على millis() لا على delay() المعيق — فيثبت المعدّل عند ~14 إطارًا/ثانية بلا تجميد."
                  }
                ]
              },
              {
                h: "من نموذجٍ أوّليٍّ إلى نسخةٍ احترافية",
                p: "بدأ المشروع بنموذجٍ يعمل ثم أُعيد بناؤه بالكامل: من درايفرٍ بطيءٍ إلى SPI عتاديٍّ أسرع، ومن شبكة 256 خلية إلى 4096، ومن ألوانٍ ثابتةٍ إلى تدرّجٍ ديناميكي — قصة تطوّرٍ حقيقيةٌ موثّقةٌ في المستودع."
              }
            ],
            results: [
              {
                k: "دقة الحساس",
                v: "8×8"
              },
              {
                k: "بعد الاستيفاء",
                v: "64×64"
              },
              {
                k: "المعدّل",
                v: "~14 إطار/ث"
              },
              {
                k: "التدرّج",
                v: "ديناميكي"
              }
            ],
            note: "الاستيفاء يجعل العرض أنعم لا الحساس أدق — حساسٌ منخفض الدقة من فئة Grid-EYE، لا تصويرٌ حراريٌّ بجودة FLIR. الكود مفتوحٌ بالكامل."
          },
          en: {
            lead: "An 8×8 thermal sensor outputs just 64 readings — but through interpolation, temporal smoothing and a dynamic color gradient, it becomes a fluid, continuous thermal feed at ~14 FPS.",
            sections: [
              {
                h: "The idea",
                p: "An AMG8833 sensor + an ESP32 + a TFT screen = a small standalone thermal camera. The sensor only gives a coarse 8×8 grid — the whole project is what happens <em>after</em> that to make it look like a real image."
              },
              {
                h: "The pipeline",
                flow: [
                  "AMG8833 (8×8 readings)",
                  "Bilinear interp → 64×64",
                  "Exponential smoothing",
                  "Dynamic color mapping",
                  "TFT screen"
                ]
              },
              {
                h: "Technical decisions",
                steps: [
                  {
                    t: "Interpolation and temporal smoothing",
                    d: "Bilinear interpolation turns 64 cells into 4,096, and exponential smoothing suppresses sensor noise between frames — so jitter disappears and the image flows."
                  },
                  {
                    t: "A real bug: fixed color thresholds",
                    d: "The first version used hard-coded bands (blue below 24°, red above 34°) — only right for one range. Point it at something colder or hotter and the image collapses to one color. The fix: a gradient rescaled to <strong>this frame's</strong> actual min/max, so contrast stays meaningful in any environment."
                  },
                  {
                    t: "Partial redraw and non-blocking timing",
                    d: "Only cells whose value changed are re-painted, with millis()-based pacing instead of a blocking delay() — so the rate holds at ~14 FPS with no freeze."
                  }
                ]
              },
              {
                h: "From prototype to Pro",
                p: "It started as a working prototype then was fully rebuilt: from a slow driver to faster hardware SPI, from a 256-cell grid to 4,096, and from fixed colors to a dynamic gradient — a real evolution story documented in the repo."
              }
            ],
            results: [
              {
                k: "Sensor",
                v: "8×8"
              },
              {
                k: "After interpolation",
                v: "64×64"
              },
              {
                k: "Frame rate",
                v: "~14 FPS"
              },
              {
                k: "Gradient",
                v: "Dynamic"
              }
            ],
            note: "Interpolation makes the display smoother, not the sensor sharper — a low-res Grid-EYE class sensor, not FLIR-grade imaging. Fully open source."
          }
        }
    },{
        id: "pendulum-gravity-lab",
        categories: ["python-physics"],
        featured: false,
        image: "assets/images/pendulum-gravity-lab.png",
        demoUrl: "https://huggingface.co/spaces/engdarwish/pendulum-gravity-lab",
        codeUrl: "https://github.com/eahmeddarwish/pendulum-gravity-lab",
        tags: ["Python", "OpenCV", "Gradio", "NumPy", "SciPy"],
        title: {
            ar: "مختبر البندول لتعيين عجلة الجاذبية (Pendulum Gravity Lab)",
            en: "Pendulum Gravity Lab",
        },
        desc: {
            ar: "قياس عجلة الجاذبية الأرضية عبر تتبّع بندول حقيقي بالرؤية الحاسوبية، مع تحليل إحصائي كامل ومحاكاة عددية تفاعلية بلا حاجة لكاميرا.",
            en: "Measuring Earth's gravitational acceleration via computer-vision pendulum tracking, with full uncertainty analysis and an interactive camera-free numerical simulation.",
        },
        details: {
            ar: "أداة رؤية حاسوبية مبنية بلغة Python وOpenCV تتتبّع بندولًا حقيقيًا عبر الكاميرا (تحويل هَف للدوائر) وتوقّت أرجحاته لحساب عجلة الجاذبية g = 4π²L/T²، مدعومة بميزانية كاملة لعدم اليقين وانحدار خطي متعدد الأطوال بدل الاكتفاء بمتوسط بسيط. تم اكتشاف وإصلاح علّتين برمجيتين حقيقيتين أثناء التطوير: فيضان عددي صامت (uint16 overflow) كان يُنتج قيمًا خيالية لـ g، وعلة توقيت عند تحليل الفيديوهات المسجَّلة. يرافق التجربة محاكاة تفاعلية مبنية بـ Gradio تحل معادلة البندول اللاخطي عدديًا (RK4) وتقارنها بالحل التحليلي الدقيق عبر التكامل الإهليلجي — لا تحتاج كاميرا أو عتادًا، وتعمل من أي متصفح عبر Hugging Face Spaces.",
            en: "A Python + OpenCV computer-vision tool that tracks a real pendulum through a camera (Hough Circle Transform) and times its oscillations to compute g = 4π²L/T², backed by a full uncertainty budget and multi-length linear regression rather than a single flattering average. Two real bugs were found and fixed during development: a silent uint16 numeric overflow that produced nonsensical g values, and a timing bug affecting analysis of recorded video files. An interactive Gradio simulation accompanies the experiment, numerically solving the nonlinear pendulum equation (RK4) and cross-checking it against the exact analytic solution via the elliptic integral — no camera or hardware required, runs from any browser on Hugging Face Spaces.",
        },
    },{
        id: "telescope-optical-designer",
        categories: ["python-physics"],
        featured: false,
        image: "assets/images/telescope-optical-designer.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/telescope-optical-designer",
        tags: ["MATLAB", "Optics", "Ray Matrix", "Simulation"],
        title: {
            ar: "مصمّم التلسكوب الضوئي (Telescope Optical Designer)",
            en: "Telescope Optical Designer",
        },
        desc: {
            ar: "أداة MATLAB/Octave عامة تصمّم تلسكوبًا كاسرًا من عدساته: تحسب التكبير الزاوي، والمسافة الأفوكال، ومصفوفة نقل الشعاع (ABCD)، وترسم مخطط الأشعة — لنوعَي جاليلي وكبلري.",
            en: "A general MATLAB/Octave tool that designs a refracting telescope from its lenses: it computes the angular magnification, the afocal spacing, the ABCD ray-transfer matrix, and draws the ray diagram — for both Galilean and Keplerian types.",
        },
        details: {
            ar: "إعادة بناءٍ كاملة لنسخةٍ سابقة كانت غير صحيحةٍ فيزيائيًا. تُعطى الأداة الأبعاد البؤرية مباشرةً أو أنصاف أقطار العدسات ومعامل الانكسار، فتحسب التكبير الزاوي M=-fo/fe والمسافة الأفوكال d=fo+fe ومصفوفة ABCD للنظام كله، وتتحقق من شرط الأفوكال (C≈0)، وترسم مخطط أشعة بارَاكسي يوضّح أن الأشعة المتوازية تدخل وتخرج متوازية. دوال التصميم والرسم منفصلة عن سكربت الأمثلة بحيث يمكن لأي GUI مستقبلي استدعاؤها مباشرةً.",
            en: "A from-scratch rebuild of an earlier version that was physically incorrect. The tool takes focal lengths directly, or lens radii and a refractive index, then computes the angular magnification M=-fo/fe, the afocal spacing d=fo+fe, and the whole-system ABCD matrix, checks the afocal condition (C≈0), and draws a paraxial ray diagram showing parallel rays in and parallel rays out. The design and drawing functions are separated from the examples script so a future GUI can call them directly.",
        },
        article: {
          ar: {
            lead: "أداة MATLAB تصمّم تلسكوبًا كاسرًا من عدساته — التكبير وطول الأنبوب ومصفوفة الشعاع والرسم — بعد تصحيح أخطاء فيزيائية حقيقية كانت في النسخة القديمة.",
            sections: [
              {
                h: "الفكرة",
                p: "تعطيها الأبعاد البؤرية (أو أنصاف الأقطار ومعامل الانكسار) فتحسب التكبير الزاوي M=-fo/fe، والمسافة الأفوكال d=fo+fe، ومصفوفة ABCD للنظام، وترسم مخطط أشعة بارَاكسي. تدعم جاليلي (صورة معتدلة) وكبلري (صورة مقلوبة)."
              },
              {
                h: "الأخطاء التي صُحِّحت",
                steps: [
                  { t: "قسمةٌ على صفر في معادلة العدسة", d: "النسخة القديمة ساوت نصفَي القطر فصار البعد البؤري لا نهائيًّا وكل رقمٍ بعده باطل؛ الآن يُفرض اختلاف الانحناءين واصطلاح الإشارة الصحيح." },
                  { t: "عينية الجاليلي يجب أن تكون مفرّقة", d: "العينية سالبة (مقعّرة)؛ الكود القديم استخدم عدستين محدّبتين متطابقتين، والمسافة الصحيحة d=fo+fe أقصر من البعد البؤري للشيئية." },
                  { t: "التكبير لم يُحسب أبدًا", d: "أهمّ ناتجٍ كان مفقودًا؛ الآن M=-fo/fe، وهو يساوي عنصر D في مصفوفة النظام الأفوكال." },
                  { t: "مصفوفة ABCD صحيحة", d: "مبنيةٌ على المسافة بين العدستين لا سُمك كل عدسة، مع عرض عنصر C للتأكد أن النظام أفوكال." }
                ]
              },
              {
                h: "حدودٌ صادقة",
                p: "نموذجٌ بارَاكسي رفيع العدسة يتجاهل السُمك والزيوغ ومجال الرؤية؛ أداة تصميم/تعليم لا برنامج تصميمٍ ضوئيٍّ كامل، ولأنظمة عدستين فقط."
              }
            ],
            results: [
              { k: "النوعان", v: "جاليلي/كبلري" },
              { k: "التكبير", v: "M = -fo/fe" },
              { k: "المصفوفة", v: "ABCD أفوكال" },
              { k: "التحقق العددي", v: "C ≈ 0" }
            ],
            note: "مشروع محاكاةٍ مفتوح المصدر لأغراضٍ تعليميةٍ وportfolio؛ تم التحقق من الأرقام عدديًا (مثال: fo=900, fe=-100 ⇒ M=9× معتدلة، C≈0)."
          },
          en: {
            lead: "A MATLAB tool that designs a refracting telescope from its lenses — magnification, tube length, ray matrix and diagram — after fixing real physics errors in the old version.",
            sections: [
              {
                h: "The idea",
                p: "Give it focal lengths (or radii + refractive index) and it computes the angular magnification M=-fo/fe, the afocal spacing d=fo+fe, and the system ABCD matrix, and draws a paraxial ray diagram. It supports Galilean (upright) and Keplerian (inverted) telescopes."
              },
              {
                h: "The errors that were fixed",
                steps: [
                  { t: "Lensmaker division-by-zero", d: "The old code set both radii equal, making the focal length infinite and every downstream number invalid; it now enforces different curvatures and the correct sign convention." },
                  { t: "The Galilean eyepiece must diverge", d: "The eyepiece is negative (concave); the old code used two identical converging lenses, and the correct spacing d=fo+fe is shorter than the objective focal length." },
                  { t: "Magnification was never computed", d: "The single most important output was missing; it is now M=-fo/fe, equal to the D element of the afocal system matrix." },
                  { t: "Correct ABCD matrix", d: "Built from the lens spacing, not each lens's thickness, and the C element is reported to confirm the system is afocal." }
                ]
              },
              {
                h: "Honest limitations",
                p: "A paraxial, thin-lens model that ignores thickness, aberrations and field of view; a design/teaching tool, not full optical-design software, and for two-lens systems only."
              }
            ],
            results: [
              { k: "Types", v: "Galilean/Keplerian" },
              { k: "Magnification", v: "M = -fo/fe" },
              { k: "Matrix", v: "ABCD afocal" },
              { k: "Numeric check", v: "C ≈ 0" }
            ],
            note: "An open-source simulation project for educational/portfolio purposes; the numbers were verified numerically (e.g. fo=900, fe=-100 ⇒ M=9× upright, C≈0)."
          }
        }
    },{
        id: "puck-robot",
        categories: ["robotics", "arduino"],
        featured: false,
        image: "assets/images/puck-collector.png",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/puck-robot",
        tags: ["Arduino", "C++", "Robotics", "State Machine", "Sensors"],
        title: {
            ar: "روبوت جامع الأقراص الملوّنة (Puck Robot)",
            en: "Puck-Collecting Robot",
        },
        desc: {
            ar: "روبوت ذاتي القيادة يبحث في ساحة، يميّز قرصًا ملوّنًا بحسّاس لون، يمسكه بجريبر سيرفو، ويرجّعه لمنطقة home ملوّنة — مكتوب كآلة حالاتٍ نضيفة. مشروع مفهومي لم يُطبّق على عتاد.",
            en: "An autonomous robot that searches an arena, identifies a colored puck with a color sensor, grabs it with a servo gripper, and returns it to a colored home zone — written as a clean state machine. A concept design, not yet built on hardware.",
        },
        details: {
            ar: "إعادة كتابةٍ كاملة لنموذجٍ سابق كآلة حالاتٍ صريحة (بحث ← اقتراب ← مسك ← عودة ← تجنّب). حسّاس مسافة (ultrasonic) يقاطع أي حالة قيادةٍ لتجنّب العوائق، وحسّاس لون TCS3200 يميّز القرص المستهدف عن منطقة الـhome، وجريبر سيرفو يمسك ويطلق. النموذج الأصلي كانت دالة فحص الحسّاسات فيه تستدعي نفسها تكراريًا (recursion) وقد تُفيض مكدّس الـArduino؛ أُزيل هذا بالكامل. المشروع مفهوميٌّ صريح: مكتوبٌ ليكون صحيحًا وقابلًا للقراءة، لكنه لم يُبنَ أو يُختبَر على عتاد، وعتبات الألوان تحتاج معايرة.",
            en: "A full rewrite of an earlier prototype as an explicit state machine (SEARCH → APPROACH → GRAB → RETURN → AVOID). An ultrasonic sensor interrupts any driving state for obstacle avoidance, a TCS3200 color sensor distinguishes the target puck from the home pad, and a servo gripper grabs and releases. In the original, the sensor-check routine called itself recursively and could overflow the Arduino's stack; that is removed. The project is explicitly a concept: written to be correct and readable, but not built or tested on hardware, and the color thresholds need calibration.",
        },
        article: {
          ar: {
            lead: "روبوت ذاتي يبحث عن قرصٍ ملوّن، يمسكه بجريبر، ويرجّعه لمنطقة الـhome — أُعيد بناؤه كآلة حالاتٍ نضيفة. مشروعٌ مفهوميٌّ لم يُطبّق على عتاد.",
            sections: [
              {
                h: "الفكرة",
                p: "آلة حالاتٍ صريحة: بحث ← اقتراب ← مسك ← عودة ← تجنّب. حسّاس مسافةٍ للعوائق، وحسّاس لون TCS3200 لتمييز القرص عن منطقة الـhome، وجريبر سيرفو يمسك ويطلق."
              },
              {
                h: "القرارات التقنية",
                steps: [
                  { t: "آلة حالاتٍ بدل الـrecursion", d: "النموذج القديم كانت دالة الحسّاسات تستدعي نفسها تكراريًا وقد تُفيض المكدّس على Arduino؛ الآن FSM مسطّحة تقرأ الحسّاسات مرةً كل دورة loop." },
                  { t: "قراراتُ لونٍ معايَرة", d: "مقارنة قنوات اللون ببعضها وبحدودٍ معايَرة بدل عتبة ترددٍ خامٍ واحدةٍ هشّة، أمتن مع تغيّر الإضاءة." },
                  { t: "تجنّب العوائق كأولوية", d: "فحص المسافة يسبق تبديل الحالة، وأفعال الرجوع/اللف موقوتةٌ بـmillis() بدل delay()، فتبقى الحلقة مستجيبة." }
                ]
              },
              {
                h: "حدودٌ صادقة",
                p: "مشروعٌ مفهوميٌّ لم يُبنَ أو يُختبَر على عتاد. عتبات الألوان مبدئيةٌ وتحتاج معايرة، والحركة مفتوحة الحلقة (بلا إنكودرات) فالدقة الواقعية ستنحرف."
              }
            ],
            results: [
              { k: "الحالة", v: "مفهوم/نظري" },
              { k: "عدد الحالات", v: "5" },
              { k: "الحسّاسات", v: "مسافة + لون" },
              { k: "التطبيق العملي", v: "لم يُطبّق بعد" }
            ],
            note: "مشروعٌ مفهوميٌّ (Concept) مفتوح المصدر — الكود مكتوبٌ بشكلٍ صحيحٍ واحترافي، لكنه لم يُطبّق عمليًا على عتاد."
          },
          en: {
            lead: "An autonomous robot that searches for a colored puck, grabs it, and returns it home — rebuilt as a clean state machine. A concept project, not built on hardware.",
            sections: [
              {
                h: "The idea",
                p: "An explicit state machine: SEARCH → APPROACH → GRAB → RETURN → AVOID. An ultrasonic sensor for obstacles, a TCS3200 color sensor to tell the puck from the home pad, and a servo gripper that grabs and releases."
              },
              {
                h: "Technical decisions",
                steps: [
                  { t: "A state machine instead of recursion", d: "The old prototype's sensor routine called itself recursively and could overflow the Arduino stack; it is now a flat FSM that reads the sensors once per loop pass." },
                  { t: "Calibrated color decisions", d: "Comparing color channels against each other and against calibrated bounds instead of one fragile raw threshold, far more robust to lighting." },
                  { t: "Obstacle avoidance as priority", d: "The distance check runs before the state switch, and reverse/turn actions are time-bounded with millis() instead of delay(), keeping the loop responsive." }
                ]
              },
              {
                h: "Honest limitations",
                p: "A concept project, not built or tested on hardware. Color thresholds are placeholders needing calibration, and motion is open-loop (no encoders) so real-world accuracy will drift."
              }
            ],
            results: [
              { k: "Status", v: "Concept / theoretical" },
              { k: "States", v: "5" },
              { k: "Sensors", v: "Distance + color" },
              { k: "Hardware run", v: "Not yet built" }
            ],
            note: "An open-source concept project — the code is written correctly and professionally, but has not been run on physical hardware."
          }
        }
    },
];

if (typeof window !== "undefined") window.projectsData = projectsData;
