import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '_history';

import { actions } from 'actions/ui/homePage';
import PostPreview from './PostPreview';
import { useAuth0 } from 'contexts/auth0';
import * as routes from 'constants/frontendRoutes';
import { makeCurrentUserSelector } from 'selectors/data/currentUser';
import {
  makePostListPageNumberSelector,
  makeNumberOfPostsPerPageSelector,
  makeVisiblePostsIdsSelector,
} from 'selectors/ui/homePage';

const HomePage = (props) => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth0();
  const currentUserSelector = useMemo(makeCurrentUserSelector, []);
  const currentUser = useSelector(currentUserSelector);
  const postListPageNumberSelector = useMemo(
    makePostListPageNumberSelector,
    []
  );
  const postListPageNumber = useSelector(postListPageNumberSelector);
  const numberOfPostsPerPageSelector = useMemo(
    makeNumberOfPostsPerPageSelector,
    []
  );
  const numberOfPostsPerPage = useSelector(numberOfPostsPerPageSelector);
  const visiblePostsIdsSelector = useMemo(makeVisiblePostsIdsSelector, []);
  const visiblePostsIds = useSelector(visiblePostsIdsSelector);

  useEffect(() => {
    dispatch(
      actions.invokeFetchVisiblePostsAndAuthors(
        postListPageNumber,
        numberOfPostsPerPage
      )
    );
  }, [dispatch, postListPageNumber, numberOfPostsPerPage, visiblePostsIds]);

  const handleCreatePostClick = (event) => {
    history.push(routes.createPost);
  };

  const renderCreatePostButton = () => {
    if (!isLoading && currentUser) {
      return <button onClick={handleCreatePostClick}>Create Post</button>;
    }
    return null;
  };

  const renderVisiblePosts = () => {
    const visiblePosts = visiblePostsIds.map((visiblePostId) => (
      <PostPreview key={visiblePostId} id={visiblePostId} />
    ));
    return visiblePosts;
  };

  return (
    <div>
      <h1>Home Page</h1>
      {renderCreatePostButton()}
      {renderVisiblePosts()}
    </div>
  );
};

export default HomePage;
