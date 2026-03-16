import { useEffect } from 'react'
import { tierMeta } from '../data/projects'

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
)

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
  </svg>
)

/**
 * ProjectModal — polished lightbox-style modal for project details
 * Props:
 *   project   — project object or null
 *   onClose   — () => void
 */
export default function ProjectModal({ project, onClose }) {
  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [project])

  /* Close on Escape key */
  useEffect(() => {
    if (!project) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [project, onClose])

  if (!project) return null

  const tier = tierMeta[project.finishType]

  return (
    /* ── Backdrop ──────────────────────────────────────────────────────── */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.name}`}
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        p-4 sm:p-6 lg:p-10
        bg-brand-black/80 backdrop-blur-sm
        animate-fade-in animate-start-hidden
      "
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* ── Modal panel ──────────────────────────────────────────────── */}
      <div
        className="
          relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
          bg-white rounded-xl
          shadow-[0_24px_64px_rgba(0,0,0,0.45)]
          animate-scale-in animate-start-hidden
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="
            absolute top-4 right-4 z-10
            flex items-center justify-center w-9 h-9
            bg-black/60 text-white rounded-full
            transition-[background-color,transform] duration-150
            hover:bg-brand-red hover:scale-110
            active:scale-95
            focus-visible:ring-2 focus-visible:ring-brand-red
          "
        >
          <XIcon />
        </button>

        {/* Image */}
        <div className="relative h-56 sm:h-72 rounded-t-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Tier badge on image */}
          <span className={`
            absolute bottom-4 left-5
            px-3 py-1.5 text-xs font-title font-bold tracking-wide-label uppercase rounded
            ${tier.badgeClass}
          `}>
            {tier.label}
          </span>
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8">
          {/* Name */}
          <h2 className="font-display text-3xl sm:text-4xl text-brand-black mb-3">
            {project.name}
          </h2>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-4 mb-5">
            <span className="flex items-center gap-1.5 font-body text-sm text-brand-black/60">
              <LocationIcon />
              {project.location}
            </span>
            <span className="flex items-center gap-1.5 font-body text-sm text-brand-black/60">
              <CalendarIcon />
              Completed {project.year}
            </span>
          </div>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-brand-red rounded-full mb-5" />

          {/* Description */}
          <p className="font-body text-base text-brand-black/70 leading-relaxed">
            {project.description}
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onClose}
              className="
                px-6 py-3
                bg-brand-red text-white
                font-title text-xs font-bold tracking-wide-label uppercase rounded
                shadow-btn
                transition-[box-shadow,background-color,transform] duration-200
                hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-px
                active:translate-y-0
                focus-visible:ring-2 focus-visible:ring-brand-red
              "
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
