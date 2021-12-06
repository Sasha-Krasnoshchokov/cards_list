import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Markup } from 'interweave';

import { useCardSyle } from '../../styles/styles';
import { INews } from '../../types/types';
import { Icons } from '../Icons/Icons';
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

      <CardContent style={{ padding: '25px' }} className={classes.cardContent} component="section">

        <div className={classes.cardPublished}>
          <Icons
            url={calendarIcon}
            heightValue={16}
          />
          <span className={classes.cardPublishedAt}>
            {useConvertDate(new Date(props.news.publishedAt))}
          </span>
        </div>

        <p className={classes.cardTitle}>
          <Markup content={props.news.title} />
        </p>

        <p className={classes.cardDescription}>
          <Markup content={useTrimDescription(props.news.summary)} />
        </p>

        <section className={classes.cardRaedMore}>
          <p className={classes.cardRaedMoreText}>Read more</p>
          <Icons
            url={arrowRight}
            widthValue={12}
            heightValue={10}
          />
        </section>

      </CardContent>
    </Card>
  );
}
