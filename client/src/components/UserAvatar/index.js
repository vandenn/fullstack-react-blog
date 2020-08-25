import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  makePostAuthorUsernameSelector,
  makePostAuthorPictureSelector,
} from 'selectors/entities/posts';
import styles from './styles';

const useStyles = makeStyles(styles);

const UserAvatar = (props) => {
  const classes = useStyles();
  const { id } = props;
  const postAuthorPictureSelector = useMemo(makePostAuthorPictureSelector, []);
  const postAuthorPicture = useSelector((state) =>
    postAuthorPictureSelector(state, { id })
  );
  const postAuthorUsernameSelector = useMemo(
    makePostAuthorUsernameSelector,
    []
  );
  const postAuthorUsername = useSelector((state) =>
    postAuthorUsernameSelector(state, { id })
  );

  if (postAuthorPicture) {
    return <Avatar alt={postAuthorUsername} src={postAuthorPicture} />;
  } else {
    return (
      <Avatar className={classes.defaultAvatar}>
        {postAuthorUsername ? postAuthorUsername.charAt(0).toUpperCase() : '-'}
      </Avatar>
    );
  }
};

UserAvatar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default UserAvatar;
