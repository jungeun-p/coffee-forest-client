import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WeeklyPage from '../../Pages/Mypage/WeeklyPage';

const WeeklyPlan = () => {
  const location = useLocation();
  const weekends = location.state.data;
  // 추후에 redux로 교체하기
  const [weekend, setWeekend] = useState({
    year: '',
    month: '',
    weekNumber: '',
    weekStartDate: '',
    weekEndDate: '',
    name: '',
    position: '',
    companyIndex: '',
    userIndex: ''
  });

  useEffect(() => {
    setWeekend(weekends);
    console.log(weekends);
  });

  // @ts-ignore
  return <WeeklyPage weekend={weekend} />;
};

export default WeeklyPlan;
