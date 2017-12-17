import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrimaryLayout } from './layouts';
import { HomeContainer } from './containers/home';

const withPrimaryLayout = (Component: JSX.Element) => (
  <PrimaryLayout>{Component}</PrimaryLayout>
);

// routing configuration
export const AppRouter = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path={'/'}
        component={() => withPrimaryLayout(<HomeContainer />)}
      />
    </Switch>
  );
};
