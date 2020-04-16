export const types = {
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_DONE: 'ADD_USER_DONE',
  ADD_USER_ERROR: 'ADD_USER_ERROR',
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_DONE: 'FETCH_USER_DONE',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR',
};

export const actions = {
  addUser: (userData) => ({
    type: types.ADD_USER_REQUEST,
    payload: userData,
  }),
  fetchUserById: (uid) => ({
    type: types.FETCH_USER_REQUEST,
    payload: { uid },
  }),
  fetchUserByUsername: (username) => ({
    type: types.FETCH_USER_REQUEST,
    payload: { username },
  }),
};
