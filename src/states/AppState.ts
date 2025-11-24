import type { UserResponse } from '@/apis';
import { createContext, useContext } from 'react';

interface IAppContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (status: boolean) => void;
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
}

const AppContext = createContext<IAppContextProps | undefined>(undefined);

const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppContextProvider');
  }

  return context;
};

export { AppContext, useAppState };
