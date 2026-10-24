export const dynamic = 'force-static';
export default function sitemap() {
  const baseUrl = 'https://xonapp.net';

  // Date tab badlein jab us page ka content asal mein badle
  const pages = [
    { path: '', lastModified: '2026-10-24' },
    { path: '/download', lastModified: '2026-10-24' },
    { path: '/blogs', lastModified: '2026-10-24' },
    { path: '/blogs/xon-app-not-working', lastModified: '2026-10-24' },
    { path: '/blogs/xon-app-not-installing', lastModified: '2026-10-24' },
    { path: '/blogs/xon-apk-videos-not-playing', lastModified: '2026-10-24' },
    { path: '/faqs', lastModified: '2026-10-24' },
    { path: '/about-us', lastModified: '2026-10-24' },
    { path: '/contact-us', lastModified: '2026-10-24' },
  ];

  return pages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: p.lastModified,
  }));
}