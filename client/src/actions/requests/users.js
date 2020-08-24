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
  fetchUserById: (uid) => ({
    type: types.FETCH_USER.request,
    payload: { uid },
  }),
  fetchUserByUsername: (username) => ({
    type: types.FETCH_USER.request,
    payload: { username },
  }),
};
