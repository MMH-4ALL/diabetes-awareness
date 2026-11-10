import { Droplet, BookOpen, MessageCircleQuestion, ExternalLink, ArrowUp } from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const references = [
  'American Diabetes Association. “2. Classification and Diagnosis of Diabetes: Standards of Medical Care in Diabetes.” Diabetes Care, vol. 44, suppl. 1, 2021, pp. S15–S33.',
  'Centers for Disease Control and Prevention. “What Is Diabetes?” CDC, 2023, www.cdc.gov/diabetes/basics/diabetes.html.',
  'International Diabetes Federation. IDF Diabetes Atlas. 10th ed., IDF, 2021, diabetesatlas.org.',
  'National Institute of Diabetes and Digestive and Kidney Diseases. “Type 1 Diabetes.” NIH, 2023, www.niddk.nih.gov.',
  'National Institute of Diabetes and Digestive and Kidney Diseases. “Type 2 Diabetes.” NIH, 2023, www.niddk.nih.gov.',
  'World Health Organization. “Diabetes.” WHO Fact Sheet, 2023, www.who.int/news-room/fact-sheets/detail/diabetes.',
]

export default function Footer() {
  return (
    <footer id="references" className="relative overflow-hidden bg-navy-950 pt-24 text-white">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(18,179,165,0.16),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* References */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-teal-soft ring-1 ring-inset ring-white/10">
                <BookOpen className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div>
                <span className="eyebrow text-teal-soft">References</span>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  Authoritative sources
                </h2>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
              Every statistic and claim on this page is drawn from the leading
              public-health and medical authorities, cited in MLA format below.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ol className="space-y-4">
              {references.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span className="font-mono text-[13px] font-semibold text-teal-soft">
                    [{i + 1}]
                  </span>
                  <p className="text-[13.5px] leading-relaxed text-white/70">{r}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Reflection prompt */}
        <Reveal className="mt-14" delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-teal/25 bg-gradient-to-br from-teal/10 to-white/[0.02] p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal/15 text-teal-soft ring-1 ring-inset ring-teal/30">
                <MessageCircleQuestion className="h-7 w-7" strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal-soft">
                  Class discussion · Reflection
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  If insulin resistance can be reversed with lifestyle, why are
                  Type 2 rates still rising worldwide?
                </h3>
                <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-white/70">
                  …and what is one change our school could make to help turn the
                  tide?
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-900 text-teal ring-1 ring-inset ring-white/10">
              <Droplet className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <div className="leading-none">
              <p className="font-display text-[15px] font-semibold">
                Diabetes Awareness Project
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                Type 1 &amp; Type 2 Decoded · World Diabetes Day
              </p>
            </div>
          </div>

          <p className="flex items-center gap-2 text-center text-[12.5px] text-white/40 sm:text-right">
            Educational resource · Built for World Diabetes Day, November 14
            <ExternalLink className="hidden h-3.5 w-3.5 sm:block" />
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="border-t border-white/5 py-6 text-center text-[11.5px] leading-relaxed text-white/30">
          This website is an educational project and is not medical advice. Always
          consult a qualified healthcare professional for diagnosis and treatment.
        </p>
      </div>
    </footer>
  )
}
