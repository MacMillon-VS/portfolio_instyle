export interface Member {
  name: string;
  role: string;
  photo: string;
}

// Local headshots live in `public/images/team/`. To use a real photo, replace
// the file of the same name — no code change needed. See README.
const photo = (slug: string) => `/images/team/${slug}.jpg`;

export const team: Member[] = [
  { name: 'Imran Khan', role: 'Founder · Principal Architect', photo: photo('imran-khan') },
  { name: 'Mohammed Kajali', role: 'Director of Construction', photo: photo('mohammed-kajali') },
  { name: 'Mohammed Ridwan', role: 'Senior Project Architect', photo: photo('ridwan') },
  { name: 'Mohammed Rasith', role: 'Project Manager', photo: photo('rasith') },
];

export const stats = [
  { value: 21, suffix: '', label: 'Projects delivered' },
  { value: 6, suffix: '+', label: 'Years of practice' },
  { value: 49, suffix: 'K+', prefix: '', label: 'Sq ft built' },
  { value: 10, suffix: 'Years', label: 'Structural warranty' },
];
