import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { LoginPage } from '../pages/LoginPage';
import { FarmerDashboard } from '../pages/FarmerDashboard';
import { InvestorDashboard } from '../pages/InvestorDashboard';
import { BuyerDashboard } from '../pages/BuyerDashboard';
import { SellerDashboard } from '../pages/SellerDashboard';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { FarmerProfilePage } from '../pages/FarmerProfilePage';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  const getInitialDashboard = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'farmer': return '/farmer-dashboard';
      case 'investor': return '/investor-dashboard';
      case 'seller': return '/seller-dashboard';
      case 'buyer': return '/buyer-dashboard';
      default: return '/login';
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to={getInitialDashboard()} replace />} />

      <Route
        path="/farmer-dashboard"
        element={
          <ProtectedRoute allowedRoles={["farmer"]}>
            <FarmerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/investor-dashboard"
        element={
          <ProtectedRoute allowedRoles={["investor"]}>
            <InvestorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/buyer-dashboard"
        element={
          <ProtectedRoute allowedRoles={["buyer"]}>
            <BuyerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller-dashboard"
        element={
          <ProtectedRoute allowedRoles={["seller", "farmer"]}> {/* Farmers can also be sellers */}
            <SellerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute allowedRoles={["farmer", "investor", "seller", "buyer"]}>
            <ProductDetailsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/farmer/:id"
        element={
          <ProtectedRoute allowedRoles={["investor"]}>
            <FarmerProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={getInitialDashboard()} replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
