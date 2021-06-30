import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleInfo: 'schedule/ScheduleInfo',
  ScheduleEnter: 'schedule/ScheduleEnter',
  ScheduleEnterSuccess: 'schedule/ScheduleEnterSuccess',
  ScheduleOut: 'schedule/ScheduleOut'
};

export const actions = {
  scheduleInfo: scheduleData => ({ type: Types.ScheduleInfo, scheduleData }),
  scheduleEnter: index => ({ type: Types.ScheduleEnter, index }),
  scheduleEnterSuccess: enterTime => ({
    type: Types.ScheduleEnterSuccess,
    enterTime
  }),
  scheduleOut: index => ({ type: Types.ScheduleOut, index })
};

const INITIAL_STATE = {
  date: {}
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ScheduleInfo]: (state, action) => (state.date = action.scheduleData),
  [Types.ScheduleEnterSuccess]: (state, action) =>
    (state.date.enter = action.enterTime)
});

export default reducer;
