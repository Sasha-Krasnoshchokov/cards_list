import { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import { Icons } from '../Icons/Icons';
import { Inputs } from '../Inputs/Inputs';
import { inputStyle, useSearchStyles } from '../../styles/styles';
import { useGetSearchWordsFromUser } from '../../controllers/controller';
import { State } from '../../types/types';

import searchIcon from '../../images/icons/search.svg';
import { useSelector } from 'react-redux';

export const Searching = () => {
  const classes = useSearchStyles();
  const state = useSelector((state: State) => state);

  const [userInputs, setUserInputs] = useState('');
  useGetSearchWordsFromUser(userInputs);

  return (
    <section className={classes.searchSection}>

      <h2 className={classes.searchTitle}>Filter by keywords</h2>

      <Paper component="form" className={classes.searchPaper}>

        <div style={{ marginRight: '20px' }}>
          <Icons
            url={searchIcon}
            heightValue={20}
          />
        </div>

        <div style={{width: '100%'}}>
          <Inputs
            id='search'
            value={state.searchData}
            setUserInputs={setUserInputs}
            styles={inputStyle}
          />
        </div>

      </Paper>

    </section>
  );
}
