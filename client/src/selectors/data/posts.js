import { createSelector } from 'reselect';

import { dataSelector } from '.';

export const makeTotalPostCountSelector = () =>
  createSelector([dataSelector], (data) => data.posts.totalPostCount);
