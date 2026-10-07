import type { Metadata } from 'next';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { TESTIMONIALS } from '@/config/achievements';
import { VIDEOS } from '@/config/gallery';
import { PageHero } from '@/components/layout/PageHero';
import { ImageGallery } from '@/components/media/ImageGallery';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = { title: 'Darshan', description: 'Moments from the practice room, stage and Tapasya Kalashala community.' };

export default function GalleryPage() {
  return <><PageHero eyebrow="Moments in the making" title="Darshan" subtitle="A glimpse of the practice, the performance and the people who bring this artspace to life." />
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1296px]"><Reveal><p className="eyebrow">In stillness and motion</p><h2 className="serif mt-4 mb-10 text-5xl text-primary md:text-6xl">The photo gallery</h2></Reveal><ImageGallery /></div></section>
    <section className="relative z-10 bg-white/65 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1296px]"><Reveal><p className="eyebrow">From the stage</p><h2 className="serif mt-4 text-5xl text-primary md:text-6xl">Moving images</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2">{VIDEOS.map((video) => <Reveal key={video.id}><article><div className="relative aspect-video overflow-hidden bg-primary"><Image src={video.poster} alt={video.description} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/><div className="absolute inset-0 grid place-items-center bg-primary/20"><span className="grid size-14 place-items-center rounded-full border border-surface text-surface"><Play aria-hidden="true" size={20} fill="currentColor" /></span></div>{video.src && <video src={video.src} poster={video.poster} controls preload="none" className="absolute inset-0 h-full w-full" />}</div><h3 className="serif mt-4 text-2xl text-primary">{video.title}</h3><p className="mt-1 text-sm text-muted">{video.description}</p></article></Reveal>)}</div></div></section>
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1296px]"><Reveal><p className="eyebrow">Words from our community</p><h2 className="serif mt-4 text-5xl text-primary md:text-6xl">Shared experience</h2></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2">{TESTIMONIALS.map((item) => <Reveal key={item.name}><figure className="border-t border-accent py-6"><blockquote className="serif max-w-[45ch] text-2xl leading-snug text-primary">“{item.quote}”</blockquote><figcaption className="mt-5 text-xs text-muted">{item.name}</figcaption></figure></Reveal>)}</div></div></section>
  </>;
}
