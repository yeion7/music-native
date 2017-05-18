import { fetchSongs } from "../utils/api";

export const onPressSong = song => {
  return {
    type: "CHANGE_PLAYING_SONG",
    song
  };
};

export const showPlayer = value => {
  return {
    type: "CHANGE_PLAYER_STATUS",
    value
  };
};

export const onPressAlbum = album => ({
  type: "CHANGE_SELECTED_PLAYLISTS",
  album
});

export const expandPlayer = value => ({
  type: "CHANGE_EXPAND_PLAYER",
  value
});

export function fecthAlbum(url) {
  return async (dispatch, getState) => {
    const songs = await fetchSongs(url);

    dispatch(onPressAlbum(songs));
    dispatch(showPlayer(true));
  };
}

export function playSong(song) {
  return async (dispatch, getState) => {
    dispatch(onPressSong(song));
    dispatch(showPlayer(true));
  };
}
