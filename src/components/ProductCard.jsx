import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'
import { staggerItem, hoverLift, tapPress } from '../hooks/motion.js'
import './ProductCard.css'

export default function ProductCard({ product, onClick }) {
  const { addToCart } = useCart()

  const handleAdd = (e) => {
    e.stopPropagation()
    addToCart(product, 1)
  }

  return (
    <motion.article
      className="product-card"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick() }}
      role="button"
      aria-label={`${product.name}، $${product.price}`}
      variants={staggerItem}
      whileHover={hoverLift}
      whileTap={tapPress}
    >
      <div className="img-wrap">
        {product.badge && <span className="badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="body">
        <span className="cat">{product.category}</span>
        <span className="name">{product.name}</span>
        <p className="desc">{product.description}</p>
        <div className="footer">
          <span className="price">${product.price}</span>
          <motion.button
            className="add-btn"
            aria-label={`افزودن ${product.name} به سبد`}
            onClick={handleAdd}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
