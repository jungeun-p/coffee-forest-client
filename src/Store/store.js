import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user';
import validReducer from './validation';
import scheduleReducer from './schedule';
import { all } from 'redux-saga/effects';
import signSaga from './Saga/signSaga';
import validSaga from './Saga/validSaga';

// reducer 합치기
const reducer = combineReducers({
  user: userReducer,
  validation: validReducer,
  schedule: scheduleReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// saga
function* rootSaga() {
  yield all([signSaga(), validSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
