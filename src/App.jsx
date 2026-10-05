import { useState, useCallback } from 'react'
import { CartProvider } from './context/CartContext.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Hero from './components/Hero.jsx'
import BrandMission from './components/BrandMission.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import EditorialProducts from './components/EditorialProducts.jsx'
import ProductCatalog from './components/ProductCatalog.jsx'
import ProductModal from './components/ProductModal.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Newsletter from './components/Newsletter.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <CartProvider>
      <div className="page">
        <AnnouncementBar />
        <div className="site-container">
          <Header
            onNavClick={handleNavClick}
            onOpenMenu={() => setMenuOpen((o) => !o)}
            menuOpen={menuOpen}
          />
          <main>
            <Hero />
            <BrandMission />
            <FeaturedProducts />
            <EditorialProducts />
            <ProductCatalog onSelectProduct={setSelectedProduct} />
            <About />
            <Reviews />
            <Newsletter />
            <Contact />
          </main>
          <Footer onNavClick={handleNavClick} />
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavClick={handleNavClick} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <CartDrawer />
    </CartProvider>
  )
}
