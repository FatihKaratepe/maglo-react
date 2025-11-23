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
const Dashboard = lazy(() => import('@/pages/dashboard'));

const AuthRoutes: IRoutes[] = [
  { path: '/login', component: <Login />, title: 'Sign In' },
  { path: '/register', component: <Register />, title: 'Sign Up' },
];

const UserRoutes: IRoutes[] = [
  { path: '/', component: <Dashboard />, title: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/transactions', component: <></>, title: 'Transactions', icon: <TransactionsIcon /> },
  { path: '/invoices', component: <></>, title: 'Invoices', icon: <InvoicesIcon /> },
  { path: '/my-wallets', component: <></>, title: 'My Wallets', icon: <WalletsIcon /> },
  { path: '/settingd', component: <></>, title: 'Settings', icon: <SettingsIcon /> },
];

export { AuthRoutes, UserRoutes };
