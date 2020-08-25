import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '_history';
import * as routes from 'constants/frontendRoutes';
import {
  makePostTitleSelector,
  makePostBodySelector,
  makePostDateCreatedSelector,
  makePostAuthorUsernameSelector,
  makePostAuthorPictureSelector,
} from 'selectors/entities/posts';
import styles from './styles';

const useStyles = makeStyles(styles);

const PostPreview = (props) => {
  const classes = useStyles();
  const { id } = props;
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
  const postAuthorPictureSelector = useMemo(makePostAuthorPictureSelector, []);
  const postAuthorPicture = useSelector((state) =>
    postAuthorPictureSelector(state, { id })
  );

  const handleViewMoreClick = (event) => {
    history.push(routes.buildViewPostRoute(id));
  };

  const renderAvatar = () => {
    if (postAuthorPicture) {
      return <Avatar alt={postAuthorUsername} src={postAuthorPicture} />;
    } else {
      return (
        <Avatar className={classes.defaultAvatar}>
          {postAuthorUsername
            ? postAuthorUsername.charAt(0).toUpperCase()
            : '-'}
        </Avatar>
      );
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={renderAvatar()}
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
  id: PropTypes.any.isRequired,
};

export default PostPreview;
