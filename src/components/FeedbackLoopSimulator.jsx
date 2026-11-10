import { useState } from 'react'
import { Check, KeyRound, Lock, Play, UtensilsCrossed, Droplet, Zap } from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const states = {
  healthy: {
    id: 'healthy',
    label: 'Healthy Loop',
    icon: Check,
    color: 'teal',
    colorHex: '#12b3a5',
    title: 'Homeostasis: the loop closes',
    status: 'Blood glucose returns to normal',
    gauge: 45,
    gaugeLabel: 'Normal',
    loop: [
      { icon: UtensilsCrossed, text: 'You eat — glucose rises', active: true },
      { icon: KeyRound, text: 'Insulin released (the key)', active: true },
      { icon: Zap, text: 'Cells absorb glucose', active: true },
      { icon: Check, text: 'Blood glucose normal', active: true },
    ],
    explain:
      'The thermostat works: eating raises glucose, insulin unlocks cells, glucose is absorbed, and levels fall back to baseline. Every link in the chain is intact.',
  },
  t1: {
    id: 't1',
    label: 'Type 1 — Missing Key',
    icon: KeyRound,
    color: 'coral',
    colorHex: '#ff5c4d',
    title: 'Type 1: the key is missing',
    status: 'Insulin is absent — glucose can’t enter cells',
    gauge: 88,
    gaugeLabel: 'High',
    loop: [
      { icon: UtensilsCrossed, text: 'You eat — glucose rises', active: true },
      { icon: KeyRound, text: 'No insulin produced ✕', active: false },
      { icon: Zap, text: 'Cells can’t absorb glucose', active: false },
      { icon: Droplet, text: 'Glucose stays high', active: false },
    ],
    explain:
      'The pancreas produces little to no insulin, so the “unlock” signal never arrives. Glucose rises after every meal but has no way into the cells — levels stay dangerously high without injected insulin.',
  },
  t2: {
    id: 't2',
    label: 'Type 2 — Stubborn Lock',
    icon: Lock,
    color: 'orangeglow',
    colorHex: '#f97316',
    title: 'Type 2: the lock won’t turn',
    status: 'Cells resist insulin — glucose backs up',
    gauge: 82,
    gaugeLabel: 'High',
    loop: [
      { icon: UtensilsCrossed, text: 'You eat — glucose rises', active: true },
      { icon: KeyRound, text: 'Insulin released (key present)', active: true },
      { icon: Lock, text: 'Cells resist — lock stuck', active: false },
      { icon: Droplet, text: 'Glucose stays high', active: false },
    ],
    explain:
      'Insulin is present, but the cells’ “locks” are jammed — insulin resistance. The pancreas pumps harder for a while, but eventually glucose backs up in the bloodstream.',
  },
}

const loopIcons = { UtensilsCrossed, KeyRound, Zap, Check, Lock, Droplet }

export default function FeedbackLoopSimulator() {
  const [state, setState] = useState('healthy')
  const s = states[state]

  return (
    <section id="simulator" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-teal">Section 03 · Interactive Simulator</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Your body’s glucose{' '}
            <span className="text-gradient-teal">thermostat.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateblue/80">
            A thermostat keeps a room at a set temperature. Your body does the
            same for blood sugar. Flip between states to see exactly where the
            loop breaks.
          </p>
        </Reveal>

        {/* State selector */}
        <Reveal className="mt-10" delay={80}>
          <div className="grid gap-3 sm:grid-cols-3">
            {Object.values(states).map((st) => {
              const Icon = st.icon
              const isActive = state === st.id
              return (
                <button
                  key={st.id}
                  onClick={() => setState(st.id)}
                  className={`card-hover flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all ${
                    isActive
                      ? 'border-navy-900 bg-navy-900 text-white shadow-card'
                      : 'border-mist bg-white text-navy-900 hover:border-navy-900/30'
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                      isActive ? 'bg-white/10 text-white' : 'bg-mist'
                    }`}
                    style={isActive ? { color: st.colorHex } : undefined}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="font-semibold leading-tight">{st.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div key={state} className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          {/* Circular loop diagram */}
          <Reveal delay={100}>
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              {/* ring */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#eef2f8"
                  strokeWidth="1.2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke={s.colorHex}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={`${s.loop.filter((l) => l.active).length * 72} 289`}
                  transform="rotate(-90 50 50)"
                  style={{ transition: 'stroke-dasharray 0.7s cubic-bezier(0.16,1,0.3,1), stroke 0.5s' }}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke={s.colorHex}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="0 289"
                  style={{ transition: 'stroke 0.5s' }}
                />
              </svg>

              {/* animated traveling dot */}
              <div className="absolute inset-0" style={{ animation: 'spin 12s linear infinite' }}>
                <span
                  className="absolute left-1/2 top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full"
                  style={{ backgroundColor: s.colorHex, boxShadow: `0 0 14px ${s.colorHex}` }}
                />
              </div>

              {/* center gauge */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                <span
                  className="font-display text-6xl font-semibold tracking-tight"
                  style={{ color: s.colorHex }}
                >
                  {s.gauge}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slateblue/60">
                  {s.gaugeLabel} · mg/dL
                </span>
                <span className="mt-2 max-w-[180px] text-[12px] leading-snug text-slateblue/60">
                  {s.status}
                </span>
              </div>

              {/* four nodes at compass points */}
              {s.loop.map((n, i) => {
                const Icon = n.icon
                const placements = [
                  { top: '0%', left: '50%' },
                  { top: '50%', left: '100%' },
                  { top: '100%', left: '50%' },
                  { top: '50%', left: '0%' },
                ][i]
                return (
                  <div
                    key={i}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
                    style={{ top: placements.top, left: placements.left }}
                  >
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full border-2 bg-white shadow-sm transition-all ${
                        n.active ? '' : 'opacity-50 grayscale'
                      }`}
                      style={{
                        borderColor: n.active ? s.colorHex : '#d5dde8',
                        color: n.active ? s.colorHex : '#9aa7b8',
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span
                      className={`max-w-[90px] text-center text-[11px] font-medium leading-tight ${
                        n.active ? 'text-navy-800' : 'text-slateblue/40 line-through'
                      }`}
                    >
                      {n.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* Explanation panel */}
          <Reveal delay={160}>
            <div className="rounded-3xl border border-mist bg-mist/50 p-8">
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ backgroundColor: s.colorHex }}
                >
                  <s.icon />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-slateblue/80">
                {s.explain}
              </p>

              <div className="mt-6 space-y-2.5">
                {s.loop.map((n, i) => {
                  const Icon = n.icon
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
                        n.active
                          ? 'border-teal/30 bg-white'
                          : 'border-mist bg-white/40 opacity-60'
                      }`}
                    >
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                          n.active ? 'bg-navy-900 text-white' : 'bg-mist text-slateblue/40'
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span
                        className={`text-[14px] font-medium ${
                          n.active ? 'text-navy-900' : 'text-slateblue/50 line-through'
                        }`}
                      >
                        {n.text}
                      </span>
                      {n.active ? (
                        <Check className="ml-auto h-4 w-4 text-teal" />
                      ) : (
                        <span
                          className="ml-auto h-4 w-4 rounded-full border-2"
                          style={{ borderColor: s.colorHex }}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
