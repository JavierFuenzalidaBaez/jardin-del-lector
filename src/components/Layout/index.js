import { Box, Spacer } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

//components
import Navigation from 'components/Navigation';

const Layout = () => {
  return (
    <Box h="100vh">
      <Navigation />
      <Spacer py={2} />
      <Outlet />
    </Box>
  );
};
export default Layout;
