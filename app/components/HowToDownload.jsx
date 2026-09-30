'use client';

export default function HowToDownload() {
  const steps = [
    {
      title: "Access a Trusted Source",
      desc: "Access a trusted source that offers the Xon App file."
    },
    {
      title: "Search & Check Version",
      desc: "Search for Xon App. Check what version is available."
    },
    {
      title: "Download APK or XAPK",
      desc: "Download the latest APK file or XAPK file on your Android device."
    },
    {
      title: "Wait for Completion",
      desc: "Don't start installation until the download is complete."
    }
  ];

  return (
    <section id="download" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Border Drawing on Hover */}
      <style>{`
        .download-item {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 24px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        
        .download-item::before, .download-item::after {
          content: '';
          position: absolute;
          background: var(--aqua);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .download-item::before {
          top: 0; left: 0;
        }
        .download-item::after {
          bottom: 0; right: 0;
        }

        .download-item:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,255,200,0.06);
          border-color: var(--line);
        }

        .download-item:hover::before, .download-item:hover::after {
          width: 100%;
        }
      `}</style>

      <div style={{
        borderLeft: '4px solid var(--aqua)',
        paddingLeft: '24px',
        marginBottom: '40px'
      }}>
        <h2 style={{ 
          font: '800 2.2rem var(--h)', 
          color: 'var(--ink)',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          How to Download Xon App?
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Follow these simple steps to safely get the Xon App on your Android device:
        </p>
      </div>

      {/* Grid Layout with Steps */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {steps.map((item, index) => (
          <div key={index} className="download-item">
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              {/* Glowing Number Badge */}
              <div style={{
                minWidth: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                font: '800 1rem var(--h)',
                color: 'var(--aqua)',
                boxShadow: '0 4px 12px rgba(0,255,200,0.1)',
                flexShrink: 0
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <h3 style={{ 
                  font: '800 1.15rem var(--h)', 
                  color: 'var(--ink)', 
                  marginBottom: '6px' 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  color: 'var(--muted)', 
                  fontSize: '0.97rem',
                  lineHeight: '1.6',
                  fontFamily: 'var(--b)'
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Balanced Sleek Modern Divider */}
      <div style={{
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--line), var(--aqua), var(--line), transparent)',
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
          background: 'var(--aqua)',
          borderRadius: '999px',
          opacity: '0.5',
          filter: 'blur(1px)'
        }} />
      </div>
    </section>
  );
}