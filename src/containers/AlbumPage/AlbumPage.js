import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import compose from 'recompose/compose';

// Actions
import { addSelectedAlbum, getSongs } from '../../store/actions/album';

import { withStyles } from '@material-ui/core/styles';
import AlbumCard from '../../components/AlbumCard';


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


class AlbumPage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //     album: [],
  //     songs: [],
  //   }
  // }

  async componentDidMount() {
    const { match, albums, addSelectedAlbum, getSongs } = this.props;

    console.log("album")
    console.log(match)
    console.log(albums)
    const paramId = parseInt(match.params.id);
    const album = albums.find(item => item.id === paramId);
    console.log(album)

    // const album = getAlbumById(match.params.id);
    addSelectedAlbum(album);
    getSongs(album.id);

    // // TODO - pass from already fetch and stored with redux
    // // get album info
    // try {
    //   const res = await fetch(`/albums/${match.params.id}`);
    //   const json = await res.json();
    //   this.setState((prevState) => ({
    //     ...prevState,
    //     loading: false,
    //     album: json
    //   }));
    // } catch(err) {
    //   console.error("Error accediendo al servidor", err);
    // }

    // // TODO - store with redux
    // // get album's songs
    // try {
    //   const res = await fetch(`/songs?album_id=${match.params.id}`);
    //   const json = await res.json();
    //   this.setState((prevState) => ({
    //     ...prevState,
    //     loading: false,
    //     songs: json
    //   }));
    // } catch(err) {
    //   console.error("Error accediendo al servidor", err);
    // }
  }

  render() {
    // const { album, songs } = this.state;
    const { classes, selectedAlbum, songs } = this.props;

    return (
      <main className={classes.main}>
        <AlbumCard album={selectedAlbum} songs={songs} />
      </main>
    );
  }
}

// export default withRouter(withStyles(styles)(AlbumPage));


const mapStateToProps = (state/*, otherProps */) => ({
  albums: state.albums.albums,
  selectedAlbum: state.album.selectedAlbum,
  songs: state.album.songs,
})

const mapDispatchToProps = (dispatch) => ({
  addSelectedAlbum: album => dispatch(addSelectedAlbum(album)),
  getSongs: albumId => dispatch(getSongs(albumId)),
})


export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(AlbumPage);
