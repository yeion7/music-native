export function buildList(
  state = {
    albums: [],
    tracks: []
  },
  action
) {
  switch (action.type) {
    case "RECIVE_ITEMS":
      return {
        tracks: action.payload.tracks,
        albums: action.payload.albums
      };
      break;
    default:
      return state;
  }
}

export function fetchReady(state = false, action) {
  switch (action.type) {
    case "FETCH_READY":
      return action.value;
      break;
    default:
      return state;
  }
}

export function setSong(state = {}, action) {
  switch (action.type) {
    case "CHANGE_PLAYING_SONG":
      return action.song;
      break;
    default:
      return state;
  }
}
