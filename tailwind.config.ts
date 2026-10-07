import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {
    colors: { primary: '#753127', surface: '#F7F4F2', accent: '#EDBD7B', text: '#1A0E0C', muted: '#8C7B6B' },
    fontFamily: { display: ['var(--font-cormorant)', 'Georgia', 'serif'], sans: ['var(--font-dm-sans)', 'Arial', 'sans-serif'] },
    fontSize: { xs: ['0.75rem', { lineHeight: '1.5' }], sm: ['0.875rem', { lineHeight: '1.6' }], base: ['1rem', { lineHeight: '1.75' }], lg: ['1.125rem', { lineHeight: '1.65' }], xl: ['1.25rem', { lineHeight: '1.4' }], '2xl': ['1.5rem', { lineHeight: '1.3' }], '3xl': ['2rem', { lineHeight: '1.2' }], '4xl': ['2.75rem', { lineHeight: '1.15' }], '5xl': ['3.5rem', { lineHeight: '1.1' }], display: ['clamp(3.5rem, 8vw, 7.5rem)', { lineHeight: '0.95' }] },
    maxWidth: { prose: '65ch' }, zIndex: { nav: '100', modal: '200' },
  } },
  plugins: [],
};
export default config;
