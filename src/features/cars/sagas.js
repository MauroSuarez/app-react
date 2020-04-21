import { call, put, takeEvery } from "redux-saga/effects";
import { ActionsTypes, Actions } from "./actions";
import {
  saveCars,
  getCars,
  updateCars,
  getBrands
} from "../../api/CarsService";
import { getUser } from "../../api/LoginService";

function* carWorker(action) {
  try {
    debugger
    const data = {
      brand: action.request.brand,
      year: action.request.year,
      model: action.request.model,
      version: action.request.version,
      gnc: action.request.gnc,
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
        const car = yield call(getCars, data.user_id);
        data.id = car[0].id;
        yield call(updateCars, data);
      } else {
        yield call(saveCars, data);
      }

      yield put(Actions.carSuccess(data));
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

function* getCarWorker(action) {
  try {
    debugger;
    const car = yield call(getCars, action.request);
    if (car.length !== 0) {
      yield put(Actions.getCarSuccess(car[0]));
    }
  } catch (e) {
    Actions.carError("Ha ocurrido un error en el sistema, intente mas tarde.");
  }
}

function* getBrandsWorker() {
  try {
    const brands = yield call(getBrands);
    if (brands.length !== 0) {
      yield put(Actions.getBrandSuccess(brands));
    }
  } catch (e) {
    Actions.carError("Ha ocurrido un error en el sistema, intente mas tarde.");
  }
}

function* carSaga() {
  yield takeEvery(ActionsTypes.CAR_REQUEST, carWorker);
  yield takeEvery(ActionsTypes.GET_CAR_REQUEST, getCarWorker);
  yield takeEvery(ActionsTypes.GET_BRAND_REQUEST, getBrandsWorker);
}

export default carSaga;
