export type ProjectCategory = 'Residential' | 'Commercial' | 'Interior';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  scope: string;
  area: string;
  blurb: string;
  cover: string;
  gallery: string[];
}

// Local images live in `public/images/projects/<id>/`. To use your own photo,
// just replace the file of the same name — no code change needed. See README.
const cover = (id: string) => `/images/projects/${id}/cover.jpg`;
const shot = (id: string, n: 2 | 3) => `/images/projects/${id}/0${n}.jpg`;
const gallery = (id: string) => [cover(id), shot(id, 2), shot(id, 3)];

export const projects: Project[] = [
  {
    id: 'monolith-house',
    title: 'Monolith House',
    category: 'Residential',
    year: '2025',
    location: 'Kotagiri, Nilgiris',
    scope: 'Architecture · Structural · Turnkey Build',
    area: '6,400 sq ft',
    blurb:
      'A board-formed concrete residence carved into a Nilgiris hillside, balancing raw mass with warm teak interiors and a cantilevered living volume over the tea slopes.',
    cover: cover('monolith-house'),
    gallery: gallery('monolith-house'),
  },
  {
    id: 'atrium-offices',
    title: 'Aura Stone Residency',
    category: 'Residential',
    year: '2023',
    location: 'LBK, Perambalur',
    scope: 'Architecture · Interior · Turnkey Build',
    area: '2400 sq ft',
    blurb:
      'A refined blend of warm beige tones, natural stone, and rich wooden accents, crafted for timeless elegance and everyday comfort.',
    cover: cover('atrium-offices'),
    gallery: gallery('atrium-offices'),
  },
  {
    id: 'linen-loft',
    title: 'Linen Loft',
    category: 'Interior',
    year: '2025',
    location: 'Nungambakkam, Chennai',
    scope: 'Interior Architecture · Bespoke Joinery',
    area: '2,100 sq ft',
    blurb:
      'A city apartment reimagined with limewash walls, Kota-stone islands and hand-built teak millwork for a collector couple.',
    cover: cover('linen-loft'),
    gallery: gallery('linen-loft'),
  },
  {
    id: 'coastal-pavilion',
    title: 'The Arc House',
    category: 'Residential',
    year: '2024',
    location: 'LBK, Perambalur',
    scope: 'Architecture · Turnkey Build · Interior',
    area: '2550 sq ft',
    blurb:
      'A contemporary luxury residence blending elegant curves, warm materials, and minimalist architecture for timeless modern living.',
    cover: cover('coastal-pavilion'),
    gallery: gallery('coastal-pavilion'),
  },
  {
    id: 'foundry-market',
    title: 'Foundry Market',
    category: 'Commercial',
    year: '2024',
    location: 'Peelamedu, Coimbatore',
    scope: 'Architecture · Structural · Retail',
    area: '18,500 sq ft',
    blurb:
      'A former textile mill transformed into a covered food hall, preserving the steel trusses beneath a new north-lit clerestory in the heart of Coimbatore.',
    cover: cover('foundry-market'),
    gallery: gallery('foundry-market'),
  },
  {
    id: 'terracotta-studio',
    title: 'Terracotta Studio',
    category: 'Interior',
    year: '2023',
    location: 'Karaikudi, Chettinad',
    scope: 'Interior · Lighting · Furniture',
    area: '1,600 sq ft',
    blurb:
      'A warm, monastic artist studio wrapped in Athangudi-tile floors and terracotta plaster, with a sculpted concrete stair and clerestory daylighting in a restored Chettinad home.',
    cover: cover('terracotta-studio'),
    gallery: gallery('terracotta-studio'),
  },
];

export const projectFilters: ('All' | ProjectCategory)[] = [
  'All',
  'Residential',
  'Commercial',
  'Interior',
];
