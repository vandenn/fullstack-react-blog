import produce from 'immer';
import { types } from 'actions/requests/users';

export default (state = {}, action) =>
  produce(state, (draft) => {
    let id;
    switch (action.type) {
      case types.ADD_USER.done:
      case types.FETCH_USER.done:
        id = action.payload.uid;
        draft[id] = { ...draft[id], ...action.payload };
        break;
      default:
        break;
    }
  });
