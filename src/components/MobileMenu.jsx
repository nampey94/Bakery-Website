import './MobileMenu.css'

export default function MobileMenu({ open, onClose, onNavClick }) {
  const links = [
    { label: 'Catalog', id: 'catalog' },
    { label: 'About Us', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ]
  return (
    <>
      <div className={`mobile-overlay${open ? ' open' : ''}`} onClick={onClose} />
      <nav className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <button className="close-btn" aria-label="Close menu" onClick={onClose}>×</button>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => { onNavClick(e, l.id); onClose() }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  )
}
