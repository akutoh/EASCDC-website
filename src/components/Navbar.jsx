import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const NAV_LINKS = [
  { label: 'Home',       to: '/'         },
  { label: 'Projects',   to: '/projects' },
  { label: 'Services',   to: '/services' },
  { label: 'About Us',   to: '/about'    },
  { label: 'Contact Us', to: '/contact'  },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  /* Detect scroll to add shadow / slight background shift */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on route change */
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-[background-color,box-shadow] duration-300
        ${scrolled
          ? 'bg-brand-black shadow-nav'
          : 'bg-brand-black/95'}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo + Brand name ─────────────────────────────────────── */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="E.A. Sitchon Construction logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-sm
                         transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="block font-display text-brand-white text-xl md:text-2xl tracking-tight-display">
                E.A. SITCHON
              </span>
              <span className="block font-title text-brand-red text-[10px] md:text-xs font-semibold
                               tracking-wide-label uppercase">
                Construction
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `
                    relative px-4 py-2 font-title text-sm font-semibold tracking-wide-label uppercase
                    transition-colors duration-200
                    ${isActive
                      ? 'text-brand-red'
                      : 'text-brand-gray hover:text-brand-white'}
                    group
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {/* Active underline */}
                      <span
                        className={`
                          absolute bottom-0 left-4 right-4 h-[2px] bg-brand-red rounded-full
                          transition-transform duration-200 origin-left
                          ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            {/* CTA button */}
            <li className="ml-4">
              <Link
                to="/contact"
                className="
                  px-5 py-2.5 bg-brand-red text-brand-white font-title text-sm font-bold
                  tracking-wide-label uppercase rounded
                  shadow-btn
                  transition-[box-shadow,background-color,transform] duration-200
                  hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-px
                  active:translate-y-0 active:shadow-btn
                  focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black
                "
              >
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* ── Mobile hamburger ──────────────────────────────────────── */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10
                       text-brand-white focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-brand-red rounded"
          >
            <span className={`block w-6 h-0.5 bg-current rounded transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current rounded transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current rounded transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>

        </div>
      </nav>

      {/* ── Mobile menu panel ─────────────────────────────────────────── */}
      <div
        className={`
          md:hidden bg-brand-black border-t border-white/10
          overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) => `
                  block px-4 py-3 font-title text-sm font-semibold tracking-wide-label uppercase
                  rounded transition-colors duration-150
                  ${isActive
                    ? 'text-brand-red bg-white/5'
                    : 'text-brand-gray hover:text-brand-white hover:bg-white/5'}
                `}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block w-full text-center px-5 py-3 bg-brand-red text-brand-white
                         font-title text-sm font-bold tracking-wide-label uppercase rounded
                         shadow-btn hover:bg-red-700 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
