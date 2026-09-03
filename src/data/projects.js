/**
 * Project data for E.A. Sitchon Construction — actual completed / in-progress builds.
 *
 * finishType: 'standard' | 'semi-elegant'
 * type:       building type (free text label, e.g. "Two-Storey Residential")
 * images:     array of local asset imports (first image is used as the card cover)
 *
 * Local assets live in /brand_assets and are imported so Vite fingerprints & optimizes them.
 *
 * Only the first 3 projects appear in the Home "Featured Projects" section
 * (see `featuredProjects` below). All projects appear on the Projects page.
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

// ── Rodriguez — Standard Finish ────────────────────────────────────────────
import rodriguez1 from '../../brand_assets/standard_finish/rodriguez/rodriguez_1.jpg'
import rodriguez2 from '../../brand_assets/standard_finish/rodriguez/rodriguez_2.jpg'
import rodriguez3 from '../../brand_assets/standard_finish/rodriguez/rodriguez_3.jpg'
import rodriguez4 from '../../brand_assets/standard_finish/rodriguez/rodriguez_4.jpg'
import rodriguez5 from '../../brand_assets/standard_finish/rodriguez/rodriguez_5.jpg'

// ── Gan — Standard Finish ──────────────────────────────────────────────────
import gan1 from '../../brand_assets/standard_finish/gan/gan_1.jpg'
import gan2 from '../../brand_assets/standard_finish/gan/gan_2.jpg'
import gan3 from '../../brand_assets/standard_finish/gan/gan_3.jpg'
import gan4 from '../../brand_assets/standard_finish/gan/gan_4.jpg'

// ── Bongadillo — Standard Finish ───────────────────────────────────────────
import bongadillo1 from '../../brand_assets/standard_finish/bongadillo/bongadillo_1.jpg'
import bongadillo2 from '../../brand_assets/standard_finish/bongadillo/bongadillo_2.jpg'
import bongadillo3 from '../../brand_assets/standard_finish/bongadillo/bongadillo_3.jpg'

// ── Bayot — Standard Finish ────────────────────────────────────────────────
import bayot1 from '../../brand_assets/standard_finish/bayot/bayot_1.jpg'
import bayot2 from '../../brand_assets/standard_finish/bayot/bayot_2.jpg'
import bayot3 from '../../brand_assets/standard_finish/bayot/bayot_3.jpg'
import bayot4 from '../../brand_assets/standard_finish/bayot/bayot_4.jpg'

// ── Dela Cruz — Standard Finish ────────────────────────────────────────────
import delacruz1 from '../../brand_assets/standard_finish/delacruz/delacruz_1.jpg'

// ── Peralta — Standard Finish ──────────────────────────────────────────────
import peralta1 from '../../brand_assets/standard_finish/peralta/peralta_1.jpg'
import peralta2 from '../../brand_assets/standard_finish/peralta/peralta_2.jpg'
import peralta3 from '../../brand_assets/standard_finish/peralta/peralta_3.jpg'

// ── Roguel — Standard Finish ───────────────────────────────────────────────
import roguel1 from '../../brand_assets/standard_finish/roguel/roguel_1.jpg'

// ── Rogado — Standard Finish ───────────────────────────────────────────────
import rogado1 from '../../brand_assets/standard_finish/rogado/rogado_1.jpg'

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

  // ── Projects below appear on the Projects page only (not Featured) ────────
  {
    id: 4,
    name: 'Rodriguez Residence',
    location: 'San Jose, Batangas',
    year: 2026,
    type: 'Single-Storey Renovation',
    finishType: 'standard',
    description:
      'A bungalow residence renovation that transforms the home into a more modern, functional, and comfortable living space, featuring three well-designed bedrooms and an improved layout for everyday family living.',
    images: [rodriguez1, rodriguez2, rodriguez3, rodriguez4, rodriguez5],
  },
  {
    id: 5,
    name: 'Gan Residence',
    location: 'Cainta, Rizal',
    year: 2025,
    type: 'Two-Storey Residential',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A two-storey residential home built with a standard finish — durable construction paired with a practical layout designed for comfortable, everyday family living.',
    images: [gan1, gan2, gan3, gan4],
  },
  {
    id: 6,
    name: 'Bongadillo Residence',
    location: 'Bacoor, Cavite',
    year: 2026,
    type: 'Two-Storey Residential',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A two-storey residential home delivered with a standard finish, focused on sturdy construction, clean lines, and functional spaces for growing families.',
    images: [bongadillo1, bongadillo2, bongadillo3],
  },
  {
    id: 7,
    name: 'Bayot Residence',
    location: 'San Pedro, Laguna',
    year: 2026,
    type: 'Single-Storey Renovation',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A single-storey home renovation that refreshes the space with an improved layout, updated finishes, and better everyday functionality.',
    images: [bayot1, bayot2, bayot3, bayot4],
  },
  {
    id: 8,
    name: 'Dela Cruz Residence',
    location: 'Dasmariñas, Cavite',
    year: 2025,
    type: 'Two-Storey Residential',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A two-storey residential home built with a standard finish — practical, sturdy, and designed for comfortable family living.',
    images: [delacruz1],
  },
  {
    id: 9,
    name: 'Peralta Clinic',
    location: 'Bay, Laguna',
    year: 2025, // NOTE: you wrote "202" — assumed 2025, please confirm
    type: 'Modular Clinic',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A modular clinic built for efficiency and durability — a functional healthcare space delivered with a clean, standard finish.',
    images: [peralta1, peralta2, peralta3],
  },
  {
    id: 10,
    name: 'Roguel Residence',
    location: 'Pagsanjan, Laguna',
    year: 2026,
    type: 'Four-Bedroom Residential House',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A spacious four-bedroom residential house designed for growing families, combining a durable standard finish with a practical, comfortable layout.',
    images: [roguel1],
  },
  {
    id: 11,
    name: 'Rogado Residence',
    location: 'Luisiana, Laguna',
    year: 2025,
    type: 'Single-Storey Residential',
    finishType: 'standard',
    // TODO: replace with real project description
    description:
      'A single-storey residential home delivered with a standard finish — straightforward, sturdy, and built for everyday comfort.',
    images: [rogado1],
  },
]

/**
 * Featured projects for the Home page — first 3 only.
 * Additional projects (id 4+) appear on the Projects page but NOT in Featured.
 */
export const featuredProjects = projects.slice(0, 3)

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
