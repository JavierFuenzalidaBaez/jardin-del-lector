import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { light } from './themes';
import './themes/styles.css';

//router
import Router from 'routes';
import { HashRouter } from 'react-router-dom';

//components
import BackdropLoad from 'components/BackdropLoad';

function App() {
  return (
    <ChakraProvider theme={light}>
      <HashRouter>
        <Suspense fallback={<BackdropLoad />}>
          <Router />
        </Suspense>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
