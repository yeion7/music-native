export function setSong(state = {}, action) {
  switch (action.type) {
    case "SET_SONG":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function setPlayList(state = [], action) {
  switch (action.type) {
    case "SET_PLAYLIST":
      return action.payload;
    default:
      return state;
  }
}

export function setStatusPlayer(
  state = {
    showPlayer: false,
    expand: false,
    isLoading: false,
    isPlaying: false,
    position: null,
    duration: null
  },
  action
) {
  switch (action.type) {
    case "SET_PLAYER_STATUS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
