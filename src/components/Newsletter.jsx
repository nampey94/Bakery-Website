import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error
  const { ref, visible } = useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="newsletter reveal" ref={ref} id="newsletter">
      <div className={`newsletter-inner${visible ? ' is-visible' : ''}`}>
        <h2>تازه از تنور.</h2>
        <p>اخبار نانوایی، محصولات فصلی و نان تازه را در ایمیل خود دریافت کنید.</p>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="آدرس ایمیل شما"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
            aria-label="آدرس ایمیل"
            aria-invalid={status === 'error'}
          />
          <button type="submit">عضویت</button>
        </form>
        {status === 'error' && <div className="newsletter-error">لطفاً یک آدرس ایمیل معتبر وارد کنید.</div>}
        {status === 'success' && (
          <div className="newsletter-success show">سپاسگزاریم! شما در لیست هستید. 🥐</div>
        )}
      </div>
    </section>
  )
}
