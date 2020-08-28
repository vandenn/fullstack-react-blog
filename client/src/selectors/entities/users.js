import { createSelector } from 'reselect';

import { entitiesSelector } from './';

export const makeUsersSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.users);

const makeUserSelectorById = () => {
  const usersSelector = makeUsersSelector();
  return createSelector(
    [usersSelector, (_, props) => props.id],
    (users, id) => users[id]
  );
};

export const makeUsernameSelector = () => {
  const userSelectorById = makeUserSelectorById();
  return createSelector([userSelectorById], (user) =>
    user ? user.username : ''
  );
};

export const makeUserPictureSelector = () => {
  const userSelectorById = makeUserSelectorById();
  return createSelector([userSelectorById], (user) =>
    user ? user.picture : ''
  );
};
