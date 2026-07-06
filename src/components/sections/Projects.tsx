import { lazy, Suspense, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectFilters, type Project, type ProjectCategory } from '../../data/projects';
import { EASE } from '../../lib/motion';
import SectionHeading from '../ui/SectionHeading';

// Loaded on demand — keeps the modal (and its code) out of the initial bundle.
const ProjectModal = lazy(() => import('./ProjectModal'));

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const [active, setActive] = useState<Project | null>(null);
  // Only mount (and fetch) the modal chunk after the first open; keep it mounted
  // thereafter so its slide-out exit animation can play on close.
  const [everOpened, setEverOpened] = useState(false);

  const openProject = (p: Project) => {
    setActive(p);
    setEverOpened(true);
  };

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built to endure."
            intro="A cross-section of residential, commercial and interior projects — each designed and constructed in-house, start to finish."
          />

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 text-sm transition-all duration-400 ease-luxe ${
                  filter === f
                    ? 'border-bronze bg-bronze text-ink'
                    : 'border-ivory/15 text-ivory/70 hover:border-ivory/40 hover:text-ivory'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.button
                layout
                key={project.id}
                onClick={() => openProject(project)}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-ivory/10 bg-ink-soft text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.06 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-luxe group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-xs uppercase tracking-widest text-ivory backdrop-blur">
                    {project.category}
                  </span>
                  <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-bronze text-ink opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-light text-ivory">{project.title}</h3>
                    <p className="mt-1 text-sm text-stone">{project.location}</p>
                  </div>
                  <span className="pb-1 text-sm text-bronze">{project.year}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {everOpened && (
        <Suspense fallback={null}>
          <ProjectModal project={active} onClose={() => setActive(null)} />
        </Suspense>
      )}
    </section>
  );
}
