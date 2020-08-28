import { createActionTypeTriad } from 'actions/utils';

export const types = {
  SET_CURRENT_USER: createActionTypeTriad('SET_CURRENT_USER'),
};

export const actions = {
  setCurrentUser: (userData) => ({
    type: types.SET_CURRENT_USER.request,
    payload: userData,
  }),
};
