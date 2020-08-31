import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { ThumbUp as ThumbUpIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth0 } from 'contexts/auth0';
import { actions as postsRequestsActions } from 'actions/requests/posts';
import { makeCurrentUserSelector } from 'selectors/data/users';
import {
  makePostLikeCountSelector,
  makeDoesCurrentUserLikePostSelector,
} from 'selectors/entities/posts';
import styles from './styles';

const useStyles = makeStyles(styles);

const LikeButton = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isLoading } = useAuth0();
  const { postId } = props;
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);
  const postLikeCountSelector = useMemo(makePostLikeCountSelector, []);
  const postLikeCount = useSelector((state) =>
    postLikeCountSelector(state, { postId })
  );
  const doesCurrentUserLikePostSelector = useMemo(
    makeDoesCurrentUserLikePostSelector,
    []
  );
  const doesCurrentUserLikePost = useSelector((state) =>
    doesCurrentUserLikePostSelector(state, { postId })
  );

  const handleLikeClick = (event) => {
    dispatch(postsRequestsActions.addLikeToPost(postId));
  };

  return (
    <>
      {!isLoading && currentUser && (
        <Button
          variant='contained'
          color={doesCurrentUserLikePost ? 'default' : 'primary'}
          onClick={handleLikeClick}
          className={classes.root}
          startIcon={<ThumbUpIcon />}
        >
          {postLikeCount}
        </Button>
      )}
    </>
  );
};

LikeButton.propTypes = {
  postId: PropTypes.any.isRequired,
};

export default LikeButton;
