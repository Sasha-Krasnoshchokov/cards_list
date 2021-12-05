export interface INews {
  'id': number,
  'featured': boolean,
  'title': string,
  'url': string,
  'imageUrl': string,
  'newsSite': string,
  'summary': string,
  'publishedAt': string,
  'launches': [
    {
      'id': string,
      'provider': string,
    }
  ],
  'events': [
    {
      'id': string,
      'provider': string,
    }
  ]
};

export type State = {
  news: INews[],
  idToDisplay: number,
  searchData: string,
};

export type Reducer = (state: State, actions: Action) => State;

export type DispatchType = (args: Action) => Action;

export type ActionGetFromServer = {
  type: string,
  value: INews[],
};

export type Action = {
  type: string,
  value: string,
  array?: INews[],
};

export type Function = () => {};
