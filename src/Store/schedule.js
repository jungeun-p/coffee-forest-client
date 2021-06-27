import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleInfo: 'schedule/ScheduleInfo'
};

export const actions = {
  scheduleInfo: scheduleData => ({ type: Types.ScheduleInfo, scheduleData })
};

const INITIAL_STATE = {
  date: {}
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ScheduleInfo]: (state, action) => (state.date = action.scheduleData)
});

export default reducer;
