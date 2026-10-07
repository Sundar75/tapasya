import type { Metadata } from 'next';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '@/config/contact';
import { PageHero } from '@/components/layout/PageHero';
import { EnquiryForm } from '@/components/sections/EnquiryForm';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = { title: 'Sampark', description: 'Begin a conversation with Tapasya Kalashala about classes and practice.' };

export default function ContactPage() {
  return <><PageHero eyebrow="We would love to hear from you" title="Sampark" subtitle="Begin the conversation. Tell us what you would like to learn, and we will help you find your way in." />
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto grid max-w-[1296px] gap-14 md:grid-cols-[.72fr_1.28fr]"><Reveal><p className="eyebrow">Reach out</p><h2 className="serif mt-4 text-5xl text-primary">The first step<br />is a hello.</h2><div className="mt-10 space-y-7"><div className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center border border-accent text-primary"><Phone size={16}/></span><div><p className="text-xs text-muted">Guru</p><p className="serif mt-1 text-2xl text-primary">{CONTACT.guruName}</p><a href={`tel:${CONTACT.phone}`} className="mt-1 block text-sm text-text">+91 {CONTACT.phone}</a></div></div><a href={CONTACT.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary"><span className="grid size-10 place-items-center border border-accent"><Instagram size={17}/></span><span><span className="block text-xs text-muted">Find us on Instagram</span><span className="mt-1 block text-sm">{CONTACT.instagram.handle}</span></span></a><div className="flex items-center gap-4 text-primary"><span className="grid size-10 place-items-center border border-accent"><MapPin size={17}/></span><span><span className="block text-xs text-muted">Based in</span><span className="mt-1 block text-sm">{CONTACT.location}</span></span></div></div></Reveal><Reveal className="bg-white/70 p-6 md:p-10"><p className="eyebrow">Enquiries</p><h2 className="serif mb-8 mt-3 text-4xl text-primary">Tell us about your practice.</h2><EnquiryForm /></Reveal></div></section>
    <section aria-hidden="true" className="relative z-10 h-32 overflow-hidden bg-primary"><svg className="h-full w-full text-accent/60" viewBox="0 0 1440 128" preserveAspectRatio="xMidYMid slice"><defs><pattern id="kolam-band" width="96" height="96" patternUnits="userSpaceOnUse"><path d="M48 4 92 48 48 92 4 48Z M48 22 74 48 48 74 22 48Z" fill="none" stroke="currentColor" strokeWidth="1"/><circle cx="48" cy="48" r="3" fill="currentColor"/></pattern></defs><rect width="100%" height="100%" fill="url(#kolam-band)"/></svg></section>
  </>;
}
