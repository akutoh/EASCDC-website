/**
 * Project data for E.A. Sitchon Construction — actual completed / in-progress builds.
 *
 * finishType: 'standard' | 'semi-elegant'
 * type:       building type (free text label, e.g. "Two-Storey Residential")
 * images:     array of local asset imports (first image is used as the card cover)
 *
 * Local assets live in /brand_assets and are imported so Vite fingerprints & optimizes them.
 */

// ── Rodelas — Standard Finish ──────────────────────────────────────────────
import rodelas1 from '../../brand_assets/standard_finish/rodelas/rodelas_1.png'
import rodelas2 from '../../brand_assets/standard_finish/rodelas/rodelas_2.jpg'
import rodelas3 from '../../brand_assets/standard_finish/rodelas/rodelas_3.jpg'
import rodelas4 from '../../brand_assets/standard_finish/rodelas/rodelas_4.jpg'

// ── Ramos — Semi-Elegant Finish ────────────────────────────────────────────
import ramos1 from '../../brand_assets/semi_elegant_finish/ramos/ramos_1.jpg'
import ramos2 from '../../brand_assets/semi_elegant_finish/ramos/ramos_2.jpeg'
import ramos3 from '../../brand_assets/semi_elegant_finish/ramos/ramos_3.jpg'
import ramos4 from '../../brand_assets/semi_elegant_finish/ramos/ramos_4.jpg'

// ── AKLATTE — Semi-Elegant Finish ──────────────────────────────────────────
import aklatte1 from '../../brand_assets/semi_elegant_finish/aklatte/aklatte_1.jpg'
import aklatte2 from '../../brand_assets/semi_elegant_finish/aklatte/aklatte_2.jpg'
import aklatte3 from '../../brand_assets/semi_elegant_finish/aklatte/aklatte_3.jpg'

export const projects = [
  {
    id: 1,
    name: 'Rodelas Family Residence',
    location: 'Alfonso, Cavite',
    year: 2025,
    type: 'Two-Storey Residential',
    finishType: 'standard',
    description:
      'A modern two-storey Airbnb designed for comfort, relaxation, and memorable stays. It features stylish interiors, spacious living areas, well-appointed bedrooms, and a private small pool — perfect for unwinding with family or friends. Blending functionality with contemporary design, this home offers a cozy yet luxurious retreat for every guest.',
    images: [rodelas1, rodelas2, rodelas3, rodelas4],
  },
  {
    id: 2,
    name: 'Ramos Family Residence',
    location: 'Pila, Laguna',
    year: 2025,
    type: 'Two-Storey Residential',
    finishType: 'semi-elegant',
    description:
      'A two-storey residential home with a semi-elegant finish, combining modern design, refined details, and functional spaces to create a stylish yet comfortable home for everyday living.',
    images: [ramos1, ramos2, ramos3, ramos4],
  },
  {
    id: 3,
    name: 'AKLATTE',
    location: 'Pila, Laguna',
    year: 2026,
    type: 'Two-Storey Coffee Shop',
    finishType: 'semi-elegant',
    description:
      'A modern two-storey coffee shop with an inviting al fresco vibe, thoughtfully designed to blend cozy spaces with open-air seating for a relaxing and memorable café experience.',
    images: [aklatte1, aklatte2, aklatte3],
  },
]

/**
 * Featured projects for the Home page — all current projects.
 */
export const featuredProjects = projects

/**
 * Tier metadata — labels, badge CSS classes, and accent colors
 */
export const tierMeta = {
  standard: {
    label: 'Standard Finish',
    badgeClass: 'badge-standard',
    color: '#64748b', // slate-500
  },
  'semi-elegant': {
    label: 'Semi-Elegant Finish',
    badgeClass: 'badge-semi-elegant',
    color: '#d97706', // amber-600
  },
}
