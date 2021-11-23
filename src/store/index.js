import { createStore, compose, combineReducers } from "redux";

import { appReducer } from "./reducer";

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
