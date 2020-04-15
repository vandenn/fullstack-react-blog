import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './containers/HomePage';
import AddPostPage from './containers/AddPostPage';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/compose' component={AddPostPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
