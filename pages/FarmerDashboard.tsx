"use client"

import { useState } from "react"

import img1 from "../src/assets/corn-seeds.png"
import img2 from "../src/assets/types-of-fertilizer.jpg"
import img3 from "../src/assets/compact-tractor.png"
import img4 from "../src/assets/solar-water-pump.png"
import img5 from "../src/assets/fresh-red-tomatoes.png"
import img6 from "../src/assets/drip-irrigation.png"
import img7 from "../src/assets/investor-amina.png"
import img9 from "../src/assets/investor-fatima.png"
import img10 from "../src/assets/investor-tunde.png"
import { Link } from "react-router-dom"

export default function FarmersDashboard() {
  const [activeTab, setActiveTab] = useState("tools")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")

  // Mock farm tools data
  const tools = [
    {
      id: 1,
      name: "Hybrid Corn Seeds",
      price: 15000,
      category: "Seeds",
      location: "Lagos",
      seller: "AgroSeeds Nigeria",
      image: img1,
      description: "High-yield hybrid corn seeds suitable for Nigerian climate",
    },
    {
      id: 2,
      name: "NPK Fertilizer 15-15-15",
      price: 25000,
      category: "Fertilizers",
      location: "Kano",
      seller: "FarmChem Ltd",
      image: img2,
      description: "Premium NPK fertilizer for optimal crop growth",
    },
    {
      id: 3,
      name: "John Deere Compact Tractor",
      price: 8500000,
      category: "Tractors",
      location: "Abuja",
      seller: "AgriMachinery Nigeria",
      image: img3,
      description: "Reliable compact tractor for small to medium farms",
    },
    {
      id: 4,
      name: "Solar Water Pump System",
      price: 450000,
      category: "Solar Energy",
      location: "Kaduna",
      seller: "SolarFarm Solutions",
      image: img4,
      description: "Efficient solar-powered irrigation system",
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
  ]

  // Mock investors data
  const investors = [
    {
      id: 1,
      name: "Dr. Amina Hassan",
      company: "AgriVest Capital",
      farmsInvested: 23,
      totalInvestment: "₦2.5B",
      bio: "Agricultural economist with 15 years experience in sustainable farming investments",
      expertise: "Crop production, Livestock, Agtech",
      image: img7,
    },
    {
      id: 2,
      name: "Chief Emeka Okafor",
      company: "Green Valley Investments",
      farmsInvested: 18,
      totalInvestment: "₦1.8B",
      bio: "Former Minister of Agriculture, now leading agricultural investment initiatives",
      expertise: "Policy, Infrastructure, Value chain development",
      image: img10,
    },
    {
      id: 3,
      name: "Mrs. Fatima Abdullahi",
      company: "Sahel Agro Fund",
      farmsInvested: 31,
      totalInvestment: "₦3.2B",
      bio: "Investment banker specializing in agricultural financing and rural development",
      expertise: "Financial structuring, Risk management, Cooperative farming",
      image: img9,
    },
    {
      id: 4,
      name: "Mr. Tunde Adebayo",
      company: "Lagos Agri Partners",
      farmsInvested: 12,
      totalInvestment: "₦950M",
      bio: "Tech entrepreneur focused on digital agriculture and smart farming solutions",
      expertise: "Agtech, Digital platforms, Supply chain optimization",
      image: img10,
    },
  ]

  // Mock requests data
  const requests = [
    {
      id: 1,
      product: "Fresh Tomatoes",
      quantity: "500kg",
      customer: "Lagos Fresh Market",
      date: "2024-01-15",
      status: "Pending",
    },
    {
      id: 2,
      product: "Yam Tubers",
      quantity: "200 tubers",
      customer: "Abuja Food Hub",
      date: "2024-01-14",
      status: "Approved",
    },
    {
      id: 3,
      product: "Palm Oil",
      quantity: "50 liters",
      customer: "Port Harcourt Traders",
      date: "2024-01-13",
      status: "Completed",
    },
  ]

  // Mock recent investments
  const recentInvestments = [
    {
      id: 1,
      farmName: "Sunrise Poultry Farm",
      amount: "₦15M",
      date: "2024-01-10",
      roi: "18%",
      status: "Active",
    },
    {
      id: 2,
      farmName: "Golden Harvest Rice Farm",
      amount: "₦25M",
      date: "2024-01-05",
      roi: "22%",
      status: "Active",
    },
    {
      id: 3,
      farmName: "Green Valley Vegetables",
      amount: "₦8M",
      date: "2023-12-28",
      roi: "15%",
      status: "Completed",
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
                  <h1 className="text-2xl font-bold text-primary">🌾 HarvestPadi</h1>
                </div>
              </Link>
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "tools" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Farm Tools
              </button>
              <button
                onClick={() => setActiveTab("requests")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "requests" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Product Requests
              </button>
              <button
                onClick={() => setActiveTab("investors")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "investors" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Investors
              </button>
              <button
                onClick={() => setActiveTab("investments")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "investments" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                My Investments
              </button>
              <button
                onClick={() => setActiveTab("post-farm")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "post-farm" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Post New Farm
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Farmer John</span>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
              J
            </div>
          </div>
        </div>
      </nav>

      {/* Search and Filters - Only show for tools tab */}
      {activeTab === "tools" && (
        <div className="bg-gray-50 px-6 py-4 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center">
              <input
                type="text"
                placeholder="Search tools or sellers..."
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
                <option value="low">Under ₦50,000</option>
                <option value="medium">₦50,000 - ₦500,000</option>
                <option value="high">Above ₦500,000</option>
              </select>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Categories</option>
                <option value="Seeds">Seeds</option>
                <option value="Fertilizers">Fertilizers</option>
                <option value="Tractors">Tractors</option>
                <option value="Solar Energy">Solar Energy</option>
                <option value="Irrigation">Irrigation</option>
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Locations</option>
                <option value="Lagos">Lagos</option>
                <option value="Kano">Kano</option>
                <option value="Abuja">Abuja</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Ogun">Ogun</option>
                <option value="Rivers">Rivers</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === "tools" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Farm Tools & Equipment</h2>

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

        {activeTab === "requests" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Requests</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request) => (
                    <tr key={request.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {request.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : request.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "investors" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect with Investors</h2>
            <div className="space-y-4">
              {investors.map((investor) => (
                <div
                  key={investor.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={investor.image || "/placeholder.svg?height=60&width=60&query=professional investor"}
                        alt={investor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{investor.name}</h4>
                        <p className="text-gray-600">{investor.company}</p>
                        <p className="text-sm text-gray-500">{investor.expertise}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-6 mb-2">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">{investor.farmsInvested}</p>
                          <p className="text-xs text-gray-500">Farms Invested</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-gray-900">{investor.totalInvestment}</p>
                          <p className="text-xs text-gray-500">Total Investment</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
                        Send Proposal
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 text-sm">{investor.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "investments" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Investments</h2>
            <p>Previous investment secured from investors</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentInvestments.map((investment) => (
                <div
                  key={investment.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{investment.farmName}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investment:</span>
                      <span className="font-medium">{investment.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ROI:</span>
                      <span className="font-medium text-green-600">{investment.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="text-sm">{investment.date}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        investment.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {investment.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {activeTab === "post-farm" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Post New Farm Project</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Farm Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., Sunrise Poultry Farm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Select State</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Kano">Kano</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Ogun">Ogun</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Farm Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Select Type</option>
                      <option value="Crop Production">Crop Production</option>
                      <option value="Livestock">Livestock</option>
                      <option value="Poultry">Poultry</option>
                      <option value="Fish Farming">Fish Farming</option>
                      <option value="Mixed Farming">Mixed Farming</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Investment Needed</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., ₦5,000,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Describe your farm project, goals, and expected returns..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected ROI (%)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., 20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Duration (months)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., 12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm Images</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <p className="text-gray-500">Click to upload or drag and drop farm images</p>
                    <input type="file" multiple accept="image/*" className="hidden" />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Save as Draft
                  </button>
                  <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Post Farm Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )} */}
      </main>
    </div>
  )
}
