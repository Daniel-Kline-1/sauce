import accessReducer from "./access";
import refreshReducer from "./refresh";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  accessReducer,
  refreshReducer,
  loggedReducer,
});

export default allReducers;
