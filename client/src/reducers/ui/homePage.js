import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from 'actions/ui/homePage';

const DEFAULT_NUMBER_OF_POSTS_PER_PAGE = 10;

const postListPageNumber = (state = 0, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_POST_LIST_PAGE_NUMBER.done:
        return action.payload.pageNumber;
      default:
        break;
    }
  });

const numberOfPostsPerPage = (
  state = DEFAULT_NUMBER_OF_POSTS_PER_PAGE,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_NUMBER_OF_POSTS_PER_PAGE.done:
        return action.payload.count;
      default:
        break;
    }
  });

export default combineReducers({
  postListPageNumber,
  numberOfPostsPerPage,
});
