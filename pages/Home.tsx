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
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Marketplace</a>
                <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Tools</a>
                <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Investment</a>
                <a href="#" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Community</a>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-green-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-6 leading-[80px]">
              Connecting Farmers, <br /> Sellers & Investors
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nigeria's premier agricultural marketplace where farmers showcase their produce, sellers find quality tools, and investors discover profitable opportunities in sustainable farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                    <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
                        Get Started Today
                    </button>
                </Link>
              <button className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-muted transition-colors">
                Learn More
              </button>
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
                Browse and purchase fresh vegetables, fruits, grains, and other farm produce directly from Nigerian farmers. Quality guaranteed, prices transparent.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Direct farmer-to-consumer sales
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Real-time inventory updates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Location-based filtering
                </li>
              </ul>
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
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Wide range of agricultural tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Verified seller ratings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Competitive pricing
                </li>
              </ul>
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
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Vetted investment proposals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Transparent project tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Impact measurement tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-muted-foreground">Products Listed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₦2.5B</div>
              <div className="text-muted-foreground">Total Investments</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">36</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Nigeria's Agricultural Community
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our users have to say about their experience on FarmConnect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg">👨‍🌾</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Adebayo Ogundimu</div>
                  <div className="text-sm text-muted-foreground">Farmer, Ogun State</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "FarmConnect helped me reach customers directly and get better prices for my tomatoes. The platform is easy to use and payments are secure."
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg">👩‍💼</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Fatima Aliyu</div>
                  <div className="text-sm text-muted-foreground">Investor, Abuja</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I've invested in 5 farming projects through FarmConnect. The transparency and regular updates give me confidence in my investments."
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg">🏪</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Emeka Nwosu</div>
                  <div className="text-sm text-muted-foreground">Equipment Seller, Lagos</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "My sales increased by 300% after joining FarmConnect. The platform connects me with farmers who really need quality equipment."
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
            Join thousands of farmers, sellers, and investors who are already building a sustainable agricultural future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
              Start Selling Today
            </button>
            <button className="border-2 border-white text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors">
              Explore Investments
            </button>
          </div>
        </div>
      </section>
    </div>
)};