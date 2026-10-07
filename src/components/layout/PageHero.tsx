import type { PageHeroProps } from '@/types';

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return <section className="relative z-10 flex min-h-[430px] items-end overflow-hidden bg-primary px-6 pb-16 pt-36 text-surface md:min-h-[480px] md:px-12 md:pb-20"><div className="absolute -right-12 top-20 size-72 rounded-full border border-accent/30 md:right-[12%] md:size-[26rem]"/><div className="absolute right-10 top-32 size-56 rounded-full border border-accent/20 md:right-[18%] md:top-44 md:size-[19rem]"/><div className="relative mx-auto w-full max-w-[1296px]"><p className="mb-6 text-sm text-accent">{eyebrow}</p><h1 className="serif text-6xl leading-[.95] md:text-display">{title}</h1><p className="mt-7 max-w-xl text-sm text-surface/75 md:text-base">{subtitle}</p></div></section>;
}
