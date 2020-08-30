import produce from 'immer';
import { types } from 'actions/requests/comments';

export default (state = {}, action) =>
  produce(state, (draft) => {
    let id;
    switch (action.type) {
      case types.ADD_COMMENT_TO_POST.done:
        id = action.payload.cid;
        draft[id] = { ...draft[id], ...action.payload };
        break;
      case types.FETCH_RANGE_OF_POST_COMMENTS.done:
        action.payload.forEach((comment) => {
          draft[comment.cid] = { ...draft[comment.cid], ...comment };
        });
        break;
      default:
        break;
    }
  });
