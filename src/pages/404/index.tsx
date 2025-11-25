import { DashboardIcon } from '@/components/Icons';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    const mainLayout = document.getElementById('main-layout');
    if (mainLayout?.classList.contains('xl:max-w-[1440px]')) {
      mainLayout?.classList.remove('xl:max-w-[1440px]');
    }

    return () => mainLayout?.classList.add('xl:max-w-[1440px]');
  }, []);

  return (
    <div className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-text-1 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <NavLink
            to={'/'}
            className="rounded-md flex items-center gap-1 bg-secondary px-3.5 py-2.5 text-base font-semibold text-white shadow-xs"
          >
            <DashboardIcon /> Go back dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
}
