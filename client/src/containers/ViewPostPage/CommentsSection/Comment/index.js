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
  makeCommentAuthorUsernameSelector,
} from 'selectors/entities/comments';
import styles from './styles';

const useStyles = makeStyles(styles);

const Comment = (props) => {
  const classes = useStyles();
  const { id } = props;
  const commentBodySelector = useMemo(makeCommentBodySelector, []);
  const commentBody = useSelector((state) =>
    commentBodySelector(state, { id })
  );
  const commentDateCreatedSelector = useMemo(
    makeCommentDateCreatedSelector,
    []
  );
  const commentDateCreated = useSelector((state) =>
    commentDateCreatedSelector(state, { id })
  );
  const commentAuthorIdSelector = useMemo(makeCommentAuthorIdSelector, []);
  const commentAuthorId = useSelector((state) =>
    commentAuthorIdSelector(state, { id })
  );
  const commentAuthorUsernameSelector = useMemo(
    makeCommentAuthorUsernameSelector,
    []
  );
  const commentAuthorUsername = useSelector((state) =>
    commentAuthorUsernameSelector(state, { id })
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<UserAvatar id={commentAuthorId} />}
        title={commentTitle}
        subheader={`By: ${commentAuthorUsername}`}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
        >{`Written: ${commentDateCreated}`}</Typography>
        <Typography noWrap className={classes.previewBody}>
          {commentBody}
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
        >{`Likes: ${commentLikeCount}`}</Typography>
      </CardContent>
    </Card>
  );
};

Comment.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Comment;
