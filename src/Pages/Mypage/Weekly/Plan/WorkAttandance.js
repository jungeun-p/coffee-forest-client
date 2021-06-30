import React from 'react';

const WorkAttandance = ({ schedulePlan }) => {
  console.log(schedulePlan);
  //const value = schedulePlan[Object.values(schedulePlan)[0]];
  const startTime = Object.values(schedulePlan)[0][0].startTime;
  const endTime = Object.values(schedulePlan)[0][0].endTime;
  return (
    <div>
      <p>출근 시간 : {startTime || '08:30'}</p>
      <p>퇴근 시간 : {endTime || '05: 30'}</p>
    </div>
  );
};

export default WorkAttandance;
