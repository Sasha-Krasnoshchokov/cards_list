import { GET_DATA_FROM_SERVER } from './actions';

import { State, Action } from '../types/types';
import { state as initialState } from './initials';

export function reducer(state: State = initialState, actions: Action): State {
console.log('reducer: ', actions)

  switch (actions.type) {
    case GET_DATA_FROM_SERVER:
      console.log('get from server: ', actions.array)
      return {
        ...state,
        news: actions.array ? actions.array.map(item => ({...item})) : [],
      };

    default:
      return state;
  };
};