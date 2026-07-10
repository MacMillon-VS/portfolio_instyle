import { useState } from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Pricing from './components/sections/Pricing';
import CostCalculator from './components/sections/CostCalculator';
import Team from './components/sections/Team';
import CtaBand from './components/sections/CtaBand';
import Contact from './components/sections/Contact';
import Marquee from './components/ui/Marquee';

const brands = [
  "UltraTech Cement",
  "Agni TMT",
  "Havells",
  "Kohler",
  "Asian Paints",
  "Pulkit TMT",
  "Kajaria",
  "GM",
  "Hindware",
  "Saint-Gobain",
  "Somany",
  "JSW",
  "Dalmia",
  "Nippon Paints",
  "Cera",
  "Polycab",
  "RR Kabel"
];

export default function App() {
  // Shared so a Pricing "Get a quote" click prefills the Contact form.
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Services />
        <Process />
        <Pricing onSelect={setSelectedPackage} />
        <CostCalculator />
        <div className="border-b border-ink/10 bg-ivory py-14 md:py-20">
          <p className="text-center font-display text-2xl font-light text-ink md:text-3xl">
            We Build With The Best
          </p>
          <div className="mt-8">
            <Marquee items={brands} />
          </div>
        </div>
        <Team />
        <CtaBand />
        <Contact selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
