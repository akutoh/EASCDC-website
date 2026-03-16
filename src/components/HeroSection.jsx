import { Link } from 'react-router-dom'

/**
 * HeroSection — full-viewport landing section with animated entrance
 * Background: Unsplash luxury home image with layered overlays
 */
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      aria-label="Hero"
    >
      {/* ── Background image ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-scale-in animate-start-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
        }}
        role="img"
        aria-label="Modern residential house exterior"
      />

      {/* ── Gradient overlays (depth layering per brand guidelines) ───── */}
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/55 to-brand-black/80" />
      {/* Red color-treatment layer (brand personality) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 via-transparent to-transparent mix-blend-multiply" />
      {/* Bottom fade to ensure text legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black/60 to-transparent" />

      {/* ── Red accent bar — top left ─────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red opacity-80" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full
                      pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">

          {/* Eyebrow label */}
          <p
            className="
              inline-flex items-center gap-2
              font-title text-xs font-bold tracking-wide-label uppercase
              text-brand-red mb-6
              animate-start-hidden animate-fade-slide-up
            "
          >
            <span className="w-6 h-px bg-brand-red" />
            Planning · Design · Build
          </p>

          {/* Main headline */}
          <h1
            className="
              font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              text-brand-white leading-none tracking-tight-display
              animate-start-hidden animate-fade-slide-up-d1
            "
          >
            Building Homes.<br />
            <span className="text-brand-red">Crafting</span> Legacies.
          </h1>

          {/* Subheadline */}
          <p
            className="
              mt-6 font-body text-base sm:text-lg text-brand-gray/90
              max-w-xl leading-relaxed
              animate-start-hidden animate-fade-slide-up-d2
            "
          >
            E.A. Sitchon Construction brings over a decade of expertise in
            residential and commercial construction — delivering quality structures
            on time, on budget, and built to last.
          </p>

          {/* CTAs */}
          <div
            className="
              mt-10 flex flex-wrap gap-4
              animate-start-hidden animate-fade-slide-up-d3
            "
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="
                px-7 py-3.5 bg-brand-red text-white
                font-title text-sm font-bold tracking-wide-label uppercase rounded
                shadow-btn
                transition-[box-shadow,background-color,transform] duration-200
                hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-0.5
                active:translate-y-0 active:shadow-btn
                focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
              "
            >
              Get a Free Quote
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/projects"
              className="
                px-7 py-3.5
                border-2 border-brand-white/60 text-brand-white
                font-title text-sm font-bold tracking-wide-label uppercase rounded
                transition-[border-color,background-color,transform] duration-200
                hover:border-brand-white hover:bg-white/10 hover:-translate-y-0.5
                active:translate-y-0
                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
              "
            >
              View Our Projects
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="
              mt-14 pt-8 border-t border-white/15
              flex flex-wrap gap-x-10 gap-y-6
              animate-start-hidden animate-fade-slide-up-d3
            "
          >
            {[
              { value: '10+',  label: 'Years in Business'  },
              { value: '80+',  label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl text-brand-red leading-none">{value}</p>
                <p className="font-body text-xs text-brand-gray/70 mt-1 tracking-wide-label uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                      flex flex-col items-center gap-2 text-brand-gray/40">
        <span className="font-body text-[10px] tracking-wide-label uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-gray/40 to-transparent" />
      </div>
    </section>
  )
}
