import { Searching } from '../Searching/Searching';
import { useSearchStyles } from '../../styles/styles';

import './Homepage.scss';

import { Gallery } from '../Gallery/Gallery';
import { usePrepareState, usePreparedArrayToDisplay } from '../../controllers/controller';

export const Homepage = () => {
  const classes = useSearchStyles();
  const amount: number | null = usePreparedArrayToDisplay(usePrepareState()).length;

  return (
    <div className="homepage">

      <Searching />
      <p className={classes.resultOfSearch}>Result: {amount}</p>

      <Gallery />

    </div>
  );
};
