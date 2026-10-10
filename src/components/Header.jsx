import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import './Header.css'

export default function Header({ onNavClick, onOpenMenu, menuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const { count, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <a className="logo" href="#top" onClick={(e) => onNavClick(e, 'top')}>
        LOAFA
      </a>
      <div className="nav-right">
        <nav className="nav-links" aria-label="ناوبری اصلی">
          <a className="nav-link" href="#catalog" onClick={(e) => onNavClick(e, 'catalog')}>محصولات</a>
          <a className="nav-link" href="#about" onClick={(e) => onNavClick(e, 'about')}>درباره ما</a>
          <a className="nav-link" href="#reviews" onClick={(e) => onNavClick(e, 'reviews')}>نظرات</a>
        </nav>
        <button className="icon-btn" aria-label="تماس با ما">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </button>
        <a className="btn-pill btn-pill-dark" href="#contact" onClick={(e) => onNavClick(e, 'contact')}>
          تماس با ما
        </a>
        <button className="icon-btn cart-btn" aria-label="باز کردن سبد" onClick={openCart}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {count > 0 && <span className="cart-badge">{count}</span>}
        </button>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} aria-label="منو" aria-expanded={menuOpen} onClick={onOpenMenu}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
