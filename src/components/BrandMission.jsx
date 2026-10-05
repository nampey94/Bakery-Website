import { useReveal } from '../hooks/useReveal.js'
import './BrandMission.css'

export default function BrandMission() {
  const { ref, visible } = useReveal()
  return (
    <section className="mission reveal" ref={ref} id="mission">
      <div className={`left${visible ? ' is-visible' : ''}`}>
        <span className="micro-label">Brand Mission</span>
      </div>
      <div className="right">
        <p>
          The brand's goal is to give customers a feeling of loveliness and
          homely warmth — with a modern touch. We've designed a brand that is
          warm, yet modern.
        </p>
        <a className="btn-pill btn-pill-outline learn-btn" href="#about">
          Learn more
        </a>
      </div>
    </section>
  )
}
