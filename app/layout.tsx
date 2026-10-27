import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Precision Lawn Care | Reliable Yard Care in West Kelowna, BC',
  description:
    'Owner-operated lawn care, yard maintenance, leaf removal, seasonal cleanups and snow removal in West Kelowna, BC. Text for a free quote today.',
  keywords: [
    'lawn care West Kelowna',
    'yard maintenance West Kelowna',
    'snow removal West Kelowna',
    'leaf removal West Kelowna',
    'lawn care Kelowna BC',
  ],
  openGraph: {
    title: 'Precision Lawn Care | Reliable Yard Care in West Kelowna, BC',
    description:
      'Owner-operated lawn care, yard maintenance, leaf removal, seasonal cleanups and snow removal in West Kelowna, BC.',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
