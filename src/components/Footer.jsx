import './Footer.css'

export default function Footer({ onNavClick }) {
  const links = [
    { label: 'Catalog', id: 'catalog' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ]
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">the bake</div>
        <nav className="footer-links" aria-label="Footer">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => onNavClick(e, l.id)}>{l.label}</a>
          ))}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Bake. All rights reserved.</span>
        <span>Made with care in London.</span>
      </div>
    </footer>
  )
}
