import { motion } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import { fadeUp, viewportOnce } from '../../lib/motion';
import RevealText from '../ui/RevealText';

const principles = [
  { k: 'Design-led', v: 'Every project begins with ideas, not templates.' },
  { k: 'Single team', v: 'Architects and builders under one roof, one contract.' },
  { k: 'Material honesty', v: 'Concrete, timber and stone, expressed as they are.' },
  { k: 'Built to last', v: `Building tomorrow's landmarks, today.` },
];

export default function About() {
  const { ref: imgWrapRef, y } = useParallax<HTMLDivElement>(90);

  return (
    <section id="studio" className="bg-ivory py-24 text-ink md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div
          ref={imgWrapRef}
          className="relative order-2 h-[420px] overflow-hidden rounded-xl md:h-[560px] lg:order-1"
        >
          <motion.img
            style={{ y }}
            src="/images/studio.jpg"
            alt="Instyle Architect studio interior"
            loading="lazy"
            className="absolute inset-0 h-[125%] w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 rounded-lg bg-ink/85 px-6 py-5 backdrop-blur">
            <div className="font-display text-3xl font-light text-ivory">Est. 2007</div>
            <div className="mt-1 text-xs uppercase tracking-widest2 text-bronze">
              Chennai Studio
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow mb-6">The Studio</span>
          <RevealText
            as="h2"
            lines={['One team, from', 'sketch to structure.']}
            className="font-display text-display-md font-light text-ink"
          />
          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-ink/60 md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            Instyle Architect was founded on a simple idea: the people who design a building should
            be the people who build it. We unite architecture, interiors and construction under one
            studio, so vision never gets lost in translation between drawing and site.
          </motion.p>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div
                key={p.k}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i}
              >
                <div className="font-display text-xl text-ink">{p.k}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{p.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
