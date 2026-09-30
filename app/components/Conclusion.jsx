'use client';

export default function Conclusion() {
  return (
    <section id="conclusion" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Border Drawing on Hover */}
      <style>{`
        .conclusion-card {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 20px;
          padding: 40px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        
        .conclusion-card::before, .conclusion-card::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .conclusion-card::before {
          top: 0; left: 0;
        }
        .conclusion-card::after {
          bottom: 0; right: 0;
        }

        .conclusion-card:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(255,106,0,0.08);
          border-color: var(--line);
        }

        .conclusion-card:hover::before, .conclusion-card:hover::after {
          width: 100%;
        }
      `}</style>

      <div style={{
        borderLeft: '4px solid var(--orange)',
        paddingLeft: '24px',
        marginBottom: '30px'
      }}>
        <h2 style={{ 
          font: '800 2.2rem var(--h)', 
          color: 'var(--ink)',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Conclusion
        </h2>
      </div>

      {/* Main Conclusion Box */}
      <div className="conclusion-card">
        <p style={{ 
          margin: 0, 
          color: 'var(--muted)', 
          fontSize: '1.1rem',
          lineHeight: '1.8',
          fontFamily: 'var(--b)'
        }}>
          Xon App is mainly for viewers who like animated entertainment and want different types of shows in a single place. Its focus on cartoons and anime gives it a clear space in different entertainment apps. It depends on you what you like to enjoy and what you’re looking for in an Android streaming app. Think about your needs and compare it with other available options before making your choice.
        </p>
      </div>

      {/* Balanced Sleek Modern Divider */}
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