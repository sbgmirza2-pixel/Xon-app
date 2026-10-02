'use client';

export default function Conclusion() {
  return (
    <section id="conclusion" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
     

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