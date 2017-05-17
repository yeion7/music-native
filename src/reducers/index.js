import { combineReducers } from "redux";
import { search } from "./search";
import { buildList, setSong, fetchReady } from "./list";

const list = combineReducers({
  items: buildList,
  currentSong: setSong,
  fetchReady: fetchReady
});

const rootReducer = combineReducers({
  search,
  list
});

export default rootReducer;
