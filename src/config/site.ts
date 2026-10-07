export const SITE = {
  name: 'Tapasya Kalashala',
  tagline: 'Where Devotion Meets Form',
  description: 'A classical artspace dedicated to Bharatanatyam and Carnatic Music, guided by Guru Swathi M Kumar.',
  url: '',
  ogImage: '/images/og-default.jpg',
} as const;

export const NAV_ITEMS = [
  { href: '/', label: 'Aarangu', meaning: 'The stage' },
  { href: '/our-story', label: 'Parampara', meaning: 'Lineage' },
  { href: '/sadhana', label: 'Sadhana', meaning: 'The practice' },
  { href: '/darshan', label: 'Darshan', meaning: 'Witness' },
  { href: '/sampark', label: 'Sampark', meaning: 'Connect' },
] as const;
