import { createSelector } from 'reselect';

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
