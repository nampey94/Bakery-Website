import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import './MenuProductCard.css'

export default function MenuProductCard({ product }) {
  const [qty, setQty] = useState(0)
  const { addToCart } = useCart()

  const handleAdd = () => {
    if (qty > 0) {
      addToCart(product, qty)
      setQty(0)
    }
  }

  return (
    <article className="menu-card">
      <div className="menu-card-img">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="menu-card-body">
        <h3 className="menu-card-name">{product.name}</h3>
        <p className="menu-card-desc">{product.description}</p>
        <div className="menu-card-price">${product.price}</div>
        <div className="menu-card-actions">
          <div className="menu-qty">
            <button
              onClick={() => setQty((q) => Math.max(0, q - 1))}
              disabled={qty === 0}
              aria-label="کاهش تعداد"
            >
              −
            </button>
            <span className="menu-qty-val">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              aria-label="افزایش تعداد"
            >
              +
            </button>
          </div>
          <button
            className="menu-add-btn"
            disabled={qty === 0}
            onClick={handleAdd}
          >
            {qty > 0 ? `افزودن ${qty} به سفارش` : 'افزودن به سفارش'}
          </button>
        </div>
      </div>
    </article>
  )
}
