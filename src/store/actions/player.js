import types from './types';


export const addSongToPlayer = (song) => ({
  type: types.ADD_SONG_TO_PLAYER,
  song
});

export const removeSongFromPlayer = (song) => ({
  type: types.REMOVE_SONG_FROM_PLAYER,
  song
});

export const clearSongsFromPlayer = () => ({
  type: types.CLEAR_SONGS_FROM_PLAYER
});
