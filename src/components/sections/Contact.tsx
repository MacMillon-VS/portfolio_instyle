import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, MessageCircle, Loader2, Check } from 'lucide-react';
import { site } from '../../data/site';
import { pricing } from '../../data/pricing';
import { EASE, fadeUp, viewportOnce } from '../../lib/motion';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

interface Props {
  selectedPackage: string;
}

export default function Contact({ selectedPackage }: Props) {
  const [pkg, setPkg] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // Prefill package when a pricing CTA was clicked.
  useEffect(() => {
    if (selectedPackage) setPkg(selectedPackage);
  }, [selectedPackage]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (data.get('_gotcha')) return;

    setStatus('sending');

    // If EmailJS is configured, send there; otherwise fall back to mailto.
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      try {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
        form.reset();
        setPkg('');
        setStatus('sent');
      } catch {
        setStatus('error');
        setError('Something went wrong. Please email us directly.');
      }
    } else {
      const name = data.get('name');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nPackage: ${
          data.get('package') || '—'
        }\n\n${data.get('message')}`
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project enquiry — ${name}`
      )}&body=${body}`;
      setStatus('sent');
    }
  }

  const contactLinks = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Call', value: site.phone, href: `tel:${site.phoneHref}` },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Message us',
      href: `https://wa.me/${site.whatsapp}`,
    },
    { icon: MapPin, label: 'Studio', value: site.address, href: undefined },
  ];

  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Left — invitation + direct CTAs */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <span className="eyebrow mb-6">Start a Project</span>
          <h2 className="font-display text-display-md font-light text-ivory">
            Tell us what you
            <br />
            want to build.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone-light md:text-lg">
            Share a few details and we’ll get back within two business days with next steps and a
            clear proposal.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {contactLinks.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-xl border border-ivory/10 bg-ink-soft p-4 transition-colors duration-400 hover:border-bronze/50">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-bronze/15 text-bronze">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-stone">{label}</div>
                    <div className="truncate text-sm text-ivory">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="rounded-2xl border border-ivory/10 bg-ink-soft p-7 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {status === 'sent' ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-bronze text-ink">
                <Check className="h-7 w-7" strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-3xl font-light text-ivory">Thank you.</h3>
              <p className="mt-3 max-w-sm text-sm text-stone-light">
                {EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
                  ? 'Your message is on its way — we’ll be in touch shortly.'
                  : 'Your email draft is ready to send. We look forward to hearing from you.'}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-bronze link-underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" required placeholder="jane@email.com" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" placeholder="+918765243567" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="package" className="text-xs uppercase tracking-widest text-stone">
                    Interested in
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={pkg}
                    onChange={(e) => setPkg(e.target.value)}
                    className="rounded-lg border border-ivory/12 bg-ink px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-bronze"
                  >
                    <option value="">General enquiry</option>
                    {pricing.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-stone">
                  About your project <span className="text-bronze">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Location, project type, rough budget and timeline…"
                  className="resize-none rounded-lg border border-ivory/12 bg-ink px-4 py-3 text-sm text-ivory placeholder:text-stone/60 outline-none transition-colors focus:border-bronze"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-7 py-4 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:bg-bronze-light disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  'Send enquiry'
                )}
              </button>
              <p className="text-center text-xs text-stone">
                Prefer email? Write to{' '}
                <a href={`mailto:${site.email}`} className="text-bronze link-underline">
                  {site.email}
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-stone">
        {label} {required && <span className="text-bronze">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-ivory/12 bg-ink px-4 py-3 text-sm text-ivory placeholder:text-stone/60 outline-none transition-colors focus:border-bronze"
      />
    </div>
  );
}
