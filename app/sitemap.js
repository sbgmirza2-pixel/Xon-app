export default async function sitemap() {
  const baseUrl = 'https://xonapp.net/';

  // Static & Footer Pages
  const staticRoutes = [
    '',
    '/download',
    '/about-us',
    '/contact-us',
    '/disclaimer',
    '/privacy-policy',
    '/terms-and-conditions',
    '/dmca',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/download' ? 0.9 : 0.8,
  }));

  // Active Blog Slugs
  const blogSlugs = [
    'xon-apk-videos-not-playing',
    'xon-app-not-installing',
    'xon-app-not-working'
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}