import { useState } from "react"
import farm1 from '../src/assets/foods/farm1.jpg'
import farm2 from '../src/assets/foods/farm2.jpg'
import profile from '../src/assets/foods/nigerian-farmer-portrait.png'
export default function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState("farms")
  interface Farm {
    id: number;
    name: string;
    farmer: {
      name: string;
      experience: number;
      phone: string;
      location: string;
      bio: string;
      avatar: string;
    };
    size: string;
    crops: string[];
    established: string;
    revenue: string;
    investment_needed: string;
    roi_projection: string;
    status: string;
    image: string;
    description: string;
  }

  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null)

  // Mock farms data
  const farms = [
    {
      id: 1,
      name: "Green Valley Organic Farm",
      farmer: {
        name: "Adebayo Ogundimu",
        experience: 12,
        phone: "+234 803 456 7890",
        location: "Ogun State",
        bio: "Experienced organic farmer specializing in vegetables and grains. Pioneer in sustainable farming practices in Southwest Nigeria.",
        avatar: profile,
      },
      size: "25 hectares",
      crops: ["Tomatoes", "Peppers", "Maize", "Cassava"],
      established: "2018",
      revenue: "₦8.5M annually",
      investment_needed: "₦2.5M",
      roi_projection: "35% annually",
      status: "Seeking Investment",
      image: farm1,
      description: "Organic vegetable farm with modern irrigation systems and greenhouse facilities.",
    },
    {
      id: 2,
      name: "Sunrise Poultry & Crops",
      farmer: {
        name: "Fatima Abdullahi",
        experience: 8,
        phone: "+234 805 678 9012",
        location: "Kaduna State",
        bio: "Integrated farmer combining poultry and crop production. Expert in modern farming techniques and livestock management.",
        avatar:profile,
      },
      size: "15 hectares",
      crops: ["Rice", "Sorghum", "Poultry (5000 birds)"],
      established: "2020",
      revenue: "₦6.2M annually",
      investment_needed: "₦1.8M",
      roi_projection: "28% annually",
      status: "Partially Funded",
      image: farm2,
      description: "Mixed farming operation with focus on rice production and layer chicken farming.",
    },
    {
      id: 3,
      name: "Modern Agro Solutions",
      farmer: {
        name: "Emeka Okafor",
        experience: 15,
        phone: "+234 807 890 1234",
        location: "Anambra State",
        bio: "Tech-savvy farmer implementing precision agriculture and smart farming solutions. Leader in agricultural innovation.",
        avatar: profile,
      },
      size: "40 hectares",
      crops: ["Yam", "Plantain", "Cocoyam", "Vegetables"],
      established: "2015",
      revenue: "₦12.8M annually",
      investment_needed: "₦4.2M",
      roi_projection: "42% annually",
      status: "Seeking Investment",
      image: farm1,
      description: "Large-scale tuber crop production with advanced processing and storage facilities.",
    },
    {
      id: 4,
      name: "Sahel Grain Cooperative",
      farmer: {
        name: "Musa Ibrahim",
        experience: 20,
        phone: "+234 809 012 3456",
        location: "Kano State",
        bio: "Veteran grain farmer and cooperative leader. Expert in drought-resistant crops and water conservation techniques.",
        avatar: profile,
      },
      size: "60 hectares",
      crops: ["Millet", "Sorghum", "Cowpeas", "Groundnuts"],
      established: "2010",
      revenue: "₦15.5M annually",
      investment_needed: "₦3.8M",
      roi_projection: "38% annually",
      status: "Fully Funded",
      image: farm2,
      description: "Cooperative grain farming with focus on drought-resistant crops and sustainable practices.",
    },
    {
      id: 5,
      name: "Coastal Aqua Farm",
      farmer: {
        name: "Blessing Okoro",
        experience: 6,
        phone: "+234 811 234 5678",
        location: "Rivers State",
        bio: "Young entrepreneur in aquaculture and rice farming. Innovating in fish-rice integrated farming systems.",
        avatar: profile,
      },
      size: "20 hectares",
      crops: ["Rice", "Fish (Catfish & Tilapia)", "Vegetables"],
      established: "2022",
      revenue: "₦4.8M annually",
      investment_needed: "₦2.2M",
      roi_projection: "32% annually",
      status: "Seeking Investment",
      image: farm1,
      description: "Integrated aquaculture and rice farming with sustainable water management systems.",
    },
  ]

  // Mock investment proposals
  const proposals = [
    {
      id: 1,
      farmer: "Adebayo Ogundimu",
      farm: "Green Valley Organic Farm",
      amount: "₦2.5M",
      purpose: "Greenhouse Expansion",
      date: "2024-01-15",
      status: "Under Review",
      description:
        "Seeking investment to build 3 additional greenhouses for year-round vegetable production. Expected to increase revenue by 60%.",
      documents: ["Business Plan.pdf", "Financial Projections.xlsx", "Land Certificate.pdf"],
    },
    {
      id: 2,
      farmer: "Emeka Okafor",
      farm: "Modern Agro Solutions",
      amount: "₦4.2M",
      purpose: "Processing Equipment",
      date: "2024-01-12",
      status: "Approved",
      description:
        "Investment for yam processing and packaging equipment to add value to farm produce and access premium markets.",
      documents: ["Equipment Quotes.pdf", "Market Analysis.pdf", "ROI Projections.xlsx"],
    },
    {
      id: 3,
      farmer: "Blessing Okoro",
      farm: "Coastal Aqua Farm",
      amount: "₦2.2M",
      purpose: "Fish Pond Expansion",
      date: "2024-01-10",
      status: "Pending",
      description: "Expansion of fish farming operations with 5 new ponds and improved water circulation systems.",
      documents: ["Technical Drawings.pdf", "Environmental Impact.pdf", "Financial Plan.xlsx"],
    },
    {
      id: 4,
      farmer: "Fatima Abdullahi",
      farm: "Sunrise Poultry & Crops",
      amount: "₦1.8M",
      purpose: "Rice Mill Construction",
      date: "2024-01-08",
      status: "Under Review",
      description: "Building a small-scale rice mill to process farm produce and serve the local community.",
      documents: ["Construction Plan.pdf", "Community Impact.pdf", "Revenue Projections.xlsx"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-green-600">💰 Investor Dashboard</h1>
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("farms")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "farms" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Available Farms
              </button>
              <button
                onClick={() => setActiveTab("proposals")}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeTab === "proposals" ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                }`}
              >
                Investment Proposals
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">AgriInvest Capital</span>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
              I
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "farms" && !selectedFarm && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Available Farms for Investment</h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>All States</option>
                  <option>Lagos</option>
                  <option>Ogun</option>
                  <option>Kaduna</option>
                  <option>Kano</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>All Crops</option>
                  <option>Vegetables</option>
                  <option>Grains</option>
                  <option>Tubers</option>
                  <option>Livestock</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {farms.map((farm) => (
                <div
                  key={farm.id}
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onClick={() => setSelectedFarm(farm)}
                >
                  <div className="flex items-start space-x-8">
                    <img
                      src={farm.image || "/placeholder.svg?height=140&width=200&query=farm landscape"}
                      alt={farm.name}
                      className="w-48 h-36 object-cover rounded-xl shadow-sm"
                    />

                    <div className="flex-1 space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{farm.name}</h3>
                          <p className="text-gray-600 text-sm">{farm.description}</p>
                        </div>
                        <span
                          className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap ${
                            farm.status === "Seeking Investment"
                              ? "bg-blue-100 text-blue-800"
                              : farm.status === "Partially Funded"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {farm.status}
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                          Farmer Information
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          <div>
                            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Farmer</p>
                            <p className="font-semibold text-gray-900">{farm.farmer.name}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Location</p>
                            <p className="font-semibold text-gray-900 flex items-center">
                              <span className="mr-1">📍</span>
                              {farm.farmer.location}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Farm Size</p>
                            <p className="font-semibold text-gray-900">{farm.size}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Experience</p>
                            <p className="font-semibold text-gray-900">{farm.farmer.experience} years</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                          <p className="text-xs text-green-600 mb-1 uppercase tracking-wide font-medium">
                            Annual Revenue
                          </p>
                          <p className="text-lg font-bold text-green-700">{farm.revenue}</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                          <p className="text-xs text-blue-600 mb-1 uppercase tracking-wide font-medium">
                            Investment Needed
                          </p>
                          <p className="text-lg font-bold text-blue-700">{farm.investment_needed}</p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                          <p className="text-xs text-purple-600 mb-1 uppercase tracking-wide font-medium">
                            Projected ROI
                          </p>
                          <p className="text-lg font-bold text-purple-700">{farm.roi_projection}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                          Main Crops & Livestock
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {farm.crops.map((crop, index) => (
                            <span
                              key={index}
                              className="px-3 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-full font-medium shadow-sm"
                            >
                              {crop}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Established:</span> {farm.established}
                        </div>
                        <div className="text-sm text-green-600 font-medium hover:text-green-700">
                          Click to view details →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "farms" && selectedFarm && (
          <div>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setSelectedFarm(null)}
                className="text-green-600 hover:text-green-700 font-medium mr-4"
              >
                ← Back to Farms
              </button>
              <h2 className="text-3xl font-bold text-gray-900">{selectedFarm.name}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Farm Details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={selectedFarm.image || "/placeholder.svg?height=300&width=600&query=farm landscape"}
                    alt={selectedFarm.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Farm Overview</h3>
                    <p className="text-gray-600 mb-4">{selectedFarm.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Established</p>
                        <p className="font-medium">{selectedFarm.established}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Farm Size</p>
                        <p className="font-medium">{selectedFarm.size}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Crops & Livestock</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedFarm.crops.map((crop, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Details */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Opportunity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Investment Needed</p>
                      <p className="text-2xl font-bold text-blue-600">{selectedFarm.investment_needed}</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">Annual Revenue</p>
                      <p className="text-2xl font-bold text-green-600">{selectedFarm.revenue}</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-600">Projected ROI</p>
                      <p className="text-2xl font-bold text-purple-600">{selectedFarm.roi_projection}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium">
                      Invest Now
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 font-medium">
                      Request More Info
                    </button>
                  </div>
                </div>
              </div>

              {/* Farmer Profile */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Farmer Profile</h3>
                  <div className="text-center mb-4">
                    <img
                      src={selectedFarm.farmer.avatar || "/placeholder.svg?height=100&width=100&query=farmer portrait"}
                      alt={selectedFarm.farmer.name}
                      className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-gray-900">{selectedFarm.farmer.name}</h4>
                    <p className="text-gray-600">📍 {selectedFarm.farmer.location}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{selectedFarm.farmer.experience} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{selectedFarm.farmer.phone}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Bio & Experience</p>
                    <p className="text-gray-700 text-sm">{selectedFarm.farmer.bio}</p>
                  </div>

                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
                    Contact Farmer
                  </button>
                </div>

                {/* Farm Statistics */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Success Rate:</span>
                      <span className="font-medium text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Previous Harvests:</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certifications:</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Awards:</span>
                      <span className="font-medium">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "proposals" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Investment Proposals</h2>
            <div className="space-y-6">
              {proposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{proposal.farm}</h3>
                      <p className="text-gray-600">by {proposal.farmer}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        proposal.status === "Under Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : proposal.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Investment Amount</p>
                      <p className="text-lg font-bold text-green-600">{proposal.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Purpose</p>
                      <p className="font-medium">{proposal.purpose}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Submitted</p>
                      <p className="font-medium">{proposal.date}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Proposal Description</p>
                    <p className="text-gray-700">{proposal.description}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Supporting Documents</p>
                    <div className="flex flex-wrap gap-2">
                      {proposal.documents.map((doc, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200"
                        >
                          📄 {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    {proposal.status === "Pending" && (
                      <>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
                          Decline
                        </button>
                      </>
                    )}
                    {proposal.status === "Under Review" && (
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                        Review Details
                      </button>
                    )}
                    {proposal.status === "Approved" && (
                      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium">
                        View Contract
                      </button>
                    )}
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
