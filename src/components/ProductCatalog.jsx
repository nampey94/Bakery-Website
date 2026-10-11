import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import { fadeUp, staggerContainer, viewport } from '../hooks/motion.js'
import './ProductCatalog.css'

const FILTERS = ['همه', 'نان‌ها', 'شیرینی‌ها', 'شیرین', 'فصلی']

export default function ProductCatalog({ onSelectProduct }) {
  const [filter, setFilter] = useState('همه')

  const filtered = useMemo(() => {
    if (filter === 'همه') return products
    return products.filter((p) => p.category === filter)
  }, [filter])

  return (
    <motion.section
      className="catalog"
      id="catalog"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="catalog-header" variants={fadeUp}>
        <h2>فهرست محصولات</h2>
        <div className="filters" role="tablist" aria-label="دسته‌بندی محصولات">
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <motion.div className="product-grid" variants={staggerContainer}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => onSelectProduct(p)} />
        ))}
      </motion.div>
    </motion.section>
  )
}
