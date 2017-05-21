import { combineReducers } from "redux";
import { setItems } from "./search";
import { setSong, setPlayList, setStatusPlayer } from "./player";

const player = combineReducers({
  song: setSong,
  playlist: setPlayList,
  status: setStatusPlayer
});

const rootReducer = combineReducers({
  search: setItems,
  player
});

export default rootReducer;
