import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MusicIcon from '@material-ui/icons/MusicNote';
import IconButton from '@material-ui/core/IconButton';
import pink from '@material-ui/core/colors/pink';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import SongList from '../SongList';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[500],
  },
});


const AlbumCard = ({ classes, album, songs, handleSelectSong }) => {
  return (
    album && (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <MusicIcon />
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={album.name}
          subheader={album.artist}
        />
        <CardMedia
          className={classes.media}
          image={album.cover}
          title={album.name}
        />
        <CardContent>
          {songs.length > 0 && (
            <SongList
              secondaryAction="add"
              songs={songs}
              handleSelectSong={handleSelectSong}
            />
          )}
        </CardContent>
      </Card>
    )
  )
}

export default withStyles(styles)(AlbumCard);
