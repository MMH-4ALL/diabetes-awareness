/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1c',
          900: '#0a1a33',
          800: '#0f2547',
          700: '#16335f',
          600: '#1f427a',
          500: '#2a5396'
        },
        slateblue: '#24436f',
        teal: {
          DEFAULT: '#12b3a5',
          soft: '#5eead4'
        },
        cyanaccent: '#22d3ee',
        coral: {
          DEFAULT: '#ff5c4d',
          soft: '#ff8a6b'
        },
        orangeglow: '#f97316',
        mist: '#f4f7fb',
        ink: '#0a1a33'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'grid-lines': 'linear-gradient(to right, rgba(18,179,165,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,179,165,0.08) 1px, transparent 1px)',
        'dot-grid': 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid-sm': '48px 48px'
      },
      boxShadow: {
        'glow-teal': '0 0 60px -12px rgba(18,179,165,0.5)',
        'glow-coral': '0 0 60px -12px rgba(255,92,77,0.45)',
        'card': '0 1px 2px rgba(10,26,51,0.05), 0 12px 40px -18px rgba(10,26,51,0.25)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 3s linear infinite',
        ticker: 'ticker 30s linear infinite'
      }
    },
  },
  plugins: [],
}
