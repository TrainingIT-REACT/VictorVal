import types from '../actions/types';

// Estado inicial
const initialState = {
  albums: [],
  songs: [],
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ALBUM_TO_HISTORIC:
      return {
        albums: [
          ...state.albums,
          action.album
        ]
      };
    case types.ADD_SONG_TO_HISTORIC:
      return {
        songs: [
          ...state.songs,
          action.song
        ]
      };
    default:
      return state;
  }
}

export default reducer;
