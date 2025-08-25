import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-primary text-orange-500">🌾 Harvest<span className='bg-green-600 text-white p-0.5 px-1.5 rounded'>Padi</span></h1>
              </div>
            </div>
          
            <div className="flex items-center space-x-4">
              <Link to="/login">
                    <button className="bg-green-700 cursor-pointer text-white px-8 py-3 rounded-lg text-sm font-medium">
                        Explore
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-green-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-medium mb-6 leading-[80px]">
              Your Smart <span className="text-green-600 font-bold">Farming</span> solution
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nigeria's premier agricultural marketplace where farmers showcase their produce, Buyers find quality farm produce and tools, and investors discover profitable opportunities in sustainable farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                    <button className="bg-green-600 cursor-pointer  text-white px-8 py-4 rounded-lg text-lg font-medium">
                        Get Started Today
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fresh produce to farming equipment and investment opportunities, we've got the Nigerian agricultural community covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marketplace */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🥬</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Fresh Produce Marketplace</h3>
              <p className="text-muted-foreground mb-6">
                Browse and purchase fresh vegetables.
              </p>
            </div>

            {/* Tools & Equipment */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Farming Tools & Equipment</h3>
              <p className="text-muted-foreground mb-6">
                Find everything from seeds and fertilizers to tractors and solar equipment. Compare prices, read reviews, and make informed purchases.
              </p>
            </div>

            {/* Investment Opportunities */}
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Investment Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                Connect with promising farmers and agricultural projects. Review proposals, track investments, and support sustainable farming initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Nigerian Agriculture?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join farmers, sellers, and investors who are already building a sustainable agricultural future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <button className="px-6 py-3 rounded-lg text-sm font-medium bg-black text-white">
                Start Selling Today
              </button>
            </Link>

            <Link to="/login">
              <button className="border-2 border-white text-white  px-6 py-3 rounded-lg text-sm font-medium bg-green-600">
                Explore Investments
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
)};