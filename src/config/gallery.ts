export const GALLERY = [
  { id: 'movement', category: 'Dance', src: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=85', alt: 'A dancer moving through a warm pool of stage light', width: 800, height: 1100 },
  { id: 'practice', category: 'Practice', src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=85', alt: 'A performer on stage in a moment of stillness', width: 1000, height: 800 },
  { id: 'music', category: 'Music', src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85', alt: 'A musician holding a string instrument', width: 800, height: 1000 },
  { id: 'stage', category: 'Performance', src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85', alt: 'A theatrical performance framed by stage lighting', width: 1100, height: 800 },
  { id: 'gesture', category: 'Abhinaya', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85', alt: 'An expressive portrait in warm light', width: 800, height: 1000 },
] as const;

export const VIDEOS = [
  { id: 'classroom', title: 'A moment in the practice room', poster: GALLERY[1].src, src: '', description: 'A glimpse of students learning together.' },
  { id: 'performance', title: 'An offering on stage', poster: GALLERY[3].src, src: '', description: 'Performance footage will be shared here.' },
] as const;
