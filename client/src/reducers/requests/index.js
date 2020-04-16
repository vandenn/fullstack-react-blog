import { combineReducers } from 'redux';
import postsRequestsReducer from './posts';
import usersRequestsReducer from './users';

export default combineReducers({
  posts: postsRequestsReducer,
  users: usersRequestsReducer,
});
