import { Action, INews } from '../types/types';

export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const GET_INFO_FROM_USER = 'GET_INFO_FROM_USER';
export const ITEM_TO_DISPLAY = 'ITEM_TO_DISPLAY';

export const actions = {
  getFromServer: (array: INews[]) => ({ type: GET_DATA_FROM_SERVER, array }),
  getInfoFromUser: (value: string | number): Action => ({ type: GET_INFO_FROM_USER, value }),
  itemToDisplay: (value: string | number): Action => ({ type: ITEM_TO_DISPLAY, value }),
};
