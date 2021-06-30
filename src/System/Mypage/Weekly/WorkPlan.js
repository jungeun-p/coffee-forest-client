import React from 'react';
import axios from 'axios';
import { LOCAL_HOST } from '../../../Lib/constant';
import WorkAttandance from '../../../Pages/Mypage/Weekly/Plan/WorkAttandance';

const WorkPlan = ({ schedulePlan, weekend }) => {
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
      <button onClick={onAttandacne}>출근</button>
      <button onClick={onLeaving}>퇴근</button>
      <WorkAttandance schedulePlan={schedulePlan} />
    </>
  );
};

export default WorkPlan;
