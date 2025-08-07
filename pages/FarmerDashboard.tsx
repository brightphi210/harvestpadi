import React from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { DUMMY_PRODUCTS } from '../data/dummyData';

export const FarmerDashboard: React.FC = () => {
  // For farmers, we show products they might want to buy (e.g., seeds, tools, fertilizers)
  const productsForFarmers = DUMMY_PRODUCTS.filter(p =>
    p.category === "seeds" || p.category === "farm tools" || p.category === "fertilizers"
  );

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-neutral-900">
        <h1 className="text-2xl font-bold mb-6">Products for Your Farm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsForFarmers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};
