import { combineReducers } from 'redux';

import { types } from 'actions/requests/users';
import * as utils from 'reducers/requests/utils';

const isAddingUser = utils.createIsRequestRunningReducer(types.ADD_USER);
const addUserError = utils.createRequestErrorReducer(types.ADD_USER);
const isFetchingUser = utils.createIsRequestRunningReducer(types.FETCH_USER);
const fetchUserError = utils.createRequestErrorReducer(types.FETCH_USER);

export default combineReducers({
  isAddingUser,
  addUserError,
  isFetchingUser,
  fetchUserError,
});
