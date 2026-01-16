import React from 'react'
import Navigation from '../components/Navigation'
import HeroBanner from '../components/HeroBanner'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedProducts from '../components/FeaturedProducts'
import AllProductsSection from '../components/AllProductsSection'
import PromotionalSection from '../components/PromotionalSection'
import Footer from '../components/Footer'
import StickyCart from '../components/StickyCart'

const Home = () => {
  return (
    <div className="p-5">
      <Navigation />
      <HeroBanner />
      <CategoriesSection />
      <FeaturedProducts />
      <AllProductsSection />
      <PromotionalSection />
      <Footer />
      <StickyCart />
    </div>
  )
}

export default Home
