import { createSelector } from 'reselect';

import { createDeepEqualSelector } from '../utils';
import { makePostsSelector } from '../entities/posts';
import { uiSelector } from './';

export const makeHomePageSelector = () =>
  createSelector([uiSelector], (ui) => ui.homePage);

export const makePostListPageNumberSelector = () => {
  const homePageSelector = makeHomePageSelector();
  return createSelector(
    [homePageSelector],
    (homePage) => homePage.postListPageNumber
  );
};

export const makeNumberOfPostsPerPageSelector = () => {
  const homePageSelector = makeHomePageSelector();
  return createSelector(
    [homePageSelector],
    (homePage) => homePage.numberOfPostsPerPage
  );
};

export const makeVisiblePostsIdsSelector = () => {
  const postListPageNumberSelector = makePostListPageNumberSelector();
  const numberOfPostsPerPageSelector = makeNumberOfPostsPerPageSelector();
  const postsSelector = makePostsSelector();
  return createDeepEqualSelector(
    [postListPageNumberSelector, numberOfPostsPerPageSelector, postsSelector],
    (pageNumber, postsPerPage, posts) => {
      const sortedPosts = Object.values(posts).sort(
        (a, b) => new Date(b.date_created) - new Date(a.date_created)
      );
      const startIndex = pageNumber * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      return sortedPosts.slice(startIndex, endIndex).map((post) => post.id);
    }
  );
};
