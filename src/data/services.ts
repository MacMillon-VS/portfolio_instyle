export interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: 'architecture',
    title: 'Architecture & Design',
    description:
      'Concept-driven architecture rooted in site, light and material — from feasibility studies to fully detailed construction drawings.',
    points: ['Concept & schematic design', 'Design development', 'Construction documentation'],
  },
  {
    id: 'construction',
    title: 'Construction & Build',
    description:
      'A single accountable team from ground-breaking to handover, with in-house project management and trusted trade partners.',
    points: ['General contracting', 'Cost & schedule control', 'Quality assurance'],
  },
  {
    id: 'interiors',
    title: 'Interiors & Joinery',
    description:
      'Interior architecture and bespoke millwork designed and built under one roof, so every detail resolves seamlessly.',
    points: ['Interior architecture', 'Custom joinery & furniture', 'Material & lighting curation'],
  },
  {
    id: 'consulting',
    title: 'Planning & Consulting',
    description:
      'Guidance through zoning, permits and approvals — de-risking your project long before the first shovel hits the ground.',
    points: ['Zoning & code review', 'Permitting & approvals', 'Sustainability strategy'],
  },
];
