import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const titleColor = dark ? 'text-ink' : 'text-ivory';
  const introColor = dark ? 'text-ink/60' : 'text-stone-light';

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`font-display font-light text-display-md ${titleColor}`}>{title}</h2>
      {intro && <p className={`text-base leading-relaxed md:text-lg ${introColor}`}>{intro}</p>}
    </motion.div>
  );
}
