import types from '../actions/types';


const initialState = {
  selectedAlbum: null,
  // songs
  isLoading: false,
  songs: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case types.ADD_SELECTED_ALBUM:
      return {
        ...state,
        selectedAlbum: action.album,
      };

    case types.CLEAR_ALBUM_SELECTION:
      return {
        selectedAlbum: null,
        songs: [],
      }

    case types.SONGS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false
      };

    case types.SONGS_LOADED:
      return {
        ...state,
        isLoading: false,
        songs: action.songs,
        error: false
      }

    case types.SONGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }

    default:
      return state;
  }
}

export default reducer;
