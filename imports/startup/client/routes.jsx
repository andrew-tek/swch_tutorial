import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
import SecondPage from '/imports/ui/pages/SecondPage.jsx';
import ProductContainer from '/imports/ui/containers/ProductContainer.jsx';


//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomeContainer} />
      <Route path="/product/:id" component={ProductContainer} />
    </Route>
  </Router>
);
