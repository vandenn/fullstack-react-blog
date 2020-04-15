import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeCurrentUserSelector } from '../../selectors/data/currentUser';

const CreatePostPage = props => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);

  const handleTitleChange = event => setTitle(event.target.value);
  const handleBodyChange = event => setBody(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (!currentUser) return;
    console.log(currentUser.uid);
  };

  return (
    <div>
      <h1>Compose</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type='text' value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Body:
          <textarea value={body} onChange={handleBodyChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default CreatePostPage;
