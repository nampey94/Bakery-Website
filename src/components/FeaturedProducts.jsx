import { motion } from 'framer-motion'
import { featuredCategories } from '../data/products.js'
import { staggerContainer, staggerItem, hoverLift, viewport } from '../hooks/motion.js'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  return (
    <motion.section
      className="featured"
      id="featured"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="featured-grid" variants={staggerContainer}>
        {featuredCategories.map((cat, i) => (
          <motion.article
            className="featured-card"
            key={cat.id}
            tabIndex={0}
            aria-label={cat.name}
            variants={staggerItem}
            whileHover={hoverLift}
          >
            <span className="index">({i + 1})</span>
            <span className="arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
            <img src={cat.image} alt={cat.name} loading="lazy" />
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}
