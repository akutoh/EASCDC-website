/**
 * FilterBar — tab-style filter buttons for the Projects page
 * Props:
 *   activeFilter  — current filter string ('all' | 'standard' | 'semi-elegant' | 'high-end')
 *   onChange      — (filter: string) => void
 */

const FILTERS = [
  { value: 'all',          label: 'All Projects'       },
  { value: 'standard',     label: 'Standard Finish'    },
  { value: 'semi-elegant', label: 'Semi-Elegant Finish' },
  { value: 'high-end',     label: 'High-End Finish'    },
]

export default function FilterBar({ activeFilter, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by finish tier"
      className="flex flex-wrap gap-2"
    >
      {FILTERS.map(({ value, label }) => {
        const isActive = activeFilter === value
        return (
          <button
            key={value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(value)}
            className={`
              px-5 py-2.5
              font-title text-xs font-bold tracking-wide-label uppercase rounded
              border-2
              transition-[background-color,border-color,color,transform,box-shadow] duration-200
              focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2
              active:scale-95
              ${isActive
                ? 'bg-brand-red border-brand-red text-white shadow-btn'
                : 'bg-transparent border-brand-gray/40 text-brand-black/60 hover:border-brand-red hover:text-brand-red hover:-translate-y-px'
              }
            `}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
