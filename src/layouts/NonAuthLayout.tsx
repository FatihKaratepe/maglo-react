import { Loading, PageTitle } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, type FC } from 'react';
import { useLocation } from 'react-router-dom';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

export const NonAuthLayout: FC<ILayoutProps> = ({ children, title }) => {
  const location = useLocation();

  return (
    <>
      <PageTitle title={`${title} | Maglo`} />
      <Suspense fallback={<Loading />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </>
  );
};
