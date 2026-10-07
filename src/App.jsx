import { useState, useCallback, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import ContactPage from './components/ContactPage.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault()
    setMenuOpen(false)

    if (id === 'contact') {
      navigate('/contact')
      return
    }

    if (id === 'top') {
      if (location.pathname !== '/') {
        navigate('/')
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, navigate])

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
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <BrandMission />
                  <FeaturedProducts />
                  <EditorialProducts />
                  <ProductCatalog onSelectProduct={setSelectedProduct} />
                  <About />
                  <Reviews />
                  <Newsletter />
                </>
              } />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
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
