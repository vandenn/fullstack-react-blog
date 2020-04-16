import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from '../../actions/status/posts';

const isCreatingPost = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATE_POST_REQUEST:
        return true;
      case types.CREATE_POST_DONE:
      case types.CREATE_POST_ERROR:
        return false;
      default:
        break;
    }
  });

const createPostError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATE_POST_REQUEST:
      case types.CREATE_POST_DONE:
        return null;
      case types.CREATE_POST_ERROR:
        return action.error;
      default:
        break;
    }
  });

export default combineReducers({
  isCreatingPost,
  createPostError,
});
