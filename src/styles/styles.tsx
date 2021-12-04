import CSS from 'csstype';
import { makeStyles } from '@material-ui/core/styles';

export const inputStyle: CSS.Properties = {
  padding:'0',
  width: '100%',
  height: '24',
  fontSize: '16px',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  lineHeight: '24px',
  color:'#575757',
  boxSizing: 'border-box',
  border: 'none',
  outline: 'none',
};

export const useStyles = makeStyles(() => ({
  searchingSection: {
    margin: '0 0 45px',
    width: '600px',
    '@media (max-width: 1000px)': {
      width: '500px',
    },
    '@media (max-width: 800px)': {
      width: '400px',
    },
    '@media (max-width: 600px)': {
      width: '330px',
    },
    '@media (max-width: 400px)': {
      width: '100%',
    },
  },
  paper: {
    margin: '0 0 40px',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    boxSizing: 'border-box',
    border: '1px solid #eaeaea',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  },
  searchTitle: {
    margin: '0 0 10px',
    padding:'0',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
    color:'#363636',
  },
  resultOfSearch: {
    margin: '0',
    padding: '0 0 5px',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
    color:'#363636',
    borderBottom: '1px solid #eaeaea',
  },
}));
