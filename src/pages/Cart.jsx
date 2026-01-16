import React from 'react'
import { useCart } from '../context/CartContext'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="p-5">
        <Navigation />
        <div className="max-w-[1200px] mx-auto my-12 text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Your Cart is Empty</h2>
          <p className="text-xl text-gray-600 mb-8">Add some products to get started!</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-br from-primary to-primary-light text-white py-4 px-10 text-lg font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Continue Shopping
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="p-5">
      <Navigation />
      <div className="max-w-[1200px] mx-auto my-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 mb-4 shadow-lg flex gap-6 items-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`images/${item.image}`}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg bg-gray-200"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 text-gray-800 w-10 h-10 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 text-gray-800 w-10 h-10 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg sticky top-5">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-4 text-lg">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 text-lg">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-2xl font-bold border-t border-gray-200 pt-4">
                  <span>Total:</span>
                  <span className="text-primary">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-gradient-to-br from-primary to-primary-light text-white py-4 rounded-lg font-bold text-lg mb-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
