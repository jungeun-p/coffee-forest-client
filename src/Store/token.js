import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  TokenInfo: 'token/TokenInfo',
  GetAccessToken: 'token/GetAccessToken'
};

export const actions = {
  tokenInfo: userTokenInfo => ({ type: Types.TokenInfo, userTokenInfo }),
  getAccesstoken: newTokenInfo => ({ type: Types.GetAccessToken, newTokenInfo })
};

const INITIAL_STATE = {
  tokenInfo: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.TokenInfo]: (state, action) =>
    (state.tokenInfo = action.userTokenInfo),
  [Types.GetAccessToken]: (state, action) =>
    (state.tokenInfo = action.newTokenInfo)
});

export default reducer;
