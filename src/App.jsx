import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import MyShop from './pages/MyShop'
import Profile from './pages/Profile'
import Promotions from './pages/Promotions'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-shop" element={<MyShop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
