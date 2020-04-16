import produce from 'immer';
import { types } from '../../actions/requests/posts';

export default (state = {}, action) =>
  produce(state, (draft) => {
    let id;
    switch (action.type) {
      case types.CREATE_POST_DONE:
      case types.FETCH_POST_DONE:
        id = action.payload.uid;
        draft[id] = { ...draft[id], ...action.payload };
        break;
      default:
        break;
    }
  });
