import { AppContext } from '@/states';
import React, { useState } from 'react';

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <AppContext.Provider value={{ isOpen, setIsOpen }}>{children}</AppContext.Provider>;
};
