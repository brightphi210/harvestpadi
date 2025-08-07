import React from 'react';
import { Link } from 'react-router-dom';
import { Product, DUMMY_USERS } from '../data/dummyData';

interface ProductCardProps {
  product: Product;
  showBuyButton?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, showBuyButton = true }) => {
  const seller = DUMMY_USERS.find(u => u.id === product.sellerId);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl bg-card text-card-foreground border border-border">
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
      <div className="p-4 pt-0 flex flex-col">
        <Link to={`/product/${product.id}`} className="w-full">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
            View Details
          </button>
        </Link>
        {showBuyButton && (
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};
