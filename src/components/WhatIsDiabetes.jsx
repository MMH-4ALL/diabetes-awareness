import { useState } from 'react'
import {
  UtensilsCrossed,
  Droplet,
  KeyRound,
  Zap,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const steps = [
  {
    icon: UtensilsCrossed,
    label: 'Food',
    title: 'You eat',
    body: 'Carbohydrates break down into glucose — the body’s main fuel.',
    color: 'teal',
  },
  {
    icon: Droplet,
    label: 'Glucose',
    title: 'Blood sugar rises',
    body: 'Glucose enters the bloodstream, ready to power your cells.',
    color: 'cyan',
  },
  {
    icon: KeyRound,
    label: 'Insulin — the key',
    title: 'Pancreas responds',
    body: 'Beta cells release insulin, the hormone that unlocks cells.',
    color: 'coral',
  },
  {
    icon: Zap,
    label: 'Cells → energy',
    title: 'Glucose enters cells',
    body: 'Insulin opens the door so glucose fuels muscle, brain & organs.',
    color: 'teal',
  },
]

export default function WhatIsDiabetes() {
  const [active, setActive] = useState(0)

  return (
    <section id="problem" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-teal">Section 01 · The Core Problem</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            What is diabetes? A broken{' '}
            <span className="text-gradient-teal">feedback loop.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateblue/80">
            Your body runs a constant balancing act: eat, release insulin, absorb
            glucose, return to normal. Diabetes happens when that loop fails —
            and sugar stays trapped in your blood instead of powering your cells.
          </p>
        </Reveal>

        {/* Interactive flow diagram */}
        <Reveal className="mt-14" delay={100}>
          <div className="rounded-3xl border border-mist bg-mist/50 p-5 sm:p-8">
            <div className="grid gap-3 lg:grid-cols-4">
              {steps.map((s, i) => {
                const Icon = s.icon
                const isActive = active === i
                return (
                  <div key={s.label} className="relative flex lg:flex-col lg:items-center">
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className={`card-hover group flex w-full flex-1 flex-col gap-3 rounded-2xl border-2 bg-white p-5 text-left transition-all ${
                        isActive
                          ? 'border-teal shadow-glow-teal'
                          : 'border-transparent hover:border-teal/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                            isActive
                              ? 'bg-teal text-navy-950'
                              : 'bg-navy-900 text-teal'
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slateblue/50">
                            Step {i + 1}
                          </p>
                          <p className="font-display text-lg font-semibold text-navy-900">
                            {s.label}
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px] leading-relaxed text-slateblue/75">
                        <span className="font-semibold text-navy-800">{s.title}.</span>{' '}
                        {s.body}
                      </p>
                    </button>

                    {/* Connector arrow (desktop) */}
                    {i < steps.length - 1 && (
                      <div className="hidden items-center px-1.5 lg:flex lg:self-center">
                        <ArrowRight
                          className={`h-5 w-5 shrink-0 transition-colors ${
                            active >= i ? 'text-teal' : 'text-slateblue/25'
                          }`}
                          strokeWidth={2.5}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* What goes wrong */}
        <Reveal className="mt-12" delay={150}>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_20%,rgba(255,92,77,0.25),transparent_60%)]" />
              <div className="relative">
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-coral/15 text-coral-soft ring-1 ring-inset ring-coral/30">
                  <AlertTriangle className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  When glucose builds up instead of powering cells
                </h3>
                <p className="mt-3 leading-relaxed text-white/70">
                  In diabetes, the “key” (insulin) is missing or the “lock”
                  (cells) won’t open. Glucose piles up in the bloodstream,
                  driving blood-sugar levels dangerously high.
                </p>
                <ul className="mt-5 space-y-2.5 text-[15px] text-white/75">
                  {[
                    'Cells starve for energy while blood sugar climbs',
                    'The body tries to flush excess sugar through urine',
                    'Chronic high glucose silently damages vessels & nerves',
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-soft" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* High glucose gauge */}
            <div className="rounded-3xl border border-mist bg-white p-8 shadow-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slateblue/50">
                Why “high blood sugar” is the problem
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { level: 'Normal', range: '70–140 mg/dL', pct: 34, color: 'bg-teal', note: 'Loop working: glucose absorbed into cells.' },
                  { level: 'Prediabetes', range: '140–199 mg/dL', pct: 60, color: 'bg-orangeglow', note: 'Cells starting to resist the key.' },
                  { level: 'Diabetes', range: '≥ 200 mg/dL', pct: 88, color: 'bg-coral', note: 'Glucose stuck in the blood, cells starved.' },
                ].map((row) => (
                  <div key={row.level}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="text-[15px] font-semibold text-navy-900">
                        {row.level}
                      </span>
                      <span className="font-mono text-[12px] text-slateblue/60">
                        {row.range}
                      </span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-mist">
                      <div
                        className={`h-full rounded-full ${row.color} transition-all duration-700`}
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-[13px] text-slateblue/60">{row.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-xl bg-mist/70 p-4 text-[13px] leading-relaxed text-slateblue/70">
                <span className="font-semibold text-navy-800">The takeaway:</span>{' '}
                diabetes is a feedback-loop failure — the fuel is present, but it
                can’t get into the cells where it belongs.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
