import { Action, INews } from '../types/types';

export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const DATA_SELECTION = 'DATA_SELECTION';
export const ITEM_TO_DISPLAY = 'ITEM_TO_DISPLAY';

export const actions = {
  getFromServer: (array: INews[]) => ({ type: GET_DATA_FROM_SERVER, array }),
  dataSelection: (value: string): Action => ({ type: DATA_SELECTION, value }),
  itemToDisplay: (value: string): Action => ({ type: ITEM_TO_DISPLAY, value }),
};
