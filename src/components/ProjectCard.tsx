import { Github, ExternalLink, Cpu } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card-tech card-tech-hover flex flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary to-background">
            <Cpu className="h-10 w-10 text-[color:var(--neon)] opacity-70" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Project Image Placeholder
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2 font-mono text-xs text-muted-foreground">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-border px-2.5 py-1">
              <span style={{ direction: "ltr", unicodeBidi: "isolate" }}>{t}</span>
            </li>
          ))}
        </ul>
        {(p.demoUrl || p.codeUrl) && (
          <div className="flex items-center gap-3 pt-2">
            {p.demoUrl && (
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[color:var(--neon)] hover:underline"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Demo
              </a>
            )}
            {p.codeUrl && (
              <a
                href={p.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-[color:var(--neon)]"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
