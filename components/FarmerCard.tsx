import React from 'react';
import { Farmer } from '../data/dummyData';

interface FarmerCardProps {
  farmer: Farmer;
  onViewDetails: (farmer: Farmer) => void;
}

export const FarmerCard: React.FC<FarmerCardProps> = ({ farmer, onViewDetails }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-neutral-800 text-neutral-100 border border-neutral-700">
      <img
        src={farmer.farmImage || "/placeholder.svg?height=200&width=300&query=farm"}
        alt={farmer.name}
        width={300}
        height={200}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-green-300">{farmer.name}</h3>
        <p className="text-sm text-neutral-400 line-clamp-2 mb-3 flex-grow">
          {farmer.bio}
        </p>
        <div className="mt-auto space-y-1">
          <p className="text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">Experience:</span> {farmer.yearsOfExperience} years
          </p>
          <p className="text-sm text-neutral-400">
            <span className="font-medium text-neutral-300">Location:</span> {farmer.location}
          </p>
        </div>
      </div>
      <div className="p-4 pt-0">
        <button
          onClick={() => onViewDetails(farmer)}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-10 px-4 py-2 w-full bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
