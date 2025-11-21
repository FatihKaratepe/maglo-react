import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '@/layouts';
import type { IJwtPayload } from '@/types';
import { TOKEN_NAME } from '@/helpers';

export const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN_NAME);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      console.log('exp',decodedToken.exp);
      console.log('currentTime', currentTime);
      
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem(TOKEN_NAME);
        navigate('/login');
      }
    } catch {
      localStorage.removeItem(TOKEN_NAME);
      navigate('/login');
    }
  }, [token, navigate]);

  return token ? <Layout>{children}</Layout> : null;
};
