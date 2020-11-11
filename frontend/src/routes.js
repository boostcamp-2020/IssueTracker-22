import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pathUri from './constants/path';
import {
  Login, Issue, CreateIssue, IssueDetail, Label,
} from './pages';

const routes = () => (
  <Switch>
    <Route exact path={pathUri.home} component={Login}/>
    <Route exact path={pathUri.createIssue} component={CreateIssue}/>
    <Route path={pathUri.issueDetail} component={IssueDetail}/>
    <Route path={pathUri.issue} component={Issue}/>
    <Route path={pathUri.label} component={Label}/>
  </Switch>
);

export default routes;
