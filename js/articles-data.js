/* ==========================================================================
   TECHNOPEDIA ARABIA — Tutorials / Articles data (الشروحات)
   منقولة ومُحدّثة من محتوى "How To DIGITAL" القديم. عربية فصحى + إنجليزي موازٍ.
   بنية المقال: lead + sections[{h, p, code, list, steps, flow}] + takeaways + note
   حقل p يقبل نصاً واحداً أو مصفوفة نصوص (فقرات متعددة).
   أضف شرحاً جديداً = كائن واحد في هذه المصفوفة.
   ========================================================================== */

window.articlesData = [
  /* ===================================================================== */
  {
    id: "intro-arduino",
    categories: ["arduino"],
    featured: true,
    image: "assets/images/tut-intro-arduino.jpg",
    tags: ["Arduino", "Microcontroller", "Electronics"],
    read: { ar: "١٠ دقائق قراءة", en: "10 min read" },
    title: {
      ar: "ما هو Arduino؟ دليل المبتدئ الشامل",
      en: "What Is Arduino? A Complete Beginner's Guide",
    },
    desc: {
      ar: "من فكرةٍ في معهدٍ إيطالي إلى منصةٍ يعرفها الملايين: تعرّف على Arduino، مكوّناته، لغته، وكيف تكتب أول برنامجٍ يتحكّم في العالم من حولك.",
      en: "From an idea in an Italian institute to a platform millions know: understand Arduino, its parts, its language, and how to write your first program that controls the world around you.",
    },
    article: {
      ar: {
        lead: "Arduino ليس مجرد لوحةٍ إلكترونية، بل منصةٌ متكاملة مفتوحة المصدر تجمع بين عتادٍ بسيط وبرمجةٍ سهلة، صُمّمت لتضع القدرة على التحكم في العالم المادي بين يدَي أي شخص: طالبٍ يتعلّم، هاوٍ يجرّب، أو مهندسٍ يبني منتجاً. في هذا الدليل نبدأ من القصة، ثم نفكّك اللوحة قطعةً قطعة، وننتهي بأول برنامجٍ تكتبه بنفسك.",
        sections: [
          {
            h: "كيف بدأت القصة؟",
            p: [
              "عام 2003، وفي مدينة إيفريا الإيطالية الصغيرة، كان مجموعةٌ من المدرّسين والباحثين في معهد تصميم التفاعل يواجهون مشكلةً متكررة: أدوات الإلكترونيات المتاحة لطلابهم كانت باهظة الثمن ومعقّدة، تُنفِّر المبتدئ قبل أن يبدأ. فقرّروا أن يصنعوا شيئاً مختلفاً — لوحةً رخيصة وبسيطة يستطيع أي طالبٍ برمجتها في دقائق.",
              "لم يكتفوا بذلك، بل اتخذوا قراراً غيّر مصير المشروع: جعلوه مفتوح المصدر بالكامل، تصميماً وبرمجيات. أي شخصٍ في العالم يستطيع أن يرى كيف صُنعت اللوحة، وأن يصنع نسخته الخاصة منها. هذا الانفتاح هو ما حوّل Arduino من مشروعٍ تعليمي صغير إلى حركةٍ عالمية يستخدمها اليوم ملايين المطوّرين في كل مجال، من الفن التفاعلي إلى الروبوتات إلى إنترنت الأشياء.",
            ],
          },
          {
            h: "المنصة اليوم: عائلةٌ كاملة",
            p: [
              "تطوّرت عائلة Arduino كثيراً منذ ذلك الحين. لوحة Uno R3 الكلاسيكية ما زالت هي نقطة البداية المثالية لأي متعلّم؛ فهي متينة، رخيصة، وموثّقة بغزارة. لكن الجيل الأحدث نقل المنصة إلى مستوىً آخر.",
              "لوحة Uno R4 (2023) تحمل معالج ARM Cortex-M4 بتردد 48 ميجاهرتز — أسرع بكثير وبذاكرةٍ أكبر — مع منفذ USB-C الحديث، ومصفوفة LED مدمجة بحجم 12×8 تعرض عليها رسائل ورسوماً بسيطة. أما نسخة R4 WiFi فتضيف الاتصال اللاسلكي والبلوتوث مباشرةً على اللوحة، ما يجعل بناء مشاريع إنترنت الأشياء أيسر من أي وقتٍ مضى دون الحاجة إلى وحداتٍ خارجية.",
            ],
          },
          {
            h: "ماذا يوجد على اللوحة؟",
            p: "لتفهم Arduino عليك أن تفهم قلبها: المتحكّم الدقيق (Microcontroller). هو حاسوبٌ كاملٌ مصغّر على شريحةٍ واحدة، يخزّن برنامجك وينفّذه تعليمةً تعليمة. وحول هذا القلب تتوزّع منافذ الإدخال والإخراج التي هي جسر التواصل بينه وبين العالم الخارجي:",
            list: [
              "المتحكّم الدقيق: يخزّن البرنامج وينفّذه (ATmega328P في لوحة Uno R3، أو معالج ARM Cortex-M4 في لوحة Uno R4 الأحدث).",
              "الأطراف الرقمية (Digital Pins): تتعامل مع حالتين فقط — مرتفع (5 فولت) أو منخفض (0 فولت) — وتصلح لقراءة زرٍّ أو تشغيل مصباح.",
              "الأطراف التماثلية (Analog Pins): تقرأ جهداً متدرّجاً من المستشعرات (كمقياس الحرارة أو الضوء) وتحوّله إلى رقمٍ بين 0 و1023.",
              "منفذ USB: يبرمج اللوحة ويغذّيها بالطاقة في آنٍ واحد، وهو أيضاً قناة التواصل مع الحاسوب.",
              "منظّم الجهد: يحمي اللوحة ويوفّر تغذيةً مستقرة عند 5 فولت أو 3.3 فولت مهما تذبذب مصدر الطاقة.",
            ],
          },
          {
            h: "رقمي أم تماثلي؟ الفرق الذي يغيّر كل شيء",
            p: [
              "العالم من حولنا تماثليٌّ بطبعه: درجة الحرارة ترتفع تدريجياً، والضوء يخفت بنعومة، والصوت موجةٌ متصلة. لكن المتحكّم يفكّر رقمياً، بقيمٍ منفصلة. لذلك تحتاج اللوحة إلى نوعين من الأطراف.",
              "الأطراف الرقمية تجيب عن سؤالٍ بنعم أو لا: هل الزر مضغوط؟ هل المصباح يعمل؟ أما الأطراف التماثلية فتجيب عن سؤالٍ بمقدار: كم تبلغ شدّة الضوء الآن؟ فهم هذا الفرق هو أول خطوةٍ نحو تصميم أي مشروعٍ يتفاعل مع محيطه.",
            ],
          },
          {
            h: "كيف يعمل أي برنامج Arduino؟",
            p: "كل برنامجٍ تكتبه لـ Arduino — مهما كان بسيطاً أو معقّداً — يقوم على دالتين أساسيتين لا ثالث لهما. الأولى setup() تُنفَّذ مرةً واحدة فقط لحظة تشغيل اللوحة، وفيها تُهيّئ الأطراف وتضبط الإعدادات. والثانية loop() تُنفَّذ بعدها إلى ما لا نهاية، تكراراً بعد تكرار، وفيها يعيش المنطق الرئيسي لمشروعك.",
            flow: ["تشغيل اللوحة", "setup() مرة واحدة", "loop() تتكرّر للأبد", "قراءة وتحكّم"],
          },
          {
            h: "أول برنامج: نجعل مصباحاً يومض",
            p: [
              "لا شيء يرسّخ الفهم مثل التجربة الأولى. البرنامج التالي — المعروف بـ Blink — يجعل المصباح المدمج في اللوحة يومض كل ثانية. وصّل اللوحة بالحاسوب، الصق الكود في بيئة Arduino IDE، ثم اضغط رفع (Upload) لترى النتيجة على الفور.",
              "لاحظ كيف نستخدم pinMode داخل setup لنُعلِم اللوحة أننا سنستخدم الطرف مخرَجاً، ثم داخل loop نرفع الجهد (HIGH) لنُشعل المصباح، ننتظر ثانية بـ delay، نخفض الجهد (LOW) لنُطفئه، وننتظر ثانيةً أخرى — ثم يعيد loop الكرّة إلى الأبد.",
            ],
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
            h: "لغة Arduino",
            p: "الكود الذي تراه فوق مكتوبٌ بلغةٍ مبنيةٍ على C و++C، لكن Arduino بسّطها كثيراً وأخفى تعقيداتها خلف دوالٍ سهلة الأسماء مثل digitalWrite و delay. هذا هو سرّ شعبية المنصة: تكتب أوامر بشرية القراءة، وتتكفّل بيئة العمل بتحويلها إلى تعليماتٍ يفهمها المتحكّم. ومع الوقت ستكتشف مكتباتٍ جاهزة (Libraries) تختصر لك التعامل مع الشاشات والمستشعرات والاتصال اللاسلكي في أسطرٍ قليلة.",
          },
          {
            h: "الخطوات العملية للبدء",
            steps: [
              { t: "ثبّت بيئة العمل", d: "نزّل Arduino IDE 2 (الإصدار 2.3 الحالي) من الموقع الرسمي وثبّته على جهازك؛ فهي محرّرٌ ومترجمٌ ورافعٌ للكود في أداةٍ واحدة." },
              { t: "اختر اللوحة والمنفذ", d: "من قائمة Tools حدّد نوع اللوحة (مثلاً Arduino Uno) ومنفذ الاتصال (COM على ويندوز)، وإلا لن يعرف الحاسوب إلى أين يرسل الكود." },
              { t: "ارفع الكود", d: "اضغط زر Upload وانتظر رسالة الاكتمال؛ ستبدأ اللوحة تنفيذ برنامجك فوراً وتحتفظ به حتى لو فصلتها عن الحاسوب." },
            ],
          },
        ],
        takeaways: [
          "Arduino منصةٌ مفتوحة المصدر تجعل التحكم في العالم المادي في متناول الجميع.",
          "قلب اللوحة متحكّمٌ دقيق، وحوله أطرافٌ رقمية (نعم/لا) وتماثلية (مقدار).",
          "كل برنامجٍ يقوم على setup() التي تُنفَّذ مرة، وloop() التي تتكرّر للأبد.",
          "لغة Arduino مبنيةٌ على C/C++ لكنها مبسّطة خلف دوالٍ سهلة ومكتباتٍ جاهزة.",
        ],
        note: "أتقنتَ الوميض؟ الخطوة التالية أن توصّل زرَّ ضغطٍ (إدخال رقمي) ومقاومةً ضوئية (إدخال تماثلي)، لتجعل مشروعك يقرأ العالم ويتفاعل معه — لا أن يومض فحسب.",
      },
      en: {
        lead: "Arduino is not just a circuit board; it is a complete open-source platform that pairs simple hardware with easy programming, designed to put the power to control the physical world into anyone's hands: a student learning, a hobbyist experimenting, or an engineer building a product. In this guide we start with the story, dismantle the board piece by piece, and finish with the first program you write yourself.",
        sections: [
          {
            h: "How the story began",
            p: [
              "In 2003, in the small Italian town of Ivrea, a group of teachers and researchers at the Interaction Design Institute faced a recurring problem: the electronics tools available to their students were expensive and complex, scaring off beginners before they even started. So they decided to build something different - a cheap, simple board any student could program in minutes.",
              "They went further with a decision that changed the project's fate: they made it fully open source, both hardware and software. Anyone in the world could see how the board was made and build their own version. That openness is what turned Arduino from a small teaching project into a global movement used today by millions of makers across every field, from interactive art to robotics to the Internet of Things.",
            ],
          },
          {
            h: "The platform today: a whole family",
            p: [
              "The Arduino family has grown a lot since then. The classic Uno R3 is still the ideal starting point for any learner; it is sturdy, cheap, and heavily documented. But the newer generation took the platform to another level.",
              "The Uno R4 (2023) carries a 48 MHz ARM Cortex-M4 processor - far faster and with more memory - along with a modern USB-C port and a built-in 12x8 LED matrix that displays simple messages and graphics. The R4 WiFi variant adds wireless and Bluetooth right on the board, making IoT projects easier than ever without external modules.",
            ],
          },
          {
            h: "What's on the board?",
            p: "To understand Arduino you must understand its heart: the microcontroller. It is a complete tiny computer on a single chip that stores your program and executes it instruction by instruction. Around this heart are the input/output pins, the bridge between it and the outside world:",
            list: [
              "Microcontroller: stores and executes the program (the ATmega328P on the Uno R3, or an ARM Cortex-M4 on the newer Uno R4).",
              "Digital pins: handle only two states - HIGH (5 V) or LOW (0 V) - perfect for reading a button or driving an LED.",
              "Analog pins: read a gradual voltage from sensors (temperature, light) and convert it to a number between 0 and 1023.",
              "USB port: programs and powers the board at once, and is also the communication channel with the computer.",
              "Voltage regulator: protects the board and provides a stable 5 V or 3.3 V supply no matter how the power source fluctuates.",
            ],
          },
          {
            h: "Digital or analog? The difference that changes everything",
            p: [
              "The world around us is analog by nature: temperature rises gradually, light dims smoothly, sound is a continuous wave. But the microcontroller thinks digitally, in discrete values. That is why the board needs two kinds of pins.",
              "Digital pins answer a yes/no question: is the button pressed? is the LED on? Analog pins answer a how-much question: how bright is the light right now? Understanding this difference is the first step toward designing any project that interacts with its surroundings.",
            ],
          },
          {
            h: "How does any Arduino program work?",
            p: "Every program you write for Arduino - however simple or complex - rests on two core functions and no others. The first, setup(), runs only once the moment the board powers on; there you initialise the pins and configure settings. The second, loop(), runs after it forever, iteration after iteration, and there lives your project's main logic.",
            flow: ["power on", "setup() once", "loop() forever", "read & control"],
          },
          {
            h: "Your first program: making an LED blink",
            p: [
              "Nothing cements understanding like the first experiment. The program below - known as Blink - makes the board's built-in LED blink every second. Connect the board, paste the code into the Arduino IDE, then press Upload to see the result immediately.",
              "Notice how we use pinMode inside setup to tell the board we will use the pin as an output, then inside loop we raise the voltage (HIGH) to light the LED, wait a second with delay, lower the voltage (LOW) to turn it off, and wait another second - then loop repeats forever.",
            ],
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
            h: "The Arduino language",
            p: "The code above is written in a language based on C and C++, but Arduino simplified it greatly and hid its complexity behind friendly-named functions like digitalWrite and delay. That is the secret of the platform's popularity: you write human-readable commands, and the environment turns them into instructions the microcontroller understands. Over time you will discover ready-made libraries that reduce working with displays, sensors, and wireless to a few lines.",
          },
          {
            h: "Practical steps to start",
            steps: [
              { t: "Install the toolchain", d: "Download Arduino IDE 2 (current version 2.3) from the official site; it is editor, compiler, and uploader in one tool." },
              { t: "Select board and port", d: "In the Tools menu choose your board (e.g. Arduino Uno) and the connection port (COM on Windows), or the computer won't know where to send the code." },
              { t: "Upload the code", d: "Press Upload and wait for the done message; the board runs your program immediately and keeps it even if you unplug it." },
            ],
          },
        ],
        takeaways: [
          "Arduino is an open-source platform that makes controlling the physical world accessible to everyone.",
          "The board's heart is a microcontroller, surrounded by digital (yes/no) and analog (how-much) pins.",
          "Every program rests on setup(), which runs once, and loop(), which repeats forever.",
          "The Arduino language is based on C/C++ but simplified behind easy functions and ready libraries.",
        ],
        note: "Mastered blink? The next step is to wire a push button (digital input) and a light-dependent resistor (analog input), so your project reads the world and reacts to it - not merely blinks.",
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
    read: { ar: "١١ دقيقة قراءة", en: "11 min read" },
    title: {
      ar: "التعرّف على الوجوه باستخدام Python و OpenCV",
      en: "Face Recognition with Python and OpenCV",
    },
    desc: {
      ar: "كيف «يرى» الحاسوب الصورة أصلاً؟ ومن مصفوفةٍ من الأرقام إلى كشف الوجوه بمكتبة OpenCV — شرحٌ عملي خطوةً بخطوة، من الكلاسيكي إلى الحديث.",
      en: "How does a computer even 'see' an image? From an array of numbers to detecting faces with OpenCV - a practical, step-by-step guide from classic to modern.",
    },
    article: {
      ar: {
        lead: "بالنسبة إلى الإنسان، رؤية وجهٍ في صورةٍ أمرٌ بديهي لا يستحق التفكير. أما بالنسبة إلى الحاسوب، فالصورة ليست إلا شبكةً ضخمة من الأرقام لا معنى لها في ذاتها. في هذا الشرح نرى كيف نعلّم الآلة أن تجد الوجوه داخل هذه الأرقام، مستعينين بمكتبة الرؤية الحاسوبية الأشهر OpenCV.",
        sections: [
          {
            h: "كيف يرى الحاسوب الصورة؟",
            p: [
              "قبل أن نكشف أي وجه، علينا أن نفهم كيف تُخزَّن الصورة أصلاً. الحاسوب لا يرى «قطةً» أو «وجهاً»؛ هو يرى مصفوفةً ثنائية الأبعاد من النقاط الصغيرة التي نسمّيها بكسلات (Pixels)، ولكل بكسلٍ قيمةٌ رقمية تمثّل لونه أو شدّته.",
              "في الصورة الملوّنة يُخزَّن كل بكسل في ثلاث قنوات: أحمر وأخضر وأزرق (RGB)، فيتكوّن أي لونٍ من مزجها. أما في الصورة الرمادية فتُخزَّن قناةٌ واحدة فقط تمثّل شدّة الإضاءة من الأسود إلى الأبيض. وهذه المصفوفة الرقمية — لا الصورة كما نراها — هي ما تعالجه كل خوارزميات الرؤية الحاسوبية.",
            ],
          },
          {
            h: "ما هي مكتبة OpenCV؟",
            p: [
              "OpenCV اختصارٌ لـ Open Source Computer Vision، وهي مكتبةٌ مفتوحة المصدر تمنح الحاسوب القدرة على كشف البيانات المرئية ومعالجتها والتعرّف عليها بطريقةٍ تقارب رؤية الإنسان. تعمل على أنظمة Windows و macOS و Linux، وتُستخدم في كل شيءٍ من كاميرات المراقبة إلى السيارات ذاتية القيادة.",
              "تعتمد OpenCV داخلياً على مكتبة NumPy التي تمثّل الصورة كمصفوفةٍ عددية وتُسرِّع العمليات الحسابية عليها. ولكشف الوجوه الأمامية تحديداً نستعين بنموذجٍ جاهزٍ مدرَّبٍ مسبقاً يُعرف بمصنّف Haar Cascade، فلا نحتاج إلى تدريب أي شيءٍ من الصفر.",
            ],
            list: [
              "OpenCV: تكشف الوجوه وتعالجها في الصور والفيديو.",
              "NumPy: تمثّل الصورة كمصفوفةٍ ثنائية الأبعاد وتُسرّع الحساب.",
              "مصنّف Haar Cascade: نموذجٌ مدرَّبٌ مسبقاً لكشف الوجوه الأمامية.",
            ],
          },
          {
            h: "كيف يعمل مصنّف Haar؟",
            p: "لا يبحث المصنّف عن «وجهٍ» بالمعنى الذي نفهمه، بل عن أنماطٍ من التباين بين مناطق فاتحةٍ وداكنة تتكرّر في كل الوجوه: منطقة العينين أغمق من الخدّين، وجسر الأنف أفتح ممّا حوله، وهكذا. يمرّر المصنّف نافذةً صغيرة فوق الصورة كلها، وفي كل موضعٍ يسأل سلسلةً من الأسئلة السريعة المتتالية؛ فإن فشلت المنطقة في أول سؤال استُبعدت فوراً دون إضاعة وقت، وإن نجحت في كل الأسئلة اعتُبرت وجهاً. هذا التتابع من المراحل هو معنى كلمة Cascade.",
          },
          {
            h: "التجهيز قبل الكتابة",
            steps: [
              { t: "ثبّت المكتبة", d: "نفّذ الأمر pip install opencv-python في موجّه الأوامر؛ يعمل مع أحدث إصدارات Python 3." },
              { t: "نزّل المصنّف", d: "احصل على ملف haarcascade_frontalface_default.xml من مستودع OpenCV الرسمي على GitHub، وضعه في مجلد العمل." },
              { t: "جهّز صورة اختبار", d: "احفظ صورةً بها وجهٌ واضحٌ أمامي في المجلد نفسه باسم test.jpg." },
            ],
          },
          {
            h: "كود كشف الوجوه",
            p: [
              "الآن نجمع كل ما سبق في بضعة أسطر. البرنامج يقرأ الصورة، يحوّلها إلى تدرّجٍ رمادي (لأن التباين وحده يكفي لكشف الوجه، والرمادي أسرع في المعالجة)، ثم يمرّر المصنّف ليجد كل الوجوه ويرسم حولها مستطيلاتٍ برتقالية.",
              "كل وجهٍ يعيده المصنّف يأتي على صورة أربعة أرقام: x و y لموضع الركن، و w و h للعرض والارتفاع — وبها نرسم المستطيل بدقّة.",
            ],
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
            h: "ماذا تعني أرقام detectMultiScale؟",
            p: "المعاملان اللذان تراهما بعد الصورة يتحكّمان في دقّة الكشف وسرعته. المعامل الأول (1.1) هو معامل التدرّج: في كل تمريرةٍ تُصغَّر الصورة قليلاً للبحث عن وجوهٍ بأحجامٍ مختلفة، وكلما اقتربت قيمته من 1 زادت الدقّة وبطؤت المعالجة. أما الرقم الثاني (4) فهو أدنى عددٍ من «الجيران» المتجاورين اللازم لقبول منطقةٍ ما كوجه؛ رفعه يقلّل النتائج الخاطئة لكنه قد يُفوّت وجوهاً حقيقية. ضبط هذين الرقمين هو فنّ الموازنة بين ألا تُفوّت وجهاً وألا تكشف وجوهاً وهمية.",
          },
          {
            h: "الطريقة الحديثة (2026)",
            p: [
              "مصنّف Haar كلاسيكيٌّ رائعٌ للتعلّم وسهل التشغيل، لكن له حدوداً: يضعف كثيراً مع الوجوه الجانبية أو المائلة أو المحجوبة جزئياً، وقد يُطلق إنذاراتٍ كاذبة على أنماطٍ تشبه الوجه.",
              "المعيار الحديث اليوم انتقل إلى الكاشفات القائمة على الشبكات العصبية العميقة (DNN). وأبرزها نموذج YuNet المدمج في OpenCV نفسها: نموذجٌ خفيفٌ للغاية (حجمه أقل من ميجابايت) لكنه سريعٌ ودقيقٌ حتى مع الوجوه المائلة والمزدحمة، ويعمل على أجهزةٍ متواضعة.",
            ],
          },
          {
            h: "من الكشف إلى التعرّف",
            p: "انتبه إلى فرقٍ جوهري: ما فعلناه حتى الآن هو الكشف (Detection) — أي معرفة أنّ هنا وجهاً وأين هو. أما التعرّف (Recognition) فهو الخطوة الأصعب: أن تقول إنّ هذا الوجه هو «أحمد» تحديداً. لتحقيق ذلك تُستخدم شبكات التضمين العميقة (Embeddings) التي تحوّل كل وجهٍ إلى بصمةٍ رقمية من مئات الأرقام؛ فالوجوه المتشابهة تنتج بصماتٍ متقاربة، والمختلفة تنتج بصماتٍ متباعدة، وبمقارنة البصمات نميّز الأشخاص.",
          },
        ],
        takeaways: [
          "الصورة عند الحاسوب مصفوفة أرقام؛ التحويل إلى الرمادي يبسّط ويُسرّع المعالجة.",
          "OpenCV مع NumPy ومصنّف Haar تكفي لكشف الوجوه دون تدريبٍ من الصفر.",
          "معاملا detectMultiScale يوازنان بين الدقّة والسرعة والنتائج الخاطئة.",
          "المعيار الحديث كاشفات DNN مثل YuNet، والكشف يختلف عن التعرّف على الهوية.",
        ],
        note: "أتقنتَ الكشف؟ الخطوة التالية أن تجرّب YuNet لكشفٍ أدقّ، ثم شبكات التضمين لبناء نظامٍ يميّز شخصاً بعينه لا مجرّد وجودِ وجه.",
      },
      en: {
        lead: "For a human, spotting a face in a photo is obvious, not worth a thought. For a computer, the image is nothing but a huge grid of numbers meaningless in itself. In this guide we see how to teach the machine to find faces inside those numbers, using the most popular computer-vision library, OpenCV.",
        sections: [
          {
            h: "How does a computer see an image?",
            p: [
              "Before we detect any face, we must understand how the image is stored in the first place. The computer does not see a 'cat' or a 'face'; it sees a two-dimensional array of tiny dots we call pixels, each with a numeric value representing its colour or intensity.",
              "In a colour image each pixel is stored in three channels: red, green, and blue (RGB), and any colour is formed by mixing them. In a grayscale image only one channel is stored, representing brightness from black to white. This numeric array - not the image as we see it - is what every computer-vision algorithm processes.",
            ],
          },
          {
            h: "What is OpenCV?",
            p: [
              "OpenCV stands for Open Source Computer Vision, an open-source library that gives a computer the ability to detect, process, and recognise visual data in a way close to human sight. It runs on Windows, macOS, and Linux and is used in everything from surveillance cameras to self-driving cars.",
              "OpenCV relies internally on NumPy, which represents the image as a numeric array and speeds up computation on it. To detect frontal faces specifically we use a ready, pre-trained model known as the Haar Cascade classifier, so we don't need to train anything from scratch.",
            ],
            list: [
              "OpenCV: detects and processes faces in images and video.",
              "NumPy: represents the image as a 2D array and speeds up the maths.",
              "Haar Cascade classifier: a pre-trained model for frontal-face detection.",
            ],
          },
          {
            h: "How does the Haar classifier work?",
            p: "The classifier does not look for a 'face' in the sense we understand, but for patterns of contrast between light and dark regions that recur in every face: the eye region is darker than the cheeks, the nose bridge is lighter than its surroundings, and so on. It slides a small window across the whole image, and at each position asks a series of quick successive questions; if the region fails the first question it is dropped immediately without wasting time, and if it passes them all it is considered a face. This sequence of stages is the meaning of the word Cascade.",
          },
          {
            h: "Setup before coding",
            steps: [
              { t: "Install the library", d: "Run pip install opencv-python in your terminal; it works with the latest Python 3 releases." },
              { t: "Download the classifier", d: "Get haarcascade_frontalface_default.xml from the official OpenCV GitHub repository and place it in your working folder." },
              { t: "Prepare a test image", d: "Save an image with a clear frontal face in the same folder as test.jpg." },
            ],
          },
          {
            h: "The face-detection code",
            p: [
              "Now we combine everything above in a few lines. The program reads the image, converts it to grayscale (because contrast alone is enough to detect a face, and grayscale is faster to process), then runs the classifier to find all faces and draw orange rectangles around them.",
              "Every face the classifier returns comes as four numbers: x and y for the corner position, and w and h for width and height - with which we draw the rectangle precisely.",
            ],
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
            h: "What do the detectMultiScale numbers mean?",
            p: "The two parameters after the image control detection accuracy and speed. The first (1.1) is the scale factor: on each pass the image is shrunk slightly to search for faces of different sizes, and the closer it is to 1 the more accurate but slower the process. The second (4) is the minimum number of neighbouring detections required to accept a region as a face; raising it reduces false positives but may miss real faces. Tuning these two numbers is the art of balancing between not missing a face and not detecting phantom ones.",
          },
          {
            h: "The modern approach (2026)",
            p: [
              "The Haar classifier is a great classic for learning and easy to run, but it has limits: it struggles badly with side, tilted, or partially occluded faces, and may raise false alarms on face-like patterns.",
              "Today's standard has moved to detectors based on deep neural networks (DNN). The most notable is the YuNet model built into OpenCV itself: an extremely lightweight model (under 1 MB) yet fast and accurate even on tilted and crowded faces, running on modest hardware.",
            ],
          },
          {
            h: "From detection to recognition",
            p: "Note a fundamental difference: what we've done so far is detection - knowing that there is a face here and where it is. Recognition is the harder step: saying that this face is specifically 'Ahmed'. To achieve that we use deep embedding networks that turn each face into a numeric fingerprint of hundreds of numbers; similar faces produce close fingerprints and different faces produce distant ones, and by comparing fingerprints we tell people apart.",
          },
        ],
        takeaways: [
          "To a computer an image is an array of numbers; grayscale simplifies and speeds up processing.",
          "OpenCV with NumPy and a Haar classifier are enough to detect faces without training from scratch.",
          "The detectMultiScale parameters balance accuracy, speed, and false positives.",
          "The modern standard is DNN detectors like YuNet, and detection differs from identity recognition.",
        ],
        note: "Mastered detection? The next step is to try YuNet for sharper detection, then embedding networks to build a system that recognises a specific person, not merely the presence of a face.",
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
    read: { ar: "١٦ دقيقة قراءة", en: "16 min read" },
    title: {
      ar: "أنظمة العد الرقمية: من العشري إلى الثنائي والثماني والست عشري",
      en: "Numbering Systems: From Decimal to Binary, Octal, and Hexadecimal",
    },
    desc: {
      ar: "شرحٌ مؤصَّل لأنظمة العد على طريقة كتاب Simply DIGITAL: القاعدة والقوة، لماذا يفكّر الحاسوب بالأصفار والآحاد، والتحويل بين الأنظمة الأربعة بأمثلةٍ محلولة خطوةً بخطوة.",
      en: "A grounded guide to numbering systems in the spirit of Simply DIGITAL: base and power, why a computer thinks in zeros and ones, and converting between the four systems with fully worked examples.",
    },
    article: {
      ar: {
        lead: "قبل أن تصمّم أي دائرةٍ رقمية أو تكتب أي برنامجٍ يتعامل مع العتاد، عليك أن تتقن اللغة التي تتحدّث بها الآلة. أنظمة العد هي هذا الأساس: طرقٌ مختلفة لتمثيل القيمة نفسها بأعدادٍ مختلفة من الرموز. في هذا الشرح ننطلق من النظام العشري الذي تربّينا عليه، ونبني فوقه بقيّة الأنظمة لبنةً لبنة، مع مثالٍ محلولٍ لكل فكرةٍ جديدة.",
        sections: [
          {
            h: "رقمٌ أم عدد؟",
            p: [
              "قبل أي شيء، لنتّفق على مصطلحين كثيراً ما يُخلَط بينهما. الرمز الواحد — من 0 إلى 9 — نسمّيه رقماً (Figure). وما زاد عن الرقم 9 نسمّيه عدداً (Number)؛ إذ يتكوّن حينها من رقمين أو أكثر مرتّبين في خاناتٍ متعددة، لكل خانةٍ قيمةٌ ودلالةٌ تختلف حسب موقعها.",
              "بعبارةٍ أخرى: الأرقام هي وحدات البناء، والأعداد تُركَّب منها لتمثيل قيمٍ أكبر من 9. فالرقم 5 رقمٌ واحد، لكن 573 عددٌ مكوَّنٌ من ثلاثة أرقام، ولكلٍّ منها وزنٌ مختلف حسب خانته.",
            ],
          },
          {
            h: "الفكرة الجوهرية: القاعدة والقوة",
            p: [
              "أي نظام عدٍّ في الدنيا يقوم على ركيزتين اثنتين: قاعدة (Base) تمثّل عدد الرموز المتاحة في النظام، وقوة (Power) تمثّل قيمة موقع كل خانة. قيمة أي عددٍ ليست إلا مجموع حاصل ضرب كل رقمٍ في (القاعدة مرفوعةً لأُسِّ موقعه).",
              "لنرَ ذلك في العدد العشري 573. قاعدة النظام العشري هي 10 (لأن رموزه عشرة: من 0 إلى 9)، وقوة كل خانةٍ هي أُسُّ موقعها بدءاً من صفرٍ عند اليمين:",
            ],
            code:
              "  5      7      3      (base 10)\n" +
              " 10^2   10^1   10^0\n" +
              "----------------------\n" +
              " 5x100 + 7x10 + 3x1\n" +
              "  500  +  70  +  3   =  573",
          },
          {
            h: "ماذا عن الكسور؟ القوى السالبة",
            p: [
              "الجميل في قاعدة «القاعدة والقوة» أنها تعمل مع الكسور أيضاً، بلا استثناء. الخانات على يسار الفاصلة العشرية تبدأ قوّتها من الصفر وتزيد بمقدار 1 كلما اتجهنا يساراً، أما الخانات على يمين الفاصلة فتبدأ قوّتها من ‎−1 وتقلّ (تصبح أكثر سلبية) كلما اتجهنا يميناً.",
              "تحليل العدد 114.67 يوضّح الأمر بالكامل: الأرقام على اليسار قوّتها موجبة، والأرقام الكسرية على اليمين قوّتها سالبة.",
            ],
            code:
              "  1     1     4  .  6      7\n" +
              " 10^2  10^1  10^0  10^-1  10^-2\n" +
              "-------------------------------\n" +
              " 100 + 10 + 4 + 0.6 + 0.07  =  114.67",
          },
          {
            h: "لماذا اختار الحاسوب الثنائي؟",
            p: [
              "لو كان النظام العشري مريحاً لنا نحن البشر، فلماذا لا يستخدمه الحاسوب؟ الجواب في طبيعة الدوائر الإلكترونية نفسها. فالعنصر الإلكتروني يفرّق بسهولةٍ ووثوقٍ بين حالتين فقط: أن يمرّ تيارٌ كهربي في السلك أو المسار (إشارة مرتفعة High قيمتها 1)، أو ألا يمرّ (إشارة منخفضة Low قيمتها 0).",
              "لو حاولنا أن نجعل الدائرة تميّز عشر مستوياتٍ مختلفة من الجهد (لتمثيل الأرقام من 0 إلى 9) لأصبحت هشّةً وحسّاسةً لأدنى ضوضاء. أما حالتان فقط فأمرٌ سهلٌ وموثوق. لذلك اعتمد الحاسوب النظام الثنائي (قاعدته 2) لغةً له.",
              "وكما لكل عددٍ خاناتٌ لها قيم، فأدنى خانةٍ في العدد الثنائي — أقصى اليمين — تُسمّى البت الأقل أهمية (LSB) لأنها تحمل أصغر قيمة، وأعلى خانةٍ — أقصى اليسار — تُسمّى البت الأكثر أهمية (MSB) لأنها تحمل أكبر قيمة.",
            ],
          },
          {
            h: "كيف نعدّ في النظام الثنائي؟",
            p: [
              "العدّ الثنائي يتبع منطق العدّ العشري نفسه تماماً، لكن برمزين بدل عشرة. حين تبلغ خانةٌ أقصى قيمةٍ لها (وهي 1) تعود إلى 0 وتزيد الخانة التي على يسارها بمقدار 1 — تماماً كما نعود من 9 إلى 0 ونزيد خانة العشرات في النظام العشري.",
              "ولاحظ أن الأصفار على يسار العدد الثنائي لا قيمة لها، تماماً كما في العشري: فالعدد 3 هو نفسه 03 وهو 003، والعدد الثنائي 11 هو نفسه 011 وهو 0011.",
            ],
            code:
              "dec :  0   1   2   3   4    5    6    7\n" +
              "bin :  000 001 010 011 100  101  110  111",
          },
          {
            h: "كم خانةً نحتاج؟ الاحتمالات وأقصى قيمة",
            p: [
              "سؤالٌ عملي يواجهك دائماً: إذا أردتُ تمثيل عددٍ معيّن من القيم، كم خانةً ثنائية أحتاج؟ الإجابة في علاقتين بسيطتين، مع تمييزٍ مهمٍّ بينهما.",
              "عدد الاحتمالات P هو كم قيمةً مختلفة يمكنك تمثيلها بـ n خانة، وهو 2 مرفوعةً للأُس n. أما أقصى قيمة Vmax فهي أكبر عددٍ فعلي يمكن الوصول إليه، وهي أقلّ من عدد الاحتمالات بواحد (لأننا نبدأ العدّ من صفرٍ لا من واحد).",
            ],
            code:
              "P    = 2^n        (possibilities)\n" +
              "Vmax = 2^n - 1    (max value)\n\n" +
              "n=1 :  2 values  (0 .. 1)\n" +
              "n=2 :  4 values  (0 .. 3)\n" +
              "n=3 :  8 values  (0 .. 7)\n" +
              "n=4 : 16 values  (0 .. 15)",
          },
          {
            h: "لماذا نحتاج التحويل أصلاً؟",
            p: [
              "قد تتساءل: ما جدوى كل هذا التحويل بين الأنظمة؟ لنأخذ مثالاً يستخدمه الملايين يومياً — الآلة الحاسبة. حين تجمع 117 مع 345 وتضغط «يساوي»، يظهر لك 462 على الشاشة بأرقامٍ عشرية مألوفة.",
              "لكن ما يجري في الداخل مختلفٌ تماماً. الآلة تحوّل 117 إلى قيمته الثنائية، وتحوّل 345 إلى قيمته الثنائية، ثم تُجري الجمع في النظام الثنائي (لغة الآلة الوحيدة)، وينتج عددٌ ثنائي طويل لا تستطيع عقولنا قراءته. وأخيراً تحوّل الآلة هذا الناتج إلى صورته العشرية لترسمه على الشاشة بشكلٍ نفهمه.",
              "هذا هو جوهر الأمر: نحن نحتاج جسراً بين «لغة الآلة» (الثنائي) و«لغة الحساب في عقولنا» (العشري). وإتقان التحويل بالورقة والقلم هو ما يجعلك تفهم ما يجري داخل كل معالجٍ من حولك.",
            ],
          },
          {
            h: "التحويل من عشري إلى ثنائي (القسمة المتتالية)",
            p: [
              "للتحويل من العشري إلى الثنائي نستخدم القسمة المتتالية على قاعدة النظام المطلوب — أي على 2. نقسم العدد على 2 ونسجّل الباقي (0 أو 1)، ثم نقسم ناتج القسمة على 2 مرةً أخرى، ونستمر حتى يصل الناتج إلى صفر.",
              "الخدعة في النهاية: نقرأ البواقي من الأسفل إلى الأعلى، أي نبدأ بآخر باقٍ حصلنا عليه ثم الذي قبله وهكذا. لنحوّل العدد 20:",
            ],
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
            p: [
              "الاتجاه المعاكس أسهل: للتحويل من الثنائي إلى العشري نضرب كل خانةٍ في قيمتها الموقعية — أي في 2 مرفوعةً لأُسّ موقعها — ثم نجمع كل النواتج.",
              "لاحظ أن الخانات التي فيها صفرٌ لا تضيف شيئاً، فنكتفي عملياً بجمع قيم الخانات التي فيها واحد. لنحوّل العدد الثنائي 101101:",
            ],
            code:
              "  1    0    1    1    0    1\n" +
              " 2^5  2^4  2^3  2^2  2^1  2^0\n" +
              "-----------------------------\n" +
              " 32 +  0 +  8 +  4 +  0 +  1  =  45\n\n" +
              "101101 (bin) = 45 (dec)",
          },
          {
            h: "تحويل الكسور العشرية",
            p: [
              "ماذا لو كان لدينا كسرٌ عشري لا عددٌ صحيح؟ هنا نعكس المنطق: بدل القسمة المتتالية نستخدم الضرب المتتالي في قاعدة النظام (2). نضرب الكسر في 2، ونأخذ الجزء الصحيح من الناتج (0 أو 1)، ثم نعيد ضرب الجزء الكسري المتبقّي، من الأعلى إلى الأسفل هذه المرة.",
              "نتوقّف في إحدى حالتين: إمّا أن يصبح الكسر صفراً (فلا جدوى من الاستمرار)، أو أن يظلّ الكسر يتكرّر بلا نهاية، فنكتفي حينها بأربع أو خمس خاناتٍ كسرية. لنحوّل 0.3125:",
            ],
            code:
              "0.3125 x 2 = 0.625  ->  0\n" +
              "0.625  x 2 = 1.25   ->  1\n" +
              "0.25   x 2 = 0.5    ->  0\n" +
              "0.5    x 2 = 1.0    ->  1   (stop)\n\n" +
              "0.3125 (dec) = 0.0101 (bin)",
          },
          {
            h: "النظام الثماني (Octal)",
            p: [
              "الأعداد الثنائية دقيقةٌ للآلة لكنها طويلةٌ ومرهقةٌ لنا: تخيّل أن تقرأ أو تكتب عدداً ثنائياً من اثنتي عشرة خانة دون خطأ. لذلك وُجد النظام الثماني: قاعدته 8 ورموزه من 0 إلى 7، وغرضه أن يعبّر عن الأعداد الثنائية الطويلة بصورةٍ أقصر يفهمها عقلنا الرياضي.",
              "ومن المهم أن تدرك أن الرقم الثماني لا قيمة له في ذاته، بل هو قيمةٌ تعبيريةٌ فقط تختصر لنا الثنائي وتُسهّل حفظه. والسرّ أن كل رمزٍ ثماني يمثّل بالضبط ثلاث خاناتٍ ثنائية (لأن ثلاث خاناتٍ تعطي ثماني احتمالات، من 000 إلى 111).",
              "لذا للتحويل من ثنائي إلى ثماني نقسّم العدد إلى مجموعاتٍ من ثلاث خاناتٍ ابتداءً من اليمين، ونضيف أصفاراً على اليسار إن نقصت المجموعة الأخيرة، ثم نحوّل كل مجموعةٍ إلى رمزها الثماني:",
            ],
            code:
              "10110001  ->  010 110 001\n" +
              "               2   6   1\n\n" +
              "10110001 (bin) = 261 (oct)",
          },
          {
            h: "النظام الست عشري (Hexadecimal)",
            p: [
              "الست عشري هو التطوّر الأمثل للتعبير عن الثنائي، وهو الأكثر شيوعاً في عالم الحوسبة الحقيقي. قاعدته 16، ورموزه من 0 إلى 9 ثم من A إلى F. ولمَ الأحرف؟ لأن القيم من 10 إلى 15 لا يمكن كتابتها بأرقامها العشرية داخل خانةٍ واحدة (فـ 10 مثلاً رقمان لا رقم)، فاصطُلح على تمثيلها بالأحرف: A تساوي 10، وصولاً إلى F التي تساوي 15.",
              "وكما الثماني، فقيمة الرمز الست عشري تعبيريةٌ لا ملموسة. والميزة الكبرى أن كل رمزٍ ست عشري يمثّل بالضبط أربع خاناتٍ ثنائية، فهو الأكثر إيجازاً — ولهذا تراه في عناوين الذاكرة وأكواد الألوان (مثل ‎#F97316).",
              "للتحويل من ثنائي إلى ست عشري نجمّع الخانات أربعاً أربعاً من اليمين، ونحوّل كل مجموعةٍ إلى رمزها:",
            ],
            code:
              "10110001  ->  1011 0001\n" +
              "               B    1\n\n" +
              "10110001 (bin) = B1 (hex)",
          },
          {
            h: "المباشر وغير المباشر: أي طريقةٍ أفضل؟",
            p: [
              "عند التحويل بين الثماني (أو الست عشري) والعشري، أمامك طريقان. المباشر: تقسم أو تضرب على القاعدة نفسها (8 أو 16) مباشرةً. وغير المباشر: تمرّ أولاً عبر النظام الثنائي كوسيط.",
              "الطريقة المباشرة أسرع لأنها بلا خطوةٍ وسيطة، لكنها معقّدةٌ حسابياً وقد تحتاج آلةً حاسبة (فالضرب أو القسمة على 16 ليس سهلاً ذهنياً). أما غير المباشرة فأطول قليلاً لكنها أبسط بكثير، لأن التعامل مع الرقم 2 ومضاعفاته أيسر على العقل من التعامل مع 8 أو 16. لهذا يفضّلها كثيرون رغم طولها.",
            ],
          },
          {
            h: "جدولٌ مرجعي (0 إلى 15)",
            p: "احفظ هذا الجدول جيداً؛ فهو خريطة التنقّل السريع بين الأنظمة الأربعة، وستعود إليه مراراً في كل مشروعٍ رقمي:",
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
          "الرقم رمزٌ واحد، والعدد رقمان أو أكثر لكلٍّ منهما وزنٌ حسب موقعه.",
          "كل نظام عدٍّ يُبنى على قاعدةٍ (عدد الرموز) وقوةٍ (قيمة الموقع)، وتعمل القاعدة مع الكسور أيضاً.",
          "الثنائي لغة العتاد لأنه يعتمد على حالتين موثوقتين: مرور تيارٍ أو انعدامه.",
          "عشري ← ثنائي بالقسمة المتتالية على 2، وثنائي ← عشري بالضرب في قوى 2، والكسور بالضرب المتتالي.",
          "كل رمزٍ ثماني = 3 خانات ثنائية، وكل رمزٍ ست عشري = 4 خانات — وقيمتهما تعبيريةٌ تختصر الثنائي.",
        ],
        note: "أتقنتَ التحويل؟ الخطوة التالية هي العمليات الحسابية في النظام الثنائي وتمثيل الأعداد السالبة عبر المتمّم (Complement) — وهي أساس ما تفعله وحدة الحساب والمنطق (ALU) داخل أي معالج.",
      },
      en: {
        lead: "Before you design any digital circuit or write any program that talks to hardware, you must master the language the machine speaks. Numbering systems are that foundation: different ways to represent the same value with different sets of symbols. Here we start from the decimal system we grew up with and build the rest on top of it, brick by brick, with a worked example for every new idea.",
        sections: [
          {
            h: "Digit or number?",
            p: [
              "First, let's agree on two terms that are often confused. A single symbol - 0 to 9 - is a figure (digit). Anything greater than 9 is a number, made of two or more digits arranged in positions, each carrying a value that differs by its place.",
              "In other words: digits are the building blocks, and numbers are assembled from them to represent values larger than 9. The 5 is a single digit, but 573 is a number of three digits, each with a different weight by its position.",
            ],
          },
          {
            h: "The core idea: base and power",
            p: [
              "Every numbering system in the world rests on two pillars: a base, the count of available symbols, and a power, the value of each position. The value of any number is nothing but the sum of each digit times (base raised to the power of its position).",
              "Let's see this in the decimal 573. The decimal base is 10 (its symbols are ten: 0 to 9), and each position's power is its place exponent starting from zero on the right:",
            ],
            code:
              "  5      7      3      (base 10)\n" +
              " 10^2   10^1   10^0\n" +
              "----------------------\n" +
              " 5x100 + 7x10 + 3x1\n" +
              "  500  +  70  +  3   =  573",
          },
          {
            h: "What about fractions? Negative powers",
            p: [
              "The beauty of the base-and-power rule is that it works with fractions too, without exception. Positions left of the decimal point start at power zero and grow by 1 as we move left, while positions to the right start at -1 and decrease (become more negative) as we move right.",
              "Decomposing 114.67 shows it fully: the digits on the left have positive powers, and the fractional digits on the right have negative powers.",
            ],
            code:
              "  1     1     4  .  6      7\n" +
              " 10^2  10^1  10^0  10^-1  10^-2\n" +
              "-------------------------------\n" +
              " 100 + 10 + 4 + 0.6 + 0.07  =  114.67",
          },
          {
            h: "Why did the computer choose binary?",
            p: [
              "If the decimal system is comfortable for us humans, why doesn't the computer use it? The answer lies in the nature of electronic circuits themselves. An electronic component easily and reliably distinguishes only two states: current flowing in the wire or track (a HIGH signal valued 1), or not flowing (a LOW signal valued 0).",
              "If we tried to make a circuit distinguish ten different voltage levels (to represent 0 to 9) it would become fragile and sensitive to the slightest noise. Two states, however, are easy and reliable. So the computer adopted binary (base 2) as its language.",
              "And as every number has positions with values, the lowest position in a binary number - far right - is called the Least Significant Bit (LSB) because it carries the smallest value, and the highest - far left - is the Most Significant Bit (MSB) because it carries the largest.",
            ],
          },
          {
            h: "How do we count in binary?",
            p: [
              "Binary counting follows the exact same logic as decimal, but with two symbols instead of ten. When a position reaches its maximum (1) it resets to 0 and increments the position to its left - just as we go from 9 back to 0 and increment the tens in decimal.",
              "Note that zeros to the left of a binary number carry no value, exactly as in decimal: 3 is the same as 03 and 003, and the binary 11 is the same as 011 and 0011.",
            ],
            code:
              "dec :  0   1   2   3   4    5    6    7\n" +
              "bin :  000 001 010 011 100  101  110  111",
          },
          {
            h: "How many bits do we need? Possibilities and max value",
            p: [
              "A practical question always faces you: if I want to represent a certain count of values, how many binary positions do I need? The answer is two simple relations, with an important distinction between them.",
              "The possibilities P is how many different values you can represent with n bits, and it is 2 raised to the power n. The maximum value Vmax is the largest actual number you can reach, and it is one less than the possibilities (because we start counting from zero, not one).",
            ],
            code:
              "P    = 2^n        (possibilities)\n" +
              "Vmax = 2^n - 1    (max value)\n\n" +
              "n=1 :  2 values  (0 .. 1)\n" +
              "n=2 :  4 values  (0 .. 3)\n" +
              "n=3 :  8 values  (0 .. 7)\n" +
              "n=4 : 16 values  (0 .. 15)",
          },
          {
            h: "Why do we even need conversion?",
            p: [
              "You might wonder: what is the point of all this converting between systems? Take an example millions use daily - the calculator. When you add 117 to 345 and press equals, 462 appears on the screen in familiar decimal digits.",
              "But what happens inside is completely different. The machine converts 117 to its binary value, converts 345 to its binary value, then performs the addition in binary (the machine's only language), producing a long binary number our minds cannot read. Finally the machine converts that result back to decimal to draw it on the screen in a form we understand.",
              "This is the essence: we need a bridge between the 'machine language' (binary) and the 'arithmetic language of our minds' (decimal). Mastering conversion with pen and paper is what makes you understand what goes on inside every processor around you.",
            ],
          },
          {
            h: "Decimal to binary (successive division)",
            p: [
              "To convert from decimal to binary we use successive division by the target base - that is, by 2. We divide the number by 2 and record the remainder (0 or 1), then divide the quotient by 2 again, and continue until the quotient reaches zero.",
              "The trick at the end: we read the remainders from bottom to top, starting with the last remainder we got, then the one before it, and so on. Let's convert 20:",
            ],
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
            p: [
              "The opposite direction is easier: to convert from binary to decimal we multiply each position by its positional value - that is, by 2 raised to the power of its place - then add all the results.",
              "Note that positions holding a zero add nothing, so in practice we just add the values of the positions holding a one. Let's convert the binary 101101:",
            ],
            code:
              "  1    0    1    1    0    1\n" +
              " 2^5  2^4  2^3  2^2  2^1  2^0\n" +
              "-----------------------------\n" +
              " 32 +  0 +  8 +  4 +  0 +  1  =  45\n\n" +
              "101101 (bin) = 45 (dec)",
          },
          {
            h: "Converting decimal fractions",
            p: [
              "What if we have a fraction, not a whole number? Here we reverse the logic: instead of successive division we use successive multiplication by the base (2). We multiply the fraction by 2, take the integer part of the result (0 or 1), then multiply the remaining fractional part again, from top to bottom this time.",
              "We stop in one of two cases: either the fraction becomes zero (no point continuing), or it repeats endlessly, in which case we settle for four or five fractional positions. Let's convert 0.3125:",
            ],
            code:
              "0.3125 x 2 = 0.625  ->  0\n" +
              "0.625  x 2 = 1.25   ->  1\n" +
              "0.25   x 2 = 0.5    ->  0\n" +
              "0.5    x 2 = 1.0    ->  1   (stop)\n\n" +
              "0.3125 (dec) = 0.0101 (bin)",
          },
          {
            h: "The octal system",
            p: [
              "Binary numbers are precise for the machine but long and tiring for us: imagine reading or writing a twelve-bit binary number without error. So the octal system was created: base 8, symbols 0 to 7, and its purpose is to express long binary numbers in a shorter form our mathematical minds can grasp.",
              "It is important to realise that an octal digit has no value in itself; it is purely an expressive value that shortens binary and eases memorising it. The secret is that each octal symbol represents exactly three binary positions (because three bits give eight possibilities, from 000 to 111).",
              "So to convert binary to octal we split the number into groups of three bits starting from the right, padding with zeros on the left if the last group is short, then convert each group to its octal symbol:",
            ],
            code:
              "10110001  ->  010 110 001\n" +
              "               2   6   1\n\n" +
              "10110001 (bin) = 261 (oct)",
          },
          {
            h: "The hexadecimal system",
            p: [
              "Hexadecimal is the optimal evolution for expressing binary, and it is the most common in the real computing world. Its base is 16, its symbols run 0 to 9 then A to F. Why letters? Because the values 10 to 15 cannot be written with their decimal digits inside one position (10, for instance, is two digits not one), so they are represented by letters: A equals 10, up to F which equals 15.",
              "As with octal, a hex symbol's value is expressive, not tangible. Its great advantage is that each hex symbol represents exactly four binary positions, making it the most compact - which is why you see it in memory addresses and colour codes (like #F97316).",
              "To convert binary to hex we group the bits four by four from the right and convert each group to its symbol:",
            ],
            code:
              "10110001  ->  1011 0001\n" +
              "               B    1\n\n" +
              "10110001 (bin) = B1 (hex)",
          },
          {
            h: "Direct vs indirect: which is better?",
            p: [
              "When converting between octal (or hex) and decimal, you have two paths. Direct: you divide or multiply by the base itself (8 or 16) directly. Indirect: you pass first through binary as an intermediary.",
              "The direct method is faster because it has no middle step, but it is mathematically complex and may need a calculator (multiplying or dividing by 16 is not easy mentally). The indirect method is a little longer but far simpler, because dealing with 2 and its multiples is easier on the mind than dealing with 8 or 16. That is why many prefer it despite its length.",
            ],
          },
          {
            h: "Reference table (0 to 15)",
            p: "Memorise this table well; it is the map for moving quickly between the four systems, and you will return to it again and again in every digital project:",
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
          "A digit is a single symbol; a number is two or more digits, each weighted by its position.",
          "Every numbering system is built on a base (symbol count) and a power (position value), and the base works with fractions too.",
          "Binary is the language of hardware because it relies on two reliable states: current or no current.",
          "Decimal to binary uses successive division by 2, binary to decimal uses multiplication by powers of 2, and fractions use successive multiplication.",
          "Each octal symbol = 3 binary bits, and each hex symbol = 4 bits - and their value is expressive, shortening binary.",
        ],
        note: "Mastered conversion? The next step is binary arithmetic and representing negative numbers via the complement - the basis of what the Arithmetic Logic Unit (ALU) inside any processor does.",
      },
    },
  },
  /* ===================================================================== */
  {
    id: "boolean-algebra-logic-gates",
    categories: ["digital"],
    image: "assets/images/tut-boolean-logic-gates.jpg",
    tags: ["Digital Logic", "Boolean Algebra", "Logic Gates"],
    read: { ar: "١٤ دقيقة قراءة", en: "14 min read" },
    title: {
      ar: "البوابات المنطقية والجبر البُولي: اللغة التي تفهمها كل معالج",
      en: "Logic Gates & Boolean Algebra: The Language Every Processor Understands",
    },
    desc: {
      ar: "سبع بوابات فقط، وثلاث عمليات جبرية، تكفي لبناء أي معالج أو ذاكرة. تعرّف على كل بوابة منطقية وجداول حقيقتها، ثم على الجبر البُولي وقوانينه من الأساس.",
      en: "Just seven gates and three algebraic operations are enough to build any processor or memory chip. Learn every logic gate and its truth table, then Boolean algebra and its laws from the ground up.",
    },
    article: {
      ar: {
        lead: "قبل أي معالج أو ذاكرة أو حتى آلة حاسبة بسيطة، توجد سبع بوابات منطقية فقط، وقواعد جبرية صارمة تحكم كيف تتصل ببعضها. في هذا الشرح نبني الفهم من الصفر: كيف تتحول إشارة كهربية إلى قيمة 0 أو 1، ما الذي يميز كل بوابةٍ عن الأخرى، ثم ندخل إلى الجبر البُولي — اللغة الرياضية التي تتيح لنا تبسيط أي دائرة قبل أن نبنيها فعلياً.",
        sections: [
          {
            h: "الإشارة الرقمية: من الجهد الكهربي إلى 0 و1",
            p: [
              "تخيّل دائرة بسيطة: بطارية، مصباح، ومفتاح كهربي يصلهما بسلك. حين يكون المفتاح مفتوحاً (OFF) لا يمر تيار، وفرق الجهد على طرفي المصباح يساوي صفراً — نقول إن الإشارة لها القيمة الرقمية 0. وحين نغلق المفتاح (ON) يمر التيار ويصل الجهد لأعلى قيمته، فنقول إن الإشارة لها القيمة الرقمية 1.",
              "هذا هو جوهر الرقمية بأكملها: أي إشارة كهربية داخل دائرة إلكترونية يمكن اختزالها إلى حالتين فقط، مرتفعة (High) أو منخفضة (Low)، ونرمز لهما بـ 1 و0. وعلى هذا الأساس الكهربي البسيط بُنيت كل معالجات العالم.",
            ],
          },
          {
            h: "ما هي البوابة المنطقية؟",
            p: [
              "البوابة المنطقية (Logic Gate) دائرة إلكترونية صغيرة، عادةً مجموعة من الترانزستورات الموصولة معاً، تُنتج إشارة خرج واحدة (Output) بناءً على إشارة أو أكثر من إشارات الدخل (Input)، وفق شرطٍ منطقي ثابت لا يتغير.",
              "كلمة «بوابة» تعني أن الإشارات يجب أن تمر من خلالها وتحقق شرطها الخاص، وكلمة «منطقية» تعني أن نتيجة الخرج معروفة ومحددة سلفاً حسب تصميم البوابة: إذا تحققت شروط الدخل كان الخرج مرتفعاً (1)، وإلا كان منخفضاً (0). وبتوصيل هذه البوابات السبع مع بعضها بطرق مختلفة تُبنى كل الدوائر الرقمية، من العدّادات إلى وحدات الذاكرة.",
            ],
          },
          {
            h: "جدول الحقيقة: الأداة التي تصف كل بوابة",
            p: [
              "جدول الحقيقة (Truth Table) جدول رياضي يسرد كل الاحتمالات الممكنة لإشارات الدخل، وما يقابل كل احتمالٍ منها من قيمة للخرج. الأعمدة على جهة الدخل تمثّل الإشارات الداخلة، وعمود الخرج يمثّل النتيجة، وكل صفٍّ يمثّل احتمالاً واحداً من احتمالات الدخل.",
              "لدائرة لها n من إشارات الدخل، يكون عدد الصفوف دائماً 2 أُس n لأن كل إشارة تأخذ قيمتين فقط. ولا بد من الاتفاق مسبقاً على ترتيب الإشارات: أيها الأكثر أهمية (MSB) فيُكتب أقصى اليسار، وأيها الأقل أهمية (LSB) فيُكتب أقصى اليمين — والاختيار هنا اصطلاحي، المهم الثبات عليه طوال التصميم.",
            ],
            code:
              "A B C | F\n" +
              "------+----\n" +
              "0 0 0 | M0\n" +
              "0 0 1 | M1\n" +
              "0 1 0 | M2\n" +
              "0 1 1 | M3\n" +
              "1 0 0 | M4\n" +
              "1 0 1 | M5\n" +
              "1 1 0 | M6\n" +
              "1 1 1 | M7",
          },
          {
            h: "بوابة NOT (العاكس)",
            p: "أبسط البوابات: دخلٌ واحد وخرجٌ واحد، والخرج هو عكس الدخل تماماً. تُسمى أيضاً العاكس (Inverter)، ويُرمز للقيمة المعكوسة بوضع شرطة (Prime) بعد الحرف، فيُكتب الخرج Z=X' حيث X' تعني «ليس X».",
            img: "assets/images/tut-logic-not.png",
            imgAlt: "رمز بوابة NOT",
            imgCap: "NOT — Inverter",
            code: "X | Z=X'\n--+-----\n0 |  1\n1 |  0",
          },
          {
            h: "بوابة AND",
            p: "تعطي هذه البوابة خرجاً مرتفعاً (1) فقط إذا كانت كل إشارات الدخل مرتفعة معاً؛ فإن كانت واحدةٌ منها منخفضة كان الخرج منخفضاً. تُكتب علاقتها الرياضية Z=X.Y أو ببساطة Z=XY، وتُقرأ Z يساوي X AND Y.",
            code: "X Y | Z=XY\n----+-----\n0 0 |  0\n0 1 |  0\n1 0 |  0\n1 1 |  1",
          },
          {
            h: "بوابة OR",
            p: "عكس منطق AND تقريباً: يكفي أن تكون إحدى إشارات الدخل مرتفعة (1) ليكون الخرج مرتفعاً، ولا يكون الخرج منخفضاً إلا إذا كانت كل إشارات الدخل منخفضة معاً. تُكتب علاقتها Z=X+Y، وتُقرأ Z يساوي X OR Y.",
            code: "X Y | Z=X+Y\n----+------\n0 0 |  0\n0 1 |  1\n1 0 |  1\n1 1 |  1",
          },
          {
            h: "بوابة NAND (عكس AND)",
            p: "هي بوابة AND متبوعة ببوابة NOT عند الخرج مباشرة؛ فتُنتج خرجاً منخفضاً (0) في الحالة الوحيدة التي تكون فيها كل إشارات الدخل مرتفعة، وفيما عداها يكون الخرج مرتفعاً. تُكتب Z=(XY)'، وتُرسم بوضع دائرة صغيرة عند خرج بوابة AND للدلالة على الانعكاس.",
            img: "assets/images/tut-logic-nand.png",
            imgAlt: "رمز بوابة NAND",
            imgCap: "NAND",
            code: "X Y | Z=(XY)'\n----+--------\n0 0 |   1\n0 1 |   1\n1 0 |   1\n1 1 |   0",
          },
          {
            h: "بوابة NOR (عكس OR)",
            p: "هي بوابة OR متبوعة بـ NOT عند الخرج؛ فيكون الخرج مرتفعاً (1) في الحالة الوحيدة التي تكون فيها كل إشارات الدخل منخفضة معاً، وفيما عداها يكون الخرج منخفضاً. تُكتب Z=(X+Y)'.",
            img: "assets/images/tut-logic-nor.png",
            imgAlt: "رمز بوابة NOR",
            imgCap: "NOR",
            code: "X Y | Z=(X+Y)'\n----+---------\n0 0 |   1\n0 1 |   0\n1 0 |   0\n1 1 |   0",
          },
          {
            h: "بوابة XOR (الاختلاف الحصري)",
            p: "تُسمى Exclusive OR، وتعطي خرجاً مرتفعاً (1) فقط إذا اختلفت إشارتا الدخل في القيمة — إحداهما 0 والأخرى 1 — أما إذا تساوتا فالخرج منخفض. تُكتب Z=X⊕Y، وتفيد عملياً في كشف الاختلاف بين إشارتين وفي دوائر الجمع الثنائي (Adders).",
            img: "assets/images/tut-logic-xor.png",
            imgAlt: "رمز بوابة XOR",
            imgCap: "XOR",
            code: "X Y | Z=X⊕Y\n----+------\n0 0 |  0\n0 1 |  1\n1 0 |  1\n1 1 |  0",
          },
          {
            h: "بوابة XNOR",
            p: "عكس XOR: تعطي خرجاً مرتفعاً (1) فقط إذا تساوت إشارتا الدخل في القيمة (كلتاهما 0 أو كلتاهما 1)، وتُكتب Z=(X⊕Y)'. تفيد عملياً في دوائر المقارنة (Comparators) للتحقق من تطابق إشارتين.",
            img: "assets/images/tut-logic-xnor.png",
            imgAlt: "رمز بوابة XNOR",
            imgCap: "XNOR",
            code: "X Y | Z=(X⊕Y)'\n----+---------\n0 0 |   1\n0 1 |   0\n1 0 |   0\n1 1 |   1",
          },
          {
            h: "البوابات السبع في جدول واحد",
            p: "قبل الانتقال للجبر البُولي، هذا ملخص سريع يجمع شرط كل بوابة وعلاقتها الرياضية في مكان واحد:",
            code:
              "Gate | Output = 1 when...        | Expression\n" +
              "-----+-----------------------------+-----------\n" +
              "NOT  | input = 0                  | Z = X'\n" +
              "AND  | all inputs = 1             | Z = XY\n" +
              "OR   | at least one input = 1     | Z = X+Y\n" +
              "NAND | at least one input = 0     | Z = (XY)'\n" +
              "NOR  | all inputs = 0             | Z = (X+Y)'\n" +
              "XOR  | inputs differ               | Z = X⊕Y\n" +
              "XNOR | inputs match                | Z = (X⊕Y)'",
          },
          {
            h: "الجبر البُولي: من أين جاء؟",
            p: [
              "لكي نتعامل رياضياً مع البوابات المنطقية، لا بد من جبرٍ يحكم العلاقة بينها. أول من وضع أسس هذا الفرع هو عالم الرياضيات البريطاني جورج بول (George Boole)، الذي قدّم فكرته في كتابه «التحليل الرياضي للمنطق» عام 1847، ثم أرسى قوانينه الكاملة في كتابه «قوانين الفكر» عام 1854. أما تسمية «الجبر البُولي» تحديداً فتعود للعالم الأمريكي هنري شيفر (Henry Sheffer) عام 1913.",
              "وكما يقوم الجبر العادي على عمليتي الجمع والضرب، يقوم الجبر البُولي على ثلاث عمليات فقط: الاتصال (AND، ويرمز له بـ ∧ أو النقطة .)، الانفصال (OR، ويرمز له بـ ∨ أو علامة +)، والنفي (NOT، ويرمز له بـ ¬ أو الشرطة ').",
            ],
          },
          {
            h: "المسلمات الأساسية (Postulates)",
            p: "هذه أبسط قوانين الجبر البُولي وأكثرها استخداماً، وطريقة إثبات أي واحدةٍ منها بسيطة: نعوّض القيمتين الممكنتين 0 و1 مكان X ونتأكد أن الطرفين يتساويان في كل الحالات — وهذا ما يُعرف بالإثبات بجدول الحقيقة.",
            code:
              "X'' = X                          (double negation)\n\n" +
              "X.X = X          X+X = X         (idempotent)\n" +
              "X.X' = 0         X+X' = 1        (complement)\n" +
              "X.1 = X          X+0 = X         (identity)\n" +
              "X.0 = 0          X+1 = 1         (null / dominance)\n\n" +
              "X⊕X = 0        X⊕X' = 1       X⊕1 = X'       X⊕0 = X",
          },
          {
            h: "قوانين الإبدال والتجميع والتوزيع",
            p: "هذه القوانين تتيح إعادة ترتيب حدود المعادلة أو تجميعها دون أن تتغير قيمتها، تماماً كما في الجبر العادي — لكنها هنا تشمل عملية XOR أيضاً، وهو ما لا نراه في الجبر التقليدي:",
            code:
              "Commutative:   X.Y = Y.X            X+Y = Y+X\n\n" +
              "Associative:   X.(Y.Z) = (X.Y).Z    X+(Y+Z) = (X+Y)+Z\n\n" +
              "Distributive:  X.(Y+Z) = XY + XZ\n" +
              "               X+(YZ) = (X+Y).(X+Z)   <- valid only in Boolean algebra\n\n" +
              "XOR forms:     X⊕(Y⊕Z) = (X⊕Y)⊕Z\n" +
              "               X.(Y⊕Z) = XY ⊕ XZ",
          },
          {
            h: "قانون الامتصاص (Absorption)",
            p: "من أهم القوانين في تبسيط المعادلات المنطقية عملياً، لأنه يسمح بحذف حدٍّ كاملٍ من المعادلة دون التأثير في النتيجة. إليك أشهر صورها مع برهانها المختصر:",
            code:
              "X + XY = X                    X.(X+Y) = X\n" +
              "  = X.1 + XY                    = X.X + X.Y\n" +
              "  = X.(1+Y) = X.1 = X            = X + X.Y = X\n\n" +
              "X + X'Y = X+Y                  X.(X'+Y) = XY\n" +
              "  = (X+X').(X+Y)                 = X.X' + X.Y\n" +
              "  = 1.(X+Y) = X+Y                = 0 + X.Y = XY\n\n" +
              "XY + XY' = X                   (X+Y).(X+Y') = X\n" +
              "  = X.(Y+Y') = X.1 = X            = X + Y.Y' = X+0 = X",
          },
          {
            h: "نظرية الإجماع (Consensus Theorem)",
            p: "نظرية متقدمة لكنها مفيدة جداً عند تبسيط معادلاتٍ تحتوي على ثلاثة حدود أو أكثر؛ فهي تسمح بحذف حدٍّ كاملٍ (يُسمى حد الإجماع) إذا كان الحدّان الآخران يحتويان على المتغير ونقيضه:",
            code:
              "XY + X'Z + YZ = XY + X'Z        <- YZ is the \"consensus\" term, safely dropped\n\n" +
              "proof:\n" +
              "  XY + X'Z + YZ\n" +
              "  = XY + X'Z + 1.YZ\n" +
              "  = XY + X'Z + (X+X').YZ\n" +
              "  = XY + X'Z + XYZ + X'YZ\n" +
              "  = XY.(1+Z) + X'Z.(1+Y)\n" +
              "  = XY + X'Z",
          },
          {
            h: "قوانين دي مورجان (De Morgan)",
            p: "من أهم القوانين عملياً، لأنها الجسر بين AND وOR: تتيح تحويل أي معادلة قائمة على NAND إلى ما يعادلها بـ NOR والعكس، وهو ما نحتاجه عند التصميم ببوابةٍ واحدة فقط كما سنرى في الشرح القادم عن تبسيط الدوائر:",
            code:
              "(X.Y)' = X' + Y'      <- NAND of two = OR of their complements\n" +
              "(X+Y)' = X'.Y'        <- NOR of two = AND of their complements\n\n" +
              "General form (n variables):\n" +
              "(X1.X2. ... .Xn)' = X1' + X2' + ... + Xn'\n" +
              "(X1+X2+ ... +Xn)' = X1'.X2'. ... .Xn'",
          },
        ],
        takeaways: [
          "البوابات المنطقية السبع (NOT, AND, OR, NAND, NOR, XOR, XNOR) هي اللبنات التي تُبنى منها كل دائرة رقمية.",
          "جدول الحقيقة يصف سلوك أي بوابة أو دائرة بذكر كل احتمالات الدخل ونتيجة الخرج لكل احتمال.",
          "الجبر البُولي يقوم على ثلاث عمليات فقط: AND وOR وNOT، ويشترك مع الجبر العادي في الإبدال والتجميع والتوزيع.",
          "الامتصاص والإجماع أدوات عملية لحذف حدود زائدة من المعادلة دون تغيير قيمتها.",
          "قوانين دي مورجان هي الجسر بين AND وOR، ولها دور محوري عند تنفيذ أي دائرة ببوابةٍ واحدة فقط.",
        ],
        note: "بعد أن أتقنت البوابات والجبر البُولي، الخطوة التالية طبيعية: كيف نأخذ معادلة منطقية طويلة ونختصرها لأقل عدد من البوابات باستخدام خرائط كارنو — وهو موضوع الشرح القادم: تبسيط الدوائر المنطقية (Gate-Level Minimization).",
      },
      en: {
        lead: "Before any processor, memory chip, or even a simple calculator, there are only seven logic gates — and a strict set of algebraic rules governing how they connect. This guide builds the understanding from zero: how an electrical signal becomes a 0 or a 1, what sets each gate apart, and then Boolean algebra — the mathematical language that lets us simplify any circuit before we ever build it.",
        sections: [
          {
            h: "The Digital Signal: From Voltage to 0 and 1",
            p: [
              "Picture a simple circuit: a battery, a lamp, and a switch connecting them with wire. When the switch is open (OFF) no current flows, and the voltage across the lamp is zero — the signal has the digital value 0. Close the switch (ON) and current flows, pushing the voltage to its highest level — the signal now has the digital value 1.",
              "That is the whole essence of \"digital\": any electrical signal inside a circuit can be reduced to just two states, High or Low, written as 1 and 0. Every processor on Earth is built on this simple electrical foundation.",
            ],
          },
          {
            h: "What Is a Logic Gate?",
            p: [
              "A logic gate is a small electronic circuit — usually a group of connected transistors — that produces one output signal based on one or more input signals, following a fixed logical condition that never changes.",
              "\"Gate\" means signals must pass through it and satisfy its specific condition; \"logic\" means the output result is known and fixed by the gate's design: if the input condition is met, the output is High (1); otherwise it's Low (0). Wiring these seven gates together in different combinations builds every digital circuit that exists, from counters to memory cells.",
            ],
          },
          {
            h: "Truth Tables: The Language That Describes Every Gate",
            p: [
              "A truth table lists every possible combination of input signals alongside the output that results from each. Columns on the input side represent the input signals, the output column represents the result, and each row represents one possible input combination.",
              "For a circuit with n input signals, the table always has 2^n rows, because each signal can only take two values. You must also agree in advance on signal ordering: which is the Most Significant Bit (MSB, written leftmost) and which is the Least Significant Bit (LSB, written rightmost) — the choice itself is arbitrary; what matters is staying consistent throughout the design.",
            ],
            code:
              "A B C | F\n" +
              "------+----\n" +
              "0 0 0 | M0\n" +
              "0 0 1 | M1\n" +
              "0 1 0 | M2\n" +
              "0 1 1 | M3\n" +
              "1 0 0 | M4\n" +
              "1 0 1 | M5\n" +
              "1 1 0 | M6\n" +
              "1 1 1 | M7",
          },
          {
            h: "The NOT Gate (Inverter)",
            p: "The simplest gate: one input, one output, and the output is simply the opposite of the input. Also called an Inverter. The complemented value is written with a prime after the letter, so the output is Z = X', read \"Z equals NOT X.\"",
            img: "assets/images/tut-logic-not.png",
            imgAlt: "NOT gate symbol",
            imgCap: "NOT — Inverter",
            code: "X | Z=X'\n--+-----\n0 |  1\n1 |  0",
          },
          {
            h: "The AND Gate",
            p: "This gate outputs High (1) only when every input is High; if even one input is Low, the output is Low. Its expression is Z = X.Y or simply Z = XY, read \"Z equals X AND Y.\"",
            code: "X Y | Z=XY\n----+-----\n0 0 |  0\n0 1 |  0\n1 0 |  0\n1 1 |  1",
          },
          {
            h: "The OR Gate",
            p: "Roughly the opposite of AND: it's enough for one input to be High for the output to be High, and the output is only Low when every input is Low. Its expression is Z = X+Y, read \"Z equals X OR Y.\"",
            code: "X Y | Z=X+Y\n----+------\n0 0 |  0\n0 1 |  1\n1 0 |  1\n1 1 |  1",
          },
          {
            h: "The NAND Gate (Inverted AND)",
            p: "An AND gate followed immediately by a NOT at the output; it outputs Low (0) in the one case where every input is High, and High otherwise. Written Z = (XY)', and drawn as an AND symbol with a small bubble at the output marking the inversion.",
            img: "assets/images/tut-logic-nand.png",
            imgAlt: "NAND gate symbol",
            imgCap: "NAND",
            code: "X Y | Z=(XY)'\n----+--------\n0 0 |   1\n0 1 |   1\n1 0 |   1\n1 1 |   0",
          },
          {
            h: "The NOR Gate (Inverted OR)",
            p: "An OR gate followed by a NOT at the output; the output is High (1) only when every input is Low, and Low otherwise. Written Z = (X+Y)'.",
            img: "assets/images/tut-logic-nor.png",
            imgAlt: "NOR gate symbol",
            imgCap: "NOR",
            code: "X Y | Z=(X+Y)'\n----+---------\n0 0 |   1\n0 1 |   0\n1 0 |   0\n1 1 |   0",
          },
          {
            h: "The XOR Gate (Exclusive OR)",
            p: "Short for Exclusive OR, this gate outputs High (1) only when its two inputs differ — one is 0 and the other is 1; if they match, the output is Low. Written Z = X⊕Y, and it's the core building block of binary adders and difference detectors.",
            img: "assets/images/tut-logic-xor.png",
            imgAlt: "XOR gate symbol",
            imgCap: "XOR",
            code: "X Y | Z=X⊕Y\n----+------\n0 0 |  0\n0 1 |  1\n1 0 |  1\n1 1 |  0",
          },
          {
            h: "The XNOR Gate",
            p: "The opposite of XOR: outputs High (1) only when the two inputs match (both 0 or both 1). Written Z = (X⊕Y)', and it's the core of digital comparators that check whether two signals are identical.",
            img: "assets/images/tut-logic-xnor.png",
            imgAlt: "XNOR gate symbol",
            imgCap: "XNOR",
            code: "X Y | Z=(X⊕Y)'\n----+---------\n0 0 |   1\n0 1 |   0\n1 0 |   0\n1 1 |   1",
          },
          {
            h: "All Seven Gates in One Table",
            p: "Before moving to Boolean algebra, here is a quick reference gathering every gate's condition and expression:",
            code:
              "Gate | Output = 1 when...        | Expression\n" +
              "-----+-----------------------------+-----------\n" +
              "NOT  | input = 0                  | Z = X'\n" +
              "AND  | all inputs = 1             | Z = XY\n" +
              "OR   | at least one input = 1     | Z = X+Y\n" +
              "NAND | at least one input = 0     | Z = (XY)'\n" +
              "NOR  | all inputs = 0             | Z = (X+Y)'\n" +
              "XOR  | inputs differ               | Z = X⊕Y\n" +
              "XNOR | inputs match                | Z = (X⊕Y)'",
          },
          {
            h: "Boolean Algebra: Where Did It Come From?",
            p: [
              "To handle logic gates mathematically we need an algebra governing the relationships between them. The foundations were laid by British mathematician George Boole, who introduced the idea in his 1847 book \"The Mathematical Analysis of Logic,\" then completed the laws in his 1854 book \"An Investigation of the Laws of Thought.\" The name \"Boolean algebra\" itself was coined later by American mathematician Henry Sheffer in 1913.",
              "Just as ordinary algebra rests on addition and multiplication, Boolean algebra rests on exactly three operations: conjunction (AND, symbol ∧ or a dot), disjunction (OR, symbol ∨ or +), and negation (NOT, symbol ¬ or a prime ').",
            ],
          },
          {
            h: "The Basic Postulates",
            p: "These are the simplest and most-used laws, and each can be proven by direct substitution of 0 and 1 for X — the fastest way to verify any Boolean law:",
            code:
              "X'' = X                          (double negation)\n\n" +
              "X.X = X          X+X = X         (idempotent)\n" +
              "X.X' = 0         X+X' = 1        (complement)\n" +
              "X.1 = X          X+0 = X         (identity)\n" +
              "X.0 = 0          X+1 = 1         (null / dominance)\n\n" +
              "X⊕X = 0        X⊕X' = 1       X⊕1 = X'       X⊕0 = X",
          },
          {
            h: "Commutative, Associative, and Distributive Laws",
            p: "These laws let you reorder or regroup the terms of an equation without changing its value, just like ordinary algebra — except Boolean algebra also extends them to the XOR operation, which has no counterpart in regular algebra:",
            code:
              "Commutative:   X.Y = Y.X            X+Y = Y+X\n\n" +
              "Associative:   X.(Y.Z) = (X.Y).Z    X+(Y+Z) = (X+Y)+Z\n\n" +
              "Distributive:  X.(Y+Z) = XY + XZ\n" +
              "               X+(YZ) = (X+Y).(X+Z)   <- valid only in Boolean algebra\n\n" +
              "XOR forms:     X⊕(Y⊕Z) = (X⊕Y)⊕Z\n" +
              "               X.(Y⊕Z) = XY ⊕ XZ",
          },
          {
            h: "The Absorption Laws",
            p: "Among the most useful laws for practical simplification, because each lets you drop an entire term from the equation without affecting the result. Here are the six most common forms with their short proofs:",
            code:
              "X + XY = X                    X.(X+Y) = X\n" +
              "  = X.1 + XY                    = X.X + X.Y\n" +
              "  = X.(1+Y) = X.1 = X            = X + X.Y = X\n\n" +
              "X + X'Y = X+Y                  X.(X'+Y) = XY\n" +
              "  = (X+X').(X+Y)                 = X.X' + X.Y\n" +
              "  = 1.(X+Y) = X+Y                = 0 + X.Y = XY\n\n" +
              "XY + XY' = X                   (X+Y).(X+Y') = X\n" +
              "  = X.(Y+Y') = X.1 = X            = X + Y.Y' = X+0 = X",
          },
          {
            h: "The Consensus Theorem",
            p: "A more advanced but very useful theorem when simplifying equations with three or more terms: it lets you drop an entire term — called the \"consensus\" term — whenever the other two terms contain a variable and its complement:",
            code:
              "XY + X'Z + YZ = XY + X'Z        <- YZ is the \"consensus\" term, safely dropped\n\n" +
              "proof:\n" +
              "  XY + X'Z + YZ\n" +
              "  = XY + X'Z + 1.YZ\n" +
              "  = XY + X'Z + (X+X').YZ\n" +
              "  = XY + X'Z + XYZ + X'YZ\n" +
              "  = XY.(1+Z) + X'Z.(1+Y)\n" +
              "  = XY + X'Z",
          },
          {
            h: "De Morgan's Laws",
            p: "Among the most practically important laws, because they bridge AND and OR: they let you convert any NAND-based equation into an equivalent NOR-based one and vice versa — exactly what's needed when a design must use a single gate type only, as the next guide on circuit minimization will show:",
            code:
              "(X.Y)' = X' + Y'      <- NAND of two = OR of their complements\n" +
              "(X+Y)' = X'.Y'        <- NOR of two = AND of their complements\n\n" +
              "General form (n variables):\n" +
              "(X1.X2. ... .Xn)' = X1' + X2' + ... + Xn'\n" +
              "(X1+X2+ ... +Xn)' = X1'.X2'. ... .Xn'",
          },
        ],
        takeaways: [
          "The seven logic gates (NOT, AND, OR, NAND, NOR, XOR, XNOR) are the building blocks every digital circuit is made from.",
          "A truth table describes any gate or circuit's behavior by listing every input combination and its resulting output.",
          "Boolean algebra rests on just three operations — AND, OR, NOT — and shares commutative, associative, and distributive laws with ordinary algebra.",
          "Absorption and consensus are practical tools for dropping redundant terms from an equation without changing its value.",
          "De Morgan's laws bridge AND and OR, and are central to implementing any circuit with a single gate type.",
        ],
        note: "Once gates and Boolean algebra click, the natural next step is taking a long logic equation and shrinking it to the fewest possible gates using Karnaugh maps — the subject of the next guide: Gate-Level Minimization.",
      },
    },
  },
  /* ===================================================================== */
  {
    id: "gate-level-minimization",
    categories: ["digital"],
    image: "assets/images/tut-gate-minimization.jpg",
    tags: ["Digital Logic", "Karnaugh Map", "Circuit Design"],
    read: { ar: "١٢ دقيقة قراءة", en: "12 min read" },
    title: {
      ar: "تبسيط الدوائر المنطقية بخرائط كارنو (K-Map)",
      en: "Gate-Level Minimization With Karnaugh Maps (K-Maps)",
    },
    desc: {
      ar: "معادلة منطقية أطول تعني بوابات أكثر وتكلفة أعلى. تعلّم خرائط كارنو خطوة بخطوة: من خريطة المتغيرين إلى الأربع متغيرات، وحالات «لا يهم»، والتنفيذ ببوابةٍ واحدة فقط.",
      en: "A longer logic equation means more gates and higher cost. Learn Karnaugh maps step by step: from the two-variable map to four variables, don't-care conditions, and single-gate-type implementation.",
    },
    article: {
      ar: {
        lead: "معادلة منطقية طويلة تعني بوابات أكثر، تكلفة أعلى، ودائرة أبطأ. خرائط كارنو (Karnaugh Maps) أداة بصرية بسيطة تختصر أي معادلة بولية إلى أقل عدد ممكن من الحدود والبوابات، بلا حساباتٍ جبرية معقدة. في هذا الشرح نبني الأداة خطوة بخطوة، من خريطة المتغيرين البسيطة إلى خريطة الأربع متغيرات، مروراً بحالات «لا يهم» والتنفيذ بنوعٍ واحد فقط من البوابات.",
        sections: [
          {
            h: "لماذا نبسّط الدوائر أصلاً؟",
            p: [
              "الغاية من تبسيط أي دائرة رقمية هي الوصول إلى تصميمٍ أبسط وأرخص وبنفس الأداء الوظيفي. كل بوابة زائدة في التصميم تعني تكلفة تصنيع أعلى، استهلاك طاقة أكبر، ومساحة أوسع على الشريحة الإلكترونية.",
              "الجبر البُولي وحده يمكن أن يبسّط أي معادلة، لكن العملية تصبح طويلة ومعقدة مع المعادلات التي تحتوي على حدود كثيرة. لذلك نحتاج طريقة بصرية مباشرة، وهنا يأتي دور خريطة كارنو (K-Map)، وسنتعلم في هذا الشرح تبسيط دوال بمدخلين وثلاثة وأربعة مدخلات.",
            ],
          },
          {
            h: "خريطة كارنو: الفكرة الأساسية",
            p: [
              "خريطة كارنو جدول من المربعات، كل مربعٍ فيه يمثّل احتمالاً واحداً من احتمالات الدخل (Minterm)، تماماً كصفٍّ واحد في جدول الحقيقة، لكن بترتيبٍ خاص يجعل كل مربعين متجاورين يختلفان في متغيرٍ واحد فقط. هذا الترتيب هو سر الأداة بأكملها.",
              "يمكن استخدام الخريطة لتبسيط الدالة في صورة SOP (مجموع الحاصل الضربي) أو في صورة POS (حاصل ضرب المجموع) بنفس الخطوات.",
            ],
          },
          {
            h: "خطوات التبسيط بالخريطة",
            p: "أياً كان عدد المتغيرات، الإجراء ثابت دائماً:",
            list: [
              "استخرج جدول الحقيقة للدالة، أو معادلتها بصورة Minterms/Maxterms",
              "ارسم خريطة بعدد مربعاتٍ يساوي عدد احتمالات الدخل (2 أُس n)",
              "جمّع المربعات المتجاورة المتساوية في القيمة معاً في مجموعات (حجم كل مجموعة يجب أن يكون قوة من قوى 2: 1، 2، 4، 8...)",
              "اكتب الحد المختصر لكل مجموعة (كل مجموعةٍ أكبر تعني حداً أقصر بمتغيرات أقل)",
              "اجمع كل الحدود للحصول على المعادلة النهائية المبسّطة",
              "تحقق: هل يمكن تبسيطٌ إضافي؟",
              "ارسم الدائرة المنطقية النهائية بأقل عدد من البوابات",
            ],
          },
          {
            h: "خريطة المتغيرين",
            p: "لدالة F بمتغيرين X وY، الخريطة مربّعٌ من 2×2 (4 مربعات). كل مربعٍ متجاورٍ لمربعٍ آخر أفقياً أو رأسياً (لا قطرياً) يختلف عنه في متغيرٍ واحد فقط، وهذا ما يسمح بدمجهما في حدٍّ واحد أقصر.",
            code: "      Y=0  Y=1\nX=0 |  M0   M1  |   M0=X'Y'  M1=X'Y\nX=1 |  M2   M3  |   M2=XY'   M3=XY",
          },
          {
            h: "مثال: تبسيط دالة بمتغيرين",
            p: "لتكن لدينا الدالة التالية، ونريد أبسط صورة لها بالخريطة:",
            code:
              "X Y | F\n----+---\n0 0 | 0\n0 1 | 1\n1 0 | 1\n1 1 | 1\n\n" +
              "K-Map:\n      Y=0  Y=1\nX=0 |  0    1  |\nX=1 |  1    1  |\n\n" +
              "Group 1: (X=1,Y=0)+(X=1,Y=1)  -> X\n" +
              "Group 2: (X=0,Y=1)+(X=1,Y=1)  -> Y\n\n" +
              "F(X,Y) = X + Y",
          },
          {
            h: "خريطة الثلاث متغيرات",
            p: "لدالة بثلاثة متغيرات X وY وZ يصبح عدد الاحتمالات 8، فالخريطة صفٌّ واحد من 2×4 مربعات. هنا يظهر أهم شرطٍ في بناء الخريطة: ترتيب أعمدة YZ يجب أن يتبع نظام جراي (Gray Code) — 00، 01، 11، 10 — وليس الترتيب الثنائي العادي، لأن الهدف أن يختلف كل عمودين متجاورين في بتٍّ واحدٍ فقط، بما في ذلك العمود الأول والأخير (لأن الخريطة ملتفّة على نفسها من الحافة اليمنى إلى اليسرى).",
            code: "        YZ=00  YZ=01  YZ=11  YZ=10\nX=0  |   M0     M1     M3     M2   |\nX=1  |   M4     M5     M7     M6   |",
          },
          {
            h: "أمثلة محلولة على خريطة الثلاث متغيرات",
            p: "لنطبّق الخطوات على ثلاث دوالّ معطاة بصيغة مجموع الحدود الصغرى (Minterms):",
            code:
              "F(X,Y,Z) = ∑(2,3,4,5)\n" +
              "        YZ=00 01 11 10\n" +
              "X=0  |    0   0  1  1  |\n" +
              "X=1  |    1   1  0  0  |\n" +
              "Groups: (2,3)->X'Y   (4,5)->XY'\n" +
              "F(X,Y,Z) = X'Y + XY'   =  X⊕Y\n\n" +
              "F(X,Y,Z) = ∑(3,4,6,7)\n" +
              "        YZ=00 01 11 10\n" +
              "X=0  |    0   0  1  0  |\n" +
              "X=1  |    1   0  1  1  |\n" +
              "Groups: (4,6)->XZ'   (3,7)->YZ\n" +
              "F(X,Y,Z) = YZ + XZ'\n\n" +
              "F(X,Y,Z) = ∑(0,2,4,5,6)\n" +
              "        YZ=00 01 11 10\n" +
              "X=0  |    1   0  0  1  |\n" +
              "X=1  |    1   1  0  1  |\n" +
              "Groups: (0,2,4,6)->Z'   (4,5)->XY'\n" +
              "F(X,Y,Z) = Z' + XY'",
          },
          {
            h: "خريطة الأربع متغيرات",
            p: "مع أربعة متغيرات W وX وY وZ يصبح عدد الاحتمالات 16، فالخريطة مربّعٌ من 4×4. القاعدة نفسها تتكرر: كلٌّ من صفوف WX وأعمدة YZ يجب أن تُرتَّب بنظام جراي، والخريطة ملتفّة من كل الجهات — يمين إلى يسار، وأعلى إلى أسفل — فأركان الخريطة الأربعة تُعتبر متجاورة أيضاً ويمكن تجميعها معاً!",
            code:
              "F(W,X,Y,Z) = ∑(0,1,2,4,5,6,8,9,12,13,14)\n\n" +
              "          YZ=00 01 11 10\n" +
              "WX=00 |    1   1  0  1  |\n" +
              "WX=01 |    1   1  0  1  |\n" +
              "WX=11 |    1   1  0  0  |\n" +
              "WX=10 |    1   1  0  1  |\n\n" +
              "F(W,X,Y,Z) = Y' + W'Z' + XZ'",
          },
          {
            h: "المُحدِّد الأولي والمُحدِّد الأولي الأساسي",
            p: [
              "عند تجميع المربعات، ثلاثة شروط يجب مراعاتها: تغطية كل الحدود ذات القيمة 1، أقل عدد ممكن من المجموعات، وعدم تكرار تغطية أي مربعٍ دون داعٍ. المُحدِّد الأولي (Prime Implicant) هو أكبر مجموعةٍ ممكنة من المربعات المتجاورة. أما المُحدِّد الأولي الأساسي (Essential Prime Implicant) فهو محدِّدٌ أولي يحتوي على مربعٍ لا يغطيه أي محدِّدٍ أولي آخر — أي أنه إجباري الوجود في أي حل.",
              "من المهم أن تدرك أن بعض الدوال قد يكون لها أكثر من حلٍّ صحيح، طالما أن كل حلٍّ يغطي كل الحدود المطلوبة بأقل عددٍ من الحدود؛ فكلها حلولٌ مقبولة بنفس الكفاءة.",
            ],
            code:
              "F(A,B,C,D) = ∑(0,2,3,5,7,8,9,10,11,13,15)\n" +
              "Prime implicants: CD, B'C, AD, AB'\n" +
              "Essential prime implicants: BD, B'D'\n\n" +
              "More than one minimal solution is valid, e.g.:\n" +
              "F = BD + B'D' + CD + AD\n" +
              "F = BD + B'D' + CD + AB'\n" +
              "F = BD + B'D' + B'C + AD\n" +
              "F = BD + B'D' + B'C + AB'",
          },
          {
            h: "حالة «لا يهم» (Don't-Care Conditions)",
            p: "في بعض الدوال توجد احتمالات دخلٍ لن تحدث فعلياً أبداً (كأن تُستخدم أربع خانات لتمثيل عشرة أرقام فقط من BCD مثلاً)، فلا يهم أن يكون خرجها 0 أو 1 لأنها لن تُختبر عملياً. نرمز لهذه الحالات بالرمز X أو d، ونعاملها كقيمة 1 فقط إذا ساعدت في تكوين مجموعةٍ أكبر، وإلا نتجاهلها كأنها 0.",
            code:
              "F(W,X,Y,Z) = ∑(1,3,7,11,15)     d(W,X,Y,Z) = ∑(0,2,5)\n\n" +
              "          YZ=00 01 11 10\n" +
              "WX=00 |    x   1  1  x  |\n" +
              "WX=01 |    0   x  1  0  |\n" +
              "WX=11 |    0   0  1  0  |\n" +
              "WX=10 |    0   0  1  0  |\n\n" +
              "F(W,X,Y,Z) = YZ + W'Z  =  YZ + W'X'",
          },
          {
            h: "التنفيذ ببوابات NAND فقط",
            p: "في التصنيع الفعلي، غالباً ما يكون أرخص وأسهل استخدام نوعٍ واحدٍ فقط من البوابات بدل خلط أنواع مختلفة. أي دالة يمكن تنفيذها بالكامل ببوابات NAND فقط، بشرط أن تكون مبسّطة أولاً في صورة SOP، ثم نتبع ثلاث خطوات: نحوّل كل بوابة AND إلى NAND متبوعة بعاكس، نحوّل بوابة OR الأخيرة إلى NAND بعد عكسها، ثم نعكس أي حدٍّ مفرد (متغيرٍ واحد) مباشرة.",
            code:
              "F(A,B,C,D) = AB + CD\n\n" +
              "Step 1 (SOP with AND-OR):     AB + CD\n" +
              "Step 2 (AND -> NAND+inverter, OR -> NAND):\n" +
              "   F = ((AB)'.(CD)')'\n" +
              "Step 3 (De Morgan check):\n" +
              "   ((AB)'.(CD)')' = ((AB)')' + ((CD)')' = AB + CD   ✓",
          },
          {
            h: "التنفيذ ببوابات NOR فقط",
            p: "بالمثل، يمكن تنفيذ أي دالة ببوابات NOR فقط، لكن بشرط أن تكون مبسّطة أولاً في صورة POS، ونتبع نفس منطق NAND معكوساً: نحوّل كل بوابة OR إلى NOR متبوعة بعاكس، ونحوّل بوابة AND الأخيرة إلى NOR بعد عكسها.",
            code:
              "F(A,B,C,D) = (A+B)(C+D)\n\n" +
              "Step 1 (POS with OR-AND):     (A+B).(C+D)\n" +
              "Step 2 (OR -> NOR+inverter, AND -> NOR):\n" +
              "   F = ((A+B)' + (C+D)')'\n" +
              "Step 3 (De Morgan check):\n" +
              "   ((A+B)'+(C+D)')' = ((A+B)')'.((C+D)')' = (A+B).(C+D)   ✓",
          },
        ],
        takeaways: [
          "خريطة كارنو تختصر أي معادلة بولية بصرياً دون الحاجة لجبر معقّد، بشرط ألا يتجاوز عدد المتغيرات 4 أو 5.",
          "ترتيب أعمدة وصفوف الخريطة يتبع نظام جراي (Gray Code) دائماً، بحيث يختلف كل عنصرين متجاورين في متغيرٍ واحد فقط — والخريطة ملتفّة من كل حوافها.",
          "المُحدِّد الأولي الأساسي إجباري في أي حل، وقد توجد أكثر من صيغة صحيحة ومكافئة للدالة النهائية.",
          "حالات «لا يهم» تُعامل كـ1 فقط إذا ساعدت على تكوين مجموعةٍ أكبر، وإلا تُهمَل.",
          "أي دالة SOP يمكن تنفيذها ببوابات NAND فقط، وأي دالة POS يمكن تنفيذها ببوابات NOR فقط، وهذا يبسّط عملية التصنيع الفعلية.",
        ],
        note: "الخطوة التالية بعد إتقان خرائط كارنو هي الدوائر المنطقية المركّبة: العدّادات، والمُرمِّزات (Encoders)، والمُفكِّكات (Decoders) — وكلها ليست إلا بوابات منطقية مرتّبة بذكاء.",
      },
      en: {
        lead: "A long Boolean equation means more gates, higher cost, and a slower circuit. Karnaugh Maps (K-Maps) are a simple visual tool that shrink any Boolean equation to the smallest possible number of terms and gates, without heavy algebra. This guide builds the tool step by step, from the simple two-variable map to the four-variable map, through don't-care conditions and single-gate-type implementation.",
        sections: [
          {
            h: "Why Minimize Circuits At All?",
            p: [
              "The goal of minimizing any digital circuit is reaching a simpler, cheaper design with the exact same function. Every extra gate in a design means higher manufacturing cost, more power draw, and more chip area.",
              "Boolean algebra alone can simplify any equation, but the process gets long and error-prone once an equation has many terms. That's where the Karnaugh Map (K-Map) comes in, a direct visual method. In this guide we'll minimize functions of two, three, and four inputs.",
            ],
          },
          {
            h: "The Karnaugh Map: Core Idea",
            p: [
              "A K-Map is a grid of squares, where each square represents one input combination (a minterm), exactly like one row of a truth table, but arranged so that any two neighboring squares differ in exactly one variable. That single property is the whole trick behind the tool.",
              "The map can minimize a function in SOP form (Sum of Products) or POS form (Product of Sums) using the same procedure.",
            ],
          },
          {
            h: "Minimization Steps",
            p: "Regardless of the number of variables, the procedure never changes:",
            list: [
              "Find the function's truth table, or its Minterms/Maxterms expression",
              "Draw a map with a number of squares equal to the number of input combinations (2^n)",
              "Combine equal-valued neighboring squares into groups (each group's size must be a power of 2: 1, 2, 4, 8...)",
              "Write the shortened term for each group (a bigger group means a shorter term with fewer literals)",
              "Add up all the terms to get the final minimized expression",
              "Check: is further simplification possible?",
              "Draw the final logic circuit",
            ],
          },
          {
            h: "The Two-Variable Map",
            p: "For a function F of two variables X and Y, the map is a 2x2 grid (4 squares). Any two squares that are horizontally or vertically adjacent (never diagonally) differ in exactly one variable, which is what lets you merge them into one shorter term.",
            code: "      Y=0  Y=1\nX=0 |  M0   M1  |   M0=X'Y'  M1=X'Y\nX=1 |  M2   M3  |   M2=XY'   M3=XY",
          },
          {
            h: "Example: Minimizing a Two-Variable Function",
            p: "Given the following function, find its simplest form using the map:",
            code:
              "X Y | F\n----+---\n0 0 | 0\n0 1 | 1\n1 0 | 1\n1 1 | 1\n\n" +
              "K-Map:\n      Y=0  Y=1\nX=0 |  0    1  |\nX=1 |  1    1  |\n\n" +
              "Group 1: (X=1,Y=0)+(X=1,Y=1)  -> X\n" +
              "Group 2: (X=0,Y=1)+(X=1,Y=1)  -> Y\n\n" +
              "F(X,Y) = X + Y",
          },
          {
            h: "The Three-Variable Map",
            p: "For a function of three variables X, Y, and Z there are 8 combinations, so the map is a single row of 2x4 squares. Here the most important rule of map-building appears: the YZ column order must follow Gray Code — 00, 01, 11, 10 — not plain binary order, because every pair of neighboring columns, including the first and last, must differ in exactly one bit (the map wraps around from its right edge back to its left).",
            code: "        YZ=00  YZ=01  YZ=11  YZ=10\nX=0  |   M0     M1     M3     M2   |\nX=1  |   M4     M5     M7     M6   |",
          },
          {
            h: "Worked Examples on the Three-Variable Map",
            p: "Let's apply the steps to three functions given as sums of minterms:",
            code:
              "F(X,Y,Z) = ∑(2,3,4,5)\n" +
              "        YZ=00 01 11 10\n" +
              "X=0  |    0   0  1  1  |\n" +
              "X=1  |    1   1  0  0  |\n" +
              "Groups: (2,3)->X'Y   (4,5)->XY'\n" +
              "F(X,Y,Z) = X'Y + XY'   =  X⊕Y\n\n" +
              "F(X,Y,Z) = ∑(3,4,6,7)\n" +
              "        YZ=00 01 11 10\n" +
              "X=0  |    0   0  1  0  |\n" +
              "X=1  |    1   0  1  1  |\n" +
              "Groups: (4,6)->XZ'   (3,7)->YZ\n" +
              "F(X,Y,Z) = YZ + XZ'\n\n" +
              "F(X,Y,Z) = ∑(0,2,4,5,6)\n" +
              "        YZ=00 01 11 10\n" +
              "X=0  |    1   0  0  1  |\n" +
              "X=1  |    1   1  0  1  |\n" +
              "Groups: (0,2,4,6)->Z'   (4,5)->XY'\n" +
              "F(X,Y,Z) = Z' + XY'",
          },
          {
            h: "The Four-Variable Map",
            p: "With four variables W, X, Y, and Z there are 16 combinations, so the map is a 4x4 grid. The same rule repeats: both the WX rows and YZ columns must follow Gray Code, and the map wraps on every side — right to left and top to bottom — meaning the map's four corners are also considered adjacent and can be grouped together!",
            code:
              "F(W,X,Y,Z) = ∑(0,1,2,4,5,6,8,9,12,13,14)\n\n" +
              "          YZ=00 01 11 10\n" +
              "WX=00 |    1   1  0  1  |\n" +
              "WX=01 |    1   1  0  1  |\n" +
              "WX=11 |    1   1  0  0  |\n" +
              "WX=10 |    1   1  0  1  |\n\n" +
              "F(W,X,Y,Z) = Y' + W'Z' + XZ'",
          },
          {
            h: "Prime Implicants and Essential Prime Implicants",
            p: [
              "When grouping squares, three conditions must hold: every 1-valued minterm must be covered, use as few groups as possible, and never cover a square redundantly. A Prime Implicant is the largest possible group of adjacent squares. An Essential Prime Implicant is a prime implicant that contains a square not covered by any other prime implicant, meaning it must appear in any valid solution.",
              "It's worth knowing that some functions have more than one correct minimal solution, as long as every solution covers all required terms with the same minimum term count — all such solutions are equally valid.",
            ],
            code:
              "F(A,B,C,D) = ∑(0,2,3,5,7,8,9,10,11,13,15)\n" +
              "Prime implicants: CD, B'C, AD, AB'\n" +
              "Essential prime implicants: BD, B'D'\n\n" +
              "More than one minimal solution is valid, e.g.:\n" +
              "F = BD + B'D' + CD + AD\n" +
              "F = BD + B'D' + CD + AB'\n" +
              "F = BD + B'D' + B'C + AD\n" +
              "F = BD + B'D' + B'C + AB'",
          },
          {
            h: "Don't-Care Conditions",
            p: "Some functions include input combinations that will simply never occur in practice (say, using four bits to represent only ten BCD digits). Whether their output is 0 or 1 doesn't matter, since they're never actually tested. We mark these with X or d, and treat them as 1 only when doing so helps form a larger group; otherwise we ignore them as if they were 0.",
            code:
              "F(W,X,Y,Z) = ∑(1,3,7,11,15)     d(W,X,Y,Z) = ∑(0,2,5)\n\n" +
              "          YZ=00 01 11 10\n" +
              "WX=00 |    x   1  1  x  |\n" +
              "WX=01 |    0   x  1  0  |\n" +
              "WX=11 |    0   0  1  0  |\n" +
              "WX=10 |    0   0  1  0  |\n\n" +
              "F(W,X,Y,Z) = YZ + W'Z  =  YZ + W'X'",
          },
          {
            h: "NAND-Only Implementation",
            p: "In real manufacturing, it's often cheaper and simpler to use a single gate type instead of mixing several. Any function can be fully implemented with NAND gates alone, provided it's first simplified into SOP form, then three steps followed: convert every AND to a NAND with an inverter, convert the final OR into a NAND after inverting it, and invert any single-literal term directly.",
            code:
              "F(A,B,C,D) = AB + CD\n\n" +
              "Step 1 (SOP with AND-OR):     AB + CD\n" +
              "Step 2 (AND -> NAND+inverter, OR -> NAND):\n" +
              "   F = ((AB)'.(CD)')'\n" +
              "Step 3 (De Morgan check):\n" +
              "   ((AB)'.(CD)')' = ((AB)')' + ((CD)')' = AB + CD   ✓",
          },
          {
            h: "NOR-Only Implementation",
            p: "Likewise, any function can be implemented with NOR gates alone, provided it's first simplified into POS form, following the mirror logic of the NAND case: convert every OR to a NOR with an inverter, and convert the final AND into a NOR after inverting it.",
            code:
              "F(A,B,C,D) = (A+B)(C+D)\n\n" +
              "Step 1 (POS with OR-AND):     (A+B).(C+D)\n" +
              "Step 2 (OR -> NOR+inverter, AND -> NOR):\n" +
              "   F = ((A+B)' + (C+D)')'\n" +
              "Step 3 (De Morgan check):\n" +
              "   ((A+B)'+(C+D)')' = ((A+B)')'.((C+D)')' = (A+B).(C+D)   ✓",
          },
        ],
        takeaways: [
          "A Karnaugh Map visually minimizes any Boolean equation without heavy algebra, as long as the variable count stays at 4 or 5.",
          "Map rows and columns always follow Gray Code, so any two neighbors differ in exactly one variable, and the map wraps around on every edge.",
          "An essential prime implicant must appear in any valid solution, and a function can have more than one correct, equivalent minimal form.",
          "Don't-care conditions count as 1 only when they help form a bigger group; otherwise they're ignored.",
          "Any SOP function can be built with NAND gates only, and any POS function with NOR gates only, simplifying real-world manufacturing.",
        ],
        note: "Once Karnaugh maps click, the natural next step is combinational building blocks: counters, encoders, and decoders — all of which are just logic gates arranged with intent.",
      },
    },
  },
];
