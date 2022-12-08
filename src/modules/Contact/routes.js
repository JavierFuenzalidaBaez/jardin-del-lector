//libs
import { lazy } from 'react';

//pages
const Contact = lazy(() => import('./pages'));

const contactRoutes = [{ path: '/contact', element: <Contact /> }];

export default contactRoutes;
