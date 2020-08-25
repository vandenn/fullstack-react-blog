import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import history from '_history';

import * as routes from 'constants/frontendRoutes';
import {
  makePostTitleSelector,
  makePostBodySelector,
  makePostDateCreatedSelector,
  makePostAuthorUsernameSelector,
} from 'selectors/entities/posts';

const ViewPostPage = (props) => {
  const { pid: id } = props.match.params;
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

  const handleGoBackClick = (event) => {
    history.push(routes.home);
  };

  return (
    <div>
      <p>
        <b>{postTitle}</b>
      </p>
      <p>{postBody}</p>
      <p>{postDateCreated}</p>
      <p>{postAuthorUsername}</p>
      <button onClick={handleGoBackClick}>Go Back</button>
    </div>
  );
};

export default ViewPostPage;
