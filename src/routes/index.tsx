import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PCBBackground } from "@/components/PCBBackground";
import { Terminal } from "@/components/Terminal";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PROJECTS, VIDEOS } from "@/data/projects";
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
  { href: "/support", label: "دعم" },
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

const AVATAR = "https://engdarwish.com/assets/images/avatar.jpg";
const CV_PDF = "https://engdarwish.com/assets/cv/Ahmed_Darwish_CV.pdf";

const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
const PROJECTS_COUNT = PROJECTS.length;

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
          <div className="hidden items-center gap-3 pr-1 text-muted-foreground sm:flex">
            <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[color:var(--neon)]"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[color:var(--neon)]"><Linkedin className="h-4 w-4" /></a>
            <a href="https://wa.me/96551105252" aria-label="WhatsApp" className="transition hover:text-[color:var(--neon)]"><MessageCircle className="h-4 w-4" /></a>
            <a href="tel:+96551105252" aria-label="Phone" className="transition hover:text-[color:var(--neon)]"><Phone className="h-4 w-4" /></a>
            <a href="mailto:e_ahmeddarwish@hotmail.com" aria-label="Email" className="transition hover:text-[color:var(--neon)]"><Mail className="h-4 w-4" /></a>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="hairline rounded-md px-3 py-1.5 font-mono text-sm text-muted-foreground transition hover:text-[color:var(--neon)]"
            aria-label="Toggle language"
          >
            <LTR>AR / EN</LTR>
          </button>
          <a
            href={CV_PDF}
            target="_blank"
            rel="noreferrer"
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
              className="h-20 w-20 rounded-full border-2 border-[color:var(--neon)] object-cover shadow-[0_0_18px_color-mix(in_oklab,var(--neon)_35%,transparent)] [.light_&]:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.35)] sm:h-24 sm:w-24"
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
            مهندس كهرباء ومحاضر تعليمي بخبرة 20+ سنة.
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
            <Link
              to="/support"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-base text-muted-foreground transition hover:border-[color:var(--neon)] hover:text-foreground"
            >
              ادعم العمل
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[color:var(--neon)]">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[color:var(--neon)]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://wa.me/96551105252" aria-label="WhatsApp" className="transition hover:text-[color:var(--neon)]">
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="mailto:e_ahmeddarwish@hotmail.com" aria-label="Email" className="transition hover:text-[color:var(--neon)]">
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
            أنا <span className="text-foreground">أحمد درويش</span> — مهندس كهرباء
            ومحاضر تعليمي بخبرة تتجاوز{" "}
            <span className="text-[color:var(--neon)]">20 عاماً</span> تجمع بين
            هندسة الأنظمة المدمجة والتعليم التقني. متخصص في{" "}
            <LTR>Arduino</LTR> و <LTR>Raspberry Pi</LTR> والتصميم القائم على
            المتحكمات الدقيقة، بمهارات برمجة قوية في <LTR>Python</LTR> و{" "}
            <LTR>C++</LTR> لأنظمة إنترنت الأشياء والأتمتة.
          </p>
          <p>
            نفذت أكثر من 100 مشروع فريلانس، ولدي أكثر من 16 عاماً في تصميم
            المناهج وتوجيه الطلاب على المستويين المتوسط والجامعي — أشارك المعرفة
            تحت مظلة <span className="text-foreground"><LTR>Technopedia Arabia</LTR></span>.
          </p>

          <p className="!mt-6">هذه بعض التقنيات التي أعمل بها يومياً:</p>
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
          <Stat icon={<Cpu className="h-7 w-7" />} value="+20" label="سنة خبرة" />
          <Stat icon={<Cog className="h-7 w-7" />} value={`+${PROJECTS_COUNT}`} label="مشروع تقني" />
          <Stat icon={<Brain className="h-7 w-7" />} value="AI" label="متخصص في التعلّم الآلي" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="card-tech card-tech-hover flex items-center gap-5 p-7">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-3xl font-bold text-[color:var(--neon)]"><LTR>{value}</LTR></div>
        <div className="truncate text-base text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
      <SectionHeader n="03" title="مشاريع مختارة" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon)] px-5 py-2.5 font-mono text-sm text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground"
        >
          عرض جميع المشاريع ({PROJECTS_COUNT}) ←
        </Link>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
      <SectionHeader n="04" title="فيديوهات وشروحات" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((v) => (
          <div
            key={v.title}
            className="card-tech group relative block overflow-hidden opacity-95"
          >
            <div className="relative aspect-video overflow-hidden bg-secondary">
              <div className="absolute inset-0 grid place-items-center">
                <PlayCircle className="h-12 w-12 text-[color:var(--neon)] opacity-70" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />
              <span className="absolute right-3 top-3 rounded-full border border-[color:var(--neon-dim)] bg-background/80 px-2.5 py-1 font-mono text-[10px] text-[color:var(--neon)]">
                قريباً
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold leading-snug">{v.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          </div>
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
          <h3 className="text-lg font-bold">تصفّح السيرة الذاتية الكاملة</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            الخبرات، المهارات، والشهادات في صفحة واحدة — أو حمّلها بصيغة <LTR>PDF</LTR>.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon)] px-5 py-3 font-mono text-sm text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground"
          >
            عرض <LTR>CV</LTR>
          </Link>
          <a
            href={CV_PDF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-muted-foreground transition hover:border-[color:var(--neon)] hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            <LTR>تحميل CV.pdf</LTR>
          </a>
        </div>
      </div>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="mx-auto max-w-4xl px-5 py-12 sm:py-14">
      <SectionHeader n="01" title="ادعم العمل" />
      <div className="card-tech p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
            <Heart className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold">دعمك يصنع فرقاً حقيقياً</h3>
            <p className="mt-3 text-base leading-loose text-muted-foreground">
              في كل مرة حد يدعم <LTR>Technopedia Arabia</LTR>، هو مش بس بيحوّل
              مبلغ — هو بيفتح باب لطالب عربي جديد يوصله شرح مجاني ومشروع عملي
              كان ممكن يفضل بعيد عنه بسبب اللغة أو التكلفة. أنا مش بجمع تبرعات
              لمشروع تجاري، أنا بشارك معرفة اشتغلت عليها بسنين خبرة حقيقية،
              ولسه مستمر أضيف وأطوّر عشان أي حد يحب التقنية يلاقي طريقه فيها من
              غير عوائق. دعمك — مهما كان حجمه — بيبقى جزء حقيقي من الرحلة دي.
            </p>
            <div className="mt-6">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon)] px-5 py-3 font-mono text-sm text-[color:var(--neon)] transition hover:bg-[color:var(--neon)] hover:text-primary-foreground"
              >
                تفاصيل الدعم ←
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Technopedia Arabia" className="h-9 w-9 object-contain" />
          <span className="text-base font-bold">
            <LTR>Technopedia <span className="text-[color:var(--neon)]">Arabia</span></LTR>
          </span>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[color:var(--neon)]"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[color:var(--neon)]"><Linkedin className="h-5 w-5" /></a>
          <a href="https://wa.me/96551105252" aria-label="WhatsApp" className="transition hover:text-[color:var(--neon)]"><MessageCircle className="h-5 w-5" /></a>
          <a href="tel:+96551105252" aria-label="Phone" className="transition hover:text-[color:var(--neon)]"><Phone className="h-5 w-5" /></a>
          <a href="mailto:e_ahmeddarwish@hotmail.com" aria-label="Email" className="transition hover:text-[color:var(--neon)]"><Mail className="h-5 w-5" /></a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          <LTR>© {new Date().getFullYear()} Technopedia Arabia</LTR> · صُمّم وبُرمج بحبّ
        </p>
      </div>
    </footer>
  );
}
