import { useEffect } from 'react'
import { useCart } from '../context/CartContext.jsx'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQty, subtotal, count } = useCart()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeCart() }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  return (
    <>
      <div className={`cart-overlay${isOpen ? ' open' : ''}`} onClick={closeCart} />
      <aside className={`cart-drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen} aria-label="Shopping cart">
        <div className="cart-header">
          <h2>Your Cart {count > 0 && `(${count})`}</h2>
          <button className="cart-close" aria-label="Close cart" onClick={closeCart}>×</button>
        </div>
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p>Your cart is empty.<br />Add some fresh bakes!</p>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="price">${item.price} each</span>
                  <div className="qty">
                    <button aria-label="Decrease" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button aria-label="Increase" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="label">Subtotal</span>
              <span className="amount">${subtotal}</span>
            </div>
            <button className="btn-pill btn-pill-dark cart-checkout">Checkout</button>
          </div>
        )}
      </aside>
    </>
  )
}
