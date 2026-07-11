import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useQuoteModal } from '../context/QuoteModalContext'

/* ── Icons ──────────────────────────────────────────────────────────────── */
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor" className="w-12 h-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
)

/* ── Constants ───────────────────────────────────────────────────────────── */
const INITIAL_FORM = {
  fullName:    '',
  email:       '',
  phone:       '',
  location:    '',
  projectType: '',
  services:    [],
  description: '',
}

const PROJECT_TYPES = ['Residential', 'Commercial', 'Renovation', 'Extension']
const SERVICE_OPTIONS = ['Design', 'Construction', 'Renovation', 'Fit-out']

/* ── Field label component ───────────────────────────────────────────────── */
function Label({ htmlFor, children, required }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-title text-[11px] font-bold tracking-wide-label uppercase text-brand-gray mb-1.5"
    >
      {children}
      {required && <span className="text-brand-red ml-0.5">*</span>}
    </label>
  )
}

/* ── Input class string ──────────────────────────────────────────────────── */
const inputClass = (hasError) => `
  w-full px-3.5 py-2.5
  bg-brand-black/60 border rounded
  font-body text-sm text-brand-white placeholder-brand-gray/40
  transition-[border-color,box-shadow] duration-150
  focus:outline-none focus:border-brand-red
  ${hasError ? 'border-brand-red/70' : 'border-white/10 hover:border-white/25'}
`

/* ── QuoteModal ──────────────────────────────────────────────────────────── */
export default function QuoteModal() {
  const { isOpen, closeModal: ctxClose } = useQuoteModal()
  const panelRef = useRef(null)

  const [form,    setForm]    = useState(INITIAL_FORM)
  const [touched, setTouched] = useState({})
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error

  /* Close + reset status after animation */
  function closeModal() {
    ctxClose()
    setTimeout(() => setStatus('idle'), 300)
  }

  /* Body scroll lock */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Escape key */
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  /* Auto-focus first input on open */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        panelRef.current?.querySelector('input')?.focus()
      }, 50)
    }
  }, [isOpen])

  /* Focus trap */
  function handleKeyDown(e) {
    if (e.key !== 'Tab') return
    const focusable = panelRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusable || focusable.length === 0) return
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  /* Field handlers */
  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleBlur(e) {
    setTouched(t => ({ ...t, [e.target.name]: true }))
  }

  function handleServiceToggle(value) {
    setForm(f => ({
      ...f,
      services: f.services.includes(value)
        ? f.services.filter(s => s !== value)
        : [...f.services, value],
    }))
  }

  /* Required field validation */
  const required = ['fullName', 'email', 'phone', 'location', 'projectType']
  function isValid() {
    return required.every(k => form[k].trim() !== '')
  }

  /* Submit */
  async function handleSubmit(e) {
    e.preventDefault()

    // Touch all required fields to show errors if any are empty
    const newTouched = {}
    required.forEach(k => { newTouched[k] = true })
    setTouched(newTouched)

    if (!isValid()) return

    setStatus('sending')

    const payload = {
      from_name:    form.fullName,
      from_email:   form.email,
      phone:        form.phone,
      location:     form.location,
      project_type: form.projectType,
      services:     form.services.join(', ') || 'None specified',
      description:  form.description || 'None provided',
    }

    // Console log (simulates backend)
    console.log('Quote Request Submitted:', payload)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_FORM)
      setTouched({})
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    /* ── Backdrop ──────────────────────────────────────────────────────── */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="
        fixed inset-0 z-[200]
        flex items-center justify-center
        p-4 sm:p-6
        bg-brand-black/85 backdrop-blur-sm
        animate-fade-in animate-start-hidden
      "
      onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
    >
      {/* ── Panel ─────────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        onKeyDown={handleKeyDown}
        className="
          relative w-full max-w-lg max-h-[92vh] overflow-y-auto
          bg-brand-surface border border-white/10 rounded-xl
          shadow-[0_32px_80px_rgba(0,0,0,0.6)]
          animate-scale-in animate-start-hidden
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="
            absolute top-4 right-4 z-10
            flex items-center justify-center w-9 h-9
            bg-white/10 text-brand-gray rounded-full
            transition-[background-color,color,transform] duration-150
            hover:bg-brand-red hover:text-white hover:scale-110
            active:scale-95
            focus-visible:ring-2 focus-visible:ring-brand-red
          "
        >
          <XIcon />
        </button>

        {/* ── Header ────────────────────────────────────────────────── */}
        <div className="px-6 pt-7 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1 h-8 bg-brand-red rounded-full shrink-0" />
            <h2
              id="quote-modal-title"
              className="font-display text-2xl sm:text-3xl text-brand-white tracking-tight-display"
            >
              Get a Quote
            </h2>
          </div>
          <p className="font-body text-sm text-brand-gray/70 ml-4 pl-0.5">
            Fill in the details below and we'll get back to you shortly.
          </p>
        </div>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <div className="px-6 py-6">

          {/* SUCCESS STATE */}
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <div className="text-brand-red">
                <CheckIcon />
              </div>
              <div>
                <h3 className="font-display text-2xl text-brand-white mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-sm text-brand-gray/80 leading-relaxed">
                  Thank you! We'll contact you soon.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="
                  mt-2 px-7 py-3
                  bg-brand-red text-white
                  font-title text-xs font-bold tracking-wide-label uppercase rounded
                  shadow-btn
                  transition-[box-shadow,background-color,transform] duration-200
                  hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-px
                  active:translate-y-0
                  focus-visible:ring-2 focus-visible:ring-brand-red
                "
              >
                Close
              </button>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} noValidate>

              {/* ── Basic Information ─────────────────────────────── */}
              <p className="font-title text-[10px] font-bold tracking-wide-label uppercase text-brand-red mb-4">
                Basic Information
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" required>Full Name</Label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Juan dela Cruz"
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(touched.fullName && !form.fullName)}
                  />
                  {touched.fullName && !form.fullName && (
                    <p className="mt-1 font-body text-xs text-brand-red">Full name is required.</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" required>Email Address</Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="juan@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(touched.email && !form.email)}
                  />
                  {touched.email && !form.email && (
                    <p className="mt-1 font-body text-xs text-brand-red">Email address is required.</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <Label htmlFor="phone" required>Mobile Number</Label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+63 917 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(touched.phone && !form.phone)}
                  />
                  {touched.phone && !form.phone && (
                    <p className="mt-1 font-body text-xs text-brand-red">Mobile number is required.</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" required>Location</Label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="City, Province"
                    value={form.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass(touched.location && !form.location)}
                  />
                  {touched.location && !form.location && (
                    <p className="mt-1 font-body text-xs text-brand-red">Location is required.</p>
                  )}
                </div>
              </div>

              {/* ── Project Details ───────────────────────────────── */}
              <p className="font-title text-[10px] font-bold tracking-wide-label uppercase text-brand-red mb-4 mt-6">
                Project Details
              </p>

              {/* Type of Project */}
              <div className="mb-4">
                <Label htmlFor="projectType" required>Type of Project</Label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`
                    ${inputClass(touched.projectType && !form.projectType)}
                    appearance-none cursor-pointer
                    bg-brand-black/60
                    [&>option]:bg-brand-dark
                  `}
                >
                  <option value="" disabled>Select project type…</option>
                  {PROJECT_TYPES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {touched.projectType && !form.projectType && (
                  <p className="mt-1 font-body text-xs text-brand-red">Please select a project type.</p>
                )}
              </div>

              {/* Services Needed */}
              <div className="mb-4">
                <Label>Services Needed</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {SERVICE_OPTIONS.map(service => (
                    <label
                      key={service}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={form.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="
                          w-4 h-4 rounded border-white/20
                          accent-brand-red cursor-pointer
                          focus-visible:ring-2 focus-visible:ring-brand-red
                        "
                      />
                      <span className="
                        font-body text-sm text-brand-gray/80
                        transition-colors duration-150
                        group-hover:text-brand-white
                      ">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <Label htmlFor="description">Project Description</Label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="e.g., 2-storey house with 3 bedrooms"
                  value={form.description}
                  onChange={handleChange}
                  className="
                    w-full px-3.5 py-2.5 resize-none
                    bg-brand-black/60 border border-white/10 rounded
                    font-body text-sm text-brand-white placeholder-brand-gray/40
                    transition-[border-color] duration-150
                    focus:outline-none focus:border-brand-red hover:border-white/25
                  "
                />
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div className="mb-4 px-4 py-3 rounded border border-brand-red/40 bg-brand-red/10">
                  <p className="font-body text-xs text-brand-red">
                    Something went wrong. Please try again or call us directly at{' '}
                    <a href="tel:+639171002610" className="underline">+63 917 100 2610</a>.
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="
                    flex-1 min-w-[120px] px-6 py-3
                    bg-brand-red text-white
                    font-title text-xs font-bold tracking-wide-label uppercase rounded
                    shadow-btn
                    transition-[box-shadow,background-color,transform,opacity] duration-200
                    hover:bg-red-700 hover:shadow-btn-hover hover:-translate-y-px
                    active:translate-y-0
                    focus-visible:ring-2 focus-visible:ring-brand-red
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-btn
                  "
                >
                  {status === 'sending' ? 'Sending…' : 'Submit Request'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    px-6 py-3
                    border border-white/20 text-brand-gray rounded
                    font-title text-xs font-bold tracking-wide-label uppercase
                    transition-[border-color,color,background-color] duration-150
                    hover:border-white/50 hover:text-brand-white hover:bg-white/5
                    active:scale-95
                    focus-visible:ring-2 focus-visible:ring-white/30
                  "
                >
                  Cancel
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}
