//libs
import { lazy } from 'react';

//pages
const Home = lazy(() => import('./pages'));

const homeRoutes = [{ path: '/home', element: <Home /> }];

export default homeRoutes;
