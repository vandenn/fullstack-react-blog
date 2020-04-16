import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './_history';

import * as routes from './constants/frontendRoutes';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import CreatePostPage from './containers/CreatePostPage';

const App = () => {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.createPost} component={CreatePostPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
