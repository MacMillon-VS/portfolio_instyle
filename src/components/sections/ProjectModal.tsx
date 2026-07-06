import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MapPin, Ruler, Calendar } from 'lucide-react';
import type { Project } from '../../data/projects';
import { EASE } from '../../lib/motion';
import { lockScroll, unlockScroll } from '../../lib/lenis';
import Button from '../ui/Button';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    lockScroll();
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockScroll();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            data-lenis-prevent
            className="relative h-full w-full overflow-y-auto overscroll-contain bg-ink-soft md:w-[62%] lg:w-[55%]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ivory/10 bg-ink-soft/90 px-6 py-5 backdrop-blur md:px-10">
              <span className="eyebrow">{project.category}</span>
              <button
                aria-label="Close"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-bronze hover:text-bronze"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="px-6 pb-16 pt-8 md:px-10">
              <h3 className="font-display text-4xl font-light text-ivory md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-light">
                {project.blurb}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-ivory/10 py-7 sm:grid-cols-3">
                <Meta icon={<Calendar className="h-4 w-4" />} label="Year" value={project.year} />
                <Meta icon={<MapPin className="h-4 w-4" />} label="Location" value={project.location} />
                <Meta icon={<Ruler className="h-4 w-4" />} label="Area" value={project.area} />
              </dl>
              <p className="mt-6 text-sm text-stone">
                <span className="text-ivory/60">Scope — </span>
                {project.scope}
              </p>

              <div className="mt-10 flex flex-col gap-5">
                {project.gallery.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`${project.title} view ${i + 1}`}
                    loading="lazy"
                    className="w-full rounded-lg object-cover"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.1 }}
                  />
                ))}
              </div>

              <div className="mt-12 rounded-xl border border-ivory/10 bg-ink p-8 text-center">
                <p className="font-display text-2xl font-light text-ivory">
                  Have a project like this in mind?
                </p>
                <div className="mt-5 flex justify-center">
                  <Button href="#contact" onClick={onClose}>
                    Start your project
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-xs uppercase tracking-widest text-bronze">
        {icon}
        {label}
      </dt>
      <dd className="mt-2 text-sm text-ivory">{value}</dd>
    </div>
  );
}
