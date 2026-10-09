import { useState } from 'react'
import { useQuoteModal } from '../context/QuoteModalContext'

const VIDEO_ID = 'FQCDiCXfY60'

/* ── Play button overlay ─────────────────────────────────────────────────── */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-8 h-8 ml-1 text-white">
    <path d="M8 5.14v13.72c0 .9.98 1.45 1.74.98l10.47-6.86a1.15 1.15 0 000-1.96L9.74 4.16A1.15 1.15 0 008 5.14z" />
  </svg>
)

/**
 * Click-to-play YouTube facade — shows the video thumbnail until clicked,
 * then swaps in the real iframe (autoplaying). Keeps page load fast.
 */
function VideoPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-brand-black shadow-card">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="Construct Now, Pay Later — EAS Itchon Construction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video: Construct Now, Pay Later"
          className="
            group absolute inset-0 w-full h-full
            focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2
          "
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Readability + brand treatment over the thumbnail */}
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
          {/* Play button */}
          <span
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              grid place-items-center w-20 h-20 rounded-full
              bg-brand-red shadow-btn
              transition-[transform,box-shadow] duration-200
              group-hover:scale-110 group-hover:shadow-btn-hover
              group-active:scale-100
            "
          >
            <PlayIcon />
          </span>
          {/* Caption strip */}
          <span className="absolute bottom-4 left-4 right-4 text-left">
            <span className="font-title text-xs font-bold tracking-wide-label uppercase text-white/90">
              ▶ Watch — 1 min
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

/**
 * VideoPromo — "Construct Now, Pay Later" promotional section.
 * Sits between FeaturedProjects and Testimonials on the Home page.
 */
export default function VideoPromo() {
  const { openModal } = useQuoteModal()

  return (
    <section className="bg-brand-white py-20 lg:py-28 overflow-hidden" aria-label="Construct Now, Pay Later program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Copy — left (5 cols) ─────────────────────────────────── */}
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                          tracking-wide-label uppercase text-brand-red mb-4">
              <span className="w-5 h-px bg-brand-red" />
              Flexible Payment Program
            </p>

            <h2 className="font-display text-4xl sm:text-5xl text-brand-black
                           leading-none tracking-tight-display mb-5">
              Construct Now,<br />
              <span className="text-brand-red">Pay Later</span>
            </h2>

            <p className="font-body text-base text-brand-black/70 leading-relaxed mb-4">
              May sariling lupa ka na, pero kulang pa ang pang-pagawa ng bahay?
              Hindi mo na kailangang maghintay pa ng matagal.
            </p>
            <p className="font-body text-base text-brand-black/70 leading-relaxed mb-8">
              With our <strong className="text-brand-black font-semibold">Construct Now, Pay Later</strong> program,
              we understand your situation, find a way, and help make your dream home
              possible — abot-kamay mo na.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openModal}
                className="
                  px-8 py-4 bg-brand-red text-white
                  font-title text-sm font-bold tracking-wide-label uppercase rounded
                  shadow-btn
                  transition-[box-shadow,background-color,transform] duration-200
                  hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-0.5
                  active:translate-y-0
                  focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2
                "
              >
                Get A Quote
              </button>
              <p className="font-body text-xs text-brand-black/50 tracking-wide-label uppercase">
                Baka ikaw na ang susunod naming matulungan
              </p>
            </div>
          </div>

          {/* ── Video — right (7 cols) ───────────────────────────────── */}
          <div className="lg:col-span-7 relative">
            {/* Offset red frame accent behind the player */}
            <div className="absolute -top-3 -right-3 bottom-3 left-3 rounded-xl
                            border-2 border-brand-red/25 pointer-events-none"
              aria-hidden="true" />
            <VideoPlayer />
          </div>

        </div>
      </div>
    </section>
  )
}
