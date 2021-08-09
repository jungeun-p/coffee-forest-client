import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeeklyPage from '../../../Pages/Mypage/WeeklyPage';
import { actions as scheduleActions } from '../../../Store/schedule';

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const weekend = useSelector(state => state.schedule.date);
  const schedulePlan = useSelector(state => state.schedule.date.scheduleInfo);
  console.log(schedulePlan);
  // 주간 일정 리스트 api
  const LoadSchedule = useCallback(() => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: '2021-08-09'
    };
    dispatch(scheduleActions.scheduleInfoRequest(index));
  }, [dispatch]);

  useEffect(() => {
    if (userIndex) {
      LoadSchedule();
    }
  }, []);

  return (
    <>
      {weekend && schedulePlan && (
        <WeeklyPage weekend={weekend} schedulePlan={schedulePlan} />
      )}
    </>
  );
};

export default WeeklyPlan;
