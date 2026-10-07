'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_ITEMS, SITE } from '@/config/site';

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  return <header className="fixed inset-x-0 top-0 z-nav border-b border-primary/10 bg-surface/90 backdrop-blur-md">
    <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12">
      <Link href="/" onClick={() => setOpen(false)} className="serif text-2xl leading-none text-primary md:text-[1.8rem]">{SITE.name}</Link>
      <div className="hidden items-center gap-8 lg:flex">{NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} className={`relative py-2 text-[13px] ${path === item.href ? 'text-primary' : 'text-text/75 hover:text-primary'}`}><span>{item.label}</span>{path === item.href && <span className="absolute inset-x-0 -bottom-1 h-px bg-accent" />}</Link>)}</div>
      <button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="relative z-modal grid size-11 place-items-center text-primary lg:hidden">{open ? <X /> : <Menu />}</button>
    </nav>
    <AnimatePresence>{open && <motion.div initial={reduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, x: 24 }} transition={{ duration: reduceMotion ? 0 : .25 }} className="fixed inset-0 z-[99] flex flex-col justify-center bg-surface px-8 pt-20 lg:hidden"><nav aria-label="Mobile navigation" className="mx-auto w-full max-w-lg">{NAV_ITEMS.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`flex items-baseline justify-between border-b border-primary/15 py-4 ${path === item.href ? 'text-primary' : 'text-text'}`}><span className="serif text-4xl">{item.label}</span><span className="text-xs text-muted">0{index + 1}</span></Link>)}</nav></motion.div>}</AnimatePresence>
  </header>;
}
