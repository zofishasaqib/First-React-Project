import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StickyCart from '../components/StickyCart'
import { useCart } from '../context/CartContext'
import Notification from '../components/Notification'

const allProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, rating: 5, category: 'Electronics', image: 'wirelessheadphones.jpg' },
  { id: 2, name: 'Smart Watch', price: 199.99, rating: 4, category: 'Electronics', image: 'smartwatch.jpg' },
  { id: 3, name: 'Laptop Backpack', price: 49.99, rating: 5, category: 'Fashion', image: 'laptopbackpack.jpg' },
  { id: 4, name: 'Bluetooth Speaker', price: 79.99, rating: 4, category: 'Electronics', image: 'bluetoothspeaker.jpg' },
  { id: 5, name: 'Running Shoes', price: 89.99, rating: 5, category: 'Sports', image: 'runningshoes.jpg' },
  { id: 6, name: 'Yoga Mat', price: 29.99, rating: 5, category: 'Sports', image: 'yogamat.jpg' },
  { id: 7, name: 'Coffee Maker', price: 129.99, rating: 4, category: 'Home', image: 'coffeemaker.jpg' },
  { id: 8, name: 'Wall Clock', price: 39.99, rating: 4, category: 'Home', image: 'wallclock.jpg' },
  { id: 9, name: 'Sunglasses', price: 149.99, rating: 5, category: 'Fashion', image: 'sunglasses.jpg' },
  { id: 10, name: 'Water Bottle', price: 24.99, rating: 5, category: 'Sports', image: 'waterbottles.jpg' },
  { id: 11, name: 'Desk Lamp', price: 44.99, rating: 4, category: 'Home', image: 'desklamp.jpg' },
  { id: 12, name: 'Wireless Mouse', price: 19.99, rating: 5, category: 'Electronics', image: 'ledmouse.jpg' },
  { id: 13, name: 'Charging Cables', price: 16.99, rating: 5, category: 'Electronics', image: 'chargingcables.jpg' },
]

const MyShop = () => {
  const { addToCart } = useCart()
  const [notification, setNotification] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Electronics', 'Fashion', 'Sports', 'Home']

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  const handleAddToCart = (product) => {
    addToCart(product)
    setNotification(`${product.name} added to cart!`)
  }

  return (
    <div className="p-5">
      <Navigation />
      
      <div className="max-w-[1200px] mx-auto my-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">My Shop</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Browse our complete collection</p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-br from-primary to-primary-light text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={`images/${product.image}`}
                alt={product.name}
                className="w-full h-56 bg-gray-200 rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl text-gray-800 my-2.5">{product.name}</h3>
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
      </div>

      <Footer />
      <StickyCart />
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  )
}

export default MyShop
