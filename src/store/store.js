import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import createDebounce from "redux-debounced";

import logger from "redux-logger";

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(createDebounce(), thunk, logger)
);

export default store;
