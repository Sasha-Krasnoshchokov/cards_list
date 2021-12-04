export const createStore = (
  reducer,
  initState,
) => {
  let state = initState;
  let callbacks = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach(f => f());
    },
    subscribe(f) {
      callbacks.push(f);
    },
  };
};