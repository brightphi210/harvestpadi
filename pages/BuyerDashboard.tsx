import type React from "react"

import { useState } from "react"
import food1 from '../src/assets/foods/fresh-red-tomatoes.png'
import food3 from '../src/assets/foods/food1.jpg'
import food4 from '../src/assets/onion.jpg'
import food5 from '../src/assets/carrot2.webp'
import food6 from '../src/assets/foods/food2.webp'
import farmer from '../src/assets/foods/farm1.jpg'
import farmer3 from '../src/assets/foods/farm2.jpg'
import farmer4 from '../src/assets/foods/farm1.jpg'
import farmer5 from '../src/assets/farmer5.avif'


import img1 from "../src/assets/ugu.jpg"
import img2 from "../src/assets/maure.jpg"
import img3 from "../src/assets/cabbage.webp"
import img4 from "../src/assets/pepper.webp"
import img5 from "../src/assets/fresh-red-tomatoes.png"
import img6 from "../src/assets/drip-irrigation.png"
import img7a from "../src/assets/carrot.jpg"

import { Link } from "react-router-dom"


const BuyersDashboard = () => {
  const [activeTab, setActiveTab] = useState("products")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [showRequestForm, setShowRequestForm] = useState(false)

  // Mock Nigerian farm data
  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      price: 2500,
      category: "Vegetables",
      location: "Lagos",
      farmer: "Adebayo Farms",
      image: food1,
      description: "Organic tomatoes grown in Lagos state",
    },
    {
      id: 2,
      name: "Organic Onions",
      price: 5000,
      category: "vegetables",
      location: "Ogun",
      farmer: "Ogundimu Farms",
      image: food4,
      description: "Premium onions from Ogun state",
    },
    {
      id: 3,
      name: "Fresh Pepper",
      price: 8000,
      category: "Oil",
      location: "Rivers",
      farmer: "Niger Delta Farms",
      image: food3,
      description: "Pure Pepper from Rivers state",
    },
    {
      id: 4,
      name: "Cabbage",
      price: 1500,
      category: "Fruits",
      location: "Oyo",
      farmer: "Ibadan Fresh Farms",
      image: img3,
      description: "Fresh Cabbage from Oyo state",
    },
    {
      id: 5,
      name: "Carrot",
      price: 12000,
      category: "vegetables",
      location: "Kebbi",
      farmer: "Argungu Rice Mills",
      image: food5,
      description: "Premium Carrot from Kebbi state",
    },
    {
      id: 6,
      name: "Vegetables",
      price: 3000,
      category: "Vegetables",
      location: "Benue",
      farmer: "Middle Belt Farms",
      image: food6,
      description: "Fresh Vegetables from Benue state",
    },
  ]

  const farmers = [
    {
      id: 1,
      name: "Adebayo Farms",
      location: "Lagos",
      products: ["Tomatoes", "Pepper", "Onions"],
      rating: 4.8,
      image: farmer,
      farmSize: "50 hectares",
    },
    {
      id: 2,
      name: "Ogundimu Farms",
      location: "Ogun",
      products: ["Yam", "Cassava", "Plantain"],
      rating: 4.9,
      image: farmer3,
      farmSize: "75 hectares",
    },
    {
      id: 3,
      name: "Niger Delta Farms",
      location: "Rivers",
      products: ["Palm Oil", "Coconut", "Fish"],
      rating: 4.7,
      image: farmer4,
      farmSize: "100 hectares",
    },
    {
      id: 4,
      name: "Argungu Rice Mills",
      location: "Kebbi",
      products: ["Rice", "Millet", "Sorghum"],
      rating: 4.9,
      image: farmer5,
      farmSize: "200 hectares",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice =
      !priceFilter ||
      (priceFilter === "low" && product.price < 5000) ||
      (priceFilter === "medium" && product.price >= 5000 && product.price < 10000) ||
      (priceFilter === "high" && product.price >= 10000)
    const matchesCategory = !categoryFilter || product.category === categoryFilter
    const matchesLocation = !locationFilter || product.location === locationFilter

    return matchesSearch && matchesPrice && matchesCategory && matchesLocation
  })

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Request submitted successfully!")
    setShowRequestForm(false)
  }


    const tools = [
    {
      id: 1,
      name: "Pumpkin Seeds",
      price: 15000,
      category: "Seeds",
      location: "Lagos",
      seller: "AgroSeeds Nigeria",
      image: img1,
      description: "High-yield Pumpkin Seeds, suitable for Nigerian climate",
    },
    {
      id: 2,
      name: "Organic Fertilizer",
      price: 25000,
      category: "Fertilizers",
      location: "Kano",
      seller: "FarmChem Ltd",
      image: img2,
      description: "Premium Organic fertilizer for optimal crop growth",
    },
    {
      id: 3,
      name: "Cabbage Seed",
      price: 8500000,
      category: "Seeds",
      location: "Abuja",
      seller: "AgriMachinery Nigeria",
      image: img3,
      description: "Organic Cabbage Seeds, perfect for local farming",
    },
    {
      id: 4,
      name: "Organic Pepper Seeds",
      price: 450000,
      category: "Seeds",
      location: "Kaduna",
      seller: "SolarFarm Solutions",
      image: img4,
      description: "Organic pepper seeds for high yield production",
    },
    {
      id: 5,
      name: "Organic Tomato Seeds",
      price: 8000,
      category: "Seeds",
      location: "Ogun",
      seller: "GreenSeeds Co",
      image: img5,
      description: "Certified organic tomato seeds for greenhouse farming",
    },
    {
      id: 6,
      name: "Drip Irrigation Kit",
      price: 75000,
      category: "Irrigation",
      location: "Rivers",
      seller: "WaterWise Agro",
      image: img6,
      description: "Complete drip irrigation system for water-efficient farming",
    },

    {
      id: 7,
      name: "Organic Carrot Seeds",
      price: 75000,
      category: "seeds",
      location: "Rivers",
      seller: "WaterWise Agro",
      image: img7a,
      description: "Orangic Carrot Seeds for high yield production",
    },
  ]
 const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.seller.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice =
      !priceFilter ||
      (priceFilter === "low" && tool.price < 50000) ||
      (priceFilter === "medium" && tool.price >= 50000 && tool.price < 500000) ||
      (priceFilter === "high" && tool.price >= 500000)
    const matchesCategory = !categoryFilter || tool.category === categoryFilter
    const matchesLocation = !locationFilter || tool.location === locationFilter

    return matchesSearch && matchesPrice && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
                <Link to="/login">
                    <div className="">
                      <h1 className="text-2xl font-bold text-primary text-orange-500">🌾 Harvest<span className='bg-green-600 text-white p-0.5 px-1.5 rounded'>Padi</span></h1>
                    </div>
                  </Link>
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("products")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "products" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Products
              </button>

               <button
                onClick={() => setActiveTab("sellers")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "farmers" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Sellers
              </button>


              <button
                onClick={() => setActiveTab("farmers")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "farmers" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Farmers
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowRequestForm(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium"
          >
            Request Product
          </button>
        </div>
      </nav>

      {/* Search and Filters */}
      <div className="bg-gray-50 px-6 py-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Search products or farmers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 min-w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />

            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Prices</option>
              <option value="low">Under ₦5,000</option>
              <option value="medium">₦5,000 - ₦10,000</option>
              <option value="high">Above ₦10,000</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Categories</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Tubers">Tubers</option>
              <option value="Grains">Grains</option>
              <option value="Oil">Oil</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Locations</option>
              <option value="Lagos">Lagos</option>
              <option value="Ogun">Ogun</option>
              <option value="Rivers">Rivers</option>
              <option value="Oyo">Oyo</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Benue">Benue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === "products" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Fresh Farm Products</h2>
            <p className="pb-8">Explore fresh organic farm products, directly from the farm</p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      <span className="text-lg font-bold text-green-600">₦{product.price.toLocaleString()}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>📍 {product.location}</span>
                      <span>🏷️ {product.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">by {product.farmer}</span>
                      <button onClick={() => setShowRequestForm(true)} className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                        Request
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Farmers Section */}
            <div className="border-t border-neutral-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Farmers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {farmers.map((farmer) => (
                  <div
                    key={farmer.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={farmer.image || "/placeholder.svg"}
                      alt={farmer.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{farmer.name}</h4>
                    <p className="text-gray-600 mb-2">📍 {farmer.location}</p>
                    <p className="text-sm text-gray-500 mb-2">🏡 {farmer.farmSize}</p>
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">{farmer.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{farmer.products.join(", ")}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {activeTab === "sellers" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Farmers Tools & Equipment</h2>
            <p className="pb-8">A Market place where farmers needs everything to kick of there farming and make life easy for themselves</p>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={tool.image || "/placeholder.svg?height=200&width=300&query=farm equipment"}
                    alt={tool.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                      <span className="text-lg font-bold text-green-600">₦{tool.price.toLocaleString()}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{tool.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>📍 {tool.location}</span>
                      <span>🏷️ {tool.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">by {tool.seller}</span>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "farmers" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Farms</h2>
            <p className="pb-8">Farms around you</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {farmers.map((farmer) => (
                <div
                  key={farmer.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={farmer.image || "/placeholder.svg"}
                      alt={farmer.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{farmer.name}</h3>
                      <p className="text-gray-600 mb-2">📍 {farmer.location}</p>
                      <p className="text-gray-600 mb-2">🏡 Farm Size: {farmer.farmSize}</p>
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-600 ml-1">{farmer.rating} Rating</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Products:</h4>
                        <div className="flex flex-wrap gap-2">
                          {farmer.products.map((product, index) => (
                            <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                        View Products
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Request Product</h3>
              <button onClick={() => setShowRequestForm(false)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>

            <form onSubmit={handleRequestSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Fresh Tomatoes"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 50kg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                <select
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Location</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Benue">Benue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Budget</option>
                  <option value="under-5000">Under ₦5,000</option>
                  <option value="5000-10000">₦5,000 - ₦10,000</option>
                  <option value="10000-20000">₦10,000 - ₦20,000</option>
                  <option value="above-20000">Above ₦20,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any specific requirements..."
                ></textarea>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}


export default BuyersDashboard;