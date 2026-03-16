import { Link } from 'react-router-dom'

/**
 * Placeholder — coming-soon page for Services, About Us, and Contact Us
 * Props:
 *   tab — string — the name of this section (e.g. "Services")
 */
export default function Placeholder({ tab }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center
                        bg-brand-white overflow-hidden grain-overlay pt-20">
      {/* Subtle red radial glow — brand depth */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(226,27,27,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Red accent line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-12 h-px bg-brand-red" />
          <span className="font-title text-xs font-bold tracking-wide-label uppercase text-brand-red">
            Coming Soon
          </span>
          <span className="w-12 h-px bg-brand-red" />
        </div>

        {/* Tab name as headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-brand-black
                       tracking-tight-display leading-none mb-6">
          {tab}
        </h1>

        {/* Message */}
        <p className="font-body text-base sm:text-lg text-brand-black/50 max-w-md mx-auto leading-relaxed mb-10">
          This section is coming soon. Stay tuned — we're working hard to bring you something great.
        </p>

        {/* Back to Home */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2.5
            px-7 py-3.5
            bg-brand-red text-white
            font-title text-sm font-bold tracking-wide-label uppercase rounded
            shadow-btn
            transition-[box-shadow,background-color,transform] duration-200
            hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-0.5
            active:translate-y-0
            focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2
          "
        >
          {/* Arrow left icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  )
}
