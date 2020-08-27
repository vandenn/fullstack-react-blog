import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const CommentsSection = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h5'>Comments</Typography>
      <TextField
        multiline
        rows={2}
        label='Write a comment..'
        className={classes.commentField}
      />
    </div>
  );
};

CommentsSection.propTypes = {
  postId: PropTypes.any.isRequired,
};

export default CommentsSection;
