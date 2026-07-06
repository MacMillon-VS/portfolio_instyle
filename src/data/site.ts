export const site = {
  name: 'Instyle Architect',
  shortName: 'Instyle',
  tagline: 'Architecture & Construction Studio',
  heroHeadline: ['We design and', 'build in style.'],
  heroSub:
    'Instyle Architect is a Tamil Nadu based design-led architecture and construction studio crafting bold, timeless spaces — end to end, from first sketch to handover of the keys.',
  location: 'Chennai · Tamil Nadu, India',
  email: 'studio@instylearchitect.in',
  phone: '+91 98400 12200',
  phoneHref: '+919840012200',
  whatsapp: '919840012200',
  address: 'No. 12, Sterling Road, Nungambakkam, Chennai 600034, Tamil Nadu',
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
