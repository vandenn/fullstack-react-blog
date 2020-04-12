import React, { useState, useEffect, useContext, createContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

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

  const initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(config);
    let isAuthenticated = true;
    if (window.location.search.includes('code='))
      await auth0Client.handleRedirectCallback();
    else isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;
    setAuth0Client(auth0Client);
    setIsLoading(false);
    setIsAuthenticated(isAuthenticated);
    console.log(user);
    setUser(user);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  useEffect(() => {
    initializeAuth0();
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
