import { site } from '../../data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ivory/10 bg-ink">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 font-display text-2xl text-ivory">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-bronze font-sans text-sm font-bold text-ink">
                I
              </span>
              Instyle Architect
            </a>
            <p className="mt-5 text-sm leading-relaxed text-stone-light">
              A design-led architecture and construction studio building bold, timeless spaces —
              from first sketch to handover of the keys.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-stone">Explore</h4>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-sm text-ivory/75 hover:text-ivory">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-stone">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline hover:text-ivory">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="link-underline hover:text-ivory">
                  {site.phone}
                </a>
              </li>
              <li className="text-stone-light">{site.address}</li>
            </ul>
            <ul className="mt-6 flex gap-5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-widest text-stone transition-colors hover:text-bronze"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-stone md:flex-row md:items-center">
          <p>© {year} Instyle Architect. All rights reserved.</p>
          <p>Design & build studio · Chennai, Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
