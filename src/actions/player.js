import { fetchSongs } from "../utils/api";

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

export function fecthAlbum(url) {
  return async (dispatch, getState) => {
    const songs = await fetchSongs(url);

    dispatch(onPressAlbum(songs));
  };
}
