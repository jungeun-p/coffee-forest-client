import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  TokenInfo: 'token/TokenInfo'
};

export const actions = {
  tokenInfo: userTokenInfo => ({ type: Types.TokenInfo, userTokenInfo })
};

const INITIAL_STATE = {
  tokenInfo: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.TokenInfo]: (state, action) => (state.tokenInfo = action.userTokenInfo)
});

export default reducer;
