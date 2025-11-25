import { Loading } from '@/components';
import { CloseIcon, MenuIcon } from '@/components/Icons';
import { useAppState } from '@/states';
import { cn } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useEffect, useState, type FC } from 'react';
import { useProfile } from './api';
import { Header, Sidebar } from './components';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const { data } = useProfile();
  const { setUser, isMenuOpen, setIsMenuOpen } = useAppState();
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    return () => setFirstRender(true);
  }, []);

  useEffect(() => {
    if (data) setUser(data);
  }, [setUser, data]);

  return (
    <>
      {isMenuOpen && <div className="fixed inset-0 z-10 bg-black opacity-40" onClick={() => setIsMenuOpen(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-[25fr_119fr]">
        <Sidebar />

        <main className="py-[30px] px-10 overflow-x-hidden flex flex-col gap-[30px]">
          <Suspense fallback={<Loading className="w-screen h-screen md:w-full md:h-full" />}>
            <Header />
            <AnimatePresence mode="wait" initial={firstRender}>
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="h-full"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>
      </div>
      <button
        id="menuToggle"
        className={cn(
          'flex md:hidden bg-white rounded-full w-12 h-12 fixed z-11 bottom-5 right-5 cursor-pointer shadow-md items-center justify-center border border-gray-3'
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>
    </>
  );
};
