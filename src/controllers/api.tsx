import { INews } from '../types/types';

const url: string = 'https://api.spaceflightnewsapi.net/v3/articles';

export const getDataFromServer = async (): Promise<INews[]> => {
  const response = await fetch(url);
  const result = await response.json();

  return result;
};
