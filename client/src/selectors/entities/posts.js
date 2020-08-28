import { createSelector } from 'reselect';

import { entitiesSelector } from './';
import { makeCurrentUserIdSelector } from '../data/users';

export const makePostsSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.posts);

const makePostSelectorById = () => {
  const postsSelector = makePostsSelector();
  return createSelector(
    [postsSelector, (_, props) => props.id],
    (posts, id) => posts[id]
  );
};

export const makePostTitleSelector = () => {
  const postSelectorById = makePostSelectorById();
  return createSelector([postSelectorById], (post) => (post ? post.title : ''));
};

export const makePostBodySelector = () => {
  const postSelectorById = makePostSelectorById();
  return createSelector([postSelectorById], (post) => (post ? post.body : ''));
};

export const makePostDateCreatedSelector = () => {
  const postSelectorById = makePostSelectorById();
  return createSelector([postSelectorById], (post) =>
    post ? post.date_created : ''
  );
};

export const makePostLikesSelector = () => {
  const postSelectorById = makePostSelectorById();
  return createSelector([postSelectorById], (post) =>
    post ? post.like_user_id : []
  );
};

export const makePostLikeCountSelector = () => {
  const postLikesSelector = makePostLikesSelector();
  return createSelector([postLikesSelector], (postLikes) =>
    postLikes ? postLikes.length : 0
  );
};

export const makeDoesCurrentUserLikePostSelector = () => {
  const postLikesSelector = makePostLikesSelector();
  const currentUserIdSelector = makeCurrentUserIdSelector();
  return createSelector(
    [postLikesSelector, currentUserIdSelector],
    (postLikes, currentUserId) => postLikes.includes(currentUserId)
  );
};

export const makePostAuthorIdSelector = () => {
  const postSelectorById = makePostSelectorById();
  return createSelector([postSelectorById], (post) =>
    post ? post.user_id : ''
  );
};
