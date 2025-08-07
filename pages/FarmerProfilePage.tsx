import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { DUMMY_FARMERS, DUMMY_PRODUCTS } from '../data/dummyData';
import { FaArrowLeft } from 'react-icons/fa';

export const FarmerProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const farmer = DUMMY_FARMERS.find(f => f.id === id);

  const navigate = useNavigate();
  if (!farmer) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
        <Header />
        <main className="flex-1 p-6 md:p-10 bg-neutral-950 flex items-center justify-center">
          <div className="p-8 text-center rounded-lg shadow-2xl bg-neutral-800 text-neutral-100 border border-neutral-700">
            <h2 className="text-2xl font-semibold mb-2 text-red-400">Farmer Not Found</h2>
            <p className="text-neutral-400 mt-2">The farmer profile you are looking for does not exist.</p>
            <Link to="/investor-dashboard">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-10 px-4 py-2 bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 mt-4 transition-colors">
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
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />
      <main className="flex-1 p-6 md:p-10 bg-neutral-950">
        <div className="max-w-6xl mx-auto mt-20">
          {/* <Link to={-1 as any}> */}
            <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 text-neutral-400 hover:bg-neutral-800 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-900 mb-6 transition-colors">
              <FaArrowLeft className="mr-2 h-4 w-4" /> Back to Farmers
            </button>
          {/* </Link> */}
          <div className="rounded-lg shadow-2xl bg-neutral-950 text-neutral-100 border border-neutral-900 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 border-b border-neutral-900">
              <img
                src={farmer.farmImage || "/placeholder.svg?height=250&width=180&query=farmer-profile"}
                alt={`${farmer.name}'s farm`}
                width={250}
                height={180}
                className="rounded-lg object-cover aspect-video md:aspect-square border border-neutral-800 shadow-md"
              />
              <div className="text-center md:text-left flex-grow">
                <h2 className="text-4xl font-bold text-green-300">{farmer.name}</h2>
                <p className="text-xl text-neutral-400 mt-2">
                  {farmer.location}, {farmer.origin}
                </p>
                <p className="text-lg mt-3 text-neutral-300">
                  <span className="font-semibold text-neutral-200">Experience:</span> {farmer.yearsOfExperience} years
                </p>
              </div>
            </div>
            <div className="p-6 grid gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-neutral-200">About the Farm</h3>
                <p className="text-neutral-300 leading-relaxed">{farmer.bio}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-neutral-200">Farm Products</h3>
                {farmerProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {farmerProducts.map(product => (
                      <div key={product.id} className="p-4 rounded-lg border border-gray-900 bg-neutral-900 text-neutral-100 shadow-sm">
                        <h4 className="font-semibold text-lg text-orange-200">{product.name}</h4>
                        <p className="text-sm text-neutral-400 line-clamp-2 mt-1">{product.description}</p>
                        <p className="text-xl font-bold text-green-400 mt-3">${product.price.toFixed(2)}</p>
                        <Link to={`/product/${product.id}`}>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 mt-4 w-full border border-orange-200 text-orange-300 bg-transparent hover:bg-orange-600 hover:border-0 cursor-pointer hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-700 transition-colors">
                            View Product
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-neutral-400">This farmer has no products listed yet.</p>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-neutral-200">Contact & Investment Details</h3>
                <p className="text-neutral-300"><strong>Contact:</strong> {farmer.contact}</p>
                <p className="text-neutral-300"><strong>Account Details:</strong> {farmer.accountDetails}</p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold h-12 px-6 py-3 bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 mt-6 transition-colors">
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
