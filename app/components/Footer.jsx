import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="w" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
        {/* Left Side: Brand & Description */}
        <div style={{ maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Logo from public folder */}
            <div style={{ position: 'relative', width: '36px', height: '36px' }}>
              <Image 
                src="/xon-app.jpg" // Agar SVG hai toh "/logo.svg" karein
                alt="Xon App Logo" 
                fill 
                style={{ objectFit: 'contain', borderRadius: '10px' }} 
              />
            </div>
            <b style={{ font: '800 1rem var(--h)', color: 'var(--ink)', marginBottom: '4px' }}>Xon App</b>
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