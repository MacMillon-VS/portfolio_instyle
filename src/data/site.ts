export const site = {
  name: 'Instyle Architect',
  shortName: 'Instyle',
  tagline: 'Architecture & Construction Studio',
  heroHeadline: ['We design and', 'build in style.'],
  heroSub:
    'Instyle Architect is a Tamil Nadu based design-led architecture and construction studio crafting bold, timeless spaces — end to end, from first sketch to handover of the keys.',
  location: 'Perambalur · Tamil Nadu, India',
  email: 'teamimran96@gmail.com',
  phone: '+91 8144001528',
  phoneHref: '+918144001528',
  whatsapp: '+918144001528',
  address: '16, Labbaikudikadu to National Hwy, Alsha Nagar, Perambalur, Labbaikudikadu, Tamil Nadu 621108',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Behance', href: 'https://behance.net' },
  ],
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type Site = typeof site;
