import produce from 'immer';
import { types } from '../../actions/requests/users';

export default (state = {}, action) =>
  produce(state, (draft) => {
    let id;
    switch (action.type) {
      case types.ADD_USER_DONE:
      case types.FETCH_USER_DONE:
        id = action.payload.uid;
        draft[id] = { ...draft[id], ...action.payload };
        break;
      default:
        break;
    }
  });
