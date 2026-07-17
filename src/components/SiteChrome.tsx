import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoUrl from "@/assets/logo.png";

const CV_PDF = "https://engdarwish.com/assets/cv/Ahmed_Darwish_CV.pdf";

const NAV: Array<{ href: string; label: string; internal?: boolean }> = [
  { href: "/#about", label: "عني" },
  { href: "/#projects", label: "المشاريع" },
  { href: "/#videos", label: "الفيديوهات" },
  { href: "/cv", label: "السيرة الذاتية", internal: true },
  { href: "/support", label: "دعم", internal: true },
];

function LTR({ children }: { children: ReactNode }) {
  return <span style={{ direction: "ltr", unicodeBidi: "isolate" }}>{children}</span>;
}

function SocialIcons({ size = "h-4 w-4" }: { size?: string }) {
  return (
    <>
      <a href="https://github.com/eahmeddarwish" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[color:var(--neon)]"><Github className={size} /></a>
      <a href="https://www.linkedin.com/in/engahmeddarwish" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[color:var(--neon)]"><Linkedin className={size} /></a>
      <a href="https://wa.me/96551105252" aria-label="WhatsApp" className="transition hover:text-[color:var(--neon)]"><MessageCircle className={size} /></a>
      <a href="tel:+96551105252" aria-label="Phone" className="transition hover:text-[color:var(--neon)]"><Phone className={size} /></a>
      <a href="mailto:e_ahmeddarwish@hotmail.com" aria-label="Email" className="transition hover:text-[color:var(--neon)]"><Mail className={size} /></a>
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5">
          <img
            src={logoUrl}
            alt="Technopedia Arabia"
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="hidden truncate text-base font-bold sm:inline">
            <LTR>Technopedia <span className="text-[color:var(--neon)]">Arabia</span></LTR>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) =>
            n.internal ? (
              <Link key={n.href} to={n.href} className="text-base text-muted-foreground transition hover:text-[color:var(--neon)]">
                {n.label}
              </Link>
            ) : (
              <a key={n.href} href={n.href} className="text-base text-muted-foreground transition hover:text-[color:var(--neon)]">
                {n.label}
              </a>
            )
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-3 pr-1 text-muted-foreground sm:flex">
            <SocialIcons />
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

export function SiteFooter() {
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
          <SocialIcons size="h-5 w-5" />
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          <LTR>© {new Date().getFullYear()} Technopedia Arabia</LTR> · صُمّم وبُرمج بحبّ
        </p>
      </div>
    </footer>
  );
}
