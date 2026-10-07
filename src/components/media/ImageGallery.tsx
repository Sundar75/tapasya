'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY } from '@/config/gallery';

export function ImageGallery() {
  const [selected, setSelected] = useState<(typeof GALLERY)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => { const dialog = dialogRef.current; if (!dialog) return; if (selected && !dialog.open) dialog.showModal(); if (!selected && dialog.open) dialog.close(); }, [selected]);
  return <>
    <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3 md:gap-5">{GALLERY.map((image, index) => <button key={image.id} type="button" onClick={() => setSelected(image)} aria-label={`View ${image.category.toLowerCase()} photograph`} className={`group relative overflow-hidden text-left ${index === 0 || index === 3 ? 'row-span-2' : ''} ${index === 2 ? 'md:col-start-3 md:row-span-2' : ''}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/15"/><span className="absolute bottom-3 left-3 bg-surface/90 px-3 py-1 text-xs text-primary">{image.category}</span></button>)}</div>
    <dialog ref={dialogRef} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === dialogRef.current) setSelected(null); }} className="m-auto w-[min(92vw,1100px)] max-w-none bg-transparent p-0 backdrop:bg-text/90"><div className="relative aspect-[4/3] w-full bg-text"><button type="button" aria-label="Close image viewer" onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 grid size-11 place-items-center bg-surface text-primary"><X size={20} /></button>{selected && <Image src={selected.src} alt={selected.alt} fill sizes="92vw" className="object-contain"/>}</div>{selected && <p className="mt-3 text-center text-sm text-surface">{selected.alt}</p>}</dialog>
  </>;
}
