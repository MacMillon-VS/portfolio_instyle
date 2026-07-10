import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { pricing, calculatorRates } from '../../data/pricing';
import { fadeUp, viewportOnce } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

const FLOOR_LABELS = ['Ground', 'G+1', 'G+2', 'G+3', 'G+4', 'G+5'];
const calculatorPackages = pricing.filter((tier) => tier.calculatorEligible);

function formatRupees(value: number) {
  return `₹${Math.round(value).toLocaleString('en-IN')}`;
}

export default function CostCalculator() {
  const [floors, setFloors] = useState(1);
  const [packageId, setPackageId] = useState(calculatorPackages[0]?.id ?? '');
  const [floorAreas, setFloorAreas] = useState<number[]>(Array(FLOOR_LABELS.length).fill(0));
  const [sump, setSump] = useState(0);
  const [septic, setSeptic] = useState(0);
  const [compoundWall, setCompoundWall] = useState(0);

  const selectedPackage = calculatorPackages.find((tier) => tier.id === packageId) ?? calculatorPackages[0];

  const totalArea = useMemo(
    () => floorAreas.slice(0, floors).reduce((sum, area) => sum + area, 0),
    [floorAreas, floors]
  );

  const totalCost = useMemo(() => {
    if (!selectedPackage) return 0;
    const structureCost = totalArea * selectedPackage.rate;
    const sumpCost = sump * calculatorRates.sump;
    const septicCost = septic * calculatorRates.septic;
    const compoundCost = compoundWall * calculatorRates.compoundWall;
    return structureCost + sumpCost + septicCost + compoundCost;
  }, [totalArea, selectedPackage, sump, septic, compoundWall]);

  function updateFloorArea(index: number, value: number) {
    setFloorAreas((prev) => prev.map((area, i) => (i === index ? value : area)));
  }

  const belowMinimum = totalArea > 0 && totalArea < calculatorRates.minBuiltUpArea;

  return (
    <section id="calculator" className="bg-ink-soft py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Estimate"
          title="Home Construction Cost Calculator"
          intro="Get an instant, ballpark estimate. Pick a package, add your floor areas and extras — we’ll do the math."
          align="center"
        />

        <div className="mt-14 grid gap-8 rounded-2xl border border-ivory/10 bg-ink p-7 md:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-stone">Number of floors</label>
                <select
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="rounded-lg border border-ivory/12 bg-ink-soft px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-bronze"
                >
                  {FLOOR_LABELS.map((label, i) => (
                    <option key={label} value={i + 1}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-stone">Package</label>
                <select
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                  className="rounded-lg border border-ivory/12 bg-ink-soft px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-bronze"
                >
                  {calculatorPackages.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                      {tier.name} — {tier.price}/sq.ft
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {FLOOR_LABELS.slice(0, floors).map((label, i) => (
                <div key={label} className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-stone">
                    {label} built-up area (sq.ft)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={floorAreas[i] || ''}
                    onChange={(e) => updateFloorArea(i, Number(e.target.value))}
                    placeholder="0"
                    className="rounded-lg border border-ivory/12 bg-ink-soft px-4 py-3 text-sm text-ivory placeholder:text-stone/60 outline-none transition-colors focus:border-bronze"
                  />
                </div>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-stone">Sump capacity (litres)</label>
                <input
                  type="number"
                  min={0}
                  value={sump || ''}
                  onChange={(e) => setSump(Number(e.target.value))}
                  placeholder="0"
                  className="rounded-lg border border-ivory/12 bg-ink-soft px-4 py-3 text-sm text-ivory placeholder:text-stone/60 outline-none transition-colors focus:border-bronze"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-stone">Septic tank (litres)</label>
                <input
                  type="number"
                  min={0}
                  value={septic || ''}
                  onChange={(e) => setSeptic(Number(e.target.value))}
                  placeholder="0"
                  className="rounded-lg border border-ivory/12 bg-ink-soft px-4 py-3 text-sm text-ivory placeholder:text-stone/60 outline-none transition-colors focus:border-bronze"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-stone">Compound wall (sq.ft)</label>
                <input
                  type="number"
                  min={0}
                  value={compoundWall || ''}
                  onChange={(e) => setCompoundWall(Number(e.target.value))}
                  placeholder="0"
                  className="rounded-lg border border-ivory/12 bg-ink-soft px-4 py-3 text-sm text-ivory placeholder:text-stone/60 outline-none transition-colors focus:border-bronze"
                />
              </div>
            </div>

            {belowMinimum && (
              <p className="text-xs text-bronze">
                Minimum overall built-up area should be {calculatorRates.minBuiltUpArea.toLocaleString('en-IN')} sq.ft.
              </p>
            )}
          </div>

          <motion.div
            className="flex flex-col justify-center rounded-2xl border border-bronze/40 bg-gradient-to-b from-bronze/10 to-ink-soft p-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <span className="text-xs uppercase tracking-widest text-stone">Total construction cost</span>
            <span className="mt-3 font-display text-4xl font-light text-ivory md:text-5xl">
              {formatRupees(totalCost)}
            </span>
            <p className="mt-4 text-xs leading-relaxed text-stone-light">
              Built-up area: {totalArea.toLocaleString('en-IN')} sq.ft · {selectedPackage?.name} package
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-bronze px-7 py-3.5 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:bg-bronze-light"
            >
              Get an exact quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
