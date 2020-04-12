import React from 'react';

import { useAuth0 } from '../../contexts/auth0';

const HomePage = props => {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      Home
      {!isLoading && !user && (
        <button onClick={loginWithRedirect}>Login</button>
      )}
      {!isLoading && user && (
        <>
          <h2>Welcome to FSR Blog!</h2>
          <p>Hello, {user.name}!</p>
          {user.picture && <img src={user.picture} alt='My Avatar' />}
          <hr />
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;
