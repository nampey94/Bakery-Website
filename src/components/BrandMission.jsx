import { useReveal } from '../hooks/useReveal.js'
import './BrandMission.css'

export default function BrandMission() {
  const { ref, visible } = useReveal()
  return (
    <section className="mission reveal" ref={ref} id="mission">
      <div className={`left${visible ? ' is-visible' : ''}`}>
        <span className="micro-label">مأموریت برند</span>
      </div>
      <div className="right">
        <p>
          هدف برند ما این است که به مشتریان احساس زیبایی و گرمای خانه‌ای
          را با لمسی مدرن بدهیم. برندی طراحی کرده‌ایم که گرم اما مدرن است.
        </p>
        <a className="btn-pill btn-pill-outline learn-btn" href="#about">
          بیشتر بدانید
        </a>
      </div>
    </section>
  )
}
