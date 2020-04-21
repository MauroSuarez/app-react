import { all } from 'redux-saga/effects';
import  loginSaga  from "../features/login/sagas";
import carSaga from "../features/cars/sagas";


export default function* rootSaga(getState) {
    yield all([
      loginSaga()
    ]);
  }
  