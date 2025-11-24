import type { UserResponse } from '@/apis';
import { AppContext } from '@/states';
import React, { useState } from 'react';

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<UserResponse | null>(null);

  return <AppContext.Provider value={{ setIsMenuOpen, isMenuOpen, user, setUser }}>{children}</AppContext.Provider>;
};
