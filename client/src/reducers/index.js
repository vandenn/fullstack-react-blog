import { combineReducers } from 'redux';
import dataReducer from './data';
import requestsReducer from './requests';

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer,
});
