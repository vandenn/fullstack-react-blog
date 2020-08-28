import produce from 'immer';
import { combineReducers } from 'redux';
import { types } from 'actions/data/users';

const currentUser = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_CURRENT_USER.done:
        return action.payload;
      default:
        break;
    }
  });

export default combineReducers({
  currentUser,
});
