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
    name: "Premium Wheat Seeds",
    description: "High-yield organic wheat seeds, drought-resistant variety perfect for sustainable farming.",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&q=80",
    sellerId: "u1",
    category: "seeds",
  },
  {
    id: "p2",
    name: "Professional Garden Hoe",
    description: "Heavy-duty steel hoe with ergonomic wooden handle. Perfect for breaking soil and cultivation.",
    price: 58.99,
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80",
    sellerId: "u3",
    category: "farm tools",
  },

  {
    id: "p5",
    name: "Smart Drip Irrigation System",
    description: "Complete automated irrigation system with timers and moisture sensors for efficient watering.",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=300&fit=crop&q=80",
    sellerId: "u1",
    category: "farm tools",
  },
  {
    id: "p6",
    name: "Neem Oil Pest Control (32oz)",
    description: "100% cold-pressed neem oil for natural pest and disease control. Safe for organic farming.",
    price: 24.95,
    imageUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop&q=80",
    sellerId: "u3",
    category: "fertilizers",
  },
  {
    id: "p7",
    name: "Solar-Powered Weather Station",
    description: "Monitor temperature, humidity, wind speed, and rainfall with wireless data transmission.",
    price: 189.99,
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&q=80",
    sellerId: "u1",
    category: "farm tools",
  },
  {
    id: "p8",
    name: "Organic Vegetable Seed Collection",
    description: "25 varieties of non-GMO vegetable seeds including lettuce, carrots, beans, and peppers.",
    price: 67.50,
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop&q=80",
    sellerId: "u3",
    category: "seeds",
  },
  {
    id: "p9",
    name: "Mycorrhizal Soil Inoculant",
    description: "Beneficial fungi that enhance root development and nutrient uptake. Improves plant health.",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80",
    sellerId: "u1",
    category: "fertilizers",
  },
  {
    id: "p10",
    name: "Precision Seeder Tool",
    description: "Hand-held precision seeder for accurate seed placement and spacing in garden beds.",
    price: 78.00,
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop&q=80",
    sellerId: "u3",
    category: "farm tools",
  },
];

export const DUMMY_FARMERS: Farmer[] = [
  {
    id: "f1",
    name: "Green Valley Sustainable Farm",
    bio: "Pioneering regenerative agriculture practices with 200 acres of certified organic farmland. Specializing in heritage grains, permaculture design, and carbon sequestration farming methods.",
    yearsOfExperience: 18,
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
    location: "Sonoma County, CA",
    origin: "California, USA",
    products: ["p1", "p3", "p5", "p7", "p9"],
    contact: "contact@greenvalleyfarm.com | (707) 555-0123",
    accountDetails: "Wells Fargo Agricultural Bank | Account: 4567-8901-2345",
  },
  {
    id: "f2",
    name: "Mountain View Orchards & Nursery",
    bio: "Fourth-generation family farm specializing in heirloom fruit varieties and organic nursery stock. Committed to preserving agricultural biodiversity and supporting local food systems.",
    yearsOfExperience: 25,
    farmImage: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop&q=80",
    location: "Hood River Valley, OR",
    origin: "Oregon, USA",
    products: ["p4", "p8"],
    contact: "info@mountainvieworchards.com | (541) 555-0456",
    accountDetails: "Columbia River Bank | Account: 7890-1234-5678",
  },
  {
    id: "f3",
    name: "Prairie Winds Cooperative Farm",
    bio: "A progressive farming cooperative focused on soil health, water conservation, and community-supported agriculture. Operating 350 acres using innovative no-till and cover crop techniques.",
    yearsOfExperience: 12,
    farmImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80",
    location: "Austin County, TX",
    origin: "Texas, USA",
    products: ["p2", "p6", "p10"],
    contact: "hello@prairiewindscoop.org | (979) 555-0789",
    accountDetails: "Texas Agricultural Credit Union | Account: 2345-6789-0123",
  },
  {
    id: "f4",
    name: "Coastal Breeze Hydroponic Gardens",
    bio: "Cutting-edge hydroponic and vertical farming operation producing year-round fresh produce. Leading in sustainable urban agriculture and water-efficient growing systems.",
    yearsOfExperience: 8,
    farmImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&q=80",
    location: "Monterey Bay, CA",
    origin: "California, USA",
    products: ["p4", "p5", "p8"],
    contact: "grow@coastalbreeze.farm | (831) 555-0321",
    accountDetails: "Coastal Community Bank | Account: 5678-9012-3456",
  },
  {
    id: "f5",
    name: "Heritage Grain & Seed Company",
    bio: "Dedicated to preserving ancient grain varieties and open-pollinated seeds. Working with seed banks worldwide to maintain genetic diversity in agricultural crops.",
    yearsOfExperience: 20,
    farmImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&q=80",
    location: "Palouse Region, WA",
    origin: "Washington, USA",
    products: ["p1", "p8", "p9"],
    contact: "seeds@heritagegrain.com | (509) 555-0654",
    accountDetails: "Northwest Farm Credit | Account: 8901-2345-6789",
  },
  {
    id: "f6",
    name: "Sunny Acres Organic Vegetables",
    bio: "Small-scale intensive vegetable farm serving local restaurants and farmers markets. Practicing biointensive methods and companion planting for maximum yield and soil health.",
    yearsOfExperience: 14,
    farmImage: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop&q=80",
    location: "Lancaster County, PA",
    origin: "Pennsylvania, USA",
    products: ["p4", "p6", "p8"],
    contact: "farm@sunnyacres.org | (717) 555-0987",
    accountDetails: "Penn Community Bank | Account: 3456-7890-1234",
  },
];