import solar1 from '../src/assets/solar/solar-water-pump.png'
import solar2 from '../src/assets/solar/windturbing.jpg'
import solar3 from '../src/assets/solar/solarpump.avif'
import solar4 from '../src/assets/solar/battery.webp'
import solar5 from '../src/assets/solar/solar-greenhouse.png'
import solar6 from '../src/assets/solar/windturbing.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const EnergyDashboard = () => {

      const [searchTerm, setSearchTerm] = useState("")
      const [priceFilter, setPriceFilter] = useState("")
      const [categoryFilter, setCategoryFilter] = useState("")
      const [locationFilter, setLocationFilter] = useState("")

      const navigate = useNavigate()

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
    <div className='min-h-screen bg-white'>
              <nav className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <button className="" onClick={()=>navigate(-1)}>
                    <h1 className="text-xl font-bold text-white bg-green-600 p-3 px-4 rounded">‹ Back to Dashboard</h1>
                    </button>
                  </div>
        
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Welcome, Farmer John</span>
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
                      J
                    </div>
                  </div>
                </div>
              </nav>

        <div className="bg-gray-50 px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center">
            <input
                type="text"
                placeholder="Search renewable energy products..."
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
                    <option value="Solar Energy">Solar Energy</option>
                    <option value="Wind Energy">Wind Energy</option>
                    <option value="Energy Storage">Energy Storage</option>
                    <option value="Biogas">Biogas</option>
               
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
        <div className='max-w-6xl mx-auto px-6 py-8'>
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
        </div>
    </div>
  )
}

export default EnergyDashboard