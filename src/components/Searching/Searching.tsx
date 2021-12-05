import { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import { Icons } from '../Icons/Icons';
import { Inputs } from '../Inputs/Inputs';
import { inputStyle, useSearchStyles } from '../../styles/styles';

import searchIcon from '../../images/icons/search.svg';

export const Searching = () => {
  const classes = useSearchStyles();
  const [userInputs, setUserInputs] = useState('');

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
            value={userInputs}
            setUserInputs={setUserInputs}
            styles={inputStyle}
          />
        </div>

      </Paper>

    </section>
  );
}
