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
import Team from './components/sections/Team';
import CtaBand from './components/sections/CtaBand';
import Contact from './components/sections/Contact';
import Marquee from './components/ui/Marquee';

const awards = [
  'IIA Awards',
  'A+D & Spectrum',
  'AD100 India',
  'IGBC Green Certified',
  'NDTV Design & Architecture',
  'JK AYA Awards',
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
        <div className="bg-ivory">
          <Marquee items={awards} />
        </div>
        <Team />
        <CtaBand />
        <Contact selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
