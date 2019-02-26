import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MusicIcon from '@material-ui/icons/MusicNote';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  noDecoration: {
    textDecoration: 'none',
  },
});

class SongList extends React.Component {

  formatDuration(secs) {
    var minutes = Math.floor(secs / 60);
    var seconds = secs - minutes * 60;
    return `${minutes}:${seconds}`;
  }

  render() {
    const {
      classes,
      secondaryAction,
      songs,
      handleSelectSong,
      selectedSong,
      handleRemoveSong,
    } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {songs.map(song => (
            <NavLink key={song.name} exact to="/player" className={classes.noDecoration}>
              <ListItem
                button
                aria-label="Add song to playlist and go to player"
                selected={selectedSong && selectedSong.id === song.id}
                // onClick={event => this.handleListItemClick(event, index)}
                onClick={() => handleSelectSong(song)}
              >
                <ListItemIcon>
                  <Avatar>
                    <MusicIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={song.name}
                  secondary={this.formatDuration(song.seconds)}
                />
                <ListItemSecondaryAction>
                  {secondaryAction === 'add' && (
                    <IconButton
                      aria-label="Add song to player"
                      onClick={() => handleSelectSong(song)}
                    >
                      <QueueMusicIcon />
                    </IconButton>
                  )}
                  {secondaryAction === 'remove' && (
                    <IconButton
                      aria-label="Add song to player"
                      onClick={() => handleRemoveSong(song)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    );
  }
}

SongList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SongList);
