import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import history from '_history';

import { useAuth0 } from 'contexts/auth0';
import * as routes from 'constants/frontendRoutes';
import { makeCurrentUserSelector } from 'selectors/data/currentUser';

const HomePage = (props) => {
  const { isLoading } = useAuth0();
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);

  const handleCreatePostClick = (event) => {
    history.push(routes.createPost);
  };

  const renderCreatePostButton = () => {
    if (!isLoading && currentUser) {
      return <button onClick={handleCreatePostClick}>Create Post</button>;
    }
    return null;
  };

  return (
    <div>
      <h1>Home Page</h1>
      {renderCreatePostButton()}
    </div>
  );
};

export default HomePage;
