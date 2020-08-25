import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '_history';
import { useAuth0 } from 'contexts/auth0';
import * as routes from 'constants/frontendRoutes';
import { makeCurrentUserSelector } from 'selectors/data/currentUser';
import styles from './styles';

const useStyles = makeStyles(styles);

const Header = (props) => {
  const classes = useStyles();
  const { isLoading, loginWithRedirect, logout } = useAuth0();
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);

  const handleTitleClick = (event) => {
    history.push(routes.home);
  };

  return (
    <AppBar position='static' color='default' elevation={1}>
      <Toolbar>
        <Typography
          onClick={handleTitleClick}
          variant='h4'
          style={{ cursor: 'pointer' }}
        >
          FSR Blog
        </Typography>
        <div className={classes.grow} />
        {!isLoading && !currentUser && (
          <Button onClick={loginWithRedirect}>Login</Button>
        )}
        {!isLoading && currentUser && (
          <>
            {currentUser.picture && (
              <img
                src={currentUser.picture}
                alt='My Avatar'
                className={classes.profilePicture}
              />
            )}
            <Typography>Hello, {currentUser.username}!</Typography>
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
