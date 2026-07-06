import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useScroll,
} from 'framer-motion';
import { ArrowDown, Star, MapPin } from 'lucide-react';
import { site } from '../../data/site';
import { EASE, lineReveal } from '../../lib/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Button from '../ui/Button';

const SPRING = { stiffness: 120, damping: 18, mass: 0.6 } as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Pointer position, normalised to -0.5..0.5 across the section.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  // Raw pointer px for the cursor spotlight.
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), SPRING);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-13, 13]), SPRING);
  // Layered depth drift for chips / secondary elements.
  const driftX = useSpring(useTransform(px, [-0.5, 0.5], [-24, 24]), SPRING);
  const driftY = useSpring(useTransform(py, [-0.5, 0.5], [-16, 16]), SPRING);

  const spotlight = useMotionTemplate`radial-gradient(680px circle at ${sx}px ${sy}px, rgba(184,149,106,0.16), transparent 66%)`;

  // Scroll parallax / fade of the whole hero content.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0]);

  function handlePointer(e: React.PointerEvent) {
    if (reduced) return;
    const r = sectionRef.current!.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
    sx.set(e.clientX - r.left);
    sy.set(e.clientY - r.top);
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={handlePointer}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
    >
      {/* Ambient background layers */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_-10%,rgba(184,149,106,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,243,239,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,243,239,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(100%_100%_at_50%_0%,black,transparent_75%)]" />
      </div>
      <motion.div className="absolute inset-0 -z-10" style={{ background: spotlight }} />

      <motion.div
        className="container-x grid w-full grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* ── Left: copy ─────────────────────────────── */}
        <div>
          <motion.span
            className="eyebrow mb-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            {site.tagline} — {site.location}
          </motion.span>

          <h1 className="font-display text-display-xl font-light leading-[0.95] text-ivory">
            {site.heroHeadline.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={lineReveal}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                >
                  {i === 1 ? (
                    <>
                      build in{' '}
                      <span className="bg-gradient-to-r from-bronze-light to-bronze bg-clip-text italic text-transparent">
                        style.
                      </span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-md text-base leading-relaxed text-ivory/65 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
          >
            {site.heroSub}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
          >
            <Button href="#work" variant="solid">
              View our work
            </Button>
            <Button href="#contact" variant="outline">
              Start a project
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-6 text-sm text-ivory/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center gap-1.5 text-bronze">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              ))}
            </div>
            <span>180+ projects across Tamil Nadu &amp; beyond</span>
          </motion.div>
        </div>

        {/* ── Right: 3D card composition ─────────────── */}
        <motion.div
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-md [perspective:1200px] lg:block"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
        >
          <motion.div
            className="relative h-full w-full [transform-style:preserve-3d]"
            style={{ rotateX, rotateY }}
          >
            {/* Back accent frame */}
            <div
              className="absolute inset-6 rounded-2xl border border-bronze/40"
              style={{ transform: 'translateZ(-60px)' }}
            />
            {/* Secondary card */}
            <div
              className="absolute -left-10 bottom-6 h-44 w-36 overflow-hidden rounded-xl border border-ivory/10 shadow-2xl shadow-black/60"
              style={{ transform: 'translateZ(30px)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                alt="Interior detail"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Main card */}
            <div
              className="absolute inset-0 overflow-hidden rounded-2xl border border-ivory/15 shadow-2xl shadow-black/70"
              style={{ transform: 'translateZ(70px)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Signature Instyle Architect residence"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="font-display text-2xl font-light text-ivory">Monolith House</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-bronze-light">
                  Nilgiris · 2025
                </div>
              </div>
            </div>

            {/* Floating glass chips */}
            <motion.div
              style={{ x: driftX, y: driftY, z: 120 }}
              className="absolute -right-6 top-8 flex items-center gap-2 rounded-full border border-ivory/15 bg-ink/70 px-4 py-2 text-sm text-ivory backdrop-blur-md"
            >
              <span className="font-display text-lg text-bronze">18+</span> yrs
            </motion.div>
            <motion.div
              style={{ x: driftX, y: driftY, z: 140 }}
              className="absolute -right-4 bottom-24 flex items-center gap-1.5 rounded-full border border-ivory/15 bg-ink/70 px-4 py-2 text-xs uppercase tracking-widest text-ivory backdrop-blur-md"
            >
              <MapPin className="h-3.5 w-3.5 text-bronze" strokeWidth={1.75} />
              Chennai
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile hero image (no 3D pointer tilt) */}
        <motion.div
          className="relative mt-2 aspect-[16/11] w-full overflow-hidden rounded-2xl border border-ivory/10 lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
            alt="Signature Instyle Architect residence"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="font-display text-xl text-ivory">Monolith House</div>
            <div className="text-xs uppercase tracking-widest text-bronze-light">Nilgiris · 2025</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest2 text-ivory/50 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </motion.span>
        Scroll
      </motion.a>
    </section>
  );
}
