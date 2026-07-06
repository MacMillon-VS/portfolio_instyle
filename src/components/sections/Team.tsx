import { motion } from 'framer-motion';
import { team } from '../../data/team';
import { EASE } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

export default function Team() {
  return (
    <section className="bg-ivory py-24 text-ink md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The People"
          title="Architects and builders, together."
          intro="A tight, senior team that stays with your project from the first meeting to the final walkthrough."
          dark
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              className="group relative overflow-hidden rounded-xl bg-ink"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[900ms] ease-luxe group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-12">
                <h3 className="font-display text-xl font-light text-ivory">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-bronze">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
