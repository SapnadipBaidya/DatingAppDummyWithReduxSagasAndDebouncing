
import loginUserReducer from "./loginUserReducer";
import registerUserReducer from "./registerUserReducer";

import { combineReducers } from "redux";
import commonClickReducer from "./commonsClicks";


const reducers = combineReducers({
  loginUserReducer:loginUserReducer,
  registerUserReducer:registerUserReducer,
  commonClickReducer:commonClickReducer
});

export default reducers;
