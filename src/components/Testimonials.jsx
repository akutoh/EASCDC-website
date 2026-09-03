import { testimonials } from '../data/testimonials'

/* ── Star icon (filled / empty) ──────────────────────────────────────────── */
function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`w-4 h-4 ${filled ? 'text-amber-400' : 'text-brand-black/15'}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.27 5.82.846-4.21 4.104.994 5.796L10 14.85l-5.204 2.736.994-5.796L1.58 7.616l5.82-.846L10 1.5z" />
    </svg>
  )
}

/* ── 5-star rating row ───────────────────────────────────────────────────── */
function Rating({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  )
}

/* ── Circular avatar — real photo, or brand-colored initials fallback ──────── */
const AVATAR_TINTS = [
  'bg-brand-red/90 text-white',
  'bg-brand-black text-white',
  'bg-amber-600 text-white',
]

function Avatar({ name, image, index }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="relative shrink-0">
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-14 h-14 rounded-full object-cover img-enhance ring-2 ring-brand-red/20"
        />
      ) : (
        <div
          className={`
            w-14 h-14 rounded-full grid place-items-center
            font-title text-lg font-bold tracking-wide-label
            ring-2 ring-brand-red/20
            ${AVATAR_TINTS[index % AVATAR_TINTS.length]}
          `}
          aria-hidden="true"
        >
          {initials}
        </div>
      )}
    </div>
  )
}

/* ── Quote mark ──────────────────────────────────────────────────────────── */
const QuoteMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
       className="w-9 h-9 text-brand-red/15">
    <path d="M9.4 5.6C6 7 4 10 4 13.4V18h5.6v-5.6H7.2c0-2 1.2-3.6 3.2-4.4L9.4 5.6zm9 0C15 7 13 10 13 13.4V18h5.6v-5.6h-2.4c0-2 1.2-3.6 3.2-4.4l-1-2.4z" />
  </svg>
)

/**
 * Testimonials — client reviews section for the Home page.
 * Circle avatar + name + 5-star rating + short feedback, at least 3 cards.
 */
export default function Testimonials() {
  return (
    <section className="bg-brand-white py-20 lg:py-28" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-3">
            <span className="w-5 h-px bg-brand-red" />
            Testimonials
            <span className="w-5 h-px bg-brand-red" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-black tracking-tight-display">
            What Our Clients Say
          </h2>
          <p className="mt-3 font-body text-sm text-brand-black/60 leading-relaxed">
            Real feedback from families and businesses who trusted us to build their spaces.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <figure
              key={t.id}
              className="
                group relative flex flex-col
                bg-white rounded-xl p-7
                border border-brand-gray/25
                shadow-card
                transition-[box-shadow,transform] duration-300
                hover:-translate-y-1.5 hover:shadow-card-hover
              "
            >
              {/* Quote mark — top-right accent */}
              <div className="absolute top-5 right-5">
                <QuoteMark />
              </div>

              {/* Rating */}
              <Rating value={t.rating} />

              {/* Feedback */}
              <blockquote className="mt-4 mb-6 font-body text-[15px] text-brand-black/70 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>

              {/* Client */}
              <figcaption className="flex items-center gap-3.5 pt-5 border-t border-brand-gray/20">
                <Avatar name={t.name} image={t.image} index={idx} />
                <div className="min-w-0">
                  <p className="font-display text-lg text-brand-black leading-tight truncate">
                    {t.name}
                  </p>
                  {t.location && (
                    <p className="font-body text-xs text-brand-black/50 tracking-wide-label uppercase truncate">
                      {t.location}
                    </p>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
