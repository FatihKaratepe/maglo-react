import { lazy, type JSX } from 'react';

interface IRoutes {
  path: string;
  component: JSX.Element;
  title: string;
}

const Login = lazy(() => import('@/pages/login'));
const Register = lazy(() => import('@/pages/register'));
// const Dashboard = lazy(() => import('@/pages/dashboard'));

const AuthRoutes: IRoutes[] = [
  { path: '/login', component: <Login />, title: 'Sign In' },
  { path: '/register', component: <Register />, title: 'Sign Up' },
];

const UserRoutes: IRoutes[] = [
  // { path: '/', component: <Dashboard />, title: 'Dashboard' }
];

export { AuthRoutes, UserRoutes };
