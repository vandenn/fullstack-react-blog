import { createSelector } from 'reselect';

import { createDeepEqualSelector } from '../utils';

export const makeCommentsSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.comments);

export const makeCommentSelectorById = () => {
  const commentsSelector = makeCommentsSelector();
  return createSelector(
    [commentsSelector, (_, props) => props.id],
    (comments, id) => comments[id]
  );
};

export const makePostCommentsSelector = () => {
  const commentsSelector = makeCommentsSelector();
  return createDeepEqualSelector(
    [commentsSelector, (_, props) => props.pid],
    (comments, pid) => comments.filter((comment) => comment.post_id === pid)
  );
};

export const makePostCommentCountSelector = () => {
  const postCommentsSelector = makePostCommentsSelector();
  return createSelector(
    [postCommentsSelector],
    (postComments) => postComments.length
  );
};
