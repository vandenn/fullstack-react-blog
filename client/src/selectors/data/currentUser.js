import { createSelector } from 'reselect';

import { dataSelector } from './';
import { makeUsersSelector } from '../entities/users';

export const makeCurrentUserIdSelector = () =>
  createSelector([dataSelector], (data) => data.currentUser);

export const makeCurrentUserSelector = () => {
  const currentUserIdSelector = makeCurrentUserIdSelector();
  const usersSelector = makeUsersSelector();
  return createSelector(
    [currentUserIdSelector, usersSelector],
    (currentUserId, users) => users[currentUserId]
  );
};
