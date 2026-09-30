export default function Footer() {
  return (
    <footer>
      <div className="w" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <b>Xon App</b> — Your ultimate entertainment destination for cartoons and anime[cite: 1].
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          &copy; 2026 Xonapp Dev[cite: 1]. All rights reserved.
        </div>
      </div>
    </footer>
  );
}