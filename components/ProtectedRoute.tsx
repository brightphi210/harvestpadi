import React from 'react';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../data/dummyData';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // User not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User authenticated but not authorized for this role, redirect to their default dashboard
    switch (user.role) {
      case "farmer":
        return <Navigate to="/farmer-dashboard" replace />;
      case "investor":
        return <Navigate to="/investor-dashboard" replace />;
      case "seller":
        return <Navigate to="/seller-dashboard" replace />;
      case "buyer":
        return <Navigate to="/buyer-dashboard" replace />;
      default:
        return <Navigate to="/login" replace />; // Fallback
    }
  }

  return <>{children}</>;
};
