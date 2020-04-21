import { call, put, takeEvery } from "redux-saga/effects";
import { ActionsTypes, Actions } from "./actions";
import { saveUserInfo, getUserInfo,updateUserInfo } from "../../api/UserService";
import { getUser } from "../../api/LoginService";

function* userWorker(action) {
  try {
    const data = {
      name: action.request.name,
      surName: action.request.surName,
      dni: action.request.dni,
      date: action.request.date,
      street: action.request.street,
      number: action.request.number,
      province: action.request.province,
      localtion: action.request.localtion,
      cp: action.request.cp,
      username: action.request.username,
      password: action.request.password,
      update: action.request.update,
      user_id: "",
      id:""
    };
    debugger;
    const user = yield call(getUser, data);
    if (user.length !== 0) {
      data.user_id = user[0].id;
      if(data.update){
        const user = yield call(getUserInfo, data.user_id);
        data.id = user[0].id;
        yield call(updateUserInfo, data);
      }else{
        yield call(saveUserInfo, data);
      }
      
      yield put(Actions.userSuccess(data));
    } else {
      yield put(
        Actions.userError(
          "Ha ocurrido un error al intentar guardar los datos personales"
        )
      );
    }
  } catch (e) {
    Actions.userError("Ha ocurrido un error en el sistema, intente mas tarde.");
  }
}

function* getUserWorker(action) {
  try {
    const user = yield call(getUserInfo, action.request);
    if (user.length !== 0) {
      yield put(Actions.getUserSuccess(user[0]));
    }
  } catch (e) {
    Actions.userError("Ha ocurrido un error en el sistema, intente mas tarde.");
  }
}

function* userSaga() {
  yield takeEvery(ActionsTypes.USER_REQUEST, userWorker);
  yield takeEvery(ActionsTypes.GET_USER_REQUEST, getUserWorker);
}

export default userSaga;
