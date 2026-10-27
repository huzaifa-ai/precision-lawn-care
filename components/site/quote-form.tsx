'use client';

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Check,
  X,
  Upload,
  Image as ImageIcon,
  Send,
  CheckCircle2,
  AlertCircle,
  Trash2,
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'Lawn care & maintenance',
  'Yard cleaning',
  'Leaf removal',
  'Spring cleanup',
  'Fall cleanup',
  'Snow removal',
  'Other / not sure',
];

const LOT_SIZES = ['Small yard', 'Average yard', 'Large yard', 'Acreage / rural', 'Not sure'];

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  services: string[];
  frequency: 'one-time' | 'recurring' | '';
  lotSize: string;
  date: string;
  notes: string;
};

const initial: FormState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  services: [],
  frequency: '',
  lotSize: '',
  date: '',
  notes: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(v: FormState): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.phone.trim()) {
    e.phone = 'A phone number is required.';
  } else if (v.phone.replace(/[^0-9]/g, '').length < 10) {
    e.phone = 'Please enter a full phone number.';
  }
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
    e.email = 'Enter a valid email, or leave blank.';
  }
  if (!v.address.trim()) e.address = 'Property address helps us quote accurately.';
  if (v.services.length === 0) e.services = 'Select at least one service.';
  if (!v.frequency) e.frequency = 'Choose one-time or recurring.';
  return e;
}

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [photos, setPhotos] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...form, [key]: value }));
    }
  }

  function handleFiles(files: FileList | null) {
    if (!files) return;
    const next: string[] = [];
    Array.from(files)
      .filter((f) => f.type.startsWith('image/'))
      .slice(0, 6 - photos.length)
      .forEach((f) => {
        next.push(URL.createObjectURL(f));
      });
    if (next.length) setPhotos((p) => [...p, ...next]);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  function toggleService(s: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({
      name: true,
      phone: true,
      email: true,
      address: true,
      services: true,
      frequency: true,
    });
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  function reset() {
    photos.forEach((p) => URL.revokeObjectURL(p));
    setForm(initial);
    setErrors({});
    setTouched({});
    setPhotos([]);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-lg sm:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-primary">
          <CheckCircle2 className="h-8 w-8" strokeWidth={2.25} />
        </span>
        <h3 className="mt-5 font-jakarta text-2xl font-bold text-primary">
          Quote request ready to send!
        </h3>
        <p className="mt-3 text-muted-foreground">
          This is a preview of what Brady would receive. In the live site, this
          form will text or email your details straight to the owner.
        </p>

        <dl className="mt-6 space-y-2 rounded-2xl bg-secondary/40 p-5 text-left text-sm">
          <Row label="Name" value={form.name} />
          <Row label="Phone" value={form.phone} />
          {form.email && <Row label="Email" value={form.email} />}
          <Row label="Address" value={form.address} />
          <Row label="Services" value={form.services.join(', ')} />
          <Row label="Frequency" value={form.frequency === 'one-time' ? 'One-time' : 'Recurring'} />
          {form.lotSize && <Row label="Lot size" value={form.lotSize} />}
          {form.date && <Row label="Preferred date" value={form.date} />}
          {form.notes && <Row label="Notes" value={form.notes} />}
          {photos.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {photos.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`Yard preview ${i + 1}`}
                  className="h-16 w-16 rounded-lg object-cover ring-1 ring-border"
                />
              ))}
            </div>
          )}
        </dl>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="sms:+12508630059"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Send className="h-4 w-4" strokeWidth={2.5} />
            Send by text instead
          </a>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-secondary"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8 lg:p-10"
    >
      {/* Name */}
      <Field label="Your name" required error={touched.name && errors.name}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          placeholder="e.g. Jordan Smith"
          className="plc-input"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" required error={touched.phone && errors.phone}>
          <input
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="(250) 555-0000"
            className="plc-input"
          />
        </Field>
        <Field label="Email" error={touched.email && errors.email} hint="Optional">
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="you@example.com"
            className="plc-input"
          />
        </Field>
      </div>

      <Field label="Property address" required error={touched.address && errors.address}>
        <input
          type="text"
          value={form.address}
          onChange={(e) => update('address', e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, address: true }))}
          placeholder="Street address, West Kelowna"
          className="plc-input"
        />
      </Field>

      {/* Services */}
      <Field label="Which services do you need?" required error={touched.services && errors.services}>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((s) => {
            const active = form.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  toggleService(s);
                  setTouched((t) => ({ ...t, services: true }));
                }}
                className={`flex items-center gap-2 rounded-xl border-2 px-3.5 py-2.5 text-left text-sm font-medium transition-all ${
                  active
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border bg-white text-foreground/80 hover:border-primary/40 hover:bg-secondary/40'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                    active ? 'border-accent bg-accent text-accent-foreground' : 'border-muted-foreground/40'
                  }`}
                >
                  {active && <Check className="h-3.5 w-3.5" strokeWidth={3.5} />}
                </span>
                {s}
              </button>
            );
          })}
        </div>
      </Field>

      {/* Frequency */}
      <Field label="One-time or recurring?" required error={touched.frequency && errors.frequency}>
        <div className="grid grid-cols-2 gap-3">
          {(['one-time', 'recurring'] as const).map((f) => {
            const active = form.frequency === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  update('frequency', f);
                  setTouched((t) => ({ ...t, frequency: true }));
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold capitalize transition-all ${
                  active
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border bg-white text-foreground/80 hover:border-primary/40 hover:bg-secondary/40'
                }`}
              >
                {active && <Check className="h-4 w-4" strokeWidth={2.5} />}
                {f === 'one-time' ? 'One-time' : 'Recurring'}
              </button>
            );
          })}
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Approximate lot size">
          <select
            value={form.lotSize}
            onChange={(e) => update('lotSize', e.target.value)}
            className="plc-input"
          >
            <option value="">Select…</option>
            {LOT_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date">
          <input
            type="date"
            value={form.date}
            onChange={(e) => update('date', e.target.value)}
            className="plc-input"
          />
        </Field>
      </div>

      {/* Photo upload */}
      <Field label="Yard photos" hint="Optional · up to 6">
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-5 py-8 text-center transition-colors ${
            dragging ? 'border-accent bg-accent/10' : 'border-border bg-secondary/30 hover:border-primary/40'
          }`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Upload className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <p className="text-sm font-medium text-foreground">
            <span className="text-primary font-semibold">Tap to upload</span> or drag &amp; drop
          </p>
          <p className="text-xs text-muted-foreground">JPG, PNG · helps Brady quote accurately</p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
          />
        </div>

        {photos.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {photos.map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Yard preview ${i + 1}`} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    URL.revokeObjectURL(src);
                    setPhotos((p) => p.filter((_, idx) => idx !== i));
                  }}
                  className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label="Remove photo"
                >
                  <Trash2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        )}
      </Field>

      {/* Notes */}
      <Field label="Additional notes">
        <textarea
          value={form.notes}
          onChange={(e) => update('notes', e.target.value)}
          rows={4}
          placeholder="Anything else Brady should know — gate codes, slope, pets, access, etc."
          className="plc-input resize-y"
        />
      </Field>

      {Object.keys(errors).length > 0 && Object.values(touched).some(Boolean) && (
        <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
          <span>Please fix the highlighted fields above before submitting.</span>
        </div>
      )}

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-xl active:scale-[0.99]"
      >
        <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
        Request my free quote
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Frontend demo only — your details aren&apos;t sent or stored.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string | false;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-baseline justify-between">
        <label className="text-sm font-semibold text-foreground">
          {label}
          {required && <span className="ml-1 text-accent-foreground">*</span>}
        </label>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive">
          <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          {error}
        </p>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/60 pb-1.5 last:border-0">
      <dt className="font-medium text-muted-foreground">{label}</dt>
      <dd className="text-right font-semibold text-primary">{value}</dd>
    </div>
  );
}