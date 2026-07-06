import type { Variants } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: i * 0.08 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// Reveal for masked text lines
export const lineReveal: Variants = {
  hidden: { y: '110%' },
  visible: (i: number = 0) => ({
    y: '0%',
    transition: { duration: 0.9, ease: EASE, delay: i * 0.12 },
  }),
};

export const viewportOnce = { once: true, amount: 0.3 } as const;
