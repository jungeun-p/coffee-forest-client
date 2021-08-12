import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import WeeklyPage from '../../../Pages/Mypage/WeeklyPage';
import { actions as scheduleActions } from '../../../Store/schedule';
import styled from 'styled-components';
import WorkData from '../../../Pages/Mypage/Weekly/Data/WorkData';
import WorkLoad from '../../../Pages/Mypage/Weekly/Load/WorkLoad';
import SaveWorkPlan from './SaveWorkPlan';
import functionWeek from '../../../Hooks/addThisWeek';

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const thisWeekDate = functionWeek();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const weekend = useSelector(state => state.schedule.date);
  console.log(weekend);

  // 주간 일정 리스트 api
  const LoadSchedule = useCallback(() => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: thisWeekDate[0]
    };
    dispatch(scheduleActions.scheduleInfoRequest(index));
  }, [dispatch]);

  useEffect(() => {
    if (userIndex) {
      LoadSchedule();
    }
  }, []);

  return (
    weekend && (
      <WorkWeekly>
        <WorkData weekend={weekend} />
        <WorkList>
          <WorkLoad weekend={weekend} />
          <SaveWorkPlan weekend={weekend} />
        </WorkList>
      </WorkWeekly>
    )
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

export default WeeklyPlan;
