import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

const Router = () => {
  return (
    <Switch>
      <Route activeClassName="active" path="/getonboard" component={LoginPage} />
      <Route activeClassName="active-brand" path="/" component={LandingPage} />
    </Switch>
  );
};

export default Router;