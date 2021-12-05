import Grid from '@material-ui/core/Grid';

import { useGallerySyle } from '../../styles/styles';
import { CardItem } from './CardItem';
import { usePrepareState, usePreparedArrayToDisplay } from '../../controllers/controller';
import { INews } from '../../types/types';

export const Gallery = () => {
  const classes = useGallerySyle();
  const dataToDisplay: INews[] = usePreparedArrayToDisplay(usePrepareState());

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

