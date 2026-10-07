import type { Metadata } from 'next';
import Image from 'next/image';
import { Lamp, Flower2, Music2, Heart } from 'lucide-react';
import { GURU, MILESTONES } from '@/config/achievements';
import { PHILOSOPHY } from '@/config/philosophy';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ConnectCTA } from '@/components/sections/ConnectCTA';

export const metadata: Metadata = { title: 'Parampara', description: 'The lineage, values and guiding presence behind Tapasya Kalashala.' };
const valueIcons = [Flower2, Lamp, Music2, Heart];

export default function StoryPage() {
  return <><PageHero eyebrow="A living tradition" title="Parampara" subtitle="The lineage we receive, and the care with which we carry it forward." />
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-32"><div className="mx-auto grid max-w-[1296px] gap-10 md:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow">The lineage</p><h2 className="serif mt-5 max-w-sm text-5xl leading-[1.02] text-primary md:text-6xl">{PHILOSOPHY.lineageTitle}</h2></Reveal><div className="grid gap-x-12 gap-y-7 md:grid-cols-2">{PHILOSOPHY.lineage.map((paragraph) => <Reveal key={paragraph}><p className="text-sm leading-7 text-muted md:text-base">{paragraph}</p></Reveal>)}</div></div></section>
    <section className="relative z-10 bg-white/65 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto grid max-w-[1296px] gap-12 md:grid-cols-[.85fr_1.15fr] md:items-center"><Reveal className="relative mx-auto aspect-[4/5] w-full max-w-lg"><Image src={GURU.portrait} alt={GURU.alt} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover"/><span className="absolute -bottom-5 -right-5 -z-10 size-2/3 border border-accent"/></Reveal><Reveal><p className="eyebrow">Our guru</p><h2 className="serif mt-4 text-5xl text-primary md:text-6xl">{GURU.name}</h2><p className="mt-4 text-sm text-muted">{GURU.qualifications}</p>{GURU.bio.map((paragraph) => <p key={paragraph} className="mt-5 max-w-prose text-sm leading-7 text-muted md:text-base">{paragraph}</p>)}<blockquote className="serif mt-9 border-l border-accent pl-6 text-3xl italic text-primary">“{GURU.quote}”</blockquote></Reveal></div></section>
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1296px]"><Reveal><p className="eyebrow">What guides us</p><h2 className="serif mt-4 text-5xl text-primary md:text-6xl">Our values</h2></Reveal><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{PHILOSOPHY.values.map((value, index) => { const Icon = valueIcons[index]; return <Reveal key={value.title}><article className="border-t border-accent pt-6"><Icon aria-hidden="true" size={25} strokeWidth={1.2} className="text-primary"/><h3 className="serif mt-5 text-3xl text-primary">{value.title}</h3><p className="mt-3 text-sm text-muted">{value.copy}</p></article></Reveal>; })}</div></div></section>
    <section className="relative z-10 bg-primary px-6 py-20 text-surface md:px-12 md:py-28"><div className="mx-auto max-w-[980px]"><Reveal><p className="text-sm text-accent">A continuing journey</p><h2 className="serif mt-4 text-5xl md:text-6xl">Milestones</h2></Reveal><div className="relative mt-12 border-l border-accent/50 pl-7 md:pl-12">{MILESTONES.map((item) => <Reveal key={item.year}><article className="relative pb-10 last:pb-0"><span className="absolute -left-[2.05rem] top-1 size-2 rounded-full bg-accent md:-left-[3.1rem]"/><p className="text-xs text-accent">{item.year}</p><h3 className="serif mt-2 text-3xl">{item.title}</h3><p className="mt-2 text-sm text-surface/70">{item.copy}</p></article></Reveal>)}</div></div></section>
    <ConnectCTA title="Come practice with us." />
  </>;
}
