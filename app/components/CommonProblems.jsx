'use client';

export default function CommonProblems() {
  const problems = [
    {
      title: "Video Not Playing",
      desc: "Check your Internet connection and play the video again. If the problem still shows, restart the app or try a different title."
    },
    {
      title: "App crashing",
      desc: "Close the Xon app completely, then open it again. You can also clear the app cache or restart your device."
    },
    {
      title: "Slow video loading",
      desc: "It can happen if your internet connection is weak. Change your WiFi or mobile network for smooth playback."
    },
    {
      title: "App is not installing",
      desc: "Check that you have the required Android version and enough device storage. If you are using an APK, check that the file is compatible with your device."
    },
    {
      title: "Audio or Subtitles not working",
      desc: "Your Easyaccess login is not valid. Try a different language or subtitle option in the player settings. Update or restart the app."
    },
    {
      title: "Content unavailable",
      desc: "Some shows or episodes may not be available. Try a different title or check for availability in your area."
    },
    {
      title: "Login/Access Problems",
      desc: "If the app asks for permission and it does not open correctly, close the app and open it again. Confirm that your Internet connection is working."
    },
    {
      title: "Bad Video Quality",
      desc: "Check the player settings to see if you can change the video quality. A stable and faster internet connection can help you to play video in good quality."
    },
    {
      title: "Screen freezes",
      desc: "Stop the video for a second and then play it again. If your screen is frozen, restart the app and try another video."
    },
    {
      title: "App Shows a Blank Screen",
      desc: "If Xon opens and shows a blank screen, close and reopen the app. Check your internet connection, and clearing the cache can help to solve the issue."
    }
  ];

  return (
    <section id="problems" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Border Drawing on Hover */}
      <style>{`
        .problem-item {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 24px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        
        .problem-item::before, .problem-item::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .problem-item::before {
          top: 0; left: 0;
        }
        .problem-item::after {
          bottom: 0; right: 0;
        }

        .problem-item:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,106,0,0.06);
          border-color: var(--line);
        }

        .problem-item:hover::before, .problem-item:hover::after {
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
          Common Problems and Their Solutions
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Here are some common problems users can face when they are using Xon. Some easy solutions to fix these problems are below:
        </p>
      </div>

      {/* Grid Layout for Troubleshooting Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {problems.map((item, index) => (
          <div key={index} className="problem-item">
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