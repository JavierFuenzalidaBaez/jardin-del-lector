//libs
import { lazy } from 'react';

//pages
const Books = lazy(() => import('./pages'));

const booksRoutes = [{ path: '/books', element: <Books /> }];

export default booksRoutes;
