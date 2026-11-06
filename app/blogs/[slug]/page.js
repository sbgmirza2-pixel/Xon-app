// app/blogs/[slug]/page.js
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { SITE_URL, SITE_NAME } from '../../lib/site';
import { blogData, blogList } from '../../lib/blogs';

// Blogs list mein na hone wala slug seedha 404 dega (pehle 200 status ka "soft 404" tha)
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return { title: { absolute: 'Blog Post Not Found' }, robots: { index: false } };
  }

  return {
    title: { absolute: blog.title },
    description: blog.meta,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: blog.title,
      description: blog.meta,
      url: `/blogs/${slug}`,
      siteName: 'Xon App',
      type: 'article',
      publishedTime: blog.published,
      modifiedTime: blog.updated,
      images: [{ url: '/xon-app.jpg', width: 1200, height: 630, alt: blog.title }],
    },
    // twitter yahan dena zaroori hai, warna layout wala homepage title aa jata hai
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.meta,
      images: ['/xon-app.jpg'],
    },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) notFound();

  const related = blogList.filter((b) => b.slug !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: blog.title,
        description: blog.meta,
        image: `${SITE_URL}/xon-app.jpg`,
        datePublished: blog.published,
        dateModified: blog.updated,
        mainEntityOfPage: `${SITE_URL}/blogs/${slug}`,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs` },
          { '@type': 'ListItem', position: 3, name: blog.title, item: `${SITE_URL}/blogs/${slug}` },
        ],
      },
    ],
  };

  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '110px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Blog content styling (pehle har tag par inline style tha) */}
      <style>{`
        .blog-content p { margin: 0 0 14px; }
        .blog-content p.lead { margin-bottom: 8px; font-weight: 700; }
        .blog-content ul { margin: 0 0 14px; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
        .blog-content a { color: var(--orange); text-decoration: underline; }
        .blog-content > :last-child { margin-bottom: 0; }
      `}</style>

      <article style={{ padding: '20px 20px 80px 20px', maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Back link */}
        <div>
          <Link href="/blogs" style={{ font: '700 0.9rem var(--h)', color: 'var(--orange)', textDecoration: 'none' }}>
            ← Back to Blogs Hub
          </Link>
        </div>

        {/* Header: title ab H1 hai (pehle H2 tha) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ font: '800 2.4rem var(--h)', color: 'var(--ink)', lineHeight: '1.2', margin: 0, letterSpacing: '-0.02em' }}>
            {blog.title}
          </h1>
          <p style={{ font: '0.85rem var(--b)', color: 'var(--muted)', margin: 0 }}>
            Last updated: {formatDate(blog.updated)}
          </p>
          <p style={{ font: '1.1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
            {blog.intro}
          </p>
        </div>

        {/* Banner */}
        <div style={{ width: '100%', height: '350px', position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--line)' }}>
          <Image src="/xon.webp" alt={blog.title} fill style={{ objectFit: 'cover' }} priority />
        </div>

        {/* Table */}
        {blog.tableHeaders && blog.tableRows && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', overflowX: 'auto', padding: '10px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', font: '0.95rem var(--b)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line)' }}>
                  {blog.tableHeaders.map((header, idx) => (
                    <th key={idx} style={{ padding: '14px 16px', color: 'var(--ink)', fontWeight: '800' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {blog.tableRows.map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: rIdx !== blog.tableRows.length - 1 ? '1px solid var(--line)' : 'none' }}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} style={{ padding: '14px 16px', color: 'var(--muted)' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          {blog.sections.map((section, index) => (
            <div
              key={index}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <h2 style={{ font: '800 1.4rem var(--h)', color: 'var(--ink)', margin: 0 }}>
                {section.heading}
              </h2>
              <div
                className="blog-content"
                style={{ font: '1.02rem var(--b)', color: 'var(--muted)', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>

        {/* Related guides: internal links */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '20px', padding: '32px' }}>
          <h2 style={{ font: '800 1.4rem var(--h)', color: 'var(--ink)', margin: '0 0 14px' }}>
            Related Guides
          </h2>
          <ul style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', font: '1.02rem var(--b)' }}>
            {related.map((b) => (
              <li key={b.slug}>
                <Link href={`/blogs/${b.slug}`} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
                  {b.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
                Xon App APK: features, download and install guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer nav */}
        <div style={{ paddingTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <Link
            href="/blogs"
            style={{
              background: 'var(--orange)',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '12px',
              font: '800 1rem var(--h)',
              textDecoration: 'none',
              boxShadow: '0 10px 20px rgba(255, 106, 0, 0.2)',
            }}
          >
            View All Troubleshooting Guides
          </Link>
        </div>
      </article>
    </main>
  );
}