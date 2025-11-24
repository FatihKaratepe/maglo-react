import { Loading } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, type FC } from 'react';
import { Header, Sidebar } from './components';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <Sidebar />

      <main className="py-[30px] px-10 overflow-x-hidden flex flex-col gap-[30px]">
        <Suspense fallback={<Loading />}>
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
