import { useQuoteModal } from '../context/QuoteModalContext'

/* ── SVG icons ────────────────────────────────────────────────────────────── */
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
       strokeWidth={1.6} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const CONTACTS = [
  {
    icon: <PhoneIcon />,
    title: 'Cell No.',
    value: '0917 100 2610',
    href: 'tel:+639171002610',
  },
  {
    icon: <ChatIcon />,
    title: 'WhatsApp / Viber',
    value: '0977 685 1328',
    href: 'tel:+639776851328',
  },
  {
    icon: <MailIcon />,
    title: 'Email',
    value: 'easconstruction1@gmail.com',
    href: 'mailto:easconstruction1@gmail.com',
  },
  {
    icon: <MapPinIcon />,
    title: 'Address',
    value: 'Dao Street, Linga, Pila, Philippines, 4010',
    href: null,
  },
]

export default function Contact() {
  const { openModal } = useQuoteModal()

  return (
    <>
      {/* ── Page hero ───────────────────────────────────────────────── */}
      <section className="relative bg-brand-black pt-32 pb-16 overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red opacity-80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                        tracking-wide-label uppercase text-brand-red mb-3">
            <span className="w-5 h-px bg-brand-red" />
            Get In Touch
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-brand-white
                         tracking-tight-display leading-none">
            Contact Us
          </h1>
          <p className="mt-4 font-body text-base text-brand-gray/70 max-w-xl leading-relaxed">
            Have a project in mind? Reach out and let's talk about how we can bring it to life.
          </p>
        </div>
      </section>

      {/* ── Contacts ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14 lg:mb-16">
            <p className="inline-flex items-center gap-2 font-title text-xs font-bold
                          tracking-wide-label uppercase text-brand-red mb-3">
              <span className="w-5 h-px bg-brand-red" />
              Contacts
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-black">
              Reach Us Directly
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
            {CONTACTS.map(({ icon, title, value, href }) => {
              const content = (
                <>
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
                  <h3 className="font-display text-xl text-brand-black mb-2">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-brand-black/60 leading-relaxed break-words">
                    {value}
                  </p>
                </>
              )

              const cardClass = `
                group relative p-8
                bg-white border border-brand-gray/30 rounded-lg
                shadow-card
                transition-[box-shadow,transform] duration-300
                hover:-translate-y-1.5 hover:shadow-card-hover
              `

              return href ? (
                <a key={title} href={href} className={`${cardClass} cursor-pointer block`}>
                  <div className="
                    absolute top-0 left-8 right-8 h-[2px] bg-brand-red rounded-full
                    transition-[left,right] duration-300
                    group-hover:left-4 group-hover:right-4
                  " />
                  {content}
                </a>
              ) : (
                <div key={title} className={`${cardClass} cursor-default`}>
                  <div className="
                    absolute top-0 left-8 right-8 h-[2px] bg-brand-red rounded-full
                    transition-[left,right] duration-300
                    group-hover:left-4 group-hover:right-4
                  " />
                  {content}
                </div>
              )
            })}
          </div>

          {/* ── CTA strip ─────────────────────────────────────────────── */}
          <div className="relative p-10 sm:p-14 bg-brand-black rounded-lg shadow-card overflow-hidden grain-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-brand-white leading-none tracking-tight-display mb-3">
                  Ready to Start <span className="text-brand-red">Your Project?</span>
                </h2>
                <p className="font-body text-sm text-brand-gray/80 max-w-md leading-relaxed">
                  Tell us about your build and we'll get back to you with a free, no-obligation quote.
                </p>
              </div>
              <button
                type="button"
                onClick={openModal}
                className="
                  shrink-0 px-8 py-4 bg-brand-red text-white
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
          </div>

        </div>
      </section>
    </>
  )
}
