import { MagloLogo } from '@/assets';
import { HelpIcon, LogoutIcon } from '@/components/Icons';
import { UserRoutes } from '@/routes';
import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLogout } from '../api';

export const Sidebar: FC = () => {
  const location = useLocation();
  const { mutate: logoutMutate } = useLogout();

  const handleLogout = () => {
    logoutMutate(undefined);
  };

  return (
    <aside className="h-screen sticky top-0 bg-gray-1 pt-[30px] pb-[70px] px-[25px]">
      <div className="flex flex-col h-full gap-10">
        <div>
          <img src={MagloLogo} />
        </div>
        <div className="h-full flex flex-col justify-between">
          <ul className="nav-menu">
            {UserRoutes.map((route) => (
              <li key={route.path}>
                <NavLink to={route.path} className={location.pathname === route.path ? 'active' : ''}>
                  {route.icon} {route.title}
                </NavLink>
              </li>
            ))}
            <li></li>
          </ul>
          <ul className="nav-menu">
            <li>
              <button>
                <HelpIcon /> Help
              </button>
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
