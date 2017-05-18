import { combineReducers } from "redux";
import { search } from "./search";
import { buildList, fetchReady } from "./list";
import { setSong, setAlbum } from "./player";

const list = combineReducers({
  items: buildList,
  fetchReady: fetchReady
});

const player = combineReducers({
  currentSong: setSong,
  playList: setAlbum
});

const rootReducer = combineReducers({
  search,
  list,
  player
});

export default rootReducer;
