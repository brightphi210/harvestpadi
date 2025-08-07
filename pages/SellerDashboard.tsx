import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../data/dummyData';
import { DUMMY_PRODUCTS } from '../data/dummyData';
import { useAuth } from '../context/AuthContext';
import { FaPlusCircle } from 'react-icons/fa';
import { AddProductModal } from '../components/AddProductModal'; // Import the new modal

export const SellerDashboard: React.FC = () => {
  const { user } = useAuth();
  // Initialize products with dummy data, filter by current user if available
  const [sellerProducts, setSellerProducts] = useState<Product[]>(
    DUMMY_PRODUCTS.filter(p => p.sellerId === user?.id)
  );
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const handleAddProduct = (newProductData: Omit<Product, 'id'>) => {
    if (user) {
      const newProduct: Product = {
        ...newProductData,
        id: `p${sellerProducts.length + 1}-${Date.now()}`, // Simple unique ID
        sellerId: user.id,
      };
      setSellerProducts(prevProducts => [...prevProducts, newProduct]);
      console.log('New product added:', newProduct);
    } else {
      console.error('User not logged in, cannot add product.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />
      <main className="flex-1 p-6 md:p-10 bg-neutral-950">
        <div className="2xl:px-[5rem] xl:px-[5rem] lg:px-[3rem] mt-20">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-orange-300">Your Listed Products</h1>
            <button
              onClick={() => setIsAddProductModalOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-11 px-5 py-2 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:pointer-events-none disabled:opacity-50 transition-colors"
            >
              <FaPlusCircle className="mr-2 h-4 w-4" />
              Add New Product
            </button>
          </div>
          {sellerProducts.length === 0 ? (
            <p className="text-neutral-400 text-lg text-center py-10">You haven't listed any products yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sellerProducts.map(product => (
                <ProductCard key={product.id} product={product} showBuyButton={false} />
              ))}
            </div>
          )}
        </div>
      </main>
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};
