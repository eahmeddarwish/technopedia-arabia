import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PCBBackground } from "@/components/PCBBackground";
import { Terminal } from "@/components/Terminal";
import logoUrl from "@/assets/logo.png";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
  Download,
  ArrowUpLeft,
  Cpu,
  Cog,
  Brain,
  PlayCircle,
  Heart,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

/** Isolates inline English/technical terms inside RTL Arabic text. */
function LTR({ children }: { children: ReactNode }) {
  return (
    <span style={{ direction: "ltr", unicodeBidi: "isolate" }}>{children}</span>
  );
}

const NAV = [
  { href: "#about", label: "عني" },
  { href: "#projects", label: "المشاريع" },
  { href: "#videos", label: "الفيديوهات" },
  { href: "#cv", label: "السيرة الذاتية" },
  { href: "#support", label: "دعم" },
];

const TECH = [
  "Python",
  "Arduino / C++",
  "Raspberry Pi",
  "OpenCV",
  "Machine Learning",
  "Embedded Systems",
  "Digital Circuit Design",
  "Git / GitHub",
];

const PROJECTS = [
  {
    title: "نظام رؤية آلية",
    desc: "معالجة صور فورية للكشف عن الأشكال والألوان لتطبيقات صناعية.",
    tags: ["Python", "OpenCV", "ML"],
  },
  {
    title: "تحكم ذكي بمنزل",
    desc: "منظومة أتمتة منزلية تعتمد على مستشعرات متعددة مع واجهة تحكم لاسلكية.",
    tags: ["Arduino", "C++", "IoT"],
  },
  {
    title: "بوابة تعلّم آلي على الطرف",
    desc: "نموذج تصنيف يعمل مباشرة على الجهاز لمعالجة بيانات المستشعرات محلياً.",
    tags: ["Raspberry Pi", "ML", "Edge AI"],
  },
  {
    title: "دوائر رقمية تعليمية",
    desc: "سلسلة مشاريع تعليمية لتصميم دوائر منطقية رقمية مع شرح تفصيلي للطلاب.",
    tags: ["Digital Design", "Education"],
  },
];

const VIDEOS = [
  { title: "مقدمة في الأنظمة المدمجة", meta: "دورة تعليمية" },
  { title: "البرمجة بلغة Python للمبتدئين", meta: "سلسلة عملية" },
  { title: "الذكاء الاصطناعي وتطبيقاته", meta: "محاضرة" },
];

const AVATAR = "https://engdarwish.com/assets/images/avatar.jpg";

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Support />
        <About />
        <Projects />
        <Videos />
        <CV />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="group flex min-w-0 items-center gap-2.5">
          <img
            src={logoUrl}
            alt="Technopedia Arabia"
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="hidden truncate text-base font-bold sm:inline">
            <LTR>Technopedia <span className="text-[color:var(--neon)]">Arabia</span></LTR>
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-base text-muted-foreground transition hover:text-[color:var(--neon)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="hairline rounded-md px-3 py-1.5 font-mono text-sm text-muted-foreground transition hover:text-[color:var(--neon)]"
            aria-label="Toggle language"
          >
            <LTR>AR / EN</LTR>
          </button>
          <a
            href="#cv"
            className="hidden rounded-md border border-[color:var(--neon)] px-3 py-1.5 font-mono text-sm text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground sm:inline-flex"
          >
            <LTR>resume.pdf</LTR>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <PCBBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="fade-up">
          <div className="mb-6 flex items-center gap-4">
            <img
              src={AVATAR}
              alt="أحمد درويش"
              className="h-16 w-16 rounded-full border-2 border-[color:var(--neon)] object-cover shadow-[0_0_18px_color-mix(in_oklab,var(--neon)_35%,transparent)] sm:h-20 sm:w-20"
              loading="eager"
            />
            <div className="min-w-0">
              <p className="font-mono text-sm text-[color:var(--neon)]">&gt; مرحباً، اسمي</p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">أحمد درويش.</h1>
            </div>
          </div>
          <h2 className="mt-1 text-2xl font-bold text-muted-foreground sm:text-3xl md:text-4xl">
            أبني حلول تقنية بين البرمجة، الأنظمة المدمجة، والذكاء الاصطناعي.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            مهندس برمجيات وأنظمة مدمجة بخبرة 20+ سنة، ومحاضر تعليمي.
            شعاري: <span className="neon-text">«رقمنة عالمك تبدأ هنا»</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon)] px-5 py-3 font-mono text-base text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground"
            >
              <ArrowUpLeft className="h-5 w-5 rtl:rotate-90" />
              استعرض المشاريع
            </a>
            <a
              href="#support"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-base text-muted-foreground transition hover:border-[color:var(--neon)] hover:text-foreground"
            >
              ادعم العمل
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[color:var(--neon)]">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[color:var(--neon)]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://wa.me/0" aria-label="WhatsApp" className="transition hover:text-[color:var(--neon)]">
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="mailto:contact@engdarwish.com" aria-label="Email" className="transition hover:text-[color:var(--neon)]">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="fade-up">
          <Terminal />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-base text-[color:var(--neon)]"><LTR>{n}.</LTR></span>
      <h2 className="text-3xl font-black sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-12 sm:py-14">
      <SectionHeader n="02" title="عني" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-base leading-loose text-muted-foreground">
          <p>
            أنا <span className="text-foreground">أحمد درويش</span> — مهندس
            برمجيات وأنظمة مدمجة وذكاء اصطناعي بأكثر من{" "}
            <span className="text-[color:var(--neon)]">20 سنة</span> من الخبرة
            العملية في تصميم وتنفيذ حلول تقنية متكاملة.
          </p>
          <p>
            بجانب العمل الهندسي، أنا محاضر ومدرّب تعليمي أشارك المعرفة عبر
            دورات وفيديوهات وشروحات مبسّطة تحت مظلة{" "}
            <span className="text-foreground"><LTR>Technopedia Arabia</LTR></span>.
          </p>

          <h3 className="!mt-8 text-lg font-bold text-foreground">
            قصة الاسم والشعار
          </h3>
          <p>
            [هنا نص عن قصة الاسم والشعار — سيتم استبداله بالنص الحقيقي من أحمد]
          </p>

          <p>هذه بعض التقنيات التي أعمل بها يومياً:</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 font-mono text-sm">
            {TECH.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-[color:var(--neon)]">▸</span>
                <span className="text-foreground"><LTR>{t}</LTR></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <Stat icon={<Cpu className="h-5 w-5" />} value="+20" label="سنة خبرة" />
          <Stat icon={<Cog className="h-5 w-5" />} value="+200" label="مشروع تقني" />
          <Stat icon={<Brain className="h-5 w-5" />} value="AI" label="متخصص في التعلّم الآلي" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="card-tech card-tech-hover flex items-center gap-4 p-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-2xl font-bold text-[color:var(--neon)]"><LTR>{value}</LTR></div>
        <div className="truncate text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
      <SectionHeader n="03" title="مشاريع مختارة" />
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card-tech card-tech-hover flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-md border border-border text-[color:var(--neon)]">
                <Cpu className="h-5 w-5" />
              </div>
              <Github className="h-4 w-4 text-muted-foreground transition hover:text-[color:var(--neon)]" />
            </div>
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <ul className="mt-auto flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border border-border px-2.5 py-1">
                  <LTR>{t}</LTR>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#" className="font-mono text-sm text-[color:var(--neon)] hover:underline">
          عرض جميع المشاريع ←
        </a>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
      <SectionHeader n="04" title="فيديوهات وشروحات" />
      <div className="grid gap-6 sm:grid-cols-3">
        {VIDEOS.map((v) => (
          <a
            key={v.title}
            href="#"
            className="card-tech card-tech-hover group block overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden bg-secondary">
              <div className="absolute inset-0 grid place-items-center">
                <PlayCircle className="h-12 w-12 text-[color:var(--neon)] opacity-80 transition group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold">{v.title}</h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{v.meta}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className="mx-auto max-w-4xl px-5 py-12 sm:py-14">
      <SectionHeader n="05" title="السيرة الذاتية" />
      <div className="card-tech flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold">حمّل السيرة الذاتية بصيغة <LTR>PDF</LTR></h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            نظرة تفصيلية على الخبرات والمشاريع والدورات التي قدّمها المهندس أحمد درويش.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon)] px-5 py-3 font-mono text-sm text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground"
        >
          <Download className="h-4 w-4" />
          <LTR>تحميل CV.pdf</LTR>
        </a>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="mx-auto max-w-4xl px-5 py-12 sm:py-14">
      <SectionHeader n="01" title="ادعم العمل" />
      <div className="card-tech p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
            <Heart className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold">دعمك يصنع فرقاً حقيقياً</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              كل تبرّع يترجَم مباشرةً إلى محتوى تعليمي أكثر: دروس جديدة، مشاريع
              عملية مفتوحة المصدر، وشروحات تصل لطلاب عرب لا يجدون هذا المحتوى
              بلغتهم. دعمك = طالب جديد يتعلّم البرمجة والأنظمة المدمجة والذكاء
              الاصطناعي مجّاناً.
            </p>

            <div className="mt-6 grid gap-3 font-mono text-sm">
              <BankRow label="IBAN" value="[IBAN — بيانات حقيقية قريباً]" />
              <BankRow label="SWIFT" value="[SWIFT — بيانات حقيقية قريباً]" />
            </div>

            <div className="mt-6">
              <button
                type="button"
                disabled
                title="قريباً"
                aria-disabled="true"
                className="group inline-flex cursor-not-allowed items-center gap-3 rounded-md border border-border bg-secondary/40 px-5 py-3 opacity-60"
              >
                <span className="font-mono text-sm font-bold">
                  <span className="text-[#003087]">Pay</span>
                  <span className="text-[#009cde]">Pal</span>
                </span>
                <span className="text-sm text-muted-foreground">ادعم عبر PayPal</span>
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  قريباً
                </span>
              </button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              للتواصل بخصوص الرعاية أو الدعم المؤسسي عبر البريد أو الواتساب أدناه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BankRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-md border border-border bg-secondary/40 px-4 py-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
        <Building2 className="h-4 w-4" />
      </span>
      <span className="shrink-0 text-muted-foreground">
        <LTR>{label}</LTR>
      </span>
      <span className="min-w-0 flex-1 break-words text-[color:var(--neon)]">{value}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[color:var(--neon)]"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[color:var(--neon)]"><Linkedin className="h-5 w-5" /></a>
          <a href="https://wa.me/0" aria-label="WhatsApp" className="transition hover:text-[color:var(--neon)]"><MessageCircle className="h-5 w-5" /></a>
          <a href="tel:+0" aria-label="Phone" className="transition hover:text-[color:var(--neon)]"><Phone className="h-5 w-5" /></a>
          <a href="mailto:contact@engdarwish.com" aria-label="Email" className="transition hover:text-[color:var(--neon)]"><Mail className="h-5 w-5" /></a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          <LTR>© {new Date().getFullYear()} Technopedia Arabia</LTR> · صُمّم وبُرمج بحبّ
        </p>
      </div>
    </footer>
  );
}
