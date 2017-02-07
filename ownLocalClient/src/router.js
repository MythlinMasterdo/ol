import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import BusinessLandingPage from './BusinessLandingPage'


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='/business' component={BusinessLandingPage} />
  </Router>
);

export default routes;
