import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Farmer } from '../data/dummyData';
import { FaTimes } from 'react-icons/fa';

interface FarmerModalProps {
  isOpen: boolean;
  onClose: () => void;
  farmer: Farmer | null;
}

export const FarmerModal: React.FC<FarmerModalProps> = ({ isOpen, onClose, farmer }) => {
  const navigate = useNavigate();

  if (!isOpen || !farmer) return null;

  const handleViewMore = () => {
    onClose();
    navigate(`/farmer/${farmer.id}`);
  };

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-black/75 p-4 animate-fade-in">
      <div className="relative w-full max-w-lg rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-100 shadow-2xl p-6 animate-scale-in">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
          <h2 className="text-2xl font-bold leading-none tracking-tight text-green-300">{farmer.name}</h2>
          <p className="text-sm text-neutral-400">
            A brief overview of {farmer.name}'s farm.
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 text-neutral-400 hover:opacity-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-opacity"
          aria-label="Close"
        >
          <FaTimes className="cursor-pointer" />
        </button>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center mb-4">
            <img
              src={farmer.farmImage || "/placeholder.svg?height=200&width=150&query=farm-modal"}
              alt={farmer.name}
              className="rounded-md w-full object-cover border border-neutral-700"
            />
          </div>
          <p className="text-sm text-neutral-300">
            <strong className="text-neutral-200">Bio:</strong> {farmer.bio}
          </p>
          <p className="text-sm text-neutral-300">
            <strong className="text-neutral-200">Experience:</strong> {farmer.yearsOfExperience} years
          </p>
          <p className="text-sm text-neutral-300">
            <strong className="text-neutral-200">Location:</strong> {farmer.location}
          </p>
        </div>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:space-x-2 mt-4">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-neutral-600 text-neutral-300 bg-transparent hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleViewMore}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-10 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 disabled:pointer-events-none disabled:opacity-50 transition-colors sm:ml-2 mt-2 sm:mt-0"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
