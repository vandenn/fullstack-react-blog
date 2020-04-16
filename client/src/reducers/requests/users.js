import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from '../../actions/requests/users';

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
  isFetchingUser,
  fetchUserError,
});
