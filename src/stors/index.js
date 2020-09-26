import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducer/index";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,composeEnhancers(applyMiddleware(thunk))
);
//const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
