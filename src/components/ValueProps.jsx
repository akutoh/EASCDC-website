/**
 * ValueProps — "Why Choose Us" section with 4 icon-based feature cards
 */

/* ── SVG icons (Heroicons v1 outline paths) ──────────────────────────────── */
const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
  </svg>
)

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
)

const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
  </svg>
)

const VALUE_PROPS = [
  {
    icon: <AwardIcon />,
    title: 'Quality Craftsmanship',
    description:
      'Every joint, every finish, every detail — built to the highest standard. We use only grade-A materials and seasoned tradespeople.',
  },
  {
    icon: <ClockIcon />,
    title: 'On-Time Delivery',
    description:
      'We respect your timeline. Strict project scheduling and transparent progress updates keep every build on track.',
  },
  {
    icon: <TagIcon />,
    title: 'Transparent Pricing',
    description:
      'No hidden costs, no surprises. Detailed cost breakdowns before we break ground — so you always know where your money goes.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Trusted by Families',
    description:
      'Hundreds of Filipino families have trusted us with their most important investment. Our reputation is built on referrals.',
  },
]

export default function ValueProps() {
  return (
    <section className="bg-brand-white py-20 lg:py-28" aria-label="Why Choose Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="text-center mb-14 lg:mb-16">
          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-3">
            <span className="w-5 h-px bg-brand-red" />
            Why Choose Us
            <span className="w-5 h-px bg-brand-red" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-black">
            Built on Principles
          </h2>
          <p className="mt-4 font-body text-base text-brand-black/60 max-w-xl mx-auto leading-relaxed">
            We don't just build structures — we build confidence. Here's what sets us apart.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map(({ icon, title, description }, idx) => (
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
              <div className="
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
    </section>
  )
}
