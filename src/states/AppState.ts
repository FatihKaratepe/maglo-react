import { createContext, useContext } from 'react';

interface IAppContextProps {
  isOpen: boolean;
  setIsOpen: (bc: boolean) => void;
  
}

const AppContext = createContext<IAppContextProps | undefined>(undefined);

const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider');
  }

  return context;
};

export { AppContext, useAppState };
