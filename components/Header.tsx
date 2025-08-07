import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaSignOutAlt, FaUserCircle, FaBars } from 'react-icons/fa';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'farmer': return '/farmer-dashboard';
      case 'investor': return '/investor-dashboard';
      case 'seller': return '/seller-dashboard';
      case 'buyer': return '/buyer-dashboard';
      default: return '/';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex h-16 items-center justify-between px-4 border-b border-neutral-700 bg-neutral-900 text-white shadow-md md:px-6 relative z-20">
      <Link to={getDashboardLink()} className="flex items-center gap-2 text-xl font-bold md:text-lg text-blue-400 hover:text-blue-300 transition-colors">
        AgriConnect
      </Link>

      {/* Mobile Nav Toggle */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        aria-label="Toggle mobile navigation"
      >
        <FaBars className="h-5 w-5 text-white" />
      </button>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div ref={mobileNavRef} className="absolute top-16 left-0 w-full bg-neutral-900 border-b border-neutral-700 shadow-lg md:hidden z-10">
          <nav className="flex flex-col p-4 gap-3">
            {user && (
              <>
                {user.role === 'farmer' && (
                  <Link to="/farmer-dashboard" className="text-neutral-200 hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileNavOpen(false)}>
                    Farmer Dashboard
                  </Link>
                )}
                {user.role === 'investor' && (
                  <Link to="/investor-dashboard" className="text-neutral-200 hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileNavOpen(false)}>
                    Investor Dashboard
                  </Link>
                )}
                {user.role === 'seller' && (
                  <Link to="/seller-dashboard" className="text-neutral-200 hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileNavOpen(false)}>
                    Seller Dashboard
                  </Link>
                )}
                {user.role === 'buyer' && (
                  <Link to="/buyer-dashboard" className="text-neutral-200 hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileNavOpen(false)}>
                    Buyer Dashboard
                  </Link>
                )}
              </>
            )}
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row items-center gap-5 text-sm lg:gap-6">
        {user && (
          <>
            {user.role === 'farmer' && (
              <Link to="/farmer-dashboard" className="text-neutral-400 hover:text-blue-400 transition-colors">
                Farmer Dashboard
              </Link>
            )}
            {user.role === 'investor' && (
              <Link to="/investor-dashboard" className="text-neutral-400 hover:text-blue-400 transition-colors">
                Investor Dashboard
              </Link>
            )}
            {user.role === 'seller' && (
              <Link to="/seller-dashboard" className="text-neutral-400 hover:text-blue-400 transition-colors">
                Seller Dashboard
              </Link>
            )}
            {user.role === 'buyer' && (
              <Link to="/buyer-dashboard" className="text-neutral-400 hover:text-blue-400 transition-colors">
                Buyer Dashboard
              </Link>
            )}
          </>
        )}
      </nav>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 relative">
        {user ? (
          <div ref={dropdownRef}>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-600 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Toggle user menu"
            >
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfd293ae?w=40&h=40&fit=crop&q=80" alt="User Avatar" className="h-full w-full rounded-full object-cover" />
              <span className="sr-only">Toggle user menu</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 z-10 border border-neutral-700">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <div className="block px-4 py-2 text-sm text-neutral-200">
                    {user.username} ({user.role})
                  </div>
                  <div className="border-t border-neutral-700 my-1"></div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-700 hover:text-blue-400 transition-colors"
                    role="menuitem"
                  >
                    <FaSignOutAlt className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold h-10 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:pointer-events-none disabled:opacity-50 transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};
