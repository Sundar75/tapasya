const securityPolicy = ["default-src 'self'", "img-src 'self' https://images.unsplash.com data:", "font-src 'self' https://fonts.gstatic.com", "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", "script-src 'self' 'unsafe-inline' 'unsafe-eval'", "connect-src 'self'", "media-src 'self'", "frame-ancestors 'none'", "base-uri 'self'", "form-action 'self'"].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
  async headers() {
    return [{ source: '/(.*)', headers: [{ key: 'Content-Security-Policy', value: securityPolicy }, { key: 'X-Frame-Options', value: 'DENY' }, { key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }] }];
  },
};

export default nextConfig;
