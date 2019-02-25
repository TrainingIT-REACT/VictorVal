import React, { Component } from 'react';

import AlbumList from '../../components/AlbumList';

// Css
// import './App.css';

class AlbumsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    const { albums } = this.state;
    return (
      <AlbumList albums={albums} />
    );
  }
}

export default AlbumsPage;
