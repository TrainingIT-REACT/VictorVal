import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import MusicIcon from '@material-ui/icons/MusicNote';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SongList extends React.Component {
  state = {
    selectedIndex: null,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  formatDuration = (secs) => {
    var minutes = Math.floor(secs / 60);
    var seconds = secs - minutes * 60;
    return `${minutes}:${seconds}`;
  }

  render() {
    const { classes, songs } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          {songs.map((song, index) => (
            <NavLink key={song.name} exact to="/player">
              <ListItem
                button
                selected={this.state.selectedIndex === index}
                onClick={event => this.handleListItemClick(event, index)}
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
