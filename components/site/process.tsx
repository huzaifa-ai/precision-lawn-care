'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MessageCircle, ClipboardCheck, Scissors, Repeat } from 'lucide-react';

const steps = [
  { icon: MessageCircle, t: 'Send a text', d: 'Describe your yard and what you need. Photos help — but aren’t required.', img: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { icon: ClipboardCheck, t: 'Get a fair quote', d: 'A clear, no-obligation price straight from the owner. No call centres.', img: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { icon: Scissors, t: 'We do the work', d: 'Precise mowing, edging, cleanups or clearing — done right, on schedule.', img: 'https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { icon: Repeat, t: 'Enjoy, repeat', d: 'Set up recurring visits and stop thinking about your yard altogether.', img: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=1200' },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  useLayoutEffect(() => {
    const m = () => track.current && setDist(track.current.scrollWidth - window.innerWidth);
    m();
    window.addEventListener('resize', m);
    return () => window.removeEventListener('resize', m);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const x = useTransform(p, [0, 1], [0, -dist]);
  const bar = useTransform(p, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} id="process" className="relative h-[380vh] bg-[#f4efe4]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-1 bg-[#07170f]/10">
          <motion.div style={{ width: bar }} className="h-full bg-accent" />
        </div>
        <motion.div ref={track} style={{ x }} className="flex w-max items-center gap-6 pl-5 pr-[10vw] lg:gap-8 lg:pl-[8vw]">
          <div className="w-[85vw] shrink-0 sm:w-[46vw] lg:w-[34vw]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c2621d]">How it works</p>
            <h2 className="mt-4 font-jakarta text-5xl font-extrabold leading-[0.98] tracking-tight text-[#07170f] sm:text-7xl">
              Four steps to a yard you’ll love.
            </h2>
            <p className="mt-6 max-w-sm text-[#07170f]/60">Keep scrolling — it really is this simple.</p>
          </div>
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 60, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="group relative h-[64svh] max-h-[560px] w-[80vw] shrink-0 overflow-hidden rounded-[2rem] bg-[#07170f] text-white shadow-2xl sm:w-[52vw] lg:w-[30vw]"
            >
              <img src={s.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07170f] via-[#07170f]/60 to-transparent" />
              <span className="absolute right-6 top-2 font-jakarta text-[9rem] font-extrabold leading-none text-white/10">{i + 1}</span>
              <div className="relative flex h-full flex-col justify-end p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-jakarta text-3xl font-extrabold">{s.t}</h3>
                <p className="mt-2 text-white/70">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
