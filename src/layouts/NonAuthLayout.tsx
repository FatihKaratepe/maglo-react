import { Loading, PageTitle } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, useEffect, useState, type FC } from 'react';
import { useLocation } from 'react-router-dom';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

export const NonAuthLayout: FC<ILayoutProps> = ({ children, title }) => {
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    return () => setFirstRender(true);
  }, []);

  return (
    <>
      <PageTitle title={`${title} | Maglo`} />
      <Suspense fallback={<Loading className="w-full h-screen" />}>
        <div className="h-full overflow-y-hidden">
          <AnimatePresence mode="wait" initial={firstRender}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </Suspense>
    </>
  );
};
