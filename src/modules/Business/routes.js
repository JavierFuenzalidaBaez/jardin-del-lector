//libs
import { lazy } from 'react';

//pages
const Business = lazy(() => import('./pages'));

const businessRoutes = [{ path: '/business', element: <Business /> }];

export default businessRoutes;
