import { useState, useMemo } from 'react'
import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './ProductCatalog.css'

const FILTERS = ['همه', 'نان‌ها', 'شیرینی‌ها', 'شیرین', 'فصلی']

export default function ProductCatalog({ onSelectProduct }) {
  const [filter, setFilter] = useState('همه')
  const { ref, visible } = useReveal()

  const filtered = useMemo(() => {
    if (filter === 'همه') return products
    return products.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section className="catalog reveal" ref={ref} id="catalog">
      <div className="catalog-header">
        <h2>فهرست محصولات</h2>
        <div className="filters" role="tablist" aria-label="دسته‌بندی محصولات">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className={`product-grid${visible ? ' is-visible' : ''}`}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => onSelectProduct(p)} />
        ))}
      </div>
    </section>
  )
}
