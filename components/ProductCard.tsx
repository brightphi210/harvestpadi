import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/dummyData';
import { DUMMY_USERS } from '../data/dummyData';

interface ProductCardProps {
  product: Product;
  showBuyButton?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, showBuyButton = true }) => {
  const seller = DUMMY_USERS.find(u => u.id === product.sellerId);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl bg-neutral-900 text-card-foreground">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.imageUrl || "/placeholder.svg?height=100&width=100&query=product"}
          alt={product.name}
          width={300}
          height={200}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.description}
        </p>
      </div>
      <div className="flex-grow p-4 pt-0">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          {seller && (
            <span className="text-sm text-muted-foreground">
              Seller: {seller.username}
            </span>
          )}
        </div>
      </div>
      <div className="p-4 pt-0 flex flex-row gap-4 items-center">
        <Link to={`/product/${product.id}`} className="w-full">
          <button className="rounded-md text-sm cursor-pointer bg-green-600 hover:bg-green-700 py-3 w-full">
            View Details
          </button>
        </Link>
        {showBuyButton && (
          <button className="text-black rounded-md text-sm py-3 font-medium w-full bg-white cursor-pointer hover:bg-white/90">
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};
