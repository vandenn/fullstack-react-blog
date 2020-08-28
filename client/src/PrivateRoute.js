import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { useAuth0 } from 'contexts/auth0';
import * as routes from 'constants/frontendRoutes';
import { makeCurrentUserSelector } from 'selectors/data/users';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { isLoading } = useAuth0();
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);

  return (
    <Route
      {...otherProps}
      render={(props) =>
        !isLoading && currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routes.home,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
