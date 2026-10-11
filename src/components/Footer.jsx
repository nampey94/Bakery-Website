import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../hooks/motion.js'
import './Footer.css'

export default function Footer({ onNavClick }) {
  const links = [
    { label: 'محصولات', id: 'catalog' },
    { label: 'درباره ما', id: 'about' },
    { label: 'نظرات', id: 'reviews' },
    { label: 'تماس', id: 'contact' },
  ]
  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="footer-top">
        <div className="footer-logo">LOAFA</div>
        <nav className="footer-links" aria-label="پاورقی">
          {links.map((l) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => onNavClick(e, l.id)}
              whileHover={{ opacity: 0.6, x: -4 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.6, x: -4 }}
          >
            اینستاگرام
          </motion.a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© ۲۰۲۶ لوفا. تمام حقوق محفوظ است.</span>
        <span>ساخته شده با عشق در لندن.</span>
      </div>
    </motion.footer>
  )
}
