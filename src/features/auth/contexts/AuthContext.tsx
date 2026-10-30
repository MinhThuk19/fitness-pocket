
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

import type { UserProfile } from '../types';
import { checkLogin } from '../services/authService';

type AuthContextType = {
  user: UserProfile | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProfile | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const profile = await checkLogin(username, password);

    if (profile === null) {
      return false;
    }

    setUser(profile);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
