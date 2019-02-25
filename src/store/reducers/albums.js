import types from '../actions/types';

// Estado inicial
const initialState = {
  isLoading: false,
  albums: [],
  error: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ALBUMS_LOADING:
      // Activamos la flag de isLoading.
      // Eliminamos cualquier error anterior
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case types.ALBUMS_LOADED:
      // Almacenamos los articulos y reiniciamos
      // las flags
      return {
        ...state,
        isLoading: false,
        albums: action.albums,
        error: false
      }
    case types.ALBUMS_ERROR:
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
