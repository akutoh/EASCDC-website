import { Link } from 'react-router-dom'

/**
 * CTABanner — full-width lead generation section before the footer
 */
export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden grain-overlay"
      aria-label="Call to action"
    >
      {/* ── Background: house image + heavy overlay ─────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80')",
        }}
      />
      {/* Dark overlay — makes text readable */}
      <div className="absolute inset-0 bg-brand-black/80" />
      {/* Brand-red gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 via-transparent to-transparent" />
      {/* Left accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">

          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-5">
            <span className="w-5 h-px bg-brand-red" />
            Let's Build Together
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-white
                         leading-none tracking-tight-display mb-5">
            Ready to Build<br />
            <span className="text-brand-red">Your Dream Home?</span>
          </h2>

          <p className="font-body text-base text-brand-gray/80 max-w-lg leading-relaxed mb-10">
            Whether you're planning a modest family home or a luxury estate, our team is ready
            to bring your vision to life — with quality, transparency, and dedication at every step.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="
                px-8 py-4 bg-brand-red text-white
                font-title text-sm font-bold tracking-wide-label uppercase rounded
                shadow-btn
                transition-[box-shadow,background-color,transform] duration-200
                hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-0.5
                active:translate-y-0
                focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
              "
            >
              Contact Us Today
            </Link>
            <Link
              to="/projects"
              className="
                px-8 py-4
                border-2 border-white/50 text-white
                font-title text-sm font-bold tracking-wide-label uppercase rounded
                transition-[border-color,background-color,transform] duration-200
                hover:border-white hover:bg-white/10 hover:-translate-y-0.5
                active:translate-y-0
                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
              "
            >
              View Our Portfolio
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
