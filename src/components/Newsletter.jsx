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
        <h2>Fresh from the oven.</h2>
        <p>Get new bakes, seasonal drops and bakery news in your inbox.</p>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
            aria-label="Email address"
            aria-invalid={status === 'error'}
          />
          <button type="submit">Subscribe</button>
        </form>
        {status === 'error' && <div className="newsletter-error">Please enter a valid email address.</div>}
        {status === 'success' && (
          <div className="newsletter-success show">Thank you! You're on the list. 🥐</div>
        )}
      </div>
    </section>
  )
}
