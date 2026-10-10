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
            alt="نان تازه روی قفسه‌ها" loading="lazy" />
          <img className="sub-img"
            src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500&q=80&auto=format&fit=crop"
            alt="نانوا در حال آماده‌سازی خمیر" loading="lazy" />
        </div>
        <div className="about-text">
          <h2>لوفا یک نانوایی سنتی مدرن است که حول مواد ساده، صنعت دقیق و آیین‌های روزمره ساخته شده است.</h2>
          <p>هر نان و شیرینی پیش از طلوع آفتاب شروع می‌شود. ما در دسته‌های کوچک مخلوط، شکل و پخت می‌کنیم تا آنچه می‌چشیدید ساعت‌ها — نه روزها — پیش ساخته شده باشد.</p>
          <p>بی‌راه‌رو، بدون مواد نگهدارنده. فقط آرد، آب، نمک، زمان و گرمی یک تنور واقعی.</p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="num">۱۲+</div>
              <div className="label">سال صنعت</div>
            </div>
            <div className="about-stat">
              <div className="num">۲۴</div>
              <div className="label">پخت روزانه</div>
            </div>
            <div className="about-stat">
              <div className="num">۱۰۰٪</div>
              <div className="label">مواد تازه</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
