import React from 'react';

const WorkAttendance = ({ schedulePlan, enter }) => {
  console.log(enter);
  // const value = schedulePlan[Object.values(schedulePlan)[0]];
  // const startTime = Object.values(schedulePlan)[0][0].startTime;
  // const endTime = Object.values(schedulePlan)[0][0].endTime;
  return (
    <div>
      <p>출근 시간 : {enter?.startTime || '8:30'}</p>
      <p>퇴근 시간 : {enter?.endTime || '16:40'} </p>
    </div>
  );
};

export default WorkAttendance;
