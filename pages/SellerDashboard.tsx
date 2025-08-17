import { useState } from "react"

import img1 from '../src/assets/corn-seeds.png'
import img2 from '../src/assets/types-of-fertilizer.jpg'
import img4 from '../src/assets/solar-water-pump.png'
import img6 from '../src/assets/drip-irrigation.png'
import { Link } from "react-router-dom"


export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("products")

  // Mock seller's products
  const myProducts = [
    {
      id: 1,
      name: "Hybrid Corn Seeds",
      price: 15000,
      category: "Seeds",
      stock: 150,
      sold: 45,
      image: img1,
      status: "Active",
    },
    {
      id: 2,
      name: "NPK Fertilizer 15-15-15",
      price: 25000,
      category: "Fertilizers",
      stock: 80,
      sold: 32,
      image: img2,
      status: "Active",
    },
    {
      id: 3,
      name: "Solar Water Pump System",
      price: 450000,
      category: "Solar Energy",
      stock: 5,
      sold: 2,
      image: img4,
      status: "Low Stock",
    },
    {
      id: 4,
      name: "Drip Irrigation Kit",
      price: 75000,
      category: "Irrigation",
      stock: 25,
      sold: 18,
      image: img6,
      status: "Active",
    },
  ]

  // Mock product requests from customers
  const productRequests = [
    {
      id: 1,
      product: "Hybrid Corn Seeds",
      quantity: "50 bags",
      customer: "Green Valley Farm",
      customerPhone: "+234 801 234 5678",
      location: "Kaduna",
      date: "2024-01-15",
      status: "New",
      message: "Need high-quality corn seeds for 20 hectares. Can you deliver to Kaduna?",
    },
    {
      id: 2,
      product: "NPK Fertilizer 15-15-15",
      quantity: "100 bags",
      customer: "Sunrise Agriculture",
      customerPhone: "+234 803 456 7890",
      location: "Kano",
      date: "2024-01-14",
      status: "Responded",
      message: "Bulk order for fertilizer. Looking for best wholesale price.",
    },
    {
      id: 3,
      product: "Solar Water Pump System",
      quantity: "2 units",
      customer: "Modern Farms Ltd",
      customerPhone: "+234 805 678 9012",
      location: "Abuja",
      date: "2024-01-13",
      status: "Completed",
      message: "Need solar pumps for new irrigation project. Installation support needed?",
    },
    {
      id: 4,
      product: "Drip Irrigation Kit",
      quantity: "10 kits",
      customer: "Smart Agro Solutions",
      customerPhone: "+234 807 890 1234",
      location: "Lagos",
      date: "2024-01-12",
      status: "New",
      message: "Setting up greenhouse. Need complete drip irrigation system.",
    },
  ]

  // Sales analytics data
  const salesData = {
    totalRevenue: 2850000,
    totalOrders: 97,
    totalProducts: 4,
    avgOrderValue: 29381,
    monthlyGrowth: 15.2,
  }

  const monthlySales = [
    { month: "Jan", sales: 850000 },
    { month: "Feb", sales: 920000 },
    { month: "Mar", sales: 1100000 },
    { month: "Apr", sales: 980000 },
    { month: "May", sales: 1250000 },
    { month: "Jun", sales: 1350000 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
                <Link to="/login">
                    <div className="">
                      <h1 className="text-2xl font-bold text-primary">🌾 HarvestPadi</h1>
                    </div>
                  </Link>
            
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("products")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "products" ? "bg-neutral-100 text-neutral-700" : "text-gray-600 hover:text-neutral-600"
                }`}
              >
                My Products
              </button>
              <button
                onClick={() => setActiveTab("requests")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "requests" ? "bg-neutral-100 text-neutral-700" : "text-gray-600 hover:text-neutral-600"
                }`}
              >
                Product Requests
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "analytics" ? "bg-neutral-100 text-neutral-700" : "text-gray-600 hover:text-neutral-600"
                }`}
              >
                Sales Analytics
              </button>
              <button
                onClick={() => setActiveTab("add-product")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "add-product" ? "bg-neutral-100 text-neutral-700" : "text-gray-600 hover:text-neutral-600"
                }`}
              >
                Add Product
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">AgroSeeds Nigeria</span>
            <div className="w-8 h-8 bg-neutral-600 rounded-full flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === "products" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">My Products</h2>
              <button
                onClick={() => setActiveTab("add-product")}
                className="bg-neutral-600 text-white px-6 py-2 rounded-lg hover:bg-neutral-700 font-medium"
              >
                + Add New Product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={product.image || "/placeholder.svg?height=200&width=300&query=farm product"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-neutral-600 mb-3">₦{product.price.toLocaleString()}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Stock:</span>
                        <span className="font-medium">{product.stock} units</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Sold:</span>
                        <span className="font-medium text-green-600">{product.sold} units</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{product.category}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 text-sm font-medium">
                        Edit
                      </button>
                      <button className="flex-1 bg-neutral-600 text-white px-3 py-2 rounded-lg hover:bg-neutral-700 text-sm font-medium">
                        View Details
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
            <div className="space-y-4">
              {productRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{request.product}</h3>
                      <p className="text-gray-600">Quantity: {request.quantity}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        request.status === "New"
                          ? "bg-neutral-100 text-neutral-800"
                          : request.status === "Responded"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Customer</p>
                      <p className="font-medium">{request.customer}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">📍 {request.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{request.date}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Message</p>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{request.message}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">📞 {request.customerPhone}</div>
                    <div className="flex space-x-2">
                      {request.status === "New" && (
                        <>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                            Accept Request
                          </button>
                          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 text-sm font-medium">
                            Send Message
                          </button>
                        </>
                      )}
                      {request.status === "Responded" && (
                        <button className="bg-neutral-600 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 text-sm font-medium">
                          View Conversation
                        </button>
                      )}
                      {request.status === "Completed" && (
                        <span className="text-green-600 font-medium">✓ Order Completed</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sales Analytics</h2>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">₦{salesData.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">💰</span>
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">+{salesData.monthlyGrowth}% from last month</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{salesData.totalOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span className="text-neutral-600 text-xl">📦</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-2">+12 new orders this week</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Products</p>
                    <p className="text-2xl font-bold text-gray-900">{salesData.totalProducts}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🛍️</span>
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-2">1 low stock alert</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Order Value</p>
                    <p className="text-2xl font-bold text-gray-900">₦{salesData.avgOrderValue.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 text-xl">📊</span>
                  </div>
                </div>
                <p className="text-sm text-orange-600 mt-2">+5% from last month</p>
              </div>
            </div>

            {/* Monthly Sales Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Sales Trend</h3>
              <div className="flex items-end space-x-4 h-64">
                {monthlySales.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-neutral-500 rounded-t-lg"
                      style={{
                        height: `${(data.sales / 1500000) * 200}px`,
                        minHeight: "20px",
                      }}
                    ></div>
                    <p className="text-sm text-gray-600 mt-2">{data.month}</p>
                    <p className="text-xs text-gray-500">₦{(data.sales / 1000000).toFixed(1)}M</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "add-product" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Add New Product</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                      placeholder="e.g., Premium Maize Seeds"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent">
                      <option value="">Select Category</option>
                      <option value="Seeds">Seeds</option>
                      <option value="Fertilizers">Fertilizers</option>
                      <option value="Tractors">Tractors</option>
                      <option value="Solar Energy">Solar Energy</option>
                      <option value="Irrigation">Irrigation</option>
                      <option value="Tools">Tools</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₦)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                      placeholder="e.g., 15000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                      placeholder="e.g., 100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent">
                      <option value="">Select Unit</option>
                      <option value="bags">Bags</option>
                      <option value="kg">Kilograms</option>
                      <option value="liters">Liters</option>
                      <option value="pieces">Pieces</option>
                      <option value="sets">Sets</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                    placeholder="Describe your product features, benefits, and specifications..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Order Quantity</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                      placeholder="e.g., 5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Areas</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
                      placeholder="e.g., Lagos, Ogun, Oyo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <p className="text-gray-500">Click to upload or drag and drop product images</p>
                    <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
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
                  <button type="submit" className="px-6 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700">
                    Publish Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
