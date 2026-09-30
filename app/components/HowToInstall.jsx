'use client';

export default function HowToInstall() {
  const steps = [
    {
      title: "Open Downloaded File",
      desc: "Open the downloaded file on your device."
    },
    {
      title: "Grant Installation Permission",
      desc: "If your device requests permission to install apps from that source, allow it in Settings."
    },
    {
      title: "Click Install",
      desc: "Click on the Install button and wait for it to complete."
    },
    {
      title: "Launch the App",
      desc: "When it installs, open the Xon App from your app menu."
    },
    {
      title: "Configure & Enjoy",
      desc: "See the available settings and start using the app."
    }
  ];

  return (
    <section id="install" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Border Drawing on Hover */}
      <style>{`
        .install-item {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 24px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        
        .install-item::before, .install-item::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .install-item::before {
          top: 0; left: 0;
        }
        .install-item::after {
          bottom: 0; right: 0;
        }

        .install-item:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,106,0,0.06);
          border-color: var(--line);
        }

        .install-item:hover::before, .install-item:hover::after {
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
          How to Install Xon App on Android?
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Follow these easy steps to install and set up Xon App smoothly on your device:
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
          <div key={index} className="install-item">
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
                color: 'var(--orange-ink)',
                boxShadow: '0 4px 12px rgba(255,106,0,0.1)',
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