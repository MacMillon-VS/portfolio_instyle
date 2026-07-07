import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { site } from '../../data/site';
import { EASE } from '../../lib/motion';
import { lockScroll, unlockScroll } from '../../lib/lenis';
import instyleLogo from '../../assests/instyle_logo.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    lockScroll();
    return () => unlockScroll();
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
          scrolled
            ? 'border-b border-ivory/10 bg-ink/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-x flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl tracking-tight text-ivory">
            <img src={instyleLogo} alt="Instyle Architect" className="h-8 w-8 rounded-md object-cover" />
            <span className="font-medium">Instyle</span>
            <span className="font-light text-stone">Architect</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline text-sm text-ivory/75 transition-colors hover:text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-bronze px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-500 ease-luxe hover:bg-bronze-light"
            >
              Start a project
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 text-ivory lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="container-x flex h-20 items-center justify-between">
              <span className="font-display text-xl text-ivory">Instyle Architect</span>
              <button
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 text-ivory"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <motion.ul
              className="container-x mt-10 flex flex-col gap-2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            >
              {site.nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ivory/10 py-5 font-display text-4xl font-light text-ivory"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-x mt-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-7 py-4 font-medium text-ink"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
