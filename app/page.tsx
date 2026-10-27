'use client';

import { useReveal } from '../hooks/use-reveal';
import { SmoothScroll } from '../components/motion/smooth-scroll';
import { Navbar } from '../components/site/navbar';
import { Hero } from '../components/site/hero';
import { Marquee } from '../components/site/marquee';
import { Statement } from '../components/site/statement';
import { Services } from '../components/site/services';
import { Process } from '../components/site/process';
import { SeasonalBanner } from '../components/site/seasonal-banner';
import { About } from '../components/site/about';
import { ServiceArea } from '../components/site/service-area';
import { Quote } from '../components/site/quote';
import { Contact } from '../components/site/contact';
import { Footer } from '../components/site/footer';

export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen bg-background">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Marquee />
      <Statement />
      <Services />
      <Process />
      <SeasonalBanner />
      <About />
      <ServiceArea />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
