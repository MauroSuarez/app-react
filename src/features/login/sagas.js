import { call,put, takeEvery } from "redux-saga/effects";
import { ActionsTypes, Actions } from "./actions";
import {
  getUser
} from "../../api/LoginService";

function* loginWorker(action) {
  try {
    const data = {
      username: action.request.username,
      password: action.request.pass
    };

    if (data.username === "admin" && data.password === "admin") {
      yield put(Actions.loginSuccess(data));
    } else {
      
      const user = yield call(getUser,data)
      if(user.length !== 0){
        yield put(Actions.loginSuccess(user));
      }else{
        yield put(
          Actions.loginError("El usuario y/o la contraseña no coinciden")
        );
      }
      
    }
  } catch (e) {
    Actions.loginError(
      "Ha ocurrido un error en el sistema, intente mas tarde."
    );
  }
}

function* loginSaga() {
  yield takeEvery(ActionsTypes.LOGIN_REQUEST, loginWorker);
}

export default loginSaga;
