import types from '../actions/types';

// Estado inicial
const initialState = {
  selectedAlbum: null,
  // songs
  isLoading: false,
  songs: [],
  error: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_SELECTED_ALBUM:
      return {
        ...state,
        selectedAlbum: action.album,
      };
    // case types.ADD_ALBUM_SONGS:
    //   return {
    //     ...state,
    //     songs: action.songs,
    //   };
    case types.CLEAR_ALBUM_SELECTION:
      return {
        selectedAlbum: null,
        songs: [],
      }

    case types.SONGS_LOADING:
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.SONGS_LOADED:
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        songs: action.songs,
        error: false
      }
    case types.SONGS_ERROR:
      // Desactivamos la flag de carga y
      // activamos la de error
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
