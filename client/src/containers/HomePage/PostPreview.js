import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import history from '_history';

import * as routes from 'constants/frontendRoutes';
import {
  makePostTitleSelector,
  makePostBodySelector,
  makePostDateCreatedSelector,
  makePostAuthorUsernameSelector,
} from 'selectors/entities/posts';

const PostPreview = (props) => {
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

  const handleViewMoreClick = (event) => {
    history.push(routes.buildViewPostRoute(id));
  };

  return (
    <>
      <p>
        <b>{postTitle}</b>
      </p>
      <p>{postBody}</p>
      <p>{postDateCreated}</p>
      <p>{postAuthorUsername}</p>
      <button onClick={handleViewMoreClick}>View More</button>
    </>
  );
};

PostPreview.propTypes = {
  id: PropTypes.any.isRequired,
};

export default PostPreview;
