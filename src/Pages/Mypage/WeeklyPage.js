import axios from 'axios';
// @ts-ignore
import { responseInterceptor } from 'http-proxy-middleware';
import React from 'react';
import { LOCAL_HOST } from '../../Lib/constant';
// import WeeklyAttendance from '../../System/Mypage/WeeklyAttendance';
import WeeklyData from './Weekly/WeeklyData';

const WeeklyPage = ({ weekend }) => {
  // 출근 api
  const onAttandacne = () => {
    axios
      .post(`${LOCAL_HOST}attendance`, {
        companyIndex: weekend.companyIndex,
        userIndex: weekend.userIndex
      })
      .then(response => {
        alert('출근');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  // 퇴근 api
  const onLeaving = () => {
    axios
      .patch(`${LOCAL_HOST}attendance`, {
        companyIndex: weekend.companyIndex,
        userIndex: weekend.userIndex
      })
      .then(response => {
        alert('퇴근');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <WeeklyData weekend={weekend} />
      {/* <WeeklyAttendance weekend={weekend} /> */}
      <p>이번 주 근무</p>
      <button onClick={onAttandacne}>출근</button>
      <button onClick={onLeaving}>퇴근</button>
    </>
  );
};

export default WeeklyPage;
