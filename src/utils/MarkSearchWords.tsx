import { INews } from '../types/types';

export const markSearchWordsInText = (news: INews[], searchString: string): INews[] => {
  let copyNews: INews[] = news.map((item: INews) => ({...item}));
  let result: INews[] = [];

  result = [...fillNewArray(copyNews, searchString, 'title')];
  result = [...result, ...fillNewArray(copyNews, searchString, 'summary')];

  return result;
};

const fillNewArray = (copyNews: INews[], searchString: string, byFill: string): INews[] => {
  const result : INews[] = [];
  copyNews.filter((obj: INews): INews[] => {
    let count = 0;

    searchString.toLowerCase().split(' ')
        .forEach((str: string) => {
          if (str !== '') {

            if (byFill === 'title') {
              if (markInString(obj.title, str)) {
                obj.title = markInString(obj.title, str);
                count++;
              }
            }

            if (byFill === 'summary') {
              if (markInString(obj.summary, str) && obj.title.indexOf('<mark>') < 0) {
                obj.summary = markInString(obj.summary, str);
                count++;
              }
            }

          }
        });

    if (count > 0) {
      result.push(obj);
    }
    return [];
  });

  return result;
};

const markInString = (text: string, str: string): string => {
  let result: string = '';
  const ind = text.toLowerCase().indexOf(str);

  if (ind >= 0) {
    let regex = text.slice(ind, (ind + str.length));
    let newSubstr = `<mark>${regex}</mark>`;

    result = text.replace(regex, newSubstr);
    regex = '</mark> <mark>';
    newSubstr = ' ';
    result = result.replace(regex, newSubstr);

    return result;
  }
  return '';
};