import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';

export function ConnectCTA({ title = 'A practice begins with a conversation.', button = 'Begin your journey' }: { title?: string; button?: string }) {
  return <section className="relative z-10 overflow-hidden bg-primary px-6 py-20 text-surface md:px-12 md:py-28"><div className="absolute -right-12 -top-20 size-80 rounded-full border border-accent/20 md:right-[10%] md:size-[34rem]"/><Reveal className="relative mx-auto flex max-w-[1296px] flex-col items-start justify-between gap-9 md:flex-row md:items-end"><div><p className="eyebrow !text-accent">A place for your practice</p><h2 className="serif mt-5 max-w-3xl text-4xl leading-[1.05] md:text-5xl">{title}</h2></div><ButtonLink href="/sampark">{button}</ButtonLink></Reveal></section>;
}
