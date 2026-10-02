'use client';
import { useState } from 'react';
import Image from 'next/image';
import ShareModal from './ShareModal';

export default function Hero() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <header className="hero" style={{ paddingTop: '100px' }}>
        <div className="w">
          <div>
            <h1>Xon App</h1>

            <p className="lead">
              Xon app is an entertainment app where users can find cartoons, anime, movies, and series, all in one place. This app is best for children, elders, families, anime lovers, and anyone who wants to watch animated shows instead of real-life series. In this article, we will discuss the Xon App, its features, how to download it, its pros and cons, and common problems and their solutions.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: '24px' }}>
              <a href="/download" className="btn">Download APK</a>
              
              <a 
                href="#download" 
                style={{
                  background: 'var(--surface)',
                  color: 'var(--ink)',
                  border: '2px solid var(--line)',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  fontWeight: '800',
                  textDecoration: 'none',
                  fontFamily: 'var(--h)',
                  display: 'inline-block'
                }}
              >
                Download Guide
              </a>

              <button 
                onClick={() => setIsShareOpen(true)}
                style={{
                  background: 'transparent',
                  color: 'var(--ink)',
                  border: '2px solid var(--line)',
                  padding: '11px 20px',
                  borderRadius: '999px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontFamily: 'var(--h)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Share App ↗
              </button>
            </div>
          </div>

          <div className="icon">
            <Image 
              src="/xon-app.jpg" 
              alt="Xon App" 
              width={300} 
              height={300} 
              style={{ borderRadius: '26%', display: 'block' }}
              priority
            />
          </div>
        </div>
          {/* Balanced & Sleek Modern Divider */}
      <div style={{
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--line), var(--orange), var(--line), transparent)',
        marginTop: '50px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '4px',
          background: 'var(--orange)',
          borderRadius: '999px',
          opacity: 0.5,
          filter: 'blur(1px)'
        }} />
      </div>
      </header>

      {/* Share Popup Modal */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
        
    </>
  );
}