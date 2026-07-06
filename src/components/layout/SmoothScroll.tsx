import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../../lib/lenis';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Sets up Lenis smooth scrolling on its own requestAnimationFrame loop and
 * registers the instance so overlays can lock/unlock scrolling.
 * Also intercepts in-page anchor clicks so nav links glide smoothly.
 * Falls back to native scrolling when the user prefers reduced motion.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth in-page anchor navigation.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(rafId);
      setLenis(null);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
