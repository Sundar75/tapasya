import type { Metadata } from 'next';
import Image from 'next/image';
import { CLASSES, CLASS_LOGISTICS } from '@/config/classes';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ConnectCTA } from '@/components/sections/ConnectCTA';

export const metadata: Metadata = { title: 'Sadhana', description: 'Explore Bharatanatyam and Carnatic music classes at Tapasya Kalashala.' };

export default function ClassesPage() {
  return <><PageHero eyebrow="Begin where you are" title="The Practice" subtitle="A steady path into classical movement and music, shaped around attention, curiosity and care." />
    {CLASSES.map((course, index) => <section key={course.id} className={`relative z-10 px-6 py-20 md:px-12 md:py-28 ${index === 1 ? 'bg-white/65' : ''}`}><div className={`mx-auto grid max-w-[1296px] gap-10 md:grid-cols-2 md:items-center md:gap-16 ${index === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}><Reveal className="relative aspect-[4/3] overflow-hidden"><Image src={course.image} alt={course.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></Reveal><Reveal><p className="eyebrow">Discipline 0{index + 1}</p><h2 className="serif mt-3 text-5xl text-primary md:text-6xl">{course.name}</h2><p className="serif mt-3 text-2xl italic text-muted">{course.pronunciation}</p><p className="mt-6 text-base text-text">{course.intro}</p>{course.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-muted">{paragraph}</p>)}<div className="mt-7 flex flex-wrap gap-2">{course.sequence.map((part) => <span key={part} className="border border-primary/20 px-3 py-2 text-xs text-primary">{part}</span>)}</div><dl className="mt-8 grid gap-4 border-t border-primary/15 pt-6 sm:grid-cols-2">{course.details.map((detail) => <div key={detail.label}><dt className="text-xs text-primary">{detail.label}</dt><dd className="mt-1 text-sm text-muted">{detail.value}</dd></div>)}</dl></Reveal></div></section>)}
    <section className="relative z-10 bg-surface px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1296px]"><Reveal><p className="eyebrow">The shape of a lesson</p><h2 className="serif mt-4 text-5xl text-primary">Format & logistics</h2></Reveal><div className="mt-10 grid gap-0 border-t border-primary/15 md:grid-cols-4">{CLASS_LOGISTICS.map((item) => <Reveal key={item.label}><article className="border-b border-primary/15 py-6 md:border-r md:px-6 md:first:pl-0"><h3 className="serif text-2xl text-primary">{item.label}</h3><p className="mt-2 text-sm text-muted">{item.value}</p></article></Reveal>)}</div></div></section>
    <ConnectCTA title="Ready to begin?" button="Ask about classes" />
  </>;
}
