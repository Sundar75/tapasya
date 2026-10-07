import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import '@/styles/animations.css';
import { SITE } from '@/config/site';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { TemplePattern } from '@/components/layout/TemplePattern';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', display: 'swap', weight: ['400', '500', '600'] });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = { title: { default: SITE.name, template: `%s | ${SITE.name}` }, description: SITE.description, metadataBase: SITE.url ? new URL(SITE.url) : undefined, openGraph: { title: SITE.name, description: SITE.description, images: SITE.url ? [SITE.ogImage] : undefined, type: 'website' } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}><body className="min-h-screen"><TemplePattern /><Navbar /><main className="relative z-10 min-h-screen pt-[76px]">{children}</main><Footer /></body></html>;
}
