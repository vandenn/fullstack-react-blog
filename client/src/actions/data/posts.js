import { createActionTypeTriad } from 'actions/utils';

export const types = {
  FETCH_TOTAL_POST_COUNT: createActionTypeTriad('FETCH_TOTAL_POST_COUNT'),
};

export const actions = {
  fetchTotalPostCount: () => ({
    type: types.FETCH_TOTAL_POST_COUNT.request,
  }),
};
