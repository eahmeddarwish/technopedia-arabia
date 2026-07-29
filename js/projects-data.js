/* ==========================================================================
   TECHNOPEDIA ARABIA — Projects data
   Each project: id, categories (["arduino","raspberrypi","python-ai","robotics","iot"]),
   featured (true = homepage), image, demoUrl/codeUrl (""=hidden), tags,
   title/desc/details/article each {ar,en}.
   Ordered best-to-least by engineering depth, documentation, and polish.
   ========================================================================== */

const projectsData = [
    {
        "id": "smart-stethoscope",
        "categories": [
            "python-ai",
            "raspberrypi"
        ],
        "featured": true,
        "image": "assets/images/smart-stethoscope.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/smart-stethoscope",
        "tags": [
            "Python",
            "TensorFlow Lite",
            "Raspberry Pi",
            "PySide6",
            "Signal Processing"
        ],
        "title": {
            "ar": "سماعة طبية ذكية بالذكاء الاصطناعي (Smart Stethoscope)",
            "en": "AI Smart Stethoscope — Heart Sound Screening"
        },
        "desc": {
            "ar": "سماعةٌ طبيةٌ رقمية مبنيةٌ على Raspberry Pi، تستخدم شبكةً عصبيةً مضغوطة لفحص صوت القلب وتصنيفه فوريًّا (طبيعي / لغطٌ قلبي / صوتٌ إضافي / تشويش)، مع تقرير PDF بأسلوبٍ طبي.",
            "en": "A Raspberry Pi-based digital stethoscope that uses an on-device CNN to screen heart sounds in real time (normal / murmur / extra sound / artifact), with a clinical-style PDF report."
        },
        "details": {
            "ar": "مشروعٌ شخصيٌّ يجمع بين معالجة الإشارات الصوتية والذكاء الاصطناعي والعتاد المدمج. يُلتقط الصوت عبر ميكروفون BOYA BY-M1 Pro متصلٍ بسماعةٍ طبيةٍ تقليدية، ثم يمرّ بخط معالجةٍ كامل (تصفية Bandpass وNotch، بوابة ضوضاء، اختيار أفضل نافذةٍ زمنيةٍ مدتها 3 ثوانٍ)، ثم يتحوّل إلى طيف Mel Spectrogram يُغذَّى لشبكة CNN مضغوطة بصيغة TensorFlow Lite (INT8) تعمل بالكامل على الجهاز نفسه دون الحاجة إلى أي اتصالٍ بالإنترنت. تظهر النتيجة على شاشة لمسٍ مبنيةٍ بـ PySide6 مع شرحٍ سريريٍّ لسبب القرار، ثم تُصدَّر كتقرير PDF. المشروع مكتملٌ ويعمل فعليًّا من البداية إلى النهاية، ونُشر هنا كمرجعٍ مفتوح المصدر بعد إعادة هيكلة الكود بالكامل إلى مستوى احترافي (اختبارات، توثيقٌ تقني، إعداداتٌ قابلةٌ للتخصيص).",
            "en": "A personal project combining audio signal processing, on-device AI, and embedded hardware. Audio is captured via a BOYA BY-M1 Pro microphone attached to a conventional stethoscope, run through a DSP pipeline (bandpass + notch filtering, noise gating, best 3-second window selection), converted to a Mel-spectrogram, and classified by a quantized TensorFlow Lite CNN running entirely on-device with no internet connection. The result is shown on a PySide6 touchscreen with a clinical explanation of the decision, and exported as a PDF report. The project is complete and working end to end, and is published here as an open-source reference after a full professional refactor (tests, documentation, configurable settings)."
        },
        "article": {
            "ar": {
                "lead": "سماعةٌ رقميةٌ بذكاء اصطناعي تفحص صوت القلب على الجهاز نفسه — دون إنترنت — وتشرح سبب قرارها على الشاشة وفي تقرير PDF.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "الهدف أن يتمكّن أيّ شخصٍ — ممرضًا كان أم طبيبًا أم فردًا في منطقةٍ محدودة الموارد الطبية — من استخدام سماعةٍ رخيصةٍ نسبيًّا مبنيةٍ على Raspberry Pi لفحص صوت القلب، والحصول على تصنيفٍ أوليٍّ فوري: طبيعي، لغطٌ قلبي (Murmur)، صوتٌ قلبيٌّ إضافي (S3/S4)، أو تشويشٌ في التسجيل — قبل اتخاذ قرار تحويل الحالة إلى طبيب قلب."
                    },
                    {
                        "h": "خط معالجة الإشارة",
                        "flow": [
                            "تسجيل 8 ثوانٍ @ 44100 هرتز",
                            "تخفيض المعدل إلى 2000 هرتز",
                            "فلتر Bandpass + Notch 50هرتز",
                            "بوابة ضوضاء + اختيار أفضل 3 ثوانٍ",
                            "Mel Spectrogram (64 نطاق)",
                            "CNN مضغوط (INT8 TFLite)"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "قاعدة قرار \"اللغط أولًا\"",
                                "d": "بدلًا من الاعتماد على الدالة argmax مباشرة، يتحقق النموذج أولًا من احتمالية اللغط (Murmur) مقارنةً بحدٍّ أدنى محافظ. وهو خيارٌ متعمَّدٌ بعد تجربة عدة قيمٍ للعتبة (Threshold)، أدّى إلى تحقيق نسبة اكتشافٍ بلغت 100% لجميع حالات اللغط الحقيقية (مقابل دقةٍ إجماليةٍ قدرها 75%) — لأن تفويت حالة لغطٍ حقيقية أخطر بكثيرٍ من إنذارٍ كاذب."
                            },
                            {
                                "t": "ضغط النموذج بصيغة INT8",
                                "d": "حُوِّل النموذج من TensorFlow العادي إلى صيغة TensorFlow Lite مع ضغط INT8، ليعمل بسرعةٍ كافيةٍ على معالج Raspberry Pi المحدود، بعد تجربة أكثر من 9 نسخٍ تدريبيةٍ مختلفة."
                            },
                            {
                                "t": "إعادة هيكلة الكود بالكامل",
                                "d": "كان الكود الأصلي ملف واجهةٍ رسوميةٍ واحدًا ضخمًا (أكثر من 1700 سطر) بمساراتٍ ثابتةٍ على جهاز Raspberry Pi معيّن. قُسِّم إلى حزمة بايثون منظمة (معالجة إشارة، استدلال، تسجيل صوت، تقرير PDF، واجهة) قابلةٍ للاختبار دون أي عتاد، مع إعداداتٍ عبر متغيرات البيئة بدلًا من المسارات الثابتة."
                            }
                        ]
                    },
                    {
                        "h": "اكتشاف وتصحيح خطأ في الداتاسيت المستخدم للتدريب",
                        "p": "أثناء تجهيز المشروع للنشر، لوحظ أن ملفات التصنيفات المرفقة بداتاسيت PASCAL \"Heartbeat Sounds\" الشهير على Kaggle تحتوي على أخطاءٍ منهجيةٍ في مطابقة أسماء الملفات (بادئاتٌ وهمية وتضاربٌ في صياغة الأسماء)، ما يجعل جزءًا كبيرًا من الصفوف غير قابلٍ للربط الصحيح بالملف الصوتي الحقيقي. صُحِّح الخطأ بالكامل (176 من 176 في set_a، و656 من 656 في set_b) وتم التحقق برمجيًّا من دقة كل تصحيح، ونُشر جدول التصحيح فقط (أسماء الملفات والتصنيفات، دون أي صوت) في المستودع — دون إعادة نشر الداتاسيت نفسه المحمي بحقوق الملكية."
                    }
                ],
                "results": [
                    {
                        "k": "نسبة اكتشاف اللغط",
                        "v": "100%"
                    },
                    {
                        "k": "الدقة الإجمالية",
                        "v": "75%"
                    },
                    {
                        "k": "عدد التصنيفات",
                        "v": "4"
                    },
                    {
                        "k": "نسخ تدريبٍ جُرِّبت",
                        "v": "9+"
                    }
                ],
                "note": "المشروع لأغراضٍ تعليميةٍ وبحثيةٍ فقط، وليس جهازًا طبيًّا معتمدًا — يجب تأكيد أي نتيجةٍ من قِبل طبيبٍ مختص. الكود منشورٌ بالكامل مفتوح المصدر، ومفتوحٌ للتحسين والتطوير."
            },
            "en": {
                "lead": "An AI-powered digital stethoscope that screens heart sounds entirely on-device — no internet required — and explains its reasoning on screen and in a PDF report.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Let anyone — a nurse, a doctor, or someone in a resource-limited setting — use a relatively cheap Raspberry Pi-based stethoscope to get an immediate first-pass screening: normal, murmur, extra heart sound (S3/S4), or recording artifact, before deciding whether to refer to a cardiologist."
                    },
                    {
                        "h": "Signal pipeline",
                        "flow": [
                            "8s capture @ 44100 Hz",
                            "Downsample to 2000 Hz",
                            "Bandpass + 50Hz notch filter",
                            "Noise gate + best 3s window",
                            "Mel Spectrogram (64 bands)",
                            "Quantized CNN (INT8 TFLite)"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "\"Murmur-first\" decision rule",
                                "d": "Instead of a plain argmax, the model first checks the murmur probability against a conservative threshold. A deliberate choice after a threshold sweep, reaching 100% recall on real murmur cases (versus 75% overall accuracy) — because missing a real murmur is far more dangerous than a false alarm."
                            },
                            {
                                "t": "INT8 model quantization",
                                "d": "The model was converted from full TensorFlow to TensorFlow Lite with INT8 quantization so it runs fast enough on the Raspberry Pi's limited processor, after 9+ different training iterations."
                            },
                            {
                                "t": "Full codebase restructure",
                                "d": "The original code was one 1700+ line GUI file hardcoded to a specific Raspberry Pi's file paths. It was split into an organized Python package (signal processing, inference, audio capture, PDF report, GUI) testable with no hardware attached, with environment-variable configuration replacing the hardcoded paths."
                            }
                        ]
                    },
                    {
                        "h": "Finding and fixing a bug in the training dataset",
                        "p": "While preparing this project for release, we noticed the label files shipped with the popular PASCAL \"Heartbeat Sounds\" dataset on Kaggle contain a systematic filename-matching bug (phantom prefixes and inconsistent naming) that leaves a large fraction of rows unmatchable to the real audio file. We fully corrected it (176/176 and 656/656 rows) and verified every fix programmatically, publishing only the corrected mapping table (filenames + labels, no audio) in the repository — without redistributing the copyrighted dataset itself."
                    }
                ],
                "results": [
                    {
                        "k": "Murmur recall",
                        "v": "100%"
                    },
                    {
                        "k": "Overall accuracy",
                        "v": "75%"
                    },
                    {
                        "k": "Classes",
                        "v": "4"
                    },
                    {
                        "k": "Training iterations",
                        "v": "9+"
                    }
                ],
                "note": "For educational and research purposes only — not a certified medical device. Any result must be confirmed by a qualified clinician. Fully open source and open to further improvement."
            }
        }
    },
    {
        "id": "adsb-flight-tracker",
        "categories": [
            "iot",
            "python-ai"
        ],
        "featured": true,
        "image": "assets/images/adsb-radar-screenshot.png",
        "demoUrl": "https://engdarwish-adsb-flight-tracker.static.hf.space",
        "codeUrl": "https://github.com/eahmeddarwish/adsb-flight-tracker",
        "tags": [
            "Python",
            "Flask",
            "RTL-SDR",
            "ADS-B",
            "Raspberry Pi"
        ],
        "title": {
            "ar": "متتبع رحلات ADS-B",
            "en": "ADS-B Flight Tracker"
        },
        "desc": {
            "ar": "رادار طيران حي بتصميم ATC كلاسيكي، يشتغل بأي دونجل RTL-SDR على أي لابتوب أو Raspberry Pi.",
            "en": "A live ATC-style flight radar that runs with any RTL-SDR dongle on a laptop or Raspberry Pi."
        },
        "details": {
            "ar": "يستقبل إشارات ADS-B الحقيقية على 1090MHz عبر dump1090، ويعرضها على واجهة رادار حية ببصمة كلاسيكية. الديمو المباشر يعمل بمحاكاةٍ داخل المتصفح؛ النسخة الكاملة تدعم عتادًا حقيقيًا.",
            "en": "Receives real ADS-B signals at 1090MHz via dump1090 and renders them on a live radar-style dashboard. The live demo runs a browser-side simulation; the full version supports real hardware."
        },
        "article": {
            "ar": {
                "lead": "رادار طيرانٍ حيٌّ يفكّ تشفير إشارات الطائرات الحقيقية على تردد 1090 ميجاهرتز بدونجل RTL-SDR، ويعرضها على واجهةٍ بطابع أبراج المراقبة — على أي لابتوبٍ أو راسبيري باي.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "تلتقط إشارات ADS-B التي تبثّها الطائرات فعليًا، وتفكّها وتعرض كل طائرةٍ على خريطةٍ حيةٍ بأيقوناتٍ دقيقة الاتجاه ومساراتٍ خلفها. وإن لم يكن لديك عتاد؟ وضع محاكاةٍ جاهزٌ يشغّل نفس الواجهة ببياناتٍ تجريبية."
                    },
                    {
                        "h": "المعمارية",
                        "flow": [
                            "دونجل RTL-SDR (1090MHz)",
                            "dump1090 يفكّ الإشارة",
                            "خادم Flask (API + واجهة)",
                            "خريطة Leaflet في المتصفح"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "وضعان دائمان: محاكاةٌ وحقيقي",
                                "d": "وضع المحاكاة يعمل في ثوانٍ بلا أي عتاد — هو ما يشتغل على النسخة الحية. والوضع الحقيقي يفكّ بثّ ADS-B فعليًا من الدونجل. الاثنان يتكلمان مع نفس الخادم ونفس الواجهة، فتبدّل بينهما بزرٍّ واحد."
                            },
                            {
                                "t": "كودٌ عابرٌ للمنصّات",
                                "d": "الخادم بايثون صافٍ بلا أي كودٍ خاصٍّ بالراسبيري باي — يعمل على ويندوز وماك ولينكس. الراسبيري باي مجرد خيارٍ مريحٍ للتشغيل الدائم 24 ساعة، لا شرط."
                            },
                            {
                                "t": "إثراءٌ آمنٌ من جهة الخادم",
                                "d": "بيانات الرحلات الإضافية تُجلَب عبر الخادم فقط — مفتاح الـAPI لا يصل للمتصفح إطلاقًا. خادمٌ واحدٌ على منفذٍ واحدٍ يخدم الواجهة والـAPI معًا."
                            }
                        ]
                    },
                    {
                        "h": "جاهزٌ للتشغيل الدائم",
                        "p": "مع ملف systemd للتشغيل التلقائي عند الإقلاع، يتحوّل الراسبيري باي إلى كشك رادارٍ يعمل بلا توقّف. وكل الإعدادات عبر متغيّرات البيئة — لا شيء مثبّتٌ في الكود، فتغيّر المنطقة والمركز بسهولة."
                    }
                ],
                "results": [
                    {
                        "k": "التردد",
                        "v": "1090 MHz"
                    },
                    {
                        "k": "المنصّات",
                        "v": "ويندوز/ماك/لينكس"
                    },
                    {
                        "k": "وضع المحاكاة",
                        "v": "بلا عتاد"
                    },
                    {
                        "k": "المنافذ",
                        "v": "واحد"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر بالكامل، مع نسخةٍ حيةٍ على Hugging Face تعمل بوضع المحاكاة مباشرةً."
            },
            "en": {
                "lead": "A live aircraft radar that decodes real ADS-B signals on 1090 MHz with an RTL-SDR dongle, rendering every plane on a retro ATC-style dashboard — on any laptop or Raspberry Pi.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "It picks up the ADS-B signals aircraft actually broadcast, decodes them, and shows each plane on a live map with heading-accurate icons and trails. No hardware? A built-in simulation runs the same UI with demo traffic."
                    },
                    {
                        "h": "Architecture",
                        "flow": [
                            "RTL-SDR dongle (1090MHz)",
                            "dump1090 decodes",
                            "Flask server (API + UI)",
                            "Leaflet map in browser"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Two first-class modes: sim and live",
                                "d": "Simulation runs in seconds with no hardware — it powers the live demo. Live mode decodes real ADS-B from the dongle. Both talk to the same server and UI, so you switch with one button."
                            },
                            {
                                "t": "Cross-platform code",
                                "d": "The server is pure Python with no Pi-specific code — it runs on Windows, macOS and Linux. A Raspberry Pi is just a convenient always-on box, not a requirement."
                            },
                            {
                                "t": "Safe server-side enrichment",
                                "d": "Extra flight data is fetched through the server only — the API key never reaches the browser. One server on one port serves both the UI and the API."
                            }
                        ]
                    },
                    {
                        "h": "Ready for permanent use",
                        "p": "With a systemd unit for boot-time auto-start, the Pi becomes a 24/7 radar kiosk. All configuration is via environment variables — nothing is hardcoded, so you change region and center easily."
                    }
                ],
                "results": [
                    {
                        "k": "Frequency",
                        "v": "1090 MHz"
                    },
                    {
                        "k": "Platforms",
                        "v": "Win/Mac/Linux"
                    },
                    {
                        "k": "Sim mode",
                        "v": "No hardware"
                    },
                    {
                        "k": "Ports",
                        "v": "One"
                    }
                ],
                "note": "Fully open source, with a live Hugging Face demo running in simulation mode out of the box."
            }
        }
    },
    {
        "id": "drone-detection-yolov5",
        "categories": [
            "python-ai"
        ],
        "featured": true,
        "image": "assets/images/drone-detection-yolov5.png",
        "demoUrl": "https://huggingface.co/spaces/engdarwish/drone-detection-demo",
        "codeUrl": "https://github.com/eahmeddarwish/drone-detection-yolov5",
        "tags": [
            "Python",
            "YOLOv5",
            "Computer Vision",
            "Raspberry Pi",
            "ONNX",
            "PID Control"
        ],
        "title": {
            "ar": "كشف وتتبّع الطائرات المسيّرة — YOLOv5",
            "en": "Drone Detection & Tracking — YOLOv5"
        },
        "desc": {
            "ar": "نظام يكشف الطائرات المسيّرة لحظيًا ويتتبعها فعليًا بكاميرا على موتورات Pan/Tilt، شغال بالكامل على Raspberry Pi 4 بدون GPU.",
            "en": "Real-time drone detection with a physical pan/tilt camera tracker, running fully on a GPU-less Raspberry Pi 4."
        },
        "details": {
            "ar": "موديل YOLOv5s مُدرَّب على 40,000+ صورة (99% mAP@0.5)، مُصدَّر لـ ONNX للاستدلال على CPU. نظام التتبّع يدمج فلتر كالمان (للتنبؤ بموقع الطائرة بين الفريمات) مع وحدة تحكم PID لكل محور، تُحرّك موتوري سيرفو عبر PCA9685 لإبقاء الطائرة في منتصف الكاميرا. يعمل بمعدل 15-20 إطار/ثانية على Raspberry Pi 4 عادي.",
            "en": "A YOLOv5s model trained on 40,000+ images (99% mAP@0.5), exported to ONNX for CPU inference. The tracking loop combines a Kalman filter (predicting the drone's position between frames) with a per-axis PID controller driving two pan/tilt servos via a PCA9685, keeping the drone centered in frame. Runs at 15–20 FPS on a stock Raspberry Pi 4."
        },
        "article": {
            "ar": {
                "lead": "نموذجٌ واحد مُدرَّب، يعمل لحظيًا على حاسوبٍ بـ 35 دولارًا، يُطارد الطائرات المسيّرة ويُبقيها في منتصف الكاميرا — بدون كرت شاشة، وبدون أي حلولٍ مختصرة.",
                "sections": [
                    {
                        "h": "المشكلة",
                        "p": "كشف الطائرات المسيّرة سهلٌ على خادمٍ بكرت شاشةٍ قوي. لكن أن يعمل النظام <strong>لحظيًا على Raspberry Pi 4 بلا GPU</strong>، ويتتبّع الطائرة فعليًا بموتوراتٍ تُحرّك الكاميرا خلفها — هذه هي المعادلة الصعبة. الهدف: نظامٌ كامل يكشف ويلاحق، على جهازٍ يتّسع لكفّ اليد."
                    },
                    {
                        "h": "خط العمل",
                        "p": "النظام سلسلةٌ مترابطة، كل حلقةٍ تُغذّي التي بعدها:",
                        "flow": [
                            "كاميرا USB",
                            "YOLOv5s على ONNX (معالج فقط)",
                            "فلتر كالمان",
                            "وحدة تحكم PID",
                            "PCA9685",
                            "موتورات Pan/Tilt"
                        ]
                    },
                    {
                        "h": "القرارات الهندسية",
                        "steps": [
                            {
                                "t": "لماذا ONNX بدل PyTorch؟",
                                "d": "الـRaspberry Pi 4 بلا GPU ولا CUDA. تصدير النموذج لصيغة ONNX وتشغيله بـ ONNXRuntime يُلغي الاعتماد على PyTorch كليًا، ويمنح استدلالًا مُحسَّنًا على المعالج وحده — يكفي لـ 15-20 إطارًا/ثانية على الجهاز نفسه."
                            },
                            {
                                "t": "لماذا فلتر كالمان فوق PID؟",
                                "d": "الكشف لا يعمل على كل فريمٍ بالسرعة الكاملة، فتصل النتائج متأخرةً ومهتزّة. فلتر كالمان يتتبّع الموقع والسرعة ويتنبأ بمكان الطائرة <em>الآن</em> بين عمليات الكشف، فتستجيب وحدة PID لتقديرٍ سلس بدل قيمةٍ قديمة — وهذا ما يمنع الموتورات من الاهتزاز في كل فجوة."
                            },
                            {
                                "t": "آلة حالاتٍ للسلوك",
                                "d": "أربع حالاتٍ تُدير النظام: بحث ← تتبّع ← فقدان ← عودة. أثناء البحث تمسح الكاميرا بحركةٍ جيبيةٍ بطيئة بدل الثبات، حتى تلتقط الهدف من جديد."
                            }
                        ]
                    },
                    {
                        "h": "القصة الحقيقية: ثغرةٌ كلّفتني إعادة التدريب",
                        "p": "أول نموذجٍ بدا رائعًا على الورق (95% mAP)، لكنه في الواقع كان <strong>يقفل على صينيةٍ خشبية، وكرسي، ولمبة</strong>. السبب؟ مجموعة التدريب فيها 5 صور خلفيةٍ فقط من أصل 503 — النموذج لم يرَ تقريبًا كيف يبدو العالم <em>بدون</em> طائرة. الحل: دمجتُ ثلاثًا من أكبر مجموعات الدرونز (أكثر من 40 ألف صورة)، وأضفتُ خلفياتٍ صعبةً من COCO. النتيجة: mAP قفزت إلى 99%، والإيجابيات الخاطئة انهارت من ~100% إلى ~1%."
                    }
                ],
                "results": [
                    {
                        "k": "الدقة",
                        "v": "94.8%"
                    },
                    {
                        "k": "الاستدعاء",
                        "v": "96.2%"
                    },
                    {
                        "k": "mAP@0.5",
                        "v": "99.0%"
                    },
                    {
                        "k": "الأداء على Pi 4",
                        "v": "15–20 إطار/ث"
                    },
                    {
                        "k": "الإيجابيات الخاطئة",
                        "v": "~1%"
                    },
                    {
                        "k": "صور التدريب",
                        "v": "+40,000"
                    }
                ],
                "note": "المقاييس من مجموعة التحقق أثناء التدريب، لا من اختبارٍ ميداني مستقل. المشروع مفتوح المصدر بالكامل — كل الكود والأوزان متاحة للتجربة والتعديل."
            },
            "en": {
                "lead": "One trained model, running in real time on a $35 computer, chasing drones and keeping them centered — no GPU, no shortcuts.",
                "sections": [
                    {
                        "h": "The problem",
                        "p": "Detecting drones is easy on a beefy GPU server. Getting it to run <strong>in real time on a GPU-less Raspberry Pi 4</strong>, and physically track the drone with servos that steer the camera — that is the hard part. The goal: a complete detect-and-follow system on a computer that fits in your palm."
                    },
                    {
                        "h": "The pipeline",
                        "p": "The system is a chain where each link feeds the next:",
                        "flow": [
                            "USB camera",
                            "YOLOv5s on ONNX (CPU only)",
                            "Kalman filter",
                            "PID controller",
                            "PCA9685",
                            "Pan/Tilt servos"
                        ]
                    },
                    {
                        "h": "Engineering decisions",
                        "steps": [
                            {
                                "t": "Why ONNX over PyTorch?",
                                "d": "The Pi 4 has no GPU and no CUDA. Exporting the model to ONNX and running it with ONNXRuntime removes the PyTorch dependency entirely and gives optimized CPU-only inference — enough for 15-20 FPS on-device."
                            },
                            {
                                "t": "Why a Kalman filter on top of PID?",
                                "d": "Inference doesn't run every frame at full speed, so detections arrive late and jittery. The Kalman filter tracks position and velocity and predicts where the drone <em>is now</em>, so the PID reacts to a smooth estimate instead of a stale one — this is what stops the servos jittering on every gap."
                            },
                            {
                                "t": "A state machine for behavior",
                                "d": "Four states run the system: searching → tracking → lost → returning. While searching, the camera does a slow sine-wave scan instead of standing still, to re-acquire the target."
                            }
                        ]
                    },
                    {
                        "h": "The real story: a bug that cost a retrain",
                        "p": "The first model looked great on paper (95% mAP) but in reality <strong>locked onto a wooden tray, a chair, a lamp</strong>. Why? The training set had only 5 background images out of 503 — the model had barely seen what the world looks like <em>without</em> a drone. The fix: I merged three of the largest drone datasets (40,000+ images) and added hard COCO backgrounds. Result: mAP jumped to 99%, false positives collapsed from ~100% to ~1%."
                    }
                ],
                "results": [
                    {
                        "k": "Precision",
                        "v": "94.8%"
                    },
                    {
                        "k": "Recall",
                        "v": "96.2%"
                    },
                    {
                        "k": "mAP@0.5",
                        "v": "99.0%"
                    },
                    {
                        "k": "On Pi 4",
                        "v": "15–20 FPS"
                    },
                    {
                        "k": "False positives",
                        "v": "~1%"
                    },
                    {
                        "k": "Training images",
                        "v": "40,000+"
                    }
                ],
                "note": "Metrics are from the training validation split, not an independent field test. Fully open source — all code and weights available to run and modify."
            }
        }
    },
    {
        "id": "arabic-emotion-detector",
        "categories": [
            "python-ai"
        ],
        "featured": true,
        "image": "assets/images/arabic-emotion-detector.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/arabic-emotion-detector",
        "tags": [
            "Python",
            "AraBERT",
            "Whisper",
            "DeepFace",
            "NLP"
        ],
        "title": {
            "ar": "محلل المشاعر العربي متعدد الوسائط — نص وصوت ومرئي",
            "en": "Arabic Multimodal Emotion Detector — Text, Voice & Visual"
        },
        "desc": {
            "ar": "خط أنابيب يأخذ فيديو بالعربية الفصحى أو العامية، يفرّغه صوتيًا بـ Whisper، يحلّل مشاعر كل مقطع نصي بنموذج AraBERT مُدرَّب خصيصًا، يدمج ذلك مع تحليل تعابير الوجه، ويرصد خطاب الكراهية — لينتج فيديو مُترجَمًا مع شارة مشاعر، وملف SRT، وتقرير Excel كامل.",
            "en": "A pipeline that takes an Arabic (MSA or dialect) video, transcribes it with Whisper, classifies the emotion of each text segment with a purpose-fine-tuned AraBERT model, fuses that with facial-expression analysis, and flags hate speech — producing a subtitled video with an emotion badge, an SRT file, and a full Excel report."
        },
        "details": {
            "ar": "مشروعٌ شخصيٌّ بدأ كسكربتات تجميع بيانات منفصلة لتوحيد توسيمات بشرية متعددة لمقاطع نصية (بما فيها حسم اختلاف المُقيِّمين وقياس موثوقية الاتفاق بينهم إحصائيًا)، ثم تطوّر إلى نظامٍ واحدٍ متكامل: تقطيع الصوت يراعي فواصل الصمت الطبيعية بدل التقطيع الثابت كي لا تُقصّ الجمل في منتصفها، ونموذج النص وموزون طبقيًا لمعالجة عدم توازن الفئات، ويُدمَج مع نموذج تحليل الوجه بوزنٍ محسوب. الكود بالكامل مفتوح المصدر مع دليل تدريب خطوة بخطوة لمن يريد إعادة التدريب على بياناته الخاصة، وكل الأرقام المذكورة في التوثيق هي نتائج فعلية غير مُلفَّقة — بما فيها نقاط الضعف.",
            "en": "A personal project that started as separate data-aggregation scripts to reconcile multiple human labels per text segment (including resolving rater disagreement and statistically measuring inter-rater reliability), then grew into one integrated system: audio segmentation respects natural silence boundaries instead of fixed-length cuts so sentences aren't chopped mid-word, the text model is class-weighted to handle label imbalance, and it's fused with a facial-expression model using a computed weight. The full code is open-source with a step-by-step training guide for anyone who wants to retrain it on their own data, and every number in the documentation is a real, unfabricated result — including the weaknesses."
        },
        "article": {
            "ar": {
                "lead": "خط أنابيب مفتوح المصدر لتحليل المشاعر العربية من النص والصوت والوجه معًا، مع توثيق صادق لكل رقم — بما فيه الضعف في الفئات النادرة.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "تحليل المشاعر في المحتوى العربي المرئي يحتاج أكثر من مجرد نص: نبرة الصوت وتعبير الوجه يحملان إشارات لا يلتقطها النص وحده. المشروع يدمج ثلاثة مصادر إشارة (نص مُفرَّغ صوتيًا، تعبير وجه، وفلتر خطاب كراهية منفصل) في حكمٍ واحد لكل مقطع، مع الحفاظ على تتبّع مصدر كل توسيم تدريبي وموثوقيته."
                    },
                    {
                        "h": "تدفّق خط الأنابيب",
                        "flow": [
                            "تفريغ صوتي بـ Whisper",
                            "تقطيع يراعي فواصل الصمت الطبيعية",
                            "تصنيف النص (AraBERT) + تصنيف تعبير الوجه (DeepFace)",
                            "دمج موزون بين النتيجتين + فحص خطاب الكراهية",
                            "فيديو مترجم + ملف SRT + تقرير Excel"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "حسم التوسيم بتسلسل أولويات صريح بدل قاعدة واحدة جامدة",
                                "d": "بيانات التوسيم البشري كانت غير متجانسة: بعض المقاطع وسمها مُقيِّمان مستقلان، بعضها مُقيِّم واحد فقط، وبعضها موسوم آليًا بلا مُقيِّم بشري إطلاقًا. بدل تجاهل الفروق، بُني تسلسل أولويات واضح (اتفاق المُقيِّمَين → حسم التحكيم → مُقيِّم واحد → توسيم مسبق → بديل آلي)، مع قياس Cohen's Kappa فعليًا (٠.٦٦٨، اتفاق «جيد») على كل الصفوف التي وسمها مُقيِّمان — تحقّق إحصائي حقيقي بدل افتراض أن التصنيف قابل للاستخدام."
                            },
                            {
                                "t": "تقطيع صوتي يراعي حدود الصمت لا طولًا ثابتًا",
                                "d": "التقطيع بطول ثابت يقطع الجمل في منتصفها أحيانًا، ما يشوّه سياق النموذج النصي. استُبدل بمنطق يكتشف فواصل الصمت الطبيعية بين الجمل ويقطع عندها، فتبقى كل وحدة تحليل جملة كاملة قدر الإمكان."
                            },
                            {
                                "t": "تدريب موزون طبقيًا لعدم توازن الفئات",
                                "d": "توزيع المشاعر في البيانات غير متساوٍ إطلاقًا (الحزن والفرح يمثلان نصف العينات تقريبًا، بينما الاشمئزاز والحياد أقل من ٤٪ لكل منهما). أُضيف مسار تدريب موزون (WeightedTrainer) يرفع وزن الفئات النادرة في دالة الخسارة، ونُشرت المقارنة الكاملة بين النسختين (عادية وموزونة) بدل اختيار الأفضل ظاهريًا وإخفاء الأخرى."
                            }
                        ]
                    },
                    {
                        "h": "حدود صادقة، لا أرقام مجمّلة",
                        "p": "دقة الاختبار (٥٥–٥٧٪) ومتوسط F1 الكلي (٠.٣٣–٠.٤٣) متواضعان لأن حجم البيانات محدود (١٤٣٦ عينة) وبعض الفئات نادرة جدًا (الاشمئزاز ٤٥ عينة فقط) — وهذا مذكور صراحةً في التوثيق بدل إخفائه. الهدف مشروع تعليمي/شخصي قابل لإعادة الإنتاج والتطوير، لا منتج إشراف على المحتوى جاهز للإنتاج."
                    }
                ],
                "results": [
                    {
                        "k": "عينات نصية موسومة",
                        "v": "1,436"
                    },
                    {
                        "k": "Cohen's Kappa (موثوقية الاتفاق)",
                        "v": "0.668"
                    },
                    {
                        "k": "أفضل Macro F1 (نموذج موزون)",
                        "v": "0.43"
                    }
                ],
                "note": "مشروعٌ شخصيٌّ مفتوح المصدر لأغراض تعليمية وportfolio، وليس منتج إشراف على المحتوى معتمَدًا — كل الأرقام أعلاه نتائج اختبار فعلية غير مُلفَّقة، بما فيها ضعف الأداء على الفئات النادرة، وموثّقة بالتفصيل في المستودع مع دليل تدريب كامل لإعادة الإنتاج."
            },
            "en": {
                "lead": "An open-source pipeline for Arabic emotion analysis from text, voice, and face together, with honest documentation of every number — including the weakness on rare classes.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Emotion analysis in Arabic video content needs more than text alone: vocal tone and facial expression carry signals text misses. The project fuses three signal sources (transcribed text, facial expression, and a separate hate-speech filter) into one per-segment judgment, while keeping track of each training label's source and reliability."
                    },
                    {
                        "h": "Pipeline flow",
                        "flow": [
                            "Whisper audio transcription",
                            "Silence-boundary-aware segmentation",
                            "Text classification (AraBERT) + facial-expression classification (DeepFace)",
                            "Weighted fusion of both results + hate-speech check",
                            "Subtitled video + SRT file + Excel report"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Resolving labels with an explicit priority cascade instead of one rigid rule",
                                "d": "The human-annotation data was inherently uneven: some segments had two independent raters, some only one, and some were machine-labeled with no human rater at all. Instead of ignoring these differences, an explicit priority cascade was built (both raters agree → arbitrator resolves → single rater → pre-labeled → machine fallback), with Cohen's Kappa actually measured (0.668, \"good\" agreement) across every row both raters labeled — a real statistical check rather than assuming the taxonomy is usable."
                            },
                            {
                                "t": "Silence-boundary-aware segmentation instead of fixed-length cuts",
                                "d": "Fixed-length segmentation sometimes cuts a sentence mid-word, distorting the text model's context. It was replaced with logic that detects natural silence gaps between sentences and cuts there instead, keeping each analysis unit as close to a full sentence as possible."
                            },
                            {
                                "t": "Class-weighted training for label imbalance",
                                "d": "The emotion distribution is far from even (sadness and joy alone are roughly half of all samples, while disgust and neutral are each under 4%). A weighted training path (WeightedTrainer) was added to up-weight rare classes in the loss function, and the full comparison between both variants (normal and weighted) is published rather than picking the better-looking one and hiding the other."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations, not polished numbers",
                        "p": "Test accuracy (55–57%) and macro-F1 (0.33–0.43) are modest because the dataset is small (1,436 samples) and some classes are quite rare (disgust has only 45 samples) — and this is stated explicitly in the documentation rather than hidden. The goal is a reproducible educational/personal project, not a production-ready content-moderation product."
                    }
                ],
                "results": [
                    {
                        "k": "Labeled text samples",
                        "v": "1,436"
                    },
                    {
                        "k": "Cohen's Kappa (inter-rater reliability)",
                        "v": "0.668"
                    },
                    {
                        "k": "Best macro F1 (weighted model)",
                        "v": "0.43"
                    }
                ],
                "note": "A personal, open-source project for educational and portfolio purposes, not a certified content-moderation product — every number above is a real, unfabricated test result, including the weaker performance on rare classes, and it's documented in full in the repository along with a complete training guide for reproducing it."
            }
        }
    },
    {
        "id": "smart-medication-queue",
        "categories": [
            "arduino"
        ],
        "featured": true,
        "image": "assets/images/smart-medication-queue.jpg",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/smart-medication-queue",
        "tags": [
            "Arduino",
            "C++",
            "Embedded",
            "State Machine",
            "Concurrency"
        ],
        "title": {
            "ar": "طابور صرف الجرعات الدوائية الذكي (Smart Medication Queue)",
            "en": "Smart Medication Queue"
        },
        "desc": {
            "ar": "نظام تذكير بجرعاتٍ دوائيةٍ لعدة مرضى في آنٍ واحد على Arduino Mega — أعيدت كتابته بالكامل ليصلح علّة تزامنٍ حقيقية كانت تُجمّد الأنظمة الأخرى كل مرة يتأخر فيها مريضٌ واحد عن تأكيد جرعته.",
            "en": "A multi-patient medication reminder on an Arduino Mega — fully rewritten to fix a real concurrency bug that froze every other patient's timer whenever one patient was slow to acknowledge their dose."
        },
        "details": {
            "ar": "إعادة بناءٍ كاملة لنموذجٍ مخبريٍّ سابق. النموذج الأصلي كان يستخدم استدعاء `while (digitalRead(...) == HIGH);` حاجزًا لانتظار ضغط الزر — ما كان يوقف الحلقة الرئيسية بأكملها، فيُجمِّد عدّادات كل المرضى الآخرين حتى يُؤكَّد ذلك الزر تحديدًا. أُعيدت كتابة النظام بالكامل باستخدام علمٍ (`alertActive`) لكل مريضٍ يُفحص مرة واحدة في كل دورة loop، وتوقيتٍ مبنيٍّ على millis() بدل delay()، بحيث تتقدّم عدّادات خمسة مرضى مستقلين بالتوازي فعليًا، ويمكن تأكيد أيّ جرعةٍ بأيّ ترتيب دون التأثير على الآخرين.",
            "en": "A full rebuild of an earlier bench prototype. The original used a blocking `while (digitalRead(...) == HIGH);` call to wait for a button press — freezing the entire main loop, including every other patient's countdown, until that one button was pressed. The system was rewritten around a per-patient `alertActive` flag checked once per loop pass and millis()-based timing instead of delay(), so five independent patient timers genuinely progress in parallel and any dose can be acknowledged in any order without affecting the others."
        },
        "article": {
            "ar": {
                "lead": "نظامٌ صُمِّم ليتابع خمسة مرضى في آنٍ واحد، لكنه في الواقع كان يتسلسل لمريضٍ واحدٍ بسبب استدعاءٍ حاجزٍ واحد — وهذه قصة إصلاحه.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "نظام تذكيرٍ بمواعيد الجرعات لعدة مرضى في آنٍ واحد على Arduino Mega، بمؤشر LED وزر تأكيدٍ مستقلّين لكل مريض، وشاشة LCD مشتركة تعرض من يحتاج انتباهًا الآن."
                    },
                    {
                        "h": "خط العمل",
                        "flow": [
                            "إضافة مريض (Serial) + ضبط الفاصل الزمني",
                            "عدّادات millis() مستقلة لكل مريض",
                            "تنبيه LED+جرس عند استحقاق الجرعة",
                            "تأكيدٌ بأي ترتيب (alertActive flag)",
                            "إتمام الجرعات + مسح غير حاجز"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "علّة تزامنٍ حقيقية، اكتُشفت وأُصلحت",
                                "d": "النسخة الأصلية استخدمت `while (digitalRead(buttonPins[patientIndex]) == HIGH);` — سطرٌ واحدٌ كان يُجمّد الحلقة الرئيسية بأكملها بما فيها عدّادات المرضى الآخرين، حتى يُضغط ذلك الزر تحديدًا. نظامٌ صُمم صراحةً ليتابع خمسة مرضى باستقلالية كان عمليًا يعمل لمريضٍ واحدٍ في كل مرة."
                            },
                            {
                                "t": "الإصلاح: علمٌ لكل مريض بدل حلقة انتظارٍ حاجزة",
                                "d": "استُبدل كل `while` حاجزٍ بعلَم `alertActive` يُفحص مرةً واحدة في كل دورة loop، وتلاشي (fade) LED الإتمام أصبح مبنيًا على millis() بدل delay() — فتستمر عدّادات كل المرضى الآخرين بالعمل بالضبط في موعدها بينما يُؤكَّد أي مريضٍ آخر جرعته."
                            },
                            {
                                "t": "استثناءٌ متعمَّد وموثَّق",
                                "d": "`flashMessage()` ما زالت تستخدم `delay()` حاجزًا قصيرًا، لكن فقط لرسائل تأكيدٍ لمرةٍ واحدة (مريضٌ أُضيف / اكتمل / لا مساحة) — أبدًا في مسار التنبيه أو الإتمام، حتى لا يتكرر نفس الخلل عن طريق الخطأ."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "الفواصل الزمنية بالثواني (20–300 ثانية) لا بالساعات، لتتّسع لعرضٍ مخبري — موثّقٌ صراحةً في الكود. لا استمرارية بيانات (RAM فقط)، وجرسٌ واحدٌ مشتركٌ بين كل المرضى. هذا مشروعٌ تعليميٌّ لمفاهيم التزامن في الأنظمة المدمجة، وليس جهازًا طبيًّا معتمدًا."
                    }
                ],
                "results": [
                    {
                        "k": "مرضى مستقلّون بالتوازي",
                        "v": "5"
                    },
                    {
                        "k": "استدعاءات while حاجزة أُزيلت",
                        "v": "2"
                    },
                    {
                        "k": "استمراريّة البيانات",
                        "v": "RAM فقط"
                    }
                ],
                "note": "مشروعٌ هوايةٍ تعليمي لمفاهيم التزامن غير الحاجز في الأنظمة المدمجة، وليس جهازًا طبيًّا معتمدًا — يتابع تذكيراتٍ فقط، لا هوية الدواء أو مقداره أو تفاعلاته. الكود مفتوحٌ بالكامل."
            },
            "en": {
                "lead": "A system designed to track five patients at once, but which actually serialized to one patient at a time because of a single blocking call — this is the fix.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "A multi-patient medication reminder on an Arduino Mega, with an independent LED and confirm button per patient, and a shared LCD showing whoever needs attention right now."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Add patient (Serial) + set interval",
                            "Independent millis() timers per patient",
                            "LED+buzzer alert when dose is due",
                            "Acknowledge in any order (alertActive flag)",
                            "Course completion + non-blocking clear"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A real concurrency bug, found and fixed",
                                "d": "The original used `while (digitalRead(buttonPins[patientIndex]) == HIGH);` — one line that froze the entire main loop, including every other patient's countdown, until that specific button was pressed. A system explicitly designed to track five patients independently was, in practice, serialized to one at a time."
                            },
                            {
                                "t": "The fix: a per-patient flag instead of a blocking wait loop",
                                "d": "Every blocking `while` was replaced with an `alertActive` flag checked once per loop pass, and the completion LED fade moved to millis()-based timing instead of delay() — so every other patient's timer keeps running exactly on schedule while any patient's dose is acknowledged."
                            },
                            {
                                "t": "A deliberate, documented exception",
                                "d": "`flashMessage()` still uses a short blocking `delay()`, but only for one-off confirmation messages (patient added / completed / queue full) — never on the due-alert or completion path, so the same bug can't quietly reappear."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "Intervals are in seconds (20-300s), not hours, so the demo fits on a bench — documented directly in the code. No data persistence (RAM only), and one buzzer shared across all patients. This is an educational demonstration of embedded concurrency, not a certified medical device."
                    }
                ],
                "results": [
                    {
                        "k": "Independent parallel patients",
                        "v": "5"
                    },
                    {
                        "k": "Blocking while-loops removed",
                        "v": "2"
                    },
                    {
                        "k": "Data persistence",
                        "v": "RAM only"
                    }
                ],
                "note": "A hobbyist/educational project about non-blocking concurrency in embedded systems, not a certified medical device — it tracks reminders only, not medication identity, dosage, or drug interactions. Fully open source."
            }
        }
    },
    {
        "id": "age-gender-ai-detection",
        "categories": [
            "python-ai",
            "raspberrypi"
        ],
        "featured": true,
        "image": "assets/images/age-gender-detect.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/age-gender-ai-detection",
        "tags": [
            "Python",
            "PyTorch",
            "Gradio",
            "Raspberry Pi"
        ],
        "title": {
            "ar": "الكشف عن العمر والجنس بالذكاء الاصطناعي",
            "en": "Age & Gender AI Detection"
        },
        "desc": {
            "ar": "شبكتان عصبونيتان تلافيفيتان مدرَّبتان من الصفر تتنبآن بالجنس الظاهري وفئة عمرية (5 سنوات) من صورة وجه واحدة، بتطبيق ويب تفاعلي ونسخة تعمل دون إنترنت على Raspberry Pi 4.",
            "en": "Two CNNs trained from scratch predict apparent gender and a 5-year age range from a single face photo, shipped as an interactive web demo and an offline Raspberry Pi 4 deployment."
        },
        "details": {
            "ar": "شبكتان CNN صغيرتان مدرَّبتان من الصفر (لا تعلّم منقول) على قاعدة بيانات UTKFace، بدقة 91.4% لتصنيف الجنس و78.6% للفئة العمرية بخطوة 5 سنوات (مقاسة على اختبار دفعي من 5000 صورة). يعمل النظام بطريقتين: تطبيق ويب تفاعلي عبر Gradio (رفع صورة أو كاميرا ويب)، ونسخة كاملة دون اتصال بالإنترنت على Raspberry Pi 4 بكاميرا حية وواجهة Tkinter. المشروع يوثّق قيوده الصادقة بدل إخفائها — بما فيها ضعف دقة العمر الدقيق (~29%) وحساسية الإضاءة.",
            "en": "Two lightweight CNNs trained from scratch (no transfer learning) on the UTKFace dataset, reaching 91.4% gender-classification accuracy and 78.6% 5-year age-range accuracy (measured on a 5,000-image batch test). Ships two ways: an interactive Gradio web demo (photo upload or webcam) and a fully offline Raspberry Pi 4 deployment with a live camera and Tkinter GUI. The project documents its honest limitations rather than hiding them — including weak exact-age accuracy (~29%) and lighting sensitivity."
        },
        "article": {
            "ar": {
                "lead": "شبكتان عصبونيتان خفيفتان — مُدرَّبتان من الصفر لا بالتعلّم المنقول — تتنبآن بالجنس الظاهري وبمدىً عمريٍّ من صورة وجهٍ واحدة، وتعملان على المتصفح وعلى راسبيري باي دون إنترنت.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "من صورةٍ واحدة، يتنبأ النظام بالجنس الظاهري وبفئةٍ عمريةٍ بخطوة 5 سنوات. نفس النموذجين يعملان بطريقتين: تطبيق ويبٍ تفاعليٍّ عبر Gradio، ونسخةٌ تعمل بالكامل دون اتصالٍ بالإنترنت على راسبيري باي مع كاميرا حية."
                    },
                    {
                        "h": "النموذجان",
                        "flow": [
                            "صورة وجه (128×128)",
                            "طبقات تلافيفية",
                            "إخراج مزدوج",
                            "الجنس + فئة عمرية"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "لماذا شبكتان منفصلتان لا شبكةٌ متعددة المهام؟",
                                "d": "دُرِّب الجنس والعمر وقُيِّما بشكلٍ مستقل، ما أبقى سطح الخلل بسيطًا — فلو أخطأ أحدهما، يكون واضحًا أيّهما، ويمكن إعادة تدريب أو استبدال أيٍّ منهما دون المساس بالآخر."
                            },
                            {
                                "t": "لماذا مدىً عمريٌّ لا رقمٌ دقيق؟ (قرارٌ بررته البيانات)",
                                "d": "دقة العمر الدقيق نحو <em>29%</em> فقط، بينما تصل الدقة عند التجميع بفئاتٍ من 5 سنوات إلى <strong>78.6%</strong>. فعرض مدىً عمريٍّ ليس خيارًا تجميليًا، بل ما يدعمه هامش الخطأ المقيس فعليًا."
                            },
                            {
                                "t": "لماذا شبكةٌ خفيفةٌ لا MobileNet؟",
                                "d": "استكشفت نسخةٌ سابقة التعلّم المنقول عبر MobileNet — دقةٌ أعلى لكن ثقلٌ يفوق ما يحتمله الراسبيري باي حيًّا. النماذج المشحونة صغيرةٌ ومدرّبةٌ من الصفر، تعمل بارتياحٍ على معالج الـPi بلا GPU — مقايضةٌ بين سقف الدقة والتشغيل الفعلي على العتاد."
                            }
                        ]
                    },
                    {
                        "h": "الصدق في النتائج",
                        "p": "دقة تصنيف الجنس <strong>91.4%</strong>، والفئة العمرية <strong>78.6%</strong> — لكن قِيست على صورٍ مقصوصةٍ ومواجهةٍ مسبقًا. الوجه الصغير أو المائل في كاميرا حقيقية سيؤدي أضعف. المشروع يوثّق هذا صراحةً بدل إخفائه."
                    }
                ],
                "results": [
                    {
                        "k": "دقة الجنس",
                        "v": "91.4%"
                    },
                    {
                        "k": "الفئة العمرية",
                        "v": "78.6%"
                    },
                    {
                        "k": "العمر الدقيق",
                        "v": "~29%"
                    },
                    {
                        "k": "زمن الاستدلال",
                        "v": "~0.28s"
                    }
                ],
                "note": "مشروعٌ تعريفيٌّ بحثي، لا نظام قياسٍ حيويٍّ أو طبيٍّ أو أمنيّ. الكود والنماذج مفتوحةٌ بالكامل."
            },
            "en": {
                "lead": "Two lightweight CNNs — trained from scratch, not transfer-learned — predict apparent gender and an age range from a single face photo, running in the browser and offline on a Raspberry Pi.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "From one photo, the system predicts apparent gender and a 5-year age range. The same two models ship two ways: an interactive Gradio web demo, and a fully offline Raspberry Pi build with a live camera."
                    },
                    {
                        "h": "The two models",
                        "flow": [
                            "Face photo (128×128)",
                            "Convolutional layers",
                            "Dual output",
                            "Gender + age range"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Why two separate nets, not one multi-task?",
                                "d": "Gender and age were trained and evaluated independently, keeping the failure surface simple — if one misbehaves it's obvious which, and either can be retrained or swapped without touching the other."
                            },
                            {
                                "t": "Why a range, not an exact number? (the data justified it)",
                                "d": "Exact-age accuracy is about <em>29%</em>, while the same model bucketed into 5-year ranges reaches <strong>78.6%</strong>. Reporting a range isn't cosmetic; it's what the measured error actually supports."
                            },
                            {
                                "t": "Why a lightweight net, not MobileNet?",
                                "d": "An earlier version explored MobileNet transfer learning — higher accuracy but too heavy for the Pi in real time. The shipped models are small, from-scratch CNNs that run comfortably on the Pi's CPU with no GPU — trading ceiling accuracy for actually running on the target hardware."
                            }
                        ]
                    },
                    {
                        "h": "Honesty in the results",
                        "p": "Gender accuracy <strong>91.4%</strong>, age range <strong>78.6%</strong> — but measured on pre-cropped, front-facing images. A small or off-center face in a real webcam will perform worse. The project documents this openly rather than hiding it."
                    }
                ],
                "results": [
                    {
                        "k": "Gender accuracy",
                        "v": "91.4%"
                    },
                    {
                        "k": "Age range",
                        "v": "78.6%"
                    },
                    {
                        "k": "Exact age",
                        "v": "~29%"
                    },
                    {
                        "k": "Inference",
                        "v": "~0.28s"
                    }
                ],
                "note": "A portfolio/research project, not a biometric, medical or security-grade system. Code and models fully open source."
            }
        }
    },
    {
        "id": "lifi-optical-link",
        "categories": [
            "arduino",
            "iot"
        ],
        "featured": true,
        "image": "assets/images/lifi-optical-link.jpg",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/lifi-optical-link",
        "tags": [
            "Arduino",
            "Python",
            "Optical Communication",
            "UART",
            "Air-Gapped"
        ],
        "title": {
            "ar": "رابط LiFi ضوئي لنقل بياناتٍ بلا اتصالٍ شبكي",
            "en": "LiFi Optical Link — Air-Gapped Byte Transfer"
        },
        "desc": {
            "ar": "منفذٌ تسلسليٌّ برمجيٌّ يعمل عبر الضوء المرئي: يرسل ملفًّا أو رسالةً بايتًا بايتًا من Arduino إلى آخر عبر الغرفة، بإطارٍ يشبه UART وبتّ تعادلٍ لكشف الأخطاء — لا واي فاي، لا بلوتوث، ولا أي سلكٍ بين اللوحتين.",
            "en": "A software UART running over visible light: sends a file or message byte-by-byte from one Arduino to another across the room, framed like a UART byte with a parity bit for error detection — no WiFi, Bluetooth, or wire between the boards."
        },
        "details": {
            "ar": "إعادة بناءٍ كاملة لنموذجٍ أوّليٍّ كان يرسل رمزًا واحدًا فقط من لوحة مفاتيحٍ ثابتة (أحد 16 رمزًا) في كل مرة. هذه النسخة تعمم البروتوكول إلى بايتاتٍ كاملة من 8 بتات بإطار `[START] [8 بتات] [تعادل] [STOP]`، فيمكنها نقل أي نصٍّ ASCII. أداتا بايثون على طرفَي الرابط تتيحان إرسال ملفٍّ فعليٍّ من حاسوبٍ واستقباله على حاسوبٍ آخر عبر الضوء، مع تسجيل أخطاء التعادل بدل إسقاط البيانات المشكوك فيها صامتًا.",
            "en": "A full rebuild of a prototype that could only send one fixed keypad symbol (one of 16) at a time. This version generalizes the protocol to full 8-bit bytes framed as `[START] [8 bits] [parity] [STOP]`, so it carries arbitrary ASCII text. Python tools on each end let you send a real file from one PC and receive it on another entirely via light, logging parity errors instead of silently dropping suspect data."
        },
        "article": {
            "ar": {
                "lead": "من إرسال رقمٍ واحدٍ من لوحة مفاتيح، إلى نقل ملفٍّ كاملٍ عبر الضوء فقط — بإطارٍ يشبه UART وبتّ تعادلٍ لا يُخفي الأخطاء.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "اكتب رسالةً أو أشِر إلى ملفٍّ نصيٍّ، فيرسلها Arduino كومضاتٍ ضوئية، يلتقطها Arduino ثانٍ بمقاومةٍ ضوئية ويعيد بناءها بايتًا بايتًا — رابطٌ بلا أي اتصالٍ شبكي، فقط خط رؤيةٍ ضوئي."
                    },
                    {
                        "h": "تدفّق البيانات",
                        "flow": [
                            "PC: send_message.py",
                            "Arduino TX → LED يومض",
                            "هواءٌ مفتوح (لا شبكة)",
                            "LDR → Arduino RX",
                            "PC: receive_message.py"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "إطارٌ يشبه UART بدل رمز لوحة مفاتيحٍ ثابت",
                                "d": "البروتوكول الأصلي: 16 رمزًا فقط بنمط 5 بتاتٍ خام دون كشف أخطاء. هذه النسخة: بايتٌ كاملٌ من 8 بتات بإطار `[START=1] [8 بتات LSB أولًا] [تعادل] [STOP=0]`، فيعمل مع أي نصّ ASCII."
                            },
                            {
                                "t": "بت تعادلٍ لا يُسقِط البايتات الفاسدة صامتًا",
                                "d": "عند عدم تطابق التعادل، يُسلَّم البايت مع تعليق `[parity mismatch]` بدل إسقاطه — كي لا يُخفى نمط الفشل الحقيقي (ضوضاء الإضاءة، سوء المحاذاة)."
                            },
                            {
                                "t": "توقيتٌ في أداة الإرسال يطابق سرعة الومض الفعلية",
                                "d": "كل بايتٍ يستغرق ~150 مللي ثانية للومض. أداة `send_message.py` تُوقِّت كتاباتها لتطابق ذلك، وإلا تفيض ذاكرة استقبال Arduino الصغيرة لأي رسالةٍ أطول من بضع عشرات بايت."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "المعدّل ~6-7 بايت/ثانية فقط — يوضّح مفهوم الرابط الضوئي، لا سرعة Li-Fi الحقيقية. لا استعادة ساعةٍ داخل البايت، والتعادل يكشف الأخطاء الفردية فقط دون تصحيحها، والرابط باتجاهٍ واحدٍ لكل زوج لوحات."
                    }
                ],
                "results": [
                    {
                        "k": "بتات الإطار لكل بايت",
                        "v": "11"
                    },
                    {
                        "k": "معدّل النقل",
                        "v": "~6-7 بايت/ث"
                    },
                    {
                        "k": "كشف الأخطاء",
                        "v": "بت تعادل"
                    }
                ],
                "note": "عرضٌ تعليميٌّ لمفهوم النقل الضوئي بلا اتصالٍ شبكي، لا رابط اتصالاتٍ عالي السرعة معتمَد. الكود مفتوحٌ بالكامل."
            },
            "en": {
                "lead": "From sending one digit from a keypad, to transferring a whole file through light alone — framed like a UART byte, with a parity bit that doesn't hide errors.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Type a message or point at a text file, and an Arduino sends it as light flashes; a second Arduino picks it up with a photoresistor and reconstructs it byte by byte — a link with no network connection at all, only an optical line of sight."
                    },
                    {
                        "h": "Data flow",
                        "flow": [
                            "PC: send_message.py",
                            "Arduino TX → LED flashing",
                            "Open air (no network)",
                            "LDR → Arduino RX",
                            "PC: receive_message.py"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A UART-style frame instead of one fixed keypad code",
                                "d": "The original protocol: 16 symbols only, a bare 5-bit pattern with no error checking. This version: a full 8-bit byte framed as `[START=1] [8 bits LSB-first] [parity] [STOP=0]`, so it carries any ASCII text."
                            },
                            {
                                "t": "A parity bit that doesn't silently drop bad bytes",
                                "d": "On a parity mismatch, the byte is still delivered, annotated `[parity mismatch]`, instead of discarded — so the real failure mode (ambient light noise, misalignment) isn't hidden."
                            },
                            {
                                "t": "Sender pacing matched to the real flash rate",
                                "d": "Each byte takes ~150ms to flash out. `send_message.py` paces its writes to match, otherwise Arduino's small receive buffer overflows on any message longer than a few dozen bytes."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "Only ~6-7 bytes/sec — this demonstrates the optical-link concept, not real Li-Fi speeds. No clock recovery mid-byte, parity only detects odd-numbered errors without correcting them, and the link is one-directional per board pair."
                    }
                ],
                "results": [
                    {
                        "k": "Frame bits per byte",
                        "v": "11"
                    },
                    {
                        "k": "Transfer rate",
                        "v": "~6-7 bytes/sec"
                    },
                    {
                        "k": "Error detection",
                        "v": "Parity bit"
                    }
                ],
                "note": "An educational demonstration of air-gapped optical data transfer, not a certified high-speed communication link. Fully open source."
            }
        }
    },
    {
        "id": "nfc-attendance-system",
        "categories": [
            "arduino",
            "iot"
        ],
        "featured": true,
        "image": "assets/images/nfc-attendence-system.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/nfc-attendance-system",
        "tags": [
            "ESP32",
            "C++",
            "NFC",
            "IoT",
            "Google Sheets"
        ],
        "title": {
            "ar": "نظام حضور وتحكّم دخول بالـ NFC (NFC Attendance & Access Control)",
            "en": "NFC Attendance & Access Control System"
        },
        "desc": {
            "ar": "نظام حضور على ESP32: لمسة كارت NFC تسجّل الحضور بوقتٍ حقيقي (NTP) في Google Sheet عبر الواي فاي، مع منع تكرار البصمة، ووضع تسجيل كروت بالكيباد، وسيرفو لفتح الباب للكروت المصرّح لها.",
            "en": "An ESP32 attendance system: a tap of an NFC card logs attendance with a real NTP timestamp to a Google Sheet over Wi-Fi, with duplicate-scan protection, keypad-based card enrollment, and a servo that opens the gate for authorized cards."
        },
        "details": {
            "ar": "إعادة بناءٍ كاملة لنموذجٍ مخبريٍّ سابق كان يعمل على Arduino Uno. النموذج الأصلي كان يعتمد على حلقات انتظارٍ حاجزة (‎while (true)‎) لقراءة الكيباد فتُجمّد القارئ، وكان يختم الحضور بساعةٍ برمجيةٍ بلا مرجعٍ زمنيٍّ حقيقي فتخرج تواريخ غير صحيحة. أُعيدت كتابة النظام بالكامل على ESP32 بآلة حالاتٍ غير حاجزة، ويجلب الوقت الصحيح من خادم NTP عبر الواي فاي، ويمنع تكرار تسجيل نفس الكارت خلال فترة تهدئةٍ قابلةٍ للضبط، ويرفع كل صفٍّ (تاريخ، وقت، رقم الكارت، الاسم) تلقائيًا إلى Google Sheet عبر باك-إند خفيف على Apps Script. حُفِظت مميزات النسخة الأصلية: قراءة/كتابة اسمٍ أو رقمٍ على الكارت بصيغة NDEF، ووضعا الحضور والتسجيل عبر الكيباد، وسيرفو للتحكم في الدخول للكروت المصرّح لها، مع ردٍّ فوريٍّ على شاشة LCD وLED وجرس. الأسرار (بيانات الواي فاي ورابط الخدمة) معزولةٌ في ملف إعداداتٍ منفصلٍ لا يُرفَع، وكل القيود موثّقةٌ بصراحة.",
            "en": "A full rebuild of an earlier bench prototype that ran on an Arduino Uno. The original relied on blocking `while (true)` loops to read the keypad, freezing the reader, and stamped attendance with a software clock that had no real time reference, producing incorrect dates. The system was rewritten entirely on an ESP32 with a non-blocking state machine, pulls the correct time from an NTP server over Wi-Fi, ignores repeat scans of the same card within a configurable cooldown window, and automatically uploads each row (date, time, UID, name) to a Google Sheet through a lightweight Apps Script backend. The original features were preserved: reading/writing a name or ID onto the card as NDEF, keypad-driven attendance and enrollment modes, and a servo for access control on authorized cards, with instant feedback on an LCD, LEDs, and a buzzer. Secrets (Wi-Fi credentials and the service URL) are isolated in a separate config file that is never committed, and every limitation is documented honestly."
        },
        "article": {
            "ar": {
                "lead": "لمسةٌ واحدة تسجّل الحضور بوقتٍ حقيقيٍّ في السحابة وتفتح الباب — نظامٌ مدمجٌ على ESP32 أُعيد بناؤه من نموذجٍ مخبريٍّ كان يُجمِّد القارئ ويختم بوقتٍ غير صحيح.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "بدل تسجيل الحضور يدويًا، يقرأ ESP32 رقم الكارت عبر قارئ PN532، يختمه بوقتٍ دقيقٍ من خادم NTP، ويضيف صفًّا في Google Sheet مباشرةً. الكيباد يبدّل بين وضع الحضور ووضع تسجيل الكروت، والشاشة تعطي ردًّا فوريًا، والسيرفو يفتح الباب فقط للكروت المصرّح لها."
                    },
                    {
                        "h": "خط العمل",
                        "flow": [
                            "لمس كارت NFC (PN532)",
                            "قراءة الرقم + الاسم (NDEF)",
                            "ختم وقتٍ حقيقيٍّ من NTP",
                            "فحص تكرار البصمة (فترة تهدئة)",
                            "رفع الصف إلى Google Sheet",
                            "فتح الباب للكروت المصرّح لها"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "وقتٌ حقيقيٌّ من NTP بدل ساعةٍ برمجيةٍ وهمية",
                                "d": "النسخة الأولى ختمت الصفوف بعدّادٍ حرٍّ بلا أي مرجعٍ زمنيٍّ حقيقي، فكانت التواريخ بلا معنى. الانتقال إلى ESP32 + NTP يعطي ختمَ وقتٍ صحيحًا فعليًا كلما توفّر الواي فاي — تحسينٌ جوهريٌّ لا مجرد تلميع."
                            },
                            {
                                "t": "آلة حالاتٍ غير حاجزة بدل حلقات الانتظار",
                                "d": "أُزيلت كل حلقات ‎while (true)‎ التي كانت تُجمّد الحلقة الرئيسية بانتظار ضغطة كيباد، واستُبدلت بقراءةٍ غير حاجزةٍ للمفاتيح وتوقيتٍ مبنيٍّ على millis()، فيبقى القارئ مستجيبًا طوال الوقت."
                            },
                            {
                                "t": "منع تكرار البصمة بجدولٍ في الذاكرة",
                                "d": "جدولٌ دائريٌّ صغيرٌ للأرقام المقروءة مؤخرًا يمنع تسجيل نفس الشخص مرتين خلال فترةٍ قابلةٍ للضبط — حلٌّ كافٍ بلا تعقيد قاعدة بيانات."
                            },
                            {
                                "t": "Google Sheets كباك-إند بلا خادم",
                                "d": "سكربت Apps Script يستقبل الحضور ويكتبه في جدولٍ مجاني يمكن الوصول إليه من أي مكان — لا خادمٌ يُصان، مناسبٌ لنظامٍ محمولٍ مكتفٍ بذاته."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "بدون واي فاي يسجّل النظام محليًا فقط ويعلّم الوقت بأنه غير متوفّر، ولا يُخزِّن الصفوف مؤقتًا لرفعها لاحقًا (مُدرَجٌ في خارطة الطريق). ونداء HTTPS في العرض يستخدم setInsecure()‎ ويجب تثبيت الشهادة في التشغيل الفعلي. وكأي نظامٍ يعتمد على رقم الكارت فقط، الكروت العادية قابلةٌ للاستنساخ — للأمان الأعلى تُستخدم كروتٌ بمصادقةٍ متبادلة."
                    }
                ],
                "results": [
                    {
                        "k": "مصدر الوقت",
                        "v": "NTP"
                    },
                    {
                        "k": "منع التكرار",
                        "v": "فترة قابلة للضبط"
                    },
                    {
                        "k": "التسجيل",
                        "v": "Google Sheet"
                    },
                    {
                        "k": "الأوضاع",
                        "v": "حضور + تسجيل"
                    }
                ],
                "note": "مشروعٌ شخصيٌّ مفتوح المصدر لأغراضٍ تعليميةٍ وportfolio. الأسرار placeholders في ملف الإعداد، والكود كامل مع دليل توصيلٍ وباك-إند جاهز."
            },
            "en": {
                "lead": "One tap logs attendance to the cloud with a real timestamp and opens the door — an embedded ESP32 system rebuilt from a bench prototype that used to freeze the reader and stamp the wrong time.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Instead of taking attendance by hand, the ESP32 reads a card's UID over a PN532 reader, stamps it with an accurate NTP time, and appends a row to a Google Sheet directly. The keypad toggles attendance and enrollment modes, the LCD gives instant feedback, and the servo opens the door only for authorized cards."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Tap an NFC card (PN532)",
                            "Read UID + name (NDEF)",
                            "Stamp real time from NTP",
                            "Duplicate-scan check (cooldown)",
                            "Upload the row to a Google Sheet",
                            "Open the gate for authorized cards"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Real NTP time instead of a fake software clock",
                                "d": "The first version stamped rows with a free-running counter that had no real time reference, so the dates were meaningless. Moving to ESP32 + NTP gives genuinely correct timestamps whenever Wi-Fi is available — a substantive improvement, not just polish."
                            },
                            {
                                "t": "A non-blocking state machine instead of wait loops",
                                "d": "Every `while (true)` that froze the main loop waiting for a keypress was removed and replaced with non-blocking key reads and millis()-based timing, so the reader stays responsive at all times."
                            },
                            {
                                "t": "Duplicate-scan protection with an in-memory table",
                                "d": "A small ring buffer of recently seen UIDs stops the same person being counted twice within a configurable window — enough without the complexity of a database."
                            },
                            {
                                "t": "Google Sheets as a serverless backend",
                                "d": "An Apps Script endpoint receives attendance and writes it to a free, universally accessible sheet — no server to maintain, ideal for a portable, self-contained system."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "With no Wi-Fi the device logs locally only and marks the time as unavailable; rows are not queued for later upload (on the roadmap). The demo HTTPS call uses setInsecure() and should use certificate pinning in the field. And like any UID-only system, standard cards can be cloned — for higher security use cards with mutual authentication."
                    }
                ],
                "results": [
                    {
                        "k": "Time source",
                        "v": "NTP"
                    },
                    {
                        "k": "Dedup",
                        "v": "Configurable window"
                    },
                    {
                        "k": "Logging",
                        "v": "Google Sheet"
                    },
                    {
                        "k": "Modes",
                        "v": "Attendance + Enroll"
                    }
                ],
                "note": "A personal, open-source project for educational and portfolio purposes. Secrets are placeholders in the config file, and the code ships complete with a wiring guide and a ready backend."
            }
        }
    },
    {
        "id": "smart-door-guardian",
        "categories": [
            "raspberrypi",
            "python-ai"
        ],
        "featured": true,
        "image": "assets/images/smart-door-guardian.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/smart-door-guardian",
        "tags": [
            "Python",
            "OpenCV",
            "Raspberry Pi",
            "Face Recognition",
            "IoT"
        ],
        "title": {
            "ar": "Guardian Gate — نظام تحكّم ذكي بالدخول متعدد العوامل",
            "en": "Guardian Gate — Multi-Factor Smart Door Access Control"
        },
        "desc": {
            "ar": "نظام تحكّم فعلي بالدخول لباب، مبني على Raspberry Pi، يجمع بين التعرّف على الوجه والبصمة وبطاقة RFID ورمز PIN كأربعة عوامل توثيق مستقلة، مع تسجيل كامل لكل محاولة دخول وإشعارات فورية اختيارية.",
            "en": "A Raspberry Pi-based physical door access-control system combining face recognition, fingerprint, RFID card, and PIN as four independent authentication factors, with full access logging and optional real-time notifications."
        },
        "details": {
            "ar": "مشروعٌ شخصيٌّ بدأ كمجموعة سكريبتات منفصلة لاختبار كل قطعة عتاد على حدة (لوحة مفاتيح، حساس فوق صوتي، شاشة OLED، قارئ RFID، كاميرا)، ثم أُعيد بناؤه بالكامل كنظامٍ واحدٍ متماسك: كل حساس وكل قناة إشعار خلف واجهة برمجية موحّدة، وكل الأسرار والقيم القابلة للتغيير انتقلت من الكود إلى ملفات إعداد، مع وضع محاكاة كامل عبر الطرفية (--simulate) يتيح تجربة منطق القرار بالكامل دون أي عتاد حقيقي. يرصد النظام اقتراب شخص بحساسٍ فوق صوتي، يحاول التعرّف على وجهه أولًا، وإن فشل يعرض بدائل: بصمة، أو بطاقة RFID، أو رمز PIN — ونجاح أيٍّ منها يفتح القفل الكهربائي عبر مُرحّل.",
            "en": "A personal project that started as a set of individual hardware bring-up scripts (keypad, ultrasonic sensor, OLED, RFID reader, camera), then was fully rebuilt as one coherent system: every sensor and notification channel sits behind a unified interface, every secret and tunable value moved from source code into configuration files, and a full console simulation mode (--simulate) lets you exercise the entire decision logic with no real hardware attached. The system watches for someone approaching with an ultrasonic sensor, tries face recognition first, and if that fails offers fingerprint, RFID card, or PIN as fallbacks — any one of which unlocks an electric strike through a relay."
        },
        "article": {
            "ar": {
                "lead": "نظام تحكّم فعلي بدخول باب، بأربعة عوامل توثيق مستقلة (وجه، بصمة، بطاقة، رمز)، وسجل دخول واحد شفّاف لكل محاولة.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "الهدف تأمين باب منزل أو مكتب صغير بعدة طبقات توثيق مستقلة بدل الاعتماد على عاملٍ واحد: يُعطى الأولوية للتعرّف على الوجه بوصفه الأسرع، وفي حال فشله تتاح ثلاثة بدائل (بصمة، بطاقة RFID، رمز PIN) — أيٌّ منها كافٍ لفتح الباب، مع تسجيل كل محاولة وإشعارٍ فوري اختياري للهاتف."
                    },
                    {
                        "h": "تدفّق القرار",
                        "flow": [
                            "حساس فوق صوتي يرصد الاقتراب",
                            "محاولة التعرّف على الوجه",
                            "بديل: بصمة / بطاقة RFID / رمز PIN",
                            "فتح المُرحّل عند نجاح أي عامل",
                            "تسجيل + إشعار فوري اختياري"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "حسم تناقض قطبية المُرحّل (Relay) بالدليل العتادي",
                                "d": "كانت نسخ الكود الأصلية تختلف فعليًا حول طريقة فتح القفل (إشارة HIGH على منفذٍ، أو LOW على منفذٍ آخر) — تناقضٌ حقيقي في سلوك العتاد لا مجرد اختلاف أسلوب. حُسم الخلاف بالرجوع إلى اختبار العتاد الفعلي، وأصبحت القطبية حقل إعدادٍ صريحًا، مع أداة ذاتية (relay_selftest.py) للتحقق قبل التوصيل بقفلٍ حقيقي."
                            },
                            {
                                "t": "إصلاح خلل نطاق متغيّر (scoping) في جلسة الضيف",
                                "d": "إسناد قيمة لعلَمٍ داخل دالة دون كلمة global جعل بايثون يُنشئ متغيّرًا محليًا جديدًا بصمتٍ بدل تحديث الحالة الفعلية — ما كان يمنع خيط المعاينة الحية من التوقف كما هو متوقع. أُصلح الخلل واستُبدل العلَم الضمني بحالةٍ صريحة تُمرَّر عبر الواجهة، بحيث يستحيل تكرار العطل بنيويًا."
                            },
                            {
                                "t": "فصل العتاد عن منطق القرار بالكامل",
                                "d": "كل استدعاء لمكتبات العتاد (lgpio، picamera2، spidev) صار خلف واجهة تجريدية، بحيث يعمل النظام بالكامل في وضع محاكاة عبر الطرفية دون أي راسبيري باي حقيقي — ما يسهّل الاختبار والتطوير خارج الجهاز الفعلي."
                            }
                        ]
                    },
                    {
                        "h": "مفاضلة موثّقة صراحةً: \"أو\" لا \"و\"",
                        "p": "سياسة النظام قائمة على نجاح أيّ عاملٍ واحد (بصمة أو بطاقة أو رمز أو وجه)، لا اشتراط كل العوامل معًا. قرارٌ متعلقٌ بسهولة الاستخدام لا معيار أمانٍ أعلى، مذكورٌ صراحةً في التوثيق بدل ترك القارئ يكتشفه بنفسه."
                    }
                ],
                "results": [
                    {
                        "k": "عوامل التوثيق",
                        "v": "4"
                    },
                    {
                        "k": "أخطاء عتاد حقيقية أُصلحت",
                        "v": "2"
                    },
                    {
                        "k": "وضع تشغيل بدون عتاد",
                        "v": "متاح"
                    }
                ],
                "note": "مشروع هواةٍ للأمان الفيزيائي المنزلي، وليس منتج تحكّم دخولٍ معتمَدًا — عوامل التوثيق هنا عوامل راحة لا حماية تشفيرية، وموثّقة صراحةً كذلك في المستودع."
            },
            "en": {
                "lead": "A physical door access-control system with four independent authentication factors (face, fingerprint, card, PIN) and one honest access log for every attempt.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Secure a home or small-office door with several independent authentication layers instead of relying on one: face recognition is tried first as the fastest option, and if it fails three fallbacks are offered (fingerprint, RFID card, PIN) — any one of which is enough to unlock the door, with every attempt logged and an optional real-time phone notification."
                    },
                    {
                        "h": "Decision flow",
                        "flow": [
                            "Ultrasonic sensor detects approach",
                            "Face recognition attempt",
                            "Fallback: fingerprint / RFID card / PIN",
                            "Relay unlocks on any factor success",
                            "Logging + optional instant notification"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Resolving the relay polarity contradiction with hardware evidence",
                                "d": "The original code drafts genuinely disagreed on how the lock opens (HIGH on one pin, or LOW on another) — a real hardware-behavior contradiction, not just a style difference. It was resolved by going back to the actual hardware test, polarity became an explicit config field, and a self-test tool (relay_selftest.py) verifies it before wiring to a real lock."
                            },
                            {
                                "t": "Fixing a variable-scoping bug in the guest session",
                                "d": "Assigning a flag inside a function without the global keyword made Python silently create a new local variable instead of updating the real state — which kept the live-preview thread from stopping as expected. The bug was fixed and the implicit global flag replaced with explicit state passed through the interface, making the failure mode structurally impossible to repeat."
                            },
                            {
                                "t": "Fully decoupling hardware from decision logic",
                                "d": "Every call to hardware libraries (lgpio, picamera2, spidev) now sits behind an abstract interface, so the entire system runs in a console simulation mode with no real Raspberry Pi — making testing and development off-device much easier."
                            }
                        ]
                    },
                    {
                        "h": "An explicitly documented trade-off: \"OR\", not \"AND\"",
                        "p": "The system's policy succeeds when any single factor succeeds (fingerprint OR card OR PIN OR face), not when all factors succeed together. This is a usability decision, not a higher-security standard, and it's stated explicitly in the documentation rather than left for the reader to discover."
                    }
                ],
                "results": [
                    {
                        "k": "Authentication factors",
                        "v": "4"
                    },
                    {
                        "k": "Real hardware bugs fixed",
                        "v": "2"
                    },
                    {
                        "k": "Hardware-free run mode",
                        "v": "Available"
                    }
                ],
                "note": "A hobbyist home physical-security project, not a certified access-control product — the authentication factors here are convenience factors, not cryptographic protection, and this is stated explicitly in the repository."
            }
        }
    },
    {
        "id": "co2-scrubber-rig",
        "categories": [
            "arduino",
            "iot"
        ],
        "featured": true,
        "image": "assets/images/co2-scrubber-rig.jpg",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/co2-scrubber-rig",
        "tags": [
            "Arduino",
            "Python",
            "CCS811",
            "Matplotlib",
            "Instrumentation"
        ],
        "title": {
            "ar": "جهاز اختبار كفاءة فلترة ثاني أكسيد الكربون (CO2 Scrubber Rig)",
            "en": "CO2 Scrubber / Filtration Test Rig"
        },
        "desc": {
            "ar": "جهازٌ فيزيائيٌّ من ثلاث حجرات يقيس ما إذا كانت مادة فلترةٍ تُزيل فعليًا ثاني أكسيد الكربون، عبر مستشعرَي CCS811 قبل الفلتر وبعده وأداة بايثون تحسب نسبة التخفيض الفعلية بدل افتراضها.",
            "en": "A 3-chamber physical rig that measures whether a candidate filter medium actually removes CO2, using CCS811 sensors before and after the filter and a Python tool that computes the real reduction percentage instead of assuming one."
        },
        "details": {
            "ar": "بدأ المشروع كعرضٍ توضيحيٍّ لحصة كيمياءٍ عن فلترة الغازات: صندوقٌ من ثلاث حجراتٍ يُولّد ثاني أكسيد الكربون كيميائيًا في الحجرة الأولى، تدفعه مروحةٌ عبر مادة فلترةٍ في الحجرة الوسطى، ليُجمع في الحجرة الأخيرة. مستشعرا CCS811 يستخدمان نفس عنوان I2C الافتراضي، فحُلّ التعارض ببين WAKE يُخفِّض كل مستشعرٍ بدوره بدل مشاركة الناقل في آنٍ واحد. أداة بايثون تُدمج سكربتَي رسمٍ بيانيٍّ أصليَّين (لا يحفظان أي بيانات) في أداةٍ واحدة تسجّل كل قراءةٍ بوقتها ونسبة تخفيضها.",
            "en": "The project started as a demonstration for a chemistry class on gas filtration: a 3-chamber box chemically generates CO2 in the first chamber, a fan pushes it through a filter medium in the middle chamber, and it collects in the last. Both CCS811 sensors default to the same I2C address, so the conflict is resolved by toggling each sensor's WAKE pin in turn rather than sharing the bus simultaneously. A Python tool consolidates two original plotting scripts (neither of which saved any data) into one tool that timestamps every reading and its reduction percentage."
        },
        "article": {
            "ar": {
                "lead": "صندوقٌ من ثلاث حجرات يقيس أثر فلترٍ حقيقيٍّ على ثاني أكسيد الكربون — لا يفترض كفاءته، بل يقيسها بمستشعرَين قبل وبعد.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "الحجرة الأولى تُولّد ثاني أكسيد الكربون كيميائيًا، مروحةٌ تدفعه عبر مادة فلترةٍ قيد الاختبار في الحجرة الوسطى، والحجرة الأخيرة تجمع ما عبر الفلتر. مستشعرٌ في كل طرف يقيس التركيز قبل وبعد — والفرق بينهما هو الأثر الفعلي المقيس، لا افتراضًا نظريًا."
                    },
                    {
                        "h": "تدفّق النظام",
                        "flow": [
                            "الحجرة A: توليد CO2 كيميائيًا",
                            "مروحة PWM",
                            "الحجرة B: مادة الفلترة",
                            "الحجرة C: غاز مُفلتر",
                            "مستشعرا CCS811 (قبل/بعد) ← Arduino ← بايثون"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "تعدّد إرسالٍ عبر بين WAKE، بسبب تعارض عناوين I2C",
                                "d": "كلا مستشعرَي CCS811 بنفس عنوان I2C الثابت (0x5A) دون وسيلة عتاديةٍ لتغييره على هذه اللوحة. أُخفِض بين WAKE لكل مستشعرٍ فقط أثناء قراءته، بينما يبقى الآخر نائمًا وصامتًا — حلٌّ متعمَّدٌ موثَّق، لا محدوديةً عرَضية."
                            },
                            {
                                "t": "تحكّمٌ غير حاجزٍ بالمروحة مع قراءاتٍ موقّتة",
                                "d": "سرعة المروحة تُحدَّث كل دورة loop لاستجابةٍ سلسة، بينما تحدث قراءات CCS811 على فاصل millis() مدته 3 ثوانٍ — وقت استقرار المستشعر نفسه — دون أي delay() يُجمّد استجابة المروحة."
                            },
                            {
                                "t": "دمج سكربتَي رسمٍ لا يحفظان بيانات في أداةٍ واحدةٍ تُسجّل",
                                "d": "السكربتان الأصليان يرسمان القراءات حيًّا فقط؛ إغلاق النافذة يفقد التجربة كاملة. الأداة الموحّدة تضيف علم `--log` يختم كل قراءةٍ بوقتها ويحسب نسبة تخفيض الفلترة لكل عينة، ووضع `--simulate` لتجربة الأداة دون الجهاز الفعلي."
                            }
                        ]
                    },
                    {
                        "h": "لا رقم كفاءةٍ مُدَّعى",
                        "p": "جوهر الجهاز قياس أثر مادة فلترةٍ محددة، لا الادّعاء برقمٍ عام. النتيجة تعتمد كليًا على المادة والتفاعل الكيميائي المستخدَمين في كل تجربة، ولا يثبّت هذا المستودع أو يدّعي قيمةً لذلك."
                    }
                ],
                "results": [
                    {
                        "k": "حجرات القياس",
                        "v": "3"
                    },
                    {
                        "k": "مستشعرا قبل/بعد",
                        "v": "2 (CCS811)"
                    },
                    {
                        "k": "سكربتاتٌ دُمجت",
                        "v": "2 → 1"
                    }
                ],
                "note": "أداةٌ تعليميةٌ لمقارنة موادّ الفلترة على منضدة عمل، لا جهاز سلامةٍ أو فلترةٍ صناعيةٍ معتمَد. الكود مفتوحٌ بالكامل."
            },
            "en": {
                "lead": "A 3-chamber box that measures the real effect of a filter on CO2 — not assuming its efficiency, but measuring it with sensors on both sides.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "The first chamber chemically generates CO2, a fan pushes it through a candidate filter medium in the middle chamber, and the last chamber collects whatever gets through. A sensor on each end measures concentration before and after — the difference is the real, measured effect, not a theoretical assumption."
                    },
                    {
                        "h": "System flow",
                        "flow": [
                            "Chamber A: CO2 generated chemically",
                            "PWM fan",
                            "Chamber B: filter medium",
                            "Chamber C: filtered gas",
                            "CCS811 sensors (before/after) → Arduino → Python"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "WAKE-pin multiplexing, forced by an I2C address collision",
                                "d": "Both CCS811 sensors share the same fixed I2C address (0x5A) with no hardware way to change it on this board. Each sensor's WAKE pin is pulled low only while it's being read, while the other stays asleep and silent — a deliberate, documented workaround, not an accidental limitation."
                            },
                            {
                                "t": "Non-blocking fan control alongside timed sensor reads",
                                "d": "Fan speed updates every loop iteration for smooth response, while CCS811 reads happen on a 3-second millis()-based interval — the sensor's own settling time — with no delay() freezing fan responsiveness in between."
                            },
                            {
                                "t": "Consolidating two non-logging plotters into one tool that records",
                                "d": "The original scripts only plotted live; closing the window lost the whole run. The unified tool adds a `--log` flag that timestamps every reading and computes its filtration reduction percentage, plus a `--simulate` mode to try the tool with no physical rig."
                            }
                        ]
                    },
                    {
                        "h": "No efficiency number claimed",
                        "p": "The point of the rig is to measure a specific filter medium's effect, not to assert a general number. The result depends entirely on the medium and chemical reaction used in a given run, and this repository does not fix or claim a value for it."
                    }
                ],
                "results": [
                    {
                        "k": "Measurement chambers",
                        "v": "3"
                    },
                    {
                        "k": "Before/after sensors",
                        "v": "2 (CCS811)"
                    },
                    {
                        "k": "Scripts consolidated",
                        "v": "2 → 1"
                    }
                ],
                "note": "An educational instrument for comparing filter media on a bench, not a certified safety or industrial filtration product. Fully open source."
            }
        }
    },
    {
        "id": "self-balancing-robot",
        "categories": [
            "arduino",
            "robotics"
        ],
        "featured": false,
        "image": "assets/images/self-balancing-robot.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/self-balancing-robot",
        "tags": [
            "Arduino",
            "C++",
            "MPU6050",
            "PID",
            "Control Systems"
        ],
        "title": {
            "ar": "روبوت التوازن الذاتي",
            "en": "Self-Balancing Robot"
        },
        "desc": {
            "ar": "روبوتٌ بعجلتين يوازن نفسه كبندولٍ مقلوب: حسّاس MPU6050 يقرأ زاوية الميل عبر معالج الحركة الرقمي (DMP)، ومتحكّم PID يحرّك الموتورين (عبر L298N) ليقاوم أي ميلان.",
            "en": "A two-wheeled robot that balances itself like an inverted pendulum: an MPU6050 reads the tilt angle via its on-chip Digital Motion Processor (DMP), and a PID controller drives both motors (through an L298N) to counter any lean."
        },
        "details": {
            "ar": "أُعيدت هيكلة الكود إلى مستوى احترافي: كل الإعدادات (نقطة الاتزان، ثوابت PID، الأطراف، ومعايرة الموتورين) في بلوكٍ واحدٍ في الأعلى بدل الأرقام المبعثرة، وحلقة التحكّم تُشغّل PID والموتورات أثناء انتظار حزمة الحسّاس التالية لتبقى سريعة. زاوية الميل تأتي من الدمج داخل الشريحة (جيرو + تسارع) بدل مرشّحٍ يدوي. المكتبات الطرفية (MPU6050 و PID) موثّقة كـ dependencies تُثبَّت من مدير المكتبات، والمُعِين الصغير LMotorController مُرفقٌ بملف NOTICE ينسبه لأصحابه الأصليين — بلا نسبه لي.",
            "en": "The code was restructured to a professional level: every setting (the upright set-point, PID gains, pins, and per-motor trim) lives in one config block at the top instead of scattered magic numbers, and the control loop runs the PID + motors while waiting on the next IMU packet to stay fast. The tilt angle comes from on-chip fusion (gyro + accel) rather than a hand-rolled filter. The third-party libraries (MPU6050, PID) are documented as Library-Manager dependencies, and the small LMotorController helper ships with a NOTICE crediting its original authors — not claimed as mine."
        },
        "article": {
            "ar": {
                "lead": "روبوتٌ بعجلتين يقف منتصبًا وحده بحلقة PID مغلقةٍ حول زاوية الميل من حسّاس MPU6050 — كودٌ أُعيدت هيكلته وثوابته مضبوطةٌ على الهيكل الحقيقي.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "بندولٌ مقلوبٌ بعجلتين: أي ميلانٍ يُقاس فورًا وتُحرَّك العجلتان في اتجاهه لتصحيحه. الزاوية تأتي من معالج الحركة الرقمي داخل الـ MPU6050 الذي يدمج الجيرو والتسارع في ميلٍ ثابتٍ بلا انجراف."
                    },
                    {
                        "h": "المعمارية",
                        "flow": [
                            "MPU6050 (DMP) يعطي زاوية الميل",
                            "PID يقارنها بنقطة الاتزان",
                            "خرج PID → PWM للموتورين",
                            "L298N يحرّك العجلتين لتصحيح الميل"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "الدمج داخل الشريحة بدل مرشّحٍ يدوي",
                                "d": "استخدام DMP داخل الحسّاس يعطي زاوية ميلٍ مستقرة دون ضبط مرشّح تكميلي/كالمان يدويًا على الأردوينو."
                            },
                            {
                                "t": "بلوك إعدادات واحد",
                                "d": "نقطة الاتزان والثوابت والأطراف ومعايرة الموتورين كلها في الأعلى — بلا أرقامٍ سحريةٍ متناثرةٍ في المنطق، فالضبط لهيكلٍ جديدٍ يصير سهلًا."
                            },
                            {
                                "t": "نسبةٌ صادقة للمكتبات",
                                "d": "MPU6050 و PID تُثبَّت من مدير المكتبات، والمُعِين LMotorController مُرفقٌ بملف NOTICE ينسبه لأصحابه — لا يُقدَّم كشغلٍ أصليٍّ لي."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "الثوابت مضبوطةٌ لهذا الهيكل تحديدًا (وزن، عجلات، بطارية) فهي نقطة بداية لا قاعدة عامة، وإزاحات الجيرو خاصةٌ بكل شريحة (شغّل سكربت المعايرة). اتّزانٌ فقط بلا تحكّمٍ عن بُعدٍ بعد، والـ L298N يكفي للتعلّم لا لبناءٍ جادّ."
                    }
                ],
                "results": [
                    {
                        "k": "حلقة التحكّم",
                        "v": "PID (مضبوط)"
                    },
                    {
                        "k": "الحسّاس",
                        "v": "MPU6050 DMP"
                    },
                    {
                        "k": "المحاور",
                        "v": "زاوية الميل"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. المكتبات الطرفية منسوبةٌ لأصحابها الأصليين في ملف NOTICE."
            },
            "en": {
                "lead": "A two-wheeled robot that stands upright on its own with a PID loop closed around the tilt angle from an MPU6050 — restructured code with gains tuned on the real chassis.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "A two-wheeled inverted pendulum: any lean is measured instantly and the wheels drive into it to correct. The angle comes from the MPU6050's on-chip Digital Motion Processor, which fuses gyro + accel into a drift-free tilt."
                    },
                    {
                        "h": "Architecture",
                        "flow": [
                            "MPU6050 (DMP) gives the tilt angle",
                            "PID compares it to the set-point",
                            "PID output → motor PWM",
                            "L298N drives both wheels to correct the lean"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "On-chip fusion over a manual filter",
                                "d": "Using the MPU6050's DMP gives a stable tilt angle without hand-tuning a complementary/Kalman filter on the Arduino."
                            },
                            {
                                "t": "One config block",
                                "d": "Set-point, gains, pins, and per-motor trim all live at the top — no magic numbers scattered through the logic, so retuning for a new chassis is easy."
                            },
                            {
                                "t": "Honest library attribution",
                                "d": "MPU6050 and PID install from the Library Manager, and the LMotorController helper ships with a NOTICE crediting its authors — it's not presented as original work of mine."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "The gains are tuned to this specific chassis (weight, wheels, battery), so they're a starting point, not universal, and gyro offsets are per-chip (run the calibration sketch). Balance only, no remote control yet, and an L298N is fine for learning but not a serious build."
                    }
                ],
                "results": [
                    {
                        "k": "Control loop",
                        "v": "PID (tuned)"
                    },
                    {
                        "k": "Sensor",
                        "v": "MPU6050 DMP"
                    },
                    {
                        "k": "Axis",
                        "v": "Tilt angle"
                    }
                ],
                "note": "An open-source educational project. The third-party libraries are credited to their original authors in a NOTICE file."
            }
        }
    },
    {
        "id": "universal-market-predictor-deluxe",
        "categories": [
            "python-ai"
        ],
        "featured": false,
        "image": "assets/images/universal-market-predictor-deluxe.png",
        "demoUrl": "https://huggingface.co/spaces/engdarwish/universal-market-predictor-deluxe",
        "codeUrl": "https://github.com/eahmeddarwish/universal-market-predictor-deluxe",
        "tags": [
            "Python",
            "TensorFlow",
            "LSTM",
            "Gradio"
        ],
        "title": {
            "ar": "متنبئ الأسواق الشامل — إصدار Deluxe",
            "en": "Universal Market Predictor — Deluxe Edition"
        },
        "desc": {
            "ar": "نموذج LSTM واحد مشترك يتنبأ بأي سهم أو عملة رقمية عالمياً على مدى 1/3/7 أيام، مع اختبار دلالة إحصائية يوضح هل فيه ميزة تنبؤية حقيقية أم مجرد ضوضاء.",
            "en": "A single shared LSTM backbone forecasting any global stock or cryptocurrency over 1/3/7-day horizons, with a statistical significance test to show whether the predictive edge is real or just noise."
        },
        "details": {
            "ar": "تطوير كامل لمشروع متنبئ الأسواق الأصلي: بدلًا من نموذجٍ منفصلٍ لكل سهم، نموذج LSTM واحد مشترك بـembeddings خاصةٍ بكل سهمٍ تُغطّي أمريكا والخليج والمملكة المتحدة وألمانيا واليابان وهونج كونج والهند والعملات الرقمية. الهدف هو النسبة المئوية للعائد بدل السعر المُقيّس، لتفادي مشاكل الاستقراء على الأسهم شديدة الاتجاه. كل تنبؤ يُقارن بخط أساس بسيط (naive persistence) مع اختبار ثنائي الحدين (binomial test) وفاصل ثقة Wilson 95% على دقة الاتجاه، بدل الاكتفاء بنسبة دقة مجردة قد تكون مجرد صدفة إحصائية. القيود موثّقة بصراحة في الـREADME، بما فيها الحالات التي لا يزال النموذج فيها عاجزًا عن التفوّق علىش رمي العملة.",
            "en": "A full evolution of the original Universal Market Predictor: instead of a separate model per ticker, one shared LSTM backbone with per-ticker embeddings covers US, Gulf/MENA, UK, Germany, Japan, Hong Kong, India markets, and major cryptocurrencies. The prediction target is percentage return rather than a scaled price, avoiding extrapolation failures on strongly-trending stocks. Every forecast is benchmarked against a naive persistence baseline with a binomial significance test and a 95% Wilson confidence interval on directional accuracy — rather than trusting a raw accuracy percentage that could just be statistical noise. Limitations are documented honestly in the README, including where the model currently does not beat a coin flip."
        },
        "article": {
            "ar": {
                "lead": "نموذج LSTM موحّدٌ لكل الأسهم والعملات، بتقييمٍ صادق: كل رقمٍ يُعرض إلى جانب مقياسٍ مرجعيٍّ «لا يفعل شيئًا» — لأن نظام التنبؤ لا يفوق في مصداقيته المقياسَ الذي يُقارَن به.",
                "sections": [
                    {
                        "h": "المبدأ الأساسي",
                        "p": "سعر إغلاق الغد لسهمٍ كبيرٍ عادةً قريبٌ من سعر اليوم. فأي نموذجٍ — حتى العديم الفائدة — قد يُظهر دقةً برّاقةً لمجرّد اعتماده على هذه الحقيقة. الطريقة الوحيدة لمعرفة إن كان النموذج تعلّم شيئًا حقيقيًا: أن نضع خطأه ودقّته إلى جانب مقياسٍ ساذجٍ لا يستخدم أي تعلّمٍ آلي."
                    },
                    {
                        "h": "النموذج المشترك",
                        "flow": [
                            "تسلسل سعري (60 يوم × 12 ميزة)",
                            "LSTM ثلاثي الطبقات",
                            "+ تضمين لكل سهم",
                            "إخراج: 1/3/7 أيام دفعةً واحدة"
                        ]
                    },
                    {
                        "h": "القرارات الهندسية",
                        "steps": [
                            {
                                "t": "لماذا نموذجٌ مشتركٌ لا نموذجٌ لكل سهم؟",
                                "d": "العمود الفقري يرى سلوك السوق عبر كل سهمٍ وبورصةٍ وعملة — الانهيارات والصعودات والتقلّبات — أكثر بكثيرٍ مما يعلّمه تاريخ سهمٍ واحد. والتضمين (embedding) يتيح التخصّص لكل أصلٍ دون شبكةٍ منفصلة."
                            },
                            {
                                "t": "لماذا إخراجٌ متعددٌ لا تكراري؟",
                                "d": "التنبؤ باليوم التالي ثم إعادة تغذيته للتنبؤ بما بعده يُراكم الخطأ بسرعة. تمريرةٌ واحدة تُخرج كل الآفاق دفعةً واحدة تتجنّب المشكلة كليًا."
                            },
                            {
                                "t": "ثغرةٌ حقيقية: تنبؤٌ بالنسبة لا بالسعر",
                                "d": "أول نسخةٍ تنبّأت بسعرٍ مُعايَرٍ مباشرةً، فخسرت أمام المقياس الساذج في الأسهم الصاعدة — لأن أسعار الاختبار خرجت عن النطاق الذي رآه النموذج. الحلّ: التنبؤ بنسبة عائدٍ مئوية، وكل الميزات صارت نِسَبًا محدودةً لا مستوياتِ سعرٍ خام."
                            }
                        ]
                    },
                    {
                        "h": "هل الميزة حقيقيةٌ أم ضوضاء؟",
                        "p": "دقة اتجاهٍ في نطاق 52–58% قد تكون مجرّد صدفةٍ إحصائية. لذلك يُجري التقرير <strong>اختبار دلالةٍ إحصائية</strong> على كل صف: لا تُعامَل النتيجة كميزةٍ حقيقية إلا إذا استبعدت فترة الثقة خطّ الـ50% تمامًا. والنتيجة صادقة: ميزةٌ واضحةٌ في أسهمٍ أمريكيةٍ كبرى، وغائبةٌ في أسهم الخليج — والمشروع يوثّق هذا بدل إخفائه."
                    }
                ],
                "results": [
                    {
                        "k": "آفاق التنبؤ",
                        "v": "1/3/7 أيام"
                    },
                    {
                        "k": "نموذج واحد",
                        "v": "كل الأسهم"
                    },
                    {
                        "k": "مقاييس مرجعية",
                        "v": "3"
                    },
                    {
                        "k": "اختبار الدلالة",
                        "v": "✓"
                    }
                ],
                "note": "مشروعٌ بحثيٌّ تعليمي — لا شيء فيه نصيحةٌ مالية. الأسواق تنطوي على مخاطرةٍ حقيقية. الكود مفتوحٌ بالكامل."
            },
            "en": {
                "lead": "One shared LSTM for every stock and coin, with honest evaluation: every number sits next to a 'does-nothing' baseline — because a prediction system is only as trustworthy as the baseline it's compared against.",
                "sections": [
                    {
                        "h": "The core principle",
                        "p": "Tomorrow's close for a large stock is usually near today's. So any model — even a useless one — can show a flattering accuracy just by leaning on that. The only way to know if the model learned something real: place its error and accuracy next to a naive baseline that uses no ML at all."
                    },
                    {
                        "h": "The shared model",
                        "flow": [
                            "Price sequence (60d × 12 features)",
                            "3-layer LSTM",
                            "+ per-ticker embedding",
                            "Output: 1/3/7-day at once"
                        ]
                    },
                    {
                        "h": "Engineering decisions",
                        "steps": [
                            {
                                "t": "Why shared, not one model per ticker?",
                                "d": "The backbone sees market behavior across every stock, exchange and coin — crashes, rallies, volatility — far more than any single ticker's history teaches. The embedding lets it specialize per asset without a separate network."
                            },
                            {
                                "t": "Why multi-output, not recursive?",
                                "d": "Predicting day+1 then feeding it back to predict day+2 compounds error fast. A single pass emitting all horizons at once avoids it entirely."
                            },
                            {
                                "t": "A real bug: predict % return, not price",
                                "d": "The first version predicted a scaled price directly and lost to the naive baseline on trending stocks — test prices fell outside the range the model had seen. The fix: predict a percentage return, and express every feature as a bounded ratio, not a raw price level."
                            }
                        ]
                    },
                    {
                        "h": "Real edge, or noise?",
                        "p": "Directional accuracy of 52–58% could just be luck. So the report runs a <strong>significance test</strong> on every row: a result counts only if the confidence interval excludes the 50% line entirely. And the finding is honest: a clear edge on large US names, absent on Gulf tickers — the project documents this rather than hiding it."
                    }
                ],
                "results": [
                    {
                        "k": "Forecast horizons",
                        "v": "1/3/7 days"
                    },
                    {
                        "k": "One model",
                        "v": "All tickers"
                    },
                    {
                        "k": "Baselines",
                        "v": "3"
                    },
                    {
                        "k": "Significance test",
                        "v": "✓"
                    }
                ],
                "note": "An educational research project — none of it is financial advice. Markets carry real risk. Fully open source."
            }
        }
    },
    {
        "id": "air-quality-monitor",
        "categories": [
            "arduino",
            "iot"
        ],
        "featured": false,
        "image": "assets/images/air-quality-monitor.jpg",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/air-quality-monitor",
        "tags": [
            "Arduino",
            "Python",
            "Tkinter",
            "Blynk",
            "OpenAI API"
        ],
        "title": {
            "ar": "مراقب الجو الذكي (Air Quality Monitor)",
            "en": "Air Quality Monitor"
        },
        "desc": {
            "ar": "منصة مراقبةٍ بيئيةٍ بسبعة مستشعرات (حرارة، رطوبة، أشعة فوق بنفسجية، غبار، CO2، TVOC، H2S)، تُبَث من Arduino إلى لوحة تحكمٍ Python، مع رفعٍ سحابيٍّ وتحليلٍ ذكيٍّ اختياريَّين — أُعيد بناؤها بالكامل بعد اكتشاف مفاتيح API حقيقية كانت مثبَّتة في الكود.",
            "en": "A 7-sensor environmental monitoring bench (temperature, humidity, UV, dust, CO2, TVOC, H2S) streamed from an Arduino to a Python dashboard, with optional cloud upload and AI analysis — fully rebuilt after discovering live API keys hardcoded in the original source."
        },
        "details": {
            "ar": "النموذج الأصلي كان قد تضخّم إلى نحو 15 سكربتًا شبه مكرر، سكربتٌ لكل توليفة ميزات (DHT فقط، +Blynk، +UV، +ThingSpeak، +OpenAI)، وكان أحدها يحتوي على مفتاح OpenAI API ورمز مصادقة Blynk حقيقيَّين مكتوبَين مباشرةً في الكود. أُعيد بناء المشروع كسكربتٍ واحدٍ بميزاتٍ تُفعَّل عبر متغيرات البيئة، مع وضع `--simulate` يتيح تجربته دون أي عتادٍ فعلي، وتحديثٍ لاستدعاءات OpenAI إلى واجهة العميل الحالية بعد أن كان الكود الأصلي يستخدم واجهةً مُهمَلة.",
            "en": "The original prototype had grown into roughly 15 near-duplicate scripts, one per feature combination (DHT-only, +Blynk, +UV, +ThingSpeak, +OpenAI), and one of them had a live OpenAI API key and a live Blynk auth token written directly into the source. The project was rebuilt as a single script with environment-variable feature flags, a `--simulate` mode for trying it with no hardware attached, and an update of the OpenAI calls to the current client interface after the original used a since-removed one."
        },
        "article": {
            "ar": {
                "lead": "سبعة مستشعرات، سكربتٌ واحد، وقصة إصلاحٍ أمنيٍّ حقيقية: مفتاح API ورمز مصادقةٍ حيّان كانا مكتوبَين مباشرةً في الكود، والآن كل بيانات الاعتماد تأتي من متغيرات البيئة فقط.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "منصة مراقبةٍ بيئيةٍ لمعمل أو غرفة: تقرأ سبعة مقاييس عبر خمسة مستشعرات، تعرضها حيًّا على لوحة Tkinter، وترفعها اختياريًا لسحابة Blynk، وتطلب اختياريًا ملخصًا بيئيًّا بلغةٍ طبيعيةٍ من نموذج ذكاءٍ اصطناعي كل بضع دقائق."
                    },
                    {
                        "h": "تدفّق البيانات",
                        "flow": [
                            "5 مستشعرات (DHT11, UV, H2S, Dust, CCS811)",
                            "عقدة Arduino",
                            "JSON عبر Serial (115200 baud)",
                            "لوحة Python/Tkinter",
                            "Blynk + تحليل OpenAI (اختياريّان)"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "أسرارٌ حقيقيةٌ وُجدت مثبَّتة، واختفت في هذه النسخة",
                                "d": "احتوى أحد السكربتات الأصلية على مفتاح OpenAI API ورمز مصادقة Blynk حقيقيَّين مكتوبَين مباشرةً في الملف. أعادت هذه النسخة قراءة كل بيانات الاعتماد من متغيرات البيئة أو ملف `.env` مستثنًى من Git، وإن غاب أحد المفاتيح تُعطَّل ميزته تلقائيًا بدل التعطل أو استخدام قيمةٍ صامتة."
                            },
                            {
                                "t": "سكربتٌ واحد بميزاتٍ قابلةٍ للتفعيل بدل خمسة عشر سكربتًا",
                                "d": "تراكم الكود الأصلي إلى سكربتٍ منفصلٍ لكل توليفة ميزات. أصبحت كل واحدةٍ منها فحص شرطٍ وقت التشغيل (وجود التوكن أم لا) داخل لوحة تحكمٍ واحدة، فمنطق القراءة والعرض موجودٌ في مكانٍ واحدٍ فقط."
                            },
                            {
                                "t": "الانتقال من واجهة OpenAI المُهمَلة، ووضعٌ للتجربة بلا عتاد",
                                "d": "استُبدل الاستدعاء القديم `openai.ChatCompletion.create` بواجهة العميل الحالية. وأُضيف وضع `--simulate` يولّد قراءاتٍ عشوائيةً معقولة على نفس مسار الكود، فيمكن تجربة اللوحة والرفع السحابي والتحليل الذكي دون أي Arduino متصل."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "معايرة H2S والأشعة فوق البنفسجية تحويلٌ خطيٌّ تقريبي لا منحنى مخبريٌّ دقيق، ولا يوجد تسجيلٌ محليٌّ للبيانات فيما وراء العرض الحي والرفع السحابي الاختياري. هذا مشروع مراقبةٍ بيئيةٍ للهواة، لا جهاز قياس هواءٍ معتمَد."
                    }
                ],
                "results": [
                    {
                        "k": "مقاييسٌ بيئية",
                        "v": "7"
                    },
                    {
                        "k": "سكربتاتٌ دُمجت إلى واحد",
                        "v": "~15 → 1"
                    },
                    {
                        "k": "أسرارٌ مُزالة من الكود",
                        "v": "2 (OpenAI + Blynk)"
                    }
                ],
                "note": "مشروع هوايةٍ تعليمي لمراقبة الجو، وليس جهاز قياسٍ معتمَدًا. الكود مفتوحٌ بالكامل، وكل بيانات الاعتماد تُقرأ من متغيرات البيئة فقط."
            },
            "en": {
                "lead": "Seven environmental metrics, one script, and a real security fix: a live API key and auth token that were hardcoded in the source are now sourced entirely from environment variables.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "An environmental monitoring bench for a lab or room: reads seven metrics from five sensors, shows them live on a Tkinter dashboard, optionally uploads to Blynk, and optionally asks an LLM for a short plain-language summary every few minutes."
                    },
                    {
                        "h": "Data flow",
                        "flow": [
                            "5 sensors (DHT11, UV, H2S, Dust, CCS811)",
                            "Arduino sensor node",
                            "JSON over Serial (115200 baud)",
                            "Python/Tkinter dashboard",
                            "Blynk + OpenAI analysis (both optional)"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Real secrets were found hardcoded, and are gone from this version",
                                "d": "One of the original scripts had a live OpenAI API key and a live Blynk auth token written directly into the file. This version reads every credential from environment variables or a git-ignored `.env` file, and if a key is missing, that feature simply turns itself off instead of crashing or silently using a placeholder."
                            },
                            {
                                "t": "One script with feature flags, not fifteen scripts",
                                "d": "The original code had accumulated a separate script per feature combination. Each one is now a runtime check (is the token present or not) inside a single dashboard, so the reading and display logic exists in exactly one place."
                            },
                            {
                                "t": "Migrated off the deprecated OpenAI interface, plus a hardware-free mode",
                                "d": "The old `openai.ChatCompletion.create` call was replaced with the current client interface. A `--simulate` mode was added that generates plausible random readings on the same code path, so the dashboard, cloud upload, and AI analysis can all be exercised with no Arduino attached."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "H2S and UV calibration is an approximate linear mapping, not a lab-calibrated curve, and there's no local data logging beyond the live display and optional cloud upload. This is a hobbyist environmental-monitoring project, not a certified air-quality instrument."
                    }
                ],
                "results": [
                    {
                        "k": "Environmental metrics",
                        "v": "7"
                    },
                    {
                        "k": "Scripts consolidated",
                        "v": "~15 → 1"
                    },
                    {
                        "k": "Hardcoded secrets removed",
                        "v": "2 (OpenAI + Blynk)"
                    }
                ],
                "note": "A hobbyist/educational environmental-monitoring project, not a certified measurement instrument. Fully open source, with every credential read from environment variables only."
            }
        }
    },
    {
        "id": "fire-gas-detection",
        "categories": [
            "raspberrypi",
            "python-ai",
            "iot"
        ],
        "featured": false,
        "image": "assets/images/fire-gas-detection.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/fire-gas-detection",
        "tags": [
            "Python",
            "OpenCV",
            "Raspberry Pi",
            "Sensor Fusion",
            "GPIO"
        ],
        "title": {
            "ar": "كشف الحريق والغاز متعدد الحسّاسات",
            "en": "Fire & Gas Detection"
        },
        "desc": {
            "ar": "عقدة إنذارٍ مبكّر على Raspberry Pi تدمج ثلاث إشارات مستقلة — كاميرا (OpenCV)، حسّاس لهب IR، وحسّاس غاز MQ-2 — مع صفّارة وإشعار للهاتف، وتعمل على أي حاسوب في وضع محاكاة بلا عتاد.",
            "en": "A Raspberry Pi early-warning node that fuses three independent signals — a camera (OpenCV), an IR flame sensor, and an MQ-2 gas sensor — with a buzzer and a phone notification, and runs on any PC in a hardware-free simulation mode."
        },
        "details": {
            "ar": "إعادة بناءٍ كاملة لنموذجٍ سابق. النسخة الأصلية كان فيها مفتاح تنبيهات حقيقي مكتوب صريح في الكود، ودالتان متطابقتان تقريبًا لإرسال الرسائل، ولا تعمل إلا على Raspberry Pi. أُعيدت هيكلتها إلى وحدةٍ واحدةٍ نظيفة: الأسرار تُقرأ من متغيّرات البيئة (لا شيء مكتوبٌ في الكود)، ومنطق التنبيه موحَّدٌ خلف مدير واحد مع فترة تهدئة آمنة للخيوط (thread-safe)، وطبقة تجريدٍ لـ GPIO تُحاكيه تلقائيًا عند غياب الـ Pi — فيعمل نفس الكود على اللابتوب للتطوير وعلى الـ Pi للإنتاج.",
            "en": "A full rebuild of an earlier prototype. The original had a real alert token hard-coded in the source, two near-identical message-sending functions, and only ran on a Raspberry Pi. It was restructured into one clean module: secrets are read from environment variables (nothing hard-coded), the alert logic is unified behind a single manager with a thread-safe cooldown, and a GPIO abstraction auto-mocks the hardware when no Pi is present — so the same code runs on a laptop for development and on the Pi in production."
        },
        "article": {
            "ar": {
                "lead": "عقدة إنذارٍ مبكّر تدمج ثلاث إشارات مستقلة حتى لا تُطلق قراءةٌ خاطئةٌ واحدة إنذارًا كاذبًا، ولا تمرّ قراءةٌ فائتةٌ بصمت — وتعمل بلا عتاد في وضع محاكاة.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "الاعتماد على مصدر إشارةٍ واحد للكشف عن الحريق هشّ: الكاميرا وحدها تنخدع بالألوان، وحسّاس اللهب لا يرى الدخان، وحسّاس الغاز لا يرى النار المكشوفة. المشروع يدمج الثلاثة معًا في حكمٍ واحد، مع صفّارةٍ محلية وإشعارٍ للهاتف عند أي حدثٍ مؤكَّد."
                    },
                    {
                        "h": "المعمارية",
                        "flow": [
                            "كاميرا (تجزئة HSV بـ OpenCV)",
                            "حسّاس لهب IR (مقاطعة GPIO)",
                            "حسّاس غاز MQ-2 (خرج رقمي)",
                            "مدير تنبيه + فترة تهدئة",
                            "صفّارة + إشعار Pushover"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "دمج ثلاث حسّاسات لا حسّاسٍ واحد",
                                "d": "الكاميرا واللهب والغاز يغطّون النقاط العمياء لبعضهم: الإيجابيات الكاذبة اللونية مقابل اللهب الحقيقي مقابل الدخان غير المرئي. القرار النهائي يأتي من دمجهم، لا من أيٍّ منهم منفردًا."
                            },
                            {
                                "t": "طبقة تجريدٍ لـ GPIO مع محاكاةٍ تلقائية",
                                "d": "عند غياب مكتبة RPi.GPIO يُحقَن بديلٌ صوري (mock)، فيعمل نفس الكود بالضبط على اللابتوب للتطوير وعلى الـ Pi للإنتاج — ويصبح ممكنًا تجربة مسار الكاميرا كاملًا بلا أي عتاد."
                            },
                            {
                                "t": "أسرارٌ من البيئة + تهدئةٌ آمنة للخيوط",
                                "d": "توكنات الإشعار تُقرأ من متغيّرات البيئة؛ وإن لم تُضبط يتنازل النظام بلطفٍ إلى الطباعة على الطرفية بدل أن ينهار. وحالة التنبيه محميّةٌ بقفلٍ (lock) فلا تُطلق أحداث الكاميرا واللهب والغاز المتزامنة إنذارًا مزدوجًا."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "الرؤية اللونية ساذجة: الشمس أو الملابس الحمراء قد تخدع قناع HSV، والعتبة نقطة بداية لا مُصنِّفًا مضبوطًا. والحسّاسات تُقرأ رقميًا (تشغيل/إيقاف) لا بقيمة ppm تماثلية، لأن الـ Pi بلا ADC. هذا مشروعٌ تعليمي/نموذج أوّلي، لا بديلٌ عن إنذار حريقٍ معتمَد."
                    }
                ],
                "results": [
                    {
                        "k": "إشارات مدموجة",
                        "v": "3"
                    },
                    {
                        "k": "قنوات التنبيه",
                        "v": "صفّارة + إشعار"
                    },
                    {
                        "k": "وضع المحاكاة",
                        "v": "بلا عتاد"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية، وليس جهاز سلامةٍ معتمدًا. أي توكن أو سرٍّ يُقرأ من متغيّرات البيئة فقط."
            },
            "en": {
                "lead": "An early-warning node that fuses three independent signals so a single false reading can't raise a false alarm, and a single missed reading can't stay silent — and it runs hardware-free in simulation mode.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Relying on one signal source for fire detection is fragile: a camera alone is fooled by colour, a flame sensor can't see smoke, and a gas sensor can't see open flame. The project fuses all three into one judgment, with a local buzzer and a phone notification on any confirmed event."
                    },
                    {
                        "h": "Architecture",
                        "flow": [
                            "Camera (OpenCV HSV segmentation)",
                            "IR flame sensor (GPIO interrupt)",
                            "MQ-2 gas sensor (digital output)",
                            "Alert manager + cooldown",
                            "Buzzer + Pushover notification"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Three-sensor fusion, not a single detector",
                                "d": "Camera, flame, and gas cover each other's blind spots: colour false-positives vs. true flame vs. invisible smoke. The final decision comes from fusing them, not from any one alone."
                            },
                            {
                                "t": "A GPIO abstraction that auto-mocks",
                                "d": "When RPi.GPIO is unavailable a mock is injected, so the exact same code runs on a laptop for development and on the Pi in production — and the whole camera pipeline can be demoed with no hardware at all."
                            },
                            {
                                "t": "Env-var secrets + thread-safe cooldown",
                                "d": "Notification tokens are read from environment variables; if none are set, the system degrades gracefully to console logging instead of crashing. Alert state is guarded by a lock, so concurrent camera/flame/gas events can't double-fire."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "The colour vision is naive: sunlight or red clothing can trip the HSV mask, and the threshold is a starting point, not a tuned classifier. The sensors are read digitally (on/off), not as analog ppm, because the Pi has no ADC. This is an educational prototype, not a replacement for a rated fire alarm."
                    }
                ],
                "results": [
                    {
                        "k": "Signals fused",
                        "v": "3"
                    },
                    {
                        "k": "Alert channels",
                        "v": "Buzzer + push"
                    },
                    {
                        "k": "Simulation mode",
                        "v": "No hardware"
                    }
                ],
                "note": "An open-source educational project, not a certified safety device. Any token or secret is read from environment variables only."
            }
        }
    },
    {
        "id": "pid-motor-control",
        "categories": [
            "arduino",
            "robotics"
        ],
        "featured": false,
        "image": "assets/images/pid-motor-control.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/pid-motor-control",
        "tags": [
            "Arduino",
            "C++",
            "PID",
            "Encoder",
            "Control Systems"
        ],
        "title": {
            "ar": "التحكّم في الموتور بـ PID",
            "en": "PID Motor Control"
        },
        "desc": {
            "ar": "تطبيقان للتحكّم في الموضع بحلقةٍ مغلقة: موتور DC مع encoder رباعي الطور، وموتور stepper بـ PID مكتوبٍ يدويًا. تضبط الهدف بمقاومةٍ متغيّرة فيتبعه المحور.",
            "en": "Two takes on closed-loop position control: a DC motor with a quadrature encoder, and a stepper with a hand-written PID. Set the target with a potentiometer and the shaft follows."
        },
        "details": {
            "ar": "ريبو واحد بمشروعين نظيفين. سكربت موتور DC يفكّ الـ encoder فكًّا رباعيًا كاملًا على المقاطعات فلا تُفقَد نبضاتٌ عند السرعة، ويرفع تردد الـ PWM إلى 31 كيلوهرتز لإسكات طنين الموتور. وسكربت الـ stepper يحسب حدود P وI وD يدويًا لتظهر معادلة المتحكّم بوضوحٍ لا مخبّأةً في مكتبة. الأطراف والثوابت في بلوكاتٍ واضحة، والملاحظات التقنية موثّقة (بما فيها حدود التطوير مثل حماية التشبّع).",
            "en": "One repo, two clean projects. The DC-motor sketch does a full quadrature decode on interrupts so counts aren't lost at speed, and raises the PWM to 31 kHz to silence motor whine. The stepper sketch computes the P, I, and D terms by hand so the controller's maths is visible, not hidden in a library. Pins and constants sit in clear blocks, and the technical notes are documented (including future work such as anti-windup)."
        },
        "article": {
            "ar": {
                "lead": "التحكّم في الموضع بحلقةٍ مغلقة على موتورين مختلفين — DC بـ encoder، و stepper بـ PID مكتوبٍ يدويًا — تدير الهدف بمقاومةٍ فيتبعه المحور.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "تضبط موضعًا هدفًا بمقاومةٍ متغيّرة، وحسّاسٌ يبلّغ الموضع الحقيقي، ومتحكّم PID يدير الموتور حتى يتطابقا. طريقتان لنفس المبدأ: موتور DC بـ encoder، وموتور stepper."
                    },
                    {
                        "h": "كيف يعمل",
                        "flow": [
                            "مقاومةٌ متغيّرة تحدّد الموضع الهدف",
                            "encoder (أو خطوات) يبلّغ الموضع الحالي",
                            "PID يحسب الخرج",
                            "اتجاه + PWM (أو خطوة) للموتور"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "فكّ encoder رباعي على المقاطعات",
                                "d": "يُفكّ الـ encoder من جدول انتقالاتٍ رباعي على مقاطعات تغيّر الطرف، فلا تُفقَد نبضاتٌ عند السرعة العالية."
                            },
                            {
                                "t": "PWM بتردد 31 كيلوهرتز",
                                "d": "تعديلٌ من سطرٍ واحدٍ على Timer1 يرفع تردد الـ PWM فوق مدى السمع، فيختفي طنين الموتور الحاد."
                            },
                            {
                                "t": "PID ظاهرٌ لا مخبّأ",
                                "d": "سكربت الـ stepper يحسب P وI وD يدويًا فيصير المتحكّم أداةً تعليميةً واضحةً لا صندوقًا أسود."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "الثوابت تحتاج ضبطًا لكل موتورٍ وحملٍ وتعشيق، وبلا حماية تشبّع (wind-up) للتكامل في سكربت الـ stepper بعد، وتغذية المقاومة من أطرافٍ تناظرية في سكربت الـ stepper للتجربة فقط (الأفضل أطراف 5V/GND الحقيقية)."
                    }
                ],
                "results": [
                    {
                        "k": "أنواع الموتورات",
                        "v": "DC + Stepper"
                    },
                    {
                        "k": "التغذية الراجعة",
                        "v": "encoder رباعي"
                    },
                    {
                        "k": "تردد الـ PWM",
                        "v": "31 kHz"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. يعتمد على مكتبتَي PID و AccelStepper من مدير المكتبات."
            },
            "en": {
                "lead": "Closed-loop position control on two different motors — a DC motor with an encoder, and a stepper with a hand-written PID — turn a knob and the shaft follows.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "You set a target position with a potentiometer, a sensor reports the real position, and a PID controller drives the motor until they match. Two takes on the same principle: a DC motor with an encoder, and a stepper."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "A potentiometer sets the target position",
                            "An encoder (or steps) reports the current position",
                            "PID computes the output",
                            "Direction + PWM (or a step) to the motor"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Interrupt-driven quadrature decode",
                                "d": "The encoder is decoded from a 4-state transition table on pin-change interrupts, so counts aren't lost at high speed."
                            },
                            {
                                "t": "31 kHz PWM",
                                "d": "A one-line Timer1 change pushes the PWM frequency above the audible range, removing the motor's high-pitched whine."
                            },
                            {
                                "t": "PID made visible",
                                "d": "The stepper sketch computes P, I, and D by hand, making the controller a clear teaching artifact rather than a black box."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "Gains need tuning per motor, load, and gearing; there's no anti-windup on the hand-written stepper integral yet; and the pot-as-power hack in the stepper sketch is for breadboarding only (prefer the real 5V/GND rails)."
                    }
                ],
                "results": [
                    {
                        "k": "Motor types",
                        "v": "DC + Stepper"
                    },
                    {
                        "k": "Feedback",
                        "v": "Quadrature encoder"
                    },
                    {
                        "k": "PWM frequency",
                        "v": "31 kHz"
                    }
                ],
                "note": "An open-source educational project. Uses the PID and AccelStepper libraries from the Library Manager."
            }
        }
    },
    {
        "id": "voice-chess-pro",
        "categories": [
            "python-ai"
        ],
        "featured": false,
        "image": "assets/images/voice-chess-pro.png",
        "demoUrl": "https://huggingface.co/spaces/engdarwish/voice-chess-pro",
        "codeUrl": "https://github.com/eahmeddarwish/voice-chess-pro",
        "tags": [
            "Python",
            "Gradio",
            "Stockfish"
        ],
        "title": {
            "ar": "شطرنج تفاعلي احترافي (Voice Chess Pro)",
            "en": "Voice Chess Pro — Interactive Web Chess"
        },
        "desc": {
            "ar": "لعبة شطرنج تفاعلية كاملة تعمل في المتصفح، بوضعين: التحدي ضد محرك Stockfish أو اللعب بين شخصين، مع تصدير النقلات بصيغة PGN.",
            "en": "A full interactive browser-based chess game with two modes: challenge the Stockfish engine or play against another player, plus PGN move export."
        },
        "details": {
            "ar": "بُني المشروع بلغة Python باستخدام Gradio لواجهة الويب، ومحرك Stockfish كخصم ذكاء اصطناعي بثلاث مستويات صعوبة (سهل، متوسط، صعب). يدعم وضعين للعب: لاعب ضد لاعب، أو لاعب ضد الحاسوب، مع تتبع كامل لسجل النقلات وإمكانية تصدير المباراة بصيغة PGN القياسية لتحليلها لاحقاً في أي برنامج شطرنج. تجربة تُظهر كيفية دمج محرك شطرنج احترافي (UCI) مع واجهة ويب تفاعلية بسيطة وسريعة النشر عبر Hugging Face Spaces.",
            "en": "Built in Python with a Gradio web interface and the Stockfish engine as an AI opponent across three difficulty levels (Easy, Medium, Hard). Supports two modes, Player vs Player and Player vs Computer, with full move-history tracking and standard PGN export for later analysis in any chess program. A practical example of wiring a professional UCI chess engine into a lightweight, instantly deployable web UI on Hugging Face Spaces."
        },
        "article": {
            "ar": {
                "lead": "لعبة شطرنجٍ كاملة تعمل بالكامل داخل المتصفح — ضدّ محرك Stockfish بثلاث مستويات، أو ضدّ صديقٍ على نفس الجهاز، وكل جلسةٍ مستقلةٌ تمامًا عن غيرها.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "شطرنجٌ احترافي بلا تثبيتٍ ولا حساب: تفتح الرابط وتلعب فورًا. تختار مستوى الصعوبة (سهل / متوسط / صعب)، أو تتحدّى صديقًا وجهًا لوجهٍ على نفس الشاشة."
                    },
                    {
                        "h": "آلية العمل",
                        "flow": [
                            "إدخال الحركة",
                            "python-chess يتحقق من صحّتها",
                            "محرك Stockfish يردّ",
                            "تحديث الرقعة"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "محرك شطرنجٍ كامل بـ python-chess",
                                "d": "كل حركةٍ تُفحَص للتأكد من قانونيّتها قبل تنفيذها — لا حركاتٍ غير شرعية، ولا حالاتٍ شاذّة. المكتبة تتكفّل بقواعد الشطرنج كاملةً بما فيها التبييت والترقية والكِش."
                            },
                            {
                                "t": "خصمٌ ذكيٌّ بمحرك Stockfish",
                                "d": "من أقوى محركات الشطرنج المفتوحة، بمستوى صعوبةٍ قابلٍ للضبط — من خصمٍ ودودٍ للمبتدئ إلى تحدٍّ حقيقيٍّ للاعب المتمرّس."
                            },
                            {
                                "t": "حالة لعبٍ منفصلةٌ لكل جلسة",
                                "d": "كل متصفحٍ يحتفظ بلعبته الخاصة، فيمكن لعشرات الأشخاص اللعب في الوقت نفسه دون أي تداخل — تصميمٌ آمنٌ للّعب المتزامن."
                            }
                        ]
                    },
                    {
                        "h": "مدخلاتٌ مرنة",
                        "p": "تُدخِل الحركة بالصيغة القياسية (<em>e2e4</em>، <em>Nf3</em>) أو بلغةٍ طبيعية (<em>e2 to e4</em>). مع أزرارٍ للتراجع وإعادة الضبط وقلب الرقعة، وسجلٍّ للحركات وتصديرٍ بصيغة PGN."
                    }
                ],
                "results": [
                    {
                        "k": "مستويات الصعوبة",
                        "v": "3"
                    },
                    {
                        "k": "المحرك",
                        "v": "Stockfish"
                    },
                    {
                        "k": "لاعبون متزامنون",
                        "v": "غير محدود"
                    },
                    {
                        "k": "التثبيت",
                        "v": "صفر"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر بالكامل، يعمل داخل المتصفح عبر Gradio — الكود متاحٌ للتجربة والتعديل."
            },
            "en": {
                "lead": "A full chess game running entirely in the browser — against Stockfish at three levels, or a friend on the same device, each session fully independent.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Serious chess with no install and no account: open the link and play. Pick a difficulty (Easy / Medium / Hard), or challenge a friend face-to-face on the same screen."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Move input",
                            "python-chess validates it",
                            "Stockfish replies",
                            "Board updates"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A full engine with python-chess",
                                "d": "Every move is checked for legality before it's applied — no illegal moves, no edge cases. The library handles all of chess including castling, promotion and check."
                            },
                            {
                                "t": "A smart opponent with Stockfish",
                                "d": "One of the strongest open chess engines, with adjustable difficulty — from a gentle opponent for beginners to a real challenge for experienced players."
                            },
                            {
                                "t": "Per-session game state",
                                "d": "Each browser keeps its own game, so dozens can play at once with zero interference — designed to be safe for concurrent play."
                            }
                        ]
                    },
                    {
                        "h": "Flexible input",
                        "p": "Enter moves in standard notation (<em>e2e4</em>, <em>Nf3</em>) or plain language (<em>e2 to e4</em>). With undo, reset and flip controls, move history and PGN export."
                    }
                ],
                "results": [
                    {
                        "k": "Difficulty levels",
                        "v": "3"
                    },
                    {
                        "k": "Engine",
                        "v": "Stockfish"
                    },
                    {
                        "k": "Concurrent players",
                        "v": "Unlimited"
                    },
                    {
                        "k": "Install",
                        "v": "None"
                    }
                ],
                "note": "Fully open source, running in the browser via Gradio — the code is available to run and modify."
            }
        }
    },
    {
        "id": "color-sorting-machine",
        "categories": [
            "arduino",
            "robotics"
        ],
        "featured": false,
        "image": "assets/images/color-sorting-machine.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/color-sorting-machine",
        "tags": [
            "Arduino",
            "C++",
            "TCS3200",
            "Servo",
            "Mechatronics"
        ],
        "title": {
            "ar": "آلة الفرز بالألوان",
            "en": "Color Sorting Machine"
        },
        "desc": {
            "ar": "آلة ميكاترونكس تقرأ لون الجسم بحسّاس TCS3200 وتوجّهه للصندوق المطابق بذراعَي servo: واحدة تُدخِله تحت الحسّاس، وأخرى تدفعه للصندوق. الألوان تُطابَق بجدولٍ قابلٍ للتعديل.",
            "en": "A mechatronics rig that reads an object's color with a TCS3200 sensor and routes it to the matching bin with two servos: one brings it under the sensor, the other flicks it toward the bin. Colors are matched against an editable table."
        },
        "details": {
            "ar": "نُظِّف الكود إلى مستوى احترافي: استُبدلت سلسلة if/else الطويلة بجدول ألوانٍ واحدٍ (اسم اللون + زاوية الصندوق + نوافذ R/G/B) فإضافة لونٍ جديدٍ صارت سطرًا واحدًا، وحركة الـ servo صارت سلسةً درجةً درجة، وطريقة المعايرة موثّقة. تغذية الحسّاس من أطرافٍ تناظرية مُعلَّمةٌ صراحةً كحلٍّ للتجربة مع البديل النظيف.",
            "en": "The code was cleaned to a professional level: the long if/else chain became a single color table (name + bin angle + R/G/B windows), so teaching it a new color is one line; the servo motion is smooth (degree by degree); and calibration is documented. The sensor's power-from-analog-pins is explicitly flagged as a breadboard convenience with the clean-build alternative."
        },
        "article": {
            "ar": {
                "lead": "آلة فرزٍ صغيرة تقرأ لون الجسم وتوجّهه للصندوق الصحيح — بجدول ألوانٍ قابلٍ للتعديل بدل سلسلة شروطٍ طويلة.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "ذراع servo تُدخِل الجسم تحت حسّاس TCS3200 الذي يقرأ استجابة الأحمر والأخضر والأزرق، ثم تدفعه ذراعٌ ثانيةٌ نحو الصندوق المطابق. الألوان تُعرَّف بجدولٍ صغيرٍ قابلٍ للتعديل."
                    },
                    {
                        "h": "كيف يعمل",
                        "flow": [
                            "الذراع تُدخِل الجسم تحت الحسّاس",
                            "قراءة R/G/B عبر مرشّحات S2/S3",
                            "مطابقةٌ بجدول الألوان",
                            "الذراع الثانية تدفعه للصندوق الصحيح"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "جدولٌ لا سلسلة شروط",
                                "d": "انتقلت الألوان من سلسلة if/else طويلة إلى مصفوفة struct واحدة، فإضافة لونٍ أو إعادة ضبطه صارت سطرًا واحدًا."
                            },
                            {
                                "t": "حركة servo سلسة",
                                "d": "تتحرّك الذراع درجةً واحدةً في كل مرة بدل القفز، وهو ألطف على الميكانيكا وعلى الجسم."
                            },
                            {
                                "t": "حلّ التغذية موثّق",
                                "d": "تُغذَّى أطراف VCC/GND للحسّاس من أطرافٍ تناظريةٍ للتجربة، مُعلَّمًا في الكود مع البديل النظيف (أطراف 5V/GND الحقيقية)."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "حسّاسٌ للإضاءة (يجب إعادة المعايرة لو تغيّر الضوء)، ومجموعة ألوانٍ ثابتةٌ في الجدول (الباقي 'غير معروف')، وحركةٌ بالتوقيت (delay) فزمن الدورة ثابتٌ لا مغلقٌ بالحسّاس."
                    }
                ],
                "results": [
                    {
                        "k": "الحسّاس",
                        "v": "TCS3200"
                    },
                    {
                        "k": "الأذرع",
                        "v": "2 servo"
                    },
                    {
                        "k": "المطابقة",
                        "v": "جدولٌ قابلٌ للتعديل"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. يعتمد على مكتبة Servo المدمجة."
            },
            "en": {
                "lead": "A small sorting machine that reads an object's color and routes it to the right bin — with an editable color table instead of a long chain of conditions.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "A servo arm brings an object under a TCS3200 color sensor, which reads its red/green/blue response, then a second servo flicks it toward the matching bin. Colors are defined in a small, editable table."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "The arm brings the object under the sensor",
                            "Read R/G/B via the S2/S3 filters",
                            "Match against the color table",
                            "The second servo flicks it to the right bin"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A table, not an if-ladder",
                                "d": "Colors moved from a long if/else chain to a single struct array, so adding or retuning a color is one line."
                            },
                            {
                                "t": "Smooth servo motion",
                                "d": "The arm moves one degree at a time instead of jumping, which is gentler on the mechanism and the object."
                            },
                            {
                                "t": "Documented power hack",
                                "d": "The sensor's VCC/GND are driven from analog pins for breadboarding, flagged in the code with the clean-build alternative (real 5V/GND rails)."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "Lighting-sensitive (recalibrate if the ambient light changes), a fixed color set in the table (everything else is 'unknown'), and timing-based motion (delay), so the cycle time is fixed rather than sensor-closed."
                    }
                ],
                "results": [
                    {
                        "k": "Sensor",
                        "v": "TCS3200"
                    },
                    {
                        "k": "Arms",
                        "v": "2 servos"
                    },
                    {
                        "k": "Matching",
                        "v": "Editable table"
                    }
                ],
                "note": "An open-source educational project. Uses the built-in Servo library."
            }
        }
    },
    {
        "id": "visual-trigger-studio",
        "categories": [
            "python-ai"
        ],
        "featured": false,
        "image": "assets/images/Visual-Trigger.png",
        "demoUrl": "https://eahmeddarwish.github.io/visual-trigger-studio/",
        "codeUrl": "https://github.com/eahmeddarwish/visual-trigger-studio",
        "tags": [
            "JavaScript",
            "CLIP",
            "Computer Vision",
            "WebAssembly"
        ],
        "title": {
            "ar": "استوديو المشغّلات البصرية (Visual Trigger Studio)",
            "en": "Visual Trigger Studio"
        },
        "desc": {
            "ar": "ارفع صورة مرجعية لأي شيء، وحدّد ما الذي يحدث عندما تتعرّف الكاميرا عليه — عرض صورة، تشغيل فيديو، أو جلب بيانات حية من الإنترنت — كل ذلك داخل المتصفح دون أي خادم أو عتاد إضافي.",
            "en": "Upload a reference photo of anything and decide what happens when the camera recognizes it — an image, a video, or live internet data — all inside the browser, no server or hardware required."
        },
        "details": {
            "ar": "تطبيق ويب ثابت بالكامل (دون خادم أو أدوات بناء) يعتمد على نموذج CLIP يعمل مباشرة داخل المتصفح (عبر WebAssembly) لحساب بصمة رقمية لأي صورة ومقارنتها بالصور المرجعية التي يرفعها المستخدم. وعند حدوث تطابق، يُنفَّذ فعل مخصّص يختاره المستخدم مسبقًا: عرض صورة، تشغيل فيديو، أو جلب بيانات حية من الإنترنت (كدرجة الحرارة والرطوبة عبر خدمة Open-Meteo). لا يعتمد المشروع على أي عتاد قياس أو خادم مركزي؛ إذ تُحفظ جميع البيانات محليًا داخل متصفح المستخدم فقط، مع إمكانية تصدير الإعدادات واستيرادها كملف JSON.",
            "en": "A fully static web app (no server, no build step) that runs a CLIP vision model directly in the browser via WebAssembly to fingerprint any photo and compare it against user-uploaded reference images. On a match, it runs a user-configured action: show an image, play a video, or fetch live internet data (like temperature and humidity via Open-Meteo). No measurement hardware or server required — everything is stored locally in the browser, with JSON export/import for backing up or sharing a trigger set."
        },
        "article": {
            "ar": {
                "lead": "شاهِد شيئًا ← نفّذ إجراءً. ارفع صورةً مرجعية، وحدّد ما يحدث عندما تراها الكاميرا من جديد — كل ذلك داخل متصفحك، بلا خادم، وبلا مفتاح، وبلا أن تغادر صورةٌ جهازك.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "ترفع صورةً لأي شيءٍ يهمّك، وتختار الإجراء: عرض صورة، تشغيل فيديو، جلب حالة الطقس، أو رسالةً نصية. وعندما تُشابه لقطةٌ جديدة صورتك المرجعية بدرجةٍ كافية — يُنفَّذ الإجراء تلقائيًا."
                    },
                    {
                        "h": "آلية العمل",
                        "flow": [
                            "صورة مرجعية",
                            "مُرمِّز CLIP في المتصفح",
                            "لقطة جديدة → CLIP",
                            "تشابه ≥ الحدّ؟",
                            "نفّذ الإجراء"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "لماذا CLIP بدل تدريب مصنِّفٍ لكل صورة؟",
                                "d": "تدريب نموذجٍ مخصّص يحتاج أمثلةً كثيرة وإعادة تدريبٍ كلما أضفت شيئًا جديدًا. أما CLIP فيُنتج «بصمة» عامةً لأي صورة <strong>دون أي تدريب</strong> — ترفع الصورة فتصبح قابلةً للاستخدام فورًا. نفس مبدأ البحث بالصورة في الأدوات الحديثة."
                            },
                            {
                                "t": "لماذا المتصفح لا خادم Python؟",
                                "d": "تشغيل النموذج داخل المتصفح (عبر transformers.js و ONNX Runtime Web) يجعل المشروع كله موقعًا ثابتًا — استضافةٌ مجانيةٌ للأبد، بلا تكلفة خادم، وبلا أن تلمس صورةُ المستخدم أي سيرفر."
                            },
                            {
                                "t": "حدٌّ متحفّظٌ مبنيٌّ على قياس",
                                "d": "في الاختبار سجّل شكلان مختلفان تمامًا (دائرةٌ حمراء ومربعٌ أزرق) تشابهًا بلغ <em>0.86</em>، بينما سجّلت صورتان لنفس الدائرة <em>0.98</em>. لذلك ضُبط الحدّ الافتراضي عند <strong>0.82</strong> — لا أقل — لتقليل النتائج الإيجابية الزائفة."
                            }
                        ]
                    },
                    {
                        "h": "الخصوصية أولًا",
                        "p": "كل شيء — بما فيه التعرّف — يعمل داخل تبويب المتصفح. المُحفِّزات تُخزَّن محليًا على جهازك فقط، مع أزرار تصديرٍ واستيرادٍ لأخذ نسخةٍ احتياطية. لا صورةَ تُرفَع تغادر جهازك إطلاقًا."
                    }
                ],
                "results": [
                    {
                        "k": "التشغيل",
                        "v": "100% في المتصفح"
                    },
                    {
                        "k": "مفاتيح API",
                        "v": "صفر"
                    },
                    {
                        "k": "تكلفة الخادم",
                        "v": "صفر"
                    },
                    {
                        "k": "الحدّ الافتراضي",
                        "v": "0.82"
                    }
                ],
                "note": "موقعٌ ثابتٌ مفتوح المصدر — يعمل على أي متصفحٍ حديثٍ يدعم WebAssembly، على الحاسوب والهاتف."
            },
            "en": {
                "lead": "See something → do something. Upload a reference photo, decide what happens when the camera sees it again — all inside your browser, no server, no key, and no photo ever leaving your device.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Upload a photo of anything you care about and pick the action: show an image, play a video, fetch the weather, or a text message. When a new frame looks similar enough to your reference — the action fires automatically."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Reference photo",
                            "CLIP encoder in-browser",
                            "New frame → CLIP",
                            "similarity ≥ threshold?",
                            "Run the action"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Why CLIP instead of training a classifier per photo?",
                                "d": "A custom model needs many examples and a retrain every time you add something. CLIP produces a general-purpose fingerprint for any photo <strong>with zero training</strong> — upload it and it's usable immediately. The same idea behind modern reverse-image search."
                            },
                            {
                                "t": "Why the browser, not a Python backend?",
                                "d": "Running the model client-side (via transformers.js + ONNX Runtime Web) makes the whole project a static site — free to host forever, no server cost, and no user photo ever touching a server."
                            },
                            {
                                "t": "A conservative, measured threshold",
                                "d": "In testing, two completely different shapes (a red circle and a blue square) scored <em>0.86</em> similarity, while two photos of the same circle scored <em>0.98</em>. So the default is a conservative <strong>0.82</strong> — not lower — to cut false positives."
                            }
                        ]
                    },
                    {
                        "h": "Privacy first",
                        "p": "Everything — recognition included — runs in the browser tab. Triggers are stored locally on your device only, with export/import to back them up. No uploaded photo ever leaves your device."
                    }
                ],
                "results": [
                    {
                        "k": "Runs",
                        "v": "100% in-browser"
                    },
                    {
                        "k": "API keys",
                        "v": "None"
                    },
                    {
                        "k": "Server cost",
                        "v": "Zero"
                    },
                    {
                        "k": "Default threshold",
                        "v": "0.82"
                    }
                ],
                "note": "An open-source static site — works on any modern browser with WebAssembly, on desktop and mobile."
            }
        }
    },
    {
        "id": "esp32-thermal-camera",
        "categories": [
            "arduino"
        ],
        "featured": false,
        "image": "assets/images/esp32-thermal-camera.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/esp32-thermal-camera",
        "tags": [
            "ESP32",
            "Arduino",
            "AMG8833",
            "TFT_eSPI"
        ],
        "title": {
            "ar": "كاميرا حرارية بـ ESP32 (ESP32 Thermal Camera Pro)",
            "en": "ESP32 Thermal Camera Pro"
        },
        "desc": {
            "ar": "كاميرا حرارية مستقلة تعرض خريطة حرارية حيّة وسلسة على شاشة TFT، عبر استيفاء وتنعيم زمني لحساس AMG8833 منخفض الدقة.",
            "en": "A standalone thermal camera that renders a smooth, live heatmap on a TFT screen by interpolating and temporally smoothing a low-resolution AMG8833 sensor."
        },
        "details": {
            "ar": "يجمع المشروع بين ESP32 وحساس Panasonic AMG8833 (Grid-EYE) الذي يخرج شبكة خام بدقة 8×8 فقط. الإضافة الحقيقية هي خط معالجة كامل: استيفاء ثنائي الخطية لرفع الشبكة إلى 64×64، تنعيم زمني أُسّي لتقليل الضوضاء، تدرّج لوني ديناميكي يعاير نفسه تلقائيًا على أقل وأعلى حرارة في كل إطار، وإعادة رسم جزئية للشاشة عبر TFT_eSPI لتفادي الوميض وتحقيق ~14 إطارًا/ثانية بدون أي حجب (delay) في الحلقة الرئيسية. المستودع يوثّق أيضًا نسخة أولى أبسط (Thermalv1) كمرجع لتطور المشروع.",
            "en": "Combines an ESP32 with a Panasonic AMG8833 (Grid-EYE) sensor that only outputs a raw 8x8 grid. The real work is the processing pipeline: bilinear interpolation up to a 64x64 grid, exponential temporal smoothing to cut sensor noise, a dynamic color gradient that auto-scales to each frame's min/max temperature, and partial-redraw rendering via TFT_eSPI for flicker-free ~14 FPS with no blocking delay in the main loop. The repo also documents an earlier, simpler prototype (Thermalv1) showing how the project evolved."
        },
        "article": {
            "ar": {
                "lead": "حساسٌ حراريٌّ 8×8 لا يُخرج سوى 64 قراءة — لكن بفضل الاستيفاء والتنعيم الزمني والتدرّج اللوني الديناميكي، يتحوّل إلى بثٍّ حراريٍّ متصلٍ وسلسٍ بمعدل ~14 إطارًا/ثانية.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "حساس AMG8833 مع لوحة ESP32 وشاشة TFT = كاميرا حراريةٌ صغيرةٌ مستقلة. الحساس نفسه يعطي شبكةً خشنة 8×8 فقط — والمشروع كله يدور حول ما يحدث <em>بعد</em> ذلك ليجعلها تبدو صورةً حقيقية."
                    },
                    {
                        "h": "خط المعالجة",
                        "flow": [
                            "AMG8833 (8×8 قراءة)",
                            "استيفاء ثنائي → 64×64",
                            "تنعيم زمني أُسّي",
                            "تدرّج لوني ديناميكي",
                            "شاشة TFT"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "استيفاءٌ وتنعيمٌ زمني",
                                "d": "الاستيفاء ثنائي الخطية يحوّل الـ64 خلية إلى 4096 خلية، والتنعيم الأُسّي يكبح ضوضاء الحساس بين الإطارات — فتختفي الرجفة وتصبح الصورة سلسة."
                            },
                            {
                                "t": "ثغرةٌ حقيقية: التدرّج اللوني الثابت",
                                "d": "النسخة الأولى استخدمت عتباتٍ ثابتة (أزرق تحت 24°، أحمر فوق 34°) — تبدو صحيحةً في مدىً واحدٍ فقط. وجّه الحساس لشيءٍ أبرد أو أسخن فتنهار الصورة للونٍ واحد. الحلّ: تدرّجٌ يُعاد معايرته وفق أقل وأعلى حرارةٍ في <strong>هذا الإطار تحديدًا</strong>، فيبقى التباين ذا معنى في أي بيئة."
                            },
                            {
                                "t": "إعادة رسمٍ جزئيةٌ وتوقيتٌ غير معيق",
                                "d": "تُعاد رسم الخلايا التي تغيّرت قيمتها فقط، وبتوقيتٍ يعتمد على millis() لا على delay() المعيق — فيثبت المعدّل عند ~14 إطارًا/ثانية بلا تجميد."
                            }
                        ]
                    },
                    {
                        "h": "من نموذجٍ أوّليٍّ إلى نسخةٍ احترافية",
                        "p": "بدأ المشروع بنموذجٍ يعمل ثم أُعيد بناؤه بالكامل: من درايفرٍ بطيءٍ إلى SPI عتاديٍّ أسرع، ومن شبكة 256 خلية إلى 4096، ومن ألوانٍ ثابتةٍ إلى تدرّجٍ ديناميكي — قصة تطوّرٍ حقيقيةٌ موثّقةٌ في المستودع."
                    }
                ],
                "results": [
                    {
                        "k": "دقة الحساس",
                        "v": "8×8"
                    },
                    {
                        "k": "بعد الاستيفاء",
                        "v": "64×64"
                    },
                    {
                        "k": "المعدّل",
                        "v": "~14 إطار/ث"
                    },
                    {
                        "k": "التدرّج",
                        "v": "ديناميكي"
                    }
                ],
                "note": "الاستيفاء يجعل العرض أنعم لا الحساس أدق — حساسٌ منخفض الدقة من فئة Grid-EYE، لا تصويرٌ حراريٌّ بجودة FLIR. الكود مفتوحٌ بالكامل."
            },
            "en": {
                "lead": "An 8×8 thermal sensor outputs just 64 readings — but through interpolation, temporal smoothing and a dynamic color gradient, it becomes a fluid, continuous thermal feed at ~14 FPS.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "An AMG8833 sensor + an ESP32 + a TFT screen = a small standalone thermal camera. The sensor only gives a coarse 8×8 grid — the whole project is what happens <em>after</em> that to make it look like a real image."
                    },
                    {
                        "h": "The pipeline",
                        "flow": [
                            "AMG8833 (8×8 readings)",
                            "Bilinear interp → 64×64",
                            "Exponential smoothing",
                            "Dynamic color mapping",
                            "TFT screen"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Interpolation and temporal smoothing",
                                "d": "Bilinear interpolation turns 64 cells into 4,096, and exponential smoothing suppresses sensor noise between frames — so jitter disappears and the image flows."
                            },
                            {
                                "t": "A real bug: fixed color thresholds",
                                "d": "The first version used hard-coded bands (blue below 24°, red above 34°) — only right for one range. Point it at something colder or hotter and the image collapses to one color. The fix: a gradient rescaled to <strong>this frame's</strong> actual min/max, so contrast stays meaningful in any environment."
                            },
                            {
                                "t": "Partial redraw and non-blocking timing",
                                "d": "Only cells whose value changed are re-painted, with millis()-based pacing instead of a blocking delay() — so the rate holds at ~14 FPS with no freeze."
                            }
                        ]
                    },
                    {
                        "h": "From prototype to Pro",
                        "p": "It started as a working prototype then was fully rebuilt: from a slow driver to faster hardware SPI, from a 256-cell grid to 4,096, and from fixed colors to a dynamic gradient — a real evolution story documented in the repo."
                    }
                ],
                "results": [
                    {
                        "k": "Sensor",
                        "v": "8×8"
                    },
                    {
                        "k": "After interpolation",
                        "v": "64×64"
                    },
                    {
                        "k": "Frame rate",
                        "v": "~14 FPS"
                    },
                    {
                        "k": "Gradient",
                        "v": "Dynamic"
                    }
                ],
                "note": "Interpolation makes the display smoother, not the sensor sharper — a low-res Grid-EYE class sensor, not FLIR-grade imaging. Fully open source."
            }
        }
    },
    {
        "id": "wearable-activity-detector",
        "categories": [
            "arduino",
            "iot"
        ],
        "featured": false,
        "image": "assets/images/wearable-activity-detector.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/wearable-activity-detector",
        "tags": [
            "Arduino",
            "C++",
            "MPU6050",
            "Accelerometer",
            "Wearables"
        ],
        "title": {
            "ar": "كاشف النشاط المحمول",
            "en": "Wearable Activity Detector"
        },
        "desc": {
            "ar": "جهازٌ محمول يقرأ تسارع MPU6050 ويصنّف النشاط تصنيفًا خشنًا (وقوف / سقوط / حركة) من متوسّط مقدار التسارع، مع إشارةٍ بمصابيح وجرس.",
            "en": "A wearable that reads an MPU6050 accelerometer and classifies coarse activity (Stand / Drop / Moving) from the average acceleration magnitude, with LED + buzzer feedback."
        },
        "details": {
            "ar": "نُظِّف الكود وأُصلح فيه باجٌ حقيقي: المتوسّط ما كانش بيتصفّر بين القراءات فكان بينحرف لأعلى مع الوقت — دلوقتي كل نافذةٍ تبدأ من الصفر. العتبات صارت ثوابت مسمّاةً قابلةً للمعايرة، وإشارة المصابيح صارت غير حاجزة بـ millis(). المشروع يوثّق صراحةً إنه مُصنِّف عتباتٍ ساذجٌ لا تعلّم آلي.",
            "en": "The code was cleaned and a real bug was fixed: the running average was never reset between reads, so it drifted upward over time — now each window starts at zero. The thresholds became named, calibratable constants, and the LED feedback became non-blocking via millis(). The project states plainly that it's a naive threshold classifier, not machine learning."
        },
        "article": {
            "ar": {
                "lead": "جهازٌ محمول يصنّف النشاط من تسارع MPU6050 — نُظِّف الكود وأُصلح فيه باجٌ حقيقيٌّ كان يجعل المتوسّط ينحرف مع الوقت.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "بما أن الجاذبية وحدها تُقرأ ~9.8 م/ث²، يبقى الجهاز الساكن قرب تلك القيمة بينما تدفعها الحركة أعلى. فيُحسَب متوسّط مقدار التسارع خلال نافذةٍ قصيرة، وتُطابِق عتباتٌ بسيطةٌ القراءة إلى وقوف / سقوط / حركة."
                    },
                    {
                        "h": "كيف يعمل",
                        "flow": [
                            "قراءة تسارع MPU6050",
                            "متوسّط المقدار على 10 عيّنات",
                            "مطابقةٌ بعتباتٍ مضبوطة",
                            "مصابيح + جرس حسب الحالة"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "إصلاح باجٍ حقيقي",
                                "d": "النسخة الأصلية لم تصفّر المتوسّط بين القراءات فكان ينحرف لأعلى مع الوقت. الآن تبدأ كل نافذةٍ من الصفر — تصحيحٌ موثّقٌ في الكود."
                            },
                            {
                                "t": "وميضٌ غير حاجز",
                                "d": "تتبدّل المصابيح على فترة millis() بدل delay()، فيستمر التصنيف في أخذ العيّنات بسلاسة."
                            },
                            {
                                "t": "عتباتٌ كثوابت مسمّاة",
                                "d": "انتقلت الأرقام السحرية إلى بلوك إعداداتٍ واضحٍ مخصّصٍ للمعايرة."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "مُصنِّف عتباتٍ ساذجٌ لا تعلّم آلي — النوافذ الضيّقة هشّةٌ وتلتبس مع تغيّر الوضعية، ويعتمد على مكان الارتداء (المعصم يختلف عن الجيب)، وحالاتٌ خشنةٌ فقط بلا عدّ خطوات."
                    }
                ],
                "results": [
                    {
                        "k": "الحالات",
                        "v": "وقوف/سقوط/حركة"
                    },
                    {
                        "k": "نافذة المتوسّط",
                        "v": "10 عيّنات"
                    },
                    {
                        "k": "باجٌ أُصلح",
                        "v": "انحراف المتوسّط"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. يعتمد على مكتبات Adafruit MPU6050."
            },
            "en": {
                "lead": "A wearable that classifies activity from an MPU6050 accelerometer — the code was cleaned and a real bug that made the average drift over time was fixed.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Because gravity alone reads ~9.8 m/s², a still device sits near that value while movement pushes it higher. The average acceleration magnitude over a short window is computed, and simple thresholds map the reading to Stand / Drop / Moving."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Read MPU6050 acceleration",
                            "Average the magnitude over 10 samples",
                            "Match against tuned thresholds",
                            "LEDs + buzzer per state"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A real bug fix",
                                "d": "The original never reset the average between reads, so it drifted upward over time. Each window now starts at zero — a correctness fix documented in the code."
                            },
                            {
                                "t": "Non-blocking blink",
                                "d": "LEDs toggle on a millis() interval instead of delay(), so the classifier keeps sampling smoothly."
                            },
                            {
                                "t": "Thresholds as named constants",
                                "d": "The magic numbers moved to a clearly labeled config block meant for calibration."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "A naive threshold classifier, not machine learning — the narrow windows are brittle and confused by orientation changes, it's placement-dependent (wrist differs from pocket), and it reports coarse states only, with no step counting."
                    }
                ],
                "results": [
                    {
                        "k": "States",
                        "v": "Stand/Drop/Moving"
                    },
                    {
                        "k": "Average window",
                        "v": "10 samples"
                    },
                    {
                        "k": "Bug fixed",
                        "v": "Average drift"
                    }
                ],
                "note": "An open-source educational project. Uses the Adafruit MPU6050 libraries."
            }
        }
    },
    {
        "id": "vein-detection",
        "categories": [
            "python-ai",
            "raspberrypi"
        ],
        "featured": false,
        "image": "assets/images/vein-detection.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/vein-detection",
        "tags": [
            "Python",
            "OpenCV",
            "CLAHE",
            "Image Processing",
            "Synthetic Data"
        ],
        "title": {
            "ar": "إبراز الأوردة تحت الأشعة تحت الحمراء القريبة",
            "en": "Vein Enhancement (Near-Infrared)"
        },
        "desc": {
            "ar": "المبدأ وراء أجهزة 'كاشف الأوردة': تحت الضوء تحت الأحمر القريب يمتصّ الدم أكثر من الأنسجة فتظهر الأوردة كمنحنياتٍ أغمق. أداةٌ تُبرز هذه المنحنيات بمسار CLAHE + تسطيح خلفية، وتأتي بمولّد صورٍ اصطناعي — الديمو كله بلا أي صورة يدٍ حقيقية.",
            "en": "The idea behind hardware 'vein finders': under near-infrared light, blood absorbs more than tissue, so veins appear as darker curves. A tool that enhances those curves with a CLAHE + background-flattening pipeline, shipping a synthetic image generator — the entire demo uses no real hand photos."
        },
        "details": {
            "ar": "إعادة بناءٍ لمسارٍ سابق كان يعتمد على تباينٍ عامٍّ بسيط بمكتبة PIL ومساراتٍ ثابتة على جهازٍ معيّن. المسار الجديد بـ OpenCV يستخدم CLAHE (معادلة مدرّج تكراري متكيّفة محدودة التباين) — وهي التقنية الفعلية في أجهزة كشف الأوردة — يليها تسطيحٌ للخلفية (طرح نسخةٍ مموّهةٍ بشدة) لإزالة تدرّج الإضاءة، ثم تراكبٌ ملوّن. ولحفظ الخصوصية، يأتي المشروع بمولّد NIR اصطناعي حتمي (بذرة عشوائية ثابتة) فيعمل الديمو كله على صورٍ مُولّدةٍ رياضيًا — بلا أي صورة يدٍ أو جسمٍ حقيقي في المستودع.",
            "en": "A rebuild of an earlier pipeline that used a simple global-contrast stretch in PIL with hardcoded paths on a specific device. The new OpenCV pipeline uses CLAHE (contrast-limited adaptive histogram equalization) — the actual technique in vein-finder hardware — followed by background flattening (subtracting a heavily blurred copy) to remove the lighting gradient, then a colour overlay. To respect privacy, the project ships a deterministic synthetic NIR generator (fixed seed), so the whole demo runs on mathematically generated images — with no real hand or body imagery anywhere in the repo."
        },
        "article": {
            "ar": {
                "lead": "أداةٌ تُبرز الأوردة من صورةٍ تحت-حمراء بمسارٍ صغيرٍ وصادق — وتعمل بالكامل على صورٍ اصطناعيةٍ مُولّدةٍ رياضيًا، بلا أي صورة يدٍ حقيقية.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "تحت الأشعة تحت الحمراء القريبة يمتصّ الدم ضوءًا أكثر من الأنسجة المحيطة، فتظهر الأوردة أغمق. الأداة تأخذ صورةً رماديةً وتُبرز هذه المنحنيات بثلاث خطوات نظيفة، مع الحفاظ على القابلية للتكرار عبر بذرةٍ عشوائيةٍ ثابتة."
                    },
                    {
                        "h": "كيف يعمل",
                        "flow": [
                            "صورة NIR رمادية (أو مُولّدة اصطناعيًا)",
                            "CLAHE — تباينٌ محلّي متكيّف",
                            "تسطيح خلفية (طرح نسخةٍ مموّهة)",
                            "CLAHE ثانية لتحديد خريطة الأوردة",
                            "تراكبٌ أخضر على الصورة الأصلية"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "CLAHE بدل التباين العام",
                                "d": "النسخة الأصلية مدّت التباين مدًّا عامًا واحدًا يفقد التفاصيل الدقيقة؛ المعادلة المتكيّفة تستعيد تفاصيل أوردةٍ أكثر بكثيرٍ دون إحراق المناطق الساطعة."
                            },
                            {
                                "t": "تسطيح الخلفية",
                                "d": "لصور NIR تدرّج إضاءةٍ قوي؛ طرح نسخةٍ مموّهةٍ بشدة يعزل البُنى الرفيعة (الأوردة) عن هذا التدرّج قبل التحديد."
                            },
                            {
                                "t": "اصطناعيٌّ أولًا، خصوصيةٌ أولًا",
                                "d": "مولّدٌ حتميٌّ ببذرةٍ ثابتة يعني أن أي شخصٍ يعيد إنتاج نفس الديمو بالضبط بصفر صورٍ واقعية — ولا تُستخدَم أي صورة يدٍ أو جسمٍ في المشروع إطلاقًا."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "ليس جهازًا طبيًّا — عرضٌ لمعالجة الصور لا أداة تشخيص. رؤيةٌ كلاسيكية بلا تعلّمٍ آلي (لا مرشّح Frangi بعد)، وعتبة التراكب تلتقط بعض ضوضاء الحسّاس. النتائج الحقيقية تحتاج مصدر ضوءٍ تحت أحمر وكاميرا NoIR؛ إطار كاميرا الويب العادية سيبدو ضعيفًا. والصور الاصطناعية توضيحية لا دقيقةٌ تشريحيًا."
                    }
                ],
                "results": [
                    {
                        "k": "صور حقيقية مستخدمة",
                        "v": "0 (اصطناعي)"
                    },
                    {
                        "k": "مراحل المسار",
                        "v": "4"
                    },
                    {
                        "k": "قابلية التكرار",
                        "v": "ببذرةٍ ثابتة"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية وبحثية، ليس جهازًا طبيًّا — لا يُستخدَم لأي قرارٍ طبي. لا صور يدٍ أو جسمٍ حقيقيةٍ في المستودع."
            },
            "en": {
                "lead": "A tool that lifts veins out of a near-infrared image with a small, honest pipeline — running entirely on mathematically generated synthetic images, with no real hand photos.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Under near-infrared light, blood absorbs more than surrounding tissue, so veins look darker. The tool takes a grayscale image and enhances those curves in three clean steps, staying reproducible via a fixed random seed."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Grayscale NIR image (or synthetic)",
                            "CLAHE — adaptive local contrast",
                            "Background flattening (subtract blur)",
                            "Second CLAHE to sharpen the vein map",
                            "Green overlay on the original"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "CLAHE over global contrast",
                                "d": "The original did one global contrast stretch that loses fine detail; adaptive histogram equalization recovers far more vein detail without blowing out bright regions."
                            },
                            {
                                "t": "Background flattening",
                                "d": "NIR images have a strong illumination gradient; subtracting a heavily blurred copy isolates the thin vein structures from that gradient before extraction."
                            },
                            {
                                "t": "Synthetic-first, privacy-first",
                                "d": "A deterministic generator with a fixed seed means anyone reproduces the exact demo with zero real-world imagery — and no hand or body photos are used in the project at all."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "Not a medical device — an image-processing demonstration, not a diagnostic tool. Classical CV with no machine learning (no Frangi filter yet), and the overlay threshold picks up some sensor speckle. Real results need an IR light source and a NoIR camera; an ordinary webcam frame looks poor. Synthetic images are illustrative, not anatomically accurate."
                    }
                ],
                "results": [
                    {
                        "k": "Real photos used",
                        "v": "0 (synthetic)"
                    },
                    {
                        "k": "Pipeline stages",
                        "v": "4"
                    },
                    {
                        "k": "Reproducibility",
                        "v": "Fixed seed"
                    }
                ],
                "note": "An open-source educational/research project, not a medical device — must not be used for any medical decision. No real hand or body imagery in the repository."
            }
        }
    },
    {
        "id": "pendulum-gravity-lab",
        "categories": [
            "python-physics"
        ],
        "featured": false,
        "image": "assets/images/pendulum-gravity-lab.png",
        "demoUrl": "https://huggingface.co/spaces/engdarwish/pendulum-gravity-lab",
        "codeUrl": "https://github.com/eahmeddarwish/pendulum-gravity-lab",
        "tags": [
            "Python",
            "OpenCV",
            "Gradio",
            "NumPy",
            "SciPy"
        ],
        "title": {
            "ar": "مختبر البندول لتعيين عجلة الجاذبية (Pendulum Gravity Lab)",
            "en": "Pendulum Gravity Lab"
        },
        "desc": {
            "ar": "قياس عجلة الجاذبية الأرضية عبر تتبّع بندول حقيقي بالرؤية الحاسوبية، مع تحليل إحصائي كامل ومحاكاة عددية تفاعلية بلا حاجة لكاميرا.",
            "en": "Measuring Earth's gravitational acceleration via computer-vision pendulum tracking, with full uncertainty analysis and an interactive camera-free numerical simulation."
        },
        "details": {
            "ar": "أداة رؤية حاسوبية مبنية بلغة Python وOpenCV تتتبّع بندولًا حقيقيًا عبر الكاميرا (تحويل هَف للدوائر) وتوقّت أرجحاته لحساب عجلة الجاذبية g = 4π²L/T²، مدعومة بميزانية كاملة لعدم اليقين وانحدار خطي متعدد الأطوال بدل الاكتفاء بمتوسط بسيط. تم اكتشاف وإصلاح علّتين برمجيتين حقيقيتين أثناء التطوير: فيضان عددي صامت (uint16 overflow) كان يُنتج قيمًا خيالية لـ g، وعلة توقيت عند تحليل الفيديوهات المسجَّلة. يرافق التجربة محاكاة تفاعلية مبنية بـ Gradio تحل معادلة البندول اللاخطي عدديًا (RK4) وتقارنها بالحل التحليلي الدقيق عبر التكامل الإهليلجي — لا تحتاج كاميرا أو عتادًا، وتعمل من أي متصفح عبر Hugging Face Spaces.",
            "en": "A Python + OpenCV computer-vision tool that tracks a real pendulum through a camera (Hough Circle Transform) and times its oscillations to compute g = 4π²L/T², backed by a full uncertainty budget and multi-length linear regression rather than a single flattering average. Two real bugs were found and fixed during development: a silent uint16 numeric overflow that produced nonsensical g values, and a timing bug affecting analysis of recorded video files. An interactive Gradio simulation accompanies the experiment, numerically solving the nonlinear pendulum equation (RK4) and cross-checking it against the exact analytic solution via the elliptic integral — no camera or hardware required, runs from any browser on Hugging Face Spaces."
        }
    },
    {
        "id": "pov-fan-display",
        "categories": [
            "arduino"
        ],
        "featured": false,
        "image": "assets/images/pov-fan-display.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/pov-fan-display",
        "tags": [
            "Arduino",
            "C++",
            "Persistence of Vision",
            "Hall Sensor",
            "LEDs"
        ],
        "title": {
            "ar": "شاشة المروحة بثبات الرؤية (POV)",
            "en": "POV Fan Display"
        },
        "desc": {
            "ar": "عمودٌ من 5 مصابيح على ذراعٍ دوّار يبدو وكأنه يكتب نصًّا في الهواء: حسّاس هول يزامن بداية الرسالة كل دورة، ثم تُومَض المصابيح عمودًا عمودًا فيجمع ثبات الرؤية الحروف. النص قابلٌ للتخصيص بالكامل.",
            "en": "A column of 5 LEDs on a spinning arm appears to write text in the air: a Hall sensor syncs the message once per revolution, then the LEDs strobe column-by-column so persistence of vision assembles the letters. The text is fully configurable."
        },
        "details": {
            "ar": "أُعيد بناء المشروع بالكامل: النسخة الأصلية كانت تكتب كلمةً واحدةً مزروعةً في الكود؛ النسخة الجديدة تعرض أي نصٍّ من A إلى Z من فونت 5×5 سهل القراءة (كل حرفٍ خمسة صفوفٍ ثنائية تبدو كالحرف في الكود). تغيّر الرسالة بتعديل سطرٍ واحد، والبداية مُزامَنةٌ على الحافة الصاعدة لحسّاس هول كل دورة فيثبت النص في الهواء. التوقيت (زمن العمود والإزاحة) قابلٌ للضبط حسب سرعة المروحة.",
            "en": "The project was fully rebuilt: the original wrote one hardcoded word; the new version displays any A-Z text from a readable 5x5 font (each glyph is five binary rows that look like the letter in the source). You change the message by editing one line, and drawing is synced to the Hall sensor's rising edge each revolution so the text holds still in the air. The timing (column on-time and offset) is tunable to your fan's RPM."
        },
        "article": {
            "ar": {
                "lead": "عمودٌ من 5 مصابيح على ذراعٍ دوّار يكتب نصًّا معلّقًا في الهواء بثبات الرؤية — أُعيد بناؤه من كلمةٍ واحدةٍ ثابتةٍ إلى فونتٍ كامل A–Z ونصٍّ قابلٍ للتخصيص.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "حسّاس هول يلتقط مغناطيسًا ثابتًا مرةً كل دورة لمزامنة بداية الرسالة، ثم تُومَض الـ 5 مصابيح عمودًا عمودًا فيجمع ثبات الرؤية الحروف في الهواء."
                    },
                    {
                        "h": "كيف يعمل",
                        "flow": [
                            "حسّاس هول يكشف المغناطيس (دورةٌ واحدة)",
                            "قراءة الرسالة حرفًا حرفًا",
                            "رسم كل حرفٍ عمودًا عمودًا",
                            "ثبات الرؤية يجمّع النص"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "فونتٌ حقيقي لا ثلاثة حروفٍ ثابتة",
                                "d": "النسخة الأصلية كتبت كلمةً واحدةً؛ هذه النسخة تعرض أي نصٍّ A–Z من جدول فونت 5×5 قابلٍ للتعديل."
                            },
                            {
                                "t": "ترميزٌ بصريٌّ للحروف",
                                "d": "كل حرفٍ خمسة صفوفٍ ثنائيةٍ تبدو كالحرف في الكود، فتعديل الفونت لا يحتاج عبثًا يدويًا بالبتّات."
                            },
                            {
                                "t": "بدايةٌ مُزامَنةٌ بحسّاس هول",
                                "d": "يبدأ الرسم على الحافة الصاعدة للمغناطيس كل دورة، فيبقى النص في موضعٍ ثابتٍ في الهواء."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "التوقيت يعتمد على سرعة المروحة ومضبوطٌ يدويًا لسرعةٍ واحدة (بلا تتبّع RPM مغلق)، وحروفٌ كبيرة A–Z ومسافة فقط في الفونت المرفق، وعمودٌ نصيٌّ واحدٌ بارتفاع 5 بكسل. وانتبه للميكانيكا: الإلكترونيات الدوّارة تحتاج ذراعًا متزنًا وتوصيلًا آمنًا."
                    }
                ],
                "results": [
                    {
                        "k": "الفونت",
                        "v": "A–Z (5×5)"
                    },
                    {
                        "k": "المزامنة",
                        "v": "حسّاس هول"
                    },
                    {
                        "k": "النص",
                        "v": "قابلٌ للتخصيص"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. لا يحتوي على أي نصٍّ أو إشارةٍ مزروعةٍ من نسخته السابقة."
            },
            "en": {
                "lead": "A column of 5 LEDs on a spinning arm writes text floating in the air with persistence of vision — rebuilt from one fixed word into a full A–Z font with configurable text.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "A Hall sensor catches a fixed magnet once per revolution to sync the message start, then the 5 LEDs strobe column-by-column so persistence of vision assembles the letters in the air."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Hall sensor detects the magnet (one revolution)",
                            "Read the message character by character",
                            "Draw each letter column by column",
                            "Persistence of vision assembles the text"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A real font, not three fixed letters",
                                "d": "The original wrote one hardcoded word; this version displays any A–Z text from an editable 5×5 font table."
                            },
                            {
                                "t": "Visual glyph encoding",
                                "d": "Each letter is five binary rows that look like the letter in the source, so editing the font needs no manual bit-twiddling."
                            },
                            {
                                "t": "Hall-synced start",
                                "d": "Drawing begins on the magnet's rising edge each revolution, so the text holds a stable position in the air."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "The timing depends on fan speed and is tuned by hand to one RPM (no closed-loop RPM tracking), the bundled font is uppercase A–Z + space only, and it's a single 5-pixel-tall text column. Mind the mechanics: spinning electronics need a balanced arm and safe wiring."
                    }
                ],
                "results": [
                    {
                        "k": "Font",
                        "v": "A–Z (5×5)"
                    },
                    {
                        "k": "Sync",
                        "v": "Hall sensor"
                    },
                    {
                        "k": "Text",
                        "v": "Configurable"
                    }
                ],
                "note": "An open-source educational project. It contains no hardcoded text or reference carried over from its earlier version."
            }
        }
    },
    {
        "id": "telescope-optical-designer",
        "categories": [
            "python-physics"
        ],
        "featured": false,
        "image": "assets/images/telescope-optical-designer.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/telescope-optical-designer",
        "tags": [
            "MATLAB",
            "Optics",
            "Ray Matrix",
            "Simulation"
        ],
        "title": {
            "ar": "مصمّم التلسكوب الضوئي (Telescope Optical Designer)",
            "en": "Telescope Optical Designer"
        },
        "desc": {
            "ar": "أداة MATLAB/Octave عامة تصمّم تلسكوبًا كاسرًا من عدساته: تحسب التكبير الزاوي، والمسافة الأفوكال، ومصفوفة نقل الشعاع (ABCD)، وترسم مخطط الأشعة — لنوعَي جاليلي وكبلري.",
            "en": "A general MATLAB/Octave tool that designs a refracting telescope from its lenses: it computes the angular magnification, the afocal spacing, the ABCD ray-transfer matrix, and draws the ray diagram — for both Galilean and Keplerian types."
        },
        "details": {
            "ar": "إعادة بناءٍ كاملة لنسخةٍ سابقة كانت غير صحيحةٍ فيزيائيًا. تُعطى الأداة الأبعاد البؤرية مباشرةً أو أنصاف أقطار العدسات ومعامل الانكسار، فتحسب التكبير الزاوي M=-fo/fe والمسافة الأفوكال d=fo+fe ومصفوفة ABCD للنظام كله، وتتحقق من شرط الأفوكال (C≈0)، وترسم مخطط أشعة بارَاكسي يوضّح أن الأشعة المتوازية تدخل وتخرج متوازية. دوال التصميم والرسم منفصلة عن سكربت الأمثلة بحيث يمكن لأي GUI مستقبلي استدعاؤها مباشرةً.",
            "en": "A from-scratch rebuild of an earlier version that was physically incorrect. The tool takes focal lengths directly, or lens radii and a refractive index, then computes the angular magnification M=-fo/fe, the afocal spacing d=fo+fe, and the whole-system ABCD matrix, checks the afocal condition (C≈0), and draws a paraxial ray diagram showing parallel rays in and parallel rays out. The design and drawing functions are separated from the examples script so a future GUI can call them directly."
        },
        "article": {
            "ar": {
                "lead": "أداة MATLAB تصمّم تلسكوبًا كاسرًا من عدساته — التكبير وطول الأنبوب ومصفوفة الشعاع والرسم — بعد تصحيح أخطاء فيزيائية حقيقية كانت في النسخة القديمة.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "تعطيها الأبعاد البؤرية (أو أنصاف الأقطار ومعامل الانكسار) فتحسب التكبير الزاوي M=-fo/fe، والمسافة الأفوكال d=fo+fe، ومصفوفة ABCD للنظام، وترسم مخطط أشعة بارَاكسي. تدعم جاليلي (صورة معتدلة) وكبلري (صورة مقلوبة)."
                    },
                    {
                        "h": "الأخطاء التي صُحِّحت",
                        "steps": [
                            {
                                "t": "قسمةٌ على صفر في معادلة العدسة",
                                "d": "النسخة القديمة ساوت نصفَي القطر فصار البعد البؤري لا نهائيًّا وكل رقمٍ بعده باطل؛ الآن يُفرض اختلاف الانحناءين واصطلاح الإشارة الصحيح."
                            },
                            {
                                "t": "عينية الجاليلي يجب أن تكون مفرّقة",
                                "d": "العينية سالبة (مقعّرة)؛ الكود القديم استخدم عدستين محدّبتين متطابقتين، والمسافة الصحيحة d=fo+fe أقصر من البعد البؤري للشيئية."
                            },
                            {
                                "t": "التكبير لم يُحسب أبدًا",
                                "d": "أهمّ ناتجٍ كان مفقودًا؛ الآن M=-fo/fe، وهو يساوي عنصر D في مصفوفة النظام الأفوكال."
                            },
                            {
                                "t": "مصفوفة ABCD صحيحة",
                                "d": "مبنيةٌ على المسافة بين العدستين لا سُمك كل عدسة، مع عرض عنصر C للتأكد أن النظام أفوكال."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "نموذجٌ بارَاكسي رفيع العدسة يتجاهل السُمك والزيوغ ومجال الرؤية؛ أداة تصميم/تعليم لا برنامج تصميمٍ ضوئيٍّ كامل، ولأنظمة عدستين فقط."
                    }
                ],
                "results": [
                    {
                        "k": "النوعان",
                        "v": "جاليلي/كبلري"
                    },
                    {
                        "k": "التكبير",
                        "v": "M = -fo/fe"
                    },
                    {
                        "k": "المصفوفة",
                        "v": "ABCD أفوكال"
                    },
                    {
                        "k": "التحقق العددي",
                        "v": "C ≈ 0"
                    }
                ],
                "note": "مشروع محاكاةٍ مفتوح المصدر لأغراضٍ تعليميةٍ وportfolio؛ تم التحقق من الأرقام عدديًا (مثال: fo=900, fe=-100 ⇒ M=9× معتدلة، C≈0)."
            },
            "en": {
                "lead": "A MATLAB tool that designs a refracting telescope from its lenses — magnification, tube length, ray matrix and diagram — after fixing real physics errors in the old version.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Give it focal lengths (or radii + refractive index) and it computes the angular magnification M=-fo/fe, the afocal spacing d=fo+fe, and the system ABCD matrix, and draws a paraxial ray diagram. It supports Galilean (upright) and Keplerian (inverted) telescopes."
                    },
                    {
                        "h": "The errors that were fixed",
                        "steps": [
                            {
                                "t": "Lensmaker division-by-zero",
                                "d": "The old code set both radii equal, making the focal length infinite and every downstream number invalid; it now enforces different curvatures and the correct sign convention."
                            },
                            {
                                "t": "The Galilean eyepiece must diverge",
                                "d": "The eyepiece is negative (concave); the old code used two identical converging lenses, and the correct spacing d=fo+fe is shorter than the objective focal length."
                            },
                            {
                                "t": "Magnification was never computed",
                                "d": "The single most important output was missing; it is now M=-fo/fe, equal to the D element of the afocal system matrix."
                            },
                            {
                                "t": "Correct ABCD matrix",
                                "d": "Built from the lens spacing, not each lens's thickness, and the C element is reported to confirm the system is afocal."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "A paraxial, thin-lens model that ignores thickness, aberrations and field of view; a design/teaching tool, not full optical-design software, and for two-lens systems only."
                    }
                ],
                "results": [
                    {
                        "k": "Types",
                        "v": "Galilean/Keplerian"
                    },
                    {
                        "k": "Magnification",
                        "v": "M = -fo/fe"
                    },
                    {
                        "k": "Matrix",
                        "v": "ABCD afocal"
                    },
                    {
                        "k": "Numeric check",
                        "v": "C ≈ 0"
                    }
                ],
                "note": "An open-source simulation project for educational/portfolio purposes; the numbers were verified numerically (e.g. fo=900, fe=-100 ⇒ M=9× upright, C≈0)."
            }
        }
    },
    {
        "id": "puck-robot",
        "categories": [
            "robotics",
            "arduino"
        ],
        "featured": false,
        "image": "assets/images/puck-collector.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/puck-robot",
        "tags": [
            "Arduino",
            "C++",
            "Robotics",
            "State Machine",
            "Sensors"
        ],
        "title": {
            "ar": "روبوت جامع الأقراص الملوّنة (Puck Robot)",
            "en": "Puck-Collecting Robot"
        },
        "desc": {
            "ar": "روبوت ذاتي القيادة يبحث في ساحة، يميّز قرصًا ملوّنًا بحسّاس لون، يمسكه بجريبر سيرفو، ويرجّعه لمنطقة home ملوّنة — مكتوب كآلة حالاتٍ نضيفة. مشروع مفهومي لم يُطبّق على عتاد.",
            "en": "An autonomous robot that searches an arena, identifies a colored puck with a color sensor, grabs it with a servo gripper, and returns it to a colored home zone — written as a clean state machine. A concept design, not yet built on hardware."
        },
        "details": {
            "ar": "إعادة كتابةٍ كاملة لنموذجٍ سابق كآلة حالاتٍ صريحة (بحث ← اقتراب ← مسك ← عودة ← تجنّب). حسّاس مسافة (ultrasonic) يقاطع أي حالة قيادةٍ لتجنّب العوائق، وحسّاس لون TCS3200 يميّز القرص المستهدف عن منطقة الـhome، وجريبر سيرفو يمسك ويطلق. النموذج الأصلي كانت دالة فحص الحسّاسات فيه تستدعي نفسها تكراريًا (recursion) وقد تُفيض مكدّس الـArduino؛ أُزيل هذا بالكامل. المشروع مفهوميٌّ صريح: مكتوبٌ ليكون صحيحًا وقابلًا للقراءة، لكنه لم يُبنَ أو يُختبَر على عتاد، وعتبات الألوان تحتاج معايرة.",
            "en": "A full rewrite of an earlier prototype as an explicit state machine (SEARCH → APPROACH → GRAB → RETURN → AVOID). An ultrasonic sensor interrupts any driving state for obstacle avoidance, a TCS3200 color sensor distinguishes the target puck from the home pad, and a servo gripper grabs and releases. In the original, the sensor-check routine called itself recursively and could overflow the Arduino's stack; that is removed. The project is explicitly a concept: written to be correct and readable, but not built or tested on hardware, and the color thresholds need calibration."
        },
        "article": {
            "ar": {
                "lead": "روبوت ذاتي يبحث عن قرصٍ ملوّن، يمسكه بجريبر، ويرجّعه لمنطقة الـhome — أُعيد بناؤه كآلة حالاتٍ نضيفة. مشروعٌ مفهوميٌّ لم يُطبّق على عتاد.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "آلة حالاتٍ صريحة: بحث ← اقتراب ← مسك ← عودة ← تجنّب. حسّاس مسافةٍ للعوائق، وحسّاس لون TCS3200 لتمييز القرص عن منطقة الـhome، وجريبر سيرفو يمسك ويطلق."
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "آلة حالاتٍ بدل الـrecursion",
                                "d": "النموذج القديم كانت دالة الحسّاسات تستدعي نفسها تكراريًا وقد تُفيض المكدّس على Arduino؛ الآن FSM مسطّحة تقرأ الحسّاسات مرةً كل دورة loop."
                            },
                            {
                                "t": "قراراتُ لونٍ معايَرة",
                                "d": "مقارنة قنوات اللون ببعضها وبحدودٍ معايَرة بدل عتبة ترددٍ خامٍ واحدةٍ هشّة، أمتن مع تغيّر الإضاءة."
                            },
                            {
                                "t": "تجنّب العوائق كأولوية",
                                "d": "فحص المسافة يسبق تبديل الحالة، وأفعال الرجوع/اللف موقوتةٌ بـmillis() بدل delay()، فتبقى الحلقة مستجيبة."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "مشروعٌ مفهوميٌّ لم يُبنَ أو يُختبَر على عتاد. عتبات الألوان مبدئيةٌ وتحتاج معايرة، والحركة مفتوحة الحلقة (بلا إنكودرات) فالدقة الواقعية ستنحرف."
                    }
                ],
                "results": [
                    {
                        "k": "الحالة",
                        "v": "مفهوم/نظري"
                    },
                    {
                        "k": "عدد الحالات",
                        "v": "5"
                    },
                    {
                        "k": "الحسّاسات",
                        "v": "مسافة + لون"
                    },
                    {
                        "k": "التطبيق العملي",
                        "v": "لم يُطبّق بعد"
                    }
                ],
                "note": "مشروعٌ مفهوميٌّ (Concept) مفتوح المصدر — الكود مكتوبٌ بشكلٍ صحيحٍ واحترافي، لكنه لم يُطبّق عمليًا على عتاد."
            },
            "en": {
                "lead": "An autonomous robot that searches for a colored puck, grabs it, and returns it home — rebuilt as a clean state machine. A concept project, not built on hardware.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "An explicit state machine: SEARCH → APPROACH → GRAB → RETURN → AVOID. An ultrasonic sensor for obstacles, a TCS3200 color sensor to tell the puck from the home pad, and a servo gripper that grabs and releases."
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "A state machine instead of recursion",
                                "d": "The old prototype's sensor routine called itself recursively and could overflow the Arduino stack; it is now a flat FSM that reads the sensors once per loop pass."
                            },
                            {
                                "t": "Calibrated color decisions",
                                "d": "Comparing color channels against each other and against calibrated bounds instead of one fragile raw threshold, far more robust to lighting."
                            },
                            {
                                "t": "Obstacle avoidance as priority",
                                "d": "The distance check runs before the state switch, and reverse/turn actions are time-bounded with millis() instead of delay(), keeping the loop responsive."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "A concept project, not built or tested on hardware. Color thresholds are placeholders needing calibration, and motion is open-loop (no encoders) so real-world accuracy will drift."
                    }
                ],
                "results": [
                    {
                        "k": "Status",
                        "v": "Concept / theoretical"
                    },
                    {
                        "k": "States",
                        "v": "5"
                    },
                    {
                        "k": "Sensors",
                        "v": "Distance + color"
                    },
                    {
                        "k": "Hardware run",
                        "v": "Not yet built"
                    }
                ],
                "note": "An open-source concept project — the code is written correctly and professionally, but has not been run on physical hardware."
            }
        }
    },
    {
        "id": "educational-ai-assistant",
        "categories": [
            "python-ai"
        ],
        "featured": false,
        "image": "assets/images/educational-ai-assistant.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/educational-ai-assistant",
        "tags": [
            "Python",
            "Tkinter",
            "OpenAI API",
            "NLP",
            "Threading"
        ],
        "title": {
            "ar": "المساعد التعليمي الذكي",
            "en": "Educational AI Assistant"
        },
        "desc": {
            "ar": "مساعدٌ مكتبيٌّ ثنائي اللغة (عربي/إنجليزي) يقدّم للطالب دعمًا بطريقتين: سؤالٌ نصيٌّ يُجاب عبر OpenAI، أو ملف PDF يُلخَّص تلقائيًا — بواجهة Tkinter ومفتاحٍ يُقرأ من متغيّر البيئة لا من الكود.",
            "en": "A bilingual (Arabic/English) desktop assistant that helps students two ways: a free-text question answered via OpenAI, or a PDF summarized automatically — with a Tkinter UI and an API key read from an environment variable, not the source."
        },
        "details": {
            "ar": "إعادة هيكلةٍ كاملة لنسخةٍ سابقة كان فيها مفتاح OpenAI مكتوبًا صريحًا في الكود، ومساراتٌ شخصيةٌ ثابتة، ودالةٌ مكرّرةٌ مكسورة. النسخة الجديدة تقرأ المفتاح من متغيّر البيئة OPENAI_API_KEY، وتضيف اختيار لغةٍ فعليًّا بين العربية والإنجليزية، وتشغّل نداء الواجهة البرمجية على خيطٍ خلفي حتى لا تتجمّد النافذة أثناء تفكير النموذج، وتحفظ الملخّص عبر نافذة حفظٍ بدل مسارٍ ثابت — مع تنازلٍ لطيفٍ إن غاب المفتاح أو الشعار.",
            "en": "A full restructure of an earlier version that had the OpenAI key hard-coded in the source, personal hardcoded paths, and a broken duplicate function. The new version reads the key from the OPENAI_API_KEY environment variable, adds a real Arabic/English language toggle, runs the API call on a background thread so the window never freezes while the model thinks, and saves the summary via a save dialog instead of a fixed path — degrading gracefully if the key or logo is missing."
        },
        "article": {
            "ar": {
                "lead": "مساعدٌ تعليميٌّ ثنائي اللغة يجيب الأسئلة ويلخّص ملفات PDF، أُعيدت هيكلته من ملفٍ واحدٍ فيه مفتاحٌ متسرّبٌ إلى نسخةٍ نظيفةٍ آمنة.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "دعمٌ دراسيٌّ على مدار الساعة بطريقتين: اسأل سؤالًا نصيًا فتحصل على إجابةٍ شاملة من OpenAI، أو اختر ملف PDF فتحصل على ملخّصٍ مختصر — والواجهة كلها تتبدّل بين العربية والإنجليزية بنقرة."
                    },
                    {
                        "h": "المعمارية",
                        "flow": [
                            "واجهة Tkinter (اختيار لغة → سؤال / تلخيص)",
                            "نداء OpenAI على خيطٍ خلفي",
                            "استخراج نص PDF + تلخيص LSA",
                            "حفظ الملخّص عبر نافذة حفظ"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "مفتاحٌ من البيئة لا من الكود",
                                "d": "النسخة الأصلية كتبت المفتاح صراحةً في الملف. الآن يُقرأ من OPENAI_API_KEY، ويعرض البرنامج رسالةً واضحةً بدل أن ينهار إن كان غائبًا."
                            },
                            {
                                "t": "نداءٌ على خيطٍ خلفي",
                                "d": "Tkinter أحادي الخيط، فطلب الشبكة يُنفَّذ على خيطٍ منفصل وتُعاد النتيجة للواجهة بأمان — فتبقى النافذة مستجيبةً أثناء تفكير النموذج بدل أن تتجمّد."
                            },
                            {
                                "t": "تنازلٌ لطيفٌ عند نقص أي جزء",
                                "d": "الشعار والصور اختيارية؛ غيابها لا يكسر التشغيل. والتلخيص يُحفَظ عبر نافذة حفظٍ يختارها المستخدم بدل مسارٍ ثابتٍ على جهازٍ معيّن."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "استخراج نصٍّ فقط من الـ PDF (لا OCR للملفات الممسوحة كصور)، والمُلخِّص يُقطّع الجُمل بالإنجليزية فتكون ملخّصات العربية أخشن. ويتطلّب وضع الأسئلة حساب OpenAI واتصالًا بالإنترنت (الاستخدام محاسَبٌ من OpenAI). سطح المكتب فقط."
                    }
                ],
                "results": [
                    {
                        "k": "الأوضاع",
                        "v": "سؤال + تلخيص PDF"
                    },
                    {
                        "k": "اللغات",
                        "v": "عربي / إنجليزي"
                    },
                    {
                        "k": "معالجة المفتاح",
                        "v": "متغيّر بيئة"
                    }
                ],
                "note": "مشروعٌ شخصيٌّ مفتوح المصدر لأغراضٍ تعليمية. لا يُكتب أي مفتاحٍ حقيقيٍّ في الكود — يُقرأ من البيئة فقط."
            },
            "en": {
                "lead": "A bilingual educational assistant that answers questions and summarizes PDFs, restructured from a single file with a leaked key into a clean, safe version.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "Round-the-clock study support two ways: ask a free-text question and get a comprehensive OpenAI answer, or pick a PDF and get a concise summary — with the whole UI switching between Arabic and English at a click."
                    },
                    {
                        "h": "Architecture",
                        "flow": [
                            "Tkinter UI (language pick → Q&A / summary)",
                            "OpenAI call on a background thread",
                            "PDF text extraction + LSA summary",
                            "Save the summary via a save dialog"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Key from the environment, not the source",
                                "d": "The original wrote the key directly into the file. It now reads from OPENAI_API_KEY, and the app shows a clear message instead of crashing when it's missing."
                            },
                            {
                                "t": "Call on a background thread",
                                "d": "Tkinter is single-threaded, so the network request runs on a separate thread and the result is marshalled back safely — the window stays responsive while the model thinks instead of freezing."
                            },
                            {
                                "t": "Graceful fallback for missing pieces",
                                "d": "The logo and images are optional; their absence never breaks a run. The summary is saved through a user-chosen save dialog instead of a path hardcoded to one machine."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "PDF text extraction only (no OCR for scanned image PDFs), and the summarizer tokenizes as English, so Arabic summaries are rougher. The Q&A mode requires an OpenAI account and internet (usage is billed by OpenAI). Desktop only."
                    }
                ],
                "results": [
                    {
                        "k": "Modes",
                        "v": "Q&A + PDF summary"
                    },
                    {
                        "k": "Languages",
                        "v": "Arabic / English"
                    },
                    {
                        "k": "Secret handling",
                        "v": "Env variable"
                    }
                ],
                "note": "A personal open-source project for educational purposes. No real key is ever written in the source — it is read from the environment only."
            }
        }
    },
    {
        "id": "smart-spelling-tutor",
        "categories": [
            "python-ai"
        ],
        "featured": false,
        "image": "assets/images/Smart-Spelling-Tutor.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/smart-spelling-tutor",
        "tags": [
            "Python",
            "Tkinter",
            "pyttsx3",
            "Text-to-Speech",
            "Education"
        ],
        "title": {
            "ar": "مدرّب الإملاء الذكي",
            "en": "Smart Spelling Tutor"
        },
        "desc": {
            "ar": "مدرّبٌ مكتبيٌّ يبني مهارة الإملاء بالاستماع: يقرأ كل كلمةٍ بصوتٍ عالٍ (تحويل نصٍّ إلى كلامٍ دون إنترنت)، والطالب يكتب ما سمعه، ثم يُصحّح كل إجابة ويعرض الدرجة — بثلاثة مستويات صعوبة من بنك كلماتٍ في Excel.",
            "en": "A desktop trainer that builds spelling through listening: it reads each word aloud (offline text-to-speech), the student types what they heard, then it grades every answer and shows a score — with three difficulty levels from an Excel word bank."
        },
        "details": {
            "ar": "تنظيفٌ كاملٌ لنسخةٍ سابقة كان فيها اسمٌ لشخصٍ حقيقي، ومساراتٌ ثابتةٌ على محرّك D لملفات الصور وبنك الكلمات، واستدعاءٌ لإنهاء البرنامج بلا استيراد المكتبة اللازمة (خطأ)، ودوالٌّ ميتةٌ مكرّرة. النسخة الجديدة تستخدم مساراتٍ نسبيةً فقط، وبنك كلمات words.xlsx جاهزٌ يعمل فورًا، وتتنازل بلطفٍ إن غابت المكتبات أو محرّك النطق (قائمة كلماتٍ مدمجة + وضعٌ صامت) فتعمل دائمًا. النطق على خيطٍ خلفي حتى تبقى الواجهة مستجيبة.",
            "en": "A full cleanup of an earlier version that contained a real person's name, hardcoded D-drive paths for the image and word-bank files, a call to quit the program without importing the required library (a bug), and duplicate dead functions. The new version uses relative paths only, ships a ready words.xlsx word bank that works out of the box, and degrades gracefully if the libraries or TTS engine are missing (built-in word list + silent mode) so it always runs. Speech runs on a background thread so the UI stays responsive."
        },
        "article": {
            "ar": {
                "lead": "مدرّبُ إملاءٍ لطيفٌ يقرأ الكلمة بصوتٍ عالٍ فيكتبها الطالب ويُصحَّح فورًا — نُظِّف بالكامل من اسم شخصٍ حقيقيٍّ ومساراتٍ ثابتةٍ وخطأٍ في الكود.",
                "sections": [
                    {
                        "h": "الفكرة",
                        "p": "يبني مهارة الإملاء عبر الاستماع: في كل جولةٍ يسحب كلماتٍ عشوائيةً من بنكٍ في Excel، يقرأ كلًّا منها بصوتٍ عالٍ، ويطلب من الطالب كتابتها، ثم يعرض النتيجة صحيحة/خاطئة مع درجةٍ نهائية. الصعوبة شريطٌ منزلق بثلاثة مستويات."
                    },
                    {
                        "h": "كيف يعمل",
                        "flow": [
                            "اختيار مستوى الصعوبة (١–٣)",
                            "سحب كلماتٍ من words.xlsx",
                            "قراءة كل كلمةٍ بصوتٍ (pyttsx3)",
                            "كتابة الطالب + تصحيح + درجة"
                        ]
                    },
                    {
                        "h": "القرارات التقنية",
                        "steps": [
                            {
                                "t": "مساراتٌ نسبيةٌ فقط",
                                "d": "بنك الكلمات والشعار يُحمّلان من داخل مجلد المشروع، فالبرنامج محمولٌ بين الأجهزة بدل الاعتماد على مسارٍ ثابتٍ على جهازٍ معيّن."
                            },
                            {
                                "t": "كل شيءٍ يتنازل بلطف",
                                "d": "غياب pandas أو ملف words.xlsx يُفعِّل قائمة كلماتٍ مدمجة؛ وغياب محرّك النطق يُفعِّل وضعًا صامتًا. لا ينهار البرنامج على نقص جزءٍ اختياري."
                            },
                            {
                                "t": "نطقٌ على خيطٍ خلفي",
                                "d": "تحويل النص إلى كلامٍ يُشغَّل على خيطٍ داعمٍ (daemon) فتبقى الواجهة مستجيبةً أثناء القراءة."
                            }
                        ]
                    },
                    {
                        "h": "حدودٌ صادقة",
                        "p": "جودة الصوت تعتمد على أصوات نظام التشغيل المثبّتة، فتختلف من جهازٍ لآخر. والتصحيح بالمطابقة التامة (دون حساسيةٍ لحالة الأحرف) بلا درجاتٍ جزئيةٍ بعد. حجم الجولة ثابتٌ بثلاث كلمات. سطح المكتب فقط."
                    }
                ],
                "results": [
                    {
                        "k": "مستويات الصعوبة",
                        "v": "3"
                    },
                    {
                        "k": "كلمات لكل جولة",
                        "v": "3"
                    },
                    {
                        "k": "النطق دون إنترنت",
                        "v": "نعم"
                    }
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. لا يحتوي على أي اسمٍ لشخصٍ حقيقيٍّ أو مسارٍ ثابتٍ على جهازٍ معيّن."
            },
            "en": {
                "lead": "A friendly spelling trainer that reads a word aloud, has the student type it, and grades instantly — fully cleaned of a real person's name, hardcoded paths, and a code bug.",
                "sections": [
                    {
                        "h": "The idea",
                        "p": "It builds spelling through listening: each round it draws random words from an Excel bank, reads each one aloud, asks the student to type it, then shows Correct/Incorrect with a final score. Difficulty is a three-level slider."
                    },
                    {
                        "h": "How it works",
                        "flow": [
                            "Pick difficulty (1–3)",
                            "Draw words from words.xlsx",
                            "Read each word aloud (pyttsx3)",
                            "Student types + grade + score"
                        ]
                    },
                    {
                        "h": "Technical decisions",
                        "steps": [
                            {
                                "t": "Relative paths only",
                                "d": "The word bank and logo load from inside the project folder, so the app is portable across machines instead of depending on a path fixed to one device."
                            },
                            {
                                "t": "Everything degrades gracefully",
                                "d": "No pandas or no words.xlsx falls back to a built-in word list; no TTS engine falls back to silent mode. The app never crashes on a missing optional piece."
                            },
                            {
                                "t": "Speech on a background thread",
                                "d": "Text-to-speech runs on a daemon thread, so the UI stays responsive while a word is being read."
                            }
                        ]
                    },
                    {
                        "h": "Honest limitations",
                        "p": "Voice quality depends on the OS voices installed, so it varies by machine. Grading is exact-match (case-insensitive) with no partial credit yet. Round size is fixed at three words. Desktop only."
                    }
                ],
                "results": [
                    {
                        "k": "Difficulty levels",
                        "v": "3"
                    },
                    {
                        "k": "Words per round",
                        "v": "3"
                    },
                    {
                        "k": "Offline speech",
                        "v": "Yes"
                    }
                ],
                "note": "An open-source project for educational purposes. It contains no real person's name and no path hardcoded to a specific machine."
            }
        }
    },
    {
        "id": "driver-drowsiness-detection",
        "categories": ["python-ai", "raspberrypi"],
        "featured": false,
        "image": "assets/images/driver-drowsiness-detection.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/driver-drowsiness-detection",
        "tags": ["Python", "OpenCV", "dlib", "Raspberry Pi", "Computer Vision"],
        "title": {
            "ar": "كاشف نعاس السائق (Driver Drowsiness Detection)",
            "en": "Driver Drowsiness Detection"
        },
        "desc": {
            "ar": "نظام ذكاءٍ اصطناعيٍّ طرفيٌّ على Raspberry Pi يراقب وجه السائق، ويحسب نسبة أبعاد العين (EAR) ومسافة التثاؤب من 68 نقطةً مرجعية، ثم يُطلق تنبيهًا صوتيًّا واهتزازيًّا وجرسًا عند النعاس — بالكامل محليًّا وبلا إنترنت.",
            "en": "An on-device AI system on a Raspberry Pi that watches the driver's face, computes the Eye Aspect Ratio (EAR) and a yawn metric from 68 landmarks, and raises a voice + buzzer + vibration alert on drowsiness — fully local, no internet."
        },
        "details": {
            "ar": "أُعيدت هيكلة الكود من سكربتٍ واحدٍ بمساراتٍ ثابتةٍ على جهازٍ معيّن إلى برنامجٍ نظيفٍ قابلٍ للتخصيص: كل العتبات في بلوك إعدادات (أو عبر أوامر سطر الأوامر ومتغيرات البيئة)، وجُرِّدت طبقة الـ GPIO حتى يعمل نفس البرنامج على لابتوب بكاميرا ويب في وضع محاكاة. أُضيف عدّاد إطاراتٍ متتاليةٍ لكشف إغلاق العين، ما ألغى الإنذارات الكاذبة الناتجة عن رمشةٍ عابرةٍ في النسخة الأصلية. يعمل بالكامل على الجهاز دون أي اتصالٍ بالشبكة.",
            "en": "The code was refactored from a single script with device-specific hard-coded paths into a clean, configurable program: every threshold lives in a config block (or CLI flags / env vars), and the GPIO layer is abstracted so the same program runs on a laptop webcam in simulation mode. A consecutive-frame counter was added for eye-closure, removing the false alarms a single blink caused in the original. It runs entirely on-device with no network connection."
        },
        "article": {
            "ar": {
                "lead": "نظامٌ يراقب عيني السائق وفمه لحظةً بلحظة، فإن أطبق عينيه لفترةٍ أو تثاءب، حذّره صوتًا واهتزازًا وجرسًا — كلّه على Raspberry Pi وبلا إنترنت.",
                "sections": [
                    {"h": "الفكرة", "p": "كثيرٌ من حوادث الطرق سببها النعاس. الحل: كاميرا رخيصةٌ على الـ Pi تراقب الوجه، وتقيس انغلاق العين والتثاؤب، وتنبّه السائق قبل أن يغفو — محليًّا ودون الحاجة لأي شبكة."},
                    {"h": "المعمارية", "flow": ["كاميرا Pi/ويب", "كشف الوجه بمُصنّف Haar", "68 نقطةً مرجعيةً (dlib)", "حساب EAR + مسافة التثاؤب", "تنعيم بعدّاد إطاراتٍ متتالية", "صوت + جرس + اهتزاز"]},
                    {"h": "القرارات التقنية", "steps": [
                        {"t": "Haar بدل كاشف dlib", "d": "اختير مُصنّف Haar للوجه لأنه أسرع بكثيرٍ على معالج الـ Pi المحدود من كاشف HOG في dlib، مع دقةٍ كافيةٍ للغرض."},
                        {"t": "تنعيم بعدّاد إطارات", "d": "لا يُطلق الإنذار إلا بعد بقاء EAR تحت العتبة لعددٍ متتالٍ من الإطارات، ما ألغى الإنذارات الكاذبة من رمشةٍ عابرةٍ كانت في النسخة الأصلية."},
                        {"t": "يعمل على أي جهاز", "d": "جُرِّدت طبقة الـ GPIO؛ فإن غاب عتاد الـ Pi يعمل نفس الكود على لابتوب بكاميرا ويب ويطبع الإنذار في الطرفية — تطويرٌ واختبارٌ بلا عتاد."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "قائمٌ على عتباتٍ لا على نموذجٍ مُدرَّب؛ يفترض وجهًا أماميًّا وسائقًا واحدًا؛ عتبة EAR شبه شخصيةٍ قد تحتاج ضبطًا لكل سائق؛ وليس جهاز سلامةٍ معتمدًا بل عرضٌ توضيحيٌّ لمساعدة السائق."}
                ],
                "results": [
                    {"k": "المعالجة", "v": "على الجهاز"},
                    {"k": "الاتصال", "v": "بلا إنترنت"},
                    {"k": "الإشارات", "v": "EAR + تثاؤب"}
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. لا يحتوي على أي أسرارٍ حقيقيةٍ أو مساراتٍ ثابتةٍ لجهازٍ معيّن، ويعمل محليًّا بلا شبكة."
            },
            "en": {
                "lead": "A system that watches the driver's eyes and mouth frame by frame; if the eyes stay shut too long or a yawn appears, it warns with voice, vibration, and a buzzer — all on a Raspberry Pi, no internet.",
                "sections": [
                    {"h": "The idea", "p": "Drowsiness causes a large share of road accidents. The fix: a cheap camera on the Pi watches the face, measures eye closure and yawning, and warns the driver before they nod off — locally, with no network."},
                    {"h": "Architecture", "flow": ["Pi / web camera", "Haar face detection", "68 landmarks (dlib)", "EAR + yawn distance", "consecutive-frame debounce", "voice + buzzer + vibration"]},
                    {"h": "Technical decisions", "steps": [
                        {"t": "Haar over dlib's detector", "d": "A Haar cascade was chosen for face detection because it is far faster on the Pi's limited CPU than dlib's HOG detector, with accuracy that's good enough here."},
                        {"t": "Consecutive-frame debounce", "d": "The alarm only fires after EAR stays below threshold for N consecutive frames, removing the false alarms a single blink produced in the original."},
                        {"t": "Runs anywhere", "d": "The GPIO layer is abstracted; with no Pi hardware the same code runs on a laptop webcam and prints alerts to the console — develop and test with no hardware."}
                    ]},
                    {"h": "Honest limitations", "p": "Threshold-based, not a trained fatigue model; assumes a single frontal face; the EAR threshold is somewhat per-person; and it is a driver-assistance demonstrator, not a certified safety device."}
                ],
                "results": [
                    {"k": "Inference", "v": "On-device"},
                    {"k": "Connectivity", "v": "Offline"},
                    {"k": "Signals", "v": "EAR + yawn"}
                ],
                "note": "An open-source educational project. It contains no real secrets and no path hardcoded to a specific machine, and runs locally with no network."
            }
        }
    },
    {
        "id": "pixy-follow-robot",
        "categories": ["arduino", "robotics"],
        "featured": false,
        "image": "assets/images/pixy-follow-robot.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/pixy-follow-robot",
        "tags": ["Arduino", "C++", "Pixy2", "Computer Vision", "Robotics"],
        "title": {
            "ar": "روبوت التتبّع البصري (Pixy Follow Robot)",
            "en": "Pixy Follow Robot"
        },
        "desc": {
            "ar": "روبوتٌ بعجلتين يتتبّع جسمًا مدرَّبًا على لونه باستخدام كاميرا Pixy2 الذكية: تُنفّذ الرؤية على معالجها، ويحوّل الأردوينو موضع الكتلة وحجمها إلى قيادةٍ تفاضليةٍ عبر L298N ليُبقي الجسم في المنتصف وعلى مسافةٍ ثابتة.",
            "en": "A two-wheeled robot that follows a colour-trained object with a Pixy2 smart camera: vision runs on the camera, and the Arduino turns the block's position and size into differential drive through an L298N to keep the object centred and at a fixed distance."
        },
        "details": {
            "ar": "أُعيدت كتابة الكود إلى نسخةٍ نظيفةٍ ببلوك إعداداتٍ واحد: كل الأطراف والسرعة والمنطقة الميتة ومسافة المتابعة في الأعلى. يبحث الكود عن أكبر كتلةٍ مطابقةٍ للتوقيع المطلوب فلا يخطفه غبارٌ لونيٌّ عابر، وتأخذ التوجيه أولويةً على المسافة، ومع فترة سماحٍ عند فقد الهدف يتوقّف بأمان. أُزيلت كل الإشارات لأسماء أشخاصٍ أو علاماتٍ خارجيةٍ من النسخ القديمة.",
            "en": "The code was rewritten into a clean version with one config block: pins, speed, dead-zone, and follow distance all at the top. It locks onto the largest block matching the target signature so a stray colour speck can't hijack it, steering takes priority over distance, and a lost-target timeout stops it safely. All references to people's names or external brands from the old copies were removed."
        },
        "article": {
            "ar": {
                "lead": "روبوتٌ يُبقي جسمًا مختارًا في منتصف الكاميرا وعلى مسافةٍ ثابتة: Pixy2 ترى، والأردوينو يقود.",
                "sections": [
                    {"h": "الفكرة", "p": "كاميرا Pixy2 تتعلّم لونًا مرةً واحدة، ثم تُرسل موضع وحجم أكبر كتلةٍ مطابقة. يوجّه الأردوينو الروبوت نحو الموضع أفقيًّا، ويستخدم مساحة الكتلة كمؤشّرٍ على المسافة."},
                    {"h": "المعمارية", "flow": ["Pixy2 (CCC) تُرسل x وw وh", "الأردوينو يقرّر", "توجيهٌ حسب x", "تقدّم/تراجع حسب المساحة", "L298N يحرّك الموتورين"]},
                    {"h": "القرارات التقنية", "steps": [
                        {"t": "قفلٌ على أكبر كتلة", "d": "يمرّ الكود على كل الكتل ويختار الأكبر ذات التوقيع المطلوب، فلا يخدعه نقطةٌ لونيةٌ صغيرة."},
                        {"t": "منطقةٌ ميتةٌ للتوجيه", "d": "شريطٌ حول المنتصف يُعتبر 'مستقيمًا' يمنع التذبذب يمينًا ويسارًا، والتوجيه له أولويةٌ على المسافة."},
                        {"t": "المساحة كمسافة مع تباطؤ (Hysteresis)", "d": "المساحة المستهدفة مع هامشٍ حول القيمة تُبقي مسافةً ثابتةً دون اهتزازٍ متكرّرٍ للأمام والخلف."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "تتبّعٌ لونيٌّ تخدعه الألوان المتشابهة وتغيّر الإضاءة؛ المساحة ≈ المسافة تقريبيًّا؛ تحكّمٌ ثنائيٌّ لا PID فالحركة حادّةٌ قرب الحدود؛ وL298N للتعلّم لا لبناءٍ جادّ."}
                ],
                "results": [
                    {"k": "الرؤية", "v": "على الكاميرا"},
                    {"k": "القيادة", "v": "تفاضلية"},
                    {"k": "التوجيه", "v": "منطقةٌ ميتة"}
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية، بكودٍ أُعيدت كتابته وخالٍ من أي أسماء أشخاصٍ أو علاماتٍ خارجية."
            },
            "en": {
                "lead": "A robot that keeps a chosen object centred in the camera and at a fixed distance: Pixy2 sees, the Arduino drives.",
                "sections": [
                    {"h": "The idea", "p": "The Pixy2 learns a colour once, then streams the position and size of the largest matching block. The Arduino steers toward its horizontal position and uses the block's area as a distance proxy."},
                    {"h": "Architecture", "flow": ["Pixy2 (CCC) sends x, w, h", "Arduino decides", "steer by x", "forward/back by area", "L298N drives both motors"]},
                    {"h": "Technical decisions", "steps": [
                        {"t": "Lock on the largest block", "d": "The code scans all blocks and picks the largest one with the target signature, so a small colour speck can't fool it."},
                        {"t": "Steering dead-zone", "d": "A band around centre counts as 'straight' to stop left/right jitter, and steering takes priority over distance."},
                        {"t": "Area-as-distance with hysteresis", "d": "A target area plus a margin holds a steady follow distance without constant forward/back chatter."}
                    ]},
                    {"h": "Honest limitations", "p": "Colour tracking is fooled by similar colours and changing light; area ≈ distance is approximate; it's bang-bang control, not PID, so motion is abrupt near boundaries; and an L298N is for learning, not a serious build."}
                ],
                "results": [
                    {"k": "Vision", "v": "On-camera"},
                    {"k": "Drive", "v": "Differential"},
                    {"k": "Steering", "v": "Dead-zone"}
                ],
                "note": "An open-source educational project with rewritten code and no people's names or external brands."
            }
        }
    },
    {
        "id": "heartbeat-pulse-monitor",
        "categories": ["arduino", "iot"],
        "featured": false,
        "image": "assets/images/heartbeat-pulse-monitor.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/heartbeat-pulse-monitor",
        "tags": ["Arduino", "C++", "IR Sensor", "I2C LCD", "Biomedical"],
        "title": {
            "ar": "مِقياس نبض القلب (Heartbeat Pulse Monitor)",
            "en": "Heartbeat Pulse Monitor"
        },
        "desc": {
            "ar": "مِقياسٌ لمعدّل ضربات القلب بالأردوينو مع حسّاس نبضٍ ضوئي: يكتشف كل نبضةٍ كقمّةٍ في الإشارة ويحسب BPM من الزمن بين النبضتين، ويعرضها على شاشة I²C، ويُطلق جرسًا خارج النطاق الطبيعي.",
            "en": "An Arduino heart-rate monitor with an analog pulse sensor: it detects each beat as a signal peak, computes BPM from the time between beats, shows it on an I²C LCD, and beeps when the rate leaves the normal band."
        },
        "details": {
            "ar": "النسخة السابقة لم تكن تقيس نبضًا فعلًا؛ كانت تُسقِط قيمة الـ ADC خطيًّا على المدى 60–100، فكان 'الـ BPM' جهدًا مُعاد تحجيمه لا يعكس نبضةً حقيقية، كما كانت تُغذّي الحسّاس من أطرافٍ تناظريةٍ كمصدر جهد. تصلح هذه النسخة ذلك: كشفٌ حقيقيٌّ للنبضة على الحافة الصاعدة مع فترة خمولٍ تمنع العدّ المزدوج، وحساب BPM = 60000 / الزمن بين النبضتين، وتغذيةٌ سليمةٌ من 5V/GND، وبلوك إعداداتٍ واحد.",
            "en": "The earlier version did not actually measure a pulse; it mapped the raw ADC value linearly onto 60–100, so the 'BPM' was a rescaled voltage, and it powered the sensor from analog pins used as rails. This version fixes that: real beat detection on the rising edge with a refractory gate against double counts, BPM = 60000 / beat interval, proper 5V/GND power, and one config block."
        },
        "article": {
            "ar": {
                "lead": "مِقياسٌ يكتشف نبضات القلب فعليًّا ويحسب المعدّل من الزمن بينها — لا مجرد جهدٍ مُعاد تحجيمه كالنسخة القديمة.",
                "sections": [
                    {"h": "الفكرة", "p": "حسّاسٌ ضوئيٌّ رخيصٌ يلتقط تدفّق الدم في الإصبع؛ كل نبضةٍ قمّةٌ في الإشارة. نقيس الزمن بين قمّتين لنحسب معدّل الضربات."},
                    {"h": "المنطق المصحّح", "steps": [
                        {"t": "كشفٌ حقيقيٌّ للنبضة", "d": "تُسجَّل النبضة على الحافة الصاعدة عبر عتبة، مع فترة خمولٍ (Refractory) تمنع عدّ نبضةٍ واحدةٍ مرتين."},
                        {"t": "BPM من التوقيت", "d": "BPM = 60000 / الزمن بالمللي ثانية بين نبضتين — التعريف الفيزيائي الصحيح، لا جهدٌ مُعاد تحجيمه."},
                        {"t": "تغذيةٌ سليمة", "d": "يُوصَّل الحسّاس بـ 5V/GND الحقيقيين بدل أطرافٍ تناظريةٍ استُخدمت كمصدر جهدٍ في النسخة القديمة."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "ليس جهازًا طبيًّا؛ العتبة تعتمد على الحسّاس ويجب ضبطها؛ لا ترشيح بعد فالقراءة حسّاسةٌ للحركة وضوء البيئة؛ وBPM لحظيٌّ من فترةٍ واحدةٍ فيتذبذب — متوسّط عدّة فتراتٍ سيُنعّمه."}
                ],
                "results": [
                    {"k": "الكشف", "v": "قمم النبض"},
                    {"k": "المعدّل", "v": "من التوقيت"},
                    {"k": "العرض", "v": "شاشة I²C"}
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية، وليس جهازًا طبيًّا."
            },
            "en": {
                "lead": "A monitor that actually detects heartbeats and computes the rate from the time between them — not a rescaled voltage like the old version.",
                "sections": [
                    {"h": "The idea", "p": "A cheap optical sensor picks up blood flow in the fingertip; each beat is a peak in the signal. We time the gap between two peaks to compute the rate."},
                    {"h": "Corrected logic", "steps": [
                        {"t": "Real beat detection", "d": "A beat is registered on the rising edge across a threshold, with a refractory period so one beat isn't counted twice."},
                        {"t": "BPM from timing", "d": "BPM = 60000 / ms between beats — the physically correct definition, not a rescaled voltage."},
                        {"t": "Proper power", "d": "The sensor connects to real 5V/GND instead of analog pins used as power rails in the old version."}
                    ]},
                    {"h": "Honest limitations", "p": "Not a medical device; the threshold is sensor-dependent and must be tuned; no filtering yet so it's sensitive to motion and ambient light; and BPM is instantaneous from a single interval, so it jitters — averaging several intervals would smooth it."}
                ],
                "results": [
                    {"k": "Detection", "v": "Signal peaks"},
                    {"k": "Rate", "v": "From timing"},
                    {"k": "Display", "v": "I²C LCD"}
                ],
                "note": "An open-source educational project, not a medical device."
            }
        }
    },
    {
        "id": "voice-controlled-motor",
        "categories": ["arduino", "robotics"],
        "featured": false,
        "image": "assets/images/voice-controlled-motor.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/voice-controlled-motor",
        "tags": ["Arduino", "C++", "Voice Recognition", "I2C LCD", "HMI"],
        "title": {
            "ar": "موتور يُتحكَّم به بالصوت (Voice-Controlled Motor)",
            "en": "Voice-Controlled Motor"
        },
        "desc": {
            "ar": "تحكّمٌ في سرعة موتور DC بالأوامر الصوتية عبر وحدة Elechouse Voice Recognition V3 التي تتعرّف على الكلام على شريحتها؛ يربط الأردوينو كل أمرٍ بمستوى PWM ويعرض الحالة على شاشة I²C، مع عبارة مرورٍ لفتح النظام.",
            "en": "Control a DC motor's speed with spoken commands via an Elechouse Voice Recognition V3 module that recognises speech on-chip; the Arduino maps each command to a PWM level and shows the state on an I²C LCD, with a pass-phrase to unlock."
        },
        "details": {
            "ar": "أُعيدت هيكلة الكود إلى بلوك إعداداتٍ نظيفٍ (فهارس الأوامر المُدرَّبة، عنوان الشاشة، ومستويات PWM لكل سرعة) وآلة حالةٍ بسيطةٍ من حالتين: مقفول (يُقبل فيه نطق عبارة المرور فقط) ثم مفتوح (تُقبل أوامر السرعة). قول 'off' يوقف الموتور ويعيد القفل. التعرّف كلّه على شريحة الوحدة بلا سحابةٍ ولا إنترنت.",
            "en": "The code was refactored into a clean config block (trained-command indices, LCD address, per-speed PWM levels) and a simple two-state machine: locked (only the pass-phrase is accepted) then unlocked (speed commands accepted). Saying 'off' stops the motor and re-locks. Recognition runs entirely on the module's chip — no cloud, no internet."
        },
        "article": {
            "ar": {
                "lead": "قل عبارة المرور لفتح النظام، ثم مرّر أوامر السرعة صوتًا: on / low / medium / high، و off للإيقاف.",
                "sections": [
                    {"h": "الفكرة", "p": "وحدة تعرّفٍ صوتيٍّ تتعلّم أوامرك وتطابقها على شريحتها. يحوّل الأردوينو كل أمرٍ إلى مستوى PWM يقود الموتور، ويعرض الحالة على الشاشة."},
                    {"h": "المعمارية", "flow": ["كلامٌ → وحدة VR3 (مطابقةٌ على الشريحة)", "فهرس الأمر → الأردوينو", "PWM → مشغّل الموتور", "شاشة I²C تعرض الحالة"]},
                    {"h": "القرارات التقنية", "steps": [
                        {"t": "آلة حالةٍ من حالتين", "d": "مقفول يقبل عبارة المرور فقط، ومفتوح يقبل أوامر السرعة، وقول off يعيد القفل — منطقٌ واضحٌ سهل التتبّع."},
                        {"t": "بلوك إعداداتٍ واحد", "d": "فهارس الأوامر وعنوان الشاشة ومستويات PWM لكل سرعةٍ كلها في الأعلى بدل أرقامٍ متناثرة."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "'عبارة المرور' ليست أمانًا حقيقيًّا بل أمرٌ صوتيٌّ مُدرَّبٌ آخر يمنع التشغيل العرضي لا المتطفّلين؛ التعرّف يعتمد على المتحدّث والضوضاء تُضعفه؛ والمفردات ثابتةٌ على الأوامر المُدرَّبة؛ وأربع سرعاتٍ منفصلةٌ لا تحكّمٌ مغلق الحلقة."}
                ],
                "results": [
                    {"k": "التعرّف", "v": "على الشريحة"},
                    {"k": "السرعات", "v": "4 مستويات"},
                    {"k": "الحالة", "v": "شاشة I²C"}
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية بكودٍ أُعيدت هيكلته."
            },
            "en": {
                "lead": "Say the pass-phrase to unlock, then give speed commands by voice: on / low / medium / high, and off to stop.",
                "sections": [
                    {"h": "The idea", "p": "A voice-recognition module learns your commands and matches them on its own chip. The Arduino turns each command into a PWM level that drives the motor, and shows the state on the LCD."},
                    {"h": "Architecture", "flow": ["speech → VR3 module (on-chip match)", "command index → Arduino", "PWM → motor driver", "I²C LCD shows state"]},
                    {"h": "Technical decisions", "steps": [
                        {"t": "Two-state machine", "d": "Locked accepts only the pass-phrase, unlocked accepts speed commands, and saying off re-locks — clear, easy-to-follow logic."},
                        {"t": "One config block", "d": "Command indices, LCD address, and per-speed PWM levels are all at the top instead of scattered numbers."}
                    ]},
                    {"h": "Honest limitations", "p": "The 'pass-phrase' is not real security — it's just another trained voice command that gates accidental starts, not intruders; recognition is speaker-dependent and noise degrades it; the vocabulary is fixed to the trained commands; and it's four discrete speeds, not closed-loop control."}
                ],
                "results": [
                    {"k": "Recognition", "v": "On-chip"},
                    {"k": "Speeds", "v": "4 levels"},
                    {"k": "State", "v": "I²C LCD"}
                ],
                "note": "An open-source educational project with refactored code."
            }
        }
    },
    {
        "id": "vhdl-alarm-clock",
        "categories": ["digital-logic"],
        "featured": false,
        "image": "assets/images/vhdl-alarm-clock.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/vhdl-alarm-clock",
        "tags": ["VHDL", "FPGA", "RTL", "Digital Design", "GHDL"],
        "title": {
            "ar": "ساعةٌ رقميةٌ بمنبّه (VHDL Alarm Clock)",
            "en": "VHDL Alarm Clock"
        },
        "desc": {
            "ar": "ساعةٌ رقميةٌ عتاديةٌ بلغة VHDL لشريحة FPGA/CPLD: مقسّم ترددٍ عام يعطي نبضة 1 هرتز، وعدّاداتٌ بعرضٍ صحيحٍ تحفظ الثواني/الدقائق (0–59) والساعات (0–23)، ومنبّهٌ قابلٌ للضبط، وعرض 24/12 ساعة — مع منصّة اختبار.",
            "en": "A hardware digital clock in VHDL for an FPGA/CPLD: a generic clock divider gives a 1 Hz tick, correct-width counters keep seconds/minutes (0–59) and hours (0–23), a settable alarm, and 24/12-hour display — with a testbench."
        },
        "details": {
            "ar": "إعادة بناءٍ كاملةٍ لنسخةٍ سابقةٍ لم تكن تحفظ الوقت الحقيقي: كانت تخزّن الثواني/الدقائق/الساعات في إشاراتٍ بعرض 4-بت (حدّها 15) فتفيض عند 16 ولا تصل 59 أو 23، وكانت تزيد الثواني كل حافة ساعةٍ لا كل ثانية، وفيها جملٌ مبتورةٌ تمنع التصريف. النسخة الجديدة تصلح ذلك: عدّاداتٌ 6-بت/5-بت مع التفافٍ صحيح، ومقسّمٌ عامٌّ إلى 1 هرتز، وأوضاع ضبطٍ ومنبّهٍ نظيفةٌ بكشف حافةٍ للأزرار، ومنصّة اختبار GHDL تتحقّق من العدّ والالتفاف والمنبّه.",
            "en": "A from-scratch rebuild of an earlier version that could not keep real time: it stored seconds/minutes/hours in 4-bit signals (max 15) that overflow at 16 and never reach 59 or 23, incremented seconds every clock edge rather than every second, and had truncated statements that wouldn't compile. The new version fixes all of that: 6-bit/5-bit counters with correct rollover, a generic 1 Hz divider, clean set/alarm modes with edge-detected buttons, and a GHDL testbench that checks counting, rollover, and the alarm."
        },
        "article": {
            "ar": {
                "lead": "ساعةٌ رقميةٌ على FPGA تحفظ الوقت الحقيقي فعلًا وتُطلق منبّهًا في وقتٍ مضبوط — إعادة بناءٍ صحّحت أخطاءً جوهريةً في النسخة القديمة.",
                "sections": [
                    {"h": "الفكرة", "p": "وصف عتادٍ بلغة VHDL يحوّل ساعة اللوحة إلى نبضة 1 هرتز، ثم يعدّ الثواني والدقائق والساعات ويقارنها بوقت منبّهٍ مضبوط."},
                    {"h": "المنطق المصحّح", "steps": [
                        {"t": "عدّاداتٌ بعرضٍ كافٍ لـ 0–59", "d": "النسخة القديمة استخدمت 4-بت (حدّها 15) فكانت الساعة مستحيلةً بنيويًّا. الآن الثواني/الدقائق 6-بت والساعات 5-بت مع التفافٍ عند 59 و23."},
                        {"t": "قاعدة زمنٍ حقيقية", "d": "بدل زيادة الثواني كل حافة ساعة (ملايين 'الثواني' في الثانية)، يوفّر مقسّمٌ عامٌّ نبضة 1 هرتز فيتقدّم الوقت مرةً كل ثانيةٍ حقيقية."},
                        {"t": "كودٌ يُصرَّف", "d": "أُصلحت جملٌ مبتورةٌ كانت تمنع التصريف، وأُضيفت أوضاع ضبطٍ ومنبّهٍ نظيفةٌ بكشف حافةٍ للأزرار، وعرض 12/24 ساعة."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "المخارج ثنائيةٌ بلا فاكّ عرضٍ بعد (BCD→7-قطعة خطوةٌ تالية)؛ الأزرار مفترَضٌ إزالة ارتدادها؛ واجهة الضبط بسيطةٌ بزر زيادةٍ لكل حقل؛ ولا بطارية/RTC فيُصفَّر الوقت عند انقطاع الطاقة."}
                ],
                "results": [
                    {"k": "قاعدة الزمن", "v": "مقسّم 1 هرتز"},
                    {"k": "العدّادات", "v": "0–59 / 0–23"},
                    {"k": "التحقّق", "v": "منصّة GHDL"}
                ],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية بكودٍ أُعيد بناؤه وتصحيحه."
            },
            "en": {
                "lead": "A digital clock on an FPGA that actually keeps real time and rings an alarm at a set time — a rebuild that fixed structural errors in the old version.",
                "sections": [
                    {"h": "The idea", "p": "A hardware description in VHDL turns the board clock into a 1 Hz tick, then counts seconds, minutes, and hours and compares them against a set alarm time."},
                    {"h": "Corrected logic", "steps": [
                        {"t": "Counters wide enough for 0–59", "d": "The old version used 4-bit signals (max 15), making the clock structurally impossible. Now seconds/minutes are 6-bit and hours 5-bit, with rollover at 59 and 23."},
                        {"t": "A real time base", "d": "Instead of incrementing seconds every clock edge (millions of 'seconds' per second), a generic divider provides a 1 Hz tick so time advances once per real second."},
                        {"t": "Code that compiles", "d": "Truncated statements that blocked compilation were fixed, clean set/alarm modes with edge-detected buttons were added, plus 12/24-hour display."}
                    ]},
                    {"h": "Honest limitations", "p": "Outputs are binary with no display decoder yet (BCD → 7-segment is the next step); buttons are assumed debounced; the setting UI is simple (one increment button per field); and there's no battery/RTC backup, so time resets on power loss."}
                ],
                "results": [
                    {"k": "Time base", "v": "1 Hz divider"},
                    {"k": "Counters", "v": "0–59 / 0–23"},
                    {"k": "Verification", "v": "GHDL testbench"}
                ],
                "note": "An open-source educational project with rebuilt, corrected code."
            }
        }
    },
    {
        "id": "rpi-biometric-access",
        "categories": ["python-ai", "raspberrypi"],
        "featured": false,
        "image": "assets/images/rpi-biometric-access.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/rpi-biometric-access",
        "tags": ["Python", "face_recognition", "Raspberry Pi", "Fingerprint", "Access Control"],
        "title": {
            "ar": "تحكّم وصولٍ بيومتري على Raspberry Pi",
            "en": "Raspberry Pi Biometric Access"
        },
        "desc": {
            "ar": "نظام تحكّمٍ في الوصول متعدّد العوامل على Raspberry Pi يجمع التعرّف على الوجه (face_recognition/dlib) وبصمةً ضوئيةً عبر UART ورمزًا رقميًّا احتياطيًّا — أي عاملٍ مُتعرَّفٍ عليه يمنح الوصول، وكله على الجهاز وأوفلاين.",
            "en": "A multi-factor access-control system on a Raspberry Pi combining face recognition (face_recognition/dlib), an optical fingerprint over UART, and a numeric passcode fallback — any recognised factor grants access, all on-device and offline."
        },
        "details": {
            "ar": "كانت النسخة الأصلية سكربتًا واحدًا فوضويًّا فيه أسماء أشخاصٍ ورموزٌ مكتوبةٌ صراحةً ومنطقٌ مكسور. أُعيدت هيكلته: أُزيلت كل الهويات الثابتة وتُحمَّل المستخدمون الآن من ملف users.json مُستبعَدٍ من git، وقُسِّم لعوامل نظيفةٍ قابلةٍ للاختبار (وجه/بصمة/رمز)، وأُصلح المنطق، وصار العتاد اختياريًّا مع بديلٍ على كاميرا اللابتوب.",
            "en": "The original was a single messy script with real names and passcodes hardcoded and broken control flow. It was refactored: all fixed identities removed (users now load from a git-ignored users.json), split into clean testable factors (face/fingerprint/passcode), the flow fixed, and the hardware made optional with a laptop-webcam fallback."
        },
        "article": {
            "ar": {
                "lead": "أي عاملٍ من ثلاثة — وجهٌ أو بصمةٌ أو رمز — يفتح الوصول ويحدّد المستخدم، على الجهاز وبلا إنترنت.",
                "sections": [
                    {"h": "الفكرة", "p": "تحكّمٌ في الوصول لا يعتمد على عاملٍ واحد: يتعرّف على الوجه حيًّا، ويقرأ بصمةً من وحدةٍ ضوئية، ويقبل رمزًا رقميًّا كاحتياط — أي عاملٍ ناجحٍ يمنح الدخول."},
                    {"h": "المعمارية", "flow": ["كاميرا → متجهات وجهٍ 128-بُعد → مطابقة", "وحدة بصمةٍ عبر UART", "رمزٌ من users.json", "أي عاملٍ ناجح → دخول + تحديد الهوية"]},
                    {"h": "ما الذي نُظِّف", "steps": [
                        {"t": "إزالة الهويات الثابتة", "d": "بدل أسماءٍ ورموزٍ مكتوبةٍ في الكود، تُحمَّل من users.json المُستبعَد من git، مع نسخة users.example.json نائبة."},
                        {"t": "عوامل نظيفة", "d": "FaceRecognizer وFingerprintReader ومسار الرمز وحداتٌ منفصلةٌ قابلةٌ للاختبار."},
                        {"t": "عتادٌ اختياري", "d": "البصمة وكاميرا الـ Pi تُكتشفان تلقائيًّا؛ على لابتوب يعمل على كاميرا ويب."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "عرضٌ توضيحيٌّ لا منتج أمان: مسار الرمز نصيٌّ صريح وبلا كشف حياةٍ فقد تخدع صورةٌ عامل الوجه؛ ودقة الوجه تعتمد على الإضاءة والتسجيل؛ والبصمة تحتاج الوحدة الفعلية."}
                ],
                "results": [{"k": "العوامل", "v": "وجه+بصمة+رمز"}, {"k": "المعالجة", "v": "على الجهاز"}, {"k": "الاتصال", "v": "أوفلاين"}],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. الهويات والرموز في users.json المُستبعَد من git، وصور الوجوه والنموذج المُدرَّب مُستبعَدةٌ أيضًا كبياناتٍ شخصية."
            },
            "en": {
                "lead": "Any one of three factors — face, fingerprint, or passcode — unlocks access and names the user, on-device and offline.",
                "sections": [
                    {"h": "The idea", "p": "Access control that doesn't rely on a single factor: it recognises a face live, reads a fingerprint from an optical module, and accepts a numeric passcode as backup — any successful factor grants entry."},
                    {"h": "Architecture", "flow": ["camera → 128-d face embeddings → match", "fingerprint module over UART", "passcode from users.json", "any success → entry + identify"]},
                    {"h": "What was cleaned up", "steps": [
                        {"t": "Removed fixed identities", "d": "Instead of names/passcodes hardcoded, users load from a git-ignored users.json with a users.example.json placeholder."},
                        {"t": "Clean factors", "d": "FaceRecognizer, FingerprintReader, and the passcode path are separate, testable units."},
                        {"t": "Optional hardware", "d": "Fingerprint and the Pi camera auto-detect; on a laptop it runs on a webcam."}
                    ]},
                    {"h": "Honest limitations", "p": "A demonstrator, not a security product: the passcode path is plaintext and there's no liveness check, so a photo can spoof the face factor; face accuracy depends on lighting/enrolment; the fingerprint needs the physical module."}
                ],
                "results": [{"k": "Factors", "v": "face+finger+code"}, {"k": "Inference", "v": "On-device"}, {"k": "Connectivity", "v": "Offline"}],
                "note": "An open-source educational project. Identities and passcodes live in a git-ignored users.json; face photos and the trained model are also excluded as personal data."
            }
        }
    },
    {
        "id": "dual-axis-solar-tracker",
        "categories": ["arduino", "iot"],
        "featured": false,
        "image": "assets/images/dual-axis-solar-tracker.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/dual-axis-solar-tracker",
        "tags": ["Arduino", "C++", "LDR", "Servo", "Renewable Energy"],
        "title": {"ar": "متعقّب شمسيٌّ ثنائي المحور", "en": "Dual-Axis Solar Tracker"},
        "desc": {
            "ar": "متعقّب شمسيٌّ ثنائي المحور: أربع مقاوماتٍ ضوئيةٍ في أركان اللوح وموتوران سيرفو يميلان اللوح حتى يواجه الشمس، بموازنة زوجَي الأعلى/الأسفل واليسار/اليمين.",
            "en": "A two-axis solar tracker: four corner LDRs and two servos tilt the panel to face the sun by balancing the top/bottom and left/right LDR pairs."
        },
        "details": {
            "ar": "النسخة الأصلية أعادت استخدام طرفٍ تناظريٍّ واحدٍ لركنَين مختلفَين (فصارت قراءتان نفس الإشارة وتعذّر حسم محور)، وتركت طرفًا بلا استخدام. هذه النسخة تعطي كل ركنٍ طرفَه (A0–A3)، وتضيف نطاق تسامحٍ وحدود constrain، وتضع كل الأطراف والمديات في بلوك إعداداتٍ واحد.",
            "en": "The original reused one analog pin for two different corners (two readings became the same signal, so one axis couldn't resolve) and left another pin unused. This version gives each corner its own pin (A0–A3), adds a tolerance band and constrain() limits, and puts all pins and ranges in one config block."
        },
        "article": {
            "ar": {
                "lead": "أربع مقاوماتٍ ضوئيةٍ تخبر أين الشمس، وموتوران يميلان اللوح نحوها حتى تتوازن الأركان — بعد تصحيح خطأ طرفٍ مكرّر.",
                "sections": [
                    {"h": "الفكرة", "p": "أركان اللوح الأربعة تستشعر الضوء؛ موازنة الأعلى/الأسفل تحرّك الارتفاع، والموازنة يسار/يمين تحرّك السمت، حتى يواجه اللوح الشمس."},
                    {"h": "المنطق المصحّح", "steps": [
                        {"t": "طرفٌ لكل ركن", "d": "كل LDR على A0–A3 بدل مشاركة A1 بين ركنَين كما في الأصل."},
                        {"t": "نطاق تسامح", "d": "يتجاهل الفروق الصغيرة فلا يهتزّ السيرفو عند التوازن."},
                        {"t": "حدود آمنة", "d": "constrain يبقي كل محورٍ ضمن مداه."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "الاتجاه يعتمد على توصيل الـ LDR فقد تحتاج قلب إشارة خطوةٍ مرة؛ تحكّمٌ ثنائيٌّ لا PID؛ بلا وضع ليلٍ بعد؛ وسيرفوهات صغيرةٌ للعرض لا للوحٍ ثقيل."}
                ],
                "results": [{"k": "المحاور", "v": "2 (سمت+ارتفاع)"}, {"k": "الحسّاسات", "v": "4 LDR"}, {"k": "التشغيل", "v": "سيرفو"}],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية بكودٍ صُحِّح ونُظِّف."
            },
            "en": {
                "lead": "Four LDRs report where the sun is and two servos tilt the panel toward it until the corners balance — after fixing a duplicate-pin bug.",
                "sections": [
                    {"h": "The idea", "p": "The panel's four corners sense light; balancing top/bottom drives elevation and left/right drives azimuth until the panel faces the sun."},
                    {"h": "Corrected logic", "steps": [
                        {"t": "A pin per corner", "d": "Each LDR on A0–A3 instead of sharing A1 across two corners as in the original."},
                        {"t": "Tolerance band", "d": "Ignores tiny differences so the servos don't buzz when balanced."},
                        {"t": "Safe limits", "d": "constrain() keeps each axis within range."}
                    ]},
                    {"h": "Honest limitations", "p": "Direction depends on LDR wiring (you may flip a step sign once); bang-bang control, not PID; no night park yet; small servos suit a demo panel, not a heavy one."}
                ],
                "results": [{"k": "Axes", "v": "2 (az+el)"}, {"k": "Sensors", "v": "4 LDR"}, {"k": "Actuation", "v": "Servos"}],
                "note": "An open-source educational project with corrected, cleaned code."
            }
        }
    },
    {
        "id": "arduino-fft-frequency-detector",
        "categories": ["arduino"],
        "featured": false,
        "image": "assets/images/arduino-fft-frequency-detector.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/arduino-fft-frequency-detector",
        "tags": ["Arduino", "C++", "FFT", "DSP", "Signal Processing"],
        "title": {"ar": "كاشف تردّدٍ بتحويل فورييه (FFT)", "en": "Arduino FFT Frequency Detector"},
        "desc": {
            "ar": "يأخذ عيّناتٍ من حسّاس صوت ويُجري FFT حقيقيًّا ليقرأ التردّد المهيمن بالهرتز مباشرةً، مع إنذار تردّدٍ مستهدفٍ اختياريّ يُضيء LED داخل نطاقٍ محدّد.",
            "en": "Samples a sound sensor and runs a real FFT to read the dominant frequency in Hz live, with an optional target-tone alarm that lights an LED inside a chosen band."
        },
        "details": {
            "ar": "النسخة الأصلية كانت تُغذّي الحسّاس عبر طرفَين تناظريَّين كمصدر جهد — حيلةٌ هشّة. هذه النسخة تُوصّله بـ 5V/GND الحقيقيين، وتضيف بلوك إعداداتٍ (معدّل العيّنات، الأطراف، النطاق المستهدف)، وإنذار تردّدٍ مستهدفٍ بفحص عتبةٍ نظيف. مبنيٌّ على مكتبة arduinoFFT مع حدّ نايكويست.",
            "en": "The original powered the sensor from two analog pins used as VCC/GND — a fragile hack. This version wires it to real 5V/GND, adds a config block (sampling rate, pins, target band), and a clean target-tone alarm. Built on arduinoFFT with the Nyquist limit."
        },
        "article": {
            "ar": {
                "lead": "صافرةٌ أو نغمةٌ تدخل الميكروفون فيخرج ترددها بالهرتز فورًا — مع إنذارٍ عند نطاقٍ مستهدف.",
                "sections": [
                    {"h": "الفكرة", "p": "أخذ عيّناتٍ بمعدّلٍ ثابت ثم FFT لإيجاد القمّة الطيفية = التردّد المهيمن. النطاق المُتاح حتى نصف معدّل العيّنات (نايكويست)."},
                    {"h": "المعمارية", "flow": ["حسّاس صوت (A0)", "أخذ عيّنات @ Fs", "نافذة Hamming", "FFT + قدر", "MajorPeak → هرتز", "داخل النطاق؟ → LED"]},
                    {"h": "ما الذي نُظِّف", "steps": [
                        {"t": "تغذيةٌ سليمة", "d": "5V/GND الحقيقيين بدل تشغيل الحسّاس من أطرافٍ تناظرية."},
                        {"t": "بلوك إعدادات", "d": "عدد العيّنات ومعدّلها والأطراف والنطاق المستهدف في الأعلى."},
                        {"t": "إنذار تردّد", "d": "LED يُضيء عندما تقع القمّة داخل [منخفض، مرتفع]."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "محدودٌ بنايكويست؛ خاناتٌ خشنة (Fs/عدد العيّنات)؛ أخذ عيّناتٍ برمجيّ التوقيت غير دقيقٍ للمعدّلات العالية؛ وقمّةٌ مهيمنةٌ واحدةٌ لا طيفٌ كامل."}
                ],
                "results": [{"k": "التحويل", "v": "FFT 128"}, {"k": "المدى", "v": "حتى Fs/2"}, {"k": "الإنذار", "v": "نطاقٌ مستهدف"}],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية مبنيٌّ على مكتبة arduinoFFT المنسوبة لأصحابها."
            },
            "en": {
                "lead": "A whistle or tone into the mic and its frequency comes out in Hz instantly — with an alarm when it lands in a target band.",
                "sections": [
                    {"h": "The idea", "p": "Sample at a fixed rate, then FFT to find the spectral peak = dominant frequency. Range is up to half the sampling rate (Nyquist)."},
                    {"h": "Architecture", "flow": ["sound sensor (A0)", "sample @ Fs", "Hamming window", "FFT + magnitude", "MajorPeak → Hz", "in band? → LED"]},
                    {"h": "What was cleaned up", "steps": [
                        {"t": "Proper power", "d": "Real 5V/GND instead of powering the sensor from analog pins."},
                        {"t": "Config block", "d": "Samples, sampling rate, pins, and target band at the top."},
                        {"t": "Target-tone alarm", "d": "LED lights when the peak lands inside [low, high]."}
                    ]},
                    {"h": "Honest limitations", "p": "Nyquist-limited; coarse bins (Fs/samples); software-timed sampling is imprecise at high rates; and it reports a single dominant peak, not a full spectrum."}
                ],
                "results": [{"k": "Transform", "v": "FFT 128"}, {"k": "Range", "v": "up to Fs/2"}, {"k": "Alarm", "v": "target band"}],
                "note": "An open-source educational project built on the arduinoFFT library, credited to its authors."
            }
        }
    },
    {
        "id": "keypad-countdown-timer",
        "categories": ["arduino"],
        "featured": false,
        "image": "assets/images/keypad-countdown-timer.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/keypad-countdown-timer",
        "tags": ["Arduino", "C++", "Keypad", "I2C LCD", "Relay"],
        "title": {"ar": "مؤقّت عدٍّ تنازليٍّ بكيباد", "en": "Keypad Countdown Timer"},
        "desc": {
            "ar": "مؤقّت عدٍّ تنازليٍّ: اكتب الوقت HHMMSS على كيباد واضغط # للبدء، فيبقى طرف التحكّم (ريلاي/حِمل) مرتفعًا أثناء العدّ على شاشة I²C ثم ينخفض عند الصفر، و* للمسح.",
            "en": "A countdown timer: type HHMMSS on a keypad and press # to start; a control pin (relay/load) stays HIGH while it counts down on an I²C LCD, then LOW at zero; * clears."
        },
        "details": {
            "ar": "النسخة الأصلية كانت تستدعي loop() تعاوديًّا (خطر مكدس) وتضع الكيباد على طرفَي المنفذ التسلسلي (0/1). هذه النسخة تستخدم آلة حالةٍ غير حاجبةٍ نظيفة، ونبضة ثانيةٍ مبنيةٍ على millis() بلا تعطيل، وتُبقي طرفَي التسلسل فارغَين، وتُترجم التعليقات للإنجليزية.",
            "en": "The original called loop() recursively (a stack risk) and put the keypad on the hardware-serial pins (0/1). This version uses a clean non-blocking state machine, a millis()-based one-second tick with no delay() stalls, keeps the serial pins free, and translates the comments to English."
        },
        "article": {
            "ar": {
                "lead": "اكتب الوقت، اضغط #، فيعمل الحِمل حتى ينتهي العدّ — بمنطقٍ نظيفٍ غير حاجب.",
                "sections": [
                    {"h": "الفكرة", "p": "إدخال HHMMSS بإزاحة الأرقام في مخزن، تحويلها لثوانٍ، ثم عدٌّ تنازليٌّ بنبضة millis() مع تشغيل طرف تحكّمٍ أثناء العمل."},
                    {"h": "ما الذي نُظِّف", "steps": [
                        {"t": "بلا loop تعاودي", "d": "آلة حالةٍ ENTERING→RUNNING→IDLE بدل استدعاء loop() نفسه."},
                        {"t": "توقيتٌ غير حاجب", "d": "نبضة ثانيةٍ من millis() بلا delay() يوقف النظام."},
                        {"t": "أطرافٌ آمنة", "d": "الكيباد بعيدٌ عن طرفَي التسلسل 0/1."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "أقصى 99:59:59؛ بلا تحقّقٍ من الإدخال؛ ساعةٌ برمجيةٌ تنحرف قليلًا على المدى الطويل؛ بدّل الأحمال عبر ريلاي مناسب."}
                ],
                "results": [{"k": "الإدخال", "v": "كيباد HHMMSS"}, {"k": "التوقيت", "v": "millis()"}, {"k": "الخرج", "v": "ريلاي/حِمل"}],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية بكودٍ نُظِّف وتُرجم."
            },
            "en": {
                "lead": "Type the time, press #, and the load runs until the count ends — with clean, non-blocking logic.",
                "sections": [
                    {"h": "The idea", "p": "Shift HHMMSS digits into a buffer, convert to seconds, then count down on a millis() tick while a control pin drives a load."},
                    {"h": "What was cleaned up", "steps": [
                        {"t": "No recursive loop", "d": "An ENTERING→RUNNING→IDLE state machine instead of calling loop() itself."},
                        {"t": "Non-blocking timing", "d": "A one-second millis() tick with no delay() stalling the system."},
                        {"t": "Safe pins", "d": "The keypad is kept off the serial pins 0/1."}
                    ]},
                    {"h": "Honest limitations", "p": "Max 99:59:59; no input validation; a software clock that drifts slightly over long periods; switch real loads through a proper relay."}
                ],
                "results": [{"k": "Input", "v": "keypad HHMMSS"}, {"k": "Timing", "v": "millis()"}, {"k": "Output", "v": "relay/load"}],
                "note": "An open-source educational project with cleaned and translated code."
            }
        }
    },
    {
        "id": "keypad-door-lock",
        "categories": ["arduino", "iot"],
        "featured": false,
        "image": "assets/images/keypad-door-lock.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/keypad-door-lock",
        "tags": ["Arduino", "C++", "Keypad", "Servo", "Access Control"],
        "title": {"ar": "قفل بابٍ بكيباد", "en": "Keypad Door Lock"},
        "desc": {
            "ar": "قفل بابٍ محميٌّ بكلمة مرور: رمزٌ صحيحٌ يفتح مزلاج سيرفو ويعرض ترحيبًا على شاشة I²C ثم يعيد القفل، وثلاث محاولاتٍ خاطئةٍ متتالية تُطلق جرس إنذار، مع إخفاء الأرقام كـ *.",
            "en": "A password door lock: a correct code drives a servo latch open and shows a welcome on an I²C LCD then re-locks, while three wrong tries in a row trigger a buzzer alarm; digits are masked as *."
        },
        "details": {
            "ar": "أُعيدت هيكلته إلى بلوك إعداداتٍ (كلمة المرور كقيمةٍ نائبةٍ تُغيَّر، الأطراف، الزوايا، عدد المحاولات، ومدّة الفتح) وإدخالٍ مُدارٍ بالأحداث عبر مستمع الكيباد، مع مزلاج سيرفو حقيقيٍّ بدل مجرد LED، وقفلٍ تلقائيٍّ بعد مهلة.",
            "en": "Refactored into a config block (password as a placeholder to change, pins, angles, max tries, unlock duration) and event-driven input via the keypad listener, with a real servo latch instead of just an LED and an automatic re-lock after a timeout."
        },
        "article": {
            "ar": {
                "lead": "رمزٌ صحيحٌ يفتح المزلاج ويرحّب، وثلاث محاولاتٍ خاطئةٍ تُطلق الإنذار.",
                "sections": [
                    {"h": "الفكرة", "p": "إدخالٌ مُدارٌ بالأحداث: تُضاف الأرقام للكلمة (مُخفاةً كـ *)، و# يتحقّق: صحيحٌ → فتح سيرفو + ترحيب ثم قفل؛ خاطئٌ → رسالة، والثالث → جرس."},
                    {"h": "المزايا", "steps": [
                        {"t": "مزلاج سيرفو", "d": "يفتح عند النجاح ويعيد القفل تلقائيًّا بعد مهلة."},
                        {"t": "إنذار ثلاث محاولات", "d": "الجرس يُطلق بعد MAX_TRIES محاولاتٍ خاطئة."},
                        {"t": "بلوك إعدادات", "d": "كلمة المرور والأطراف والزوايا وعدد المحاولات والمهلة في الأعلى."}
                    ]},
                    {"h": "حدودٌ صادقة", "p": "أمان راحةٍ لا أمانٍ قوي: الرمز نصيٌّ في الفلاش، والمزلاج ليس تُرسًا حقيقيًّا؛ بلا رموزٍ لكل مستخدمٍ أو سجل؛ واستخدم مزلاجًا آمنًا عند الفشل للأبواب الحقيقية."}
                ],
                "results": [{"k": "الفتح", "v": "مزلاج سيرفو"}, {"k": "الإنذار", "v": "3 محاولات"}, {"k": "الإدخال", "v": "مُخفى *"}],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. كلمة المرور قيمةٌ نائبةٌ تُغيَّر، والمكتبات الطرفية منسوبةٌ لأصحابها."
            },
            "en": {
                "lead": "A correct code opens the latch and welcomes you; three wrong tries raise the alarm.",
                "sections": [
                    {"h": "The idea", "p": "Event-driven input: digits append to the Password (masked as *), and # evaluates: correct → servo unlock + welcome then re-lock; wrong → message, and the third → buzzer."},
                    {"h": "Features", "steps": [
                        {"t": "Servo latch", "d": "Opens on success and auto-relocks after a timeout."},
                        {"t": "3-strike alarm", "d": "The buzzer fires after MAX_TRIES wrong attempts."},
                        {"t": "Config block", "d": "Password, pins, angles, tries, and timeout at the top."}
                    ]},
                    {"h": "Honest limitations", "p": "Convenience security, not strong: the code is plaintext in flash and a servo latch isn't a real deadbolt; no per-user codes or log; use a fail-secure latch for real doors."}
                ],
                "results": [{"k": "Unlock", "v": "servo latch"}, {"k": "Alarm", "v": "3 strikes"}, {"k": "Input", "v": "masked *"}],
                "note": "An open-source educational project. The password is a placeholder to change; the third-party libraries are credited to their authors."
            }
        }
    },
    {
        "id": "smart-safety-bicycle",
        "categories": ["arduino", "iot", "robotics"],
        "featured": false,
        "image": "assets/images/smart-safety-bicycle.png",
        "demoUrl": "",
        "codeUrl": "https://github.com/eahmeddarwish/smart-safety-bicycle",
        "tags": ["Arduino", "GPS", "GSM", "IoT", "Wearable Safety"],
        "title": {"ar": "درّاجةٌ ذكيةٌ للسلامة", "en": "Smart Safety Bicycle"},
        "desc": {
            "ar": "نظام سلامةٍ لراكب الدرّاجة من ست وحدات: GPS للموقع، وGSM لإرسال تنبيهٍ برسالة، ومقياس تسارعٍ يُسجَّل على SD، ومقياس أكسجة نبض، وفوق صوتيٍّ للاقتراب الخلفي، وتنبيهٍ LED واهتزاز.",
            "en": "A rider-safety system built from six modules: GPS location, a GSM link for SMS alerts, an accelerometer logged to SD, a pulse-oximeter, an ultrasonic rear-approach warning, and an LED + vibration alert."
        },
        "details": {
            "ar": "كل وحدةٍ مُقدَّمةٌ كسكتش أردوينو مُختبَرٍ مستقل (GPS، GSM، تسجيل تسارع، أكسجة، فوق صوتي، تنبيه لمسي)، بعد تنظيفٍ وإضافة عتباتٍ وأطرافٍ واضحة. الدمج في فيرموير واحدٍ وكشف الاصطدام الفعلي مذكوران بصدقٍ كخطواتٍ تالية لا كأمرٍ منجَز.",
            "en": "Each subsystem is provided as its own tested Arduino sketch (GPS, GSM, accelerometer logging, oximeter, ultrasonic, haptic alert), after cleanup and clear thresholds/pins. Integrating them into one firmware and actual crash detection are stated honestly as next steps, not as done."
        },
        "article": {
            "ar": {
                "lead": "تعرف أين الراكب، وتحذّره من سيارةٍ خلفه، وتراقب مؤشّراته، وتُسجّل الحركة — بستّ وحداتٍ مُختبَرة.",
                "sections": [
                    {"h": "الفكرة", "p": "سلامة الراكب: GPS للموقع، فوق صوتيٌّ يحذّر من اقترابٍ خلفيٍّ باهتزاز، أكسجةٌ للمؤشّرات، وتسجيل حركةٍ يمهّد لكشف اصطدامٍ يرسل الموقع بـ SMS."},
                    {"h": "الوحدات", "flow": ["GPS → موقع", "GSM (SIM800) → SMS", "تسارع ثلاثي → SD", "أكسجة نبض (MAX3010x)", "فوق صوتي → تحذير < 60سم", "LED + اهتزاز"]},
                    {"h": "بصدق: الحالة", "p": "الوحدات مُختبَرةٌ منفصلةً؛ دمجها على لوحةٍ واحدة (توزيع الأطراف والتوقيت) ومنطق كشف الاصطدام الذي يرسل SMS عملٌ مستقبليٌّ صريحٌ في الخارطة."},
                    {"h": "حدودٌ صادقة", "p": "ليس فيرموير مُدمجًا بعد؛ كشف الاصطدام غير مُنفَّذ (الوحدة تُسجّل فقط)؛ GSM يحتاج شريحةً حيّةً ورقمك أنت؛ ومؤشّرات الأكسجة إرشاديةٌ لا طبية."}
                ],
                "results": [{"k": "الوحدات", "v": "6"}, {"k": "الاتصال", "v": "GPS+GSM"}, {"k": "الحالة", "v": "دمجٌ قيد العمل"}],
                "note": "مشروعٌ مفتوح المصدر لأغراضٍ تعليمية. لا رقم هاتفٍ حقيقيٍّ مرفوع (ALERT_NUMBER قيمةٌ نائبة)، والمكتبات الطرفية منسوبةٌ لأصحابها."
            },
            "en": {
                "lead": "It knows where the rider is, warns of a car behind, watches their vitals, and logs motion — with six tested modules.",
                "sections": [
                    {"h": "The idea", "p": "Rider safety: GPS for location, ultrasonic warns of a rear approach via haptics, an oximeter for vitals, and motion logging that lays the groundwork for crash detection that texts the location via SMS."},
                    {"h": "Modules", "flow": ["GPS → location", "GSM (SIM800) → SMS", "3-axis accel → SD", "pulse-oximeter (MAX3010x)", "ultrasonic → warn < 60 cm", "LED + vibration"]},
                    {"h": "Honestly: the status", "p": "The modules are tested separately; merging them onto one board (pin budget, timing) and the crash-detection logic that sends an SMS are explicit future work in the roadmap."},
                    {"h": "Honest limitations", "p": "Not an integrated firmware yet; crash detection is not implemented (the module only logs); GSM needs a live SIM and your own number; and the oximeter vitals are indicative, not medical."}
                ],
                "results": [{"k": "Modules", "v": "6"}, {"k": "Connectivity", "v": "GPS+GSM"}, {"k": "Status", "v": "integration WIP"}],
                "note": "An open-source educational project. No real phone number is committed (ALERT_NUMBER is a placeholder); the third-party libraries are credited to their authors."
            }
        }
    }
];

if (typeof window !== "undefined") { window.projectsData = projectsData; }
if (typeof module !== "undefined" && module.exports) { module.exports = projectsData; }
