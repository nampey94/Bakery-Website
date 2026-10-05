import { useReveal } from '../hooks/useReveal.js'
import './About.css'

export default function About() {
  const { ref, visible } = useReveal()
  return (
    <section className="about reveal" ref={ref} id="about">
      <div className={`about-grid${visible ? ' is-visible' : ''}`}>
        <div className="about-images">
          <img className="main-img"
            src="https://images.unsplash.com/photo-1693483640461-267d788b6148?w=800&q=85&auto=format&fit=crop"
            alt="Freshly baked bread cooling on racks" loading="lazy" />
          <img className="sub-img"
            src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500&q=80&auto=format&fit=crop"
            alt="A baker shaping dough by hand" loading="lazy" />
        </div>
        <div className="about-text">
          <h2>The Bake is a modern artisan bakery built around simple ingredients, careful craft and everyday rituals.</h2>
          <p>Every loaf and pastry starts before dawn. We mix, shape, and bake in small batches so that what you taste was made hours — not days — ago.</p>
          <p>No shortcuts, no preservatives. Just flour, water, salt, time, and the warmth of a real oven.</p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="num">12+</div>
              <div className="label">Years of Craft</div>
            </div>
            <div className="about-stat">
              <div className="num">24</div>
              <div className="label">Daily Bakes</div>
            </div>
            <div className="about-stat">
              <div className="num">100%</div>
              <div className="label">Fresh Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
