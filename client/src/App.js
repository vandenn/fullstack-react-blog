import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '_history';

import Header from './components/Header';
import HomePage from './containers/HomePage';
import AddPostPage from './containers/AddPostPage';

const App = () => {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/compose' component={AddPostPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
