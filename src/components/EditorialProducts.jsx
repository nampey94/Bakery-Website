import { useReveal } from '../hooks/useReveal.js'
import './EditorialProducts.css'

export default function EditorialProducts() {
  const { ref, visible } = useReveal()
  return (
    <section className="editorial reveal" ref={ref} id="editorial">
      <span className="micro-label label">محصولات</span>
      <div className={`big-text${visible ? ' is-visible' : ''}`}>LOAFA</div>
      <div className="bread-wrap">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=85&auto=format&fit=crop"
          alt="نان خمیر ترش روستایی"
          loading="lazy"
        />
        <img
          className="slice"
          src="https://images.unsplash.com/photo-1586657263857-346c4b712ff5?w=600&q=85&auto=format&fit=crop"
          alt="برش نان خمیر ترش"
          loading="lazy"
        />
      </div>
      <div className="product-card">
        <div className="info">
          <div className="sub">سنتی</div>
          <div className="name">خمیر ترش</div>
        </div>
        <div className="price">$8</div>
        <div className="badge">39</div>
      </div>
    </section>
  )
}
