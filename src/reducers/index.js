import { combineReducers } from "redux";
import { search } from "./search";
import { buildList, fetchReady } from "./list";
import { setSong, setAlbum, showPlayer } from "./player";

const list = combineReducers({
  items: buildList,
  fetchReady: fetchReady
});

const player = combineReducers({
  currentSong: setSong,
  playList: setAlbum,
  showPlayer: showPlayer
});

const rootReducer = combineReducers({
  search,
  list,
  player
});

export default rootReducer;
