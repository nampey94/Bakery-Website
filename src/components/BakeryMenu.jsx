import { menuProducts } from '../data/products.js'
import MenuProductCard from './MenuProductCard.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './BakeryMenu.css'

export default function BakeryMenu() {
  const { ref, visible } = useReveal()

  return (
    <section className="bakery-menu" id="menu">
      <div className="menu-banner">
        <img src="/bakery-menu.jpg" alt="شیرینی‌های تازه‌پز لوفا" />
        <div className="menu-banner-overlay">
          <span className="micro-label">منوی شیرینی‌ها</span>
          <h1>شیرینی‌های تازه‌پز</h1>
          <p>هر روز صبح با کره فرانسوی و شکلات والرونا پخته می‌شوند</p>
        </div>
      </div>

      <div className={`menu-content reveal${visible ? ' is-visible' : ''}`} ref={ref}>
        <div className="menu-intro">
          <h2>انتخاب شما</h2>
          <p>تعداد مورد نظر از هر شیرینی را انتخاب کنید و به سفارش اضافه کنید</p>
        </div>
        <div className={`menu-grid${visible ? ' is-visible' : ''}`}>
          {menuProducts.map((p) => (
            <MenuProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
