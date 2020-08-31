import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '_history';
import * as routes from 'constants/frontendRoutes';
import styles from './styles';

const useStyles = makeStyles(styles);

const BackToHomeButton = (props) => {
  const classes = useStyles();

  const handleGoBackClick = (event) => {
    history.push(routes.homeRoute);
  };

  return (
    <Button
      variant='contained'
      onClick={handleGoBackClick}
      className={classes.root}
    >
      Go Back
    </Button>
  );
};

export default BackToHomeButton;
