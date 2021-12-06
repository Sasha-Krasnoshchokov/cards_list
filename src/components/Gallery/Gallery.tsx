import Grid from '@material-ui/core/Grid';

import { useGallerySyle } from '../../styles/styles';
import { CardItem } from './CardItem';
import { INews } from '../../types/types';

type Props = {
  dataToDisplay: INews[],
};

export const Gallery = ( props: Props) => {
  const classes = useGallerySyle();

  return (
    <Grid container className={classes.gallerySection}>
      {props.dataToDisplay.map((item: INews) => (
        <div className={classes.cardWrap} key={item.id}>
          <CardItem news={item} />
        </div>
      ))}
    </Grid>
  );
}

