import { useDispatch, useSelector } from 'react-redux';

import { State, INews } from '../types/types';
import { actions } from '../store/actions';
import { getDataFromServer } from '../controllers/api';
import { useEffect } from 'react';

export const usePreparedArrayToDisplay = (state: State): INews[] => {
  const array = state.news.map((item: INews) => ({...item}));
  let count = 0;
  let regex = '';
  let newSubstr = '';
  let text = '';
  let ind = -1;

  if (state.searchData.length === 0) {
    return state.news;
  }

  return (
    array.filter((obj: INews) => {
      count = 0;
      ind = -1;
      text = obj.title;

      state.searchData.toLowerCase().split(' ')
        .forEach((str: string) => {
          if (str !== '') {
            ind = text.toLowerCase().indexOf(str);

            if (ind >= 0) {
              count++;

              regex = text.slice(ind, (ind + str.length));
              newSubstr = `<mark>${regex}</mark>`;
              obj.title = text.replace(regex, newSubstr);

              regex = '</mark> <mark>';
              newSubstr = ' ';
              obj.title = obj.title.replace(regex, newSubstr);
            }
          }
        })

      if (count > 0) {
        return obj;
      }

      return '';
    })
  );
};

export const useGetInfoFromUser = (value: string): void => {  
  const dispatch = useDispatch();

  useEffect(() => {
    if (value !== ' ') {
      dispatch(actions.dataSelection(value));
    }
  }, [value, dispatch]);
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
