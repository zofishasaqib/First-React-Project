import React, { useState, useEffect } from 'react'

const categories = [
  { name: 'Electronics', image: 'electronics.jpg', key: 'electronics' },
  { name: 'Fashion', image: 'fashion.jpg', key: 'fashion' },
  { name: 'Home & Living', image: 'homeliving.jpg', key: 'home' },
  { name: 'Sports', image: 'sports.jpg', key: 'sports' },
  { name: 'Jewellery', image: 'jewellery.jpg', key: 'jewellery' },
  { name: 'Skin Care', image: 'skincare.jpg', key: 'skincare' },
  { name: 'Shoes', image: 'shoes.jpg', key: 'shoes' },
  { name: 'Kitchen Accessories', image: 'kitchen.jpg', key: 'kitchen' },
  { name: 'Car Products', image: 'carproducts.jpg', key: 'car' },
]

const CategoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [categoriesPerView, setCategoriesPerView] = useState(4)

  useEffect(() => {
    const updateCategoriesPerView = () => {
      const width = window.innerWidth
      if (width <= 480) setCategoriesPerView(1)
      else if (width <= 768) setCategoriesPerView(2)
      else if (width <= 1024) setCategoriesPerView(3)
      else setCategoriesPerView(4)
    }

    updateCategoriesPerView()
    window.addEventListener('resize', updateCategoriesPerView)

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlide = Math.ceil(categories.length / categoriesPerView) - 1
        return prev >= maxSlide ? 0 : prev + 1
      })
    }, 5000)

    return () => {
      window.removeEventListener('resize', updateCategoriesPerView)
      clearInterval(interval)
    }
  }, [categoriesPerView])

  const maxSlide = Math.ceil(categories.length / categoriesPerView) - 1

  const slideCategories = (direction) => {
    setCurrentSlide(prev => {
      const newSlide = prev + direction
      if (newSlide > maxSlide) return 0
      if (newSlide < 0) return maxSlide
      return newSlide
    })
  }

  const navigateToCategory = (category) => {
    sessionStorage.setItem('selectedCategory', category)
    window.location.href = 'products.html'
  }

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center my-12 text-gray-900 fade-in">
        Shop by Category
      </h2>
      <div className="relative max-w-[1200px] mx-auto px-16">
        <button
          onClick={() => slideCategories(-1)}
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-br from-primary to-primary-light text-white border-none w-11 h-11 rounded-full text-2xl cursor-pointer z-10 transition-all duration-300 shadow-[0_4px_15px_rgba(255,20,147,0.3)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(255,20,147,0.5)]"
        >
          ❮
        </button>
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => navigateToCategory(category.key)}
                className="bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0 relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl group"
                style={{ minWidth: `calc(${100 / categoriesPerView}% - ${(categoriesPerView - 1) * 24 / categoriesPerView}px)` }}
              >
                <img
                  src={`images/${category.image}`}
                  alt={category.name}
                  className="w-full h-44 bg-gray-200 rounded-lg mb-4 object-cover"
                />
                <h3 className="text-xl text-gray-800 m-0 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-primary to-primary-light text-white py-3 font-bold text-base translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  🛍️ Shop Now
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => slideCategories(1)}
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-br from-primary to-primary-light text-white border-none w-11 h-11 rounded-full text-2xl cursor-pointer z-10 transition-all duration-300 shadow-[0_4px_15px_rgba(255,20,147,0.3)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(255,20,147,0.5)]"
        >
          ❯
        </button>
      </div>
      <div className="flex justify-center gap-2.5 mt-6">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-8 rounded-md'
                : 'bg-gray-300 w-3 hover:bg-primary-light'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoriesSection
