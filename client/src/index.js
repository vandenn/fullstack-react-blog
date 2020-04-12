import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './Root';
import { Auth0Provider } from './contexts/auth0';

ReactDOM.render(
  <Root>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </Root>,
  document.getElementById('root')
);
