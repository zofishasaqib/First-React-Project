import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary-light text-white py-20 px-10 rounded-2xl text-center mb-12 shadow-2xl ${
        isVisible ? 'fade-in-hero' : 'opacity-0 -translate-y-8'
      }`}
    >
      <div>
        <h2 className="text-5xl mb-5 font-bold">Welcome to ShopeSphere E-Commerce Store</h2>
        <p className="text-xl mb-8 opacity-95">Discover amazing products at unbeatable prices</p>
        <button
          onClick={() => navigate('/promotions')}
          className="bg-white text-primary py-4 px-10 text-lg font-semibold border-none rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default HeroBanner
