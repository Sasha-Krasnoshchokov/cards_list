import { useDispatch, useSelector } from 'react-redux';

import { State } from '../types/types';
import { actions } from '../store/actions';
import { getDataFromServer } from '../controllers/api';
import { useEffect } from 'react';

export const useGetDataFromServer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromServer().then(promise => {
      dispatch(actions.getFromServer(promise));
    });
  }, [dispatch]);

};

export const usePrepareState = () => {
  const state = useSelector((state: State) => state);
  console.log('state to display: ', state.news);

  return useSelector((state: State) => state);
};
