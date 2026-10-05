import { featuredCategories } from '../data/products.js'
import { useReveal } from '../hooks/useReveal.js'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  const { ref, visible } = useReveal()
  return (
    <section className="featured reveal" ref={ref} id="featured">
      <div className={`featured-grid${visible ? ' is-visible' : ''}`}>
        {featuredCategories.map((cat, i) => (
          <article className="featured-card" key={cat.id} tabIndex={0} aria-label={cat.name}>
            <span className="index">({i + 1})</span>
            <span className="arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
            <img src={cat.image} alt={cat.name} loading="lazy" />
          </article>
        ))}
      </div>
    </section>
  )
}
