import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext.jsx'
import './ProductModal.css'

export default function ProductModal({ product, onClose }) {
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    setQty(1)
  }, [product])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (product) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div className="modal-overlay open" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <img className="modal-img" src={product.image} alt={product.name} />
        <div className="modal-content">
          <span className="cat">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="desc">{product.description}</p>
          <div className="detail-section">
            <div className="label">Ingredients</div>
            <div className="tags">
              {product.ingredients.map((ing) => (
                <span className="tag" key={ing}>{ing}</span>
              ))}
            </div>
          </div>
          <div className="detail-section">
            <div className="label">Allergens</div>
            <div className="tags">
              {product.allergens.map((a) => (
                <span className="tag" key={a}>{a}</span>
              ))}
            </div>
          </div>
          <div className="price-row">
            <span className="price">${product.price * qty}</span>
            <div className="qty-control">
              <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>
          <button className="btn-pill btn-pill-dark" style={{ width: '100%', marginTop: 8 }}
            onClick={() => { addToCart(product, qty); onClose() }}>
            Add to Cart — ${product.price * qty}
          </button>
        </div>
      </div>
    </div>
  )
}
