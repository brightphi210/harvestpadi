import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { DUMMY_PRODUCTS, DUMMY_USERS } from '../data/dummyData';
import { FaArrowLeft } from 'react-icons/fa'; // Using react-icons

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = DUMMY_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
        <Header />
        <main className="flex-1 p-4 md:p-6 bg-neutral-900 flex items-center justify-center">
          <div className="p-8 text-center rounded-lg shadow-lg bg-card text-card-foreground border border-border">
            <h2 className="text-xl font-semibold mb-2">Product Not Found</h2>
            <p className="text-muted-foreground mt-2">The product you are looking for does not exist.</p>
            <Link to="/">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                Go to Home
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const seller = DUMMY_USERS.find(u => u.id === product.sellerId);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <Link to={-1 as any}>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground mb-4">
              <FaArrowLeft className="mr-2 h-4 w-4" /> Back
            </button>
          </Link>
          <div className="rounded-lg shadow-lg bg-card text-card-foreground border border-border">
            <div className="p-6">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="text-lg text-muted-foreground mt-2">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <img
                  src={product.imageUrl || "/placeholder.svg?height=400&width=300&query=product-details"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto max-h-[300px]"
                />
              </div>
              <div className="space-y-4">
                <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
                <p className="text-muted-foreground">{product.description}</p>
                {seller && (
                  <div className="text-sm">
                    <p><strong>Seller:</strong> {seller.username}</p>
                    <p><strong>Seller Role:</strong> {seller.role.charAt(0).toUpperCase() + seller.role.slice(1)}</p>
                  </div>
                )}
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Add to Cart
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
