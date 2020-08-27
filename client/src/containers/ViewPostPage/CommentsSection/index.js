import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth0 } from 'contexts/auth0';
import Comment from './Comment';
import { actions as commentsRequestsActions } from 'actions/requests/comments';
import { makeCurrentUserSelector } from 'selectors/data/currentUser';
import {
  makePostCommentsIdsSelector,
  makePostCommentCountSelector,
} from 'selectors/entities/comments';
import styles from './styles';

const useStyles = makeStyles(styles);

const CommentsSection = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { postId } = props;
  const [body, setBody] = useState('');
  const { isLoading } = useAuth0();

  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);
  const postCommentsIdsSelector = useMemo(makePostCommentsIdsSelector, []);
  const postCommentsIds = useSelector((state) =>
    postCommentsIdsSelector(state, { pid: postId })
  );
  const postCommentCountSelector = useMemo(makePostCommentCountSelector, []);
  const postCommentCount = useSelector((state) =>
    postCommentCountSelector(state, { pid: postId })
  );

  useEffect(() => {
    dispatch(commentsRequestsActions.fetchPostComments(postId));
  }, [dispatch, postId]);

  const handleBodyChange = (event) => setBody(event.target.value);
  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (!currentUser) return;
    dispatch(commentsRequestsActions.addCommentToPost(postId, body));
    setBody('');
  };

  const renderCommentForm = () => {
    if (!isLoading && currentUser) {
      return (
        <>
          <TextField
            multiline
            rows={2}
            label='Write a comment..'
            value={body}
            onChange={handleBodyChange}
            className={classes.commentField}
          />
          <div>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmitClick}
              className={classes.submitButton}
            >
              Submit
            </Button>
          </div>
        </>
      );
    }
    return null;
  };

  const renderCommentList = () => {
    const commentList = postCommentsIds.map((postCommentId) => (
      <Comment key={postCommentId} id={postCommentId} />
    ));
    return commentList;
  };

  return (
    <div className={classes.root}>
      <Typography variant='h5'>Comments ({postCommentCount})</Typography>
      {renderCommentForm()}
      {renderCommentList()}
    </div>
  );
};

CommentsSection.propTypes = {
  postId: PropTypes.any.isRequired,
};

export default CommentsSection;
