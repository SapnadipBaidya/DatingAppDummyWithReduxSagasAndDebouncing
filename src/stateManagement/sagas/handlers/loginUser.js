import { call, put, takeLatest} from "redux-saga/effects";
import axios from "axios";
function* handleLoginUser() {//this is worker saga

  async function loginUserDo(){
   
   // console.log("api is getting page number "+pageNumber);
  const url = `http://localhost:3000/login`;
  try {
      const response = await axios.post(url);
      return response;
    } catch (error) {
      return error;
    }
  }
  try {
    //call ->  put  // both of this works togather
    
    const loginUser = yield call(loginUserDo);
   // console.log("inside try");
    console.log(loginUser);
   // console.log("inside try");

    yield put({ type: "LOGIN_USER_SUCCESS", loginUser: loginUser });
    console.log("loginUsers "+loginUser);
    //put is dispatching a new action with the result from the previous yield. here (users) is the result from previous yield
  } catch (err) {
    console.log("inside err");
    console.log(err);
    yield put({ type: "LOGIN_USER_FAILED", message: err.message });
  }
}
console.log("hello above inside watcherAdduserSaga generator");


function* watcherLoginuserSaga() {//this is watcher saga
  console.log("hello inside watcherAdduserSaga above yield");
  yield takeLatest("LOGIN_USER_REQUESTED", handleLoginUser);  //watcher constantly checks for GET_TO_CALL_USERS_FAILED to come in , once it came then it runs the function

  console.log("hello inside watcherAdduserSaga below yeild");
}

export default watcherLoginuserSaga;
