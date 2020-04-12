import React from 'react';

import { useAuth0 } from '../../contexts/auth0';

const Header = props => {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <h2>FSR Blog</h2>
      {!isLoading && !user && (
        <button onClick={loginWithRedirect}>Login</button>
      )}
      {!isLoading && user && (
        <>
          {user.picture && <img src={user.picture} alt='My Avatar' />}
          <p>Hello, {user.name}!</p>
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
