import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "../Store/user";

const reducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export default store;
