import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../../../../Components/Button';
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
      <WorkPlanList>
        <WorkAttendance
          schedulePlan={schedulePlan}
          enter={enter}
          sendSchedule={sendSchedule}
          onChange={onChange}
          event={event}
        />
      </WorkPlanList>
    </>
  );
};

const WorkPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
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

const WorkPlanList = styled.div`
  background-color: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 0 20px;
  margin-bottom: 40px;
`;

export default WorkPlan;
