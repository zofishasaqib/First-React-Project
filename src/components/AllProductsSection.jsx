import React from 'react'
import { useNavigate } from 'react-router-dom'

const AllProductsSection = () => {
  const navigate = useNavigate()

  return (
    <section className="my-16 p-0">
      <div className="bg-gradient-to-br from-primary to-primary-light rounded-[20px] py-16 px-10 text-center shadow-[0_10px_30px_rgba(255,20,147,0.3)] relative overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)] animate-[movePattern_20s_linear_infinite]" />
        <div className="relative z-10">
          <h2 className="text-white text-5xl mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)] font-bold">
            Explore All Products
          </h2>
          <p className="text-white text-xl mb-8 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.2)]">
            Discover our complete collection of 28+ amazing products across 9 categories!
          </p>
          <div className="flex gap-5 justify-center mb-10 flex-wrap">
            <button
              onClick={() => navigate('/my-shop')}
              className="py-4 px-10 text-lg font-semibold rounded-[50px] no-underline transition-all duration-300 inline-block shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-white text-primary hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:bg-gray-100 border-none cursor-pointer"
            >
              Browse All Products
            </button>
            <button
              onClick={() => navigate('/promotions')}
              className="py-4 px-10 text-lg font-semibold rounded-[50px] no-underline transition-all duration-300 inline-block shadow-[0_4px_15px_rgba(0,0,0,0.2)] bg-[rgba(255,255,255,0.2)] text-white border-2 border-white backdrop-blur-[10px] hover:-translate-y-1 hover:bg-white hover:text-primary cursor-pointer"
            >
              🔥 View 50% OFF Deals
            </button>
          </div>
          <div className="flex justify-center gap-16 flex-wrap">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
                28+
              </span>
              <span className="text-base text-white/90 uppercase tracking-wider">Products</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
                9
              </span>
              <span className="text-base text-white/90 uppercase tracking-wider">Categories</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
                50%
              </span>
              <span className="text-base text-white/90 uppercase tracking-wider">OFF Sale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProductsSection
