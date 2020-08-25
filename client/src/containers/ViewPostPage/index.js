import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '_history';

import { actions } from 'actions/ui/viewPostPage';
import * as routes from 'constants/frontendRoutes';
import {
  makePostTitleSelector,
  makePostBodySelector,
  makePostDateCreatedSelector,
  makePostAuthorUsernameSelector,
} from 'selectors/entities/posts';

const ViewPostPage = (props) => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(actions.invokeFetchPostAndAuthor(id));
  }, [dispatch, id]);

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
