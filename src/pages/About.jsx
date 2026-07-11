import { Link } from 'react-router-dom'
import { useQuoteModal } from '../context/QuoteModalContext'

/* ── SVG icons (Heroicons v1 outline paths) ──────────────────────────────── */
const IconIntegrity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12.75l1.75 1.75L15 10.5m4.5 1.5c0 5.591-3.824 10.29-9 11.622C5.324 22.29 1.5 17.591 1.5 12c0-.34.013-.678.04-1.012a11.955 11.955 0 018.618-3.04A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.618 3.04c.027.334.04.673.04 1.016z"/>
  </svg>
)

const IconExcellence = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
  </svg>
)

const IconCollaboration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
  </svg>
)

const IconInnovation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
  </svg>
)

const CORE_VALUES = [
  { icon: <IconIntegrity />,     title: 'Integrity',      description: 'Doing what is right and doing what we promise.' },
  { icon: <IconExcellence />,    title: 'Excellence',     description: 'We convey our enthusiasm and passion in our work.' },
  { icon: <IconCollaboration />, title: 'Collaboration',  description: 'Working together in a positive way to achieve quality outcome.' },
  { icon: <IconInnovation />,    title: 'Innovation',     description: 'Promote an innovative culture and attitude.' },
]

const QUICK_NAV = [
  { label: 'History',            href: '#history'            },
  { label: 'Core Values',        href: '#core-values'        },
  { label: 'Mission & Vision',   href: '#mission-vision'     },
  { label: 'Contact & Services', href: '#contact-services'   },
]

export default function About() {
  const { openModal } = useQuoteModal()

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────── */}
      <section className="relative bg-brand-black pt-32 pb-16 overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-3">
            <span className="w-5 h-px bg-brand-red" />
            Who We Are
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-brand-white
                         tracking-tight-display leading-none">
            About Us
          </h1>
          <p className="mt-4 font-body text-base text-brand-gray/70 max-w-xl leading-relaxed">
            Erwin A. Sitchon Construction Development Corporation — building homes,
            businesses, and trust across the Philippines since 2019.
          </p>
        </div>
      </section>

      {/* ── Quick nav ───────────────────────────────────────────────── */}
      <nav
        aria-label="About page sections"
        className="sticky top-16 md:top-20 z-30 bg-brand-white/95 backdrop-blur
                   border-b border-brand-gray/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-1 overflow-x-auto no-scrollbar py-3">
            {QUICK_NAV.map(({ label, href }) => (
              <li key={href} className="shrink-0">
                <a
                  href={href}
                  className="
                    inline-block px-4 py-2 rounded
                    font-title text-xs font-bold tracking-wide-label uppercase
                    text-brand-black/60
                    transition-colors duration-150
                    hover:text-brand-red hover:bg-brand-red/5
                    focus-visible:ring-2 focus-visible:ring-brand-red
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── History ─────────────────────────────────────────────────── */}
      <section id="history" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Text */}
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                            tracking-wide-label uppercase text-brand-red mb-3">
                <span className="w-5 h-px bg-brand-red" />
                Our Story
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-brand-black mb-6">
                History
              </h2>
              <p className="font-body text-base text-brand-black/70 leading-relaxed">
                E.A Sitchon Construction was incorporated in 2019 and started to customize houses.
                At various times we've emphasized the commercial or residential side of our
                business; we believe this diverse experience provides a unique perspective in
                helping our clients achieve their goals. Working with homeowners reminds us that
                each project should be personal and done to a quality that we are all proud of —
                working with businesses, while ensuring that we are continuously conscious of
                project costs, schedule, and safety. We always think about the type of service
                our client needs from their perspective and will always make our client our top
                priority to provide the best, most competitive, timely service. To achieve this
                aim, we will continue endeavoring to establish sound relationships with our
                partners, including our suppliers.
              </p>
            </div>

            {/* Founded stat card */}
            <div className="lg:col-span-5">
              <div className="relative p-10 bg-brand-black rounded-lg shadow-card overflow-hidden grain-overlay">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
                <p className="font-title text-xs font-bold tracking-wide-label uppercase text-brand-red mb-2">
                  Incorporated
                </p>
                <p className="font-display text-7xl sm:text-8xl text-brand-white leading-none mb-4">
                  2019
                </p>
                <p className="font-body text-sm text-brand-gray/70 leading-relaxed">
                  From custom homes to full-scale residential and commercial builds — years of
                  hands-on experience across every phase of construction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────── */}
      <section id="core-values" className="scroll-mt-28 bg-brand-white py-20 lg:py-28 border-t border-brand-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-16">
            <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                          tracking-wide-label uppercase text-brand-red mb-3">
              <span className="w-5 h-px bg-brand-red" />
              What Drives Us
              <span className="w-5 h-px bg-brand-red" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map(({ icon, title, description }, idx) => (
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
                <div className="
                  absolute top-0 left-8 right-8 h-[2px] bg-brand-red rounded-full
                  transition-[left,right] duration-300
                  group-hover:left-4 group-hover:right-4
                " />
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
                <h3 className="font-display text-xl text-brand-black mb-3">
                  {title}
                </h3>
                <p className="font-body text-sm text-brand-black/60 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────────── */}
      <section id="mission-vision" className="scroll-mt-28 relative bg-brand-black py-20 lg:py-28 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-16">
            <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                          tracking-wide-label uppercase text-brand-red mb-3">
              <span className="w-5 h-px bg-brand-red" />
              Where We're Headed
              <span className="w-5 h-px bg-brand-red" />
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-white">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="p-10 bg-white/[0.04] border border-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="font-display text-2xl sm:text-3xl text-brand-red mb-4">
                Mission
              </h3>
              <p className="font-body text-base text-brand-gray/80 leading-relaxed">
                At Erwin A. Sitchon Construction Development Corporation our mission is simple:
                to create high-quality, beautifully crafted homes that stand the test of time.
                We believe that every home should reflect the unique tastes and needs of its
                owners, and we pride ourselves on our ability to deliver personalized solutions
                that exceed expectations. We aim also to contribute to providing sustainable jobs
                to Filipino people.
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 bg-white/[0.04] border border-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="font-display text-2xl sm:text-3xl text-brand-red mb-4">
                Vision
              </h3>
              <p className="font-body text-base text-brand-gray/80 leading-relaxed">
                To be the leading residential construction company known in the Philippines for
                transforming visions into vibrant, sustainable communities. We aim to set new
                standards in the industry by integrating cutting-edge technology, eco-friendly
                practices, and a client-centric approach, all while fostering a culture of
                integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact & Services ──────────────────────────────────────── */}
      <section id="contact-services" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Services */}
            <div className="p-10 bg-brand-white border border-brand-gray/30 rounded-lg shadow-card">
              <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                            tracking-wide-label uppercase text-brand-red mb-3">
                <span className="w-5 h-px bg-brand-red" />
                What We Offer
              </p>
              <h3 className="font-display text-3xl text-brand-black mb-4">
                Services
              </h3>
              <p className="font-body text-sm text-brand-black/60 leading-relaxed mb-6">
                From plan and design — 2D, 3D, walkthroughs, and complete plan sets — to full
                residential, commercial, and industrial construction, we handle every phase of
                your project from concept to completion.
              </p>
              <Link
                to="/services"
                className="
                  inline-flex items-center gap-2 font-title text-sm font-bold
                  tracking-wide-label uppercase text-brand-red
                  transition-colors duration-150 hover:text-red-700
                  group
                "
              >
                View Our Services
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={2} stroke="currentColor" className="w-4 h-4
                     transition-transform duration-200 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </Link>
            </div>

            {/* Contact */}
            <div className="relative p-10 bg-brand-black rounded-lg shadow-card overflow-hidden grain-overlay">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
              <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                            tracking-wide-label uppercase text-brand-red mb-3">
                <span className="w-5 h-px bg-brand-red" />
                Get In Touch
              </p>
              <h3 className="font-display text-3xl text-brand-white mb-4">
                Contact
              </h3>
              <ul className="flex flex-col gap-3 font-body text-sm text-brand-gray/80 mb-7">
                <li>Dao Street, Linga, Pila, Philippines, 4010</li>
                <li>
                  <a href="tel:+639171002610" className="hover:text-brand-red transition-colors duration-150">
                    +63 917 100 2610
                  </a>
                </li>
                <li>
                  <a href="mailto:easconstruction1@gmail.com" className="hover:text-brand-red transition-colors duration-150">
                    easconstruction1@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="
                    px-6 py-3 bg-brand-red text-white
                    font-title text-xs font-bold tracking-wide-label uppercase rounded
                    shadow-btn
                    transition-[box-shadow,background-color,transform] duration-200
                    hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-0.5
                    active:translate-y-0
                    focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
                  "
                >
                  Get a Quote
                </button>
                <Link
                  to="/contact"
                  className="
                    px-6 py-3
                    border-2 border-white/30 text-white
                    font-title text-xs font-bold tracking-wide-label uppercase rounded
                    transition-[border-color,background-color,transform] duration-200
                    hover:border-white hover:bg-white/10 hover:-translate-y-0.5
                    active:translate-y-0
                    focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
                  "
                >
                  Contact Page
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
