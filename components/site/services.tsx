'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

type Service = {
  title: string;
  blurb: string;
  points: string[];
  image: string;
  alt: string;
  tag: string;
};

const services: Service[] = [
  {
    title: 'Lawn Care & Regular Maintenance',
    blurb:
      'Weekly or bi-weekly mowing, edging and trimming to keep your lawn looking sharp all season long.',
    points: ['Mowing & edging', 'Trimming around beds', 'Tidy clippings'],
    image:
      'https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Freshly mowed lush green lawn on a sunny day',
    tag: 'Most popular',
  },
  {
    title: 'Yard Cleaning & Maintenance',
    blurb:
      'Garden bed care, weeding, hedge trimming and general upkeep so your whole property stays in shape.',
    points: ['Weeding & bed care', 'Hedge & shrub trimming', 'Debris hauling'],
    image:
      'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Beautifully maintained garden with vibrant greenery',
    tag: 'Recurring',
  },
  {
    title: 'Leaf Removal',
    blurb:
      'Clear out fallen leaves before they smother your grass — bagged, hauled and hedges blown clean.',
    points: ['Full property cleanup', 'Bagging & hauling', 'Beds & walkways cleared'],
    image:
      'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Golden autumn leaves covering a green lawn',
    tag: 'Autumn',
  },
  {
    title: 'Spring & Fall Cleanups',
    blurb:
      'Seasonal deep cleanups that reset your yard after winter or prep it before the snow flies.',
    points: ['Debris & branch removal', 'Bed refresh & mulch', 'Lawn prep'],
    image:
      'https://images.pexels.com/photos/18928315/pexels-photo-18928315.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Worker raking autumn leaves during a seasonal cleanup',
    tag: 'Seasonal',
  },
  {
    title: 'Snow Removal',
    blurb:
      'Reliable driveway, walkway and entrance clearing so you can get out safely after every storm.',
    points: ['Driveway clearing', 'Walkways & steps', 'Salting available'],
    image:
      'https://images.pexels.com/photos/6952503/pexels-photo-6952503.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Person clearing snow with a shovel from a driveway',
    tag: 'Winter',
  },
];

const themes = [
  { bg: 'bg-[#0d2a1c]', fg: 'text-white', sub: 'text-white/70', chip: 'bg-accent text-accent-foreground' },
  { bg: 'bg-accent', fg: 'text-[#07170f]', sub: 'text-[#07170f]/70', chip: 'bg-[#07170f] text-white' },
  { bg: 'bg-[#f4efe4]', fg: 'text-[#07170f]', sub: 'text-[#07170f]/65', chip: 'bg-[#c2621d] text-white' },
  { bg: 'bg-[#163d2a]', fg: 'text-white', sub: 'text-white/70', chip: 'bg-white text-[#07170f]' },
  { bg: 'bg-[#e8f1f5]', fg: 'text-[#0b2233]', sub: 'text-[#0b2233]/65', chip: 'bg-[#0b2233] text-white' },
];

function Card({ s, i, total, progress }: { s: Service; i: number; total: number; progress: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const rot = useTransform(scrollYProgress, [0, 1], [i % 2 ? 4 : -4, 0]);
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - i) * 0.04]);
  const dim = useTransform(progress, [i / total, 1], [0, i === total - 1 ? 0 : 0.35]);
  const t = themes[i % themes.length];
  return (
    <div ref={ref} className="sticky top-0 flex h-[100svh] items-center justify-center px-4">
      <motion.article
        style={{ scale, rotate: rot, top: `calc(-4vh + ${i * 26}px)` }}
        className={`relative grid h-[78svh] max-h-[640px] w-full max-w-6xl origin-top overflow-hidden rounded-[2.25rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] md:grid-cols-[1.05fr_1fr] ${t.bg}`}
      >
        <div className={`flex flex-col justify-between p-7 sm:p-10 lg:p-12 ${t.fg}`}>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-jakarta text-sm font-bold opacity-60">0{i + 1} / 0{total}</span>
              <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${t.chip}`}>{s.tag}</span>
            </div>
            <h3 className="mt-6 font-jakarta text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">{s.title}</h3>
            <p className={`mt-4 max-w-md text-base leading-relaxed ${t.sub}`}>{s.blurb}</p>
          </div>
          <div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-1.5 rounded-full border border-current/20 px-3.5 py-2 text-sm font-medium" style={{ borderColor: 'currentColor' }}>
                  <Check className="h-3.5 w-3.5" strokeWidth={3} /> <span className="opacity-90">{p}</span>
                </li>
              ))}
            </ul>
            <a href="#quote" className="group mt-7 inline-flex items-center gap-2 text-sm font-bold">
              Request this service
              <span className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 ${t.chip}`}>
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
        <div className="relative hidden overflow-hidden md:block">
          <motion.img style={{ scale: imgScale }} src={s.image} alt={s.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.article>
    </div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <section id="services" className="relative scroll-mt-20 bg-[#07170f] pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-white lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">What we do</p>
          <h2 className="mt-4 max-w-3xl font-jakarta text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Full-service yard care, <span className="text-white/40">every season.</span>
          </h2>
        </div>
        <a href="sms:+12508630059" className="w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-[#07170f]">
          Not sure? Text (250) 863-0059
        </a>
      </div>
      <div ref={ref} className="relative pb-[10vh]">
        {services.map((s, i) => (
          <Card key={s.title} s={s} i={i} total={services.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
