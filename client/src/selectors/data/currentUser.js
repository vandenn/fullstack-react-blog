import { createSelector } from 'reselect';

import { dataSelector } from './';

export const makeCurrentUserSelector = () =>
  createSelector([dataSelector], data => data.currentUser);
