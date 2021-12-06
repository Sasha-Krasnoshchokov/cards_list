import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Markup } from 'interweave';

import { useCardSyle } from '../../styles/styles';
import { INews } from '../../types/types';
import { Icon } from '../Icon/Icon';
import calendarIcon from '../../images/icons/calendar.svg';
import arrowRight from '../../images/icons/arrowRight.svg';

import { useConvertDate, useTrimDescription } from '../../controllers/controller';

type Props = {
  news: INews,
}

export const CardItem = (props: Props) => {
  const classes = useCardSyle();

  return (
    <Card className={classes.cardSection}>

      <CardMedia
        className={classes.cardImage}
        image={props.news.imageUrl}
        title={props.news.title}
      />

      <CardContent style={{ padding: '24px' }} className={classes.cardContent} component="section">

        <Paper component='div' className={classes.cardPublished}>
          <Icon
            url={calendarIcon}
            heightValue={16}
          />

          <Paper component='span' className={classes.cardPublishedAt}>
            {useConvertDate(new Date(props.news.publishedAt))}
          </Paper>
        </Paper>

        <Typography variant="body1" className={classes.cardTitle}>
          <Markup content={props.news.title} />
        </Typography>

        <Typography variant="body1" className={classes.cardDescription}>
          <Markup content={useTrimDescription(props.news.summary)} />
        </Typography>

        <Paper component='div' className={classes.cardRaedMore}>
          <Typography variant="body1" className={classes.cardRaedMoreText}>
            Read more
          </Typography>
          
          <Icon
            url={arrowRight}
            widthValue={12}
            heightValue={10}
          />
        </Paper>

      </CardContent>
    </Card>
  );
}
