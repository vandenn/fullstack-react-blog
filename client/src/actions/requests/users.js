import { createActionTypeTriad } from 'actions/utils';

export const types = {
  ADD_USER: createActionTypeTriad('ADD_USER'),
  FETCH_USER: createActionTypeTriad('FETCH_USER'),
};

export const actions = {
  addUser: (userData) => ({
    type: types.ADD_USER.request,
    payload: userData,
  }),
  fetchUserById: (userId) => ({
    type: types.FETCH_USER.request,
    payload: { userId },
  }),
  fetchUserByUsername: (username) => ({
    type: types.FETCH_USER.request,
    payload: { username },
  }),
};
