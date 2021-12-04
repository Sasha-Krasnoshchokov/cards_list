import { GET_DATA_FROM_SERVER } from './actions';

export const reducer = (state, actions) => {

  switch (actions.type) {
    case GET_DATA_FROM_SERVER:
      return {
        ...state,

      };

    default:
      return state;
  };
};
