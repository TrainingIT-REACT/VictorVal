import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';

import { removeSongFromPlayer, clearSongsFromPlayer } from '../../store/actions/player';
import Player from '../../components/Player';

// Css
// import './App.css';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});


class PlayerPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedSong: null,
      status: '',
    }
  }

  handleSelectSong = (song) => {
    this.setState({
      selectedSong: song,
      status: 'play',
    })
  }

  handleRemoveSong = (song) => {
    console.log("**** remove")
    console.log(song)
    this.props.removeSongFromPlayer(song);
  }

  render() {
    const { selectedSong, status } = this.state;
    const { classes, playlist, albums } = this.props;

    return (
      <main className={classes.main}>
        <Player
          playlist={playlist}
          handleSelectSong={this.handleSelectSong}
          selectedSong={selectedSong}
          status={status}
          albums={albums}
          handleRemoveSong={this.handleRemoveSong}
        />
      </main>
    );
  }
}

// export default withRouter(withStyles(styles)(PlayerPage));

const mapStateToProps = (state/*, otherProps */) => ({
  playlist: state.player.playlist,
  albums: state.albums.albums,
})

const mapDispatchToProps = (dispatch) => ({
  removeSongFromPlayer: song => dispatch(removeSongFromPlayer(song)),
  clearSongsFromPlayer: () => dispatch(clearSongsFromPlayer()),
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(PlayerPage);

