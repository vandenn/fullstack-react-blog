import { combineReducers } from 'redux';
import dataReducer from './data';
import statusReducer from './status';

export default combineReducers({
  data: dataReducer,
  status: statusReducer,
});
