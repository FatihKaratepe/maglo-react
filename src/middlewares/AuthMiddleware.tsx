import { jwtDecode } from 'jwt-decode';
import { useEffect, type FC, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageTitle } from '@/components';
import { TOKEN_NAME } from '@/helpers';
import { Layout } from '@/layouts';
import type { IJwtPayload } from '@/types';

interface IAuthMiddlewareProps {
  children: ReactNode;
  title: string;
}

export const AuthMiddleware: FC<IAuthMiddlewareProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(TOKEN_NAME);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const decodedToken: IJwtPayload = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      console.log('exp', decodedToken.exp);
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

  return token ? (
    <Layout>
      <PageTitle title={`${title} | Maglo`} />
      {children}
    </Layout>
  ) : null;
};
