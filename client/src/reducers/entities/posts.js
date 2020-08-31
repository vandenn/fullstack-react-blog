import produce from 'immer';
import { types } from 'actions/requests/posts';

export default (state = {}, action) =>
  produce(state, (draft) => {
    let id;
    switch (action.type) {
      case types.CREATE_POST.done:
      case types.FETCH_POST.done:
      case types.LIKE_POST.done:
        id = action.payload.id;
        draft[id] = { ...draft[id], ...action.payload };
        break;
      case types.FETCH_RANGE_OF_POSTS.done:
        action.payload.forEach((post) => {
          draft[post.id] = { ...draft[post.id], ...post };
        });
        break;
      default:
        break;
    }
  });
