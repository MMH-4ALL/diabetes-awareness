import { useState } from 'react'
import { Plus, Minus, Scale, BadgeCheck } from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const myths = [
  {
    myth: 'Eating too much sugar causes diabetes.',
    fact: 'Sugar does not directly cause Type 1, which is an autoimmune condition. Excess calories and weight gain — not sugar alone — raise the risk of Type 2 diabetes.',
  },
  {
    myth: 'Only people who are overweight get diabetes.',
    fact: 'Type 1 can affect anyone at any weight, often striking children and lean young adults. Type 2 risk involves many factors beyond weight, including genetics and age.',
  },
  {
    myth: 'People with diabetes can’t eat any carbohydrates.',
    fact: 'Carbohydrates can absolutely be part of a healthy plan. The key is portion control, choosing fiber-rich sources, and timing them with medication or activity.',
  },
  {
    myth: 'Insulin cures diabetes.',
    fact: 'Insulin manages diabetes — it replaces the hormone the body is missing — but it does not cure the underlying condition.',
  },
  {
    myth: 'Type 2 diabetes is the “mild” kind.',
    fact: 'There is no mild diabetes. Every form requires careful management, because unmanaged blood sugar can lead to the same serious complications.',
  },
]

export default function MythFact() {
  const [open, setOpen] = useState(0)

  return (
    <section id="myths" className="relative overflow-hidden bg-mist/60 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="eyebrow text-coral">Section 06 · Fact vs Myth</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Sorting fact from{' '}
            <span className="text-gradient-coral">fiction.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slateblue/80">
            Diabetes is surrounded by myths. Tap each one to see what the
            science actually says.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {myths.map((m, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                    isOpen ? 'border-coral/40 shadow-card' : 'border-mist hover:border-navy-900/20'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? 'bg-coral text-white' : 'bg-mist text-navy-900'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4.5 w-4.5" strokeWidth={2.2} />
                      ) : (
                        <Plus className="h-4.5 w-4.5" strokeWidth={2.2} />
                      )}
                    </span>
                    <span
                      className={`flex-1 font-display text-lg font-semibold tracking-tight sm:text-xl ${
                        isOpen ? 'text-coral' : 'text-navy-900'
                      }`}
                    >
                      <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slateblue/40">
                        Myth {i + 1}
                      </span>
                      {m.myth}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-mist px-5 py-5 sm:px-6">
                        <div className="flex gap-3 rounded-xl bg-teal/[0.07] p-4">
                          <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                              The fact
                            </p>
                            <p className="mt-1 text-[15px] leading-relaxed text-navy-900">
                              {m.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10" delay={120}>
          <div className="flex items-center gap-3 rounded-2xl border border-mist bg-white p-5">
            <Scale className="h-5 w-5 shrink-0 text-slateblue/50" />
            <p className="text-[13.5px] leading-relaxed text-slateblue/70">
              All facts checked against the{' '}
              <span className="font-semibold text-navy-800">
                CDC, NIH / NIDDK, American Diabetes Association (ADA), and WHO
              </span>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
