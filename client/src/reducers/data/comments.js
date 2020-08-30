import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from 'actions/data/comments';

const totalPostCommentCountMap = (state = {}, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_TOTAL_POST_COMMENT_COUNT.done:
        const { postId, commentCount } = action.payload;
        draft[postId] = commentCount;
        break;
      default:
        break;
    }
  });

export default combineReducers({
  totalPostCommentCountMap,
});
