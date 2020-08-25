import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import history from '_history';

import { useAuth0 } from 'contexts/auth0';
import * as routes from 'constants/frontendRoutes';
import { makeCurrentUserSelector } from 'selectors/data/currentUser';

const Header = (props) => {
  const { isLoading, loginWithRedirect, logout } = useAuth0();
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);

  const handleTitleClick = (event) => {
    history.push(routes.home);
  };

  return (
    <div>
      <h2 onClick={handleTitleClick}>FSR Blog</h2>
      {!isLoading && !currentUser && (
        <button onClick={loginWithRedirect}>Login</button>
      )}
      {!isLoading && currentUser && (
        <>
          {currentUser.picture && (
            <img src={currentUser.picture} alt='My Avatar' />
          )}
          <p>Hello, {currentUser.username}!</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      )}
      <hr />
    </div>
  );
};

export default Header;
