'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '92%',
      maxWidth: '900px',
      zIndex: 1000,
    }}>
      {/* Navbar Containerwith Border Drawing Hover Effect */}
      <div className="navbar-pill">
        
        {/* Logo with xon-app.jpg */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', position: 'relative', zIndex: 2 }}>
          <Image 
            src="/xon-app.jpg" 
            alt="Xon App" 
            width={36} 
            height={36} 
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)' }}>Xon App</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav" style={{ alignItems: 'center', gap: '24px', position: 'relative', zIndex: 2 }}>
          <Link href="/" style={{ textDecoration: 'none', fontWeight: '700', color: 'var(--ink)', fontSize: '0.95rem' }}>
            Home
          </Link>
          <Link href="/blogs" style={{ textDecoration: 'none', fontWeight: '700', color: 'var(--muted)', fontSize: '0.95rem' }}>
            Blogs
          </Link>
          <Link href="/faqs" style={{ textDecoration: 'none', fontWeight: '700', color: 'var(--muted)', fontSize: '0.95rem' }}>
            FAQs
          </Link>
        </div>

        {/* Desktop Download Button & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 2 }}>
          <div className="desktop-btn">
            <Link href="/download" className="btn" style={{ padding: '8px 18px', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-block' }}>
              Download
            </Link>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'var(--bg)',
              border: '2px solid var(--line)',
              color: 'var(--ink)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              fontFamily: 'var(--h)'
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div style={{
          background: 'var(--surface)',
          border: '2px solid var(--orange)',
          borderRadius: '20px',
          marginTop: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 20px 40px rgba(255, 106, 0, 0.15)'
        }}>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '700', color: 'var(--ink)', fontSize: '1rem', padding: '8px 12px', borderRadius: '10px', background: 'var(--bg)' }}
          >
            Home
          </Link>
          <Link 
            href="/blogs" 
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '700', color: 'var(--muted)', fontSize: '1rem', padding: '8px 12px', borderRadius: '10px', background: 'var(--bg)' }}
          >
            Blogs
          </Link>
          <Link 
            href="/faqs" 
            onClick={() => setIsOpen(false)}
            style={{ textDecoration: 'none', fontWeight: '700', color: 'var(--muted)', fontSize: '1rem', padding: '8px 12px', borderRadius: '10px', background: 'var(--bg)' }}
          >
            FAQs
          </Link>
          <Link 
            href="/download" 
            onClick={() => setIsOpen(false)} 
            className="btn" 
            style={{ textAlign: 'center', padding: '10px', fontSize: '0.95rem', width: '100%', textDecoration: 'none', boxSizing: 'border-box' }}
          >
            Download
          </Link>
        </div>
      )}

      {/* Navbar Hover Animation & Responsive Styles */}
      <style>{`
        .navbar-pill {
          position: relative;
          background: var(--surface);
          backdrop-filter: blur(12px);
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0,0,0,0.04);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        /* Animated border lines on hover */
        .navbar-pill::before, .navbar-pill::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
          z-index: 1;
        }

        .navbar-pill::before {
          top: 0; left: 0;
        }
        .navbar-pill::after {
          bottom: 0; right: 0;
        }

        .navbar-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(255,106,0,0.08);
          border-color: var(--line);
        }

        .navbar-pill:hover::before, .navbar-pill:hover::after {
          width: 100%;
        }

        .desktop-nav {
          display: flex;
        }
        .desktop-btn {
          display: block;
        }
        .mobile-menu-btn {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}