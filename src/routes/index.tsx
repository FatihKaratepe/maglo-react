import { lazy, type JSX } from 'react';

interface IRoutes {
  path: string;
  component: JSX.Element;
  title: string;
}

const Login = lazy(() => import('@/pages/login'));

const AuthRoutes: IRoutes[] = [{ path: '/login', component: <Login />, title: 'Giriş Yap' }];

const UserRoutes: IRoutes[] = [];

export { AuthRoutes, UserRoutes };
