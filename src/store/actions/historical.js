import types from './types';


export const addAlbumToHistoric = (album) => ({
  type: types.ADD_ALBUM_TO_HISTORIC,
  album
});

export const addSongToHistoric = (song) => ({
  type: types.ADD_SONG_TO_HISTORIC,
  song
});
