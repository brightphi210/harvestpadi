import React from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { DUMMY_PRODUCTS } from '../data/dummyData';

export const BuyerDashboard: React.FC = () => {
  // Buyers can view all products
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-neutral-900">
        <h1 className="text-2xl font-bold mb-6">Products Available for Purchase</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DUMMY_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};
