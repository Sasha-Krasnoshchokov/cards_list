import CSS from 'csstype';
import { makeStyles } from '@material-ui/core/styles';

export const useCardSyle = makeStyles (() => ({
  cardSection: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eaeaea',
    borderRadius: '5px',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    color:'#363636',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
    },
  },
  cardImage: {
    height: '217px',
  },
  cardContent: {
    position: 'relative',
    height: '313px',
    boxSizing: 'border-box',
  },
  cardPublished: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 0 25px',
    padding:'0',
    height: '20px',
  },
  cardPublishedAt: {
    margin: '0 0 0 8px',
    padding: '0',
    fontSize: '14px',
    lineHeight: '21px',
    opacity: '0.6',
  },
  cardTitle: {
    margin: '0 0 20px',
    height: '58px',
    overflow: 'hidden',
    fontSize: '24px',
    lineHeight: '29px',
  },
  cardDescription: {
    margin: '0 0 20px',
    fontSize: '16px',
    lineHeight: '24px',
  },
  cardRaedMore: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: '25px',
    left: '25px',
  },
  cardRaedMoreText: {
    margin: '0 8px 0 0',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
  },
}));

export const useGallerySyle = makeStyles (() => ({
  gallerySection: {
    gap: '45px',
    justifyContent: 'center',
  },
  cardWrap: {
    flexGrow: 1,
    height: 530,
    width: 400,
    '@media (max-width: 1015px)': {
      width: '300px',
    },
    '@media (max-width: 815px)': {
      width: '250px',
    },
    '@media (max-width: 650px)': {
      width: '100%',
    },
  },
}));

export const useSearchStyles = makeStyles(() => ({
  searchSection: {
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
  searchPaper: {
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
    margin: '0 0 45px',
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
