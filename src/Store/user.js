import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../Hooks/redux-helper";

export const Types = {
  SetValue: "user/SetValue",
  SignRequest: "user/SignRequest",
  SignSuccess: "user/SignSuccess",
  SignFail: "user/SignFail",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  signRequest: (user) => ({ type: Types.SignRequest, user }),
  signSuccess: (token) => ({ type: Types.SignSuccess, token }),
  signFail: () => ({ type: Types.SignFail }),
};

const INITIAL_STATE = {
  loading: false,
  payload: {
    token: "",
  },
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.SignRequest]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [Types.SignSuccess]: (state, action) => ({
    ...state,
    loading: false,
    payload: {
      token: action.payload.token,
    },
  }),
  [Types.SignFail]: (state, action) => ({
    ...state,
  }),
});

export default reducer;
