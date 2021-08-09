import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../Store/schedule';
import WeeklyPage from '../../Pages/Mypage/WeeklyPage';

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const { date } = useSelector(state => state.schedule);
  const schedulePlan = date?.scheduleInfo;

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
  return <>{date && <WeeklyPage date={date} schedulePlan={schedulePlan} />}</>;
};

export default WeeklyPlan;
