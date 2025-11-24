import { DashboardIcon, InvoicesIcon, SettingsIcon, TransactionsIcon, WalletsIcon } from '@/components/Icons';
import { lazy, type JSX, type ReactNode } from 'react';

interface IRoutes {
  path: string;
  component: JSX.Element;
  title: string;
  icon?: ReactNode;
}

const Login = lazy(() => import('@/pages/login'));
const Register = lazy(() => import('@/pages/register'));
const NotFound = lazy(() => import('@/pages/404'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Transactions = lazy(() => import('@/pages/transactions'));

const AuthRoutes: IRoutes[] = [
  { path: '/login', component: <Login />, title: 'Sign In' },
  { path: '/register', component: <Register />, title: 'Sign Up' },
  { path: '*', component: <NotFound />, title: 'Page Not Found - 404' },
];

const UserRoutes: IRoutes[] = [
  { path: '/', component: <Dashboard />, title: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/transactions', component: <Transactions />, title: 'Transactions', icon: <TransactionsIcon /> },
  { path: '/invoices', component: <></>, title: 'Invoices', icon: <InvoicesIcon /> },
  { path: '/my-wallets', component: <></>, title: 'My Wallets', icon: <WalletsIcon /> },
  { path: '/settingd', component: <></>, title: 'Settings', icon: <SettingsIcon /> },
];

export { AuthRoutes, UserRoutes };
