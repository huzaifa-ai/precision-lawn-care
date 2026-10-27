'use client';

import { ClipboardList, MessageSquare, Clock } from 'lucide-react';
import { QuoteForm } from './quote-form';

export function Quote() {
  return (
    <section id="quote" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column — pitch */}
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              <ClipboardList className="h-4 w-4" strokeWidth={2.5} />
              Get a quote
            </p>
            <h2 className="mt-3 font-jakarta text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl text-balance">
              Tell them about your yard
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Fill out the form with as much detail as you like and Brady will
              get back to you with a free, no-pressure quote. Photos of your
              property help a lot — feel free to snap a few.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                  <MessageSquare className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Prefer to text?</p>
                  <a href="sms:+12508630059" className="text-sm text-muted-foreground hover:text-primary">
                    Text (250) 863-0059
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                  <Clock className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Quick turnaround</p>
                  <p className="text-sm text-muted-foreground">Most quote requests answered same day.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="reveal">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}