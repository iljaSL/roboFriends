import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers/reducers";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
