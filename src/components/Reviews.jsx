import { motion } from 'framer-motion'
import { reviews } from '../data/products.js'
import { fadeUp, staggerContainer, staggerItem, hoverLift, viewport } from '../hooks/motion.js'
import './Reviews.css'

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} از ۵ ستاره`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <motion.section
      className="reviews"
      id="reviews"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.h2 variants={fadeUp}>نظرات</motion.h2>
      <motion.div className="reviews-scroll" variants={staggerContainer}>
        {reviews.map((r) => (
          <motion.article
            className="review-card"
            key={r.id}
            variants={staggerItem}
            whileHover={hoverLift}
          >
            <Stars count={r.rating} />
            <p className="text">"{r.text}"</p>
            <div className="author">
              <div className="name">{r.name}</div>
              <div className="location">{r.location}</div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}
