import * as React from 'react';
import { useTranslation } from 'react-i18next'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
  imgSrc: string,
  imgAlt: string,
  title: string,
  description: string,
}

const MediaCard: React.FunctionComponent<MediaCardProps> = (props): any => {
  const { t } = useTranslation('home')

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.imgSrc}
        alt={props.imgAlt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {t(props.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(props.description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard