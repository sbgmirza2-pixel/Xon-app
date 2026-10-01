import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="w" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
        {/* Left Side: Brand & Description */}
        <div style={{ maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1a1a1a',
              font: '800 1.2rem var(--h)'
            }}>
              X
            </div>
            <b style={{ font: '800 1.3rem var(--h)' }}>Xon App</b>
          </div>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem' }}>
            Your ultimate entertainment destination for cartoons and anime.
          </p>
          <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            &copy; 2026 Xonapp Dev. All rights reserved.
          </div>
        </div>

        {/* Right Side: Quick Links (Column-wise) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <b style={{ font: '800 1rem var(--h)', color: 'var(--ink)', marginBottom: '4px' }}>Quick Links</b>
          <Link href="/about-us" style={{ textDecoration: 'none', color: 'var(--muted)' }}>About</Link>
          <Link href="/contact-us" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Contact</Link>
          <Link href="/disclaimer" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Disclaimer</Link>
          <Link href="/privacy-policy" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Privacy</Link>
          <Link href="/terms-and-conditions" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Terms & Condition</Link>
          <Link href="/dmca" style={{ textDecoration: 'none', color: 'var(--muted)' }}>DMCA</Link>
        </div>
      </div>
    </footer>
  );
}