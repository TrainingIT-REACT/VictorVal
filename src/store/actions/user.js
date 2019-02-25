import types from './types';


export const addUser = (user) => ({
  type: types.ADD_USER,
  user
});

export const removeUser = (user) => ({
  type: types.REMOVE_USER,
  user
});
