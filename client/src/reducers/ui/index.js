import { combineReducers } from 'redux';
import homePageReducer from './homePage';

export default combineReducers({
  homePage: homePageReducer,
});
