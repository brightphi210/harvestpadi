import React from 'react';
import { Link } from 'react-router-dom';

export const LoginForm: React.FC = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm rounded-lg bg-neutral text-black p-6">
        {/* Logo and Title */}
        <Link to="/">
         <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-primary">🌾 HarvestPadi</h1>
          </div>
        </Link>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-center text-green-700">Login to account</h2>
          <p className="text-neutral-400 text-sm text-center">click to access your dashboard.</p>
        </div>
        <div className="grid gap-3">
          <Link to={'/buyer'}>
            <button className="bg-green-50 border border-green-200 rounded-xl py-2.5 text-sm w-full text-green-800 font-semibold cursor-pointer">Buyer</button>
          </Link>

          <Link to={'/farmer'}>
            <button className="bg-green-50 border border-green-200 rounded-xl py-2.5 text-sm w-full text-green-800 font-semibold cursor-pointer">Farmer</button>
          </Link>

          <Link to={'/investor'}>
            <button className="bg-green-50 border border-green-200 rounded-xl py-2.5 text-sm w-full text-green-800 font-semibold cursor-pointer">Investor</button>
          </Link> 
                   
          <Link to={'/seller'}>
            <button className="bg-green-50 border border-green-200 rounded-xl py-2.5 text-sm w-full text-green-800 font-semibold cursor-pointer">Seller</button>
          </Link>

        </div>
      </div>
    </div>
  );
};
