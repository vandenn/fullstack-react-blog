import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from '../../actions/requests/users';

const isAddingUser = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_USER_REQUEST:
        return true;
      case types.ADD_USER_DONE:
      case types.ADD_USER_ERROR:
        return false;
      default:
        break;
    }
  });

const addUserError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_USER_REQUEST:
      case types.ADD_USER_DONE:
        return null;
      case types.ADD_USER_ERROR:
        return action.error;
      default:
        break;
    }
  });

const isFetchingUser = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_USER_REQUEST:
        return true;
      case types.FETCH_USER_DONE:
      case types.FETCH_USER_ERROR:
        return false;
      default:
        break;
    }
  });

const fetchUserError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_USER_REQUEST:
      case types.FETCH_USER_DONE:
        return null;
      case types.FETCH_USER_ERROR:
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
