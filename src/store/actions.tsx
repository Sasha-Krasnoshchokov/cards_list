import { Action, INews } from '../types/types';

export const SAVE_TO_STATE = 'SAVE_TO_STATE';
export const SAVE_SEARCH_WORDS_TO_STATE = 'SAVE_SEARCH_WORDS_TO_STATE';
export const ITEM_TO_DISPLAY = 'ITEM_TO_DISPLAY';

export const actions = {
  saveToStateFromServer: (value: INews[]): Action => ({ type: SAVE_TO_STATE, value }),
  saveSearchWordsToState: (value: string): Action => ({ type: SAVE_SEARCH_WORDS_TO_STATE, value}),
};
