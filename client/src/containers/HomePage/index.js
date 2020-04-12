import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { Auth0Context } from '../../contexts/auth0';

const HomePage = props => {
  const auth0 = useContext(Auth0Context);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/hello').then(response => setText(response.data));
  }, []);

  const { isLoading, user, loginWithRedirect } = auth0;
  return (
    <div>
      Home
      <p>{text}</p>
      {!isLoading && !user && (
        <button onClick={loginWithRedirect}>Login</button>
      )}
      {!isLoading && user && (
        <>
          <h2>Welcome to FSR Blog!</h2>
          <p>Hello, {user.name}!</p>
          {user.picture && <img src={user.picture} alt='My Avatar' />}
        </>
      )}
    </div>
  );
};

export default HomePage;
