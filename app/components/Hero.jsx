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

            {/* Action Buttons & Rating Layout */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Row 1: Download APK & Download Guide */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="/download" className="btn" style={{ display: 'inline-block' }}>
                  Download APK
                </a>
                
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
              </div>

              {/* Row 2: Clean Soft Rating & Share Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                
                {/* Soft Rating Badge */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '8px 14px',
                  background: 'var(--surface)',
                  borderRadius: '100px',
                  border: '1px solid var(--line)'
                }}>
                  <div style={{ display: 'flex', color: '#f59e0b', fontSize: '14px', gap: '1px' }}>
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span style={{ fontSize: '13px', fontFamily: 'var(--h)', fontWeight: '700', color: 'var(--ink)' }}>
                    4.9 <span style={{ fontWeight: '400', opacity: 0.6 }}>(12k+ reviews)</span>
                  </span>
                </div>

                {/* Share App Button with Hover Effect */}
                <button 
                  onClick={() => setIsShareOpen(true)}
                  style={{
                    background: 'transparent',
                    color: 'var(--ink)',
                    border: '2px solid var(--line)',
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontFamily: 'var(--h)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--surface)';
                    e.currentTarget.style.borderColor = 'var(--orange)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Share App ↗
                </button>

              </div>

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