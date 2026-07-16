import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS, CATEGORY_LABELS, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "المشاريع — أحمد درويش | Technopedia Arabia" },
      {
        name: "description",
        content:
          "مجموعة مشاريع المهندس أحمد درويش في الأنظمة المدمجة، Arduino، Raspberry Pi، والذكاء الاصطناعي.",
      },
      { property: "og:title", content: "المشاريع — Technopedia Arabia" },
      {
        property: "og:description",
        content: "مشاريع عملية في Arduino و Raspberry Pi و Python و AI.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Filter = ProjectCategory | "all";
const FILTERS: Filter[] = ["all", "arduino", "raspberrypi", "python-ai", "robotics", "iot"];

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter));

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

      <main className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-base text-[color:var(--neon)]">/projects</span>
          <h1 className="text-3xl font-black sm:text-4xl">جميع المشاريع</h1>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-sm text-muted-foreground">{PROJECTS.length}</span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count = f === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.categories.includes(f)).length;
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={
                  "rounded-full border px-4 py-1.5 font-mono text-sm transition " +
                  (active
                    ? "border-[color:var(--neon)] bg-[color:var(--neon-dim)] text-[color:var(--neon)]"
                    : "border-border text-muted-foreground hover:border-[color:var(--neon)] hover:text-foreground")
                }
              >
                {CATEGORY_LABELS[f]} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-[color:var(--neon)] hover:underline"
          >
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </main>
    </div>
  );
}
