import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAuth0 } from '../../contexts/auth0';
import { makeCurrentUserSelector } from '../../selectors/data/currentUser';

const Header = props => {
  const { isLoading, loginWithRedirect, logout } = useAuth0();
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);
  return (
    <div>
      <h2>FSR Blog</h2>
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
