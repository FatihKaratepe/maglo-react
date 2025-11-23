import { NotificationIcon, SearchIcon } from '@/components/Icons';
import { UserRoutes } from '@/routes';
import { useMemo, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileDropdown } from './ProfileDropdown';

export const Header: FC = () => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const page = UserRoutes.find((x) => x.path === location.pathname);
    return page?.title;
  }, [location]);

  return (
    <header className="flex justify-between items-center">
      <h1 className="title-2">{pageTitle}</h1>
      <div className="flex gap-[45px] items-center">
        <div className="flex gap-[45px] items-center [&_svg]:cursor-pointer">
          <SearchIcon className="text-text-2 hover:text-text-1" />
          <NotificationIcon className="text-text-2 hover:text-text-1" />
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
