export type ProjectCategory =
  | "arduino"
  | "raspberrypi"
  | "python-ai"
  | "robotics"
  | "iot";

export type Project = {
  id: string;
  title: string;
  desc: string;
  details: string;
  categories: ProjectCategory[];
  tags: string[];
  featured: boolean;
  image: string; // absolute URL or "" for placeholder
  demoUrl?: string;
  codeUrl?: string;
};

const PLACEHOLDER = "";

export const PROJECTS: Project[] = [
  {
    id: "voice-chess-pro",
    title: "شطرنج تفاعلي احترافي (Voice Chess Pro)",
    desc: "لعبة شطرنج تفاعلية كاملة تعمل في المتصفح، بوضعين: التحدي ضد محرك Stockfish أو اللعب بين شخصين، مع تصدير النقلات بصيغة PGN.",
    details:
      "بُني المشروع بلغة Python باستخدام Gradio لواجهة الويب، ومحرك Stockfish كخصم ذكاء اصطناعي بثلاث مستويات صعوبة (سهل، متوسط، صعب). يدعم وضعين للعب: لاعب ضد لاعب، أو لاعب ضد الحاسوب، مع تتبع كامل لسجل النقلات وإمكانية تصدير المباراة بصيغة PGN القياسية لتحليلها لاحقاً في أي برنامج شطرنج.",
    categories: ["python-ai"],
    tags: ["Python", "Gradio", "Stockfish"],
    featured: true,
    image: "https://engdarwish.com/assets/images/voice-chess-pro.png",
    demoUrl: "https://huggingface.co/spaces/engdarwish/voice-chess-pro",
    codeUrl: "https://github.com/eahmeddarwish/voice-chess-pro",
  },
  {
    id: "adsb-flight-tracker",
    title: "متتبع رحلات ADS-B",
    desc: "رادار طيران حي بتصميم ATC كلاسيكي، يشتغل بأي دونجل RTL-SDR على أي لابتوب أو Raspberry Pi.",
    details:
      "يستقبل إشارات ADS-B الحقيقية على 1090MHz عبر dump1090، ويعرضها على واجهة رادار حية ببصمة كلاسيكية. الديمو المباشر بيشتغل بمحاكاة داخل المتصفح؛ النسخة الكاملة بتدعم هاردوير حقيقي.",
    categories: ["iot", "python-ai"],
    tags: ["Python", "Flask", "RTL-SDR", "ADS-B", "Raspberry Pi"],
    featured: false,
    image: "https://engdarwish.com/assets/images/adsb-radar-screenshot.png",
    demoUrl: "https://engdarwish-adsb-flight-tracker.static.hf.space",
    codeUrl: "https://github.com/eahmeddarwish/adsb-flight-tracker",
  },
  {
    id: "universal-market-predictor",
    title: "متنبئ الأسواق الشامل (Universal Market Predictor)",
    desc: "أداة تتنبأ بسعر الإغلاق التالي لأي سهم عالمي أو عملة رقمية باستخدام نموذج LSTM، مع مؤشرات فنية ورسوم بيانية تفاعلية.",
    details:
      "يجلب المشروع بيانات الأسعار التاريخية عبر Yahoo Finance لأي سهم عالمي (نيويورك، ناسداك، لندن، تداول، بورصة الكويت، مصر وغيرها) أو عملة رقمية، ثم يحسب 16 مؤشراً فنياً (RSI, MACD, Bollinger Bands...) قبل تدريب نموذج LSTM ثلاثي الطبقات للتنبؤ بسعر الإغلاق التالي.",
    categories: ["python-ai"],
    tags: ["Python", "TensorFlow", "LSTM"],
    featured: true,
    image: PLACEHOLDER,
    codeUrl: "https://github.com/eahmeddarwish/universal-market-predictor",
  },
  {
    id: "smart-traffic-light",
    title: "نظام إشارة مرور ذكية",
    desc: "نظام تحكم بإشارات المرور يستخدم أردوينو لضبط توقيت الإشارات ديناميكياً حسب كثافة الحركة بدل التوقيت الثابت.",
    details:
      "بُني النظام باستخدام Arduino Uno وحساسات IR لقياس كثافة السيارات في كل اتجاه، مع خوارزمية بسيطة توزّع زمن الإشارة الخضراء حسب الازدحام الفعلي.",
    categories: ["arduino", "iot"],
    tags: ["Arduino", "C++", "Sensors"],
    featured: true,
    image: PLACEHOLDER,
  },
  {
    id: "rfid-attendance",
    title: "نظام حضور وغياب بتقنية RFID",
    desc: "نظام يسجل حضور الطلاب أو الموظفين تلقائياً عبر بطاقات RFID، مع تخزين البيانات وعرضها على شاشة LCD.",
    details:
      "يعتمد المشروع على وحدة قارئ RFID (RC522) متصلة بـ Arduino، بحيث يسجل كل مرور لبطاقة الوقت والهوية.",
    categories: ["arduino", "iot"],
    tags: ["Arduino", "RFID", "C++"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "line-follower-robot",
    title: "روبوت متتبع للخط (Line Follower)",
    desc: "روبوت يتحرك ذاتياً متتبعاً مساراً مرسوماً على الأرض باستخدام مصفوفة حساسات الأشعة تحت الحمراء والتحكم بمحركين.",
    details:
      "يستخدم المشروع مصفوفة حساسات IR لقراءة التباين بين اللون الأسود والأبيض، مع دائرة تحكم بالمحركات (L298N) لتصحيح المسار لحظياً.",
    categories: ["arduino", "robotics"],
    tags: ["Arduino", "IR Sensors", "Robotics"],
    featured: true,
    image: PLACEHOLDER,
  },
  {
    id: "solar-tracker",
    title: "متتبع شمسي ثنائي المحور",
    desc: "نظام ميكانيكي يوجّه لوحاً شمسياً تلقائياً نحو أقصى شدة ضوء باستخدام حساسات LDR ومحركي سيرفو.",
    details:
      "يقارن النظام قراءات أربع حساسات LDR موزعة حول اللوح الشمسي ليحدد اتجاه أعلى شدة إضاءة، ثم يحرك محركي سيرفو (أفقي ورأسي) لتوجيه اللوح تلقائياً.",
    categories: ["arduino", "iot"],
    tags: ["Arduino", "LDR", "Servo Motors"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "firefighting-robot",
    title: "روبوت إطفاء حرائق",
    desc: "روبوت متنقل يكتشف مصدر النار عبر حساسات لهب ويتحرك تلقائياً نحوه لإطفائه باستخدام مضخة ماء صغيرة.",
    details:
      "يستخدم ثلاث حساسات لهب موجهة بزوايا مختلفة لتحديد اتجاه النار، وبمجرد الاقتراب الكافي يُفعّل النظام مضخة ماء صغيرة موصولة بمرحل (relay) للإطفاء.",
    categories: ["arduino", "robotics"],
    tags: ["Arduino", "Flame Sensor", "Robotics"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "gsm-security-alarm",
    title: "نظام إنذار أمني عبر GSM",
    desc: "نظام إنذار يكتشف الحركة غير المتوقعة عبر حساس PIR ويرسل تنبيه SMS فوري لصاحب المنزل عبر وحدة GSM.",
    details:
      "عند رصد حساس PIR لحركة داخل نطاقه، يُفعّل Arduino وحدة SIM800L لإرسال رسالة نصية فورية لرقم مسجّل مسبقاً، مع إمكانية إضافة صفارة إنذار محلية.",
    categories: ["arduino", "iot"],
    tags: ["Arduino", "GSM Module", "PIR Sensor"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "plant-watering",
    title: "نظام ري تلقائي للنباتات",
    desc: "نظام يراقب رطوبة التربة باستمرار ويشغّل مضخة ماء تلقائياً عند الحاجة، بدون أي تدخل يدوي.",
    details:
      "يقرأ حساس رطوبة التربة القيمة كل فترة زمنية، وعندما تنخفض عن حد معيّن يُشغّل Arduino مرحلاً يحرّك مضخة مياه صغيرة لفترة محسوبة.",
    categories: ["arduino", "iot"],
    tags: ["Arduino", "Soil Moisture Sensor", "Automation"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "python-face-recognition",
    title: "نظام تعرّف على الوجه بلغة Python",
    desc: "تطبيق Python يتعرّف على الوجوه في الوقت الفعلي عبر الكاميرا باستخدام OpenCV ومكتبات التعلم الآلي.",
    details:
      "يعتمد المشروع على مكتبة OpenCV لالتقاط الفيديو الحي، ونماذج تعلم آلي (face_recognition/dlib) لاستخراج بصمة الوجه ومطابقتها مع قاعدة بيانات مسبقة.",
    categories: ["python-ai"],
    tags: ["Python", "OpenCV", "Machine Learning"],
    featured: true,
    image: PLACEHOLDER,
  },
  {
    id: "python-speech-recognition",
    title: "التحكم الصوتي والتعرّف على الكلام بـ Python",
    desc: "سكربت Python يحوّل الأوامر الصوتية إلى نص وينفذ إجراءات تلقائية على الجهاز، من فتح برامج إلى التحكم بالماوس.",
    details:
      "يستخدم المشروع مكتبة SpeechRecognition مع Google Speech API لتحويل الصوت إلى نص، ثم يربط الأوامر بإجراءات عبر PyAutoGUI.",
    categories: ["python-ai"],
    tags: ["Python", "Speech Recognition", "Automation"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "raspberry-smart-mirror",
    title: "المرآة الذكية (Smart Mirror) بـ Raspberry Pi",
    desc: "مرآة ذات اتجاه واحد تعرض الوقت والطقس والأخبار على شاشة مخفية خلفها، مبنية بالكامل على Raspberry Pi.",
    details:
      "يشغّل Raspberry Pi واجهة ويب (MagicMirror²) تُعرض على شاشة موضوعة خلف مرآة عاكسة من جهة واحدة، مع وحدات قابلة للتخصيص للطقس والتقويم والأخبار.",
    categories: ["raspberrypi"],
    tags: ["Raspberry Pi", "Python", "IoT"],
    featured: true,
    image: PLACEHOLDER,
  },
  {
    id: "rpi-face-door-lock",
    title: "قفل باب بالتعرف على الوجه عبر Raspberry Pi",
    desc: "نظام قفل ذكي يفتح الباب تلقائياً عند التعرّف على وجوه مصرّح لها فقط، مبني على Raspberry Pi وكاميرا ووحدة تحكم بقفل كهربائي.",
    details:
      "يجمع المشروع بين Raspberry Pi وكاميرا ووحدة OpenCV للتعرف على الوجوه، ومرحل يتحكم بقفل كهربائي.",
    categories: ["raspberrypi", "python-ai"],
    tags: ["Raspberry Pi", "OpenCV", "Security"],
    featured: false,
    image: PLACEHOLDER,
  },
  {
    id: "obstacle-avoiding-car",
    title: "سيارة تتجنب العوائق تلقائياً",
    desc: "روبوت متحرك يتفادى العوائق تلقائياً باستخدام حساس موجات فوق صوتية وتغيير مساره لحظياً.",
    details:
      "يعتمد المشروع على حساس HC-SR04 مثبّت على سيرفو للمسح الأفقي، بحيث يقيس المسافة في اتجاهات متعددة ويختار المسار الأخلى من العوائق.",
    categories: ["arduino", "robotics"],
    tags: ["Arduino", "Ultrasonic Sensor", "Robotics"],
    featured: false,
    image: PLACEHOLDER,
  },
];

export const CATEGORY_LABELS: Record<ProjectCategory | "all", string> = {
  all: "الكل",
  arduino: "Arduino",
  raspberrypi: "Raspberry Pi",
  "python-ai": "Python / AI",
  robotics: "Robotics",
  iot: "IoT",
};

export const VIDEOS: { title: string; desc: string }[] = [
  {
    title: "How To: Arduino — دليلك الشامل للبدء",
    desc: "شرح كامل لأساسيات أردوينو: الهاردوير، بيئة البرمجة، وأول مشروع عملي خطوة بخطوة.",
  },
  {
    title: "How To: Raspberry Pi — من التجهيز للتشغيل",
    desc: "تجهيز أول Raspberry Pi، تثبيت نظام التشغيل، والتحكم بمنافذ GPIO لأول مشروع.",
  },
  {
    title: "How To: Python على Windows",
    desc: "تثبيت بايثون بشكل صحيح على ويندوز، إعداد بيئة العمل، وكتابة أول سكربت.",
  },
  {
    title: "How To: الدوائر الرقمية (Digital Circuits)",
    desc: "أساسيات البوابات المنطقية، جداول الحقيقة، وتبسيط الدوائر باستخدام خرائط كارنو.",
  },
  {
    title: "How To: الإلكترونيات (Electronics) للمبتدئين",
    desc: "مقدمة عملية في الإلكترونيات: المقاومات، الدايود، الترانزستور، وقراءة الدوائر البسيطة.",
  },
  {
    title: "How To: أساسيات الشبكات (Networking)",
    desc: "فهم مبسّط لكيفية عمل الشبكات: عناوين IP، البروتوكولات، والراوترات.",
  },
];
