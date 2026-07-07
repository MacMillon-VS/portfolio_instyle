import imranPhoto from '../assests/imran.jpeg';
import kajaliPhoto from '../assests/kajali.jpeg';

export interface Member {
  name: string;
  role: string;
  photo: string;
}

const p = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const team: Member[] = [
  { name: 'Imran Khan', role: 'Founder · Principal Architect', photo: imranPhoto },
  { name: 'Mohammed Kajali', role: 'Director of Construction', photo: kajaliPhoto },
  { name: 'Priya Raghavan', role: 'Head of Interiors', photo: p('photo-1580489944761-15a19d654956') },
  { name: 'Meera Krishnan', role: 'Senior Project Architect', photo: p('photo-1573496359142-b8d87734a5a2') },
];

export const stats = [
  { value: 180, suffix: '+', label: 'Projects delivered' },
  { value: 18, suffix: '', label: 'Years of practice' },
  { value: 2.4, suffix: 'M', prefix: '', label: 'Sq ft built' },
  { value: 24, suffix: '', label: 'Design awards' },
];
