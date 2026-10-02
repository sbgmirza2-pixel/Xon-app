export default async function sitemap() {
  const baseUrl = 'https://xonapp.com';

  // Static & Footer Pages
  const staticRoutes = [
    '',
    '/download',
    '/about',
    '/contact',
    '/disclaimer',
    '/privacy',
    '/terms',
    '/dmca',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/download' ? 0.9 : 0.8,
  }));

  // Agar Xon App ke koi specific blogs ya categories hon toh unhein yahan add kar sakti hain
  const blogSlugs = [
    // 'xon-app-features',
    // 'how-to-download-anime-cartoons',
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}