import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router';

import { connect } from 'react-redux';
import compose from 'recompose/compose';

// Actions
import { addSelectedAlbum, getSongs } from '../../store/actions/album';
import { addSongToPlayer } from '../../store/actions/player';

import { withStyles } from '@material-ui/core/styles';
import AlbumCard from '../../components/AlbumCard';


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

class AlbumPage extends Component {

  componentDidMount() {
    const { match, albums, addSelectedAlbum, getSongs } = this.props;

    if (albums.length === 0 ) return;

    const paramId = parseInt(match.params.id);
    const album = albums.find(item => item.id === paramId);
    addSelectedAlbum(album);
    getSongs(album.id);
  }

  handleSelectSong = (song) => {
    this.props.addSongToPlayer(song);
  }

  render() {
    const { classes, albums, selectedAlbum, songs } = this.props;

    if (albums.length === 0) {
      return <Redirect to="/albums" />;
    }

    return (
      <main className={classes.main}>
        <AlbumCard
          album={selectedAlbum}
          songs={songs}
          handleSelectSong={this.handleSelectSong}
        />
      </main>
    );
  }
}

const mapStateToProps = (state/*, otherProps */) => ({
  albums: state.albums.albums,
  selectedAlbum: state.album.selectedAlbum,
  songs: state.album.songs,
})

const mapDispatchToProps = (dispatch) => ({
  addSelectedAlbum: album => dispatch(addSelectedAlbum(album)),
  getSongs: albumId => dispatch(getSongs(albumId)),
  addSongToPlayer: song => dispatch(addSongToPlayer(song)),
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(AlbumPage);
