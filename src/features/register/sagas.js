import { call,put, takeEvery } from "redux-saga/effects";
import { ActionsTypes, Actions } from "./actions";
import { saveUser,getUser } from "../../api/LoginService";


function* registerWorker(action) {
  try {
    const data = {
      username: action.request.username,
      password: action.request.pass,
      email: action.request.email
    };

    const user = yield call(getUser,data)
    if(user.length == 0){
      yield call(saveUser, data);
      yield put(Actions.registerSuccess(data));
    }else{
      yield put(
        Actions.registerError("El usuario ya existe")
      );
    }
    

  } catch (e) {
    Actions.registerError(
      "Ha ocurrido un error en el sistema, intente mas tarde."
    );
  }
}
function* registerSaga() {
  yield takeEvery(ActionsTypes.REGISTER_REQUEST, registerWorker);
}

export default registerSaga;
