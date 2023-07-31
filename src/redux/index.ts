import {
  legacy_createStore as createStote,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { countReducer, nameReducer } from "./action";

const reducer = combineReducers({ countReducer, nameReducer });

const store = createStote(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
