export const reciveItems = data => ({
  type: "RECIVE_ITEMS",
  payload: {
    albums: data.albums,
    tracks: data.tracks
  }
});

export const fetchReady = value => ({
  type: "FETCH_READY",
  value
});
