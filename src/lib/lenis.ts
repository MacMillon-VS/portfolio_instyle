import type Lenis from 'lenis';

// Singleton reference to the active Lenis instance, plus a lock counter so that
// overlapping locks (e.g. mobile menu + project modal) don't unlock prematurely.
let instance: Lenis | null = null;
let locks = 0;

export function setLenis(l: Lenis | null) {
  instance = l;
}

/** Freeze page scrolling — stops Lenis (if active) and hard-locks the body. */
export function lockScroll() {
  locks += 1;
  instance?.stop();
  document.documentElement.classList.add('scroll-locked');
}

/** Release one lock; only re-enables scrolling once all locks are cleared. */
export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    instance?.start();
    document.documentElement.classList.remove('scroll-locked');
  }
}
