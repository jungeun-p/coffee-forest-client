import React from 'react';
import WeeklyData from './Weekly/WeeklyData';

const WeeklyPage = ({ weekend }) => {
  return (
    <>
      <WeeklyData weekend={weekend} />
    </>
  );
};

export default WeeklyPage;
