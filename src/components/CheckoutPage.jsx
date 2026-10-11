import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './CheckoutPage.css'

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <section className="checkout-page">
        <div className="checkout-success">
          <div className="success-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2>سفارش شما ثبت شد!</h2>
          <p>از سفارش شما سپاسگزاریم. به‌زودی برای هماهنگی تحویل با شما تماس می‌گیریم.</p>
          <button className="btn-pill btn-pill-dark" onClick={() => navigate('/')}>
            بازگشت به خانه
          </button>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="checkout-page">
        <div className="checkout-success">
          <h2>سبد خرید شما خالی است</h2>
          <p>برای تسویه حساب، ابتدا محصولات را به سبد اضافه کنید.</p>
          <button className="btn-pill btn-pill-dark" onClick={() => navigate('/menu')}>
            مشاهده منو
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <span className="micro-label">تسویه حساب</span>
        <h1>تکمیل سفارش</h1>
      </div>
      <div className="checkout-container">
        <div className="checkout-summary">
          <h2>خلاصه سفارش</h2>
          <div className="checkout-items">
            {items.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="checkout-item-info">
                  <span className="checkout-item-name">{item.name}</span>
                  <span className="checkout-item-qty">
                    {item.qty} × ${item.price}
                  </span>
                </div>
                <span className="checkout-item-subtotal">
                  ${item.price * item.qty}
                </span>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <span>جمع کل</span>
            <span>${subtotal}</span>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>اطلاعات تماس</h2>
          <p className="checkout-note">
            پرداخت آنلاین فعال نیست. سفارش شما ثبت می‌شود و ما برای هماهنگی پرداخت
            و تحویل با شما تماس می‌گیریم.
          </p>
          <div className="form-field">
            <label>نام و نام خانوادگی</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label>ایمیل</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label>شماره تماس</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="form-field">
            <label>آدرس تحویل</label>
            <textarea
              required
              rows="3"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <button type="submit" className="btn-pill btn-pill-dark checkout-submit">
            ثبت سفارش
          </button>
        </form>
      </div>
    </section>
  )
}
