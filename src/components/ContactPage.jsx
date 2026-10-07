import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import './ContactPage.css'

export default function ContactPage() {
  const { ref, visible } = useReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <section className="contact-page reveal" ref={ref}>
      <div className={`contact-page-inner${visible ? ' is-visible' : ''}`}>
        <span className="micro-label">Get in touch</span>
        <h1 className="contact-page-title">Contact Us</h1>

        <div className="contact-page-grid">
          <div className="contact-page-info">
            <p className="contact-page-intro">
              We'd love to hear from you — whether it's a custom order, a question
              about our daily bakes, or just to say hello.
            </p>

            <div className="contact-row">
              <span className="label">Address</span>
              <span className="value">42 Redchurch Street, Shoreditch, London E2 7DP</span>
            </div>

            <div className="contact-row">
              <span className="label">Opening Hours</span>
              <div className="hours">
                <div>
                  <div className="value">Mon–Fri</div>
                  <div className="value sub">07:00–18:00</div>
                </div>
                <div>
                  <div className="value">Sat–Sun</div>
                  <div className="value sub">08:00–17:00</div>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <span className="label">Phone</span>
              <span className="value">+44 20 7946 0321</span>
            </div>

            <div className="contact-row">
              <span className="label">Email</span>
              <span className="value">hello@thebake.co</span>
            </div>
          </div>

          <div className="contact-page-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a message</h3>
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input type="text" id="cf-name" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Email</label>
                <input type="email" id="cf-email" placeholder="you@example.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="cf-subject">Subject</label>
                <input type="text" id="cf-subject" placeholder="How can we help?" />
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" rows="5" placeholder="Tell us more..." required></textarea>
              </div>
              <button type="submit" className="btn-pill btn-pill-dark contact-submit">
                {sent ? 'Message sent ✓' : 'Send message'}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-page-map">
          <img
            src="https://images.unsplash.com/photo-1700915704616-b455b3679024?w=1200&q=80&auto=format&fit=crop"
            alt="Map showing bakery location in Shoreditch, London"
            loading="lazy"
          />
          <div className="pin">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
