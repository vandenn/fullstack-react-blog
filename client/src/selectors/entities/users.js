import { createSelector } from 'reselect';

import { entitiesSelector } from './';

export const makeUsersSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.users);
