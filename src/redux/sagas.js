import { all } from 'redux-saga/effects';
import  loginSaga  from "../features/login/sagas";
import productSaga from "../features/home/sagas";
import registerSaga from "../features/register/sagas";
import userSaga from "../features/users/sagas";
import carSaga from "../features/cars/sagas";
import licenseSaga from "../features/license/sagas";


export default function* rootSaga(getState) {
    yield all([
      loginSaga(),
      productSaga(),
      registerSaga(),
      userSaga(),
      carSaga(),
      licenseSaga()
    ]);
  }
  