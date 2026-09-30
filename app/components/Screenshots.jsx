'use client';

export default function Screenshots() {
  const screenshots = [
    { img: "/Xon_Home_screen.webp", alt: "Home Screen" },
    { img: "/Xon_Watch_Movies.webp", alt: "Watch Movies" },
    { img: "/Xon_play_Games.webp", alt: "Play Games" },
    { img: "/Xon_Save_Favorite.webp", alt: "Save Favorite" }
  ];

  return (
    <section id="screenshots" style={{
      padding: '60px 0 40px 0',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Inline Styles for Horizontal Scroll & Hover Effects */}
      <style>{`
        .scroll-container {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 10px 20px 30px 20px;
          scrollbar-width: thin;
          scrollbar-color: var(--orange) var(--line);
        }

        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: var(--line);
          border-radius: 999px;
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background: var(--orange);
          border-radius: 999px;
        }

        .screenshot-card {
          position: relative;
          flex: 0 0 260px;
          scroll-snap-align: start;
          background: transparent;
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }

        @media (min-width: 768px) {
          .screenshot-card {
            flex: 0 0 290px;
          }
        }

        .screenshot-card::before, .screenshot-card::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
          z-index: 2;
        }

        .screenshot-card::before { top: 0; left: 0; }
        .screenshot-card::after { bottom: 0; right: 0; }

        .screenshot-card:hover {
          background: var(--surface);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(255,106,0,0.08);
          border-color: var(--line);
        }

        .screenshot-card:hover::before, .screenshot-card:hover::after {
          width: 100%;
        }

        .img-container {
          position: relative;
          width: 100%;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .screenshot-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.4s ease;
        }

        .screenshot-card:hover .screenshot-img {
          transform: scale(1.02);
        }
      `}</style>

      {/* Section Heading */}
      <div style={{
        paddingLeft: '20px',
        paddingRight: '20px',
        borderLeft: '4px solid var(--orange)',
        marginLeft: '20px',
        marginBottom: '35px'
      }}>
        <h2 style={{ 
          font: '800 2.2rem var(--h)', 
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          margin: 0
        }}>
          Screenshots
        </h2>
      </div>

      {/* Horizontal Scrollable Row */}
      <div className="scroll-container">
        {screenshots.map((item, index) => (
          <div key={index} className="screenshot-card">
            <div className="img-container">
              <img 
                src={item.img} 
                alt={item.alt} 
                className="screenshot-img" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Balanced Sleek Modern Divider */}
      <div style={{
        width: 'calc(100% - 40px)',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--line), var(--orange), var(--line), transparent)',
        marginTop: '30px',
        marginInline: 'auto',
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
          opacity: '0.5',
          filter: 'blur(1px)'
        }} />
      </div>
    </section>
  );
}