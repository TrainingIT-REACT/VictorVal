import types from '../actions/types';

// Estado inicial
const initialState = {
  playlist: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_SONG_TO_PLAYER:
      return {
        playlist: [
          ...state.playlist,
          action.song,
        ]
      };
    case types.REMOVE_SONG_FROM_PLAYER:
      return {
        playlist: [
          ...state.playlist.slice(0, action.index),
          ...state.playlist[action.index],
          ...state.playlist.slice(action.index + 1)
        ]
      }
    case types.CLEAR_SONGS_FROM_PLAYER:
      return {
        playlist: []
      }
    default:
      return state;
  }
}

export default reducer;
