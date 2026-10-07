'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ name: z.string().trim().min(2, 'Please enter your name.'), age: z.string().optional(), phone: z.string().trim().min(7, 'Please enter a valid phone number.'), email: z.string().trim().email('Please enter a valid email address.'), interest: z.enum(['Bharatanatyam', 'Carnatic music', 'Both']), message: z.string().trim().min(10, 'Please share a little more with us.') });
type FormValues = z.infer<typeof schema>;

const fieldClass = 'mt-2 w-full border-0 border-b border-primary/25 bg-transparent px-0 py-3 text-sm text-text placeholder:text-muted/70 focus:border-primary focus:outline-none';

export function EnquiryForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { interest: 'Bharatanatyam' } });
  const submit = (values: FormValues) => {
    // TODO: replace with server action
    console.log('Tapasya enquiry received', values);
    reset(values);
  };
  if (isSubmitSuccessful) return <div role="status" className="border border-accent bg-white/50 p-8"><p className="eyebrow">Thank you</p><h3 className="serif mt-3 text-4xl text-primary">Your note is with us.</h3><p className="mt-3 text-sm text-muted">We look forward to continuing the conversation.</p><button type="button" onClick={() => reset({ name: '', age: '', phone: '', email: '', interest: 'Bharatanatyam', message: '' })} className="mt-6 text-sm text-primary underline underline-offset-4">Send another enquiry</button></div>;
  return <form onSubmit={handleSubmit(submit)} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
    <label className="text-xs text-primary">Your name<input {...register('name')} autoComplete="name" placeholder="Name" className={fieldClass} />{errors.name && <span className="mt-1 block text-xs text-primary" role="alert">{errors.name.message}</span>}</label>
    <label className="text-xs text-primary">Age (if enrolling for yourself)<input {...register('age')} inputMode="numeric" placeholder="Age" className={fieldClass} /></label>
    <label className="text-xs text-primary">Phone<input {...register('phone')} autoComplete="tel" inputMode="tel" placeholder="Phone number" className={fieldClass} />{errors.phone && <span className="mt-1 block text-xs text-primary" role="alert">{errors.phone.message}</span>}</label>
    <label className="text-xs text-primary">Email<input {...register('email')} autoComplete="email" type="email" placeholder="Email address" className={fieldClass} />{errors.email && <span className="mt-1 block text-xs text-primary" role="alert">{errors.email.message}</span>}</label>
    <label className="text-xs text-primary sm:col-span-2">I am interested in<select {...register('interest')} className={fieldClass}><option>Bharatanatyam</option><option>Carnatic music</option><option>Both</option></select></label>
    <label className="text-xs text-primary sm:col-span-2">A little about what brings you here<textarea {...register('message')} rows={4} placeholder="Your note" className={`${fieldClass} resize-y`} />{errors.message && <span className="mt-1 block text-xs text-primary" role="alert">{errors.message.message}</span>}</label>
    <button type="submit" className="inline-flex w-fit items-center gap-4 border-b border-primary pb-3 text-sm font-medium text-primary transition-colors hover:text-muted">Send your enquiry <span aria-hidden="true">↗</span></button>
  </form>;
}
