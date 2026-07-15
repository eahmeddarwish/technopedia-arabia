import { useEffect, useState } from "react";

const LINES: { cmd: string; out: string[] }[] = [
  {
    cmd: "whoami",
    out: ["Ahmed Darwish — Embedded Systems & AI Engineer"],
  },
  {
    cmd: "cat about.txt",
    out: [
      "20+ سنة خبرة في البرمجة والأنظمة المدمجة",
      "محاضر ومدرب تعليمي في التقنيات الحديثة",
      "أبني حلولاً عملية تجمع البرمجة والذكاء الاصطناعي",
    ],
  },
  {
    cmd: "ls skills/",
    out: ["python  arduino  raspberry-pi  opencv  ml  embedded  digital-circuits  git"],
  },
];

export function Terminal() {
  const [typed, setTyped] = useState<string[]>([""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showOutput, setShowOutput] = useState<number[]>([]);

  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const current = LINES[lineIdx].cmd;
    if (charIdx <= current.length) {
      const t = setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIdx] = current.slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, 55);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setShowOutput((p) => [...p, lineIdx]);
        setLineIdx((i) => i + 1);
        setCharIdx(0);
        setTyped((prev) => [...prev, ""]);
      }, 450);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  return (
    <div className="card-tech overflow-hidden text-left" dir="ltr">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="ms-3 font-mono text-xs text-muted-foreground">
          ahmed@technopedia: ~
        </span>
      </div>
      <div className="min-h-[220px] space-y-1 p-4 font-mono text-sm leading-relaxed">
        {LINES.map((l, i) => {
          const isTyping = i === lineIdx;
          if (i > lineIdx) return null;
          return (
            <div key={i}>
              <div>
                <span className="text-[color:var(--neon)]">$</span>{" "}
                <span className={isTyping ? "caret" : ""}>{typed[i] ?? ""}</span>
              </div>
              {showOutput.includes(i) &&
                l.out.map((o, k) => (
                  <div key={k} className="text-muted-foreground">
                    {o}
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
