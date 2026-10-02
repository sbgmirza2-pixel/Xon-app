'use client';

import Navbar from '../components/Navbar';


export default function PrivacyPolicy() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '95px' }}>
      {/* Fixed Navbar Component */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Privacy Policy Content Section */}
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
            Privacy Policy
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--muted)', 
            margin: '8px 0 0 0', 
            fontFamily: 'var(--b)' 
          }}>
            Read our Privacy Policy to learn what information may be collected when you visit the website and how it may be used.
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
              We Respect Your Privacy
            </h2>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              You can visit and read the website without creating an account or giving us personal information.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Information Collected Automatically
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              Some basic information may be collected automatically through cookies, analytics tools, or advertising services. This can include details such as your browser type, device, pages visited, and general site usage.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              How We Use Information
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              We use this information to keep the website working properly, understand traffic, improve our content, and support advertising where applicable.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Third-Party Services & Agreement
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              Third-party services may collect information under their own privacy policies. We do not control how those services handle data.
            </p>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              By using the website, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      
    </main>
  );
}