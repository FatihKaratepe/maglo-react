import { Loading, PageTitle } from '@/components';
import { AuthMiddleware } from '@/middlewares';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthRoutes, UserRoutes } from './routes';

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Toaster duration={3000} position="top-right" />
      <Routes>
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
    </Suspense>
  );
};
