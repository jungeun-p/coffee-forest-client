import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ThisMonthCalendar from '../../../Components/Calendar/ThisMonthCalendar';
import LoadMonthlyPlan from './LoadMonthlyPlan';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../../Store/schedule';
import dayjs from 'dayjs';

const MonthlyPlan = () => {
  const dispatch = useDispatch();
  // const monthly = useSelector(state => state.schedule);
  const { status } = useSelector(state => state.auth);
  const now = dayjs();

  const LoadSchedule = date => {
    const today = now.format('YYYY-MM-DD');
    console.log(date);
    if (!date) {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate: `${today}`
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    } else {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate: `${date}`
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    }
  };

  useEffect(() => {
    LoadSchedule();
  }, [status]);

  return (
    <WorkMonthly>
      <ThisMonthCalendar LoadSchedule={LoadSchedule} />
      <LoadMonthlyPlan />
    </WorkMonthly>
  );
};

const WorkMonthly = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export default MonthlyPlan;
