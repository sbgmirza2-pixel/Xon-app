'use client';

export default function AppInfo() {
  const appDetails = [
    { label: "App Name", value: "Xon App" },
    { label: "Category", value: "Entertainment" },
    { label: "Developer", value: "Xonapp Dev" },
    { label: "Version", value: "12.5.1" },
    { label: "Updated On", value: "May 5, 2026" },
    { label: "Compatible with", value: "Android 5.0+" }
  ];

  return (
     <section id="about" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <style>{`
        .app-info-card {
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all 0.25s ease;
        }

        .app-info-card:hover {
          background: var(--surface);
          border-color: var(--orange);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 106, 0, 0.1);
        }
      `}</style>

      {/* Section Heading */}
      <div style={{
        paddingLeft: '20px',
        paddingRight: '20px',
        borderLeft: '4px solid var(--orange)',
        marginLeft: '20px',
        marginBottom: '25px'
      }}>
        <h2 style={{ 
          font: '800 2rem var(--h)', 
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          margin: 0
        }}>
          App Information
        </h2>
      </div>

      {/* Info Grid Container */}
      <div style={{ padding: '0 20px' }}>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '20px',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
        }}>
          {appDetails.map((item, index) => (
            <div key={index} className="app-info-card">
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '700', fontFamily: 'var(--h)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {item.label}
              </span>
              <span style={{ fontSize: '1.05rem', color: 'var(--ink)', fontWeight: '800', fontFamily: 'var(--h)' }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}