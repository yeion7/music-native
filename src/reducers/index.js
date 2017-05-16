import { combineReducers } from "redux";
import { search } from "./search";

console.log("search reducer", search);

const rootReducer = combineReducers({
  search
});

export default rootReducer;
