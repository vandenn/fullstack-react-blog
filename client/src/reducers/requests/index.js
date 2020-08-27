import { combineReducers } from 'redux';
import commentsRequestsReducer from './comments';
import postsRequestsReducer from './posts';
import usersRequestsReducer from './users';

export default combineReducers({
  comments: commentsRequestsReducer,
  posts: postsRequestsReducer,
  users: usersRequestsReducer,
});
