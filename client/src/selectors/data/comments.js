import { createSelector } from 'reselect';

import { dataSelector } from '.';

export const makeTotalPostCommentCountMapSelector = () =>
  createSelector(
    [dataSelector],
    (data) => data.comments.totalPostCommentCountMap
  );

export const makeTotalPostCommentCountSelector = () => {
  const totalPostCommentCountMapSelector = makeTotalPostCommentCountMapSelector();
  return createSelector(
    [totalPostCommentCountMapSelector, (_, props) => props.postId],
    (map, postId) => map[postId] || 0
  );
};
