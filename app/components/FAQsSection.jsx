'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Sirf pehle 3 FAQs homepage ke liye
  const faqs = [
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
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Inline Styles for Hover & Accordion */}
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

        .view-all-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--ink);
          font: 700 0.95rem var(--h);
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .view-all-btn::before {
          content: '';
          position: absolute;
          background: var(--orange);
          transition: width 0.4s ease;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
        }

        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255,106,0,0.1);
          border-color: var(--orange);
          color: var(--orange-ink);
        }

        .view-all-btn:hover::before {
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
          Frequently Asked Questions
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Got questions about Xon App? Here are answers to some of the most common queries.
        </p>
      </div>

      {/* Accordion List */}
      <div style={{ marginBottom: '35px' }}>
        {faqs.map((item, index) => {
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

      {/* View All FAQs Button Container */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link href="/faqs" className="view-all-btn">
          View All FAQs &rarr;
        </Link>
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