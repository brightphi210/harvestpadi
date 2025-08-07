import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import type { Product } from '../data/dummyData';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Omit<Product, 'id'>) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !price || !category) {
      alert('Please fill in all required fields.');
      return;
    }

    const newProduct: Omit<Product, 'id'> = {
      name,
      description,
      price: parseFloat(price),
      imageUrl: imageUrl || "https://harvesttotable.com/wp-content/uploads/2006/11/bigstock-Brazilian-Potato-Known-As-Yam-306335314-1024x683.jpg", // Default image if none provided
      sellerId: '', // This will be set in SellerDashboard based on logged-in user
      category,
    };

    onAddProduct(newProduct);
    onClose(); // Close modal after submission
    // Reset form fields
    setName('');
    setDescription('');
    setPrice('');
    setImageUrl('');
    setCategory('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in">
      <div className="relative w-full max-w-lg rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-100 shadow-2xl p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-orange-300">Add New Product</h2>
          <button
            onClick={onClose}
            className="rounded-sm opacity-70 text-neutral-400 hover:opacity-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-opacity"
            aria-label="Close"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-neutral-300 mb-1">Product Name</label>
            <input
              id="productName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-neutral-300 mb-1">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="flex w-full rounded-md border border-neutral-700 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors resize-y"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-neutral-300 mb-1">Price ($)</label>
              <input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-300 mb-1">Category</label>
              <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-neutral-300 mb-1">Image URL (Optional)</label>
            <input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
            />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-neutral-600 text-neutral-300 bg-transparent hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-10 px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-800 disabled:pointer-events-none disabled:opacity-50 transition-colors"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
