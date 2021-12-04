import { State, Action, Reducer, Function } from '../types/types';

export const createStore = (
  reducer: Reducer,
  initState: State,
) => {
  let state = initState;
  let callbacks: Function[] = [];

  return {
    getState() {
      return state;
    },
    dispatch(action: Action) {
      state = reducer(state, action);
      callbacks.forEach(f => f());
    },
    subscribe(f: Function) {
      callbacks.push(f);
    },
  };
};