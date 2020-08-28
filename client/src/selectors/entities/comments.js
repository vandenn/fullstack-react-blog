import { createSelector } from 'reselect';

import { createDeepEqualSelector } from '../utils';
import { entitiesSelector } from './';

export const makeCommentsSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.comments);

const makeCommentSelectorById = () => {
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
    (comments, pid) =>
      Object.values(comments)
        .sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
        .filter((comment) => String(comment.post_id) === String(pid))
  );
};

export const makePostCommentsIdsSelector = () => {
  const postCommentsSelector = makePostCommentsSelector();
  return createSelector([postCommentsSelector], (postComments) =>
    postComments.map((comment) => comment.cid)
  );
};

export const makePostCommentCountSelector = () => {
  const postCommentsSelector = makePostCommentsSelector();
  return createSelector(
    [postCommentsSelector],
    (postComments) => postComments.length
  );
};

export const makeCommentBodySelector = () => {
  const commentSelectorById = makeCommentSelectorById();
  return createSelector([commentSelectorById], (comment) =>
    comment ? comment.body : {}
  );
};

export const makeCommentDateCreatedSelector = () => {
  const commentSelectorById = makeCommentSelectorById();
  return createSelector([commentSelectorById], (comment) =>
    comment ? comment.date_created : {}
  );
};

export const makeCommentAuthorIdSelector = () => {
  const commentSelectorById = makeCommentSelectorById();
  return createSelector([commentSelectorById], (comment) =>
    comment ? comment.user_id : ''
  );
};
