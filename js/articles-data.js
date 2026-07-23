/* ==========================================================================
   TECHNOPEDIA ARABIA — Tutorials / Articles data (الشروحات)
   Migrated & rewritten from the old "How To DIGITAL" content.
   Bilingual (ar default + en parallel). Fusha only. No dialect.
   Each article:
   {
     id, category, featured, cover, updated, tags:[],
     title:{ar,en}, excerpt:{ar,en}, read:{ar,en},
     body:{ ar:{lead, sections:[{h,p,code,list,steps}], takeaways:[], note},
            en:{ ... } }
   }
   Section fields are all optional except one of (p|code|list|steps).
   ========================================================================== */

window.articlesData = [
  /* ===================================================================== */
  {
    id: "intro-arduino",
    category: "arduino",
    featured: true,
    cover: "assets/images/intro-arduino.jpg",
    updated: "2026-07",
    tags: ["Arduino", "Microcontroller", "Electronics"],
    title: {
      ar: "ما هو Arduino؟ دليل المبتدئ الشامل",
      en: "What Is Arduino? A Complete Beginner's Guide",
    },
    excerpt: {
      ar: "تعرّف على منصة Arduino: مكوّناتها، كيف تعمل، وكيف تكتب أول برنامج تشغيل لمصباح LED.",
      en: "Understand the Arduino platform: its parts, how it works, and how to write your first LED program.",
    },
    read: { ar: "٧ دقائق قراءة", en: "7 min read" },
    body: {
      ar: {
        lead: "Arduino منصة إلكترونيات مفتوحة المصدر تجمع بين لوحة عتاد بسيطة وبيئة برمجية سهلة، وقد صُمّمت لتجعل التحكم في العالم المادي في متناول الجميع: الطلاب، الهواة، والمهندسين على حدٍّ سواء.",
        sections: [
          {
            h: "نشأة المنصة",
            p: "ظهر Arduino عام 2003 في مدينة إيفريا الإيطالية داخل معهد تصميم التفاعل، بهدف تبسيط تعليم الإلكترونيات على الطلاب. تحوّل المشروع لاحقاً إلى منصة عالمية مفتوحة المصدر يستخدمها ملايين المطوّرين حول العالم.",
          },
          {
            h: "المنصة اليوم",
            p: "تطوّرت العائلة كثيراً: لوحة Uno R3 الكلاسيكية ما زالت مثالية للتعلّم، بينما تقدّم Uno R4 (2023) معالج ARM Cortex-M4 بتردد 48 ميجاهرتز، ومنفذ USB-C، ومصفوفة LED مدمجة بحجم 12×8، ونسخة R4 WiFi تضيف الاتصال اللاسلكي والبلوتوث — ما يجعل مشاريع إنترنت الأشياء أيسر من أي وقت مضى.",
          },
          {
            h: "من أي مكوّنات تتكوّن اللوحة؟",
            p: "قلب اللوحة متحكّم دقيق (Microcontroller) يشغّل الكود، وحوله منافذ إدخال وإخراج تربطك بالعالم الخارجي.",
            list: [
              "المتحكّم الدقيق: يخزّن البرنامج وينفّذه (ATmega328P في لوحة Uno R3، أو معالج ARM Cortex-M4 في لوحة Uno R4 الأحدث).",
              "الأطراف الرقمية (Digital Pins): تقرأ أو تُخرِج إشارة إمّا مرتفعة أو منخفضة.",
              "الأطراف التماثلية (Analog Pins): تقرأ جهداً متدرّجاً من المستشعرات.",
              "منفذ USB: للبرمجة والتغذية بالطاقة في آن واحد.",
              "منظّم الجهد: يوفّر تغذية مستقرة عند 5 فولت أو 3.3 فولت.",
            ],
          },
          {
            h: "كيف تعمل دورة البرنامج؟",
            p: "كل برنامج Arduino يتكوّن من دالتين أساسيتين: setup() تُنفَّذ مرة واحدة عند التشغيل لتهيئة الأطراف، وloop() تتكرّر إلى ما لا نهاية لتنفيذ المنطق الرئيسي.",
          },
          {
            h: "أول برنامج: وميض مصباح LED",
            p: "المثال التالي يجعل المصباح المدمج في اللوحة يومض كل ثانية. وصّل اللوحة، الصق الكود في بيئة Arduino IDE، ثم اضغط رفع (Upload).",
            code:
              "void setup() {\n" +
              "  pinMode(LED_BUILTIN, OUTPUT); // تهيئة الطرف كمخرَج\n" +
              "}\n\n" +
              "void loop() {\n" +
              "  digitalWrite(LED_BUILTIN, HIGH); // تشغيل المصباح\n" +
              "  delay(1000);                     // انتظار ثانية\n" +
              "  digitalWrite(LED_BUILTIN, LOW);  // إطفاء المصباح\n" +
              "  delay(1000);                     // انتظار ثانية\n" +
              "}",
          },
          {
            h: "الخطوات العملية",
            steps: [
              { t: "ثبّت بيئة العمل", d: "نزّل Arduino IDE 2 (الإصدار 2.3 الحالي) من الموقع الرسمي وثبّته على جهازك." },
              { t: "اختر اللوحة والمنفذ", d: "من قائمة Tools حدّد نوع اللوحة (Uno) ومنفذ الاتصال (COM)." },
              { t: "ارفع الكود", d: "اضغط زر Upload وانتظر رسالة الاكتمال؛ ستبدأ اللوحة التنفيذ فوراً." },
            ],
          },
        ],
        takeaways: [
          "Arduino يجمع بين عتاد بسيط وبرمجة سهلة للتحكم في العالم المادي.",
          "كل برنامج يعتمد على دالتَي setup() وloop().",
          "برنامج الوميض هو نقطة الانطلاق المثالية لأي مبتدئ.",
        ],
        note: "بعد إتقان الوميض، جرّب توصيل زر ضغط ومستشعر بسيط لتفهم الإدخال والإخراج معاً.",
      },
      en: {
        lead: "Arduino is an open-source electronics platform that pairs a simple hardware board with an easy programming environment, designed to make controlling the physical world accessible to everyone: students, hobbyists, and engineers alike.",
        sections: [
          {
            h: "How the platform started",
            p: "Arduino was created in 2003 in Ivrea, Italy, inside the Interaction Design Institute, with the goal of simplifying electronics education for students. It later grew into a global open-source platform used by millions of makers worldwide.",
          },
          {
            h: "The platform today",
            p: "The family has grown a lot: the classic Uno R3 is still ideal for learning, while the Uno R4 (2023) brings a 48 MHz ARM Cortex-M4 processor, a USB-C port, a built-in 12×8 LED matrix, and an R4 WiFi variant that adds wireless and Bluetooth - making IoT projects easier than ever.",
          },
          {
            h: "What the board is made of",
            p: "At the board's heart is a microcontroller that runs your code, surrounded by input/output pins that connect you to the outside world.",
            list: [
              "Microcontroller: stores and executes the program (the ATmega328P on the Uno R3, or an ARM Cortex-M4 on the newer Uno R4).",
              "Digital pins: read or output a signal that is either HIGH or LOW.",
              "Analog pins: read a gradual voltage from sensors.",
              "USB port: programs and powers the board at the same time.",
              "Voltage regulator: provides a stable 5 V or 3.3 V supply.",
            ],
          },
          {
            h: "How the program cycle works",
            p: "Every Arduino sketch has two core functions: setup() runs once at startup to initialise the pins, and loop() repeats forever to run the main logic.",
          },
          {
            h: "Your first program: blinking an LED",
            p: "The example below blinks the board's built-in LED every second. Connect the board, paste the code into the Arduino IDE, then press Upload.",
            code:
              "void setup() {\n" +
              "  pinMode(LED_BUILTIN, OUTPUT); // set the pin as an output\n" +
              "}\n\n" +
              "void loop() {\n" +
              "  digitalWrite(LED_BUILTIN, HIGH); // turn the LED on\n" +
              "  delay(1000);                     // wait one second\n" +
              "  digitalWrite(LED_BUILTIN, LOW);  // turn the LED off\n" +
              "  delay(1000);                     // wait one second\n" +
              "}",
          },
          {
            h: "Hands-on steps",
            steps: [
              { t: "Install the toolchain", d: "Download Arduino IDE 2 (current version 2.3) from the official site and install it." },
              { t: "Select board and port", d: "In the Tools menu choose your board (Uno) and connection port (COM)." },
              { t: "Upload the code", d: "Press Upload and wait for the done message; the board runs immediately." },
            ],
          },
        ],
        takeaways: [
          "Arduino combines simple hardware with easy programming to control the physical world.",
          "Every sketch relies on the setup() and loop() functions.",
          "The blink program is the ideal starting point for any beginner.",
        ],
        note: "Once you master blink, try wiring a push button and a simple sensor to understand input and output together.",
      },
    },
  },

  /* ===================================================================== */
  {
    id: "python-face-recognition",
    category: "python-ai",
    featured: true,
    cover: "assets/images/python-face-recognition.jpg",
    updated: "2026-07",
    tags: ["Python", "OpenCV", "Computer Vision"],
    title: {
      ar: "التعرّف على الوجوه باستخدام Python و OpenCV",
      en: "Face Recognition with Python and OpenCV",
    },
    excerpt: {
      ar: "كيف يرى الحاسوب الصور، وكيف تكتشف الوجوه فيها بمكتبة OpenCV والمصنّف الجاهز Haar Cascade.",
      en: "How a computer sees images, and how to detect faces in them using OpenCV and a ready Haar Cascade classifier.",
    },
    read: { ar: "٨ دقائق قراءة", en: "8 min read" },
    body: {
      ar: {
        lead: "يخزّن الحاسوب الصور على هيئة مصفوفة أرقام. لتعليمه «رؤية» الوجوه نستعين بمكتبة الرؤية الحاسوبية مفتوحة المصدر OpenCV، التي تمكّن النظام من كشف الوجوه ومعالجتها بطريقة تقارب رؤية الإنسان.",
        sections: [
          {
            h: "كيف يمثّل الحاسوب الصورة؟",
            p: "تُخزَّن الصورة الملوّنة في ثلاث قنوات (أحمر وأخضر وأزرق - RGB)، بينما تُخزَّن الصورة الرمادية في قناة واحدة تمثّل شدّة كل بكسل. هذه المصفوفة الرقمية هي ما تعالجه الخوارزميات.",
          },
          {
            h: "ما هي مكتبة OpenCV؟",
            p: "OpenCV اختصار لـ Open Source Computer Vision، وهي مكتبة تتيح للحاسوب كشف البيانات المرئية ومعالجتها والتعرّف عليها. تعمل على أنظمة Windows و macOS و Linux، وتعتمد داخلياً على مكتبة NumPy لمعالجة المصفوفات العددية بكفاءة.",
            list: [
              "OpenCV: كشف ومعالجة الوجوه في الصور والفيديو.",
              "NumPy: تمثيل الصورة كمصفوفة ثنائية الأبعاد وتسريع العمليات الحسابية.",
              "المصنّف Haar Cascade: نموذج مدرَّب مسبقاً لكشف الوجوه الأمامية.",
            ],
          },
          {
            h: "التجهيز قبل الكتابة",
            steps: [
              { t: "ثبّت المكتبة", d: "نفّذ الأمر pip install opencv-python في موجّه الأوامر." },
              { t: "نزّل المصنّف", d: "احصل على ملف haarcascade_frontalface_default.xml من مستودع OpenCV على GitHub." },
              { t: "جهّز صورة اختبار", d: "احفظ صورة بها وجه واضح في مجلد العمل باسم test.jpg." },
            ],
          },
          {
            h: "كود كشف الوجوه",
            p: "يحمّل الكود الصورة، يحوّلها إلى تدرّج رمادي لتسريع المعالجة، ثم يمرّر المصنّف لرسم مستطيل حول كل وجه.",
            code:
              "import cv2\n\n" +
              "face_cascade = cv2.CascadeClassifier(\n" +
              "    'haarcascade_frontalface_default.xml')\n\n" +
              "img = cv2.imread('test.jpg')\n" +
              "gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n\n" +
              "faces = face_cascade.detectMultiScale(gray, 1.1, 4)\n\n" +
              "for (x, y, w, h) in faces:\n" +
              "    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 165, 255), 2)\n\n" +
              "cv2.imshow('Faces', img)\n" +
              "cv2.waitKey(0)",
          },
          {
            h: "كيف يعمل detectMultiScale؟",
            p: "المُعامل 1.1 يحدّد مقدار تصغير الصورة في كل تمريرة للبحث عن وجوه بأحجام مختلفة، والرقم 4 هو أدنى عدد من الجيران المتجاورين اللازم لاعتبار المنطقة وجهاً؛ رفعه يقلّل النتائج الخاطئة.",
          },
          {
            h: "الطريقة الحديثة (2026)",
            p: "مصنّف Haar كلاسيكي وسهل للبداية، لكنه يضعف مع الوجوه الجانبية أو المحجوبة. المعيار الحديث اليوم هو الكاشفات القائمة على الشبكات العصبية العميقة (DNN)، وأبرزها YuNet المدمج في OpenCV: نموذج خفيف (أقل من ميجابايت) وسريع جداً وأدقّ مع الوجوه المائلة والمزدحمة. وللتعرّف على هوية شخص بعينه تُستخدم شبكات التضمين العميقة التي تحوّل كل وجه إلى بصمة رقمية.",
          },
        ],
        takeaways: [
          "الصورة عند الحاسوب مصفوفة أرقام؛ التحويل للرمادي يسرّع المعالجة.",
          "OpenCV + NumPy + مصنّف Haar تكفي لكشف الوجوه دون تدريب من الصفر.",
          "ضبط مُعاملَي detectMultiScale يوازن بين الدقة والنتائج الخاطئة.",
        ],
        note: "لتحويل الكشف إلى «تعرّف» يميّز شخصاً بعينه، انتقل لاحقاً إلى نماذج مثل LBPH أو شبكات التضمين العميقة.",
      },
      en: {
        lead: "A computer stores images as arrays of numbers. To teach it to \"see\" faces we use the open-source computer-vision library OpenCV, which lets the system detect and process faces in a way close to how humans see.",
        sections: [
          {
            h: "How a computer represents an image",
            p: "A colour image is stored in three channels (Red, Green, Blue - RGB), while a grayscale image is stored in a single channel representing the intensity of each pixel. This numeric array is what the algorithms process.",
          },
          {
            h: "What is OpenCV?",
            p: "OpenCV stands for Open Source Computer Vision. It lets a computer detect, process, and recognise visual data, runs on Windows, macOS, and Linux, and relies internally on NumPy to process numeric arrays efficiently.",
            list: [
              "OpenCV: detects and processes faces in images and video.",
              "NumPy: represents the image as a 2D array and speeds up the maths.",
              "Haar Cascade classifier: a pre-trained model for frontal-face detection.",
            ],
          },
          {
            h: "Setup before coding",
            steps: [
              { t: "Install the library", d: "Run pip install opencv-python in your terminal." },
              { t: "Download the classifier", d: "Get haarcascade_frontalface_default.xml from the OpenCV GitHub repository." },
              { t: "Prepare a test image", d: "Save an image with a clear face in your working folder as test.jpg." },
            ],
          },
          {
            h: "The face-detection code",
            p: "The code loads the image, converts it to grayscale to speed up processing, then runs the classifier to draw a rectangle around each face.",
            code:
              "import cv2\n\n" +
              "face_cascade = cv2.CascadeClassifier(\n" +
              "    'haarcascade_frontalface_default.xml')\n\n" +
              "img = cv2.imread('test.jpg')\n" +
              "gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n\n" +
              "faces = face_cascade.detectMultiScale(gray, 1.1, 4)\n\n" +
              "for (x, y, w, h) in faces:\n" +
              "    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 165, 255), 2)\n\n" +
              "cv2.imshow('Faces', img)\n" +
              "cv2.waitKey(0)",
          },
          {
            h: "How detectMultiScale works",
            p: "The 1.1 parameter sets how much the image is scaled down on each pass to find faces of different sizes, and the 4 is the minimum number of neighbours required to accept a region as a face; raising it reduces false positives.",
          },
          {
            h: "The modern approach (2026)",
            p: "The Haar classifier is a classic, easy starting point, but it struggles with side or occluded faces. Today's standard is deep-neural-network (DNN) detectors; the most notable is YuNet, bundled with OpenCV: a lightweight model (under 1 MB), very fast and more accurate on tilted and crowded faces. To recognise a specific person's identity, deep embedding networks turn each face into a numeric fingerprint.",
          },
        ],
        takeaways: [
          "To a computer an image is an array of numbers; grayscale conversion speeds up processing.",
          "OpenCV + NumPy + a Haar classifier are enough to detect faces without training from scratch.",
          "Tuning the two detectMultiScale parameters balances accuracy against false positives.",
        ],
        note: "To turn detection into recognition of a specific person, move on to models such as LBPH or deep embedding networks.",
      },
    },
  },

  /* ===================================================================== */
  {
    id: "numbering-systems",
    category: "digital",
    featured: false,
    cover: "assets/images/numbering-systems.jpg",
    updated: "2026-07",
    tags: ["Digital", "Binary", "Fundamentals"],
    title: {
      ar: "أنظمة العد الرقمية: الثنائي والعشري والست عشري",
      en: "Numbering Systems: Binary, Decimal, and Hexadecimal",
    },
    excerpt: {
      ar: "لماذا يفكّر الحاسوب بالأصفار والآحاد؟ وكيف تحوّل بين الأنظمة الأساسية بثقة.",
      en: "Why does a computer think in zeros and ones? And how to convert between the core systems with confidence.",
    },
    read: { ar: "٦ دقائق قراءة", en: "6 min read" },
    body: {
      ar: {
        lead: "قبل أن تصمّم أي دائرة رقمية، عليك أن تتقن اللغة التي تتحدّث بها الآلة. أنظمة العد هي هذا الأساس: طرق مختلفة لتمثيل القيمة ذاتها بأعداد مختلفة من الرموز.",
        sections: [
          {
            h: "لماذا الثنائي؟",
            p: "العناصر الإلكترونية تفرّق بسهولة بين حالتين فقط: جهد مرتفع (1) وجهد منخفض (0). لذلك اعتمد الحاسوب النظام الثنائي أساساً؛ فهو الأكثر موثوقية ومقاومةً للضوضاء.",
          },
          {
            h: "الأنظمة الأساسية",
            list: [
              "العشري (الأساس 10): رموزه من 0 إلى 9، وهو نظامنا اليومي.",
              "الثنائي (الأساس 2): رمزاه 0 و1، ولغة العتاد الرقمي.",
              "الست عشري (الأساس 16): رموزه 0-9 ثم A-F، ويختصر الأعداد الثنائية الطويلة.",
            ],
          },
          {
            h: "التحويل من ثنائي إلى عشري",
            p: "اضرب كل خانة في قيمة موضعها (قوى العدد 2) ثم اجمع. مثال على العدد 1011: (1×8)+(0×4)+(1×2)+(1×1) = 11 في النظام العشري.",
          },
          {
            h: "التحويل من عشري إلى ثنائي",
            steps: [
              { t: "اقسم على 2", d: "اقسم العدد العشري على 2 وسجّل الباقي (0 أو 1)." },
              { t: "كرّر", d: "واصل قسمة ناتج القسمة حتى يصل إلى صفر." },
              { t: "اقرأ عكسياً", d: "رتّب البواقي من الأسفل إلى الأعلى لتحصل على العدد الثنائي." },
            ],
          },
          {
            h: "لماذا الست عشري مريح؟",
            p: "كل رمز ست عشري يمثّل بالضبط أربع خانات ثنائية، فالعدد 1111 يصبح F، مما يجعل كتابة العناوين والألوان والبيانات أقصر وأقل عرضةً للخطأ.",
          },
        ],
        takeaways: [
          "الثنائي هو لغة العتاد لأنه يعتمد على حالتين فقط.",
          "قيمة كل خانة تحدّدها قوى أساس النظام.",
          "الست عشري اختصار عملي لكل أربع خانات ثنائية.",
        ],
      },
      en: {
        lead: "Before you design any digital circuit, you must master the language the machine speaks. Numbering systems are that foundation: different ways to represent the same value with different sets of symbols.",
        sections: [
          {
            h: "Why binary?",
            p: "Electronic components easily distinguish only two states: high voltage (1) and low voltage (0). That is why the computer adopts binary as its base; it is the most reliable and noise-resistant.",
          },
          {
            h: "The core systems",
            list: [
              "Decimal (base 10): symbols 0 to 9, our everyday system.",
              "Binary (base 2): symbols 0 and 1, the language of digital hardware.",
              "Hexadecimal (base 16): symbols 0-9 then A-F, a shorthand for long binary numbers.",
            ],
          },
          {
            h: "Binary to decimal",
            p: "Multiply each digit by its positional value (powers of 2) then add. For 1011: (1×8)+(0×4)+(1×2)+(1×1) = 11 in decimal.",
          },
          {
            h: "Decimal to binary",
            steps: [
              { t: "Divide by 2", d: "Divide the decimal number by 2 and record the remainder (0 or 1)." },
              { t: "Repeat", d: "Keep dividing the quotient until it reaches zero." },
              { t: "Read upward", d: "Order the remainders from bottom to top to get the binary number." },
            ],
          },
          {
            h: "Why hexadecimal is convenient",
            p: "Each hex symbol represents exactly four binary digits, so 1111 becomes F, making addresses, colours, and data shorter and less error-prone to write.",
          },
        ],
        takeaways: [
          "Binary is the language of hardware because it relies on only two states.",
          "Each digit's value is set by the powers of the system's base.",
          "Hexadecimal is a practical shorthand for every four binary digits.",
        ],
      },
    },
  },
];
