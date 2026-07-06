export interface PricingTier {
  id: string;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const pricing: PricingTier[] = [
  {
    id: 'consultation',
    name: 'Consultation',
    price: 'From ₹75,000',
    cadence: 'fixed engagement',
    summary: 'Clarity before you commit — a strategic design and feasibility study for your site.',
    features: [
      'Site & feasibility assessment',
      'Concept sketches & massing',
      'Budget & timeline guidance',
      'Zoning & code overview',
      '2 revision rounds',
    ],
    cta: 'Book a consultation',
  },
  {
    id: 'design-build',
    name: 'Design & Build',
    price: '8–12%',
    cadence: 'of project cost',
    summary: 'Our signature end-to-end service — one accountable team from first sketch to keys.',
    features: [
      'Everything in Consultation',
      'Full architectural design set',
      'Permitting & approvals managed',
      'General contracting & build',
      'Cost & schedule control',
      'Dedicated project manager',
    ],
    featured: true,
    cta: 'Get a quote',
  },
  {
    id: 'turnkey',
    name: 'Turnkey Premium',
    price: 'Custom',
    cadence: 'tailored proposal',
    summary: 'A white-glove, fully bespoke delivery for signature residences and landmark builds.',
    features: [
      'Everything in Design & Build',
      'Bespoke interiors & joinery',
      'Furniture, art & lighting curation',
      'Landscape & smart-home integration',
      'Priority scheduling',
      'Extended aftercare & warranty',
    ],
    cta: 'Request proposal',
  },
];
