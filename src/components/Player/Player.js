import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import SongList from '../SongList';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  player: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

const PlayerPage = (props) => {
  const {
    classes,
    theme,
    playlist,
    handleSelectSong,
    selectedSong,
    status,
    albums,
    handleRemoveSong,
  } = props;

  let selectedSongAlbum;
  if (selectedSong) {
    selectedSongAlbum = albums.find(album => album.id === selectedSong.album_id);
  }

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <div className={classes.player}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {selectedSong ? selectedSong.name : 'Select a song to play'}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {selectedSong ? `${selectedSongAlbum.artist} | ${selectedSongAlbum.name}` : ''}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              {selectedSong && (
                <audio controls><source src={selectedSong.audio} /></audio>
              )}
              <IconButton aria-label="Previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={selectedSong && selectedSongAlbum.cover}
            title={selectedSong && selectedSongAlbum.name}
          />
        {/* </Card>
        <Card> */}
        </div>
        <CardContent>
          {playlist.length > 0 && (
            <SongList
              secondaryAction="remove"
              songs={playlist}
              handleSelectSong={handleSelectSong}
              selectedSong={selectedSong}
              handleRemoveSong={handleRemoveSong}
            />
          )}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

PlayerPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PlayerPage);
