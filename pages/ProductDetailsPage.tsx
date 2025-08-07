import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { DUMMY_PRODUCTS, DUMMY_USERS } from '../data/dummyData';
import { FaArrowLeft } from 'react-icons/fa';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = DUMMY_PRODUCTS.find(p => p.id === id);

  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
        <Header />
        <main className="flex-1 p-6 md:p-10 bg-neutral-950 flex items-center justify-center">
          <div className="p-8 text-center rounded-lg shadow-2xl bg-neutral-900 text-neutral-100 border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-2 text-red-400">Product Not Found</h2>
            <p className="text-neutral-400 mt-2">The product you are looking for does not exist.</p>
            <Link to="/">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-10 px-4 py-2 bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 mt-4 transition-colors">
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
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />
      <main className="flex-1 p-6 md:p-10 bg-neutral-950 mt-20">
        <div className="max-w-5xl mx-auto">
          {/* <Link to={(-1 as any)}> */}
            <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-full text-sm font-medium h-10 px-4 py-2 text-neutral-400 hover:bg-neutral-800 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-900 mb-6 transition-colors">
              <FaArrowLeft className="mr-2 h-3 w-3" /> Back
            </button>
          {/* </Link> */}
          <div className="rounded-lg shadow-2xl  bg-neutral-950 text-neutral-100 border border-neutral-800 overflow-hidden">
            <div className="p-6 border-b border-neutral-800">
              <h2 className="text-4xl font-bold text-green-300">{product.name}</h2>
              <p className="text-xl text-neutral-400 mt-2">
                Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center items-center">
                <img
                  src={product.imageUrl || "/placeholder.svg?height=400&width=300&query=product-details"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto max-h-[350px] border border-neutral-800 shadow-md"
                />
              </div>
              <div className="space-y-6">
                <p className="text-3xl font-bold text-green-400">${product.price.toFixed(2)}</p>
                <p className="text-neutral-300 leading-relaxed">{product.description}</p>
                {seller && (
                  <div className="text-md space-y-1">
                    <p><strong className="text-neutral-200">Seller:</strong> {seller.username}</p>
                    <p><strong className="text-neutral-200">Seller Role:</strong> {seller.role.charAt(0).toUpperCase() + seller.role.slice(1)}</p>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold h-12 px-6 py-3 w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors">
                    Add to Cart
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium h-12 px-6 py-3 w-full sm:w-auto border border-green-500 text-green-300 bg-transparent hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
