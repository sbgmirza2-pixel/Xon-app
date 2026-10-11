

import Navbar from '../components/Navbar';
const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'DMCA Policy - Xon App Copyright & Removal Notice',
  description: 'If you believe your copyrighted work appears here without permission, learn how to send a copyright notice for review.',
  alternates: {
    canonical: `${SITE_URL}/dmca`,
  },
};


export default function DMCA() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '95px' }}>
      {/* Fixed Navbar Component */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* DMCA Content Section */}
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
            DMCA
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--muted)', 
            margin: '8px 0 0 0', 
            fontFamily: 'var(--b)' 
          }}>
            If you believe your copyrighted work appears here without permission, learn how to send a copyright notice for review.
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
              Copyright Compliance
            </h2>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              We respect the rights of copyright owners and take copyright concerns seriously.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Notice & Review Process
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              If you believe that your copyrighted work has been used on this website without permission, you can send us a copyright notice for review.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              What to Include in Your Notice
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              Please include the name of the copyrighted work, the page where the material appears, your contact information, and a short explanation of your claim.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              DMCA Contact & Action
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              DMCA Email: <a href="mailto:support@xonapp.net" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: '700' }}>support@xonapp.net</a>
            </p>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              We will review the information provided and take appropriate action when a valid copyright issue is confirmed.
            </p>
          </div>
        </div>
      </section>

    
    </main>
  );
}