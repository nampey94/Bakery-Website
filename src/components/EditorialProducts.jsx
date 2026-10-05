import { useReveal } from '../hooks/useReveal.js'
import './EditorialProducts.css'

export default function EditorialProducts() {
  const { ref, visible } = useReveal()
  return (
    <section className="editorial reveal" ref={ref} id="editorial">
      <span className="micro-label label">Products</span>
      <div className={`big-text${visible ? ' is-visible' : ''}`}>the bake</div>
      <div className="bread-wrap">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85&auto=format&fit=crop"
          alt="A whole rustic sourdough loaf"
          loading="lazy"
        />
        <img
          className="slice"
          src="https://images.unsplash.com/photo-1585478259715-876acc5be552?w=600&q=85&auto=format&fit=crop"
          alt="A sliced piece of sourdough bread"
          loading="lazy"
        />
      </div>
      <div className="product-card">
        <div className="info">
          <div className="sub">Artisan</div>
          <div className="name">sourdough</div>
        </div>
        <div className="price">$8</div>
        <div className="badge">39</div>
      </div>
    </section>
  )
}
