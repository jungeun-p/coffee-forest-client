import React from 'react';
import styled from 'styled-components';
import ThisMonthCalendar from '../../../Components/Calendar/ThisMonthCalendar';
import LoadMonthlyPlan from './LoadMonthlyPlan';

const MonthlyPlan = () => {
  return (
    <WorkMonthly>
      <ThisMonthCalendar />
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
