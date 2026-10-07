import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ButtonLink({ href, children, variant = 'light' }: { href: string; children: ReactNode; variant?: 'light' | 'dark' }) {
  return <Link href={href} className={cn('group inline-flex items-center gap-5 border-b pb-3 text-sm font-medium transition-colors', variant === 'light' ? 'border-accent text-surface hover:text-accent' : 'border-primary text-primary hover:text-muted')}><span>{children}</span><ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>;
}
