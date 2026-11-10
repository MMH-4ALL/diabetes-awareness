import {
  Syringe,
  Activity,
  Utensils,
  HeartPulse,
  Droplets,
  Scale,
  Pill,
  Bike,
  Salad,
  ShieldCheck,
  XCircle,
  CheckCircle2,
} from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const t1Items = [
  { icon: Syringe, title: 'Daily insulin therapy', body: 'Injected or pumped insulin replaces what the pancreas no longer makes — it is not optional, it is life-sustaining.' },
  { icon: Activity, title: 'Glucose monitoring', body: 'Continuous glucose monitors (CGMs) and finger-prick checks track levels in real time to guide dosing.' },
  { icon: Utensils, title: 'Carb counting', body: 'Matching insulin doses to carbohydrate intake keeps post-meal glucose steady.' },
  { icon: HeartPulse, title: 'Healthy lifestyle', body: 'Balanced eating and regular activity support overall glucose control and wellbeing.' },
]

const t2Prevention = [
  { icon: Bike, title: '150+ min weekly activity', body: 'Moderate exercise — brisk walking, cycling, swimming — boosts insulin sensitivity.' },
  { icon: Salad, title: 'Fiber-rich, balanced diet', body: 'Vegetables, whole grains, and legumes slow glucose absorption and support weight.' },
  { icon: Scale, title: 'Modest weight loss', body: 'Losing just 5–7% of body weight can significantly lower Type 2 risk.' },
  { icon: Pill, title: 'Medication (e.g. metformin)', body: 'When lifestyle isn’t enough, metformin helps the body use insulin more effectively.' },
]

const modifiable = [
  'Physical inactivity',
  'Excess body weight',
  'Unhealthy diet',
  'Smoking',
]

const nonModifiable = [
  'Age (risk rises after 45)',
  'Family history & genetics',
  'Ethnic background',
  'History of gestational diabetes',
]

export default function ActionManagement() {
  return (
    <section id="action" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-teal">Section 05 · Action &amp; Management</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            What now? <span className="text-gradient-teal">Manage or prevent.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateblue/80">
            Type 1 and Type 2 demand different strategies — one is managed daily,
            the other can often be prevented entirely.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Type 1 management */}
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-coral/20 bg-gradient-to-b from-coral/[0.04] to-white p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-coral/10 text-coral ring-1 ring-inset ring-coral/20">
                  <Syringe className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coral">
                    Type 1 · Daily management
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
                    Living with Type 1
                  </h3>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {t1Items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-navy-800">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </span>
                      <div>
                        <p className="font-semibold text-navy-900">{item.title}</p>
                        <p className="mt-0.5 text-[14px] leading-relaxed text-slateblue/70">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Type 2 prevention */}
          <Reveal delay={140}>
            <div className="h-full rounded-3xl border border-teal/20 bg-gradient-to-b from-teal/[0.04] to-white p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal ring-1 ring-inset ring-teal/20">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
                    Type 2 · Prevention &amp; management
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
                    Preventing Type 2
                  </h3>
                </div>
              </div>

              {/* Risk factors */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-mist/60 p-4">
                  <p className="flex items-center gap-2 font-semibold text-navy-900">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Modifiable
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[13px] text-slateblue/75">
                    {modifiable.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-mist/60 p-4">
                  <p className="flex items-center gap-2 font-semibold text-navy-900">
                    <XCircle className="h-4 w-4 text-slateblue/50" />
                    Non-modifiable
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[13px] text-slateblue/75">
                    {nonModifiable.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slateblue/40" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action checklist */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {t2Prevention.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl border border-mist bg-white p-4 shadow-sm">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal/10 text-teal">
                        <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                      </span>
                      <p className="mt-2.5 font-semibold leading-tight text-navy-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-slateblue/70">
                        {item.body}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Highlight strip */}
        <Reveal className="mt-10" delay={120}>
          <div className="flex flex-col items-center gap-3 rounded-3xl bg-navy-950 p-8 text-center text-white sm:flex-row sm:text-left">
            <Droplets className="h-8 w-8 shrink-0 text-teal-soft" strokeWidth={1.8} />
            <p className="max-w-4xl text-[16px] leading-relaxed text-white/80">
              <span className="font-semibold text-white">The golden rule:</span>{' '}
              for Type 2, even small, sustained changes — moving more, eating
              smarter, losing a little weight — compound into major protection.
              For Type 1, modern insulin and CGM technology make thriving
              entirely possible.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
