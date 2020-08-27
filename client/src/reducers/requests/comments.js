import { combineReducers } from 'redux';

import { types } from 'actions/requests/comments';
import * as utils from 'reducers/requests/utils';

const isAddingCommentToPost = utils.createIsRequestRunningReducer(
  types.ADD_COMMENT_TO_POST
);
const addCommentToPostError = utils.createRequestErrorReducer(
  types.ADD_COMMENT_TO_POST
);
const isFetchingPostComments = utils.createIsRequestRunningReducer(
  types.FETCH_POST_COMMENTS
);
const fetchPostCommentsError = utils.createRequestErrorReducer(
  types.FETCH_POST_COMMENTS
);

export default combineReducers({
  isAddingCommentToPost,
  addCommentToPostError,
  isFetchingPostComments,
  fetchPostCommentsError,
});
