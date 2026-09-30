'use client';

export default function KeyFeatures() {
  const features = [
    {
      title: "Hindi Dubbing and English Subtitles",
      desc: "Xon App has Hindi-dubbed versions of many shows. They also have English subtitles, which make it easier for viewers to follow the conversation. They can enjoy the story without relying on the original audio. With this feature, more people can enjoy shows."
    },
    {
      title: "Viewed History",
      desc: "The app keeps track of what you have watched. You can remember previous episodes you watched and watch them later. This is helpful when you leave the content in the middle. It saves your time. You can browse your history and watch your favourite content."
    },
    {
      title: "Favorites List",
      desc: "Users can save favorite shows so they can access the content quickly. They can find saved content from the favorites section without searching for the same title again. It is useful for viewers who want to watch many shows at the same time. Open saved titles when you need them."
    },
    {
      title: "Sleep Timer",
      desc: "Xon has a sleep timer to stop playback after a certain time. Users can set a timer. This can be helpful for people who like to watch cartoons or anime before sleeping. It is best because users avoid the app playing all night. The video will stop at your set timer."
    },
    {
      title: "Play with Low Data",
      desc: "The app is designed for low mobile data. The playback system is optimized to use less data, which can be helpful when watching over a cellular connection. This is perfect for those viewers who have a smaller data package because they control their daily data usage."
    },
    {
      title: "Parental Timer",
      desc: "This feature helps parents control kids' watching time. It is a simple way to limit how long kids can spend watching content on the app. Parents can set a suitable time limit for viewing. This helps kids to follow a proper screen-time routine."
    },
    {
      title: "Full HD Quality",
      desc: "Xon supports Full HD content. Real video quality can depend on your internet connection. Full HD quality makes the picture look clear. It can make details easier to see when you are watching. This feature gives users a better viewing experience."
    },
    {
      title: "Supports Multiple Languages",
      desc: "The app focuses on Hindi and English, but some titles also have Tamil and Telugu language options. It shows that it is not available in all languages. Users can choose the available language for titles. This can make the content easier to understand."
    }
  ];

  return (
    <section id="features" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Border Drawing on Hover */}
      <style>{`
        .feature-item {
          position: relative;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 24px;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }
        
        .feature-item::before, .feature-item::after {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
        }

        .feature-item::before {
          top: 0; left: 0;
        }
        .feature-item::after {
          bottom: 0; right: 0;
        }

        .feature-item:hover {
          background: var(--surface);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,106,0,0.06);
          border-color: var(--line);
        }

        .feature-item:hover::before, .feature-item:hover::after {
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
          Key Features of Xon App
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Xon App has many features that will make watching cartoons and anime more convenient. Here are some of the useful features:
        </p>
      </div>

      {/* Grid Layout with Original Text */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {features.map((item, index) => (
          <div key={index} className="feature-item">
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