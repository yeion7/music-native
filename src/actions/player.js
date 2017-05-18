import { fetchSongs } from "../utils/api";
import Expo, { Audio } from "expo";

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

export const setIndex = index => ({
  type: "SET_INDEX_SONG",
  index
});

export const setPlayback = songInstance => ({
  type: "SET_PLAYBACK_SONG",
  playback: songInstance
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
    const sound = new Audio.Sound({ source: song.preview_url });

    dispatch(setPlayback(sound));
    dispatch(onPressSong(song));
    dispatch(setIndex(song.track_number));
    dispatch(showPlayer(true));
  };
}
