//libs
/* import { lazy } from 'react';*/
import { Navigate } from 'react-router-dom';

//routes
import homeRoutes from 'modules/Home/routes';
import booksRoutes from 'modules/Books/routes';
import businessRoutes from 'modules/Business/routes';
import contactRoutes from 'modules/Contact/routes';

//components
import Layout from 'components/Layout';
import NotFound from 'components/NotFound';
export const privateRouter = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to="/home" replace /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '404', element: <NotFound /> },
      ...homeRoutes,
      ...booksRoutes,
      ...businessRoutes,
      ...contactRoutes,
    ],
  },
];
