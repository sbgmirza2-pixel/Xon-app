'use client';
import { useState } from 'react';

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      color: '#25D366',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      name: 'Facebook',
      color: '#1877F2',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      color: 'var(--ink)',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      color: '#0A66C2',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'Telegram',
      color: '#229ED9',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      )
    },
    {
      name: 'Email',
      color: 'var(--orange)',
      url: `mailto:?body=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(15, 20, 25, 0.65)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px',
      animation: 'fadeIn 0.25s ease'
    }}>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: '24px',
        padding: '32px 28px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ font: '800 1.3rem var(--h)', color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' }}>
              Share this page
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', margin: '4px 0 0 0', fontFamily: 'var(--b)' }}>
              Spread the word with your network
            </p>
          </div>
          <button 
            onClick={onClose}
            className="share-close-btn"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--line)',
              cursor: 'pointer',
              color: 'var(--ink)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              transition: 'all 0.2s ease'
            }}
          >
            ✕
          </button>
        </div>

        {/* Social Icons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
          {socialLinks.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="share-icon-card"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: '16px 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'var(--ink)',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.svgContent}
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', fontFamily: 'var(--h)', color: 'var(--ink)' }}>
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* Copy Link Field */}
        <div style={{
          display: 'flex',
          alignItem: 'center',
          background: 'var(--bg)',
          border: '1px solid var(--line)',
          borderRadius: '14px',
          padding: '6px 6px 6px 14px',
          justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '0.85rem',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '240px',
            fontFamily: 'monospace'
          }}>
            {currentUrl}
          </span>
          <button
            onClick={handleCopyLink}
            style={{
              background: copied ? '#10B981' : 'var(--orange)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 16px',
              fontSize: '0.85rem',
              fontWeight: '700',
              fontFamily: 'var(--h)',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            {copied ? 'Copied! ✓' : 'Copy Link'}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .share-icon-card:hover {
          background: var(--surface) !important;
          border-color: var(--orange) !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 106, 0, 0.1);
        }
        .share-close-btn:hover {
          background: var(--orange) !important;
          border-color: var(--orange) !important;
          color: #fff !important;
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
}