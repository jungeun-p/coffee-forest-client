import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkPlanList from '../../../Pages/Mypage/Monthly/Plan/WorkPlanList';
import { actions as scheduleActions } from '../../../Store/schedule';

const LoadMonthlyPlan = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const { scheduleMonthly } = useSelector(state => state.schedule);
  const LoadSchedule = () => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: '2021-08-17'
    };
    dispatch(scheduleActions.scheduleMonthlyRequest(index));
  };

  useEffect(() => {
    if (userIndex) {
      LoadSchedule();
      console.log(scheduleMonthly);
    }
  }, []);
  return <WorkPlanList />;
};

export default LoadMonthlyPlan;
