import { createSelector } from 'reselect';

import { entitiesSelector } from './';
import { makeUsersSelector } from './users';

export const makePostsSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.posts);

export const makePostSelectorById = () => {
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

export const makePostAuthorSelector = () => {
  const postSelectorById = makePostSelectorById();
  const usersSelector = makeUsersSelector();
  return createSelector([postSelectorById, usersSelector], (post, users) =>
    post ? users[post.user_id] : ''
  );
};
