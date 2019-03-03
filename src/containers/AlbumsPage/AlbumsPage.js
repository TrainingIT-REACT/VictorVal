import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getAlbums } from '../../store/actions/albums';

import AlbumList from '../../components/AlbumList';

// Css
// import './App.css';

class AlbumsPage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //     albums: []
  //   }
  // }

  // async componentDidMount() {
  //   try {
  //     const res = await fetch('/albums');
  //     const json = await res.json();
  //     this.setState((prevState) => ({
  //       ...prevState,
  //       loading: false,
  //       albums: json
  //     }));
  //   } catch(err) {
  //     console.error("Error accediendo al servidor", err);
  //   }
  // }

  componentDidMount() {
    this.props.getAlbums();
  }

  // handleAlbumSelection = (album) => {
  //   console.log(">>>> selected Album")
  //   console.log(album)
  // }

  renderAlbums() {
    const { isLoading, error, albums } = this.props;

    if (isLoading) {
      return <p>Cargando...</p>
    } else if (error) {
      return <p>Hubo un error al obtener los datos :(</p>
    } else {
      return <AlbumList albums={albums} />
    }
  }

  render() {
    return <>
      { this.renderAlbums() }
    </>
  }
}

const mapStateToProps = (state/*, otherProps */) => ({
  albums: state.albums.albums,
  isLoading: state.albums.isLoading,
  error: state.albums.error,
})

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsPage);
