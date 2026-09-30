'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AllFAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const allFaqs = [
    {
      q: "Is the XON app available on iOS Devices?",
      a: "No, the XON app is associated with Android devices. An Android APK cannot be installed directly on an iPhone. iOS users can use an alternative option that is available on the official App Store."
    },
    {
      q: "Can I watch anime and cartoons in the same app?",
      a: "Yes, you can watch both anime and cartoon content in the XON App. This makes it useful for viewers who enjoy different types of animation in one place."
    },
    {
      q: "Can I continue watching a previous show from where I stopped?",
      a: "Yes, its history feature can help users to find previous watched episodes. This makes it easier to watch a show without remembering the exact episode."
    },
    {
      q: "Is Xon App available on Google Play Store?",
      a: "It depends on the specific version and developer listing. Users should check the official Play Store listing before choosing an APK source of Xon App."
    },
    {
      q: "Can I save my favorite shows on Xon App?",
      a: "Yes, you can save because the app provides a favorites option for saving titles. It helps users return to selected shows without looking for them again."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '120px', paddingBottom: '80px' }}>
      
      {/* Navbar rendered properly here */}
      <Navbar />

      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative'
      }}>
        {/* Inline Styles for Border Drawing on Hover */}
        <style>{`
          .faq-item {
            position: relative;
            background: transparent;
            border: 1px solid var(--line);
            border-radius: 14px;
            margin-bottom: 16px;
            overflow: hidden;
            transition: background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
          }

          .faq-item::before, .faq-item::after {
            content: '';
            position: absolute;
            background: var(--orange);
            transition: width 0.4s ease;
            width: 0;
            height: 2px;
            z-index: 1;
          }

          .faq-item::before { top: 0; left: 0; }
          .faq-item::after { bottom: 0; right: 0; }

          .faq-item:hover {
            background: var(--surface);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(255,106,0,0.06);
            border-color: var(--line);
          }

          .faq-item:hover::before, .faq-item:hover::after {
            width: 100%;
          }
        `}</style>

        {/* Section Heading */}
        <div style={{
          borderLeft: '4px solid var(--orange)',
          paddingLeft: '24px',
          marginBottom: '40px'
        }}>
          <h1 style={{ 
            font: '800 2.4rem var(--h)', 
            color: 'var(--ink)',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            All Frequently Asked Questions
          </h1>
          <p style={{ 
            fontSize: '1.05rem', 
            color: 'var(--muted)', 
            fontFamily: 'var(--b)'
          }}>
            Explore our comprehensive list of answers regarding the Xon App, installation, features, and compatibility.
          </p>
        </div>

        {/* Full FAQ Accordion List */}
        <div style={{ marginBottom: '40px' }}>
          {allFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button 
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <span style={{ font: '800 1.1rem var(--h)', color: 'var(--ink)' }}>
                    {item.q}
                  </span>
                  <span style={{ 
                    font: '800 1.2rem var(--h)', 
                    color: 'var(--orange)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <p style={{ 
                      margin: 0, 
                      color: 'var(--muted)', 
                      fontSize: '0.97rem', 
                      lineHeight: '1.6',
                      fontFamily: 'var(--b)'
                    }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
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
    </main>
  );
}