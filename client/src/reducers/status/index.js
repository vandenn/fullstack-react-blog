import { combineReducers } from 'redux';
import postsStatusReducer from './posts';

export default combineReducers({
  posts: postsStatusReducer,
});
