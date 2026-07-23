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
        article: {
          ar: {
            lead: "لعبة شطرنجٍ كاملة تعمل بالكامل داخل المتصفح — ضدّ محرك Stockfish بثلاث مستويات، أو ضدّ صديقٍ على نفس الجهاز، وكل جلسةٍ مستقلةٌ تمامًا عن غيرها.",
            sections: [
              {
                h: "الفكرة",
                p: "شطرنجٌ احترافي بلا تثبيتٍ ولا حساب: تفتح الرابط وتلعب فورًا. تختار مستوى الصعوبة (سهل / متوسط / صعب)، أو تتحدّى صديقًا وجهًا لوجهٍ على نفس الشاشة."
              },
              {
                h: "إزاي بيشتغل",
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
                    d: "التنبؤ باليوم التالي ثم إعادة تغذيته للتنبؤ باللي بعده يُراكم الخطأ بسرعة. تمريرةٌ واحدة تُخرج كل الآفاق دفعةً واحدة تتجنّب المشكلة كليًا."
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
        },
        article: {
          ar: {
            lead: "رادار طيرانٍ حيٌّ يفكّ تشفير إشارات الطائرات الحقيقية على تردد 1090 ميجاهرتز بدونجل RTL-SDR، ويعرضها على واجهةٍ بطابع أبراج المراقبة — على أي لابتوبٍ أو راسبيري باي.",
            sections: [
              {
                h: "الفكرة",
                p: "تلتقط إشارات ADS-B التي تبثّها الطائرات فعليًا، وتفكّها وتعرض كل طائرةٍ على خريطةٍ حيةٍ بأيقوناتٍ دقيقة الاتجاه ومساراتٍ خلفها. ومعندكش هاردوير؟ وضع محاكاةٍ جاهزٌ يشغّل نفس الواجهة ببياناتٍ تجريبية."
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
        article: {
          ar: {
            lead: "شاهِد شيئًا ← نفّذ إجراءً. ارفع صورةً مرجعية، وحدّد ما يحدث عندما تراها الكاميرا من جديد — كل ذلك داخل متصفحك، بلا خادم، وبلا مفتاح، وبلا أن تغادر صورةٌ جهازك.",
            sections: [
              {
                h: "الفكرة",
                p: "ترفع صورةً لأي شيءٍ يهمّك، وتختار الإجراء: عرض صورة، تشغيل فيديو، جلب حالة الطقس، أو رسالةً نصية. وعندما تُشابه لقطةٌ جديدة صورتك المرجعية بدرجةٍ كافية — يُنفَّذ الإجراء تلقائيًا."
              },
              {
                h: "إزاي بيشتغل",
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
