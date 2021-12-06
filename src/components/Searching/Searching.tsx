import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Icon } from '../Icon/Icon';
import { inputStyle, useSearchStyles } from '../../styles/styles';
import { useSaveSearchWordsToState } from '../../controllers/controller';
import { State } from '../../types/types';

import searchIcon from '../../images/icons/search.svg';
import { useSelector } from 'react-redux';

export const Searching = () => {
  const [userInputs, setUserInputs] = useState(
    useSelector((state: State) => state).searchData
  );
  useSaveSearchWordsToState(userInputs);

  const classes = useSearchStyles();

  return (
    <Paper component="section" className={classes.searchSection}>

        <Typography variant="h2" className={classes.searchTitle}>
          Filter by keywords
        </Typography>

      <Paper component="form" className={classes.searchForm}>
        <Paper component="div" className={classes.searchIcon}>
          <Icon
            url={searchIcon}
            heightValue={20}
          />
        </Paper>

        <Paper component="div" className={classes.searchInput}>
          <input
            onChange={(event) => setUserInputs(event.target.value)}
            style={inputStyle}
            value={userInputs}
            id='search'
            placeholder="what do you want to know"
          />
        </Paper>

      </Paper>

    </Paper>
  );
}
