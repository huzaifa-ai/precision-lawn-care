'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useInView, animate } from 'framer-motion';
import { useEffect } from 'react';

const text =
  'We treat every lawn like it is our own. One owner, one standard, zero shortcuts — so your yard looks sharp from the first cut of spring to the last snowfall of winter.';

function Word({ w, range, p }: { w: string; range: [number, number]; p: MotionValue<number> }) {
  const op = useTransform(p, range, [0.12, 1]);
  const y = useTransform(p, range, [8, 0]);
  return <motion.span style={{ opacity: op, y }} className="mr-[0.25em] inline-block">{w}</motion.span>;
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const c = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; } });
    return () => c.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const ws = text.split(' ');
  return (
    <section className="relative overflow-hidden bg-[#07170f] py-28 text-white lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/10 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-accent">Our promise</p>
        <div ref={ref} className="font-jakarta text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.7rem]">
          {ws.map((w, i) => (
            <Word key={i} w={w} p={scrollYProgress} range={[i / ws.length, (i + 1) / ws.length]} />
          ))}
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {[
            { n: 100, s: '%', l: 'Owner-operated' },
            { n: 4, s: '', l: 'Seasons of service' },
            { n: 5, s: '', l: 'Core services' },
            { n: 1, s: '', l: 'Direct line to the owner' },
          ].map((x) => (
            <div key={x.l} className="bg-[#07170f] p-8">
              <p className="font-jakarta text-5xl font-extrabold text-accent">
                <Counter to={x.n} suffix={x.s} />
              </p>
              <p className="mt-2 text-sm text-white/60">{x.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
