import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?w=1400&q=85&auto=format&fit=crop"
          alt="شیرینی تازه در نانوایی"
          loading="eager"
        />
        <h1 className="hero-headline">
          شیرینی تازه برای<br />
          تمام روز.<br />
          <span className="bold">برای هر روز.</span>
        </h1>

        {/* Floating left card */}
        <div className="hero-card-left">
          <img
            src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80&auto=format&fit=crop"
            alt="نانوا با سینی نان تازه"
            loading="lazy"
          />
          <div className="card-body">
            <p>ما برای کسانی ساخته شده‌ایم که قدر صنعت صادقانه و کار روزمره را می‌دانند.</p>
          </div>
        </div>

        {/* Floating right card */}
        <div className="hero-card-right">
          <div className="card-header">
            <span className="title">رول دارچینی</span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C7 2 3 6 3 11s4 9 9 9 9-4 9-9-4-9-9-9z"/>
              <path d="M12 6c-2.5 0-4.5 2-4.5 4.5S9.5 15 12 15s4.5-2 4.5-4.5S14.5 6 12 6z"/>
            </svg>
          </div>
          <img
            src="https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?w=400&q=80&auto=format&fit=crop"
            alt="رول دارچینی تازه پخته"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
