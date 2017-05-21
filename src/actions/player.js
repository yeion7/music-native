import { fetchSongs } from "../utils/api";
import Expo, { Audio } from "expo";

export const onSetSong = song => ({
  type: "SET_SONG",
  payload: {
    ...song
  }
});

export const onSetPlayList = songs => ({
  type: "SET_PLAYLIST",
  payload: songs
});

export const changePlayerStatus = status => ({
  type: "SET_PLAYER_STATUS",
  payload: {
    ...status
  }
});

export function fecthAlbum(url) {
  return async (dispatch, getState) => {
    const songs = await fetchSongs(url);

    dispatch(onSetPlayList(songs));
    dispatch(
      changePlayerStatus({
        showPlayer: true,
        expand: true
      })
    );
  };
}
