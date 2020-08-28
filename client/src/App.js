import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import history from '_history';
import PrivateRoute from './PrivateRoute';
import * as routes from 'constants/frontendRoutes';
import Header from 'containers/Header';
import HomePage from 'containers/HomePage';
import CreatePostPage from 'containers/CreatePostPage';
import ViewPostPage from 'containers/ViewPostPage';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PrivateRoute
            exact
            path={routes.createPost}
            component={CreatePostPage}
          />
          <Route exact path={routes.viewPost} component={ViewPostPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
