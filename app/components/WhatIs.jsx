export default function WhatIs() {
  return (
    <section id="about" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Section Heading aligned with App Information */}
      <div style={{
        paddingLeft: '20px',
        paddingRight: '24px',
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
          What is Xon App?
        </h2>
      </div>

      {/* Content Container aligned with App Information grid container */}
      <div style={{ padding: '0 24px' }}>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          color: 'var(--muted)', 
          marginBottom: '20px',
          fontFamily: 'var(--b)'
        }}>
          Xon is a mobile application for watching cartoons and anime on phones and smart TVs. The layout of the app is simple and clear. Younger users can easily find the content without any confusion. There are also some limitations in the app that you should know. It requires a strong internet connection.
        </p>

        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.8', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          For bigger screens, the Xon App is a good option. The home screen uses colourful posters and large thumbnails that make it easy to recognize different shows. Episodes open smoothly, and the controls are easy to understand for new users. You can switch between episodes quickly.
        </p>
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