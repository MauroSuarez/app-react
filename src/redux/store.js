import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import { createLogger } from "redux-logger";
import { loadState } from "./localStorage"

const persistedState = loadState();
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development"
});
const middlewares = [thunk, sagaMiddleware, routeMiddleware, loggerMiddleware];
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;


const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);
const store = createStoreWithMiddleware(combineReducers({ ...reducers, router: connectRouter(history), }), persistedState);

sagaMiddleware.run(rootSaga);
export { store, history };
