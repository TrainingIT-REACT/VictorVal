import types from './types';


export const addSelectedAlbum = (album) => ({
  type: types.ADD_SELECTED_ALBUM,
  album
});

export const clearAlbumSelection = () => ({
  type: types.CLEAR_ALBUM_SELECTION
});


// Songs

const songsLoading = () => ({
  type: types.SONGS_LOADING
});

const songsError = () => ({
  type: types.SONGS_ERROR
});

const songsLoaded = (songs) => ({
  type: types.SONGS_LOADED,
  songs
})

export const getSongs = (albumId) => async (dispatch) => {
  dispatch(songsLoading());
  try {
    const res = await fetch(`/songs?album_id=${albumId}`);
    const json = await res.json();
    dispatch(songsLoaded(json));
  } catch {
    dispatch(songsError());
  }
};
