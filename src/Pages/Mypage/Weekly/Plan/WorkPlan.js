import React from 'react';
import styled from 'styled-components';
import WorkAddSchedule from './WorkAddSchedule';
import WorkAttendance from './WorkAttendance';

const WorkPlan = ({
  onAttandacne,
  onLeaving,
  schedulePlan,
  enter,
  sendSchedule,
  onChange,
  event
}) => {
  return (
    <>
      <WorkPlanWrapper>
        <WorkPlanTitle>이번 주 근무</WorkPlanTitle>
      </WorkPlanWrapper>
      <button onClick={onAttandacne}>출근</button>
      <button onClick={onLeaving}>퇴근</button>
      <WorkAttendance schedulePlan={schedulePlan} enter={enter} />
      <WorkAddSchedule
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
      />
    </>
  );
};

const WorkPlanWrapper = styled.div``;
const WorkPlanTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #1ca953;
  font-weight: 700;
`;

export default WorkPlan;
