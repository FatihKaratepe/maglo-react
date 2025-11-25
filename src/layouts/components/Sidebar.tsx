import { MagloLogo } from '@/assets';
import { HelpIcon, LogoutIcon } from '@/components/Icons';
import { UserRoutes } from '@/routes';
import { useAppState } from '@/states';
import { cn } from '@/utils';
import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLogout } from '../api';

export const Sidebar: FC = () => {
  const location = useLocation();
  const { mutate: logoutMutate } = useLogout();
  const { isMenuOpen, setIsMenuOpen } = useAppState();

  const handleLogout = () => {
    logoutMutate(undefined);
  };

  const handleNavigate = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <aside
      className={cn(
        'h-screen fixed w-[250px] md:w-full md:sticky top-0 bg-gray-1 pt-[30px] pb-[100px] px-[25px] transition-transform duration-300 z-15',
        isMenuOpen ? 'translate-x-0' : '-translate-x-[250px] md:translate-x-0'
      )}
    >
      <div className="flex flex-col h-full gap-10">
        <div>
          <img src={MagloLogo} />
        </div>
        <div className="h-full flex flex-col justify-between overflow-y-auto">
          <ul className="nav-menu">
            {UserRoutes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={location.pathname === route.path ? 'active' : ''}
                  onClick={handleNavigate}
                >
                  {route.icon} {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="nav-menu">
            <li>
              <NavLink to={'/help'}>
                <HelpIcon /> Help
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>
                <LogoutIcon /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
