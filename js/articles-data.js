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
];
