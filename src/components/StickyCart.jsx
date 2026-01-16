import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const StickyCart = () => {
  const { cart, getCartItemCount, getCartTotal } = useCart()
  const [showMiniCart, setShowMiniCart] = useState(false)
  const miniCartRef = useRef(null)
  const iconRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        miniCartRef.current &&
        iconRef.current &&
        !miniCartRef.current.contains(e.target) &&
        !iconRef.current.contains(e.target)
      ) {
        setShowMiniCart(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const cartCount = getCartItemCount()

  return (
    <>
      <div
        ref={iconRef}
        onClick={() => setShowMiniCart(!showMiniCart)}
        className="fixed top-5 right-5 z-[9999] bg-gradient-to-br from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(255,20,147,0.4)] transition-all duration-300 animate-pulse-cart hover:scale-110 hover:shadow-[0_6px_30px_rgba(255,20,147,0.6)] active:scale-95"
      >
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#ff4500] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white animate-bounce-badge">
            {cartCount}
          </span>
        )}
      </div>

      {showMiniCart && (
        <div
          ref={miniCartRef}
          className="fixed top-24 right-5 w-[350px] max-h-[500px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] z-[9998] flex flex-col overflow-hidden animate-[slideDown_0.3s_ease]"
        >
          <div className="bg-gradient-to-br from-primary to-primary-light text-white py-4 px-5 text-lg font-bold flex justify-between items-center">
            <span>Shopping Cart</span>
            <button
              onClick={() => setShowMiniCart(false)}
              className="bg-transparent border-none text-white text-2xl cursor-pointer p-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-[rgba(255,255,255,0.2)]"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 max-h-[300px]">
            {cart.length === 0 ? (
              <div className="text-center py-10 px-5 text-gray-400">
                <div className="text-5xl mb-2.5">🛒</div>
                <p>Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowMiniCart(false)
                    navigate('/cart')
                  }}
                  className="flex gap-2.5 p-2.5 border-b border-gray-200 transition-all duration-300 cursor-pointer last:border-b-0 hover:bg-gray-50 hover:-translate-x-0.5"
                >
                  {item.image ? (
                    <img
                      src={`images/${item.image}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl rounded-lg">
                      📦
                    </div>
                  )}
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="font-semibold text-gray-800 text-sm">{item.name}</div>
                    <div className="text-primary font-bold text-sm">${item.price.toFixed(2)}</div>
                    <div className="text-gray-600 text-xs">Qty: {item.quantity}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t-2 border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4 text-lg font-bold">
              <span className="text-gray-800">Total:</span>
              <span className="text-primary text-xl">${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  setShowMiniCart(false)
                  navigate('/cart')
                }}
                className="flex-1 py-3 border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 text-sm bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
              >
                View Cart
              </button>
              <button
                onClick={() => {
                  setShowMiniCart(false)
                  navigate('/checkout')
                }}
                className="flex-1 py-3 border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 text-sm bg-gradient-to-br from-primary to-primary-light text-white hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,20,147,0.3)]"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StickyCart
