import { useRef, useState, useCallback } from 'react'

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
  </svg>
)

/**
 * ImageGallery — horizontal scroll-snap gallery for a project's real photos.
 * Props:
 *   images  — string[] of image URLs (first is shown first)
 *   name    — project name, used for alt text
 *   heightClass — Tailwind height class for the viewport (default aspect-[4/3])
 */
export default function ImageGallery({ images = [], name = '', heightClass = 'aspect-[4/3]' }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  /* Keep the active dot in sync with the scroll position */
  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    setActive(idx)
  }, [])

  const scrollToIndex = useCallback((idx) => {
    const el = trackRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(idx, images.length - 1))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
  }, [images.length])

  if (images.length === 0) return null

  const single = images.length === 1

  return (
    <div className={`group/gallery relative ${heightClass} overflow-hidden bg-brand-dark`}>
      {/* ── Scroll track ─────────────────────────────────────────────── */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="
          flex h-full w-full
          overflow-x-auto snap-x snap-mandatory
          no-scrollbar scroll-smooth
        "
      >
        {images.map((src, i) => (
          <div key={i} className="relative shrink-0 w-full h-full snap-center">
            <img
              src={src}
              alt={`${name} — photo ${i + 1} of ${images.length}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable={false}
              className="w-full h-full object-cover img-enhance select-none"
            />
            {/* Gradient overlay for depth + legibility */}
            <div className="pointer-events-none absolute inset-0
                            bg-gradient-to-t from-black/45 via-transparent to-black/10" />
          </div>
        ))}
      </div>

      {/* ── Arrow controls (hidden when only one image) ──────────────── */}
      {!single && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous photo"
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-10
              flex items-center justify-center w-10 h-10 rounded-full
              bg-black/55 text-white backdrop-blur-sm
              opacity-0 group-hover/gallery:opacity-100 focus-visible:opacity-100
              transition-[opacity,transform,background-color] duration-200
              hover:bg-brand-red hover:scale-110 active:scale-95
              disabled:opacity-0 disabled:pointer-events-none
            "
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === images.length - 1}
            aria-label="Next photo"
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-10
              flex items-center justify-center w-10 h-10 rounded-full
              bg-black/55 text-white backdrop-blur-sm
              opacity-0 group-hover/gallery:opacity-100 focus-visible:opacity-100
              transition-[opacity,transform,background-color] duration-200
              hover:bg-brand-red hover:scale-110 active:scale-95
              disabled:opacity-0 disabled:pointer-events-none
            "
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* ── Counter pill ─────────────────────────────────────────────── */}
      {!single && (
        <span className="
          absolute top-3 right-3 z-10
          px-2.5 py-1 rounded-full
          bg-black/55 text-white backdrop-blur-sm
          font-title text-[11px] font-bold tracking-wide-label tabular-nums
        ">
          {active + 1} / {images.length}
        </span>
      )}

      {/* ── Dot indicators ───────────────────────────────────────────── */}
      {!single && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={active === i}
              className={`
                h-2 rounded-full transition-[width,background-color] duration-300
                ${active === i
                  ? 'w-6 bg-brand-red'
                  : 'w-2 bg-white/60 hover:bg-white'}
              `}
            />
          ))}
        </div>
      )}
    </div>
  )
}
