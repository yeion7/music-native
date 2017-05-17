import { combineReducers } from "redux";
import { search } from "./search";
import { list } from "./list";

const rootReducer = combineReducers({
  search,
  list
});

export default rootReducer;
