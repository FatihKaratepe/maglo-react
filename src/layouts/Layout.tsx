import { Loading } from '@/components';
import { useAppState } from '@/states';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useEffect, type FC } from 'react';
import { useProfile } from './api';
import { Header, Sidebar } from './components';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const { data } = useProfile();
  const { setUser } = useAppState();

  useEffect(() => {
    if (data) setUser(data);
  }, [setUser, data]);

  return (
    <div className="grid grid-cols-[250px_1fr]">
      <Sidebar />

      <main className="py-[30px] px-10 overflow-x-hidden flex flex-col gap-[30px]">
        <Suspense fallback={<Loading className="w-full h-full" />}>
          <Header />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
};
