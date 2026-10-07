import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { CONTACT } from '@/config/contact';
import { NAV_ITEMS, SITE } from '@/config/site';

export function Footer() {
  return <footer className="relative z-10 bg-primary text-surface"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-12 md:py-20">
    <div><Link href="/" className="serif text-3xl">{SITE.name}</Link><p className="mt-3 text-sm text-surface/75">{SITE.tagline}</p><p className="mt-10 text-xs text-surface/60">© 2026 Tapasya Kalashala</p></div>
    <div><p className="mb-5 text-sm font-medium text-accent">Explore</p><div className="grid grid-cols-2 gap-x-5 gap-y-3">{NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className="text-sm text-surface/85 hover:text-accent">{item.label}</Link>)}</div></div>
    <div><p className="mb-5 text-sm font-medium text-accent">Stay connected</p><a href={CONTACT.instagram.url} target="_blank" rel="noopener noreferrer" className="mb-4 flex items-center gap-2 text-sm text-surface/85 hover:text-accent"><Instagram size={16} />{CONTACT.instagram.handle}</a><a href={`tel:${CONTACT.phone}`} className="text-sm text-surface/85 hover:text-accent">+91 {CONTACT.phone}</a></div>
  </div></footer>;
}
