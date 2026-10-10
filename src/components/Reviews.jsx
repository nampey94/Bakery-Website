import { reviews } from '../data/products.js'
import { useReveal } from '../hooks/useReveal.js'
import './Reviews.css'

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} از ۵ ستاره`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { ref, visible } = useReveal()
  return (
    <section className="reviews reveal" ref={ref} id="reviews">
      <h2 className={visible ? ' is-visible' : ''}>نظرات</h2>
      <div className="reviews-scroll">
        {reviews.map((r) => (
          <article className="review-card" key={r.id}>
            <Stars count={r.rating} />
            <p className="text">"{r.text}"</p>
            <div className="author">
              <div className="name">{r.name}</div>
              <div className="location">{r.location}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
