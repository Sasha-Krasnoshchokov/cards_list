import { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import { Icons } from '../Icons/Icons';
import { Inputs } from '../Inputs/Inputs';
import { inputStyle, useStyles } from '../../styles/styles';

import searchIcon from '../../image/icon/search.svg';

export default function Searching() {
  const classes = useStyles();
  const [userInputs, setUserInputs] = useState('');

  return (
    <section className={classes.searchingSection}>

      <h2 className={classes.searchTitle}>Filter by keywords</h2>

      <Paper component="form" className={classes.paper}>

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
