import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '../../data/process';
import { EASE } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 65%', 'end 60%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="bg-ink-soft py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path from concept to keys."
          intro="Five disciplined stages keep your project transparent, on-budget and on-schedule — with a single point of accountability throughout."
        />

        <div ref={trackRef} className="relative mt-16 pl-8 md:pl-0">
          {/* Rail */}
          <div className="absolute bottom-0 left-8 top-0 w-px bg-ivory/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 top-0 w-px origin-top bg-bronze md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-14 md:gap-20">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.no}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                    left ? '' : 'md:[&>*:first-child]:col-start-2'
                  }`}
                >
                  {/* Node */}
                  <span className="absolute -left-8 top-1.5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border border-bronze bg-ink md:left-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  </span>

                  <motion.div
                    className={`${left ? 'md:pr-16 md:text-right' : 'md:pl-16 md:col-start-2'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: EASE }}
                  >
                    <span className="font-display text-sm text-bronze">{step.no}</span>
                    <h3 className="mt-2 font-display text-2xl font-light text-ivory md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-light md:text-base">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
