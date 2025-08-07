import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Uncommented
import { useAuth } from '../context/AuthContext'; // Changed import path to use alias

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user } = useAuth(); // Get user from context to determine role
  const navigate = useNavigate(); // Uncommented

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(username, password);
    if (success) {
      // Redirect based on the user's role after successful login
      switch (user?.role) { // Use optional chaining as user might be null initially
        case 'farmer':
          navigate('/farmer-dashboard');
          break;
        case 'investor':
          navigate('/investor-dashboard');
          break;
        case 'seller':
          navigate('/seller-dashboard');
          break;
        case 'buyer':
          navigate('/buyer-dashboard');
          break;
        default:
          navigate('/'); // Fallback to home or a default dashboard
          break;
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950">
      <div className="w-full max-w-sm rounded-lg shadow-lg bg-neutral-900 text-white p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Login</h2>
          <p className="text-neutral-400 text-sm">
            Enter your username and password to access your dashboard.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="username" className="text-neutral-300 text-sm font-medium">Username</label>
            <input
              id="username"
              type="text"
              placeholder="e.g., farmer1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="flex h-10 w-full rounded-md border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="text-neutral-300 text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex h-10 w-full rounded-md border border-neutral-600 bg-neutral-700 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="inline-flex items-center bg-neutral-800 cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-sm text-neutral-400 text-center">
          <p>
            Try: farmer1/password, investor1/password, seller1/password, buyer1/password
          </p>
        </div>
      </div>
    </div>
  );
};
