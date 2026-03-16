/**
 * Project data for E.A. Sitchon Construction
 * 9 sample projects — 3 per finish tier, Filipino locations
 *
 * finishType: 'standard' | 'semi-elegant' | 'high-end'
 */

export const projects = [
  // ── Standard Finish ─────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Dela Cruz Family Residence',
    location: 'Bacoor, Cavite',
    year: 2022,
    finishType: 'standard',
    description:
      'A practical two-bedroom bungalow built with durable materials and clean lines. Designed for comfort and low-maintenance living for a young family.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  },
  {
    id: 2,
    name: 'Santos Single-Storey Home',
    location: 'Calamba, Laguna',
    year: 2023,
    finishType: 'standard',
    description:
      'Efficiently designed single-storey home maximizing lot space. Features reinforced concrete construction with standard ceramic tile flooring throughout.',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
  },
  {
    id: 3,
    name: 'Mendoza Bungalow Project',
    location: 'Imus, Cavite',
    year: 2021,
    finishType: 'standard',
    description:
      'Three-bedroom bungalow on a corner lot with a covered garage and open-plan living area. Completed ahead of schedule with zero cost overruns.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  },

  // ── Semi-Elegant Finish ──────────────────────────────────────────────────
  {
    id: 4,
    name: 'Reyes Colonial Townhouse',
    location: 'Dasmariñas, Cavite',
    year: 2022,
    finishType: 'semi-elegant',
    description:
      'A refined two-storey colonial-style townhouse featuring imported floor tiles, custom woodwork, and a landscaped front garden. Modern comforts with classic aesthetics.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
  },
  {
    id: 5,
    name: 'Garcia Modern Residence',
    location: 'Biñan, Laguna',
    year: 2023,
    finishType: 'semi-elegant',
    description:
      'Contemporary four-bedroom home with an open kitchen island, recessed lighting, and a semi-private entertainment deck. A perfect blend of style and function.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 6,
    name: 'Villanueva Two-Storey Home',
    location: 'San Pedro, Laguna',
    year: 2022,
    finishType: 'semi-elegant',
    description:
      'Elegant two-storey home with high ceilings, tempered glass balustrades, and a master suite with an en-suite bath. Designed for a growing family.',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
  },

  // ── High-End Finish ──────────────────────────────────────────────────────
  {
    id: 7,
    name: 'Aquino Prestige Manor',
    location: 'Alabang, Muntinlupa',
    year: 2023,
    finishType: 'high-end',
    description:
      'A landmark luxury residence featuring imported Italian marble floors, a resort-style pool, smart home automation, and a fully equipped home theater.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 8,
    name: 'Soriano Signature Estate',
    location: 'BF Homes, Parañaque',
    year: 2022,
    finishType: 'high-end',
    description:
      'Grand five-bedroom estate with a wine cellar, rooftop garden, and double-height foyer. Every detail crafted to the client\'s exacting specifications.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: 9,
    name: 'Tan Hillcrest Villa',
    location: 'Tagaytay City, Cavite',
    year: 2023,
    finishType: 'high-end',
    description:
      'Breathtaking hilltop villa with panoramic views of Taal Lake. Floor-to-ceiling glass walls, infinity-edge pool, and bespoke interior design throughout.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
]

/**
 * Helper: return 3 featured projects (one per tier) for the Home page
 */
export const featuredProjects = [
  projects.find(p => p.finishType === 'standard'),
  projects.find(p => p.finishType === 'semi-elegant'),
  projects.find(p => p.finishType === 'high-end'),
]

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
  'high-end': {
    label: 'High-End Finish',
    badgeClass: 'badge-high-end',
    color: '#E21B1B', // brand-red
  },
}
