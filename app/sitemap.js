// app/sitemap.js
import { SITE_URL, UPDATED_ISO } from './lib/site';
import { blogList } from './lib/blogs';

export const dynamic = 'force-static';

export default function sitemap() {
  // Blog pages apni date khud blogs.js se lete hain: naya blog add karo to sitemap mein khud aa jata hai
  const latestBlogDate = blogList.map((b) => b.updated).sort().at(-1);

  // Static pages: date tab badlo jab us page ka content asal mein badle
  const pages = [
    { path: '', lastModified: UPDATED_ISO },
    { path: '/download', lastModified: '2026-10-24' },
    { path: '/blogs', lastModified: latestBlogDate },
    ...blogList.map((b) => ({ path: `/blogs/${b.slug}`, lastModified: b.updated })),
    { path: '/faqs', lastModified: '2026-10-24' },
    { path: '/about-us', lastModified: '2026-10-24' },
    { path: '/contact-us', lastModified: '2026-10-24' },
  ];

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: p.lastModified,
  }));
}