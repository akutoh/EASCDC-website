import { useState, useMemo } from 'react'
import { projects } from '../data/projects'
import FilterBar    from '../components/FilterBar'
import ProjectCard  from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

/**
 * Projects page — filterable grid of all 9 projects with detail modal
 */
export default function Projects() {
  const [activeFilter,   setActiveFilter]   = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  // filterKey forces re-mount of cards on filter change → re-triggers entrance animation
  const [filterKey, setFilterKey] = useState(0)

  /* Compute visible projects based on active filter */
  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.finishType === activeFilter)
  }, [activeFilter])

  const handleFilterChange = (value) => {
    setActiveFilter(value)
    setFilterKey(k => k + 1)   // bump key → re-mount grid → re-run card animations
  }

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────── */}
      <section className="relative bg-brand-black pt-32 pb-16 overflow-hidden grain-overlay">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-3">
            <span className="w-5 h-px bg-brand-red" />
            Portfolio
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-brand-white
                         tracking-tight-display leading-none">
            Our Projects
          </h1>
          <p className="mt-4 font-body text-base text-brand-gray/70 max-w-xl leading-relaxed">
            Explore completed homes and structures across our three finish tiers —
            each one a testament to craftsmanship, trust, and lasting quality.
          </p>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter bar */}
          <div className="mb-10">
            <FilterBar activeFilter={activeFilter} onChange={handleFilterChange} />
          </div>

          {/* Result count */}
          <p className="font-body text-sm text-brand-black/40 mb-6 tracking-wide-label uppercase">
            Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {activeFilter !== 'all' && ` — ${activeFilter.replace('-', ' ')} finish`}
          </p>

          {/* Cards grid */}
          {filtered.length > 0 ? (
            <div
              key={filterKey}   /* re-mounts grid to re-trigger card animations */
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                  animDelay={idx * 60}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-brand-black/40 font-body">
              No projects found for this filter.
            </div>
          )}

        </div>
      </section>

      {/* ── Detail modal ─────────────────────────────────────────────── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
