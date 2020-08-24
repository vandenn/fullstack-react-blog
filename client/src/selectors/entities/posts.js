import { createSelector } from 'reselect';

import { entitiesSelector } from './';

export const makePostsSelector = () =>
  createSelector([entitiesSelector], (entities) => entities.posts);
