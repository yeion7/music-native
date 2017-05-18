export function setSong(state = {}, action) {
  switch (action.type) {
    case "CHANGE_PLAYING_SONG":
      return action.song;
      break;
    default:
      return state;
  }
}

export function setAlbum(state = [], action) {
  switch (action.type) {
    case "CHANGE_SELECTED_PLAYLISTS":
      return action.album;
      break;
    default:
      return state;
  }
}

export function showPlayer(state = false, action) {
  switch (action.type) {
    case "CHANGE_PLAYER_STATUS":
      return action.value;
      break;
    default:
      return state;
  }
}
