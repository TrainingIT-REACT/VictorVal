import types from '../actions/types';

// Estado inicial
const initialState = {
  user: null,
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_USER:
      return {
        user: action.user,
      };
    case types.REMOVE_USER:
      return {
        user: null,
      };
    default:
      return state;
  }
}

export default reducer;
