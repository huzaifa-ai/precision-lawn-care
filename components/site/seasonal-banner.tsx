'use client';

import { Snowflake, Leaf } from 'lucide-react';

export function SeasonalBanner() {
  return (
    <section className="relative overflow-hidden border-y border-primary/10 bg-primary text-primary-foreground">
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, hsl(78 70% 52%) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(200 60% 70%) 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Snowflake className="h-6 w-6 text-sky-200" strokeWidth={2.25} />
          </span>
          <div>
            <p className="font-jakarta text-lg font-bold sm:text-xl">
              Fall Cleanup &amp; Snow Removal Now Booking
            </p>
            <p className="text-sm text-primary-foreground/75">
              Leaves piling up or driveway buried? Brady has you covered this season.
            </p>
          </div>
        </div>
        <a
          href="#quote"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md transition-all hover:bg-accent/90 hover:shadow-lg active:scale-[0.98]"
        >
          <Leaf className="h-4 w-4" strokeWidth={2.5} />
          Book Seasonal Service
        </a>
      </div>
    </section>
  );
}