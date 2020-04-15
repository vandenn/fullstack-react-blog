import React from 'react';
import history from '../../_history';

import * as routes from '../../constants/frontendRoutes';

const HomePage = props => {
  const handleCreatePostClick = event => {
    history.push(routes.createPost);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleCreatePostClick}>Create Post</button>
    </div>
  );
};

export default HomePage;
