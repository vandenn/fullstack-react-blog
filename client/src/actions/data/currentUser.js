export const types = {
  SET_CURRENT_USER_REQUEST: 'SET_CURRENT_USER_REQUEST',
  SET_CURRENT_USER_DONE: 'SET_CURRENT_USER_DONE',
  SET_CURRENT_USER_ERROR: 'SET_CURRENT_USER_ERROR'
};

export const actions = {
  setCurrentUser: userData => ({
    type: types.SET_CURRENT_USER_REQUEST,
    payload: userData
  })
};
