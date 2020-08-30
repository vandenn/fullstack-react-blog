import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from 'actions/ui/viewPostPage';

const DEFAULT_NUMBER_OF_COMMENTS_PER_PAGE = 10;

const commentListPageNumber = (state = 0, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_COMMENT_LIST_PAGE_NUMBER.done:
        return action.payload.pageNumber;
      default:
        break;
    }
  });

const numberOfPostsPerPage = (
  state = DEFAULT_NUMBER_OF_COMMENTS_PER_PAGE,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_NUMBER_OF_COMMENTS_PER_PAGE.done:
        return action.payload.count;
      default:
        break;
    }
  });

export default combineReducers({
  commentListPageNumber,
  numberOfPostsPerPage,
});
