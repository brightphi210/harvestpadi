import React, { useState } from 'react';
import { Header } from '../components/Header';
import { FarmerCard } from '../components/FarmerCard';
import { FarmerModal } from '../components/FarmerModal';
import { DUMMY_FARMERS, Farmer } from '../data/dummyData';

export const InvestorDashboard: React.FC = () => {
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (farmer: Farmer) => {
    setSelectedFarmer(farmer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFarmer(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <Header />
      <main className="flex-1 p-4 md:p-6 bg-neutral-900">
        <h1 className="text-2xl font-bold mb-6">Farmers to Invest In</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DUMMY_FARMERS.map(farmer => (
            <FarmerCard key={farmer.id} farmer={farmer} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </main>
      <FarmerModal isOpen={isModalOpen} onClose={handleCloseModal} farmer={selectedFarmer} />
    </div>
  );
};
