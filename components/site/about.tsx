'use client';

import { Phone, MessageSquare, ShieldCheck, CalendarCheck, BadgeCheck } from 'lucide-react';

const points = [
  {
    icon: BadgeCheck,
    title: 'Owner-operated',
    body: 'Brady Pritchard runs every job himself — you work directly with the person doing the work.',
  },
  {
    icon: MessageSquare,
    title: 'Direct communication',
    body: 'Text or call the owner directly. No call centres, no runaround, no surprise sub-contractors.',
  },
  {
    icon: CalendarCheck,
    title: 'Reliable & on time',
    body: 'Scheduled visits that actually happen, with clear communication if anything changes.',
  },
  {
    icon: ShieldCheck,
    title: 'Free, fair quotes',
    body: 'Straightforward pricing with no obligation. You see the work and decide what fits.',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
              <img
                src="https://images.pexels.com/photos/9029162/pexels-photo-9029162.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Lawn care professional at work"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-2 hidden max-w-[230px] rounded-2xl border border-border bg-white p-5 shadow-lg sm:block">
              <p className="font-jakarta text-3xl font-extrabold text-primary">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Owner-operated, personally handled work.
              </p>
            </div>
            {/* decorative lime block */}
            <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-2xl bg-accent/30" />
          </div>

          {/* Copy */}
          <div className="reveal order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              About Precision Lawn Care
            </p>
            <h2 className="mt-3 font-jakarta text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl text-balance">
              Local. Hands-on. Dependable.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Precision Lawn Care is owned and operated by{' '}
              <span className="font-semibold text-primary">Brady Pritchard</span>, a
              West Kelowna local who personally handles every job. When you reach out,
              you talk straight to the owner — and the same person who gives you a quote
              is the one who shows up to do the work.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether it&apos;s a one-time cleanup or regular maintenance through the season,
              you get reliable, fairly priced service from someone who genuinely cares
              about how your property looks.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-3 rounded-2xl border border-border bg-secondary/30 p-4 transition-colors hover:bg-secondary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                    <p.icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <div>
                    <p className="font-semibold text-primary">{p.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="sms:+12508630059"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4" strokeWidth={2.5} />
                Text Brady
              </a>
              <a
                href="tel:+12508630059"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-secondary"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                (250) 863-0059
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}