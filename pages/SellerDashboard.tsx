import React from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { DUMMY_PRODUCTS } from '../data/dummyData';
import { useAuth } from '../context/AuthContext';
import { FaPlusCircle } from 'react-icons/fa'; // Using react-icons

export const SellerDashboard: React.FC = () => {
  const { user } = useAuth();
  const currentUserProducts = DUMMY_PRODUCTS.filter(p => p.sellerId === user?.id);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-neutral-900">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Listed Products</h1>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <FaPlusCircle className="mr-2 h-4 w-4" />
            Add New Product
          </button>
        </div>
        {currentUserProducts.length === 0 ? (
          <p className="text-muted-foreground">You haven't listed any products yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentUserProducts.map(product => (
              <ProductCard key={product.id} product={product} showBuyButton={false} /> // No buy button for own products
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
