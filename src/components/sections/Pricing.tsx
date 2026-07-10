import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricing } from '../../data/pricing';
import { EASE } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

interface Props {
  onSelect: (pkg: string) => void;
}

export default function Pricing({ onSelect }: Props) {
  return (
    <section id="pricing" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Packages"
          title="Our Home Construction Packages"
          intro="Transparent, per-square-foot pricing across three build qualities — from smart essentials to fully architect-led delivery. Every project starts with a conversation and a fixed proposal — no surprises."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border p-8 md:p-9 ${
                tier.featured
                  ? 'border-bronze bg-gradient-to-b from-bronze/10 to-ink-soft lg:-translate-y-4 lg:scale-[1.02]'
                  : 'border-ivory/12 bg-ink-soft'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: tier.featured ? -16 : 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bronze px-4 py-1 text-xs font-medium uppercase tracking-widest text-ink">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-2xl font-light text-ivory">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-light">{tier.summary}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-light text-ivory">{tier.price}</span>
                <span className="text-sm text-stone">{tier.cadence}</span>
              </div>

              <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ivory/75">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        tier.featured ? 'text-bronze' : 'text-bronze/70'
                      }`}
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => onSelect(tier.name)}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-500 ease-luxe ${
                  tier.featured
                    ? 'bg-bronze text-ink hover:bg-bronze-light'
                    : 'border border-ivory/20 text-ivory hover:border-bronze hover:text-bronze'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone">
          Not sure which fits?{' '}
          <a href="#contact" onClick={() => onSelect('')} className="text-bronze link-underline">
            Tell us about your project
          </a>{' '}
          and we’ll recommend the right path.
        </p>
      </div>
    </section>
  );
}
