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

export function changeExpand(state = false, action) {
  switch (action.type) {
    case "CHANGE_EXPAND_PLAYER":
      return !state;
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

export function setIndex(state = null, action) {
  switch (action.type) {
    case "SET_INDEX_SONG":
      return action.index;
      break;
    default:
      return state;
  }
}

export function loadSong(state = false, action) {
  switch (action.type) {
    case "LOADING_PLAYBACK_SONG":
      return action.value;
      break;
    default:
      return state;
  }
}

export function setDuration(state = null, action) {
  switch (action.type) {
    case "SET_PLAYBACK_DURATION":
      return action.time;
      break;
    default:
      return state;
  }
}

export function setPosition(state = null, action) {
  switch (action.type) {
    case "UPDATE_PLAYBACK_POSITION":
      return action.time;
      break;
    default:
      return state;
  }
}

export function setPlaying(state = false, action) {
  switch (action.type) {
    case "CHANGE_STATE_SONG":
      return action.value;
      break;
    default:
      return state;
  }
}

export function setPlayback(state = null, action) {
  switch (action.type) {
    case "SET_PLAYBACK_SONG":
      return action.playback;
      break;
    default:
      return state;
  }
}
