import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '_history';
import UserAvatar from 'components/UserAvatar';
import * as routes from 'constants/frontendRoutes';
import {
  makePostTitleSelector,
  makePostBodySelector,
  makePostDateCreatedSelector,
  makePostLikeCountSelector,
  makePostAuthorIdSelector,
} from 'selectors/entities/posts';
import { makeUsernameSelector } from 'selectors/entities/users';
import styles from './styles';

const useStyles = makeStyles(styles);

const PostPreview = (props) => {
  const classes = useStyles();
  const { postId } = props;
  const postTitleSelector = useMemo(makePostTitleSelector, []);
  const postTitle = useSelector((state) =>
    postTitleSelector(state, { postId })
  );
  const postBodySelector = useMemo(makePostBodySelector, []);
  const postBody = useSelector((state) => postBodySelector(state, { postId }));
  const postDateCreatedSelector = useMemo(makePostDateCreatedSelector, []);
  const postDateCreated = useSelector((state) =>
    postDateCreatedSelector(state, { postId })
  );
  const postLikeCountSelector = useMemo(makePostLikeCountSelector, []);
  const postLikeCount = useSelector((state) =>
    postLikeCountSelector(state, { postId })
  );
  const postAuthorIdSelector = useMemo(makePostAuthorIdSelector, []);
  const postAuthorId = useSelector((state) =>
    postAuthorIdSelector(state, { postId })
  );
  const postAuthorUsernameSelector = useMemo(makeUsernameSelector, []);
  const postAuthorUsername = useSelector((state) =>
    postAuthorUsernameSelector(state, { userId: postAuthorId })
  );

  const handleViewMoreClick = (event) => {
    history.push(routes.buildViewPostRoute(postId));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<UserAvatar userId={postAuthorId} />}
        title={postTitle}
        subheader={`By: ${postAuthorUsername}`}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
        >{`Written: ${postDateCreated}`}</Typography>
        <Typography noWrap className={classes.previewBody}>
          {postBody}
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
        >{`Likes: ${postLikeCount}`}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size='small' onClick={handleViewMoreClick}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

PostPreview.propTypes = {
  postId: PropTypes.any.isRequired,
};

export default PostPreview;
