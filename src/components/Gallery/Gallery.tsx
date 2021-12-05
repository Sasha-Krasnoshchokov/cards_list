import Grid from '@material-ui/core/Grid';

import { useGallerySyle } from '../../styles/styles';
import { CardItem } from './CardItem';
import { usePrepareState } from '../../controllers/controller';
import { INews } from '../../types/types';

export const Gallery = () => {
  const classes = useGallerySyle();
  const dataToDisplay: INews[] = usePrepareState().news;
  console.log('gallery: ', dataToDisplay);

  return (
    <Grid container className={classes.gallerySection}>
      {dataToDisplay.map((item: INews) => (
        <div className={classes.cardWrap} key={item.id}>
          <CardItem news={item} />
        </div>
      ))}
    </Grid>
  );
}

