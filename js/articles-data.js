/* ==========================================================================
   TECHNOPEDIA ARABIA — Tutorials / Articles data (الشروحات)
   منقولة ومُحدّثة من محتوى "How To DIGITAL" القديم. عربية فصحى + إنجليزي موازٍ.
   نفس بنية مقال المشروع (lead / sections / steps) + دعم بلوك كود (code)
   وخلاصة (takeaways). أضف شرحاً جديداً = كائن واحد في هذه المصفوفة.
   ========================================================================== */

window.articlesData = [
  /* ===================================================================== */
  {
    id: "intro-arduino",
    categories: ["arduino"],
    featured: true,
    image: "assets/images/tut-intro-arduino.jpg",
    tags: ["Arduino", "Microcontroller", "Electronics"],
    read: { ar: "٧ دقائق قراءة", en: "7 min read" },
    title: {
      ar: "ما هو Arduino؟ دليل المبتدئ الشامل",
      en: "What Is Arduino? A Complete Beginner's Guide",
    },
    desc: {
      ar: "تعرّف على منصة Arduino: مكوّناتها، كيف تعمل، وكيف تكتب أول برنامج لتشغيل مصباح LED.",
      en: "Understand the Arduino platform: its parts, how it works, and how to write your first LED program.",
    },
    article: {
      ar: {
        lead: "Arduino منصة إلكترونيات مفتوحة المصدر تجمع بين لوحة عتادٍ بسيطة وبيئةٍ برمجية سهلة، صُمّمت لتجعل التحكم في العالم المادي في متناول الجميع: الطلاب والهواة والمهندسين على حدٍّ سواء.",
        sections: [
          {
            h: "نشأة المنصة",
            p: "ظهر Arduino عام 2003 في مدينة إيفريا الإيطالية داخل معهد تصميم التفاعل، بهدف تبسيط تعليم الإلكترونيات على الطلاب. ثم تحوّل إلى منصةٍ عالمية مفتوحة المصدر يستخدمها ملايين المطوّرين حول العالم.",
          },
          {
            h: "المنصة اليوم",
            p: "تطوّرت العائلة كثيراً: لوحة Uno R3 الكلاسيكية ما زالت مثاليةً للتعلّم، بينما تقدّم Uno R4 (2023) معالج ARM Cortex-M4 بتردد 48 ميجاهرتز، ومنفذ USB-C، ومصفوفة LED مدمجة بحجم 12×8، ونسخة R4 WiFi تضيف الاتصال اللاسلكي والبلوتوث — ما يجعل مشاريع إنترنت الأشياء أيسر من أي وقتٍ مضى.",
          },
          {
            h: "من أي مكوّناتٍ تتكوّن اللوحة؟",
            p: "قلب اللوحة متحكّمٌ دقيق (Microcontroller) يشغّل الكود، وحوله منافذ إدخالٍ وإخراجٍ تربطك بالعالم الخارجي.",
            list: [
              "المتحكّم الدقيق: يخزّن البرنامج وينفّذه (ATmega328P في لوحة Uno R3، أو معالج ARM Cortex-M4 في لوحة Uno R4 الأحدث).",
              "الأطراف الرقمية (Digital Pins): تقرأ أو تُخرِج إشارةً مرتفعةً أو منخفضة.",
              "الأطراف التماثلية (Analog Pins): تقرأ جهداً متدرّجاً من المستشعرات.",
              "منفذ USB: للبرمجة والتغذية بالطاقة في آنٍ واحد.",
              "منظّم الجهد: يوفّر تغذيةً مستقرة عند 5 فولت أو 3.3 فولت.",
            ],
          },
          {
            h: "آلية عمل البرنامج",
            flow: ["setup() مرة واحدة", "تهيئة الأطراف", "loop() تتكرّر", "تنفيذ المنطق"],
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
          "Arduino يجمع بين عتادٍ بسيط وبرمجةٍ سهلة للتحكم في العالم المادي.",
          "كل برنامجٍ يعتمد على دالتَي setup() وloop().",
          "برنامج الوميض هو نقطة الانطلاق المثالية لأي مبتدئ.",
        ],
        note: "بعد إتقان الوميض، جرّب توصيل زرِّ ضغطٍ ومستشعرٍ بسيط لتفهم الإدخال والإخراج معاً.",
      },
      en: {
        lead: "Arduino is an open-source electronics platform that pairs a simple hardware board with an easy programming environment, designed to make controlling the physical world accessible to everyone: students, hobbyists, and engineers alike.",
        sections: [
          {
            h: "How the platform started",
            p: "Arduino was created in 2003 in Ivrea, Italy, inside the Interaction Design Institute, to simplify electronics education for students. It later grew into a global open-source platform used by millions of makers worldwide.",
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
            h: "How the program works",
            flow: ["setup() once", "init the pins", "loop() repeats", "run the logic"],
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
    categories: ["python-ai"],
    featured: true,
    image: "assets/images/tut-face-recognition.jpg",
    tags: ["Python", "OpenCV", "Computer Vision"],
    read: { ar: "٨ دقائق قراءة", en: "8 min read" },
    title: {
      ar: "التعرّف على الوجوه باستخدام Python و OpenCV",
      en: "Face Recognition with Python and OpenCV",
    },
    desc: {
      ar: "كيف يرى الحاسوب الصور، وكيف تكتشف الوجوه فيها بمكتبة OpenCV والمصنّف الجاهز Haar Cascade.",
      en: "How a computer sees images, and how to detect faces in them using OpenCV and a ready Haar Cascade classifier.",
    },
    article: {
      ar: {
        lead: "يخزّن الحاسوب الصور على هيئة مصفوفةٍ من الأرقام. ولتعليمه «رؤية» الوجوه نستعين بمكتبة الرؤية الحاسوبية مفتوحة المصدر OpenCV، التي تمكّن النظام من كشف الوجوه ومعالجتها بطريقةٍ تقارب رؤية الإنسان.",
        sections: [
          {
            h: "كيف يمثّل الحاسوب الصورة؟",
            p: "تُخزَّن الصورة الملوّنة في ثلاث قنوات (أحمر وأخضر وأزرق — RGB)، بينما تُخزَّن الصورة الرمادية في قناةٍ واحدة تمثّل شدّة كل بكسل. هذه المصفوفة الرقمية هي ما تعالجه الخوارزميات.",
          },
          {
            h: "ما هي مكتبة OpenCV؟",
            p: "OpenCV اختصارٌ لـ Open Source Computer Vision، وهي مكتبةٌ تتيح للحاسوب كشف البيانات المرئية ومعالجتها والتعرّف عليها. تعمل على أنظمة Windows و macOS و Linux، وتعتمد داخلياً على مكتبة NumPy لمعالجة المصفوفات العددية بكفاءة.",
            list: [
              "OpenCV: كشف ومعالجة الوجوه في الصور والفيديو.",
              "NumPy: تمثيل الصورة كمصفوفةٍ ثنائية الأبعاد وتسريع العمليات الحسابية.",
              "المصنّف Haar Cascade: نموذجٌ مدرَّبٌ مسبقاً لكشف الوجوه الأمامية.",
            ],
          },
          {
            h: "التجهيز قبل الكتابة",
            steps: [
              { t: "ثبّت المكتبة", d: "نفّذ الأمر pip install opencv-python في موجّه الأوامر (يعمل مع أحدث إصدارات Python 3)." },
              { t: "نزّل المصنّف", d: "احصل على ملف haarcascade_frontalface_default.xml من مستودع OpenCV على GitHub." },
              { t: "جهّز صورة اختبار", d: "احفظ صورةً بها وجهٌ واضح في مجلد العمل باسم test.jpg." },
            ],
          },
          {
            h: "كود كشف الوجوه",
            p: "يحمّل الكود الصورة، يحوّلها إلى تدرّجٍ رمادي لتسريع المعالجة، ثم يمرّر المصنّف لرسم مستطيلٍ حول كل وجه.",
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
            p: "المُعامل 1.1 يحدّد مقدار تصغير الصورة في كل تمريرةٍ للبحث عن وجوهٍ بأحجامٍ مختلفة، والرقم 4 هو أدنى عددٍ من الجيران المتجاورين اللازم لاعتبار المنطقة وجهاً؛ رفعه يقلّل النتائج الخاطئة.",
          },
          {
            h: "الطريقة الحديثة (2026)",
            p: "مصنّف Haar كلاسيكيٌّ وسهلٌ للبداية، لكنه يضعف مع الوجوه الجانبية أو المحجوبة. المعيار الحديث اليوم هو الكاشفات القائمة على الشبكات العصبية العميقة (DNN)، وأبرزها YuNet المدمج في OpenCV: نموذجٌ خفيف (أقل من ميجابايت) وسريعٌ جداً وأدقّ مع الوجوه المائلة والمزدحمة. وللتعرّف على هوية شخصٍ بعينه تُستخدم شبكات التضمين العميقة التي تحوّل كل وجهٍ إلى بصمةٍ رقمية.",
          },
        ],
        takeaways: [
          "الصورة عند الحاسوب مصفوفة أرقام؛ التحويل إلى الرمادي يسرّع المعالجة.",
          "OpenCV مع NumPy ومصنّف Haar تكفي لكشف الوجوه دون تدريبٍ من الصفر.",
          "المعيار الحديث هو كاشفات DNN مثل YuNet لدقةٍ وسرعةٍ أعلى.",
        ],
        note: "لتحويل الكشف إلى «تعرّفٍ» يميّز شخصاً بعينه، انتقل لاحقاً إلى شبكات التضمين العميقة.",
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
              { t: "Install the library", d: "Run pip install opencv-python in your terminal (works with the latest Python 3 releases)." },
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
          "To a computer an image is an array of numbers; grayscale speeds up processing.",
          "OpenCV with NumPy and a Haar classifier are enough to detect faces without training from scratch.",
          "The modern standard is DNN detectors like YuNet for higher accuracy and speed.",
        ],
        note: "To turn detection into recognition of a specific person, move on to deep embedding networks.",
      },
    },
  },

  /* ===================================================================== */
  {
    id: "numbering-systems",
    categories: ["digital"],
    featured: true,
    image: "assets/images/tut-numbering-systems.jpg",
    tags: ["Digital", "Binary", "Hexadecimal", "Fundamentals"],
    read: { ar: "١٢ دقيقة قراءة", en: "12 min read" },
    title: {
      ar: "أنظمة العد الرقمية: من العشري إلى الثنائي والثماني والست عشري",
      en: "Numbering Systems: From Decimal to Binary, Octal, and Hexadecimal",
    },
    desc: {
      ar: "شرحٌ مؤصَّل لأنظمة العد: مفهوم القاعدة والقوة، لماذا يفكّر الحاسوب بالأصفار والآحاد، وكيف تحوّل بين الأنظمة الأربعة بأمثلةٍ محلولة خطوةً بخطوة.",
      en: "A grounded guide to numbering systems: base and power, why a computer thinks in zeros and ones, and how to convert between the four systems with fully worked examples.",
    },
    article: {
      ar: {
        lead: "قبل أن تصمّم أي دائرةٍ رقمية، عليك أن تتقن اللغة التي تتحدّث بها الآلة. أنظمة العد هي هذا الأساس: طرقٌ مختلفة لتمثيل القيمة نفسها بأعدادٍ مختلفة من الرموز. في هذا الشرح ننطلق من النظام العشري الذي نعرفه، ونبني عليه بقيّة الأنظمة خطوةً بخطوة، مع مثالٍ محلولٍ لكل فكرة.",
        sections: [
          {
            h: "رقمٌ أم عدد؟",
            p: "الرمز الواحد (من 0 إلى 9) نسمّيه رقماً، وما زاد عن الرقم 9 نسمّيه عدداً؛ إذ يتكوّن من رقمين أو أكثر مرتّبين في خاناتٍ متعددة، لكل خانةٍ قيمةٌ ودلالةٌ تختلف حسب موقعها. فالأرقام إذاً هي وحدات البناء، والأعداد تُركَّب منها لتمثيل قيمٍ أكبر من 9.",
          },
          {
            h: "الفكرة الجوهرية: القاعدة والقوة",
            p: "أي نظام عدٍّ يقوم على ركيزتين: قاعدة (Base) تمثّل عدد الرموز المتاحة في النظام، وقوة (Power) تمثّل قيمة موقع كل خانة. قيمة أي عددٍ هي مجموع حاصل ضرب كل رقمٍ في (القاعدة مرفوعةً لأُسِّ موقعه). لنحلّل العدد العشري 573 لنرى القاعدة (10) والقوة (أُسّ الموقع) بوضوح:",
            code:
              "  5      7      3      (base 10)\n" +
              " 10^2   10^1   10^0\n" +
              "----------------------\n" +
              " 5x100 + 7x10 + 3x1\n" +
              "  500  +  70  +  3   =  573",
          },
          {
            h: "الكسور والقوى السالبة",
            p: "الخانات على يسار الفاصلة العشرية تبدأ قوّتها من 0 وتزيد بمقدار 1 كلما اتجهنا يساراً، أما الخانات على يمين الفاصلة فتبدأ من ‎−1 وتقلّ كلما اتجهنا يميناً. تحليل العدد 114.67 يوضّح ذلك:",
            code:
              "  1     1     4  .  6      7\n" +
              " 10^2  10^1  10^0  10^-1  10^-2\n" +
              "-------------------------------\n" +
              " 100 + 10 + 4 + 0.6 + 0.07  =  114.67",
          },
          {
            h: "لماذا الثنائي؟",
            p: "العناصر الإلكترونية تفرّق بسهولةٍ بين حالتين فقط: مرورُ تيارٍ يعني إشارةً مرتفعة (High) قيمتها 1، وانعدامُه يعني إشارةً منخفضة (Low) قيمتها 0. لذلك اعتمد الحاسوب النظام الثنائي (القاعدة 2) لغةً له؛ فهو الأكثر موثوقيةً ومقاومةً للضوضاء. وأدنى خانةٍ (أقصى اليمين) تسمّى البت الأقل أهمية (LSB)، وأعلى خانةٍ (أقصى اليسار) تسمّى البت الأكثر أهمية (MSB).",
          },
          {
            h: "العدّ في النظام الثنائي",
            p: "يعمل العدّ الثنائي بنفس منطق العشري: عندما تبلغ خانةٌ أقصى قيمةٍ لها (1) تعود إلى 0 وتزيد الخانة التي على يسارها بمقدار 1، وهكذا. تأمّل العدّ من صفر:",
            code:
              "dec :  0   1   2   3   4    5    6    7\n" +
              "bin :  000 001 010 011 100  101  110  111",
          },
          {
            h: "الخانات والاحتمالات",
            p: "لمعرفة كم خانةً ثنائية تحتاج لتمثيل عددٍ معيّن، استخدم علاقتين بسيطتين: عدد الاحتمالات وأقصى قيمة.",
            code:
              "P    = 2^n        (possibilities)\n" +
              "Vmax = 2^n - 1    (max value)\n\n" +
              "n=1 :  2 values  (0 .. 1)\n" +
              "n=2 :  4 values  (0 .. 3)\n" +
              "n=3 :  8 values  (0 .. 7)\n" +
              "n=4 : 16 values  (0 .. 15)",
          },
          {
            h: "التحويل من عشري إلى ثنائي (القسمة المتتالية)",
            p: "نقسم العدد العشري قسمةً متتاليةً على القاعدة 2، ونسجّل الباقي في كل خطوة (0 أو 1)، ثم نقرأ البواقي من الأسفل إلى الأعلى. لنحوّل 20:",
            code:
              "20 / 2 = 10   rem 0   ^\n" +
              "10 / 2 =  5   rem 0   |\n" +
              " 5 / 2 =  2   rem 1   |  read\n" +
              " 2 / 2 =  1   rem 0   |  upward\n" +
              " 1 / 2 =  0   rem 1   |\n\n" +
              "20 (dec) = 10100 (bin)",
          },
          {
            h: "التحويل من ثنائي إلى عشري (الضرب بالقوى)",
            p: "نضرب كل خانةٍ في (2 مرفوعةً لأُسّ موقعها) ثم نجمع النواتج. لنحوّل 101101:",
            code:
              "  1    0    1    1    0    1\n" +
              " 2^5  2^4  2^3  2^2  2^1  2^0\n" +
              "-----------------------------\n" +
              " 32 +  0 +  8 +  4 +  0 +  1  =  45\n\n" +
              "101101 (bin) = 45 (dec)",
          },
          {
            h: "تحويل الكسور العشرية",
            p: "لتحويل كسرٍ عشري إلى ثنائي نضربه ضرباً متتالياً في 2، ونأخذ الجزء الصحيح من كل ناتج (0 أو 1) من الأعلى إلى الأسفل. نتوقّف عندما يصبح الكسر صفراً، أو نكتفي بأربع أو خمس خاناتٍ إن استمرّ:",
            code:
              "0.3125 x 2 = 0.625  ->  0\n" +
              "0.625  x 2 = 1.25   ->  1\n" +
              "0.25   x 2 = 0.5    ->  0\n" +
              "0.5    x 2 = 1.0    ->  1   (stop)\n\n" +
              "0.3125 (dec) = 0.0101 (bin)",
          },
          {
            h: "النظام الثماني (Octal)",
            p: "قاعدته 8 ورموزه من 0 إلى 7. وُجد ليختصر الأعداد الثنائية الطويلة، إذ يمثّل كل رمزٍ ثماني ثلاث خاناتٍ ثنائية بالضبط. للتحويل من ثنائي إلى ثماني نقسّم العدد إلى مجموعاتٍ من ثلاث خاناتٍ من اليمين، ونضيف أصفاراً لليسار عند الحاجة:",
            code:
              "10110001  ->  010 110 001\n" +
              "               2   6   1\n\n" +
              "10110001 (bin) = 261 (oct)",
          },
          {
            h: "النظام الست عشري (Hexadecimal)",
            p: "قاعدته 16، ورموزه 0-9 ثم A-F (حيث A=10 وصولاً إلى F=15). يمثّل كل رمزٍ ست عشري أربع خاناتٍ ثنائية بالضبط، لذا هو الأكثر إيجازاً وشيوعاً في العناوين والألوان. للتحويل من ثنائي إلى ست عشري نجمّع الخانات أربعاً أربعاً من اليمين:",
            code:
              "10110001  ->  1011 0001\n" +
              "               B    1\n\n" +
              "10110001 (bin) = B1 (hex)",
          },
          {
            h: "جدولٌ مرجعي (0 إلى 15)",
            p: "احفظ هذا الجدول فهو مفتاح التنقّل السريع بين الأنظمة الأربعة:",
            code:
              "Dec | Binary | Oct | Hex\n" +
              "----+--------+-----+----\n" +
              "  0 |  0000  |  0  |  0\n" +
              "  1 |  0001  |  1  |  1\n" +
              "  2 |  0010  |  2  |  2\n" +
              "  3 |  0011  |  3  |  3\n" +
              "  4 |  0100  |  4  |  4\n" +
              "  5 |  0101  |  5  |  5\n" +
              "  6 |  0110  |  6  |  6\n" +
              "  7 |  0111  |  7  |  7\n" +
              "  8 |  1000  | 10  |  8\n" +
              "  9 |  1001  | 11  |  9\n" +
              " 10 |  1010  | 12  |  A\n" +
              " 11 |  1011  | 13  |  B\n" +
              " 12 |  1100  | 14  |  C\n" +
              " 13 |  1101  | 15  |  D\n" +
              " 14 |  1110  | 16  |  E\n" +
              " 15 |  1111  | 17  |  F",
          },
        ],
        takeaways: [
          "كل نظام عدٍّ يُبنى على قاعدةٍ (عدد الرموز) وقوةٍ (قيمة الموقع).",
          "الثنائي لغة العتاد لأنه يعتمد على حالتين فقط: مرور تيارٍ أو انعدامه.",
          "عشري ← ثنائي بالقسمة المتتالية على 2، وثنائي ← عشري بالضرب في قوى 2.",
          "كل رمزٍ ثماني = 3 خانات ثنائية، وكل رمزٍ ست عشري = 4 خانات ثنائية.",
        ],
        note: "أتقنتَ التحويل؟ الخطوة التالية هي العمليات الحسابية في النظام الثنائي وتمثيل الأعداد السالبة (المتمّم الثنائي) — وهي أساس ما تفعله وحدة الحساب داخل أي معالج.",
      },
      en: {
        lead: "Before you design any digital circuit, you must master the language the machine speaks. Numbering systems are that foundation: different ways to represent the same value with different sets of symbols. Here we start from the familiar decimal system and build the rest on top of it, step by step, with a worked example for every idea.",
        sections: [
          {
            h: "Digit or number?",
            p: "A single symbol (0 to 9) is a digit; anything greater than 9 is a number made of two or more digits arranged in positions, where each position carries a different value depending on its place. Digits are the building blocks; numbers are assembled from them to represent values larger than 9.",
          },
          {
            h: "The core idea: base and power",
            p: "Every numbering system rests on two pillars: a base, the count of available symbols, and a power, the value of each position. The value of any number is the sum of each digit times (base raised to the power of its position). Let's decompose the decimal 573 to see the base (10) and the power (position exponent) clearly:",
            code:
              "  5      7      3      (decimal, base = 10)\n" +
              " 10^2   10^1   10^0\n" +
              "----------------------\n" +
              " 5x100 + 7x10 + 3x1\n" +
              "  500  +  70  +  3   =  573",
          },
          {
            h: "Fractions and negative powers",
            p: "Positions left of the decimal point start at power 0 and grow by 1 as you move left; positions to the right start at -1 and decrease as you move right. Decomposing 114.67 shows this:",
            code:
              "  1     1     4  .  6      7\n" +
              " 10^2  10^1  10^0  10^-1  10^-2\n" +
              "-------------------------------\n" +
              " 100 + 10 + 4 + 0.6 + 0.07  =  114.67",
          },
          {
            h: "Why binary?",
            p: "Electronic components easily distinguish only two states: current flowing means a HIGH signal valued 1, and no current means a LOW signal valued 0. So the computer adopts binary (base 2) as its language; it is the most reliable and noise-resistant. The rightmost position is the Least Significant Bit (LSB), and the leftmost is the Most Significant Bit (MSB).",
          },
          {
            h: "Counting in binary",
            p: "Binary counting follows the same logic as decimal: when a position reaches its maximum (1) it resets to 0 and increments the position to its left, and so on. Watch the count from zero:",
            code:
              "decimal:  0   1   2   3   4    5    6    7\n" +
              "binary :  000 001 010 011 100  101  110  111",
          },
          {
            h: "Bits and possibilities",
            p: "To know how many binary positions you need to represent a value, use two simple relations: number of possibilities and maximum value.",
            code:
              "P    = 2^n        (possibilities)\n" +
              "Vmax = 2^n - 1    (maximum value)\n\n" +
              "n=1 :  2 values  (0 .. 1)\n" +
              "n=2 :  4 values  (0 .. 3)\n" +
              "n=3 :  8 values  (0 .. 7)\n" +
              "n=4 : 16 values  (0 .. 15)",
          },
          {
            h: "Decimal to binary (successive division)",
            p: "Divide the decimal number repeatedly by the base 2, record the remainder at each step (0 or 1), then read the remainders from bottom to top. Let's convert 20:",
            code:
              "20 / 2 = 10   rem 0   ^\n" +
              "10 / 2 =  5   rem 0   |\n" +
              " 5 / 2 =  2   rem 1   |  read\n" +
              " 2 / 2 =  1   rem 0   |  upward\n" +
              " 1 / 2 =  0   rem 1   |\n\n" +
              "20 (dec) = 10100 (bin)",
          },
          {
            h: "Binary to decimal (multiply by powers)",
            p: "Multiply each position by (2 raised to the power of its place) then add the results. Let's convert 101101:",
            code:
              "  1    0    1    1    0    1\n" +
              " 2^5  2^4  2^3  2^2  2^1  2^0\n" +
              "-----------------------------\n" +
              " 32 +  0 +  8 +  4 +  0 +  1  =  45\n\n" +
              "101101 (bin) = 45 (dec)",
          },
          {
            h: "Converting decimal fractions",
            p: "To convert a decimal fraction to binary, multiply it repeatedly by 2 and take the integer part of each result (0 or 1) from top to bottom. Stop when the fraction becomes zero, or settle for four or five positions if it keeps going:",
            code:
              "0.3125 x 2 = 0.625  ->  0\n" +
              "0.625  x 2 = 1.25   ->  1\n" +
              "0.25   x 2 = 0.5    ->  0\n" +
              "0.5    x 2 = 1.0    ->  1   (stop)\n\n" +
              "0.3125 (dec) = 0.0101 (bin)",
          },
          {
            h: "The octal system",
            p: "Base 8, symbols 0 to 7. It was created to shorten long binary numbers, since each octal symbol represents exactly three binary positions. To convert binary to octal, split the number into groups of three from the right, padding with zeros on the left when needed:",
            code:
              "10110001  ->  010 110 001\n" +
              "               2   6   1\n\n" +
              "10110001 (bin) = 261 (oct)",
          },
          {
            h: "The hexadecimal system",
            p: "Base 16, symbols 0-9 then A-F (where A=10 up to F=15). Each hex symbol represents exactly four binary positions, making it the most compact and the most common in addresses and colours. To convert binary to hex, group the positions four by four from the right:",
            code:
              "10110001  ->  1011 0001\n" +
              "               B    1\n\n" +
              "10110001 (bin) = B1 (hex)",
          },
          {
            h: "Reference table (0 to 15)",
            p: "Memorise this table; it is the key to moving quickly between the four systems:",
            code:
              "Dec | Binary | Oct | Hex\n" +
              "----+--------+-----+----\n" +
              "  0 |  0000  |  0  |  0\n" +
              "  1 |  0001  |  1  |  1\n" +
              "  2 |  0010  |  2  |  2\n" +
              "  3 |  0011  |  3  |  3\n" +
              "  4 |  0100  |  4  |  4\n" +
              "  5 |  0101  |  5  |  5\n" +
              "  6 |  0110  |  6  |  6\n" +
              "  7 |  0111  |  7  |  7\n" +
              "  8 |  1000  | 10  |  8\n" +
              "  9 |  1001  | 11  |  9\n" +
              " 10 |  1010  | 12  |  A\n" +
              " 11 |  1011  | 13  |  B\n" +
              " 12 |  1100  | 14  |  C\n" +
              " 13 |  1101  | 15  |  D\n" +
              " 14 |  1110  | 16  |  E\n" +
              " 15 |  1111  | 17  |  F",
          },
        ],
        takeaways: [
          "Every numbering system is built on a base (symbol count) and a power (position value).",
          "Binary is the language of hardware because it relies on only two states: current or no current.",
          "Decimal to binary uses successive division by 2; binary to decimal uses multiplication by powers of 2.",
          "Each octal symbol = 3 binary positions, and each hexadecimal symbol = 4 binary positions.",
        ],
        note: "Mastered conversion? The next step is binary arithmetic and representing negative numbers (two's complement) - the basis of what the arithmetic unit inside any processor does.",
      },
    },
  },
];
