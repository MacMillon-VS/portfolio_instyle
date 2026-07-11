import { motion } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import { EASE } from '../../lib/motion';
import Button from '../ui/Button';

export default function CtaBand() {
  const { ref: sectionRef, y } = useParallax<HTMLElement>(120);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 h-[135%]">
        <img
          src="/images/cta.jpg"
          alt="Architectural construction site"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </motion.div>

      <div className="container-x flex flex-col items-center gap-8 py-24 text-center md:py-32">
        <motion.h2
          className="max-w-3xl font-display text-display-md font-light text-ivory"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Let’s build your vision — <span className="italic text-bronze">in style.</span>
        </motion.h2>
        <motion.p
          className="max-w-xl text-base text-ivory/70 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          Book a no-obligation consultation. We’ll discuss your site, your ambitions and the
          smartest path to breaking ground.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          <Button href="#contact">Book a consultation</Button>
        </motion.div>
      </div>
    </section>
  );
}
