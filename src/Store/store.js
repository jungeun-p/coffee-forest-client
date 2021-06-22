import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../Store/user';
import { all } from 'redux-saga/effects';
import signSaga from './Saga/signSaga';

// reducer 합치기
const reducer = combineReducers({
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// saga
function* rootSaga() {
  yield all([signSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
