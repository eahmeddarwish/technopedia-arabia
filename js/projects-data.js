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
   ========================================================================== */

const projectsData = [{
        id: "voice-chess-pro",
        categories: ["python-ai"],
        featured: true,
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
    },
    {
        id: "universal-market-predictor-deluxe",
        categories: ["python-ai"],
        featured: true,
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
            ar: "تطوير كامل لمشروع متنبئ الأسواق الأصلي: بدل نموذج منفصل لكل سهم، نموذج LSTM واحد مشترك بـembeddings خاصة لكل تكر يغطي أمريكا والخليج والمملكة المتحدة وألمانيا واليابان وهونج كونج والهند والعملات الرقمية. الهدف هو النسبة المئوية للعائد بدل السعر المُقيّس، لتفادي مشاكل الاستقراء على الأسهم شديدة الاتجاه. كل تنبؤ يُقارن بخط أساس بسيط (naive persistence) مع اختبار ثنائي الحدين (binomial test) وفاصل ثقة Wilson 95% على دقة الاتجاه، بدل الاكتفاء بنسبة دقة مجردة قد تكون مجرد صدفة إحصائية. القيود موثّقة بصراحة في الـREADME، بما فيها الأماكن اللي النموذج فيها لسه ما بيهزمش رمي العملة.",
            en: "A full evolution of the original Universal Market Predictor: instead of a separate model per ticker, one shared LSTM backbone with per-ticker embeddings covers US, Gulf/MENA, UK, Germany, Japan, Hong Kong, India markets, and major cryptocurrencies. The prediction target is percentage return rather than a scaled price, avoiding extrapolation failures on strongly-trending stocks. Every forecast is benchmarked against a naive persistence baseline with a binomial significance test and a 95% Wilson confidence interval on directional accuracy — rather than trusting a raw accuracy percentage that could just be statistical noise. Limitations are documented honestly in the README, including where the model currently does not beat a coin flip.",
        },
    },
    {
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
            ar: "موديل YOLOv5s مُدرَّب على 40,000+ صورة (99% mAP@0.5)، مُصدَّر لـ ONNX للاستدلال على CPU. نظام التتبع بيدمج فلتر كالمان (للتنبؤ بموقع الطائرة بين الفريمات) مع وحدة تحكم PID لكل محور، بتحرّك موتوري سيرفو عبر PCA9685 عشان تفضل الطائرة في منتصف الكاميرا. يعمل بمعدل 15-20 إطار/ثانية على Raspberry Pi 4 عادي.",
            en: "A YOLOv5s model trained on 40,000+ images (99% mAP@0.5), exported to ONNX for CPU inference. The tracking loop combines a Kalman filter (predicting the drone's position between frames) with a per-axis PID controller driving two pan/tilt servos via a PCA9685, keeping the drone centered in frame. Runs at 15–20 FPS on a stock Raspberry Pi 4.",
        },
    },
    {
        id: "adsb-flight-tracker",
        categories: ["iot", "python-ai"],
        featured: false,
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
            ar: "يستقبل إشارات ADS-B الحقيقية على 1090MHz عبر dump1090، ويعرضها على واجهة رادار حية ببصمة كلاسيكية. الديمو المباشر بيشتغل بمحاكاة داخل المتصفح؛ النسخة الكاملة بتدعم هاردوير حقيقي.",
            en: "Receives real ADS-B signals at 1090MHz via dump1090 and renders them on a live radar-style dashboard. The live demo runs a browser-side simulation; the full version supports real hardware."
        }
    },
    {
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
    },
    {
        id: "visual-trigger-studio",
        categories: ["python-ai"],
        featured: true,
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
    },
   {
        id: "pendulum-gravity-lab",
        categories: ["python-physics"],
        featured: true,
        image: "assets/images/pendulum-gravity-lab.jpg",
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
    },
    {
        id: "universal-market-predictor",
        categories: ["python-ai"],
        featured: true,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "https://github.com/eahmeddarwish/universal-market-predictor",
        tags: ["Python", "TensorFlow", "LSTM"],
        title: {
            ar: "متنبئ الأسواق الشامل (Universal Market Predictor)",
            en: "Universal Market Predictor",
        },
        desc: {
            ar: "أداة تتنبأ بسعر الإغلاق التالي لأي سهم عالمي أو عملة رقمية باستخدام نموذج LSTM، مع مؤشرات فنية ورسوم بيانية تفاعلية.",
            en: "An LSTM-powered tool that forecasts the next-day closing price for any global stock or cryptocurrency, with technical indicators and interactive charts.",
        },
        details: {
            ar: "يجلب المشروع بيانات الأسعار التاريخية عبر Yahoo Finance لأي سهم عالمي (نيويورك، ناسداك، لندن، تداول، بورصة الكويت، مصر وغيرها) أو عملة رقمية، ثم يحسب 16 مؤشراً فنياً (RSI, MACD, Bollinger Bands...) قبل تدريب نموذج LSTM ثلاثي الطبقات للتنبؤ بسعر الإغلاق التالي. يعرض التطبيق شارت الأسعار وشارت التوقع والـ backtest، وملخص إشارات فنية، عبر واجهة Gradio.",
            en: "Fetches historical price data via Yahoo Finance for any global stock (NYSE, NASDAQ, LSE, Tadawul, Boursa Kuwait, EGX, and more) or cryptocurrency, computes 16 technical indicators (RSI, MACD, Bollinger Bands, and more), then trains a 3-layer LSTM model to forecast the next day's closing price. The Gradio-based app displays a price chart, a backtest/prediction chart, and a technical signal summary.",
        },
    },
    {
        id: "esp32-thermal-camera",
        categories: ["arduino"],
        featured: true,
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
    },
    {
        id: "smart-traffic-light",
        categories: ["arduino", "iot"],
        featured: true,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "C++", "Sensors"],
        title: {
            ar: "نظام إشارة مرور ذكية",
            en: "Smart Traffic Light System",
        },
        desc: {
            ar: "نظام تحكم بإشارات المرور يستخدم أردوينو لضبط توقيت الإشارات ديناميكياً حسب كثافة الحركة بدل التوقيت الثابت.",
            en: "An Arduino-based traffic control system that adjusts signal timing dynamically based on traffic density instead of fixed intervals.",
        },
        details: {
            ar: "بُني النظام باستخدام Arduino Uno وحساسات IR لقياس كثافة السيارات في كل اتجاه، مع خوارزمية بسيطة توزّع زمن الإشارة الخضراء حسب الازدحام الفعلي. يشرح المشروع أساسيات التحكم بالـ LEDs والتوقيت متعدد المهام (multitasking) بدون استخدام delay().",
            en: "Built with an Arduino Uno and IR sensors to measure vehicle density per lane, with a simple algorithm that allocates green-light time based on actual congestion. The project demonstrates LED control and non-blocking timing (avoiding delay()) for multi-signal management.",
        },
    },
    {
        id: "rfid-attendance",
        categories: ["arduino", "iot"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "RFID", "C++"],
        title: {
            ar: "نظام حضور وغياب بتقنية RFID",
            en: "RFID-Based Attendance System",
        },
        desc: {
            ar: "نظام يسجل حضور الطلاب أو الموظفين تلقائياً عبر بطاقات RFID، مع تخزين البيانات وعرضها على شاشة LCD.",
            en: "Automatically logs student or employee attendance using RFID cards, storing and displaying the data on an LCD screen.",
        },
        details: {
            ar: "يعتمد المشروع على وحدة قارئ RFID (RC522) متصلة بـ Arduino، بحيث يسجل كل مرور لبطاقة الوقت والهوية. صُمم أصلاً كحل بديل لتسجيل الحضور اليدوي في المحاضرات، وقابل للتوسع بربطه بقاعدة بيانات أو تطبيق ويب.",
            en: "Uses an RC522 RFID reader module connected to an Arduino to log the time and identity of each card scan. Originally designed as a replacement for manual lecture attendance sheets, and easily extendable to connect with a database or web app.",
        },
    },
    {
        id: "line-follower-robot",
        categories: ["arduino", "robotics"],
        featured: true,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "IR Sensors", "Robotics"],
        title: {
            ar: "روبوت متتبع للخط (Line Follower)",
            en: "Autonomous Line-Follower Robot",
        },
        desc: {
            ar: "روبوت يتحرك ذاتياً متتبعاً مساراً مرسوماً على الأرض باستخدام مصفوفة حساسات الأشعة تحت الحمراء والتحكم بمحركين.",
            en: "A self-driving robot that follows a track drawn on the floor using an IR sensor array and dual-motor control.",
        },
        details: {
            ar: "يستخدم المشروع مصفوفة حساسات IR لقراءة التباين بين اللون الأسود والأبيض، مع دائرة تحكم بالمحركات (L298N) لتصحيح المسار لحظياً. مشروع كلاسيكي لتعلم أساسيات الروبوتات والتحكم الحلقي المغلق (closed-loop control).",
            en: "Uses an IR sensor array to detect contrast between black and white track lines, paired with an L298N motor driver for real-time path correction. A classic project for learning robotics fundamentals and closed-loop control.",
        },
    },
    {
        id: "solar-tracker",
        categories: ["arduino", "iot"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "LDR", "Servo Motors"],
        title: {
            ar: "متتبع شمسي ثنائي المحور",
            en: "Dual-Axis Solar Tracker",
        },
        desc: {
            ar: "نظام ميكانيكي يوجّه لوحاً شمسياً تلقائياً نحو أقصى شدة ضوء باستخدام حساسات LDR ومحركي سيرفو.",
            en: "A mechanical system that automatically orients a solar panel toward peak sunlight using LDR sensors and two servo motors.",
        },
        details: {
            ar: "يقارن النظام قراءات أربع حساسات LDR موزعة حول اللوح الشمسي ليحدد اتجاه أعلى شدة إضاءة، ثم يحرك محركي سيرفو (أفقي ورأسي) لتوجيه اللوح تلقائياً. أظهرت الاختبارات تحسناً ملحوظاً في كفاءة الطاقة الملتقطة مقارنة بلوح ثابت.",
            en: "Compares readings from four LDR sensors placed around the panel to determine the direction of peak light intensity, then drives two servo motors (horizontal and vertical) to reorient the panel. Testing showed a noticeable improvement in captured energy compared to a fixed panel.",
        },
    },
    {
        id: "firefighting-robot",
        categories: ["arduino", "robotics"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "Flame Sensor", "Robotics"],
        title: {
            ar: "روبوت إطفاء حرائق",
            en: "Fire-Fighting Robot",
        },
        desc: {
            ar: "روبوت متنقل يكتشف مصدر النار عبر حساسات لهب ويتحرك تلقائياً نحوه لإطفائه باستخدام مضخة ماء صغيرة.",
            en: "A mobile robot that detects a fire source using flame sensors and autonomously navigates toward it to extinguish it with a small water pump.",
        },
        details: {
            ar: "يستخدم ثلاث حساسات لهب موجهة بزوايا مختلفة لتحديد اتجاه النار، وبمجرد الاقتراب الكافي يُفعّل النظام مضخة ماء صغيرة موصولة بمرحل (relay) للإطفاء. مشروع يجمع بين الاستشعار والتحكم بالحركة والفعل (actuation) في تطبيق واحد.",
            en: "Uses three flame sensors angled in different directions to triangulate the fire's location, and once close enough, triggers a small relay-controlled water pump to extinguish it. Combines sensing, motion control, and actuation in a single applied project.",
        },
    },
    {
        id: "gsm-security-alarm",
        categories: ["arduino", "iot"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "GSM Module", "PIR Sensor"],
        title: {
            ar: "نظام إنذار أمني عبر GSM",
            en: "GSM-Based Home Security Alarm",
        },
        desc: {
            ar: "نظام إنذار يكتشف الحركة غير المتوقعة عبر حساس PIR ويرسل تنبيه SMS فوري لصاحب المنزل عبر وحدة GSM.",
            en: "A security system that detects unexpected motion via a PIR sensor and sends an instant SMS alert to the homeowner through a GSM module.",
        },
        details: {
            ar: "عند رصد حساس PIR لحركة داخل نطاقه، يُفعّل Arduino وحدة SIM800L لإرسال رسالة نصية فورية لرقم مسجّل مسبقاً، مع إمكانية إضافة صفارة إنذار محلية. حل عملي منخفض التكلفة للأمن المنزلي البسيط.",
            en: "When the PIR sensor detects motion within range, the Arduino triggers a SIM800L GSM module to send an instant SMS to a pre-registered number, with an optional local buzzer alarm. A practical, low-cost solution for basic home security.",
        },
    },
    {
        id: "plant-watering",
        categories: ["arduino", "iot"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "Soil Moisture Sensor", "Automation"],
        title: {
            ar: "نظام ري تلقائي للنباتات",
            en: "Automated Plant Watering System",
        },
        desc: {
            ar: "نظام يراقب رطوبة التربة باستمرار ويشغّل مضخة ماء تلقائياً عند الحاجة، بدون أي تدخل يدوي.",
            en: "Continuously monitors soil moisture and automatically activates a water pump when needed, with zero manual intervention.",
        },
        details: {
            ar: "يقرأ حساس رطوبة التربة القيمة كل فترة زمنية، وعندما تنخفض عن حد معيّن يُشغّل Arduino مرحلاً يحرّك مضخة مياه صغيرة لفترة محسوبة. مثالي للنباتات المنزلية أثناء السفر أو كأساس لمشروع زراعة ذكية (Smart Agriculture) أكبر.",
            en: "Reads the soil moisture sensor at regular intervals, and when the value drops below a threshold, the Arduino activates a relay that runs a small water pump for a calculated duration. Ideal for houseplants while traveling, or as the foundation for a larger Smart Agriculture project.",
        },
    },
    {
        id: "python-face-recognition",
        categories: ["python-ai"],
        featured: true,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Python", "OpenCV", "Machine Learning"],
        title: {
            ar: "نظام تعرّف على الوجه بلغة Python",
            en: "Python Face Recognition System",
        },
        desc: {
            ar: "تطبيق Python يتعرّف على الوجوه في الوقت الفعلي عبر الكاميرا باستخدام OpenCV ومكتبات التعلم الآلي.",
            en: "A real-time face recognition application using OpenCV and machine learning libraries via a live camera feed.",
        },
        details: {
            ar: "يعتمد المشروع على مكتبة OpenCV لالتقاط الفيديو الحي، ونماذج تعلم آلي (face_recognition/dlib) لاستخراج بصمة الوجه ومطابقتها مع قاعدة بيانات مسبقة. استُخدم أصلاً كأساس لأنظمة حضور ذكية وأنظمة أمان بدون لمس، وشرحته بالتفصيل خطوة بخطوة في قناتي التعليمية.",
            en: "Uses OpenCV for live video capture and machine learning models (face_recognition/dlib) to extract facial embeddings and match them against a pre-built database. Originally used as the foundation for smart attendance and touchless security systems, and explained step by step on my educational channel.",
        },
    },
    {
        id: "python-speech-recognition",
        categories: ["python-ai"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Python", "Speech Recognition", "Automation"],
        title: {
            ar: "التحكم الصوتي والتعرّف على الكلام بـ Python",
            en: "Python Speech Recognition & Voice Control",
        },
        desc: {
            ar: "سكربت Python يحوّل الأوامر الصوتية إلى نص وينفذ إجراءات تلقائية على الجهاز، من فتح برامج إلى التحكم بالماوس.",
            en: "A Python script that converts voice commands into text and executes automated actions on the machine — from launching apps to controlling the mouse.",
        },
        details: {
            ar: "يستخدم المشروع مكتبة SpeechRecognition مع Google Speech API لتحويل الصوت إلى نص، ثم يربط الأوامر بإجراءات عبر PyAutoGUI للتحكم بالماوس ولوحة المفاتيح. مثال عملي على بناء واجهات تفاعل صوتي بسيطة (Voice UI) بدون أجهزة إضافية.",
            en: "Uses the SpeechRecognition library with the Google Speech API to convert audio into text, then maps commands to actions via PyAutoGUI for mouse and keyboard control. A practical example of building a simple Voice UI with no extra hardware required.",
        },
    },
    {
        id: "raspberry-smart-mirror",
        categories: ["raspberrypi"],
        featured: true,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Raspberry Pi", "Python", "IoT"],
        title: {
            ar: "المرآة الذكية (Smart Mirror) بـ Raspberry Pi",
            en: "Raspberry Pi Smart Mirror",
        },
        desc: {
            ar: "مرآة ذات اتجاه واحد تعرض الوقت والطقس والأخبار على شاشة مخفية خلفها، مبنية بالكامل على Raspberry Pi.",
            en: "A one-way mirror that displays time, weather, and news on a hidden screen behind the glass, built entirely on a Raspberry Pi.",
        },
        details: {
            ar: "يشغّل Raspberry Pi واجهة ويب (MagicMirror²) تُعرض على شاشة موضوعة خلف مرآة عاكسة من جهة واحدة، مع وحدات (modules) قابلة للتخصيص للطقس والتقويم والأخبار. مشروع ممتاز لتعلم دمج الهاردوير مع الويب في منتج نهائي متكامل.",
            en: "Runs a Raspberry Pi web interface (MagicMirror²) displayed on a screen mounted behind a one-way mirror, with customizable modules for weather, calendar, and news. An excellent project for learning how to merge hardware with a web front end into a polished finished product.",
        },
    },
    {
        id: "rpi-face-door-lock",
        categories: ["raspberrypi", "python-ai"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Raspberry Pi", "OpenCV", "Security"],
        title: {
            ar: "قفل باب بالتعرف على الوجه عبر Raspberry Pi",
            en: "Raspberry Pi Face-Recognition Door Lock",
        },
        desc: {
            ar: "نظام قفل ذكي يفتح الباب تلقائياً عند التعرّف على وجوه مصرّح لها فقط، مبني على Raspberry Pi وكاميرا ووحدة تحكم بقفل كهربائي.",
            en: "A smart lock system that automatically unlocks the door only when it recognizes authorized faces, built on a Raspberry Pi with a camera and electronic strike-lock control.",
        },
        details: {
            ar: "يجمع المشروع بين Raspberry Pi وكاميرا ووحدة OpenCV للتعرف على الوجوه، ومرحل يتحكم بقفل كهربائي (electronic strike). عند التعرف على وجه مصرّح، يُفتح القفل تلقائياً لبضع ثوانٍ، مع تسجيل زمني لكل محاولة دخول.",
            en: "Combines a Raspberry Pi, camera, and OpenCV-based face recognition with a relay controlling an electronic strike lock. When an authorized face is recognized, the lock opens automatically for a few seconds, logging a timestamp for every entry attempt.",
        },
    },
    {
        id: "obstacle-avoiding-car",
        categories: ["arduino", "robotics"],
        featured: false,
        image: "assets/images/project-placeholder.svg",
        demoUrl: "",
        codeUrl: "",
        tags: ["Arduino", "Ultrasonic Sensor", "Robotics"],
        title: {
            ar: "سيارة تتجنب العوائق تلقائياً",
            en: "Ultrasonic Obstacle-Avoiding Car",
        },
        desc: {
            ar: "روبوت متحرك يتفادى العوائق تلقائياً باستخدام حساس موجات فوق صوتية وتغيير مساره لحظياً.",
            en: "A mobile robot that autonomously avoids obstacles using an ultrasonic sensor and real-time path correction.",
        },
        details: {
            ar: "يعتمد المشروع على حساس HC-SR04 مثبّت على سيرفو للمسح الأفقي، بحيث يقيس المسافة في اتجاهات متعددة ويختار المسار الأخلى من العوائق. مقدمة ممتازة لمفاهيم الملاحة الذاتية (autonomous navigation).",
            en: "Uses an HC-SR04 ultrasonic sensor mounted on a servo for horizontal sweeping, measuring distance in multiple directions and choosing the clearest path. A great introduction to autonomous navigation concepts.",
        },
    },
];

if (typeof window !== "undefined") window.projectsData = projectsData;
