import { call, put,  takeLatest } from "redux-saga/effects";
import axios from "axios";
function* handleLoginUsers() {//this is worker saga

  async function registerUsersDo(){
   
   // console.log("api is getting page number "+pageNumber);
  const url = `http://localhost:3000/registerUsers`;
  try {
      const response = await axios.post(url);
      return response;
    } catch (error) {
      console.log("error here");
      console.log(error);
      return error;
    }
  }
  try {
    //call ->  put  // both of this works togather
    
    const registerUser = yield call(registerUsersDo);
    // console.log("inside try");
    console.log(registerUser);
    // console.log("inside try");

    yield put({ type: "Register_user_SUCCESS", registerUser: registerUser });
    console.log("registerUser "+registerUser);
    //put is dispatching a new action with the result from the previous yield. here (users) is the result from previous yield
  } catch (err) {
    console.log("inside err");
    console.log(err);
    yield put({ type: "Register_user_FAILED", message: err.message });
  }
}
console.log("hello above inside watcherAdduserSaga generator");


function* watcherRegisterUser() {//this is watcher saga
  console.log("hello inside watcherRegisterUser above yield");
  yield takeLatest("REGISTER_USER_REQUESTED", handleLoginUsers);  //watcher constantly checks for GET_TO_CALL_USERS_FAILED to come in , once it came then it runs the function

  console.log("hello inside watcherRegisterUser below yeild");
}

export default watcherRegisterUser;
