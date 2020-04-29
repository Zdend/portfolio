import React, { Suspense } from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from './styles/global';
import { Router, RouteComponentProps } from '@reach/router';

const Home = React.lazy<React.ComponentType<RouteComponentProps>>(
  () => import('./pages/HomePage')
);

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Home path="/" />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
