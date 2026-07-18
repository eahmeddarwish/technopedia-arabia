# Technopedia Arabia

بورتفوليو شخصي ثنائي اللغة (عربي/إنجليزي) لأحمد درويش — مهندس برمجيات وذكاء اصطناعي. موقع ثابت (Static HTML/CSS/JS)، بدون أي أدوات بناء (build tools)، جاهز للرفع مباشرة على GitHub Pages مجاناً وبـ HTTPS تلقائي.

A bilingual (Arabic/English) personal portfolio for Ahmed Darwish — Software & AI Engineer. Pure static HTML/CSS/JS, no build step, ready to deploy free on GitHub Pages with automatic HTTPS.

---

## 1) هيكل الملفات / Project structure

```
technopedia-arabia/
├── index.html          # الصفحة الرئيسية / Homepage
├── projects.html        # كل المشاريع + فلاتر / All projects + filters
├── videos.html           # كل الفيديوهات / All videos
├── cv.html               # السيرة الذاتية الكاملة / Full CV
├── favicon.svg
├── css/style.css         # كل التنسيقات / All styling
├── js/
│   ├── i18n.js            # نصوص الواجهة (عربي/إنجليزي) / UI translations
│   ├── particles.js       # خلفية الجسيمات المتحركة / Animated background
│   ├── main.js            # التفاعلات العامة / Core interactions
│   ├── projects-data.js   # ✏️ بيانات المشاريع — عدّل هنا
│   ├── videos-data.js     # ✏️ بيانات الفيديوهات — عدّل هنا
│   ├── cv-data.js         # ✏️ بيانات السيرة الذاتية — عدّل هنا
│   ├── support-data.js    # ✏️ بيانات الحساب البنكي — عدّل هنا
│   ├── projects-render.js
│   ├── videos-render.js
│   ├── cv-render.js
│   └── support-render.js
└── assets/
    ├── images/            # اللوجو، صورتك، صور المشاريع
    └── cv/                # ملف الـ CV بصيغة PDF
```

كل المحتوى الفعلي (نصوص، مشاريع، فيديوهات، بيانات السيرة الذاتية) موجود في ملفات `js/*-data.js` فقط — مفيش داعي تلمس أي HTML أو CSS عشان تعدّل المحتوى.

All actual content lives in the `js/*-data.js` files only — you never need to touch HTML or CSS just to edit content.

---

## 2) خطوات التعديل السريعة / Quick content edits

### أ) اللوجو والصورة الشخصية / Logo & profile photo
- استبدل `assets/images/logo.svg` بلوجو Technopedia Arabia بتاعك (احتفظ بنفس الاسم أو عدّل المسار في كل ملفات HTML).
- استبدل `assets/images/avatar-placeholder.svg` بصورتك الشخصية (يفضّل مربّعة، 800×800px فأكثر).

### ب) المشاريع / Projects — `js/projects-data.js`
كل مشروع عبارة عن object فيه: `id`, `categories`, `featured`, `image`, `demoUrl`, `codeUrl`, `tags`, `title{ar,en}`, `desc{ar,en}`, `details{ar,en}`.
- `featured: true` يخلي المشروع يظهر في الصفحة الرئيسية.
- سيب `demoUrl` أو `codeUrl` فاضي (`""`) لو مفيش رابط، وهيختفي الزرار تلقائياً.
- لإضافة مشروع جديد: انسخ أي object كامل وعدّل قيمه.

### ج) الفيديوهات / Videos — `js/videos-data.js`
- كل فيديو محتاج بس `youtubeId` (الجزء اللي بعد `watch?v=` في رابط اليوتيوب).
- الصورة المصغّرة والتشغيل بيحصلوا تلقائياً — مفيش حاجة تضيفها يدوياً.

### د) السيرة الذاتية / CV — `js/cv-data.js`
- عدّل `experience`, `education`, `skills`, `certifications`, `languages` حسب بياناتك الحقيقية (التواريخ الحالية تقريبية — راجعها).
- ضع ملف الـ PDF الحقيقي في `assets/cv/Ahmed_Darwish_CV.pdf` (احذف ملف `PUT_YOUR_CV_HERE.txt` بعدها).

### هـ) الدعم/التبرع (تحويل بنكي) / Support — `js/support-data.js`
عدّل `bankName`, `accountName`, `iban`, `currency` ببيانات حسابك البنكي الحقيقي في الكويت. القسم بيظهر في الصفحة الرئيسية مع زرار نسخ لكل حقل.

⚠️ تأكد إنك تحط بس رقم الآيبان واسم صاحب الحساب — ماتحطش أبداً رقم الكارت أو الـ CVV أو أي باسورد.

⚠️ Only put the IBAN and account holder name — never your card number, CVV, or any password.

### و) روابط السوشيال ميديا / Social links
غيّر روابط `#` بجانب أيقونات LinkedIn و YouTube في `index.html`, `projects.html`, `videos.html` (رابط GitHub متظبط بالفعل على `github.com/eahmeddarwish`).

---

## 3) التشغيل محلياً / Run locally

مفيش حاجة تتثبّت. افتح `index.html` مباشرة في المتصفح، أو شغّل سيرفر بسيط:

```bash
# Python
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## 4) الرفع المجاني على GitHub Pages (مع HTTPS تلقائي) / Deploy free on GitHub Pages

الحساب بتاعك: **github.com/eahmeddarwish**

### الخطوات:

1. روح على [github.com/new](https://github.com/new) واعمل repository جديد باسم:
   `technopedia-arabia` (خليه Public، من غير ما تضيف README أو .gitignore).

2. من جهازك، افتح Terminal/PowerShell في فولدر الموقع وشغّل:

```bash
cd technopedia-arabia
git init
git add .
git commit -m "Initial commit: Technopedia Arabia portfolio"
git branch -M main
git remote add origin https://github.com/eahmeddarwish/technopedia-arabia.git
git push -u origin main
```

3. روح على الـ repo في GitHub → **Settings** → **Pages** (في القائمة الجانبية).
4. تحت **Build and deployment** → **Source**، اختار **Deploy from a branch**.
5. اختار Branch: **main** و Folder: **/ (root)** → اضغط **Save**.
6. استنى دقيقة أو اتنين، وهيظهرلك رابط الموقع:
   `https://eahmeddarwish.github.io/technopedia-arabia/`

### تفعيل الـ HTTPS (مهم للأمان) / Enable HTTPS

في نفس صفحة **Settings → Pages**، هتلاقي checkbox اسمه **Enforce HTTPS** — فعّله (بيتفعل تلقائي بعد أول نشر في العادة). ده بيضمن إن كل زيارة للموقع تكون مشفّرة بالكامل، من غير أي تكلفة أو شهادة SSL تشتريها بنفسك.

With **Enforce HTTPS** checked in Settings → Pages, GitHub automatically issues and renews a free SSL certificate — the entire site is served securely with zero extra setup.

### تحديث الموقع بعدين / Updating the site later

```bash
git add .
git commit -m "وصف التعديل"
git push
```

هيتحدث الموقع تلقائياً خلال دقيقة أو اتنين.

### ربط دومين مخصص لاحقاً (اختياري) / Custom domain later (optional)

لو اشتريت دومين زي `technopedia.ar` أو `technopediaarabia.com`، من نفس صفحة **Settings → Pages** حط الدومين في خانة **Custom domain**، وهيديك GitHub تعليمات DNS بسيطة (CNAME record). الـ HTTPS هيفضل شغال تلقائياً على الدومين الجديد كمان.

---

## 5) ملاحظات تقنية / Technical notes

- التصميم: Dark mode + Glassmorphism + لمسات 3D (particle background, card tilt) — بدون أي مكتبات خارجية تقيلة، كله vanilla JS.
- ثنائي اللغة بالكامل مع دعم RTL/LTR تلقائي وحفظ اختيار اللغة في المتصفح.
- كل الصفحات responsive بالكامل على الموبايل والتابلت.
- الفيديوهات تتحمّل عبر `youtube-nocookie.com` (خصوصية أفضل، بدون احتياج API key).
