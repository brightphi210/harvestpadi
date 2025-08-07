export type UserRole = "farmer" | "investor" | "seller" | "buyer";

export interface User {
  id: string;
  username: string;
  password?: string; // Password is not stored after login
  role: UserRole;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sellerId: string;
  category: string;
}

export interface Farmer {
  id: string;
  name: string;
  bio: string;
  yearsOfExperience: number;
  farmImage: string;
  location: string;
  origin: string;
  products: string[]; // Array of product IDs this farmer sells
  contact: string;
  accountDetails: string;
}

export const DUMMY_USERS: User[] = [
  { id: "u1", username: "farmer1", password: "password", role: "farmer" },
  { id: "u2", username: "investor1", password: "password", role: "investor" },
  { id: "u3", username: "seller1", password: "password", role: "seller" },
  { id: "u4", username: "buyer1", password: "password", role: "buyer" },
];

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Organic Wheat Seeds",
    description: "High-quality organic wheat seeds, perfect for spring planting.",
    price: 25.00,
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    sellerId: "u1",
    category: "seeds",
  },
  {
    id: "p2",
    name: "Heavy Duty Hoe",
    description: "Durable hoe for tough gardening tasks. Ergonomic handle.",
    price: 35.50,
    imageUrl: "https://images.unsplash.com/photo-1587080413959-ee739d74330f?w=400&h=300&fit=crop",
    sellerId: "u3",
    category: "farm tools",
  },
  {
    id: "p3",
    name: "Natural Fertilizer (50lb)",
    description: "All-natural fertilizer, boosts soil health and crop yield.",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1587080413959-ee739d74330f?w=400&h=300&fit=crop",
    sellerId: "u1",
    category: "fertilizers",
  },
  {
    id: "p4",
    name: "Tomato Seedlings (Pack of 12)",
    description: "Healthy heirloom tomato seedlings, ready for transplanting.",
    price: 18.00,
    imageUrl: "https://images.unsplash.com/photo-1587080413959-ee739d74330f?w=400&h=300&fit=crop",
    sellerId: "u3",
    category: "seeds",
  },
  {
    id: "p5",
    name: "Irrigation Drip Kit",
    description: "Complete drip irrigation kit for small to medium farms.",
    price: 120.00,
    imageUrl: "https://images.unsplash.com/photo-1587080413959-ee739d74330f?w=400&h=300&fit=crop",
    sellerId: "u1",
    category: "farm tools",
  },
  {
    id: "p6",
    name: "Organic Pest Control Spray",
    description: "Eco-friendly spray to protect your crops from common pests.",
    price: 29.95,
    imageUrl: "https://images.unsplash.com/photo-1587080413959-ee739d74330f?w=400&h=300&fit=crop",
    sellerId: "u3",
    category: "fertilizers",
  },
];

export const DUMMY_FARMERS: Farmer[] = [
  {
    id: "f1",
    name: "Green Valley Farms",
    bio: "Dedicated to sustainable farming practices and producing high-quality organic produce.",
    yearsOfExperience: 15,
    farmImage: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=600&h=400&fit=crop",
    location: "Rural Plains, CA",
    origin: "California, USA",
    products: ["p1", "p3", "p5"],
    contact: "contact@greenvalley.com",
    accountDetails: "Bank: AgriBank, Acc: 1234567890",
  },
  {
    id: "f2",
    name: "Sunrise Orchards",
    bio: "Family-owned orchard specializing in heirloom fruits and artisanal jams.",
    yearsOfExperience: 22,
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    location: "Mountain View, OR",
    origin: "Oregon, USA",
    products: ["p4"], // Assuming p4 is sold by a farmer, not just a general seller
    contact: "info@sunriseorchards.com",
    accountDetails: "Bank: RuralCredit, Acc: 0987654321",
  },
  {
    id: "f3",
    name: "Harvest Moon Co-op",
    bio: "A collective of small local farmers committed to community-supported agriculture.",
    yearsOfExperience: 8,
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    location: "Coastal Bend, TX",
    origin: "Texas, USA",
    products: ["p2", "p6"], // Assuming p2 and p6 are sold by a farmer, not just a general seller
    contact: "hello@harvestmoon.org",
    accountDetails: "Bank: CommunityBank, Acc: 1122334455",
  },
];
