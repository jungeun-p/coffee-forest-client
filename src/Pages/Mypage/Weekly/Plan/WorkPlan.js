import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../../../../Components/Button';
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
        <ButtonWrapper>
          <ButtonCommonS onClick={onAttandacne} title="출근" />
          <ButtonCommonS onClick={onLeaving} title="퇴근" />
        </ButtonWrapper>
      </WorkPlanWrapper>
      <WorkAttendance schedulePlan={schedulePlan} enter={enter} />
      <WorkAddSchedule
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
      />
    </>
  );
};

const WorkPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const WorkPlanTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #1ca953;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default WorkPlan;
