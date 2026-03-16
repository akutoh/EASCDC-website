import { Link } from 'react-router-dom'
import { featuredProjects, tierMeta } from '../data/projects'

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
  </svg>
)

/**
 * FeaturedProjects — 3-card preview on the Home page (one per finish tier)
 */
export default function FeaturedProjects() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28 grain-overlay" aria-label="Featured Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                          tracking-wide-label uppercase text-brand-red mb-3">
              <span className="w-5 h-px bg-brand-red" />
              Our Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-white">
              Featured Projects
            </h2>
            <p className="mt-3 font-body text-sm text-brand-gray/70 max-w-sm leading-relaxed">
              A sample across our three finish tiers — from functional to extraordinary.
            </p>
          </div>
          <Link
            to="/projects"
            className="
              self-start sm:self-end
              flex items-center gap-2
              font-title text-xs font-bold tracking-wide-label uppercase
              text-brand-red
              transition-[gap] duration-200
              hover:gap-3
              focus-visible:underline
              group
            "
          >
            See All Projects
            <ArrowRightIcon />
          </Link>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => {
            const tier = tierMeta[project.finishType]
            return (
              <article
                key={project.id}
                style={{ animationDelay: `${idx * 0.12}s` }}
                className="
                  group relative rounded-lg overflow-hidden
                  bg-brand-surface
                  border border-white/8
                  shadow-card
                  transition-[box-shadow,transform] duration-300
                  hover:-translate-y-1.5 hover:shadow-card-hover
                "
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                  {/* Image gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Red color-treatment layer */}
                  <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 mix-blend-multiply" />

                  {/* Tier badge — floated on image */}
                  <span className={`
                    absolute top-3 left-3 px-2.5 py-1
                    text-[10px] font-title font-bold tracking-wide-label uppercase rounded
                    ${tier.badgeClass}
                  `}>
                    {tier.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-brand-white mb-1">
                    {project.name}
                  </h3>
                  <p className="font-body text-xs text-brand-gray/60 mb-3 tracking-wide-label uppercase">
                    {project.location} · {project.year}
                  </p>
                  <p className="font-body text-sm text-brand-gray/70 leading-relaxed line-clamp-2 mb-5">
                    {project.description}
                  </p>

                  <Link
                    to="/projects"
                    className="
                      inline-flex items-center gap-2
                      font-title text-xs font-bold tracking-wide-label uppercase
                      text-brand-red
                      transition-[gap] duration-200
                      hover:gap-3
                      focus-visible:underline
                      group/link
                    "
                  >
                    View Project <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────── */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="
              inline-block px-8 py-3.5
              border-2 border-brand-red text-brand-red
              font-title text-sm font-bold tracking-wide-label uppercase rounded
              transition-[background-color,color,transform] duration-200
              hover:bg-brand-red hover:text-white hover:-translate-y-0.5
              active:translate-y-0
              focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark
            "
          >
            See All Projects
          </Link>
        </div>

      </div>
    </section>
  )
}
