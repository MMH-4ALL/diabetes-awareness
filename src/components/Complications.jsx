import { HeartPulse, Droplets, Eye, Footprints, ShieldCheck, Timer } from 'lucide-react'
import { Reveal } from '../useReveal.jsx'

const complications = [
  {
    icon: HeartPulse,
    title: 'Heart & Stroke',
    body: 'Chronically high glucose damages blood vessels, sharply raising the risk of heart disease, heart attack, and stroke.',
    stat: '2–4×',
    statLabel: 'higher cardiovascular risk',
    color: 'coral',
  },
  {
    icon: Droplets,
    title: 'Kidneys',
    body: 'Overworked kidney filters can scar and fail — diabetic nephropathy is a leading cause of kidney failure and dialysis.',
    stat: '#1',
    statLabel: 'cause of kidney failure',
    color: 'orangeglow',
  },
  {
    icon: Eye,
    title: 'Eyes',
    body: 'Leaking vessels in the retina cause retinopathy — a leading cause of blindness in working-age adults.',
    stat: 'Leading',
    statLabel: 'cause of adult blindness',
    color: 'teal',
  },
  {
    icon: Footprints,
    title: 'Nerves & Feet',
    body: 'Nerve damage (neuropathy) causes numbness, pain, and slow-healing wounds that can lead to serious infection.',
    stat: 'Slow',
    statLabel: 'healing wounds & ulcers',
    color: 'cyanaccent',
  },
]

const colorMap = {
  coral: { bg: 'bg-coral/10', text: 'text-coral', ring: 'ring-coral/20', bar: 'bg-coral' },
  orangeglow: { bg: 'bg-orangeglow/10', text: 'text-orangeglow', ring: 'ring-orangeglow/20', bar: 'bg-orangeglow' },
  teal: { bg: 'bg-teal/10', text: 'text-teal', ring: 'ring-teal/20', bar: 'bg-teal' },
  cyanaccent: { bg: 'bg-cyanaccent/10', text: 'text-cyanaccent', ring: 'ring-cyanaccent/20', bar: 'bg-cyanaccent' },
}

export default function Complications() {
  return (
    <section id="complications" className="relative bg-mist/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-coral">Section 04 · Why It Matters</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Chronic high glucose{' '}
            <span className="text-gradient-coral">touches every system.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slateblue/80">
            Left unmanaged, elevated blood sugar silently damages blood vessels
            and nerves across the body. But here’s the crucial part — most of
            these complications are preventable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {complications.map((c, i) => {
            const Icon = c.icon
            const cm = colorMap[c.color]
            return (
              <Reveal key={c.title} delay={i * 90}>
                <div className="card-hover group h-full rounded-3xl border border-mist bg-white p-7 shadow-card">
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ring-1 ring-inset ${cm.bg} ${cm.text} ${cm.ring}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                    <div className="text-right">
                      <p className={`font-display text-3xl font-semibold ${cm.text}`}>
                        {c.stat}
                      </p>
                      <p className="text-[11.5px] leading-tight text-slateblue/50">
                        {c.statLabel}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-navy-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slateblue/75">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Prevention emphasis banner */}
        <Reveal className="mt-10" delay={120}>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_20%,rgba(18,179,165,0.3),transparent_60%)]" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-teal/15 text-teal-soft ring-1 ring-inset ring-teal/30">
                  <ShieldCheck className="h-7 w-7" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    Early diagnosis &amp; good management prevent most of this.
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/65">
                    Studies show that keeping glucose, blood pressure, and
                    cholesterol in range dramatically lowers the risk of every
                    complication above. Detection is the first line of defense.
                  </p>
                </div>
              </div>
              <a
                href="#action"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-navy-950 transition-all hover:bg-teal-soft hover:shadow-glow-teal"
              >
                <Timer className="h-4 w-4" />
                What to do now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
