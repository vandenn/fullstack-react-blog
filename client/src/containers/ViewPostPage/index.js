import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '_history';
import { actions } from 'actions/ui/viewPostPage';
import * as routes from 'constants/frontendRoutes';
import {
  makePostTitleSelector,
  makePostBodySelector,
  makePostDateCreatedSelector,
  makePostAuthorUsernameSelector,
} from 'selectors/entities/posts';
import styles from './styles';

const useStyles = makeStyles(styles);

const ViewPostPage = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { pid: id } = props.match.params;
  const postTitleSelector = useMemo(makePostTitleSelector, []);
  const postTitle = useSelector((state) => postTitleSelector(state, { id }));
  const postBodySelector = useMemo(makePostBodySelector, []);
  const postBody = useSelector((state) => postBodySelector(state, { id }));
  const postDateCreatedSelector = useMemo(makePostDateCreatedSelector, []);
  const postDateCreated = useSelector((state) =>
    postDateCreatedSelector(state, { id })
  );
  const postAuthorUsernameSelector = useMemo(
    makePostAuthorUsernameSelector,
    []
  );
  const postAuthorUsername = useSelector((state) =>
    postAuthorUsernameSelector(state, { id })
  );

  useEffect(() => {
    dispatch(actions.invokeFetchPostAndAuthor(id));
  }, [dispatch, id]);

  const handleGoBackClick = (event) => {
    history.push(routes.home);
  };

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>
        {postTitle}
      </Typography>
      <Typography
        variant='body2'
        color='textSecondary'
      >{`By: ${postAuthorUsername}`}</Typography>
      <Typography
        variant='body2'
        color='textSecondary'
      >{`Written: ${postDateCreated}`}</Typography>
      <Typography>{postBody}</Typography>
      <Button onClick={handleGoBackClick} className={classes.backButton}>
        Go Back
      </Button>
    </div>
  );
};

export default ViewPostPage;
