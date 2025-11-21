import { Loading, PageTitle } from '@/components';
import { AuthMiddleware } from '@/middlewares';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthRoutes, UserRoutes } from './routes';

export const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <Toaster duration={3000} position="top-right" />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="h-full"
        >
          <Routes location={location}>
            <Route>
              {AuthRoutes.map((route, idx) => (
                <Route
                  key={`auth-${idx}`}
                  path={route.path}
                  element={
                    <>
                      <PageTitle title={`${route.title} | Maglo`} />
                      {route.component}
                    </>
                  }
                />
              ))}
            </Route>
            <Route>
              {UserRoutes.map((route, idx) => (
                <Route
                  key={`user-${idx}`}
                  path={route.path}
                  element={
                    <AuthMiddleware>
                      <PageTitle title={`${route.title} | Maglo`} />
                      {route.component}
                    </AuthMiddleware>
                  }
                />
              ))}
            </Route>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
};
