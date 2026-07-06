import { motion } from 'framer-motion';
import { lineReveal, viewportOnce } from '../../lib/motion';

interface RevealTextProps {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
}

/**
 * Masked line-by-line text reveal — each line slides up from behind a clip mask
 * as it enters the viewport.
 */
export default function RevealText({ lines, as = 'h2', className = '' }: RevealTextProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span className="block" variants={lineReveal} custom={i}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
