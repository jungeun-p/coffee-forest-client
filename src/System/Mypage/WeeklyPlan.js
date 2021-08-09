import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../Store/schedule';
import WeeklyPage from '../../Pages/Mypage/WeeklyPage';

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const weekend = useSelector(state => state.schedule.date);
  const schedulePlan = useSelector(state => state.schedule.date.scheduleInfo);
  console.log(schedulePlan);

  const LoadSchedule = () => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: '2021-08-09'
    };
    dispatch(scheduleActions.scheduleInfoRequest(index));
  };

  useEffect(() => {
    if (userIndex) {
      LoadSchedule();
    }
  }, []);

  // const weekend = useSelector(state => state.schedule.date);
  // const schedulePlan = useSelector(state => state.schedule.date.scheduleList);
  // console.log(weekend);
  // @ts-ignore
  return (
    <>
      {weekend && <WeeklyPage weekend={weekend} schedulePlan={schedulePlan} />}
    </>
  );
};

export default WeeklyPlan;
