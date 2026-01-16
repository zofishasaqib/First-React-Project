import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navigation = () => {
  const { getCartItemCount } = useCart()
  const cartCount = getCartItemCount()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="bg-white p-4 rounded-xl mb-8 shadow-lg max-w-[800px] mx-auto relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-8">
        <Link
          to="/"
          className={`text-gray-800 font-semibold text-lg px-5 py-2.5 rounded-lg transition-all duration-300 ${
            isActive('/') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
          }`}
        >
          Home
        </Link>
        <Link
          to="/my-shop"
          className={`text-gray-800 font-semibold text-lg px-5 py-2.5 rounded-lg transition-all duration-300 ${
            isActive('/my-shop') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
          }`}
        >
          My Shop
        </Link>
        <Link
          to="/cart"
          className={`text-gray-800 font-semibold text-lg px-5 py-2.5 rounded-lg transition-all duration-300 ${
            isActive('/cart') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
          }`}
        >
          Cart
          {cartCount > 0 && (
            <span className="bg-[#f5576c] text-white rounded-full px-2 py-0.5 text-xs font-bold ml-1.5 inline-block min-w-[20px] text-center">
              {cartCount}
            </span>
          )}
        </Link>
        <Link
          to="/promotions"
          className="bg-gradient-to-br from-primary to-primary-light text-white px-4 py-2 rounded-[20px] font-bold animate-glow hover:scale-110 transition-transform duration-300"
        >
          🔥 50% OFF!
        </Link>
        <Link
          to="/profile"
          className={`text-gray-800 font-semibold text-lg px-5 py-2.5 rounded-lg transition-all duration-300 ${
            isActive('/profile') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
          }`}
        >
          Profile
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopeSphere
          </Link>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2 animate-[slideDown_0.3s_ease]">
            <Link
              to="/"
              onClick={closeMenu}
              className={`text-gray-800 font-semibold text-base px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/my-shop"
              onClick={closeMenu}
              className={`text-gray-800 font-semibold text-base px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/my-shop') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
              }`}
            >
              My Shop
            </Link>
            <Link
              to="/cart"
              onClick={closeMenu}
              className={`text-gray-800 font-semibold text-base px-4 py-3 rounded-lg transition-all duration-300 flex justify-between items-center ${
                isActive('/cart') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
              }`}
            >
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#f5576c] text-white rounded-full px-2 py-0.5 text-xs font-bold min-w-[20px] text-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              to="/promotions"
              onClick={closeMenu}
              className="bg-gradient-to-br from-primary to-primary-light text-white px-4 py-3 rounded-lg font-bold text-center"
            >
              🔥 50% OFF!
            </Link>
            <Link
              to="/profile"
              onClick={closeMenu}
              className={`text-gray-800 font-semibold text-base px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive('/profile') ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
              }`}
            >
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
