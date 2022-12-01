import { all, fork } from "redux-saga/effects";
import watcherDeluserSaga from "./handlers/registerUser";
import watcherLoginUser from "./handlers/loginUser";


export default function* rootSaga() {
  yield all([watcherLoginUser,watcherDeluserSaga].map(fork));
}
//fork helps to run wathcers in a non blocking way //assigning each thread for each watcher

// all helps to run all the reducers parallely