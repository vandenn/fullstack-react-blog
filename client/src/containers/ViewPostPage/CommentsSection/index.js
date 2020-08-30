import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth0 } from 'contexts/auth0';
import Comment from './Comment';
import { actions as commentsRequestsActions } from 'actions/requests/comments';
import { actions as viewPostPageActions } from 'actions/ui/viewPostPage';
import { makeCurrentUserSelector } from 'selectors/data/users';
import { makePostCommentCountSelector } from 'selectors/entities/comments';
import { makeVisiblePostCommentsIdsSelector } from 'selectors/ui/viewPostPage';
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
  const visiblePostCommentsIdsSelector = useMemo(
    makeVisiblePostCommentsIdsSelector,
    []
  );
  const visiblePostCommentsIds = useSelector((state) =>
    visiblePostCommentsIdsSelector(state, { pid: postId })
  );
  const postCommentCountSelector = useMemo(makePostCommentCountSelector, []);
  const postCommentCount = useSelector((state) =>
    postCommentCountSelector(state, { pid: postId })
  );

  useEffect(() => {
    dispatch(viewPostPageActions.invokeFetchVisibleCommentsAndAuthors(postId));
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
    const commentList = visiblePostCommentsIds.map((postCommentId) => (
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
