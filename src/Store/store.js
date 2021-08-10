import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user';
import validReducer from './validation';
import scheduleReducer from './schedule';
import enrollReducer from './enroll';
import adminReducer from './admin';
import employeeReducer from './employee';
import workReducer from './work';
import { all } from 'redux-saga/effects';
import signSaga from './Saga/signSaga';
import validSaga from './Saga/validSaga';
import enterSaga from './Saga/enterSaga';
import enrollSaga from './Saga/enrollSaga';
import adminSaga from './Saga/adminSaga';
import employeeSaga from './Saga/employeeSaga';
import scheduleSaga from './Saga/scheduleSaga';
import workSaga from './Saga/workSaga';

// reducer 합치기
const reducer = combineReducers({
  user: userReducer,
  validation: validReducer,
  schedule: scheduleReducer,
  enroll: enrollReducer,
  admin: adminReducer,
  employee: employeeReducer,
  work: workReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// saga
function* rootSaga() {
  yield all([
    signSaga(),
    validSaga(),
    enterSaga(),
    enrollSaga(),
    adminSaga(),
    employeeSaga(),
    scheduleSaga(),
    workSaga()
  ]);
}
sagaMiddleware.run(rootSaga);

export default store;
