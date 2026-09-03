import { useMemo, useState } from 'react'

/* ── Icons ───────────────────────────────────────────────────────────────── */
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

/* ── Constants ───────────────────────────────────────────────────────────── */
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
export const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
]

/* ── Date helpers (date-only, local time) ────────────────────────────────── */
const toISO = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const startOfDay = (d) => {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

/**
 * AppointmentPicker — custom calendar + time-slot selector.
 *
 * Rules: no dates before today; Sundays disabled (Mon–Sat only);
 * 2-day buffer (earliest selectable = today + 2 days).
 *
 * Props:
 *   selectedDate  — 'YYYY-MM-DD' | ''
 *   selectedTime  — one of TIME_SLOTS | ''
 *   onSelectDate  — (iso: string) => void
 *   onSelectTime  — (time: string) => void
 */
export default function AppointmentPicker({ selectedDate, selectedTime, onSelectDate, onSelectTime }) {
  // Earliest selectable date = today + 2-day buffer.
  const minDate = useMemo(() => {
    const d = startOfDay(new Date())
    d.setDate(d.getDate() + 2)
    return d
  }, [])

  const [view, setView] = useState(() => ({ year: minDate.getFullYear(), month: minDate.getMonth() }))

  const firstOfMonth = new Date(view.year, view.month, 1)
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate()
  const leadingBlanks = firstOfMonth.getDay() // 0 (Sun) … 6 (Sat)

  // Disable the "previous month" arrow once we'd go before the min date's month.
  const canGoPrev =
    view.year > minDate.getFullYear() ||
    (view.year === minDate.getFullYear() && view.month > minDate.getMonth())

  const gotoPrev = () =>
    setView((v) => (v.month === 0 ? { year: v.year - 1, month: 11 } : { ...v, month: v.month - 1 }))
  const gotoNext = () =>
    setView((v) => (v.month === 11 ? { year: v.year + 1, month: 0 } : { ...v, month: v.month + 1 }))

  const cells = []
  for (let i = 0; i < leadingBlanks; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(view.year, view.month, day))

  return (
    <div className="rounded-lg border border-white/10 bg-brand-black/40 p-4">
      {/* ── Month navigation ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={gotoPrev}
          disabled={!canGoPrev}
          aria-label="Previous month"
          className="
            flex items-center justify-center w-8 h-8 rounded
            text-brand-gray transition-[background-color,color,transform] duration-150
            hover:bg-white/10 hover:text-brand-white active:scale-90
            disabled:opacity-30 disabled:pointer-events-none
            focus-visible:ring-2 focus-visible:ring-brand-red
          "
        >
          <ChevronLeft />
        </button>
        <p className="font-title text-sm font-bold tracking-wide-label uppercase text-brand-white">
          {MONTHS[view.month]} {view.year}
        </p>
        <button
          type="button"
          onClick={gotoNext}
          aria-label="Next month"
          className="
            flex items-center justify-center w-8 h-8 rounded
            text-brand-gray transition-[background-color,color,transform] duration-150
            hover:bg-white/10 hover:text-brand-white active:scale-90
            focus-visible:ring-2 focus-visible:ring-brand-red
          "
        >
          <ChevronRight />
        </button>
      </div>

      {/* ── Weekday header ───────────────────────────────────────────── */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map((w, i) => (
          <div
            key={w}
            className={`text-center font-title text-[10px] font-bold tracking-wide-label uppercase py-1
                        ${i === 0 ? 'text-brand-red/50' : 'text-brand-gray/50'}`}
          >
            {w}
          </div>
        ))}
      </div>

      {/* ── Day grid ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, idx) => {
          if (!date) return <div key={`b${idx}`} />
          const iso = toISO(date)
          const isSunday = date.getDay() === 0
          const isPastBuffer = date < minDate
          const disabled = isSunday || isPastBuffer
          const isSelected = selectedDate === iso

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onSelectDate(iso)}
              aria-label={`${MONTHS[view.month]} ${date.getDate()}, ${view.year}`}
              aria-pressed={isSelected}
              className={`
                aspect-square rounded flex items-center justify-center
                font-body text-sm
                transition-[background-color,color,transform] duration-150
                focus-visible:ring-2 focus-visible:ring-brand-red
                ${isSelected
                  ? 'bg-brand-red text-white font-bold shadow-btn'
                  : disabled
                    ? 'text-brand-gray/20 cursor-not-allowed line-through decoration-1'
                    : 'text-brand-white hover:bg-white/10 active:scale-90'}
              `}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      {/* ── Time slots ───────────────────────────────────────────────── */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="font-title text-[10px] font-bold tracking-wide-label uppercase text-brand-red mb-2.5">
          Preferred Time <span className="text-brand-gray/50 normal-case">(9:00 AM – 4:00 PM)</span>
        </p>
        <div className="grid grid-cols-4 gap-2">
          {TIME_SLOTS.map((slot) => {
            const active = selectedTime === slot
            return (
              <button
                key={slot}
                type="button"
                onClick={() => onSelectTime(slot)}
                className={`
                  py-2 rounded border
                  font-body text-xs tracking-wide
                  transition-[background-color,border-color,color,transform] duration-150
                  active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-red
                  ${active
                    ? 'bg-brand-red border-brand-red text-white font-bold'
                    : 'bg-brand-black/50 border-white/10 text-brand-gray/80 hover:border-brand-red/60 hover:text-brand-white'}
                `}
              >
                {slot}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
