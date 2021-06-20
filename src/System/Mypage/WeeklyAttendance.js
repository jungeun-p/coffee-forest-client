import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LOCAL_HOST } from '../../Lib/constant';
import WeeklyWorklist from '../../Pages/Mypage/Weekly/WeeklyWorklist';

const WeeklyAttendance = ({ weekend }) => {
  const [attandacne, setAttandance] = useState({
    companyIndex: '',
    userIndex: ''
  });
  useEffect(() => {
    setAttandance(state => ({ ...state }));
  });
  // 출근 처리
  const onClick = () => {
    axios
      .post(`${LOCAL_HOST}attendance`, {
        companyIndex: weekend.companyIndex,
        userIndex: weekend.userIndex
      })
      .then(response => {
        alert('출근!');
      })
      .catch();
  };
  return <WeeklyWorklist onClick={onClick} />;
};

export default WeeklyAttendance;
