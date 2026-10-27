'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Asterisk } from 'lucide-react';

const items = ['Lawn Care', 'Yard Maintenance', 'Leaf Removal', 'Spring Cleanups', 'Fall Cleanups', 'Snow Removal', 'Hedge Trimming'];

function Row({ x, dark }: { x: any; dark?: boolean }) {
  const list = [...items, ...items, ...items];
  return (
    <motion.div style={{ x }} className={`flex w-max gap-10 whitespace-nowrap py-5 ${dark ? 'bg-[#07170f] text-white' : 'bg-accent text-accent-foreground'}`}>
      {list.map((t, i) => (
        <span key={i} className="flex items-center gap-10 font-jakarta text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
          {t}
          <Asterisk className={`h-8 w-8 ${dark ? 'text-accent' : 'text-[#07170f]'}`} strokeWidth={3} />
        </span>
      ))}
    </motion.div>
  );
}

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-35%', '0%']);
  return (
    <div ref={ref} className="relative overflow-hidden bg-[#07170f] py-16">
      <div className="-rotate-2 scale-105"><Row x={x1} /></div>
      <div className="rotate-1 scale-105 -mt-2"><Row x={x2} dark /></div>
    </div>
  );
}
