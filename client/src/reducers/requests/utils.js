import produce from 'immer';

export const createIsRequestRunningReducer = (actionTypeObject) => (
  state = false,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypeObject.request:
        return true;
      case actionTypeObject.done:
      case actionTypeObject.error:
        return false;
      default:
        break;
    }
  });

export const createRequestErrorReducer = (actionTypeObject) => (
  state = null,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypeObject.request:
      case actionTypeObject.done:
        return null;
      case actionTypeObject.error:
        return action.error;
      default:
        break;
    }
  });
