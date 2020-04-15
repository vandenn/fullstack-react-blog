import produce from 'immer';
import { types } from '../../actions/data/currentUser';

export default (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_CURRENT_USER:
        return action.payload;
      default:
        break;
    }
  });
