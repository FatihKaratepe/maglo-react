import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '@/layouts';
import type { IJwtPayload } from '@/types';

export const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('magloAuthToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const decodedToken: IJwtPayload = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('magloAuthToken');
        navigate('/login');
      }
    } catch {
      localStorage.removeItem('magloAuthToken');
      navigate('/login');
    }
  }, [token, navigate]);

  return token ? <Layout>{children}</Layout> : null;
};
