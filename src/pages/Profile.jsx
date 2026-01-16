import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <div className="p-5">
      <Navigation />
      
      <div className="max-w-[1200px] mx-auto my-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">My Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl">
                👤
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h2>
              <p className="text-gray-600 mb-6">john.doe@example.com</p>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 mb-2 font-semibold">Full Name</label>
                  <input
                    type="text"
                    value="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    value="john.doe@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 font-semibold">Phone</label>
                  <input
                    type="tel"
                    value="+1 234 567 8900"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Order History</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">Order #12345</span>
                    <span className="text-primary font-bold">$249.97</span>
                  </div>
                  <p className="text-gray-600 text-sm">3 items • Delivered on Jan 10, 2024</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">Order #12344</span>
                    <span className="text-primary font-bold">$129.99</span>
                  </div>
                  <p className="text-gray-600 text-sm">1 item • Delivered on Jan 5, 2024</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-800">Order #12343</span>
                    <span className="text-primary font-bold">$89.99</span>
                  </div>
                  <p className="text-gray-600 text-sm">2 items • Delivered on Dec 28, 2023</p>
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

export default Profile
