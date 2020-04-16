import { combineReducers } from 'redux';
import dataReducer from './data';
import entitiesReducer from './entities';
import requestsReducer from './requests';

export default combineReducers({
  data: dataReducer,
  entities: entitiesReducer,
  requests: requestsReducer,
});
