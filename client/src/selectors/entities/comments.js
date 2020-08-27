import { createSelector } from 'reselect';

import { createDeepEqualSelector } from '../utils';
import { makeUsersSelector } from './users';

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

export const makeCommentAuthorSelector = () => {
  const commentSelectorById = makeCommentSelectorById();
  const usersSelector = makeUsersSelector();
  return createSelector(
    [commentSelectorById, usersSelector],
    (comment, users) => (comment ? users[comment.user_id] : {})
  );
};

export const makeCommentAuthorIdSelector = () => {
  const commentSelectorById = makeCommentSelectorById();
  return createSelector([commentSelectorById], (comment) =>
    comment ? comment.user_id : ''
  );
};

export const makeCommentAuthorUsernameSelector = () => {
  const commentAuthorSelector = makeCommentAuthorSelector();
  return createSelector([commentAuthorSelector], (commentAuthor) =>
    commentAuthor ? commentAuthor.username : ''
  );
};

export const makeCommentAuthorPictureSelector = () => {
  const commentAuthorSelector = makeCommentAuthorSelector();
  return createSelector([commentAuthorSelector], (commentAuthor) =>
    commentAuthor ? commentAuthor.picture : ''
  );
};
