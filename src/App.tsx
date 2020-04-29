import React, { Suspense } from 'react';
import { Global } from '@emotion/core';
import { Router, RouteComponentProps } from '@reach/router';
import { globalStyles } from './styles/global';
import PageLoader from '@/components/PageLoader';

const Home = React.lazy<React.ComponentType<RouteComponentProps>>(() => import('./pages/HomePage'));

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Suspense fallback={<PageLoader />}>
        <Router>
          <Home path="/" />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
