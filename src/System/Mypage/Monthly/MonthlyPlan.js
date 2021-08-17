import React, { useEffect } from 'react';
import styled from 'styled-components';
import ThisMonthCalendar from '../../../Components/Calendar/ThisMonthCalendar';
import LoadMonthlyPlan from './LoadMonthlyPlan';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../../Store/schedule';

const MonthlyPlan = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);

  const LoadSchedule = day => {
    if (!day) {
    } else {
      const index = {
        userIndex: userIndex,
        companyIndex: companyIndex,
        startDate: `2021-08-${day < 10 ? '0' + day : day}`
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    }
  };
  useEffect(() => {
    LoadSchedule();
  }, []);
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
