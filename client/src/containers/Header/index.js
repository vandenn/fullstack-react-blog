import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Add as AddIcon, GitHub as GitHubIcon } from '@material-ui/icons';
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

  const handleCreatePostClick = (event) => {
    history.push(routes.createPost);
  };

  const renderGithubButton = () => {
    return (
      <Button
        variant='contained'
        target='_blank'
        href='https://github.com/Vandenn/fullstack-react-blog/'
        className={classes.githubButton}
        startIcon={<GitHubIcon />}
      >
        View on Github
      </Button>
    );
  };

  const renderCreatePostButton = () => {
    if (!isLoading && currentUser) {
      return (
        <Button
          color='primary'
          variant='contained'
          onClick={handleCreatePostClick}
          className={classes.createPostButton}
          startIcon={<AddIcon />}
        >
          Create New Post
        </Button>
      );
    }
    return null;
  };

  return (
    <>
      <AppBar position='fixed' color='default' elevation={1}>
        <Toolbar>
          <Typography
            onClick={handleTitleClick}
            variant='h4'
            style={{ cursor: 'pointer' }}
          >
            FSR Blog
          </Typography>
          {renderCreatePostButton()}
          <div className={classes.grow} />
          {renderGithubButton()}
          {!isLoading && !currentUser && (
            <Button
              color='secondary'
              variant='contained'
              onClick={loginWithRedirect}
            >
              Login
            </Button>
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
                color='secondary'
                variant='contained'
                onClick={() => logout({ returnTo: window.location.origin })}
                className={classes.logoutButton}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default Header;
