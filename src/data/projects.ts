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

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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
    cover: img('photo-1600585154340-be6161a56a0c'),
    gallery: [
      img('photo-1600585154340-be6161a56a0c', 1600),
      img('photo-1600607687939-ce8a6c25118c', 1600),
      img('photo-1600566753086-00f18fb6b3ea', 1600),
    ],
  },
  {
    id: 'atrium-offices',
    title: 'Atrium Offices',
    category: 'Commercial',
    year: '2024',
    location: 'Guindy, Chennai',
    scope: 'Architecture · Interior · Fit-out',
    area: '32,000 sq ft',
    blurb:
      'An IT-park HQ organised around a full-height planted atrium, flooding four floors of workspace with daylight and greenery while cutting cooling loads in Chennai’s heat.',
    cover: img('photo-1497366216548-37526070297c'),
    gallery: [
      img('photo-1497366216548-37526070297c', 1600),
      img('photo-1524758631624-e2822e304c36', 1600),
      img('photo-1604328698692-f76ea9498e76', 1600),
    ],
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
    cover: img('photo-1618221195710-dd6b41faaea6'),
    gallery: [
      img('photo-1618221195710-dd6b41faaea6', 1600),
      img('photo-1615529162924-f8605388463d', 1600),
      img('photo-1616486338812-3dadae4b4ace', 1600),
    ],
  },
  {
    id: 'coastal-pavilion',
    title: 'Coastal Pavilion',
    category: 'Residential',
    year: '2023',
    location: 'Mahabalipuram, ECR',
    scope: 'Architecture · Landscape · Build',
    area: '4,800 sq ft',
    blurb:
      'A weathered-teak beach house on the ECR coast that dissolves the line between shore and dwelling with sliding glass walls and a floating roof plane.',
    cover: img('photo-1512917774080-9991f1c4c750'),
    gallery: [
      img('photo-1512917774080-9991f1c4c750', 1600),
      img('photo-1613490493576-7fde63acd811', 1600),
      img('photo-1600047509807-ba8f99d2cdde', 1600),
    ],
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
    cover: img('photo-1441986300917-64674bd600d8'),
    gallery: [
      img('photo-1441986300917-64674bd600d8', 1600),
      img('photo-1531973576160-7125cd663d86', 1600),
      img('photo-1519710164239-da123dc03ef4', 1600),
    ],
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
    cover: img('photo-1604014237800-1c9102c219da'),
    gallery: [
      img('photo-1604014237800-1c9102c219da', 1600),
      img('photo-1616047006789-b7af5afb8c20', 1600),
      img('photo-1617104678098-de229db51175', 1600),
    ],
  },
];

export const projectFilters: ('All' | ProjectCategory)[] = [
  'All',
  'Residential',
  'Commercial',
  'Interior',
];
