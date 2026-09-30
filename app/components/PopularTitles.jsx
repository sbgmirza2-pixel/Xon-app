'use client';

export default function PopularTitles() {
  const titles = [
    'Beyblade', 'My Hero Academia', 'Batman: The Animated Series', 'Naruto', 
    'Dragon Ball Z', 'Attack on Titan', 'Death Note', 'Shaun the Sheep', 
    'Iron Man', 'Spider Man', 'One Piece', 'Demon Slayer', 
    'Tom and Jerry', 'Haddi mera Buddy', 'Oggy and the Cockroaches', 'Scooby Doo', 
    'Rent-A-Girlfriend', 'Ninja Hattori', 'Perman', 'Chota Bheem', 
    'Ben10', 'Pokemon', 'Shinchan', 'Doraemon', 'Jujutsu Kaisen'
  ];

  return (
    <section id="titles" style={{
      padding: '60px 20px 40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <div style={{
        borderLeft: '4px solid var(--aqua)',
        paddingLeft: '24px',
        marginBottom: '30px'
      }}>
        <h2 style={{ 
          font: '800 2.2rem var(--h)', 
          color: 'var(--ink)',
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Popular Titles on Xon App
        </h2>
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'var(--muted)', 
          fontFamily: 'var(--b)'
        }}>
          Some of the popular titles you will find on the Xon app, along with many more of your favourite characters:
        </p>
      </div>

      {/* Modern Pill Tags Layout with Working Hover Effect */}
      <ul style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        padding: 0,
        listStyle: 'none',
        margin: '0 0 40px 0'
      }}>
        {titles.map((title, index) => (
          <li 
            key={index} 
            style={{ 
              background: 'var(--surface)', 
              border: '1px solid var(--line)', 
              borderRadius: '999px', 
              padding: '8px 18px', 
              fontWeight: '700',
              fontSize: '0.95rem',
              color: 'var(--ink)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--aqua)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.color = 'var(--aqua)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.color = 'var(--ink)';
            }}
          >
            {title}
          </li>
        ))}
      </ul>

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