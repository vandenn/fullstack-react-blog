import { combineReducers } from 'redux';

import { types } from 'actions/requests/comments';
import * as utils from 'reducers/requests/utils';

const isAddingCommentToPost = utils.createIsRequestRunningReducer(
  types.ADD_COMMENT_TO_POST
);
const addCommentToPostError = utils.createRequestErrorReducer(
  types.ADD_COMMENT_TO_POST
);
const isFetchingRangeOfPostComments = utils.createIsRequestRunningReducer(
  types.FETCH_RANGE_OF_POST_COMMENTS
);
const fetchRangeOfPostCommentsError = utils.createRequestErrorReducer(
  types.FETCH_RANGE_OF_POST_COMMENTS
);

export default combineReducers({
  isAddingCommentToPost,
  addCommentToPostError,
  isFetchingRangeOfPostComments,
  fetchRangeOfPostCommentsError,
});
