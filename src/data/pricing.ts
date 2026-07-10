export interface PricingTier {
  id: string;
  name: string;
  rate: number;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  featured?: boolean;
  calculatorEligible?: boolean;
  cta: string;
}

export const pricing: PricingTier[] = [
  {
    id: 'basic',
    name: 'Essential',
    rate: 2100,
    price: '₹2,100',
    cadence: 'per sq.ft',
    summary: 'Smart essentials for a solid, functional home — built right, priced honestly.',
    features: [
      'Daily site engineer visits, weekly PM check-ins',
      'ISI-brand steel, AAC block partitions, M20 concrete',
      'Vitrified tile flooring throughout',
      'Cera bathroom fittings up to ₹12,000/bathroom',
      'Malaysian teak main door & aluminium sliding windows',
      'Two-coat putty and emulsion paint finish',
    ],
    calculatorEligible: true,
    cta: 'Get a quote',
  },
  {
    id: 'standard',
    name: 'Signature',
    rate: 2300,
    price: '₹2,300',
    cadence: 'per sq.ft',
    summary: 'Elevated finishes with tighter site supervision and daily progress updates.',
    features: [
      'Daily photo updates via app, PM visits twice weekly',
      'Arun TMT steel, wire-cut brick, anti-termite treatment',
      'Full-height bathroom tiling, Parryware fittings to ₹20,000',
      '4×2 ft vitrified flooring up to ₹65/sq.ft',
      'UPVC sliding windows, SS304 + glass balcony railing',
      'AC points included in bedrooms & living room',
    ],
    featured: true,
    calculatorEligible: true,
    cta: 'Get a quote',
  },
  {
    id: 'premium',
    name: 'Elite',
    rate: 2500,
    price: '₹2,500',
    cadence: 'per sq.ft',
    summary: 'Dedicated architect-led delivery, with stage-wise site visits and material selection support.',
    features: [
      'Soil test, structural drawings & furniture layouts included',
      'Daily project manager visits, dedicated architect throughout',
      'Jaquar fittings to ₹30,000/bathroom, solar-ready plumbing',
      '4×2 ft digital vitrified tiles & granite staircase',
      'Ghana teak door, toughened-glass balcony railing',
      'RCC lift pit/shaft included if required',
    ],
    calculatorEligible: true,
    cta: 'Get a quote',
  },
];

export const calculatorRates = {
  sump: 24,
  septic: 24,
  compoundWall: 425,
  minBuiltUpArea: 2000,
};
