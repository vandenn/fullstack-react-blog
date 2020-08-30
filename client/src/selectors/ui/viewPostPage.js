import { createSelector } from 'reselect';

import { createDeepEqualSelector } from '../utils';
import { uiSelector } from './';
import { makePostCommentsSelector } from '../entities/comments';

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

export const makeVisiblePostCommentsIdsSelector = () => {
  const commentListPageNumberSelector = makeCommentListPageNumberSelector();
  const numberOfCommentsPerPageSelector = makeNumberOfCommentsPerPageSelector();
  const postCommentsSelector = makePostCommentsSelector();
  return createDeepEqualSelector(
    [
      commentListPageNumberSelector,
      numberOfCommentsPerPageSelector,
      postCommentsSelector,
    ],
    (pageNumber, commentsPerPage, postComments) => {
      const sortedComments = Object.values(postComments).sort(
        (a, b) => new Date(b.date_created) - new Date(a.date_created)
      );
      const startIndex = pageNumber * commentsPerPage;
      const endIndex = startIndex + commentsPerPage;
      return sortedComments
        .slice(startIndex, endIndex)
        .map((comment) => comment.cid);
    }
  );
};
