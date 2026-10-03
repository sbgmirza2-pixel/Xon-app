'use client';

import Navbar from '../components/Navbar';

import Link from 'next/link';

export default function AboutUs() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '95px' }}>
      {/* Fixed Navbar Component */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* About Us Content Section */}
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
            About Us
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--muted)', 
            margin: '8px 0 0 0', 
            fontFamily: 'var(--b)' 
          }}>
            Learn more about our website and the useful XON app information, features, updates, and Android guides we share.
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
              Welcome to our website
            </h2>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              Created for Android users who want simple and useful information about the <Link href="/" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: '700' }}>XON app</Link>.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              What We Cover
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              We cover the things users usually want to know before using an app, such as its features, version details, Android support, installation steps, and common problems. The content is kept simple and easy to read, with no unnecessary details.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Regular Updates
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              We also update our pages when important information changes so visitors can get useful and relevant app details in one place.
            </p>
          </div>
        </div>
      </section>

     
    </main>
  );
}