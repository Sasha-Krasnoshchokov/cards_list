import { useSelector } from 'react-redux';

import { Searching } from '../Searching/Searching';
import { useSearchStyles } from '../../styles/styles';
import { State, INews } from '../../types/types';

import './Homepage.scss';

import { Gallery } from '../Gallery/Gallery';
import { usePreparedTitlesToDisplay } from '../../controllers/controller';

export const Homepage = () => {
  const classes = useSearchStyles();
  const dataToDisplay: INews[] = usePreparedTitlesToDisplay(useSelector((state: State) => state));

  return (
    <div className="homepage">

      <Searching />
      <p className={classes.resultOfSearch}>Result: {dataToDisplay.length}</p>

      <Gallery dataToDisplay={dataToDisplay} />

    </div>
  );
};
