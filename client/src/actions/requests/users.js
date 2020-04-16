export const types = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_DONE: 'FETCH_USER_DONE',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR',
};

export const actions = {
  fetchUserById: (uid) => ({
    type: types.FETCH_USER_REQUEST,
    payload: { uid },
  }),
  fetchUserByUsername: (username) => ({
    type: types.FETCH_USER_REQUEST,
    payload: { username },
  }),
};
