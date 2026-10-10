import './MobileMenu.css'

export default function MobileMenu({ open, onClose, onNavClick }) {
  const links = [
    { label: 'محصولات', id: 'catalog' },
    { label: 'درباره ما', id: 'about' },
    { label: 'نظرات', id: 'reviews' },
    { label: 'تماس', id: 'contact' },
  ]
  return (
    <>
      <div className={`mobile-overlay${open ? ' open' : ''}`} onClick={onClose} />
      <nav className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <button className="close-btn" aria-label="بستن منو" onClick={onClose}>×</button>
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
