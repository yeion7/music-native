export function list(
  state = {
    albums: [],
    tracks: [],
    fetchReady: false
  },
  action
) {
  switch (action.type) {
    case "RECIVE_ITEMS":
      return {
        tracks: action.payload.tracks,
        albums: action.payload.albums,
        fetchReady: true
      };
      break;
    default:
      return state;
  }
}
