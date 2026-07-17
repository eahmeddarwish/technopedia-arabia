import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Building2, Copy, Check, ArrowUpLeft } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "ادعم العمل — Technopedia Arabia" },
      {
        name: "description",
        content:
          "تفاصيل دعم Technopedia Arabia: تحويل بنكي (IBAN / SWIFT) عبر البنك الوطني الكويتي، وطرق دعم إضافية قريباً.",
      },
      { property: "og:title", content: "ادعم العمل — Technopedia Arabia" },
      {
        property: "og:description",
        content:
          "كل دعم يترجَم إلى محتوى تعليمي جديد للطلاب العرب في البرمجة والأنظمة المدمجة والذكاء الاصطناعي.",
      },
    ],
  }),
  component: SupportPage,
});

function LTR({ children }: { children: React.ReactNode }) {
  return <span style={{ direction: "ltr", unicodeBidi: "isolate" }}>{children}</span>;
}

function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition hover:text-[color:var(--neon)]"
      >
        <ArrowUpLeft className="h-4 w-4 rtl:rotate-90" />
        العودة للرئيسية
      </Link>

      <div className="mb-8 flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
          <Heart className="h-6 w-6" />
        </span>
        <h1 className="text-3xl font-black sm:text-4xl">ادعم العمل</h1>
      </div>

      <p className="mb-10 text-base leading-loose text-muted-foreground">
        في كل مرة حد يدعم <LTR>Technopedia Arabia</LTR>، هو مش بس بيحوّل مبلغ — هو
        بيفتح باب لطالب عربي جديد يوصله شرح مجاني ومشروع عملي كان ممكن يفضل بعيد
        عنه بسبب اللغة أو التكلفة. أنا مش بجمع تبرعات لمشروع تجاري، أنا بشارك
        معرفة اشتغلت عليها بسنين خبرة حقيقية، ولسه مستمر أضيف وأطوّر عشان أي حد
        يحب التقنية يلاقي طريقه فيها من غير عوائق. دعمك — مهما كان حجمه — بيبقى
        جزء حقيقي من الرحلة دي.
      </p>

      <div className="card-tech p-6 sm:p-8">
        <h2 className="mb-6 text-xl font-bold">التحويل البنكي</h2>
        <div className="grid gap-3 text-sm">
          <InfoRow label="اسم البنك" value="البنك الوطني الكويتي — NBK" />
          <InfoRow label="اسم صاحب الحساب" value="AHMED MOHAMED MOHAMED DARWISH" ltr />
          <BankRow
            label="IBAN"
            value="KW06 NBOK 0000 0000 0000 2022 6953 69"
            copyValue="KW06NBOK0000000000002022695369"
          />
          <BankRow label="SWIFT" value="NBOKKWKWXXX" copyValue="NBOKKWKWXXX" />
          <InfoRow label="العملة" value="KWD — دينار كويتي" />
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <h3 className="mb-3 text-sm font-bold text-muted-foreground">طرق دعم أخرى</h3>
          <button
            type="button"
            disabled
            title="قريباً"
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-3 rounded-md border border-border bg-secondary/40 px-5 py-3 opacity-60"
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
          للتواصل بخصوص الرعاية أو الدعم المؤسسي، تواصل عبر البريد أو الواتساب من
          الرئيسية.
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value, ltr }: { label: string; value: string; ltr?: boolean }) {
  return (
    <div className="rounded-md border border-border bg-secondary/40 px-4 py-3">
      <div className="mb-1 font-mono text-xs text-muted-foreground">{label}</div>
      <div className="font-medium" dir={ltr ? "ltr" : undefined}>{value}</div>
    </div>
  );
}

function BankRow({ label, value, copyValue }: { label: string; value: string; copyValue: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-md border border-border bg-secondary/40 px-4 py-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[color:var(--neon-dim)] text-[color:var(--neon)]">
        <Building2 className="h-4 w-4" />
      </span>
      <span className="shrink-0 font-mono text-muted-foreground">
        <LTR>{label}</LTR>
      </span>
      <span className="min-w-0 flex-1 break-all font-mono text-[color:var(--neon)]" dir="ltr">
        {value}
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={`نسخ ${label}`}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition hover:border-[color:var(--neon)] hover:text-[color:var(--neon)]"
      >
        {copied ? <Check className="h-4 w-4 text-[color:var(--neon)]" /> : <Copy className="h-4 w-4" />}
      </button>
      {copied && <span className="font-mono text-xs text-[color:var(--neon)]">تم النسخ</span>}
    </div>
  );
}
