import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import userReducer from './user';
import tokenReducer from './token';
import validReducer from './validation';
import scheduleReducer from './schedule';
import enrollReducer from './enroll';
import adminReducer from './admin';
import employeeReducer from './employee';
import workReducer from './work';
import companyReducer from './company';
import { all } from 'redux-saga/effects';
import signSaga from './Saga/signSaga';
import validSaga from './Saga/validSaga';
import enterSaga from './Saga/enterSaga';
import enrollSaga from './Saga/enrollSaga';
import adminSaga from './Saga/adminSaga';
import employeeSaga from './Saga/employeeSaga';
import scheduleSaga from './Saga/scheduleSaga';
import workSaga from './Saga/workSaga';
import profileSaga from './Saga/profileSaga';
import companySaga from './Saga/companySaga';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: ['token']
  // whiteList: ['']
  // blackList 제외
};
// reducer 합치기
const reducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  validation: validReducer,
  schedule: scheduleReducer,
  enroll: enrollReducer,
  admin: adminReducer,
  employee: employeeReducer,
  work: workReducer,
  company: companyReducer
});

// persistReducer(persistConfig, reducer);

const enhenceReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  // reducer,
  enhenceReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

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
    workSaga(),
    profileSaga(),
    companySaga()
  ]);
}
sagaMiddleware.run(rootSaga);

export { store, persistor };
