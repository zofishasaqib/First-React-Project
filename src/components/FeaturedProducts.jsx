import React, { useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext'
import Notification from './Notification'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, rating: 5, image: 'wirelessheadphones.jpg' },
  { id: 2, name: 'Smart Watch', price: 199.99, rating: 4, image: 'smartwatch.jpg' },
  { id: 3, name: 'Laptop Backpack', price: 49.99, rating: 5, image: 'laptopbackpack.jpg' },
  { id: 13, name: 'Charging Cables', price: 16.99, rating: 5, image: 'chargingcables.jpg' },
  { id: 12, name: 'Wireless Mouse', price: 19.99, rating: 5, image: 'ledmouse.jpg' },
  { id: 4, name: 'Bluetooth Speaker', price: 79.99, rating: 4, image: 'bluetoothspeaker.jpg' },
]

const FeaturedProducts = () => {
  const { addToCart } = useCart()
  const [notification, setNotification] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index])
            }, index * 100)
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = document.querySelectorAll('.product-card')
    cards.forEach(card => observerRef.current.observe(card))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product)
    setNotification(`${product.name} added to cart!`)
  }

  const viewProductDetail = (productId) => {
    sessionStorage.setItem('selectedProductId', productId)
    window.location.href = 'product-detail.html'
  }

  return (
    <>
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center my-12 text-gray-900 fade-in">
          Featured Products
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 max-w-[1200px] mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-index={index}
              className={`product-card bg-white rounded-xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                visibleCards.includes(index)
                  ? index % 2 === 0
                    ? 'slide-in-left'
                    : 'slide-in-right'
                  : 'opacity-0'
              }`}
            >
              <img
                src={`images/${product.image}`}
                alt={product.name}
                onClick={() => viewProductDetail(product.id)}
                className="w-full h-56 bg-gray-200 rounded-lg mb-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 object-cover"
              />
              <h3
                onClick={() => viewProductDetail(product.id)}
                className="text-xl text-gray-800 my-2.5 cursor-pointer transition-colors duration-300 hover:text-primary"
              >
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-primary my-2.5">${product.price}</p>
              <div className="text-[#ffc107] text-xl my-2.5">
                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-primary text-white py-3 text-base font-semibold border-none rounded-lg cursor-pointer transition-colors duration-300 hover:bg-primary-light"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
    </>
  )
}

export default FeaturedProducts
