'use client';

import { Phone, MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Get in touch
          </p>
          <h2 className="mt-3 font-jakarta text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl text-balance">
            Let&apos;s get your yard on the schedule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Text is the fastest way to reach Brady. He&apos;ll reply and get you sorted out.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-5 md:grid-cols-3">
          {/* Text — primary */}
          <a
            href="sms:+12508630059"
            className="group relative overflow-hidden rounded-3xl bg-primary p-7 text-primary-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <MessageCircle className="h-6 w-6" strokeWidth={2.25} />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Text — fastest
            </p>
            <p className="mt-1 font-jakarta text-2xl font-bold">(250) 863-0059</p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Tap to send a text message now with your address &amp; what you need.
            </p>
            <span className="pointer-events-none absolute -bottom-6 -right-6 text-7xl text-accent/10">
              <MessageCircle className="h-20 w-20" />
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+12508630059"
            className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Phone className="h-6 w-6" strokeWidth={2.25} />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Call
            </p>
            <p className="mt-1 font-jakarta text-2xl font-bold text-primary">(250) 863-0059</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer to talk? Call the owner directly.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:bradypritchard92@gmail.com"
            className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Mail className="h-6 w-6" strokeWidth={2.25} />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Email
            </p>
            <p className="mt-1 font-jakarta text-lg font-bold text-primary break-all">
              bradypritchard92@gmail.com
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Great for sending photos or detailed requests.
            </p>
          </a>
        </div>

        {/* Service area strip */}
        <div className="reveal mt-6 flex items-center justify-center gap-2.5 rounded-2xl border border-border bg-secondary/30 px-6 py-4 text-center">
          <MapPin className="h-5 w-5 text-primary" strokeWidth={2.25} />
          <p className="text-sm font-medium text-foreground/85">
            Serving <span className="font-semibold text-primary">West Kelowna, BC</span> and nearby areas
          </p>
        </div>
      </div>
    </section>
  );
}