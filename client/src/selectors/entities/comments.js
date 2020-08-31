import _ from 'lodash';
import { createSelector } from 'reselect';

import { createDeepEqualSelector } from '../utils';
import { entitiesSelector } from './';

export const makeCommentsSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.comments);

const makeCommentSelectorById = () => {
  const commentsSelector = makeCommentsSelector();
  return createSelector(
    [commentsSelector, (_, props) => props.commentId],
    (comments, id) => comments[id]
  );
};

export const makePostCommentsSelector = () => {
  const commentsSelector = makeCommentsSelector();
  return createDeepEqualSelector(
    [commentsSelector, (_, props) => props.postId],
    (comments, postId) =>
      _.mapKeys(
        Object.values(comments).filter(
          (comment) => String(comment.post_id) === String(postId)
        ),
        'id'
      )
  );
};

export const makePostCommentsIdsSelector = () => {
  const postCommentsSelector = makePostCommentsSelector();
  return createSelector([postCommentsSelector], (postComments) =>
    Object.values(postComments).map((comment) => comment.id)
  );
};

export const makePostCommentCountSelector = () => {
  const postCommentsSelector = makePostCommentsSelector();
  return createSelector(
    [postCommentsSelector],
    (postComments) => Object.values(postComments).length
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
