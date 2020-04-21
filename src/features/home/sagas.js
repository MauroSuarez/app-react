import {call, put, takeEvery } from "redux-saga/effects";
import {
    ActionsTypes,
    Actions
  } from './actions';
import {
  getAll,
  deleteProduct,
  saveProduct,
  updateProduct
} from '../../api/ProductService'

function* productWorker(action) {
  try {
    const list = yield call(getAll)
    yield put(Actions.productRespose(list))
  } catch (e) {
    console.log(e);
  }
}

function* productDelteWorker(action) {
  try {
    yield call (deleteProduct,action.request)
    const list = yield call(getAll)
    yield put(Actions.productRespose(list))
  } catch (e) {
    console.log(e);
  }
}

function* productAddWorker(action) {
  try {
  
    const request = {
      descripcion:action.request.descripcion,
      precio:action.request.precio,
      categoria:action.request.categoria,
      cantidad:action.request.cantidad
    }
    yield call (saveProduct,request);
    yield put(Actions.setVisible(false));
    yield put(Actions.clearAll());
    const list = yield call(getAll);
    yield put(Actions.productRespose(list));
  } catch (e) {
    console.log(e);
  }
}

function* productUpdateWorker(action) {
  try {
  
    const request = {
      id:action.request.id,
      descripcion:action.request.descripcion,
      precio:action.request.precio,
      categoria:action.request.categoria,
      cantidad:action.request.cantidad
    }
    yield call (updateProduct,request);
    yield put(Actions.setVisible(false));
    yield put(Actions.setUpdate(false));
    yield put(Actions.clearAll());
    const list = yield call(getAll);
    yield put(Actions.productRespose(list));
  } catch (e) {
    console.log(e);
  }
}

function* productSaga() {
  yield takeEvery(ActionsTypes.PRODUCT_REQUEST, productWorker);
  yield takeEvery(ActionsTypes.PRODUCT_DELETE, productDelteWorker);
  yield takeEvery(ActionsTypes.PRODUCT_ADD, productAddWorker);
  yield takeEvery(ActionsTypes.PRODUCT_UPDATE, productUpdateWorker);
}

export default productSaga;
