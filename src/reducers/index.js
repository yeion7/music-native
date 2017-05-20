import { combineReducers } from "redux";
import { setItems } from "./search";
import {
  setSong,
  setAlbum,
  showPlayer,
  changeExpand,
  setPlayback,
  setIndex,
  loadSong,
  setPosition,
  setDuration,
  setPlaying
} from "./player";

const player = combineReducers({
  currentSong: setSong,
  playList: setAlbum,
  showPlayer: showPlayer,
  expanded: changeExpand,
  playbackInstance: setPlayback,
  index: setIndex,
  isLoading: loadSong,
  position: setPosition,
  duration: setDuration,
  isPlaying: setPlaying
});

const rootReducer = combineReducers({
  search: setItems,
  player
});

export default rootReducer;
