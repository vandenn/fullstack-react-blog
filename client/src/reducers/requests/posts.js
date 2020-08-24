import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from 'actions/requests/posts';

const isCreatingPost = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATE_POST.request:
        return true;
      case types.CREATE_POST.done:
      case types.CREATE_POST.error:
        return false;
      default:
        break;
    }
  });

const createPostError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATE_POST.request:
      case types.CREATE_POST.done:
        return null;
      case types.CREATE_POST.error:
        return action.error;
      default:
        break;
    }
  });

const isFetchingPost = (state = false, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_POST.request:
        return true;
      case types.FETCH_POST.done:
      case types.FETCH_POST.error:
        return false;
      default:
        break;
    }
  });

const fetchPostError = (state = null, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_POST.request:
      case types.FETCH_POST.done:
        return null;
      case types.FETCH_POST.error:
        return action.error;
      default:
        break;
    }
  });

export default combineReducers({
  isCreatingPost,
  createPostError,
  isFetchingPost,
  fetchPostError,
});
