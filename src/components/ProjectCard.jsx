import { tierMeta } from '../data/projects'

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
  </svg>
)

/**
 * ProjectCard — used in both the Home featured section and the Projects page
 * Props:
 *   project     — project object from projects.js
 *   onViewDetails — (project) => void  — opens the details modal
 *   animDelay   — optional animation delay in ms (for staggering)
 */
export default function ProjectCard({ project, onViewDetails, animDelay = 0 }) {
  const tier = tierMeta[project.finishType]

  return (
    <article
      style={{ animationDelay: `${animDelay}ms` }}
      className="
        group flex flex-col rounded-lg overflow-hidden
        bg-white border border-brand-gray/25
        shadow-card
        transition-[box-shadow,transform] duration-300
        hover:-translate-y-1.5 hover:shadow-card-hover
        animate-card-entrance animate-start-hidden
      "
    >
      {/* ── Image ──────────────────────────────────────────────────── */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={`${project.name} — ${tier.label}`}
          loading="lazy"
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Color-treatment layer on hover */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-brand-red/10 mix-blend-multiply
        " />

        {/* Tier badge */}
        <span className={`
          absolute top-3 left-3
          px-2.5 py-1 text-[10px] font-title font-bold tracking-wide-label uppercase rounded
          ${tier.badgeClass}
        `}>
          {tier.label}
        </span>
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name */}
        <h3 className="font-display text-xl text-brand-black mb-2 leading-tight">
          {project.name}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
          <span className="flex items-center gap-1 font-body text-xs text-brand-black/50">
            <LocationIcon />
            {project.location}
          </span>
          <span className="flex items-center gap-1 font-body text-xs text-brand-black/50">
            <CalendarIcon />
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-brand-black/60 leading-relaxed line-clamp-2 flex-1 mb-5">
          {project.description}
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="
            self-start px-5 py-2.5
            bg-brand-red text-white
            font-title text-xs font-bold tracking-wide-label uppercase rounded
            shadow-btn
            transition-[box-shadow,background-color,transform] duration-200
            hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-px
            active:translate-y-0
            focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2
          "
        >
          View Details
        </button>
      </div>
    </article>
  )
}
