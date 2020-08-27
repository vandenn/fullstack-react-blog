import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Comment from './Comment';
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

  const postCommentsIdsSelector = useMemo(makePostCommentsIdsSelector, []);
  const postCommentsIds = useSelector((state) =>
    postCommentsIdsSelector(state, { pid: postId })
  );
  const postCommentCountSelector = useMemo(makePostCommentCountSelector, []);
  const postCommentCount = useSelector((state) =>
    postCommentCountSelector(state, { pid: postId })
  );

  const onSubmitClick = (event) => {};

  const renderCommentList = () => {
    const commentList = postCommentsIds.map((postCommentId) => (
      <Comment key={postCommentId} id={postCommentId} />
    ));
    return commentList;
  };

  return (
    <div className={classes.root}>
      <Typography variant='h5'>Comments ({postCommentCount})</Typography>
      <TextField
        multiline
        rows={2}
        label='Write a comment..'
        className={classes.commentField}
      />
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={onSubmitClick}
          className={classes.submitButton}
        >
          Submit
        </Button>
      </div>
      {renderCommentList()}
    </div>
  );
};

CommentsSection.propTypes = {
  postId: PropTypes.any.isRequired,
};

export default CommentsSection;
