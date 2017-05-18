import { fetchSongs } from "../utils/api";
import Expo, { Audio } from "expo";
import { error } from "../utils/error";

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

export const isLoadingSong = value => ({
  type: "LOADING_PLAYBACK_SONG",
  value
});

export const setPosition = time => ({
  type: "UPDATE_PLAYBACK_POSITION",
  time
});

export const setDuration = time => ({
  type: "SET_PLAYBACK_DURATION",
  time
});

export const setPlaying = value => ({
  type: "CHANGE_STATE_SONG",
  value
});

export function fecthAlbum(url) {
  return async (dispatch, getState) => {
    const songs = await fetchSongs(url);

    dispatch(onPressAlbum(songs));
    dispatch(showPlayer(true));
    dispatch(expandPlayer(true));
  };
}

export function handlePlayPause() {
  return async (dispatch, getState) => {
    const { player: { isPlaying, playbackInstance } } = getState();

    if (playbackInstance != null) {
      if (isPlaying) {
        playbackInstance.pauseAsync();
        dispatch(setPlaying(!isPlaying));
      } else {
        playbackInstance.playAsync();
        dispatch(setPlaying(!isPlaying));
      }
    }
  };
}

export function handleForward() {
  return async (dispatch, getState) => {
    const { player: { index, playList } } = getState();

    newIndex = index >= playList.length ? 0 : index;
    dispatch(playSong(playList[newIndex]));
  };
}

export function handleBack() {
  return async (dispatch, getState) => {
    const { player: { index, playList } } = getState();

    newIndex = index == 1 ? playList.length - 1 : index - 2;
    dispatch(playSong(playList[newIndex]));
  };
}

export function playSong(song) {
  return async (dispatch, getState) => {
    const { player: { playbackInstance, index } } = getState();

    if (playbackInstance !== null) {
      playbackInstance.unloadAsync();
      playbackInstance.setCallback(null);

      dispatch(setPlayback(null));
    }

    if (song.preview_url !== null) {
      const sound = new Audio.Sound({ source: song.preview_url });
      sound.setCallback(status => {
        if (status.isPlaying) {
          dispatch(setPosition(status.positionMillis));
        }

        if (status.isLoaded && !status.positionMillis) {
          sound.playAsync();
          dispatch(setPlaying(true));
          dispatch(isLoadingSong(false));
        }

        if (status.didJustFinish && index) {
          dispatch(handleForward());
        }

        if (status.didJustFinish && !index) {
          dispatch(showPlayer(false));
        }
      });

      sound.setCallbackPollingMillis(1000);

      sound.loadAsync().then(status => {
        dispatch(setDuration(status.durationMillis));
      });

      dispatch(setPlayback(sound));
      dispatch(onPressSong(song));
      dispatch(setIndex(song.track_number));
      dispatch(isLoadingSong(true));
      dispatch(showPlayer(true));
    } else {
      error("Canción sin URL");
    }
  };
}
