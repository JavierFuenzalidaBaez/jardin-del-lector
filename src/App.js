import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { light } from './themes';
import './themes/styles.css';

//router
import Router from 'routes';
import { BrowserRouter } from 'react-router-dom';

//components
import BackdropLoad from 'components/BackdropLoad';

function App() {
  return (
    <ChakraProvider theme={light}>
      <BrowserRouter>
        <Suspense fallback={<BackdropLoad />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
