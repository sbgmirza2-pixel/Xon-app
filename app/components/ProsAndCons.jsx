'use client';

export default function ProsAndCons() {
  const pros = [
    "It includes popular cartoons such as Doraemon and Shinchan",
    "Hindi-dubbed content is easy for local viewers to use",
    "English subtitles can help users understand content in other languages",
    "It offers Full HD playback with a strong internet connection",
    "You have simple access without creating an account"
  ];

  const cons = [
    "Language and dubbing options are different from one title to another title.",
    "It requires Android 5.0 or later to run the app",
    "It is designed for Android devices, not for multiple platforms",
    "Users should verify the file before installing from a third-party source",
    "Content availability depends on the title or region"
  ];

  return (
    <section id="pros-cons" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Border Drawing on Hover */}
      <style>{`
        .pc-card {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 16px;
          padding: 30px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }

        .pro-card::before, .pro-card::after {
          content: '';
          position: absolute;
          background: var(--aqua);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .con-card::before, .con-card::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .pc-card::before { top: 0; left: 0; }
        .pc-card::after { bottom: 0; right: 0; }

        .pro-card:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,255,200,0.06);
          border-color: var(--line);
        }

        .con-card:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,106,0,0.06);
          border-color: var(--line);
        }

        .pc-card:hover::before, .pc-card:hover::after {
          width: 100%;
        }
      `}</style>

      <div style={{
        borderLeft: '4px solid var(--orange)',
        paddingLeft: '24px',
        marginBottom: '40px'
      }}>
        <h2 style={{ 
          font: '800 2.2rem var(--h)', 
          color: 'var(--ink)',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Pros and Cons of the Xon App
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Here are some good and weak points of the app. This will help you understand its main benefits and limitations.
        </p>
      </div>

      {/* Grid Layout for Pros & Cons Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '30px',
        marginBottom: '40px'
      }}>
        {/* Pros Box */}
        <div className="pc-card pro-card">
          <h3 style={{ 
            font: '800 1.4rem var(--h)', 
            color: 'var(--aqua)', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>✓</span> Pros
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px' 
          }}>
            {pros.map((item, index) => (
              <li key={index} style={{ 
                display: 'flex', 
                gap: '12px', 
                alignItems: 'flex-start',
                color: 'var(--muted)',
                fontSize: '0.97rem',
                lineHeight: '1.5',
                fontFamily: 'var(--b)'
              }}>
                <span style={{ color: 'var(--aqua)', fontWeight: 'bold', fontSize: '1.1rem' }}>+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons Box */}
        <div className="pc-card con-card">
          <h3 style={{ 
            font: '800 1.4rem var(--h)', 
            color: 'var(--orange-ink)', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>✕</span> Cons
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px' 
          }}>
            {cons.map((item, index) => (
              <li key={index} style={{ 
                display: 'flex', 
                gap: '12px', 
                alignItems: 'flex-start',
                color: 'var(--muted)',
                fontSize: '0.97rem',
                lineHeight: '1.5',
                fontFamily: 'var(--b)'
              }}>
                <span style={{ color: 'var(--orange)', fontWeight: 'bold', fontSize: '1.1rem' }}>-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*  Modern Divider */}
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
          opacity: '0.5',
          filter: 'blur(1px)'
        }} />
      </div>
    </section>
  );
}