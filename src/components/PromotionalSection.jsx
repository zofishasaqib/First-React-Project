import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const promos = [
  { title: 'Summer Sale', description: 'Up to 50% off on selected items', buttonText: 'Shop Sale' },
  { title: 'Free Shipping', description: 'On orders over $50', buttonText: 'Learn More' },
  { title: 'New Arrivals', description: 'Check out our latest products', buttonText: 'Explore' },
]

const PromotionalSection = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const observerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index])
            }, index * 150)
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.promo-card')
    cards.forEach(card => observerRef.current.observe(card))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-w-[1200px] mx-auto mb-12">
      {promos.map((promo, index) => (
        <div
          key={index}
          data-index={index}
          className={`promo-card bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white py-10 px-10 rounded-xl text-center shadow-lg transition-transform duration-300 hover:scale-105 ${
            visibleCards.includes(index) ? 'zoom-in' : 'opacity-0 scale-75'
          }`}
        >
          <h3 className="text-3xl mb-4">{promo.title}</h3>
          <p className="text-lg mb-5 opacity-95">{promo.description}</p>
          <button
            onClick={() => navigate('/promotions')}
            className="bg-white text-[#f5576c] py-3 px-8 text-base font-semibold border-none rounded-[25px] cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            {promo.buttonText}
          </button>
        </div>
      ))}
    </section>
  )
}

export default PromotionalSection
