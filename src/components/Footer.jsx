import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

/* ── Icon components ─────────────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 shrink-0 mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
  </svg>
)

/* ── Nav groups ─────────────────────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Home',       to: '/'         },
  { label: 'Projects',   to: '/projects' },
  { label: 'Services',   to: '/services' },
  { label: 'About Us',   to: '/about'    },
  { label: 'Contact Us', to: '/contact'  },
]

const SOCIAL_LINKS = [
  { label: 'Facebook',  icon: <FacebookIcon />,  href: '#' },
  { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
  { label: 'YouTube',   icon: <YoutubeIcon />,   href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-brand-gray">

      {/* ── Main footer grid ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group w-fit">
              <img
                src={logo}
                alt="E.A. Sitchon Construction"
                className="h-12 w-12 object-contain rounded-sm
                           transition-transform duration-300 group-hover:scale-105"
              />
              <div className="leading-tight">
                <span className="block font-display text-brand-white text-xl tracking-tight-display">
                  E.A. SITCHON
                </span>
                <span className="block font-title text-brand-red text-[10px] font-semibold
                                 tracking-wide-label uppercase">
                  Construction
                </span>
              </div>
            </Link>
            <p className="font-body text-sm leading-relaxed text-brand-gray/80 max-w-xs">
              Planning, designing, and building quality homes and structures across the Philippines — with craftsmanship you can trust.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    flex items-center justify-center w-9 h-9 rounded
                    bg-white/5 text-brand-gray
                    border border-white/10
                    transition-[background-color,color,border-color] duration-200
                    hover:bg-brand-red hover:text-white hover:border-brand-red
                    focus-visible:ring-2 focus-visible:ring-brand-red
                    active:scale-95
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-title text-brand-white text-sm font-bold tracking-wide-label uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="
                      font-body text-sm text-brand-gray/80
                      hover:text-brand-red
                      transition-colors duration-150
                      flex items-center gap-2 group
                    "
                  >
                    <span className="
                      block w-3 h-px bg-brand-red
                      transition-[width] duration-200
                      group-hover:w-5
                    " />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-title text-brand-white text-sm font-bold tracking-wide-label uppercase mb-5">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-body text-brand-gray/80">
              <li className="flex items-start gap-2.5">
                <MapPinIcon />
                <span>Metro Manila &amp; Cavite Area, Philippines</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon />
                <a href="tel:+639001234567" className="hover:text-brand-red transition-colors duration-150">
                  +63 900 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon />
                <a href="mailto:info@easitchon.com" className="hover:text-brand-red transition-colors duration-150">
                  info@easitchon.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Tagline / CTA */}
          <div>
            <h4 className="font-title text-brand-white text-sm font-bold tracking-wide-label uppercase mb-5">
              Start Your Build
            </h4>
            <p className="font-body text-sm text-brand-gray/80 leading-relaxed mb-5">
              Ready to turn your vision into reality? Our team is here to help every step of the way.
            </p>
            <Link
              to="/contact"
              className="
                inline-block px-5 py-2.5 bg-brand-red text-white
                font-title text-xs font-bold tracking-wide-label uppercase rounded
                shadow-btn
                transition-[box-shadow,background-color,transform] duration-200
                hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-px
                active:translate-y-0
                focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark
              "
            >
              Get a Free Quote
            </Link>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3
                        text-xs font-body text-brand-gray/50">
          <p>© {year} E.A. Sitchon Construction. All rights reserved.</p>
          <p className="tracking-wide-label uppercase text-[10px]">
            Planning · Design · Build
          </p>
        </div>
      </div>

    </footer>
  )
}
