import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { DUMMY_FARMERS, DUMMY_PRODUCTS } from '../data/dummyData';
import { FaArrowLeft } from 'react-icons/fa'; // Using react-icons

export const FarmerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const farmer = DUMMY_FARMERS.find(f => f.id === id);

  if (!farmer) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
        <Header />
        <main className="flex-1 p-4 md:p-6 bg-neutral-900 flex items-center justify-center">
          <div className="p-8 text-center rounded-lg shadow-lg bg-card text-card-foreground border border-border">
            <h2 className="text-xl font-semibold mb-2">Farmer Not Found</h2>
            <p className="text-muted-foreground mt-2">The farmer profile you are looking for does not exist.</p>
            <Link to="/investor-dashboard">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                Go to Investor Dashboard
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const farmerProducts = DUMMY_PRODUCTS.filter(p => farmer.products.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <Link to={-1 as any}>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground mb-4">
              <FaArrowLeft className="mr-2 h-4 w-4" /> Back to Farmers
            </button>
          </Link>
          <div className="rounded-lg shadow-lg bg-card text-card-foreground border border-border">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6">
              <img
                src={farmer.farmImage || "/placeholder.svg?height=250&width=180&query=farmer-profile"}
                alt={`${farmer.name}'s farm`}
                width={250}
                height={180}
                className="rounded-lg object-cover aspect-video md:aspect-square"
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold">{farmer.name}</h2>
                <p className="text-lg text-muted-foreground mt-2">
                  {farmer.location}, {farmer.origin}
                </p>
                <p className="text-md mt-2">
                  <span className="font-semibold">Experience:</span> {farmer.yearsOfExperience} years
                </p>
              </div>
            </div>
            <div className="p-6 grid gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">About the Farm</h3>
                <p className="text-muted-foreground">{farmer.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Farm Products</h3>
                {farmerProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {farmerProducts.map(product => (
                      <div key={product.id} className="p-4 rounded-lg border bg-card text-card-foreground">
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                        <p className="text-lg font-bold text-primary mt-2">${product.price.toFixed(2)}</p>
                        <Link to={`/product/${product.id}`}>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 mt-2 w-full">
                            View Product
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">This farmer has no products listed yet.</p>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Contact & Investment Details</h3>
                <p className="text-muted-foreground"><strong>Contact:</strong> {farmer.contact}</p>
                <p className="text-muted-foreground"><strong>Account Details:</strong> {farmer.accountDetails}</p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                  Invest in {farmer.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
