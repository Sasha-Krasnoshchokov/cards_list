import Searching from '../Searching/Searching';
import { useStyles } from '../../styles/styles';

import './Homepage.scss';

const amount: number | null = 6;

export const Homepage = () => {
  const classes = useStyles();

  return (
    <div className="homepage">
      <Searching />

      <p className={classes.resultOfSearch}>Result: {amount}</p>

    </div>
  );
};
