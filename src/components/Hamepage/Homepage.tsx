import Searching from '../Searching/Searching';
import { useStyles } from '../../styles/styles';

import './Homepage.scss';

import { usePrepareState } from '../../controllers/controller';

export const Homepage = () => {
  const classes = useStyles();
  const amount: number | null = usePrepareState().news.length;

  return (
    <div className="homepage">

      <Searching />
      <p className={classes.resultOfSearch}>Result: {amount}</p>

    </div>
  );
};
