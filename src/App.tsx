import React, { Suspense } from 'react';
import { Global } from '@emotion/core';
import { Router, RouteComponentProps } from '@reach/router';
import { globalStyles } from '@/styles/global';
import { HelmetProvider } from 'react-helmet-async';
import PageLoader from '@/components/PageLoader';
import { ApolloProvider } from '@apollo/react-hooks';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';

const Home = React.lazy<React.ComponentType<RouteComponentProps>>(() => import('./pages/HomePage'));

interface AppProps {
  client: ApolloClient<NormalizedCacheObject>;
}

function App({ client }: AppProps) {
  return (
    <HelmetProvider>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Suspense fallback={<PageLoader />}>
          <Router className="h-full">
            <Home path="/" />
          </Router>
        </Suspense>
      </ApolloProvider>
    </HelmetProvider>
  );
}

export default App;
