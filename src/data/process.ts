export interface ProcessStep {
  no: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    no: '01',
    title: 'Concept',
    description:
      'We listen, study the site and shape a clear architectural vision with mood, massing and a realistic budget.',
  },
  {
    no: '02',
    title: 'Design',
    description:
      'Plans, sections and material palettes are developed into a resolved, buildable design you can walk through in 3D.',
  },
  {
    no: '03',
    title: 'Permits',
    description:
      'We navigate zoning, code and approvals — coordinating engineers and consultants so nothing stalls on site.',
  },
  {
    no: '04',
    title: 'Build',
    description:
      'Our construction team breaks ground with tight cost and schedule control, keeping quality visible at every stage.',
  },
  {
    no: '05',
    title: 'Handover',
    description:
      'We commission, snag and hand over a finished space — plus documentation and aftercare to protect your investment.',
  },
];
