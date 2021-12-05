import { useDispatch, useSelector } from 'react-redux';

import { State } from '../types/types';
import { actions } from '../store/actions';
import { getDataFromServer } from '../controllers/api';
import { useEffect } from 'react';

export const useGetInfoFromUser = (str: string): void => {
  const dispatch = useDispatch();
  dispatch(actions.dataSelection(str));
};

export const useDateForCard = (date: Date): string => {
  let month: string = '';

  switch (date.getMonth()) {
    case 1:
      month = 'January';
      break;
    case 2:
      month = 'February';
      break;
    case 3:
      month = 'March';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'May';
      break;
    case 6:
      month = 'June';
      break;
    case 7:
      month = 'July';
      break;
    case 8:
      month = 'August';
      break;
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'October';
      break;
    case 11:
      month = 'November';
      break;
    case 12:
      month = 'December';
      break;
    default:
      month = 'Unknown';
      break;
  };

  return (month + ' ' + date.getDate() + 'th, ' + date.getFullYear());
};

export const useDescriptionForCard = (str: string): string => (str.slice(0, 97) + '...');

export const usePrepareState = (): State => (useSelector((state: State) => state));

export const useGetDataFromServer = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromServer().then(promise => {
      dispatch(actions.getFromServer(promise));
    });
  }, [dispatch]);
};
