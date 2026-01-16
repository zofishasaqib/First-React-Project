import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully! 🎉')
    clearCart()
    navigate('/')
  }

  if (cart.length === 0) {
    return (
      <div className="p-5">
        <Navigation />
        <div className="max-w-[1200px] mx-auto my-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-br from-primary to-primary-light text-white py-4 px-10 text-lg font-semibold rounded-full"
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
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Shipping Information</h2>
              <div className="space-y-4 mb-8">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-base"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-base"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg text-base"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg text-base"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">Payment Information</h2>
              <div className="space-y-4 mb-8">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  required
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg text-base"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    required
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg text-base"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    required
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg text-base"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-br from-primary to-primary-light text-white py-4 rounded-lg font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Place Order
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg sticky top-5">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-700">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Checkout
