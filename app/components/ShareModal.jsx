'use client';

export default function ShareModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'X',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      name: 'Telegram',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      )
    },
    {
      name: 'Reddit',
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="var(--ink)">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.221.683-.356 1.093-.356 1.004 0 1.819.814 1.819 1.818 0 .708-.411 1.319-1.008 1.611-.058.297-.092.604-.092.921 0 4.699-5.433 7.584-9.841 7.584-4.409 0-9.842-2.885-9.842-7.584 0-.317.035-.624.094-.921-.597-.292-1.008-.903-1.008-1.611 0-1.004.816-1.818 1.819-1.818.41 0 .785.135 1.093.356 1.194-.856 2.85-1.418 4.674-1.488l.805-3.771 2.535.534c.15-.369.516-.628.941-.628zm-8.8 6.559c-.838 0-1.517.68-1.517 1.518 0 .839.679 1.518 1.517 1.518.839 0 1.518-.679 1.518-1.518 0-.838-.679-1.518-1.518-1.518zm7.579 0c-.838 0-1.517.68-1.517 1.518 0 .839.679 1.518 1.517 1.518.839 0 1.518-.679 1.518-1.518 0-.838-.68-1.518-1.518-1.518zm-3.79 3.256c-1.636 0-3.085.736-4.043 1.892-.126.151-.102.378.049.503.15.126.377.103.502-.048.825-.992 2.062-1.623 3.492-1.623s2.667.631 3.492 1.623c.125.151.352.174.502.048.151-.125.175-.352.049-.503-.958-1.156-2.407-1.892-4.043-1.892z"/>
        </svg>
      )
    },
    {
      name: 'Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M12 2a10 10 0 0 0-3.6 19.4c-.1-.8-.2-2 0-2.8l.8-3.4"></path>
        </svg>
      )
    },
    {
      name: 'Tumblr',
      url: `https://www.tumblr.com/widgets/share/tool?url=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H12v4H9v3h3v4.5C12 17.5 13.5 19 17 18.5V15c-1 0-1.5.5-1.5 1.5V9h3V6h-1.5V2z"></path>
        </svg>
      )
    },
    {
      name: 'Email',
      url: `mailto:?body=${encodeURIComponent(currentUrl)}`,
      svgContent: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(34, 40, 46, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--surface)',
        border: '3px solid var(--orange)',
        borderRadius: '24px',
        padding: '28px',
        width: '100%',
        maxWidth: '380px',
        boxShadow: '0 20px 40px rgba(255, 106, 0, 0.15)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ color: 'var(--orange-ink)', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '1px', fontFamily: 'var(--h)' }}>
            SHARE VIA
          </span>
          <button 
            onClick={onClose}
            className="share-close-btn"
            style={{
              background: 'var(--bg)',
              border: '2px solid var(--line)',
              cursor: 'pointer',
              color: 'var(--ink)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              fontFamily: 'var(--h)',
              transition: 'all 0.2s ease'
            }}
          >
            ✕
          </button>
        </div>

        {/* Icons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {socialLinks.map((item, index) => (
            <a 
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="share-icon-card"
              style={{
                background: 'var(--bg)',
                border: '2px solid var(--line)',
                borderRadius: '16px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 0 var(--line)'
              }}
            >
              {item.svgContent}
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .share-icon-card:hover {
          background: rgba(255, 106, 0, 0.1) !important;
          border-color: var(--orange) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 0 var(--orange) !important;
        }
        .share-close-btn:hover {
          background: var(--orange) !important;
          border-color: var(--orange) !important;
          color: #fff !important;
        }
      `}</style>
    </div>
  );
}