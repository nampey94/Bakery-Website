import { motion } from 'framer-motion'
import { menuProducts } from '../data/products.js'
import MenuProductCard from './MenuProductCard.jsx'
import { fadeUp, staggerContainer, viewport } from '../hooks/motion.js'
import './BakeryMenu.css'

export default function BakeryMenu() {
  return (
    <section className="bakery-menu" id="menu">
      <motion.div
        className="menu-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8 }}
      >
        <img src="/bakery-menu.jpg" alt="شیرینی‌های تازه‌پز لوفا" />
        <div className="menu-banner-overlay">
          <span className="micro-label">منوی شیرینی‌ها</span>
          <h1>شیرینی‌های تازه‌پز</h1>
          <p>هر روز صبح با کره فرانسوی و شکلات والرونا پخته می‌شوند</p>
        </div>
      </motion.div>

      <motion.div
        className="menu-content"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div className="menu-intro" variants={fadeUp}>
          <h2>انتخاب شما</h2>
          <p>تعداد مورد نظر از هر شیرینی را انتخاب کنید و به سفارش اضافه کنید</p>
        </motion.div>
        <motion.div className="menu-grid" variants={staggerContainer}>
          {menuProducts.map((p) => (
            <MenuProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
