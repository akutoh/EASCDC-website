import { useQuoteModal } from '../context/QuoteModalContext'

/* ── SVG icons (Heroicons v1 outline paths) ──────────────────────────────── */
const Icon2D = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16M14 4v16"/>
  </svg>
)

const Icon3D = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25M21 7.5v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
  </svg>
)

const IconWalkthrough = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
)

const IconPlanSet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-1.519-3.019a2.25 2.25 0 10-3.462 0M13.481 14.231L12 17.25m0 0l-1.519-3.019m1.519 3.019V21m-6.75-3h13.5A2.25 2.25 0 0021 15.75V6.108c0-.703-.421-1.339-1.07-1.605l-6.75-2.7a2.25 2.25 0 00-1.06 0l-6.75 2.7A1.734 1.734 0 003.75 6.108v9.642A2.25 2.25 0 006 18z"/>
  </svg>
)

const IconResidential = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
  </svg>
)

const IconCommercial = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
  </svg>
)

const IconIndustrial = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 21h19.5M4.5 3.75h4.5v6.75l3-2.25 3 2.25v-6.75h4.5v17.25h-15V3.75z"/>
  </svg>
)

const PLAN_AND_DESIGN = [
  { icon: <Icon2D />,          title: '2D',                      description: 'Detailed 2D floor plans and technical drawings for accurate space planning.' },
  { icon: <Icon3D />,          title: '3D',                      description: 'Photorealistic 3D renders that bring your future space to life before construction begins.' },
  { icon: <IconWalkthrough />, title: 'Walkthrough',             description: 'Immersive walkthrough visuals so you can experience your design before it’s built.' },
  { icon: <IconPlanSet />,     title: 'Complete Sets of Plan',   description: 'Full architectural and engineering plan sets, ready for permitting and construction.' },
]

const CONSTRUCTION = [
  { icon: <IconResidential />, title: 'Residential', description: 'Homes and residential buildings built to last, from single units to subdivisions.' },
  { icon: <IconCommercial />,  title: 'Commercial',  description: 'Retail, office, and commercial spaces constructed for function and durability.' },
  { icon: <IconIndustrial />,  title: 'Industrial',  description: 'Warehouses, factories, and industrial facilities engineered for heavy-duty use.' },
]

function ServiceGroup({ kicker, title, description, items, columns }) {
  return (
    <div>
      {/* Group header */}
      <div className="mb-10 lg:mb-12">
        <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                      tracking-wide-label uppercase text-brand-red mb-3">
          <span className="w-5 h-px bg-brand-red" />
          {kicker}
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-brand-black">
          {title}
        </h2>
        <p className="mt-4 font-body text-base text-brand-black/60 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Items grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
        {items.map(({ icon, title, description }, idx) => (
          <div
            key={title}
            style={{ animationDelay: `${idx * 0.1}s` }}
            className="
              group relative p-8
              bg-white border border-brand-gray/30 rounded-lg
              shadow-card
              transition-[box-shadow,transform] duration-300
              hover:-translate-y-1.5 hover:shadow-card-hover
              cursor-default
            "
          >
            {/* Red top accent line */}
            <div className="
              absolute top-0 left-8 right-8 h-[2px] bg-brand-red rounded-full
              transition-[left,right] duration-300
              group-hover:left-4 group-hover:right-4
            " />

            {/* Icon */}
            <div
              className="
                inline-flex items-center justify-center w-14 h-14 mb-6 rounded
                bg-brand-red/8 text-brand-red
                transition-[background-color,transform] duration-300
                group-hover:bg-brand-red group-hover:text-white group-hover:scale-110
              "
              style={{ backgroundColor: 'rgba(226,27,27,0.08)' }}
            >
              {icon}
            </div>

            {/* Title */}
            <h3 className="font-display text-xl text-brand-black mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-brand-black/60 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Services page — Plan & Design and Construction service offerings
 */
export default function Services() {
  const { openModal } = useQuoteModal()

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────── */}
      <section className="relative bg-brand-black pt-32 pb-16 overflow-hidden grain-overlay">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-3">
            <span className="w-5 h-px bg-brand-red" />
            What We Offer
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-brand-white
                         tracking-tight-display leading-none">
            Our Services
          </h1>
          <p className="mt-4 font-body text-base text-brand-gray/70 max-w-xl leading-relaxed">
            From the first sketch to the final beam — we plan, design, and build
            spaces engineered for quality and built to last.
          </p>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          <ServiceGroup
            kicker="Step One"
            title="Plan & Design"
            description="We turn your ideas into buildable plans — from flat drawings to fully immersive previews of the finished space."
            items={PLAN_AND_DESIGN}
            columns="lg:grid-cols-4"
          />
          <ServiceGroup
            kicker="Step Two"
            title="Construction"
            description="Once the plan is set, our crews take over — delivering residential, commercial, and industrial builds with the same standard of quality."
            items={CONSTRUCTION}
            columns="lg:grid-cols-3"
          />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grain-overlay bg-brand-black" aria-label="Call to action">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-brand-white leading-none tracking-tight-display mb-5">
            Ready to Start <span className="text-brand-red">Your Project?</span>
          </h2>
          <p className="font-body text-base text-brand-gray/80 max-w-lg mx-auto leading-relaxed mb-10">
            Tell us what you have in mind and we'll help you plan, design, and build it — start to finish.
          </p>
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
              focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
            "
          >
            Get a Quote
          </button>
        </div>
      </section>
    </>
  )
}
