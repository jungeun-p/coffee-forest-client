import React from 'react';

const WeeklyWorklist = ({ onClick }) => {
  return (
    <div>
      <p>이번 주 근무</p>
      <button onClick={onClick}>출근</button>
    </div>
  );
};

export default WeeklyWorklist;
