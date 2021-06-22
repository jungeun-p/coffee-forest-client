import React from 'react';
import WorkDateInfo from './WorkDateInfo';
import WorkMypage from './WorkMypage';

const WorkData = ({ weekend }) => {
  return (
    <>
      <p>날짜 정보</p>
      <WorkDateInfo weekend={weekend} />
      <p>마이 페이지</p>
      <WorkMypage weekend={weekend} />
    </>
  );
};

export default WorkData;
