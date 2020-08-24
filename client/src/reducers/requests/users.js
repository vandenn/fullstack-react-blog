import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from 'actions/requests/users';

const isAddingUser = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_USER.request:
        return true;
      case types.ADD_USER.done:
      case types.ADD_USER.error:
        return false;
      default:
        break;
    }
  });

const addUserError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_USER.request:
      case types.ADD_USER.done:
        return null;
      case types.ADD_USER.error:
        return action.error;
      default:
        break;
    }
  });

const isFetchingUser = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_USER.request:
        return true;
      case types.FETCH_USER.done:
      case types.FETCH_USER.error:
        return false;
      default:
        break;
    }
  });

const fetchUserError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_USER.request:
      case types.FETCH_USER.done:
        return null;
      case types.FETCH_USER.error:
        return action.payload;
      default:
        break;
    }
  });

export default combineReducers({
  isAddingUser,
  addUserError,
  isFetchingUser,
  fetchUserError,
});
