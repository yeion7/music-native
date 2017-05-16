import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import logger from "redux-logger";

const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export default store;
