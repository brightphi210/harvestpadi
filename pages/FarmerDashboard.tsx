"use client"

import { useState } from "react"

import img1 from "../src/assets/ugu.jpg"
import img2 from "../src/assets/maure.jpg"
import img3 from "../src/assets/cabbage.webp"
// import img3 from "../src/assets/compact-tractor.png"
import img4 from "../src/assets/pepper.webp"
import img5 from "../src/assets/fresh-red-tomatoes.png"
import img6 from "../src/assets/drip-irrigation.png"
import img7a from "../src/assets/carrot.jpg"
import img7 from "../src/assets/logo1.png"
import img9 from "../src/assets/investor-amina.png"
import img10 from "../src/assets/logo2.png"
import { Link } from "react-router-dom"

import solar1 from "../src/assets/solar/solar-water-pump.png"
import solar2 from "../src/assets/solar/windturbing.jpg"
import solar3 from "../src/assets/solar/solarpump.avif"
import solar4 from "../src/assets/solar/battery.webp"
import solar5 from "../src/assets/solar/solar-greenhouse.png"
import solar6 from "../src/assets/solar/windturbing.jpg"

export default function FarmersDashboard() {
  const [activeTab, setActiveTab] = useState("sellers")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")

  // Mock farm tools data
  const tools = [
    {
      id: 1,
      name: "Pumpkin Seeds (per kg)",
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
      name: "Cabbage (per kg)",
      price: 8500000,
      category: "Seeds",
      location: "Abuja",
      seller: "AgriMachinery Nigeria",
      image: img3,
      description: "Organic Cabbage Seeds, perfect for local farming",
    },
    {
      id: 4,
      name: "Organic Pepper Seeds (per kg)",
      price: 450000,
      category: "Seeds",
      location: "Kaduna",
      seller: "SolarFarm Solutions",
      image: img4,
      description: "Organic pepper seeds for high yield production",
    },
    {
      id: 5,
      name: "Organic Tomato Seeds (per kg)",
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
      name: "Organic Carrot Seeds (per kg)",
      price: 75000,
      category: "seeds",
      location: "Rivers",
      seller: "WaterWise Agro",
      image: img7a,
      description: "Orangic Carrot Seeds for high yield production",
    },
  ]

  const buyers = [
    {
      id: 1,
      name: "Fresh Foods Ltd",
      location: "Lagos, Nigeria",
      rating: 4.8,
      type: "Buyer",
      description: "Premium tomatoes and peppers for retail chains",
      priceOffer: "₦850/kg for Grade A tomatoes",
      image: "/food-company-logo.png",
      contactInfo: "Contact for bulk orders",
      specialization: "Retail Supply Chain",
    },
    {
      id: 2,
      name: "Market Square Co-op",
      location: "Abuja, Nigeria",
      rating: 4.6,
      type: "Buyer",
      description: "Bulk purchasing for local markets",
      priceOffer: "₦720/kg for mixed peppers",
      image: "/cooperative-market-logo.png",
      contactInfo: "Contact for wholesale deals",
      specialization: "Local Market Distribution",
    },
    {
      id: 3,
      name: "Export Partners Inc",
      location: "Port Harcourt, Nigeria",
      rating: 4.9,
      type: "Buyer",
      description: "International export of premium Nigerian produce",
      priceOffer: "₦1,200/kg for export quality yams",
      image: "/export-company-logo.png",
      contactInfo: "Contact for export opportunities",
      specialization: "International Export",
    },
    {
      id: 4,
      name: "Green Valley Processors",
      location: "Kano, Nigeria",
      rating: 4.7,
      type: "Buyer",
      description: "Food processing and packaging company",
      priceOffer: "₦650/kg for processing tomatoes",
      image: "/food-processing-logo.png",
      contactInfo: "Contact for processing contracts",
      specialization: "Food Processing",
    },
    {
      id: 5,
      name: "Urban Fresh Markets",
      location: "Ibadan, Nigeria",
      rating: 4.5,
      type: "Buyer",
      description: "Modern supermarket chain seeking fresh produce",
      priceOffer: "₦900/kg for organic vegetables",
      image: "/generic-supermarket-logo.png",
      contactInfo: "Contact for supply agreements",
      specialization: "Retail Supermarkets",
    },
  ]

  // Mock investors data
  const investors = [
    {
      id: 1,
      name: "AgriVest Capital",
      company: "AgriVest Capital",
      farmsInvested: 23,
      totalInvestment: "₦2.5B",
      bio: "Agricultural economist with 15 years experience in sustainable farming investments",
      expertise: "Crop production, Livestock, Agtech",
      image: img7,
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
      id: 2,
      name: "Green Valley Investments",
      company: "Green Valley Investments",
      farmsInvested: 18,
      totalInvestment: "₦1.8B",
      bio: "Former Minister of Agriculture, now leading agricultural investment initiatives",
      expertise: "Policy, Infrastructure, Value chain development",
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

  const renewableEnergyProducts = [
    {
      id: 1,
      name: "Solar Panel Kit 300W",
      price: 450000,
      category: "Solar Energy",
      location: "Lagos",
      seller: "SolarTech Nigeria",
      image: solar1,
      description: "High-efficiency 300W solar panel kit perfect for farm irrigation and lighting systems",
    },
    {
      id: 2,
      name: "Wind Turbine 5kW",
      price: 2500000,
      category: "Wind Energy",
      location: "Kano",
      seller: "WindPower Solutions",
      image: solar2,
      description: "Small-scale wind turbine ideal for rural farming operations and remote locations",
    },
    {
      id: 3,
      name: "Solar Water Pump System",
      price: 850000,
      category: "Solar Energy",
      location: "Abuja",
      seller: "AquaSolar Ltd",
      image: solar3,
      description: "Complete solar-powered water pumping system for irrigation and livestock watering",
    },
    {
      id: 4,
      name: "Battery Storage System",
      price: 650000,
      category: "Energy Storage",
      location: "Rivers",
      seller: "PowerStore Nigeria",
      image: solar4,
      description: "Lithium-ion battery storage system for storing renewable energy for 24/7 farm operations",
    },
    {
      id: 5,
      name: "Solar Greenhouse Kit",
      price: 1200000,
      category: "Solar Energy",
      location: "Ogun",
      seller: "GreenHouse Solar",
      image: solar5,
      description: "Complete solar-powered greenhouse system with climate control and automated irrigation",
    },
    {
      id: 6,
      name: "Biogas Digester System",
      price: 750000,
      category: "Biogas",
      location: "Kaduna",
      seller: "BioEnergy Solutions",
      image: solar6,
      description: "Anaerobic biogas digester system that converts farm waste into clean cooking gas and fertilizer",
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

  const filteredBuyers = buyers.filter((buyer) => {
    const matchesSearch =
      buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !locationFilter || buyer.location.includes(locationFilter)

    return matchesSearch && matchesLocation
  })

  const filteredRenewableProducts = renewableEnergyProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice =
      !priceFilter ||
      (priceFilter === "low" && product.price < 50000) ||
      (priceFilter === "medium" && product.price >= 50000 && product.price < 500000) ||
      (priceFilter === "high" && product.price >= 500000)
    const matchesCategory = !categoryFilter || product.category === categoryFilter
    const matchesLocation = !locationFilter || product.location === locationFilter

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
                <h1 className="text-2xl font-bold text-primary text-orange-500">
                  🌾 Harvest<span className="bg-green-600 text-white p-0.5 px-1.5 rounded">Padi</span>
                </h1>
              </div>
            </Link>
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("sellers")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "sellers" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Sellers
              </button>
              <button
                onClick={() => setActiveTab("buyers")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "buyers" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Buyers
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

              <Link to="/energy">
                <button
                  // onClick={() => setActiveTab("renewable-energy")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    activeTab === "renewable-energy" ? "bg-teal-100 text-teal-700" : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  Renewable Energy
                </button>
              </Link>
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

      {/* Search and Filters - Show for sellers, buyers and renewable energy tabs */}
      {(activeTab === "sellers" || activeTab === "buyers" || activeTab === "renewable-energy") && (
        <div className="bg-gray-50 px-6 py-4 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center">
              <input
                type="text"
                placeholder={
                  activeTab === "renewable-energy"
                    ? "Search renewable energy products..."
                    : activeTab === "buyers"
                      ? "Search buyers or specializations..."
                      : "Search tools or sellers..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 min-w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              {activeTab !== "buyers" && (
                <>
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
                    {activeTab === "renewable-energy" ? (
                      <>
                        <option value="Solar Energy">Solar Energy</option>
                        <option value="Wind Energy">Wind Energy</option>
                        <option value="Energy Storage">Energy Storage</option>
                        <option value="Biogas">Biogas</option>
                      </>
                    ) : (
                      <>
                        <option value="Seeds">Seeds</option>
                        <option value="Fertilizers">Fertilizers</option>
                        <option value="Tractors">Tractors</option>
                        <option value="Solar Energy">Solar Energy</option>
                        <option value="Irrigation">Irrigation</option>
                      </>
                    )}
                  </select>
                </>
              )}

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
        {activeTab === "renewable-energy" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Renewable Energy Marketplace</h2>
            <p className="pb-8">
              Sustainable energy solutions for modern farming - solar panels, wind turbines, biogas systems and more
            </p>

            {/* Renewable Energy Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredRenewableProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.image || "/placeholder.svg?height=200&width=300&query=renewable energy equipment"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      <span className="text-lg font-bold text-teal-600">₦{product.price.toLocaleString()}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>📍 {product.location}</span>
                      <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">by {product.seller}</span>
                      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 text-sm font-medium">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "sellers" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Farmers Tools & Equipment</h2>
            <p className="pb-8">
              A Market place where farmers needs everything to kick of there farming and make life easy for themselves
            </p>

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

        {activeTab === "buyers" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Available Buyers</h2>
            <p className="pb-8">Connect with verified buyers looking for fresh produce and agricultural products</p>

            {/* Buyers Grid */}
            <div className="space-y-6">
              {filteredBuyers.map((buyer) => (
                <div
                  key={buyer.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">

                      <div className="h-10 w-10 p-6 rounded-full bg-green-100 flex justify-center items-center">
                        <p className="text-lg font-bold text-green-800">{buyer.name.slice(0, 1)}</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{buyer.name}</h3>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {buyer.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-gray-600 flex items-center">📍 {buyer.location}</span>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">⭐</span>
                            <span className="text-gray-700 font-medium">{buyer.rating} rating</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{buyer.description}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-green-600 font-medium">📈 {buyer.priceOffer}</span>
                        </div>
                        <p className="text-sm text-gray-500">Specialization: {buyer.specialization}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium mb-2">
                        Contact Buyer
                      </button>
                      <p className="text-xs text-gray-500">{buyer.contactInfo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "requests" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Product Requests</h2>
            <p className="pb-8">Product requested by users</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Connect with Investors</h2>
            <p className="pb-8">Connect with investors to get funds for farm your projects</p>

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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Investments</h2>
            <p className="pb-8">Previous investment secured from investors</p>
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
      </main>
    </div>
  )
}
