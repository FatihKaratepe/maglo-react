import { NotificationIcon, SearchIcon } from '@/components/Icons';
import { UserRoutes } from '@/routes';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileDropdown } from './ProfileDropdown';

export const Header: FC = () => {
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    return () => setFirstRender(true);
  }, []);
  const pageTitle = useMemo(() => {
    const page = UserRoutes.find((route) => route.path === location.pathname);
    return page?.title;
  }, [location]);

  return (
    <header className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
      <AnimatePresence mode="wait" initial={firstRender}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <h1 className="title-2">{pageTitle}</h1>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-[45px] items-center justify-between">
        <div className="flex gap-[45px] items-center [&_svg]:cursor-pointer">
          <SearchIcon className="text-text-2 hover:text-text-1" />
          <NotificationIcon className="text-text-2 hover:text-text-1" />
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
