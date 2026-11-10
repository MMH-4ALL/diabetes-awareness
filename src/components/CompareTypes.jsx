import { useState } from 'react'
import {
  ShieldAlert,
  Lock,
  Syringe,
  Dna,
  Footprints,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const types = {
  t1: {
    id: 't1',
    tabLabel: 'Type 1',
    tabIcon: ShieldAlert,
    title: 'Type 1 Diabetes',
    tag: 'Autoimmune',
    tagColor: 'coral',
    headline: 'The body attacks its own insulin factory.',
    description:
      'An autoimmune condition where the immune system mistakenly destroys the insulin-producing beta cells in the pancreas. The result is an absolute insulin deficiency — the key is simply gone.',
    stats: [
      { value: '5–10%', label: 'of all diabetes cases' },
      { value: 'Lifelong', label: 'insulin therapy required' },
      { value: 'Not', label: 'currently preventable' },
    ],
    mechanismTitle: 'The breakdown, step by step',
    steps: [
      { n: '01', title: 'Genetic trigger', body: 'A person inherits genes that raise susceptibility to an autoimmune response.' },
      { n: '02', title: 'T-cells attack', body: 'The immune system misfires — T-cells target the pancreas as if it were foreign.' },
      { n: '03', title: 'Beta-cells destroyed', body: 'Insulin-producing cells are progressively wiped out, often over months or years.' },
      { n: '04', title: 'No insulin', body: 'With the key gone, glucose cannot enter cells and builds up in the blood.' },
    ],
    accent: 'coral',
    accentSoft: 'coral-soft',
  },
  t2: {
    id: 't2',
    tabLabel: 'Type 2',
    tabIcon: Lock,
    title: 'Type 2 Diabetes',
    tag: 'Insulin Resistance',
    tagColor: 'teal',
    headline: 'The key is there, but the lock won’t turn.',
    description:
      'A progressive condition where cells stop responding to insulin — insulin resistance. The pancreas works overtime to compensate, but eventually tires, leading to a relative insulin deficiency.',
    stats: [
      { value: '90–95%', label: 'of all diabetes cases' },
      { value: 'Age · Genes', label: '· lifestyle linked' },
      { value: 'Preventable', label: '& often manageable' },
    ],
    mechanismTitle: 'The breakdown, step by step',
    steps: [
      { n: '01', title: 'Insulin resistance', body: 'Muscle and liver cells become less responsive to insulin’s “open up” signal.' },
      { n: '02', title: 'Pancreas compensates', body: 'The pancreas pumps out extra insulin to force glucose into resistant cells.' },
      { n: '03', title: 'Beta-cells tire out', body: 'Years of overwork exhaust the beta cells; insulin output falls short.' },
      { n: '04', title: 'High blood glucose', body: 'With too little effective insulin, glucose accumulates in the bloodstream.' },
    ],
    accent: 'teal',
    accentSoft: 'teal-soft',
  },
}

export default function CompareTypes() {
  const [activeTab, setActiveTab] = useState('t1')
  const t = types[activeTab]
  const TabIcon = t.tabIcon

  const isCoral = activeTab === 't1'

  return (
    <section
      id="types"
      className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_10%,rgba(18,179,165,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_90%,rgba(255,92,77,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-teal-soft">Section 02 · The Two Types</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            One disease name. <span className="text-gradient-teal">Two very different stories.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Both types raise blood sugar — but the root cause, onset, and
            treatment are fundamentally different. Toggle between them.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal className="mt-10" delay={80}>
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur">
            {Object.values(types).map((ty) => {
              const Icon = ty.tabIcon
              const isActive = activeTab === ty.id
              return (
                <button
                  key={ty.id}
                  onClick={() => setActiveTab(ty.id)}
                  className={`inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-[15px] font-semibold transition-all sm:px-7 ${
                    isActive
                      ? ty.id === 't1'
                        ? 'bg-coral text-navy-950 shadow-glow-coral'
                        : 'bg-teal text-navy-950 shadow-glow-teal'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                  {ty.tabLabel}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Active type panel */}
        <div key={activeTab} className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Overview card */}
          <div
            className={`relative overflow-hidden rounded-3xl border p-8 transition-colors ${
              isCoral
                ? 'border-coral/25 bg-gradient-to-br from-coral/10 to-white/[0.02]'
                : 'border-teal/25 bg-gradient-to-br from-teal/10 to-white/[0.02]'
            }`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  isCoral ? 'bg-coral/15 text-coral-soft ring-coral/30' : 'bg-teal/15 text-teal-soft ring-teal/30'
                } ring-1 ring-inset`}
              >
                <TabIcon className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <div>
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                    isCoral ? 'text-coral-soft' : 'text-teal-soft'
                  }`}
                >
                  {t.tag}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t.title}
                </h3>
              </div>
            </div>

            <p className="mt-5 font-display text-xl font-medium leading-snug text-white/90">
              {t.headline}
            </p>
            <p className="mt-3 leading-relaxed text-white/65">{t.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {t.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p
                    className={`font-display text-2xl font-semibold ${
                      isCoral ? 'text-coral-soft' : 'text-teal-soft'
                    }`}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug text-white/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mechanism deep dive */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              Mechanism deep dive
            </p>
            <h4 className="mt-2 font-display text-xl font-semibold tracking-tight">
              {t.mechanismTitle}
            </h4>

            <div className="mt-6 space-y-0">
              {t.steps.map((s, i) => (
                <div key={s.n} className="relative flex gap-4 pb-6 last:pb-0">
                  {/* connector line */}
                  {i < t.steps.length - 1 && (
                    <span
                      className={`absolute left-[19px] top-12 h-[calc(100%-2.5rem)] w-px ${
                        isCoral ? 'bg-coral/25' : 'bg-teal/25'
                      }`}
                    />
                  )}
                  <span
                    className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border font-mono text-[13px] font-semibold ${
                      isCoral
                        ? 'border-coral/40 bg-coral/10 text-coral-soft'
                        : 'border-teal/40 bg-teal/10 text-teal-soft'
                    }`}
                  >
                    {s.n}
                  </span>
                  <div className="pt-0.5">
                    <p className="font-semibold text-white">{s.title}</p>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-white/55">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick reference strip */}
        <Reveal className="mt-8" delay={120}>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Syringe className="mt-0.5 h-5 w-5 shrink-0 text-coral-soft" />
              <p className="text-[14px] leading-relaxed text-white/70">
                <span className="font-semibold text-white">Type 1</span> always
                requires injected insulin — the body can no longer make any.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
              <HeartPulse className="mt-0.5 h-5 w-5 shrink-0 text-teal-soft" />
              <p className="text-[14px] leading-relaxed text-white/70">
                <span className="font-semibold text-white">Type 2</span> can
                often be prevented or put into remission through lifestyle and
                medication.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
