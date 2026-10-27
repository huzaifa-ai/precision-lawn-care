'use client';

import { MapPin, Check } from 'lucide-react';

const areas = [
  'West Kelowna',
  'Peachland',
  'Westbank First Nation',
  'Glenrosa',
  'Rose Valley',
  'Shannon Lake',
  'Lakeview Heights',
  'Boucherie',
];

export function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      {/* Okanagan background image, low opacity */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/14821762/pexels-photo-14821762.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-accent">
              <MapPin className="h-4 w-4" strokeWidth={2.5} />
              Service Area
            </p>
            <h2 className="mt-3 font-jakarta text-3xl font-extrabold sm:text-4xl lg:text-5xl text-balance">
              Proudly serving West Kelowna &amp; the surrounding area
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Based right here in West Kelowna, Brady keeps it close to home so
              response times stay quick and scheduling stays flexible. If
              you&apos;re nearby and not on the list, just ask — he&apos;ll let
              you know if your property can be covered.
            </p>
          </div>

          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-2">
            {areas.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}