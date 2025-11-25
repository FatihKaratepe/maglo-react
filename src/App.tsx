import { AuthMiddleware } from '@/middlewares';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { NonAuthLayout } from './layouts';
import { AuthRoutes, UserRoutes } from './routes';

export const App = () => {
  const location = useLocation();

  return (
    <div className="w-full xl:max-w-[1440px] xl:mx-auto">
      <Toaster richColors closeButton position="top-right" />
      <Routes location={location}>
        <Route>
          {AuthRoutes.map((route, idx) => (
            <Route
              key={`auth-${idx}`}
              path={route.path}
              element={<NonAuthLayout title={route.title}>{route.component}</NonAuthLayout>}
            />
          ))}
        </Route>
        <Route>
          {UserRoutes.map((route, idx) => (
            <Route
              key={`user-${idx}`}
              path={route.path}
              element={<AuthMiddleware title={route.title}>{route.component}</AuthMiddleware>}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
};
