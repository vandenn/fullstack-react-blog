import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormControl, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import history from '_history';
import { actions } from 'actions/requests/posts';
import { makeCurrentUserSelector } from 'selectors/data/currentUser';
import * as frontendRoutes from 'constants/frontendRoutes';
import styles from './styles';

const useStyles = makeStyles(styles);

const CreatePostPage = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleBodyChange = (event) => setBody(event.target.value);

  const handleGoBackClick = (event) => {
    history.push(frontendRoutes.home);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (!currentUser) return;
    dispatch(actions.createPost(title, body, currentUser.uid));
    setTitle('');
    setBody('');
    history.push(frontendRoutes.home);
  };

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>
        Compose
      </Typography>
      <FormControl fullWidth>
        <TextField
          required
          label='Title'
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          required
          multiline
          rows={10}
          label='Body'
          value={body}
          onChange={handleBodyChange}
        />
      </FormControl>
      <Button
        variant='contained'
        onClick={handleGoBackClick}
        className={classes.backButton}
      >
        Go Back
      </Button>
      <Button
        color='primary'
        variant='contained'
        onClick={handleSubmitClick}
        className={classes.submitButton}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreatePostPage;
