//libs
import { useRoutes } from 'react-router-dom';
//routes
import { privateRouter } from './private';

const Router = () => {
  return useRoutes(privateRouter);
};
export default Router;
