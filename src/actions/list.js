export const reciveItems = data => ({
  type: "RECIVE_ITEMS",
  payload: {
    albums: data.albums,
    tracks: data.tracks
  }
});

export const onPressSong = song => {
  return {
    type: "CHANGE_PLAYING_SONG",
    song
  };
};

export const onPressAlbum = album => ({
  type: "CHANGE_SELECTED_PLAYLISTS",
  album
});

export const fetchReady = value => ({
  type: "FETCH_READY",
  value
});
