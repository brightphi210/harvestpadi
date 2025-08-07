import type { ReactNode } from 'react';
import React, { createContext, useState, useContext } from 'react';
import { DUMMY_USERS} from '../data/dummyData';
import type {User } from '../data/dummyData';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    const foundUser = DUMMY_USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      // Remove password before storing in context
      const { ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword as User);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};