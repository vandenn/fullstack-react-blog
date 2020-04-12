import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Auth0Context } from './contexts/auth0';
import HomePage from './containers/HomePage';

const App = () => {
  const auth0 = useContext(Auth0Context);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
