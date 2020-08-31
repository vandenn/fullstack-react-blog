import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UserAvatar from 'components/UserAvatar';
import {
  makeCommentBodySelector,
  makeCommentDateCreatedSelector,
  makeCommentAuthorIdSelector,
} from 'selectors/entities/comments';
import { makeUsernameSelector } from 'selectors/entities/users';
import styles from './styles';

const useStyles = makeStyles(styles);

const Comment = (props) => {
  const classes = useStyles();
  const { commentId } = props;
  const commentBodySelector = useMemo(makeCommentBodySelector, []);
  const commentBody = useSelector((state) =>
    commentBodySelector(state, { commentId })
  );
  const commentDateCreatedSelector = useMemo(
    makeCommentDateCreatedSelector,
    []
  );
  const commentDateCreated = useSelector((state) =>
    commentDateCreatedSelector(state, { commentId })
  );
  const commentAuthorIdSelector = useMemo(makeCommentAuthorIdSelector, []);
  const commentAuthorId = useSelector((state) =>
    commentAuthorIdSelector(state, { commentId })
  );
  const commentAuthorUsernameSelector = useMemo(makeUsernameSelector, []);
  const commentAuthorUsername = useSelector((state) =>
    commentAuthorUsernameSelector(state, { userId: commentAuthorId })
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<UserAvatar userId={commentAuthorId} />}
        title={commentAuthorUsername}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
        >{`Written: ${commentDateCreated}`}</Typography>
        <Typography>{commentBody}</Typography>
      </CardContent>
    </Card>
  );
};

Comment.propTypes = {
  commentId: PropTypes.any.isRequired,
};

export default Comment;
