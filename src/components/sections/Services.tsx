import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';
import { fadeUp, viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="A studio that designs and delivers."
          intro="Four disciplines, one accountable team — so your project moves from idea to reality without the usual hand-offs."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-ivory/10 bg-ivory/10 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft md:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              custom={i}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-light text-ivory/15 transition-colors duration-500 group-hover:text-bronze/40">
                  0{i + 1}
                </span>
                <ArrowUpRight
                  className="h-6 w-6 -translate-y-1 translate-x-1 text-bronze opacity-0 transition-all duration-500 ease-luxe group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-light text-ivory md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-light md:text-base">
                {s.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-full border border-ivory/10 px-3 py-1 text-xs text-ivory/60"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
