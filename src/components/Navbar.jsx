import { useEffect, useState } from 'react'
import { Menu, X, Droplet } from 'lucide-react'

const links = [
  { id: 'problem', label: 'The Problem' },
  { id: 'types', label: 'The Two Types' },
  { id: 'simulator', label: 'Simulator' },
  { id: 'complications', label: 'Why It Matters' },
  { id: 'action', label: 'Take Action' },
  { id: 'myths', label: 'Fact vs Myth' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(10,26,51,0.06),0_8px_30px_-16px_rgba(10,26,51,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-navy-900 text-teal shadow-glow-teal">
            <Droplet className="h-4.5 w-4.5" strokeWidth={2.2} />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-navy-900">
              Diabetes Decoded
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.28em] text-slateblue/60">
              World Diabetes Day · Nov 14
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-slateblue transition-colors hover:bg-mist hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#references"
            className="ml-2 rounded-full bg-navy-900 px-4 py-2 text-[13.5px] font-semibold text-white transition-all hover:bg-navy-700 hover:shadow-glow-teal"
          >
            References
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[420px] border-t border-mist' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-[15px] font-medium text-slateblue transition-colors hover:bg-mist hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#references"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-navy-900 px-4 py-3 text-center text-[15px] font-semibold text-white"
          >
            References
          </a>
        </div>
      </div>
    </header>
  )
}
