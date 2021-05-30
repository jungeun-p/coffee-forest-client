import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../Hooks/redux-helper";

export const Types = {
  SetValue: "user/SetValue",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
};

const INITIAL_STATE = {
  email: "",
  pw: "",
  name: "",
  phone: "",
  address: "",
  position: "",
  companyName: "",
  companyAddress: "",
  businessNumber: "",
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
