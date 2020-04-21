import { call, put, takeEvery } from "redux-saga/effects";
import { ActionsTypes, Actions } from "./actions";
import { saveLicense, getLicense, updateLicense } from "../../api/LicenseService";
import { getUser } from "../../api/LoginService";

function* licenseWorker(action) {
  try {
    
    const data = {
      dorso: action.request.dorso,
      frente: action.request.frente,
      username: action.request.username,
      password: action.request.password,
      update: action.request.update,
      user_id: "",
      id: ""
    };
    const user = yield call(getUser, data);
    if (user.length !== 0) {
      data.user_id = user[0].id;
      if (data.update) {
        const license = yield call(getLicense, data.user_id);
        data.id = license[0].id;
        yield call(updateLicense, data);
      } else {
        yield call(saveLicense, data);
      }

      yield put(Actions.licenseSuccess(data));
    } else {
      yield put(
        Actions.carError(
          "Ha ocurrido un error al intentar guardar los datos personales"
        )
      );
    }
  } catch (e) {
    Actions.carError("Ha ocurrido un error en el sistema, intente mas tarde.");
  }
}

function* getLicenseWorker(action) {
  try {
    const license = yield call(getLicense, action.request);
    if (license.length !== 0) {
      yield put(Actions.getCarSuccess(license[0]));
    }
  } catch (e) {
    Actions.carError("Ha ocurrido un error en el sistema, intente mas tarde.");
  }
}

function* licenseSaga() {
  yield takeEvery(ActionsTypes.LICENSE_REQUEST, licenseWorker);
  yield takeEvery(ActionsTypes.GET_LICENSE_REQUEST, getLicenseWorker);
}

export default licenseSaga;
