import { useRef } from 'react';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

/**
 * Scroll-linked vertical parallax powered by Framer Motion (no GSAP).
 * Attach `ref` to the tracked container and `y` to the element that should move
 * (usually an oversized child so the travel stays covered). Disabled for
 * reduced-motion users.
 *
 * @param distance total travel in px across the element's viewport pass.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  distance = 120
): { ref: React.RefObject<T>; y: MotionValue<number> } {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-distance / 2, distance / 2]
  );

  return { ref, y };
}
