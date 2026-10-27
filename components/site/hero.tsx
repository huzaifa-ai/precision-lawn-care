'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MessageCircle, ArrowDown, MapPin, Star, Leaf, Snowflake, Sparkles } from 'lucide-react';

const words = ['Lawns', 'that', 'make', 'the', 'whole', 'street', 'look', 'twice.'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  const imgY = useTransform(p, [0, 0.7], ['42vh', '0vh']);
  const imgScale = useTransform(p, [0, 0.7], [0.68, 1]);
  const radius = useTransform(p, [0, 0.7], [36, 0]);
  const innerScale = useTransform(p, [0, 1], [1.35, 1]);
  const headY = useTransform(p, [0, 0.5], [0, -140]);
  const headOp = useTransform(p, [0, 0.4], [1, 0]);
  const overlayOp = useTransform(p, [0.55, 0.85], [0, 1]);
  const overlayY = useTransform(p, [0.55, 0.9], [60, 0]);
  const leftY = useTransform(p, [0, 1], [0, -520]);
  const leftR = useTransform(p, [0, 1], [-8, 14]);
  const rightY = useTransform(p, [0, 1], [0, -760]);
  const rightR = useTransform(p, [0, 1], [6, -18]);

  return (
    <section ref={ref} id="top" className="relative h-[260vh] bg-[#07170f]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.07]" />

        {/* headline */}
        <motion.div style={{ y: headY, opacity: headOp }} className="relative z-10 mx-auto max-w-6xl px-5 pt-32 text-center sm:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            West Kelowna, BC · Owner-Operated
          </motion.div>
          <h1 className="mx-auto mt-6 max-w-5xl font-jakarta text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.6rem]">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  initial={{ y: '110%', rotate: 6 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${i >= 5 ? 'bg-gradient-to-r from-accent via-lime-200 to-emerald-300 bg-clip-text text-transparent' : ''}`}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg"
          >
            Precision lawn care, cleanups &amp; snow removal — handled personally by the owner, every single visit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="sms:+12508630059" className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-[0_0_40px_-5px] shadow-accent/60 transition-transform active:scale-95">
              <span className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> Text for a Free Quote
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Explore Services <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* floating chips */}
        <motion.div style={{ y: leftY, rotate: leftR }} className="absolute left-[4%] top-[58%] z-20 hidden w-56 rounded-3xl border border-white/10 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl lg:block">
          <div className="flex gap-0.5 text-accent">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
          <p className="mt-3 text-sm leading-snug text-white/85">&ldquo;Best our yard has ever looked. Always on time.&rdquo;</p>
          <p className="mt-2 text-xs text-white/50">Local homeowner</p>
        </motion.div>
        <motion.div style={{ y: rightY, rotate: rightR }} className="absolute right-[5%] top-[52%] z-20 hidden w-52 rounded-3xl bg-accent p-5 text-accent-foreground shadow-2xl shadow-accent/30 lg:block">
          <Sparkles className="h-6 w-6" />
          <p className="mt-4 font-jakarta text-4xl font-extrabold">4</p>
          <p className="text-sm font-semibold">seasons covered, one trusted crew.</p>
        </motion.div>

        {/* expanding image */}
        <motion.div style={{ y: imgY, scale: imgScale, borderRadius: radius }} className="absolute inset-0 z-[15] origin-top overflow-hidden shadow-[0_-40px_120px_-20px_rgba(0,0,0,0.6)]">
          <motion.div
            style={{ scale: innerScale, backgroundImage: "url('https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
            className="absolute inset-0 bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07170f] via-[#07170f]/30 to-transparent" />
          <motion.div style={{ opacity: overlayOp, y: overlayY }} className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-14 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <h2 className="max-w-2xl font-jakarta text-4xl font-extrabold leading-[1.02] text-white sm:text-6xl">
              Precision in <span className="text-accent">every blade.</span>
            </h2>
            <div className="flex gap-3">
              {[{ i: Leaf, l: 'Lawn & yard' }, { i: Sparkles, l: 'Cleanups' }, { i: Snowflake, l: 'Snow' }].map(({ i: Icon, l }) => (
                <div key={l} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-2 text-xs font-semibold">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
