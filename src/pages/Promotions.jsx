import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StickyCart from '../components/StickyCart'
import { useCart } from '../context/CartContext'
import Notification from '../components/Notification'

const promoProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, salePrice: 49.99, rating: 5, image: 'wirelessheadphones.jpg' },
  { id: 2, name: 'Smart Watch', price: 199.99, salePrice: 99.99, rating: 4, image: 'smartwatch.jpg' },
  { id: 4, name: 'Bluetooth Speaker', price: 79.99, salePrice: 39.99, rating: 4, image: 'bluetoothspeaker.jpg' },
  { id: 5, name: 'Running Shoes', price: 89.99, salePrice: 44.99, rating: 5, image: 'runningshoes.jpg' },
  { id: 7, name: 'Coffee Maker', price: 129.99, salePrice: 64.99, rating: 4, image: 'coffeemaker.jpg' },
  { id: 9, name: 'Sunglasses', price: 149.99, salePrice: 74.99, rating: 5, image: 'sunglasses.jpg' },
]

const Promotions = () => {
  const { addToCart } = useCart()
  const [notification, setNotification] = useState(null)

  const handleAddToCart = (product) => {
    addToCart({ ...product, price: product.salePrice })
    setNotification(`${product.name} added to cart at sale price!`)
  }

  return (
    <div className="p-5">
      <Navigation />
      
      <div className="bg-gradient-to-br from-primary to-primary-light text-white py-16 px-10 rounded-2xl text-center mb-12 shadow-2xl">
        <h1 className="text-6xl font-bold mb-4">🔥 50% OFF SALE! 🔥</h1>
        <p className="text-2xl mb-6">Limited time offer - Don't miss out!</p>
        <div className="text-xl font-semibold">Save BIG on selected items</div>
      </div>

      <div className="max-w-[1200px] mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Sale Products</h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {promoProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10">
                50% OFF
              </div>
              <img
                src={`images/${product.image}`}
                alt={product.name}
                className="w-full h-56 bg-gray-200 rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl text-gray-800 my-2.5">{product.name}</h3>
              <div className="flex items-center gap-3 my-2.5">
                <p className="text-2xl font-bold text-primary">${product.salePrice}</p>
                <p className="text-lg text-gray-400 line-through">${product.price}</p>
              </div>
              <div className="text-[#ffc107] text-xl my-2.5">
                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-gradient-to-br from-primary to-primary-light text-white py-3 text-base font-semibold border-none rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Add to Cart - SAVE 50%!
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <StickyCart />
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  )
}

export default Promotions
