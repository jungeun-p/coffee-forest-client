// @ts-ignore
import React from 'react';
import styled from 'styled-components';
import WorkData from './Weekly/Data/WorkData';
import WorkLoad from './Weekly/Load/WorkLoad';
import WorkPlan from './Weekly/Plan';

const WeeklyPage = ({ weekend, schedulePlan }) => {
  return (
    <WorkWeekly>
      <WorkData weekend={weekend} />
      <WorkList>
        <WorkLoad schedulePlan={schedulePlan} weekend={weekend} />
        <WorkPlan schedulePlan={schedulePlan} weekend={weekend} />
      </WorkList>
    </WorkWeekly>
  );
};

const WorkWeekly = styled.div`
  @media all and (min-width: 768px) {
    /* max-width: 80vw; */
  }
  /* @media (min-width: 0px) {
    min-width: 80vw;
  } */
`;

const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export default WeeklyPage;
