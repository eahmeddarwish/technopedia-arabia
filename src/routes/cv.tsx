import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "السيرة الذاتية — أحمد درويش | Technopedia Arabia" },
      {
        name: "description",
        content:
          "السيرة الذاتية للمهندس أحمد درويش: مهندس كهرباء، محاضر، ومتخصص أنظمة مدمجة بخبرة 20+ سنة.",
      },
    ],
  }),
  component: CVPage,
});

const AVATAR = "https://engdarwish.com/assets/images/avatar.jpg";
const CV_PDF = "https://engdarwish.com/assets/cv/Ahmed_Darwish_CV.pdf";

const SKILLS: { label: string; value: number }[] = [
  { label: "Arduino / Raspberry Pi", value: 95 },
  { label: "Python", value: 88 },
  { label: "C++", value: 85 },
  { label: "Circuit & PCB Design", value: 90 },
  { label: "Proteus / PSpice / Multisim", value: 85 },
  { label: "MATLAB / AutoCAD Electrical", value: 78 },
  { label: "Curriculum Design & Teaching", value: 92 },
  { label: "Public Speaking & Mentoring", value: 88 },
];

const CERTS: { title: string; org: string; year: string }[] = [
  { title: "أساسيات ومسح GSM", org: "HTC، جامعة القاهرة", year: "2005" },
  { title: "مبيعات المعدات التعليمية المتخصصة", org: "PHYWE SYSTEME، ألمانيا", year: "2006" },
  { title: "الذكاء الاصطناعي ولغات البرمجة الحديثة", org: "ندوة تخصصية", year: "2023" },
  { title: "MS PowerPoint", org: "تدريب أكثر من 150 متدرباً", year: "2022 – 2026" },
];

function CVPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <img src={logoUrl} alt="Technopedia Arabia" className="h-10 w-10 object-contain" />
            <span className="hidden truncate text-base font-bold sm:inline" dir="ltr">
              Technopedia <span className="text-[color:var(--neon)]">Arabia</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/"
              className="hairline rounded-md px-3 py-1.5 font-mono text-sm text-muted-foreground transition hover:text-[color:var(--neon)]"
            >
              ← الرئيسية
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6 md:sticky md:top-24 md:self-start">
          <div className="card-tech p-6 text-center">
            <img
              src={AVATAR}
              alt="أحمد درويش"
              className="mx-auto h-32 w-32 rounded-full border-2 border-[color:var(--neon)] object-cover shadow-[0_0_18px_color-mix(in_oklab,var(--neon)_35%,transparent)]"
            />
            <h2 className="mt-4 text-xl font-bold">أحمد درويش</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              مهندس كهرباء · محاضر تعليمي · متخصص أنظمة مدمجة
            </p>
            <a
              href={CV_PDF}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[color:var(--neon)] px-4 py-2.5 font-mono text-sm text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              تحميل CV.pdf
            </a>
          </div>
          <div className="card-tech space-y-3 p-6 text-sm">
            <a href="mailto:e_ahmeddarwish@hotmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-[color:var(--neon)]">
              <Mail className="h-4 w-4" />
              <span dir="ltr">e_ahmeddarwish@hotmail.com</span>
            </a>
            <a href="tel:+96551105252" className="flex items-center gap-2 text-muted-foreground hover:text-[color:var(--neon)]">
              <Phone className="h-4 w-4" />
              <span dir="ltr">+965 5110 5252</span>
            </a>
            <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-[color:var(--neon)]">
              <Github className="h-4 w-4" />
              <span dir="ltr">eahmeddarwish</span>
            </a>
            <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-[color:var(--neon)]">
              <Linkedin className="h-4 w-4" />
              <span dir="ltr">engahmeddarwish</span>
            </a>
          </div>
          <div className="card-tech p-6 text-sm">
            <h3 className="mb-3 font-bold">اللغات</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>العربية <span className="opacity-70">— اللغة الأم</span></li>
              <li>الإنجليزية <span className="opacity-70">— جيد جداً</span></li>
            </ul>
          </div>
        </aside>

        {/* Main */}
        <div className="space-y-10">
          <section>
            <h1 className="text-3xl font-black sm:text-4xl">السيرة الذاتية</h1>
            <p className="mt-4 text-base leading-loose text-muted-foreground">
              مهندس كهرباء ومحاضر تعليمي بخبرة تتجاوز 20 عاماً تجمع بين هندسة
              الأنظمة المدمجة والتعليم التقني. متخصص في Arduino و Raspberry Pi
              والتصميم القائم على المتحكمات الدقيقة، بمهارات برمجة قوية في Python
              و C++ لأنظمة إنترنت الأشياء والأتمتة. نفذت أكثر من 100 مشروع فريلانس،
              ولدي أكثر من 16 عاماً في تصميم المناهج وتوجيه الطلاب على المستويين
              المتوسط والجامعي.
            </p>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold">المهارات</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {SKILLS.map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground">{s.label}</span>
                    <span className="font-mono text-[color:var(--neon)]">{s.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-[color:var(--neon)]"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold">الشهادات</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {CERTS.map((c) => (
                <div key={c.title} className="card-tech card-tech-hover p-5">
                  <div className="font-mono text-xs text-[color:var(--neon)]">{c.year}</div>
                  <h3 className="mt-2 font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
