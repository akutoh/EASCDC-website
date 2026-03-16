/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Tier badge classes — must be safelisted since they're built dynamically
    'bg-slate-500', 'bg-amber-600', 'bg-brand-red',
    'border-slate-500', 'border-amber-600', 'border-brand-red',
    'text-slate-500', 'text-amber-600',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red':   '#E21B1B',
        'brand-black': '#000000',
        'brand-gray':  '#C1CCCF',
        'brand-white': '#FFFFFF',
        'brand-dark':  '#111111',
        'brand-surface': '#1a1a1a',
      },
      fontFamily: {
        // Bebas Neue — display/headline
        'display': ['"Bebas Neue"', 'sans-serif'],
        // Montserrat — section titles, UI labels
        'title': ['Montserrat', 'sans-serif'],
        // Oswald — body text, supporting copy
        'body': ['Oswald', 'sans-serif'],
      },
      letterSpacing: {
        'tight-display': '-0.02em',
        'wide-label':    '0.12em',
      },
      keyframes: {
        fadeSlideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)'    },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        cardEntrance: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      animation: {
        // Hero text — staggered entrance
        'fade-slide-up':     'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-slide-up-d1':  'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s forwards',
        'fade-slide-up-d2':  'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.30s forwards',
        'fade-slide-up-d3':  'fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s forwards',
        // Hero image
        'scale-in':          'scaleIn 1s cubic-bezier(0.16,1,0.3,1) 0.1s forwards',
        // General
        'fade-in':           'fadeIn 0.5s ease forwards',
        // Project cards on filter change
        'card-entrance':     'cardEntrance 0.45s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      boxShadow: {
        // Color-tinted layered shadows (per brand guidelines)
        'card':    '0 2px 8px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 4px 16px rgba(226,27,27,0.15), 0 12px 36px rgba(0,0,0,0.20)',
        'btn':     '0 2px 8px rgba(226,27,27,0.35)',
        'btn-hover': '0 4px 18px rgba(226,27,27,0.55)',
        'nav':     '0 2px 16px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
}
