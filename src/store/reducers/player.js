import types from '../actions/types';


const initialState = {
  playlist: []
}

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
      const newPlayList = [...state.playlist];
      const index = newPlayList.findIndex(song => {
        console.log("-----")
        console.log(song.id)
        console.log(action.song.id)
        return song.id === action.song.id
      });
      console.log(">>>> reducer remove")
      console.log(index)
      console.log(newPlayList[index])
      newPlayList.splice(index, 1);
      return {
        playlist: newPlayList
      }
      // return {
      //   playlist: [
      //     ...state.playlist.slice(0, index),
      //     ...state.playlist[index],
      //     ...state.playlist.slice(index + 1)
      //   ]
      // }

    case types.CLEAR_SONGS_FROM_PLAYER:
      return {
        playlist: []
      }

    default:
      return state;
  }
}

export default reducer;
