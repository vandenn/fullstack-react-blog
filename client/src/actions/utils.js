export const createActionTypeTriad = (actionType) => {
  return {
    request: `${actionType}_REQUEST`,
    done: `${actionType}_DONE`,
    failed: `${actionType}_FAILED`,
  };
};
