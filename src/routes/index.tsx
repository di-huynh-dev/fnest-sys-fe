import { RouteObject, useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { LandingPage } from '@/pages';

export const AppRoutes = () => {
  const auth = false;

  const commonRoutes = [{ path: '/', element: <LandingPage /> }];

  const routes: RouteObject[] = auth ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};