import './Footer.css'

export default function Footer({ onNavClick }) {
  const links = [
    { label: 'محصولات', id: 'catalog' },
    { label: 'درباره ما', id: 'about' },
    { label: 'نظرات', id: 'reviews' },
    { label: 'تماس', id: 'contact' },
  ]
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">LOAFA</div>
        <nav className="footer-links" aria-label="پاورقی">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => onNavClick(e, l.id)}>{l.label}</a>
          ))}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">اینستاگرام</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© ۲۰۲۶ لوفا. تمام حقوق محفوظ است.</span>
        <span>ساخته شده با عشق در لندن.</span>
      </div>
    </footer>
  )
}
