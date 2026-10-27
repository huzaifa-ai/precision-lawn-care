'use client';

import { Leaf, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Leaf className="h-5 w-5 text-accent" strokeWidth={2.5} />
              </span>
              <div className="leading-none">
                <p className="font-jakarta text-base font-extrabold">Precision Lawn Care</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
                  West Kelowna, BC
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Owner-operated lawn, yard and seasonal property care you can rely on,
              from spring mowing to winter snow removal.
            </p>
            <a
              href="sms:+12508630059"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              Text for a free quote
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="font-jakarta text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li><a href="#services" className="transition-colors hover:text-accent">Lawn care & maintenance</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Yard cleaning</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Leaf removal</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Spring & fall cleanups</a></li>
              <li><a href="#services" className="transition-colors hover:text-accent">Snow removal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-jakarta text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="sms:+12508630059" className="flex items-center gap-2.5 text-primary-foreground/85 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
                  (250) 863-0059
                </a>
              </li>
              <li>
                <a href="mailto:bradypritchard92@gmail.com" className="flex items-center gap-2.5 break-all text-primary-foreground/85 transition-colors hover:text-accent">
                  <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
                  bradypritchard92@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-primary-foreground/85">
                <MapPin className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
                West Kelowna, BC
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Precision Lawn Care. All rights reserved.</p>
          <p>Owner-operated by Brady Pritchard · West Kelowna, British Columbia</p>
        </div>
      </div>
    </footer>
  );
}