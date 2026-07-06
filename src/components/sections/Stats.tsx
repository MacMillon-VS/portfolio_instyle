import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../data/team';
import { EASE } from '../../lib/motion';

function Counter({ value, decimals }: { value: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}

export default function Stats() {
  return (
    <section className="border-y border-ivory/10 bg-ink-soft">
      <div className="container-x grid grid-cols-2 gap-y-12 py-16 md:grid-cols-4 md:py-20">
        {stats.map((s, i) => {
          const decimals = s.value % 1 !== 0 ? 1 : 0;
          return (
            <motion.div
              key={s.label}
              className="flex flex-col items-center text-center md:items-start md:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <div className="font-display text-5xl font-light text-ivory md:text-6xl">
                <Counter value={s.value} decimals={decimals} />
                <span className="text-bronze">{s.suffix}</span>
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest2 text-stone">{s.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
