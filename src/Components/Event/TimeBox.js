import React from 'react';
import styled from 'styled-components';

const TimeBox = ({ time }) => {
  return (
    <TimeTitle>
      {time?.slice(0, 2) > 12
        ? `오후 0${time.slice(0, 2) - 12}:${time.slice(3, 5)}`
        : time.slice(0, 2) === '12'
        ? `오후 ${time.slice(0, 5)}`
        : `오전 ${time.slice(0, 5)}`}
    </TimeTitle>
  );
};

const TimeTitle = styled.div`
  width: 80px;
  height: 20px;
  background: #f3f3f3;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #232323;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-right: 10px; */
  margin-top: 10px;
`;
export default TimeBox;
