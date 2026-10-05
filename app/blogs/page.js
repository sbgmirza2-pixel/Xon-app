import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Xon App Blogs & Troubleshooting Guides',
  description: 'Explore our complete guides to fix Xon app installation errors, video playback issues, and general Android problems.',
  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },
};

export default function BlogsPage() {
  const blogs = [
    {
      slug: 'xon-app-not-working',
      title: 'Xon App Not Working: How to Fix Problems on Android?',
      description: 'Learn how to fix crashes, loading errors, installation problems, and other common issues with practical steps.'
    },
    {
      slug: 'xon-app-not-installing',
      title: 'Xon App Not Installing? Fix Installation Errors and APK Problems',
      description: 'Learn how to fix APK installation errors, compatibility issues, storage problems, blocked installs, and security warnings.'
    },
    {
      slug: 'xon-apk-videos-not-playing',
      title: 'Xon APK Videos Not Playing? Fix Buffering and Playback Problems',
      description: 'Learn how to fix buffering, loading, black screen, and playback problems on Android with simple troubleshooting steps.'
    }
  ];

  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '110px' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Scoped Hover CSS */}
      <style>{`
        .blog-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--orange) !important;
          box-shadow: 0 12px 30px rgba(255, 106, 0, 0.1) !important;
        }
        .blog-card:hover .blog-arrow {
          transform: translateX(4px);
        }
        .blog-arrow {
          transition: transform 0.2s ease;
          display: inline-block;
        }
      `}</style>

      <section style={{ padding: '20px 20px 60px 20px', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Header */}
        <div style={{ paddingLeft: '20px', borderLeft: '4px solid var(--orange)' }}>
          <h1 style={{ font: '800 2.5rem var(--h)', color: 'var(--ink)', letterSpacing: '-0.02em', margin: 0 }}>
            Xon App Guides & Blog
          </h1>
          <p style={{ font: '1rem var(--b)', color: 'var(--muted)', marginTop: '8px' }}>
            Explore official troubleshooting manuals, installation guides, and playback fixes for Xon App.
          </p>
        </div>

        {/* Blogs List Grid (Horizontal Row Style) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {blogs.map((blog) => (
            <Link 
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="blog-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
            >
              {/* Square Thumbnail Image on Left */}
              <div style={{ 
                width: '180px', 
                height: '180px', 
                minWidth: '180px',
                position: 'relative', 
                background: 'var(--line)' 
              }}>
                <Image 
                  src="/xon.webp" 
                  alt={blog.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content on Right */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <span style={{ font: '700 0.9rem var(--h)', color: 'var(--orange)' }}>
                    Read Guide <span className="blog-arrow">→</span>
                  </span>
                </div>

                <h2 style={{ font: '800 1.3rem var(--h)', color: 'var(--ink)', margin: 0, lineHeight: '1.4' }}>
                  {blog.title}
                </h2>

                <p style={{ font: '0.9rem var(--b)', color: 'var(--muted)', margin: 0, lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}