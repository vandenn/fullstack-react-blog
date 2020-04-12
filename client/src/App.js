import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './containers/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
