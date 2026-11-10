import { ArrowDown, ArrowRight, Droplets, Activity, Globe2 } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pt-32 pb-24 text-white sm:pt-40 sm:pb-32"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-grid-lines bg-grid-sm opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(18,179,165,0.28),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_15%_85%,rgba(255,92,77,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/20 blur-[120px]" />

      {/* Floating glucose molecule decoration */}
      <div className="pointer-events-none absolute right-8 top-32 hidden opacity-70 lg:block xl:right-20">
        <GlucoseMolecule />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-teal-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-soft" />
            </span>
            World Diabetes Day · November 14
          </span>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            Type 1 &amp; Type 2 Diabetes:
            <span className="block mt-2 text-gradient-teal">
              Two Breakdowns of One Feedback Loop.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            How science helps us understand, manage, and prevent them — a
            human-centered look at the loop that keeps your body powered.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#problem"
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-[15px] font-semibold text-navy-950 transition-all hover:bg-teal-soft hover:shadow-glow-teal"
            >
              Explore Mechanisms
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#types"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
            >
              Compare Types
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          {/* Stat callout card */}
          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-[auto_1fr]">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 backdrop-blur sm:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-coral/15 text-coral-soft ring-1 ring-inset ring-coral/30">
                  <Globe2 className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    537 Million
                    <span className="ml-2 text-lg font-medium text-white/60">
                      adults worldwide
                    </span>
                  </p>
                  <p className="mt-1.5 text-[15px] text-white/60">
                    ≈ 1 in 10 adults ages 20–79 are living with diabetes
                  </p>
                </div>
              </div>
              <p className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                <Activity className="h-3.5 w-3.5" />
                Source: IDF Diabetes Atlas, 10th edition (2021)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}

function GlucoseMolecule() {
  return (
    <div className="animate-float">
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
        <g stroke="rgba(94,234,212,0.5)" strokeWidth="1.5">
          <line x1="110" y1="20" x2="150" y2="90" />
          <line x1="110" y1="20" x2="70" y2="90" />
          <line x1="150" y1="90" x2="150" y2="170" />
          <line x1="70" y1="90" x2="70" y2="170" />
          <line x1="150" y1="90" x2="70" y2="170" />
          <line x1="70" y1="90" x2="150" y2="170" />
          <line x1="150" y1="170" x2="70" y2="170" />
        </g>
        <g fill="#22d3ee">
          <circle cx="110" cy="20" r="10" fill="#22d3ee" />
          <circle cx="70" cy="90" r="10" fill="#5eead4" />
          <circle cx="150" cy="90" r="10" fill="#5eead4" />
          <circle cx="70" cy="170" r="10" fill="#12b3a5" />
          <circle cx="150" cy="170" r="10" fill="#12b3a5" />
        </g>
        <circle cx="110" cy="20" r="16" stroke="rgba(34,211,238,0.4)" />
        <circle cx="70" cy="90" r="16" stroke="rgba(94,234,212,0.4)" />
        <circle cx="150" cy="90" r="16" stroke="rgba(94,234,212,0.4)" />
      </svg>
    </div>
  )
}
