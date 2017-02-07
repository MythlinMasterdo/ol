import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './App';
import BusinessLandingPage from './BusinessLandingPage'


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/business' component={BusinessLandingPage} />
    </Route>
  </Router>
);

export default routes;
