import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white mt-20 pt-16 pb-5 px-5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mb-10">
        <div>
          <h3 className="text-2xl mb-5 text-primary">About Us</h3>
          <p className="leading-relaxed text-gray-300 mb-4">
            Your one-stop shop for quality products at unbeatable prices. We're committed to
            providing the best shopping experience.
          </p>
          <div className="flex gap-4 mt-5">
            {['📘', '📷', '🐦', '💼'].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-[rgba(255,20,147,0.2)] rounded-full flex items-center justify-center no-underline text-xl transition-all duration-300 hover:bg-primary hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl mb-5 text-primary">Quick Links</h3>
          <ul className="list-none p-0">
            {[
              { text: 'Home', href: 'index.html' },
              { text: 'My Shop', href: 'my-shop.html' },
              { text: 'Shopping Cart', href: 'cart.html' },
              { text: 'My Account', href: 'profile.html' },
            ].map((link, index) => (
              <li key={index} className="mb-3">
                <a
                  href={link.href}
                  className="text-gray-300 no-underline transition-colors duration-300 text-base hover:text-primary"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl mb-5 text-primary">Customer Service</h3>
          <ul className="list-none p-0">
            {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'FAQ'].map((item, index) => (
              <li key={index} className="mb-3">
                <a
                  href="#"
                  className="text-gray-300 no-underline transition-colors duration-300 text-base hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl mb-5 text-primary">Newsletter</h3>
          <p className="leading-relaxed text-gray-300 mb-4">
            Subscribe to get special offers and updates!
          </p>
          <div className="flex flex-col gap-2.5 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-600 rounded-md bg-[rgba(255,255,255,0.1)] text-white text-base placeholder:text-gray-400"
            />
            <button className="py-3 px-6 bg-primary text-white border-none rounded-md font-semibold cursor-pointer transition-colors duration-300 hover:bg-primary-light">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-gray-600 flex justify-between items-center flex-wrap gap-5">
        <p className="text-gray-400 m-0">&copy; 2024 E-commerce Store. All rights reserved.</p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 no-underline text-sm transition-colors duration-300 hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
