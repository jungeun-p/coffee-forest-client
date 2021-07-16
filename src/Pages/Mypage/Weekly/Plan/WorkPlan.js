import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../../../../Components/Button';
import { ThisWeekCalendar } from '../../../../Components/Calendar';
import { TitleB } from '../../../../Components/Common';

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
    <WorkWrapperList>
      {/* 이번 주 근무 타이틀 */}
      <WorkPlanWrapper>
        <TitleB>이번 주 근무</TitleB>
        <ButtonWrapper>
          <ButtonCommonS onClick={onAttandacne} title="출근" />
          <ButtonCommonS onClick={onLeaving} title="퇴근" />
        </ButtonWrapper>
      </WorkPlanWrapper>
      {/* 이번 주 근무 일정 */}
      <WorkPlanList>
        <ThisWeekCalendar
          schedulePlan={schedulePlan}
          enter={enter}
          sendSchedule={sendSchedule}
          onChange={onChange}
          event={event}
        />
      </WorkPlanList>
    </WorkWrapperList>
  );
};

const WorkWrapperList = styled.div`
  @media all and (min-width: 768px) {
    /* width: 60vw; */
  }
`;

const WorkPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const WorkPlanList = styled.div`
  background-color: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 0 25px;
  margin-bottom: 40px;
`;

export default WorkPlan;
