import Navbar from '../components/Navbar';

const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Terms & Conditions - Xon App Website Rules & Guidelines',
  description: ' Read our Terms and Conditions for the basic rules that apply when you use this website and its content.',
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
  openGraph: {
  title: 'Terms & Conditions - Xon App Website Rules & Guidelines',
  description: 'Read our Terms and Conditions for the basic rules that apply when you use this website and its content.',
  url: '/terms-and-conditions',
  siteName: 'Xon App Fan Site',
  type: 'website',
  locale: 'en_US',
  images: [{ url: '/xon-app.jpg', width: 1200, height: 630, alt: 'Xon App icon' }],
},
};

export default function TermsAndConditions() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '95px' }}>
      {/* Fixed Navbar Component */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Terms & Conditions Content Section */}
      <section style={{
        padding: '40px 20px 60px 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Page Header */}
        <div style={{
          paddingLeft: '20px',
          borderLeft: '4px solid var(--orange)',
          marginBottom: '35px'
        }}>
          <h1 style={{ 
            font: '800 2.5rem var(--h)', 
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Terms & Conditions
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--muted)', 
            margin: '8px 0 0 0', 
            fontFamily: 'var(--b)' 
          }}>
            Read our Terms and Conditions for the basic rules that apply when you use this website and its content.
          </p>
        </div>

        {/* Content Card */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div>
            <h2 style={{ font: '800 1.4rem var(--h)', color: 'var(--ink)', margin: '0 0 12px 0' }}>
              Agreement to Terms
            </h2>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              By using this website, you agree to these Terms and Conditions.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              General Information & Updates
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              The content published here is provided for general information. We may update, change, or remove any page or information when needed.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Acceptable Use & Restrictions
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              You must not use the website for unlawful purposes or try to damage, disrupt, or misuse any part of it. The content should also not be copied or used in a way that violates applicable laws or the rights of others.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Third-Party Content & Changes
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              Some pages may mention third-party apps, services, names, or trademarks. Those belong to their respective owners.
            </p>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              We may update these terms from time to time. Any changes will be posted on this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}