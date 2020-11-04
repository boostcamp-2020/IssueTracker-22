import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathUri from './constants/path';
import { Login, Issue } from './pages';

const routes = () => (
  <Switch>
    <Route exact path={pathUri.home} component={Login}/>
    <Route path={pathUri.issue} component={Issue}/>
  </Switch>
);

export default routes;
