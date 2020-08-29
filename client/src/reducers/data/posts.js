import produce from 'immer';
import { combineReducers } from 'redux';

import { types } from 'actions/data/posts';

const totalPostCount = (state = 0, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCH_TOTAL_POST_COUNT.done:
        return action.payload;
      default:
        break;
    }
  });

export default combineReducers({
  totalPostCount,
});
