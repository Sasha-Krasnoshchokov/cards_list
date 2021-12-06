import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { State, INews } from '../types/types';
import { actions } from '../store/actions';
import { getDataFromServer } from '../controllers/api';
import { consertMonthToString } from '../utils/ConvertMonth';
import { markSearchWordsInText } from '../utils/MarkSearchWords';

export const usePreparedTitlesToDisplay = (state: State): INews[] => {

  if (state.searchData.length === 0) {
    return state.news;
  }

  return markSearchWordsInText(state.news, state.searchData);
};

export const useGetSearchWordsFromUser = (value: string): void => {  
  const dispatch = useDispatch();

  useEffect(() => {
    if (value !== ' ') {
      dispatch(actions.dataSelection(value));
    }
  }, [value, dispatch]);
};

export const useConvertDate = (date: Date): string => (
  consertMonthToString(date.getMonth()) + ' ' + date.getDate() + 'th, ' + date.getFullYear()
);

export const useTrimDescription = (str: string): string => (str.slice(0, 97) + '...');

export const useGetDataFromServer = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromServer().then(promise => {
      dispatch(actions.getFromServer(promise));
    });
  }, [dispatch]);
};
