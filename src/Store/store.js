import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "../Store/user";
// import { all } from "redux-saga/effects";

const reducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// function* rootSaga() {
//   yield all([searchSaga()]);
// }
// sagaMiddleware.run(rootSaga);

export default store;
