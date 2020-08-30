import { createSelector } from 'reselect';

import { uiSelector } from './';

export const makeViewPostPageSelector = () =>
  createSelector([uiSelector], (ui) => ui.viewPostPage);

export const makeCommentListPageNumberSelector = () => {
  const viewPostPageSelector = makeViewPostPageSelector();
  return createSelector(
    [viewPostPageSelector],
    (viewPostPage) => viewPostPage.commentListPageNumber
  );
};

export const makeNumberOfCommentsPerPageSelector = () => {
  const viewPostPageSelector = makeViewPostPageSelector();
  return createSelector(
    [viewPostPageSelector],
    (viewPostPage) => viewPostPage.numberOfCommentsPerPage
  );
};
