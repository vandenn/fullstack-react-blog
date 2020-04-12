import React, { useState, useEffect, createContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

export const Auth0Context = createContext();

export const Auth0Provider = props => {
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const config = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirect_uri: window.location.origin
  };

  useEffect(() => {
    async () => {
      setAuth0Client(await createAuth0Client(config));
      setIsAuthenticated(await auth0Client.isAuthenticated());
      setUser(isAuthenticated ? await auth0Client.getUser() : null);
      setIsLoading(false);
    };
  }, []);

  const { children } = props;
  const configObject = {
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
    getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
    getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
    logout: (...p) => auth0Client.logout(...p)
  };
  return (
    <Auth0Context.Provider value={configObject}>
      {children}
    </Auth0Context.Provider>
  );
};
