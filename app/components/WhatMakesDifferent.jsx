export default function WhatMakesDifferent() {
  const points = [
    {
      title: "Smooth Scene Changes",
      desc: "Each tab looks like a scene change. The subtle syncing, genre filter, and playback controls are all done smoothly and clearly."
    },
    {
      title: "Anime Nostalgia",
      desc: "From logo colors to poster-style thumbnails, Xon captures a feeling of anime nostalgia, bold and deeply personal."
    },
    {
      title: "Zero Friction Interface",
      desc: "If you are watching Doraemon or diving into an anime, Xon's interface is built for instant understanding and zero friction."
    },
    {
      title: "Iconic Design Tribute",
      desc: "Xon's design is inspired by iconic series and pays homage. It is great for creators and families."
    }
  ];

  return (
    <section id="features" style={{
      padding: '50px 20px',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <div style={{
        borderLeft: '4px solid var(--orange)',
        paddingLeft: '24px',
        marginBottom: '30px',
      }}>
        <h2 style={{ 
          font: '800 2.2rem var(--h)', 
          color: 'var(--ink)',
          letterSpacing: '-0.02em'
        }}>
          What Makes the Xon App Different?
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '24px',
      }}>
        {points.map((item, index) => (
          <div key={index} style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          }}>
            <h3 style={{ 
              font: '700 1.2rem var(--h)', 
              color: 'var(--ink)', 
              marginBottom: '12px' 
            }}>
              {item.title}
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.7', 
              color: 'var(--muted)', 
              margin: 0,
              fontFamily: 'var(--b)'
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
        {/* Balanced Sleek Modern */}  
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
    </section>
  );
}