import { useReveal } from '../hooks/useReveal.js'
import './Contact.css'

export default function Contact() {
  const { ref, visible } = useReveal()
  return (
    <section className="contact reveal" ref={ref} id="contact">
      <div className={`contact-grid${visible ? ' is-visible' : ''}`}>
        <div className="contact-info">
          <h2>Visit Us</h2>
          <div className="contact-row">
            <span className="label">Address</span>
            <span className="value">42 Redchurch Street, Shoreditch, London E2 7DP</span>
          </div>
          <div className="contact-row">
            <span className="label">Opening Hours</span>
            <div className="hours">
              <div>
                <div className="value">Mon–Fri</div>
                <div className="value" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>07:00–18:00</div>
              </div>
              <div>
                <div className="value">Sat–Sun</div>
                <div className="value" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>08:00–17:00</div>
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
          <a className="btn-pill btn-pill-dark contact-cta" href="#top">Visit us</a>
        </div>
        <div className="contact-map">
          <img
            src="https://images.unsplash.com/photo-1700915704616-b455b3679024?w=800&q=80&auto=format&fit=crop"
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
