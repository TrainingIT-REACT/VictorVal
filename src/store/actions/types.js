const actions = [
  // Albums
  "ALBUMS_LOADING",
  "ALBUMS_LOADED",
  "ALBUMS_ERROR",

  // "GET_ALBUM_BY_ID",

  // Album
  "ADD_SELECTED_ALBUM",
  // "ADD_ALBUM_SONGS",
  "CLEAR_ALBUM_SELECTION",

  "SONGS_LOADING",
  "SONGS_LOADED",
  "SONGS_ERROR",

  // Player
  "ADD_SONG_TO_PLAYER",
  "REMOVE_SONG_FROM_PLAYER",
  "CLEAR_SONGS_FROM_PLAYER",

  // Historical
  "ADD_ALBUM_TO_HISTORIC",
  "ADD_SONG_TO_HISTORIC",

  // User
  "ADD_USER",
  "REMOVE_USER",
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
