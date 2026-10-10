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
      <aside className={`cart-drawer${isOpen ? ' open' : ''}`} aria-hidden={!isOpen} aria-label="سبد خرید">
        <div className="cart-header">
          <h2>سبد خرید {count > 0 && `(${count})`}</h2>
          <button className="cart-close" aria-label="بستن سبد" onClick={closeCart}>×</button>
        </div>
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p>سبد خرید شما خالی است.<br />چند نان تازه اضافه کنید!</p>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="price">${item.price} هر عدد</span>
                  <div className="qty">
                    <button aria-label="کاهش" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button aria-label="افزایش" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove" onClick={() => removeFromCart(item.id)}>حذف</button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="label">جمع کل</span>
              <span className="amount">${subtotal}</span>
            </div>
            <button className="btn-pill btn-pill-dark cart-checkout">تسویه حساب</button>
          </div>
        )}
      </aside>
    </>
  )
}
