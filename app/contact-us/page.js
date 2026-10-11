
import Navbar from '../components/Navbar';

const SITE_URL = 'https://xonapp.net';

export const metadata = {
  title: 'Contact Us - Xon App Support & Feedback',
  description: 'Get in touch with the Xon App team for questions, feedback, technical support, or content corrections. We are here to help.',
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
};

export default function ContactUs() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', paddingTop: '95px' }}>
      {/* Fixed Navbar Component */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Contact Us Content Section */}
      <section style={{
        padding: '40px 20px 60px 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Page Header */}
        <div style={{
          paddingLeft: '20px',
          borderLeft: '4px solid var(--orange)',
          marginBottom: '35px'
        }}>
          <h1 style={{ 
            font: '800 2.5rem var(--h)', 
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'var(--muted)', 
            margin: '8px 0 0 0', 
            fontFamily: 'var(--b)' 
          }}>
            Have a question, suggestion, or content issue? Get in touch with us and we will review your message.
          </p>
        </div>

        {/* Content Card */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div>
            <h2 style={{ font: '800 1.4rem var(--h)', color: 'var(--ink)', margin: '0 0 12px 0' }}>
              Get in Touch
            </h2>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              If you have a question, suggestion, or notice something that needs to be corrected, feel free to contact us.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              What We Can Help With
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
              You can reach out about website content, incorrect information, technical issues, copyright concerns, or general feedback.
            </p>
          </div>

          <div style={{ height: '1px', background: 'var(--line)', width: '100%' }} />

          <div>
            <h3 style={{ font: '800 1.2rem var(--h)', color: 'var(--ink)', margin: '0 0 10px 0' }}>
              Email Address
            </h3>
            <p style={{ font: '1rem var(--b)', color: 'var(--muted)', lineHeight: '1.7', margin: '0 0 12px 0' }}>
              Email: <a href="mailto:support@xonapp.net" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: '700' }}>support@xonapp.net</a>
            </p>
            <p style={{ font: '0.9rem var(--b)', color: 'var(--muted)', lineHeight: '1.6', margin: 0 }}>
              Please share the page name or relevant details in your message. This helps us understand the issue and respond properly.
            </p>
          </div>
        </div>
      </section>

    
    </main>
  );
}