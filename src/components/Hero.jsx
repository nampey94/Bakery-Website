import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?w=1400&q=85&auto=format&fit=crop"
          alt="A woman enjoying a fresh croissant at the bakery"
          loading="eager"
        />
        <h1 className="hero-headline">
          Fresh pastries for<br />
          the whole day.<br />
          <span className="bold">For every day.</span>
        </h1>

        {/* Floating left card */}
        <div className="hero-card-left">
          <img
            src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80&auto=format&fit=crop"
            alt="A baker holding a tray of fresh bread"
            loading="lazy"
          />
          <div className="card-body">
            <p>We're made for those who appreciate honest craft and careful, daily work.</p>
          </div>
        </div>

        {/* Floating right card */}
        <div className="hero-card-right">
          <div className="card-header">
            <span className="title">Cinnamon roll</span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C7 2 3 6 3 11s4 9 9 9 9-4 9-9-4-9-9-9z"/>
              <path d="M12 6c-2.5 0-4.5 2-4.5 4.5S9.5 15 12 15s4.5-2 4.5-4.5S14.5 6 12 6z"/>
            </svg>
          </div>
          <img
            src="https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?w=400&q=80&auto=format&fit=crop"
            alt="A freshly baked cinnamon roll"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
