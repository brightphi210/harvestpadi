import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Farmer } from '../data/dummyData';
import { FaTimes } from 'react-icons/fa'; // Using react-icons

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-sm rounded-lg border bg-card text-card-foreground shadow-lg p-6">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
          <h2 className="text-lg font-semibold leading-none tracking-tight">{farmer.name}</h2>
          <p className="text-sm text-muted-foreground">
            A brief overview of {farmer.name}'s farm.
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <FaTimes className="h-4 w-4" />
        </button>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center">
            <img
              src={farmer.farmImage || "/placeholder.svg?height=200&width=150&query=farm-modal"}
              alt={farmer.name}
              width={200}
              height={150}
              className="rounded-md object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>Bio:</strong> {farmer.bio}
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Experience:</strong> {farmer.yearsOfExperience} years
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Location:</strong> {farmer.location}
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Close
          </button>
          <button
            onClick={handleViewMore}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:ml-2 mt-2 sm:mt-0"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
