import { combineReducers } from 'redux';
import postsRequestsReducer from './posts';

export default combineReducers({
  posts: postsRequestsReducer,
});
